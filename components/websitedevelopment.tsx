// import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
// import {
//   MessageSquare,
//   Palette,
//   Code,
//   TestTube,
//   Rocket,
//   Headphones,
//   ChevronLeft,
//   ChevronRight,
//   Play,
//   Pause
// } from 'lucide-react';

// // Enhanced data with SEO-friendly content and structured data
// const workProcessData = [
//   {
//     id: 1,
//     title: "Discovery & Strategy",
//     description: "It all starts with a conversation. We dive deep to understand your vision, business goals, target audience, and the unique challenges you face. Together, we'll craft a tailored strategy and a clear roadmap, ensuring our plan aligns perfectly with what success looks like for you.",
//     icon: MessageSquare,
//     color: "from-blue-500 to-blue-600",
//     shortName: "Discovery",
//     duration: "1-2 weeks",
//     deliverables: ["Project roadmap", "User personas", "Technical requirements"],
//     keywords: "discovery strategy planning consultation requirements analysis"
//   },
//   {
//     id: 2,
//     title: "Design & User Experience (UX)",
//     description: "Next, our creative minds get to work. We design intuitive and visually engaging interfaces, focusing on a seamless user experience. Through wireframes and interactive prototypes, we bring your ideas to life, ensuring every click feels right and your brand shines through.",
//     icon: Palette,
//     color: "from-purple-500 to-purple-600",
//     shortName: "Design",
//     duration: "2-3 weeks",
//     deliverables: ["Wireframes", "UI mockups", "Interactive prototypes"],
//     keywords: "UX design user interface wireframes prototypes visual design"
//   },
//   {
//     id: 3,
//     title: "Development & Engineering",
//     description: "This is where the magic happens. Our skilled developers write clean, scalable, and robust code, utilizing the latest technologies. We follow agile methodologies, keeping you in the loop and ensuring your solution is built for today and ready for tomorrow.",
//     icon: Code,
//     color: "from-green-500 to-green-600",
//     shortName: "Development",
//     duration: "4-8 weeks",
//     deliverables: ["Source code", "API documentation", "Development milestones"],
//     keywords: "software development programming coding agile methodology"
//   },
//   {
//     id: 4,
//     title: "Testing & Quality Assurance (QA)",
//     description: "Quality is paramount. We meticulously test every aspect of your application – functionality, performance, security, and compatibility across devices. Our rigorous QA process ensures a polished, bug-free product that you can launch with confidence.",
//     icon: TestTube,
//     color: "from-orange-500 to-orange-600",
//     shortName: "Testing",
//     duration: "1-2 weeks",
//     deliverables: ["Test reports", "Bug fixes", "Performance metrics"],
//     keywords: "quality assurance testing QA bug testing performance testing"
//   },
//   {
//     id: 5,
//     title: "Deployment & Launch",
//     description: "Showtime! We handle the complexities of deploying your solution to a secure and optimized hosting environment. Our smooth launch process includes final checks and monitoring, so your project goes live without a hitch.",
//     icon: Rocket,
//     color: "from-red-500 to-red-600",
//     shortName: "Launch",
//     duration: "3-5 days",
//     deliverables: ["Live application", "Deployment guide", "Monitoring setup"],
//     keywords: "deployment launch hosting go-live production release"
//   },
//   {
//     id: 6,
//     title: "Support & Growth",
//     description: "Our partnership doesn't end at launch. We provide ongoing maintenance, timely updates, and dedicated support to keep your application running smoothly. We're here to help you adapt, evolve, and grow long after your project is live.",
//     icon: Headphones,
//     color: "from-indigo-500 to-indigo-600",
//     shortName: "Support",
//     duration: "Ongoing",
//     deliverables: ["Maintenance plan", "Update schedules", "Support documentation"],
//     keywords: "support maintenance updates ongoing partnership growth"
//   }
// ];

// // Optimized Step Item Component with enhanced accessibility
// const StepItem = React.memo(({ step, isActive, onClick, index, total }) => {
//   const handleKeyDown = useCallback((event) => {
//     if (event.key === 'Enter' || event.key === ' ') {
//       event.preventDefault();
//       onClick();
//     }
//   }, [onClick]);

//   return (
//     <article
//       role="tab"
//       id={`step-tab-${step.id}`}
//       aria-controls={`step-panel-${step.id}`}
//       aria-selected={isActive}
//       aria-posinset={index + 1}
//       aria-setsize={total}
//       tabIndex={isActive ? 0 : -1}
//       onClick={onClick}
//       onKeyDown={handleKeyDown}
//       className={`group p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//         isActive
//           ? 'bg-white shadow-xl border-l-4 border-blue-500 ring-2 ring-blue-100'
//           : 'bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-white/90'
//       }`}
//       itemScope
//       itemType="https://schema.org/HowToStep"
//     >
//       <div className="flex items-center gap-4">
//         <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg shrink-0 ${
//           isActive ? 'scale-110 ring-2 ring-white ring-offset-2' : 'group-hover:scale-105'
//         } transition-all duration-300`}>
//           <span className="text-white font-bold text-sm" itemProp="position">{step.id}</span>
//         </div>
//         <div className="flex-1 min-w-0">
//           <h3 className={`text-base font-semibold transition-colors duration-300 truncate ${
//             isActive ? 'text-blue-600' : 'text-gray-800'
//           }`} itemProp="name">
//             {step.title}
//           </h3>
//           <p className="text-sm text-gray-500 mt-1" itemProp="duration">
//             Duration: {step.duration}
//           </p>
//         </div>
//         {isActive && (
//           <div className="text-blue-500 animate-pulse">
//             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//           </div>
//         )}
//       </div>
//     </article>
//   );
// });
// StepItem.displayName = 'StepItem';

