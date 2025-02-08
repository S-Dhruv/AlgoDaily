export default function Benefits() {
    const benefits = [
      {
        icon: (
          <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
        ),
        title: "Enhanced Problem-Solving",
        description: "Develop a structured approach to breaking down complex problems into manageable components.",
        bgColor: "bg-indigo-600/20",
      },
      {
        icon: (
          <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        ),
        title: "Interview Readiness",
        description: "Build confidence and competence for technical interviews at top tech companies.",
        bgColor: "bg-purple-600/20",
      },
      {
        icon: (
          <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
          </svg>
        ),
        title: "Conceptual Mastery",
        description: "Gain deep understanding of fundamental data structures and algorithmic concepts.",
        bgColor: "bg-pink-600/20",
      },
      {
        icon: (
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
        ),
        title: "Consistent Growth",
        description: "Track your progress and witness steady improvement in your problem-solving skills.",
        bgColor: "bg-green-600/20",
      },
    ];
  
    return (
      <section id="benefits" className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits of Daily DSA Practice</h2>
            <p className="text-gray-400 text-lg">Transform your problem-solving abilities with consistent practice</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 animate-[fadeInUp_1s_ease-out]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`h-12 w-12 ${benefit.bgColor} rounded-lg flex items-center justify-center`}>
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2">
              <span>Start Your Journey</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  }