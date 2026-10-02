// Cloudflare Stream player (AppDraft account). Lazy-loads, 16:9, poster taken from the video.
const STREAM_CUSTOMER = 'ookdqw71wymhxobi';

interface StreamVideoProps {
  videoId: string;
  title: string;
  posterTime?: string;
}

export default function StreamVideo({ videoId, title, posterTime = '2s' }: StreamVideoProps) {
  const base = `https://customer-${STREAM_CUSTOMER}.cloudflarestream.com/${videoId}`;
  const poster = encodeURIComponent(`${base}/thumbnails/thumbnail.jpg?time=${posterTime}&height=720`);
  return (
    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-black">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <iframe
          src={`${base}/iframe?poster=${poster}`}
          title={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div>
    </div>
  );
}
