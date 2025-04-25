
 import Planning from "@/components/Planning";
import {
    FaUsers,
    FaLightbulb,
    FaProjectDiagram,
    FaTasks,
    FaCodeBranch,
    FaSyncAlt,
    FaCheckCircle,
    FaUsersCog,
    
  } from "react-icons/fa";
  
  const HowWeWork = () => {
    return (
      <section className=" py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            How We Work at <span className="text-[#144A9C]">M.A.P. Tech</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            M.A.P. Tech acts as a bridge between <b>international clients</b> and our
            <b> expert developers in Nepal.</b> You can either:
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
              <FaUsers className="text-[#219DD8] text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Hire Dedicated Designers & Developers
                </h3>
                <p className="text-gray-600 mt-2">
                  Work directly with skilled professionals for your project.
                </p>
              </div>
            </div>
  
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
              <FaProjectDiagram className="text-[#219DD8] text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Assign Your Project
                </h3>
                <p className="text-gray-600 mt-2">
                  Let our expert team manage and develop your website or app from
                  start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  
  const AgileDevelopment = () => {
    const steps = [
      {
        icon: <FaLightbulb />,
        title: "Idea & Planning",
        description: "Brainstorming and defining project goals.",
      },
      {
        icon: <FaTasks />,
        title: "Backlog Creation",
        description: "Listing tasks and prioritizing development items.",
      },
      {
        icon: <FaCodeBranch />,
        title: "Development Sprints",
        description: "Iterative coding with regular feedback loops.",
      },
      {
        icon: <FaUsersCog />,
        title: "Team Collaboration",
        description: "Developers, designers & testers working together.",
      },
      {
        icon: <FaSyncAlt />,
        title: "Continuous Integration",
        description: "Frequent testing and merging code for stability.",
      },
      {
        icon: <FaCheckCircle />,
        title: "Delivery & Feedback",
        description: "Deploying & refining based on user feedback.",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Agile <span className="text-[#144A9C]">Development</span> Process
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            We follow a structured Agile methodology, ensuring flexibility,
            collaboration, and continuous improvement at every step.
          </p>
  
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-xl p-6 flex flex-col items-center md:text-center border-t-4 border-[#144A9C] hover:shadow-2xl transition-shadow duration-300"
       
              >
                <div className="absolute -top-7 w-14 h-14 bg-[#144A9C] text-white flex items-center justify-center rounded-full shadow-lg text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-8">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  const Insights = () => {
    return (
      <section className="flex flex-col items-center container mt-32 mb-20 px-5 lg:px-20 min-h-fit">
      <div className="relative w-[80vw] h-full flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-20">
        <div className="w-full lg:w-[100%] px-6 lg:px-10 ">

        <HowWeWork />
        <Planning />

        <AgileDevelopment />
      </div>
      </div>
      </section>
    );
  };
  
export default Insights;