// // Auto-play hook for better UX
// const useAutoPlay = (totalSteps, isPlaying, setActiveStep) => {
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef.current = setInterval(() => {
//         setActiveStep(prev => (prev >= totalSteps ? 1 : prev + 1));
//       }, 4000);
//     } else {
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying, totalSteps, setActiveStep]);

//   return () => clearInterval(intervalRef.current);
// };

// const Planning = () => {
//   const [activeStepId, setActiveStepId] = useState(1);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(false);
//   const [hasUserInteracted, setHasUserInteracted] = useState(false);
//   const sectionRef = useRef(null);

//   // Memoized active process
//   const activeProcess = useMemo(() =>
//     workProcessData.find(step => step.id === activeStepId),
//     [activeStepId]
//   );

//   const ActiveIcon = useMemo(() => activeProcess?.icon, [activeProcess]);

//   // Enhanced step handlers with analytics tracking simulation
//   const handleSetActiveStep = useCallback((id) => {
//     setActiveStepId(id);
//     setHasUserInteracted(true);
//     // Analytics tracking would go here
//     // gtag('event', 'step_viewed', { step_name: workProcessData.find(s => s.id === id)?.title });
//   }, []);

//   const handlePrevStep = useCallback(() => {
//     const prevId = activeStepId > 1 ? activeStepId - 1 : workProcessData.length;
//     handleSetActiveStep(prevId);
//   }, [activeStepId, handleSetActiveStep]);

//   const handleNextStep = useCallback(() => {
//     const nextId = activeStepId < workProcessData.length ? activeStepId + 1 : 1;
//     handleSetActiveStep(nextId);
//   }, [activeStepId, handleSetActiveStep]);

//   const toggleAutoPlay = useCallback(() => {
//     setIsAutoPlaying(prev => !prev);
//     setHasUserInteracted(true);
//   }, []);

//   // Auto-play functionality
//   const stopAutoPlay = useAutoPlay(workProcessData.length, isAutoPlaying && !hasUserInteracted, setActiveStepId);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.target.closest('[role="tablist"]')) {
//         switch (event.key) {
//           case 'ArrowDown':
//           case 'ArrowRight':
//             event.preventDefault();
//             handleNextStep();
//             break;
//           case 'ArrowUp':
//           case 'ArrowLeft':
//             event.preventDefault();
//             handlePrevStep();
//             break;
//           case 'Home':
//             event.preventDefault();
//             handleSetActiveStep(1);
//             break;
//           case 'End':
//             event.preventDefault();
//             handleSetActiveStep(workProcessData.length);
//             break;
//         }
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [handleNextStep, handlePrevStep, handleSetActiveStep]);

//   if (!activeProcess || !ActiveIcon) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]" role="alert">
//         <p>Loading process information...</p>
//       </div>
//     );
//   }

//   // Structured data for SEO
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "HowTo",
//     "name": "Our Collaborative Development Process",
//     "description": "A comprehensive 6-step process for creating exceptional digital solutions",
//     "totalTime": "PT6W",
//     "step": workProcessData.map(step => ({
//       "@type": "HowToStep",
//       "name": step.title,
//       "text": step.description,
//       "position": step.id,
//       "duration": step.duration
//     }))
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <section
//         ref={sectionRef}
//         className='relative flex flex-col items-center px-4 py-8 sm:py-12 w-full bg-gray-100 dark:bg-slate-900 overflow-hidden'
//         aria-labelledby="how-we-work-heading"
//         itemScope
//         itemType="https://schema.org/HowTo"
//       >
//         {/* Performance-optimized decorative elements */}
//         <div aria-hidden="true" className="absolute inset-0 -z-0 will-change-transform">
//           <div className="absolute top-[-10rem] left-[-20rem] md:left-[-15rem] w-[50rem] h-[50rem] bg-sky-300 dark:bg-sky-700 rounded-full filter blur-3xl opacity-20 dark:opacity-30 transform-gpu"></div>
//           <div className="absolute bottom-[-15rem] right-[-15rem] md:right-[-10rem] w-[45rem] h-[45rem] bg-purple-300 dark:bg-purple-700 rounded-full filter blur-3xl opacity-20 dark:opacity-30 transform-gpu"></div>
//           <div className="absolute top-[25rem] left-[5rem] md:left-[15rem] w-[35rem] h-[35rem] bg-green-300 dark:bg-green-700 rounded-full filter blur-3xl opacity-15 dark:opacity-25 transform-gpu"></div>
//         </div>

