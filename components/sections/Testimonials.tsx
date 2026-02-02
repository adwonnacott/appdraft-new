const testimonials = [
  {
    quote: "Appdraft delivered our Salesforce implementation in 8 weeks. Their structured approach meant our team was confident using the system from day one, and we've seen a 35% improvement in pipeline visibility.",
    author: "Sarah Johnson",
    role: "VP of Operations",
    company: "UK Professional Services Firm",
    rating: 5,
  },
  {
    quote: "We switched to Appdraft's retained support model after struggling with our previous provider. They give us quick answers and practical fixes - response times have improved by 60%.",
    author: "Michael Chen",
    role: "Head of Sales Operations",
    company: "B2B Technology Company",
    rating: 5,
  },
  {
    quote: "Their team took time to understand our manufacturing business before building anything. The custom app they developed for quality control has reduced our error rate by 40%.",
    author: "Emma Williams",
    role: "Operations Director",
    company: "Manufacturing Business",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-blue-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Verified reviews from AppExchange</p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">out of 5</span>
          </div>
        </div>
      </div>
    </section>
  );
}
