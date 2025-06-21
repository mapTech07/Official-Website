import Planning from '@/components/Planning';
import {
  FaUsers,
  FaLightbulb,
  FaProjectDiagram,
  FaTasks,
  FaCodeBranch,
  FaSyncAlt,
  FaCheckCircle,
  FaUsersCog,
} from 'react-icons/fa';
import type { Metadata } from 'next';

/**
 * Page-specific SEO metadata
 */
export const metadata: Metadata = {
  title:
    "How We Work – M.A.P. Tech | Nepal's Top Software & Web Development company",
  description:
    'Explore how M.A.P. Tech Nepal connects global clients with top-tier Nepali developers. Learn our Agile process, from idea to delivery.',
  alternates: {
    canonical: 'https://maptechnepal.com/insights',
  },
  openGraph: {
    title: 'Our Agile Process | How We Work – M.A.P. Tech',
    description:
      'At M.A.P. Tech, we use Agile methodology to deliver top-quality websites and software with transparency, speed, and collaboration.',
    url: 'https://maptechnepal.com/insights',
    type: 'article',
    images: [
      {
        url: 'https://maptechnepal.com/Site_Logo.webp',
        width: 1200,
        height: 630,
        alt: 'M.A.P. Tech Agile Development Process',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "M.A.P. Tech's Agile Development Process",
    description:
      'See how our expert Nepali developers work with clients worldwide using an Agile approach for consistent, high-quality results.',
    images: ['https://maptechnepal.com/Site_Logo.webp'],
  },
};

const HowWeWork = () => (
  <section
    className="w-full py-32 px-4 md:px-8 bg-white"
    aria-labelledby="how-we-work-heading"
  >
    <div className="max-w-7xl mx-auto text-center">
      <h2
        id="how-we-work-heading"
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        How We Work at <span className="text-[#144A9C]">M.A.P. Tech</span>
      </h2>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
        M.A.P. Tech acts as a bridge between{' '}
        <strong>international clients</strong> and our
        <strong> expert developers in Nepal</strong>. You can either:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition">
          <FaUsers className="text-[#219DD8] text-4xl" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Hire Dedicated Designers & Developers
            </h3>
            <p className="text-gray-600 mt-2">
              Work directly with skilled professionals for your project.
            </p>
          </div>
        </article>

        <article className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition">
          <FaProjectDiagram
            className="text-[#219DD8] text-4xl"
            aria-hidden="true"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Assign Your Project
            </h3>
            <p className="text-gray-600 mt-2">
              Let our expert team manage and develop your website or app from
              start to finish.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const AgileDevelopment = () => {
  const steps = [
    {
      icon: <FaLightbulb aria-hidden="true" />,
      title: 'Idea & Planning',
      description:
        'Collaborative brainstorming, defining project scope, goals, and initial requirements.',
    },
    {
      icon: <FaTasks aria-hidden="true" />,
      title: 'Backlog Creation',
      description:
        'Detailing features and tasks into a prioritized product backlog for iterative development.',
    },
    {
      icon: <FaCodeBranch aria-hidden="true" />,
      title: 'Development Sprints',
      description:
        'Focused, iterative coding cycles (sprints) with regular demos and feedback loops.',
    },
    {
      icon: <FaUsersCog aria-hidden="true" />,
      title: 'Team Collaboration',
      description:
        'Cross-functional teams (devs, designers, QAs, PMs) working in synergy.',
    },
    {
      icon: <FaSyncAlt aria-hidden="true" />,
      title: 'CI/CD & Testing',
      description:
        'Continuous integration, automated testing, and frequent deployments for quality assurance.',
    },
    {
      icon: <FaCheckCircle aria-hidden="true" />,
      title: 'Review & Delivery',
      description:
        'Regular reviews, incremental delivery of working software, and refining based on user feedback.',
    },
  ];

  return (
    <section
      className="w-full bg-gray-50 py-16 px-4 md:px-8"
      aria-labelledby="agile-process-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="agile-process-heading"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Agile <span className="text-[#144A9C]">Development</span> Process
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          We follow a structured Agile methodology, ensuring flexibility,
          collaboration, and continuous improvement at every step.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <article
              key={index}
              className="relative bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border-t-4 border-[#144A9C] hover:shadow-xl transition"
            >
              <div className="absolute -top-7 w-14 h-14 bg-[#144A9C] text-white flex items-center justify-center rounded-full text-2xl shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-8">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Insights = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      <HowWeWork />
      <Planning />
      <AgileDevelopment />
    </main>
  );
};

export default Insights;