//         <div className="relative z-10 w-[95vw] sm:w-[90vw] max-w-6xl py-12 h-full mb-10 md:mt-16">
//           <header className="text-center mb-12 md:mb-16">
//             <h1
//               id="how-we-work-heading"
//               className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
//               itemProp="name"
//             >
//               Our Collaborative Development Journey
//             </h1>
//             <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed" itemProp="description">
//               We believe in a transparent and streamlined process, ensuring every project is a masterpiece of precision, creativity, and technical brilliance. Here's our proven 6-step methodology to bring your vision to life.
//             </p>

//             {/* Enhanced controls */}
//             <div className="flex items-center justify-center gap-4 mt-8">
//               <button
//                 onClick={handlePrevStep}
//                 className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 aria-label="Previous step"
//               >
//                 <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </button>

//               <button
//                 onClick={toggleAutoPlay}
//                 className={`px-4 py-2 rounded-full backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   isAutoPlaying
//                     ? 'bg-blue-500 text-white'
//                     : 'bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300'
//                 }`}
//                 aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
//               >
//                 {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
//                 <span className="ml-2 text-sm font-medium">
//                   {isAutoPlaying ? 'Pause' : 'Auto-play'}
//                 </span>
//               </button>

//               <button
//                 onClick={handleNextStep}
//                 className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 aria-label="Next step"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//               </button>
//             </div>
//           </header>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
//             <nav
//               className="space-y-3"
//               role="tablist"
//               aria-orientation="vertical"
//               aria-label="Development Process Steps"
//             >
//               {workProcessData.map((step, index) => (
//                 <StepItem
//                   key={step.id}
//                   step={step}
//                   index={index}
//                   total={workProcessData.length}
//                   isActive={activeStepId === step.id}
//                   onClick={() => handleSetActiveStep(step.id)}
//                 />
//               ))}
//             </nav>

//             <div className="lg:sticky lg:top-24 h-max">
//               <main
//                 role="tabpanel"
//                 id={`step-panel-${activeProcess.id}`}
//                 aria-labelledby={`step-tab-${activeProcess.id}`}
//                 className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-slate-700 transform-gpu"
//                 aria-live="polite"
//                 itemScope
//                 itemType="https://schema.org/HowToStep"
//               >
//                 <header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
//                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeProcess.color} flex items-center justify-center shadow-lg shrink-0 transform-gpu`}>
//                     <ActiveIcon className="w-8 h-8 text-white" aria-hidden="true" />
//                   </div>
//                   <div className="flex-1">
//                     <h2 className="text-2xl font-bold text-gray-800 dark:text-white" itemProp="name">
//                       {activeProcess.title}
//                     </h2>
//                     <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
//                       <span>Step {activeProcess.id} of {workProcessData.length}</span>
//                       <span itemProp="duration">Duration: {activeProcess.duration}</span>
//                     </div>
//                   </div>
//                 </header>

//                 <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
//                   <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg" itemProp="text">
//                     {activeProcess.description}
//                   </p>
//                 </div>

//                 {/* Enhanced deliverables section */}
//                 <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
//                   <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
//                     Key Deliverables
//                   </h3>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {activeProcess.deliverables.map((deliverable, index) => (
//                       <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
//                         <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeProcess.color}`}></div>
//                         <span className="text-sm">{deliverable}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Enhanced progress indicator */}
//                 <div className="mt-8">
//                   <div className="flex justify-between items-center mb-3">
//                     <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
//                       Journey Progress
//                     </span>
//                     <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
//                       {Math.round((activeProcess.id / workProcessData.length) * 100)}% Complete
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
//                     <div
//                       className={`h-3 rounded-full bg-gradient-to-r ${activeProcess.color} transition-all duration-700 ease-out transform-gpu`}
//                       style={{ width: `${(activeProcess.id / workProcessData.length) * 100}%` }}
//                       aria-valuenow={activeProcess.id}
//                       aria-valuemin={1}
//                       aria-valuemax={workProcessData.length}
//                       aria-label={`Progress: Step ${activeProcess.id} of ${workProcessData.length}`}
//                       role="progressbar"
//                     ></div>
//                   </div>

//                   {/* Step indicators */}
//                   <div className="flex justify-between mt-2">
//                     {workProcessData.map((step) => (
//                       <div
//                         key={step.id}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                           step.id <= activeProcess.id
//                             ? `bg-gradient-to-r ${step.color}`
//                             : 'bg-gray-300 dark:bg-slate-600'
//                         }`}
//                         aria-label={`Step ${step.id}: ${step.title}`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </main>
//             </div>
//           </div>

//           {/* SEO-friendly content for crawlers */}
//           <div className="sr-only">
//             <h2>Complete Development Process Overview</h2>
//             {workProcessData.map((step) => (
//               <div key={step.id} itemScope itemType="https://schema.org/HowToStep">
//                 <h3 itemProp="name">{step.title}</h3>
//                 <p itemProp="text">{step.description}</p>
//                 <meta itemProp="position" content={step.id.toString()} />
//                 <meta itemProp="duration" content={step.duration} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Planning;
