const testimonials = [
  {
    quote: "Helped us review Sales Cloud to resolve integration issues, build automation for opportunity management, and optimise the user experience. We've retained them for ongoing support and find them really responsive as issues arise. They have a strong understanding of both the sales process and the technology.",
    author: "Verified AppExchange Review",
    role: "",
    company: "High Tech Client",
    rating: 5,
  },
  {
    quote: "Appdraft guided us through our CRM implementation from start to finish. They helped us understand what was possible, constructively challenged how we worked with our old system, and made valuable suggestions to get us up and running. Working with Appdraft has definitely helped us get value from our investment in Salesforce.",
    author: "Verified AppExchange Review",
    role: "",
    company: "Engineering Client",
    rating: 5,
  },
  {
    quote: "A very helpful and enthusiastic team with a fair implementation model that represents good value. I would fully recommend this partner to help other companies navigate the adoption of Salesforce.",
    author: "Verified AppExchange Review",
    role: "",
    company: "Manufacturing Client",
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
