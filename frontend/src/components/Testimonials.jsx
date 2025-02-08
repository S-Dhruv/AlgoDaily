export default function Testimonials() {
    const testimonials = [
      {
        quote: "Daily practice on this platform helped me crack my dream job at Google. The AI assistant was like having a personal mentor!",
        author: "Sarah Kim",
        role: "Software Engineer at Google",
        initials: "SK",
        bgColor: "bg-indigo-600",
      },
      {
        quote: "The consistent practice of 3 questions daily helped me build a strong foundation in DSA. The progress tracking kept me motivated.",
        author: "Mike Peterson",
        role: "Senior Developer at Meta",
        initials: "MP",
        bgColor: "bg-purple-600",
      },
      {
        quote: "From a complete beginner to clearing multiple technical interviews, this platform has been instrumental in my growth.",
        author: "Aisha Patel",
        role: "Software Developer at Amazon",
        initials: "AP",
        bgColor: "bg-pink-600",
      },
    ];
 
    const googleAuth = () => {
      window.open(`${import.meta.env.VITE_API_URL}/auth/google/callback`, "_self");
    };
    
    return (
      <section id="testimonials" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-gray-400 text-lg">Hear from our community members who transformed their coding journey</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-800 rounded-xl p-6 relative animate-[fadeInUp_1s_ease-out]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -top-4 left-6">
                  <svg className="h-8 w-8 text-indigo-500 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v8h5.5c0 2.5-2 4.5-4.5 4.5v3c4.1 0 7.5-3.4 7.5-7.5V8H10zm12 0v8h5.5c0 2.5-2 4.5-4.5 4.5v3c4.1 0 7.5-3.4 7.5-7.5V8H22z"/>
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className={`h-10 w-10 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-semibold">{testimonial.initials}</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center animate-[fadeIn_1s_ease-out]">
            <p className="text-gray-400 mb-8">Join thousands of developers who have transformed their careers</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2" onClick={googleAuth}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              <span>Start Your Success Story</span>
            </button>
          </div>
        </div>
      </section>
    );
  }