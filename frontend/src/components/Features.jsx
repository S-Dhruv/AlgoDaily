export default function Features() {
    const features = [
      {
        icon: (
          <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        ),
        title: "Daily Challenges",
        description: "Three carefully selected DSA problems every day, ranging from easy to hard difficulty levels.",
        bgColor: "bg-indigo-600/20",
        textColor: "text-indigo-500",
      },
      {
        icon: (
          <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: "AI-Powered Assistant",
        description: "Get personalized hints, explanations, and step-by-step guidance from our intelligent AI companion.",
        bgColor: "bg-purple-600/20",
        textColor: "text-purple-500",
      },
      {
        icon: (
          <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        title: "Progress Tracking",
        description: "Monitor your improvement with detailed statistics and performance analytics.",
        bgColor: "bg-pink-600/20",
        textColor: "text-pink-500",
      },
    ];
  
    return (
      <section id="features" className="py-32 md:py-28 lg:py-48 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-40 ">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Platform?</h2>
            <p className="text-gray-400 text-lg">Supercharge your DSA practice with our powerful features</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-900 p-6 rounded-xl transform hover:scale-105 transition-transform duration-300 animate-[fadeInUp_1s_ease-out]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-14 w-14 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }