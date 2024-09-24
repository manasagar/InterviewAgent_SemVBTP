import { BadgeCheckIcon, ChartBarIcon, LightbulbIcon } from "lucide-react"; // Use lucide-react for icons

export default function FeatureSection() {
  const features = [
    {
      title: "Real-Life Experience",
      description:
        "Simulate boardroom interviews using advanced AR/VR technology for realistic, immersive interviews.",
      icon: <LightbulbIcon className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "AI-Powered Insights",
      description:
        "Leverage AI and NLP algorithms to analyze responses and provide deeper insights into candidate performance.",
      icon: <BadgeCheckIcon className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Transparent Scoring",
      description:
        "Get quantifiable, unbiased scores to ensure a fair and transparent interview process.",
      icon: <ChartBarIcon className="h-10 w-10 text-indigo-600" />,
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Our Platform?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md">
              {feature.icon}
            </div>

            <div className="text-center mt-10">
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
