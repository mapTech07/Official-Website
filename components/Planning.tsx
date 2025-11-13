'use client';

import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
  lazy,
  Suspense,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Search,
  Presentation,
  Calendar,
  Rocket,
  CheckCircle,
} from 'lucide-react';

// === Type Definitions ===
interface WorkProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  shortName: string;
  deliverables: string[];
  keywords: string;
  duration?: string;
}

interface StepItemProps {
  step: WorkProcessStep;
  isActive: boolean;
  onClick: () => void;
  index: number;
  total: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

// === Data with Rich SEO & Structured Metadata ===
const workProcessData: WorkProcessStep[] = [
  {
    id: 1,
    title: 'Discussion',
    description:
      'We begin with deep listening. Through collaborative dialogue, we uncover your vision, goals, and challenges - aligning every detail to ensure a shared purpose from the start.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    shortName: 'Discussion',
    deliverables: ['Project Brief', 'Stakeholder Map', 'Success Metrics'],
    keywords: 'client consultation, discovery, requirements, strategy',
    duration: 'PT1W',
  },
  {
    id: 2,
    title: 'Research',
    description:
      'Data-driven insights fuel innovation. We analyze market trends, user behavior, and competitive landscapes to identify opportunities and risks with precision.',
    icon: Calendar,
    color: 'from-purple-500 to-pink-500',
    shortName: 'Research',
    deliverables: ['User Personas', 'Market Analysis', 'SWOT Report'],
    keywords: 'UX research, data analysis, competitive intelligence',
    duration: 'PT2W',
  },
  {
    id: 3,
    title: 'Pitch',
    description:
      'We transform insights into compelling narratives. Our strategic proposal outlines vision, approach, timeline, and value - turning ideas into actionable blueprints.',
    icon: Search,
    color: 'from-green-400 to-emerald-500',
    shortName: 'Pitch',
    deliverables: ['Creative Direction', 'Mood Board', 'Investment Plan'],
    keywords: 'pitch deck, creative strategy, concept presentation',
    duration: 'PT1W',
  },
  {
    id: 4,
    title: 'Planning',
    description:
      'Clarity through structure. We map milestones, allocate resources, and define KPIs to ensure seamless execution and transparent progress tracking.',
    icon: Presentation,
    color: 'from-orange-400 to-amber-500',
    shortName: 'Planning',
    deliverables: ['Project Roadmap', 'Sprint Schedule', 'Risk Matrix'],
    keywords: 'project planning, roadmap, agile, timeline',
    duration: 'PT2W',
  },
  {
    id: 5,
    title: 'Executing',
    description:
      'Where vision becomes reality. Our team crafts, tests, and refines with relentless quality focus, delivering iterative value with full transparency.',
    icon: Rocket,
    color: 'from-red-500 to-rose-500',
    shortName: 'Executing',
    deliverables: ['MVP Release', 'QA Reports', 'Design System'],
    keywords: 'development, design, QA, agile delivery',
    duration: 'PT8W',
  },
  {
    id: 6,
    title: 'Handover',
    description:
      'Seamless transition, lasting impact. We deliver polished solutions with documentation, training, and support plans to empower your success.',
    icon: CheckCircle,
    color: 'from-indigo-500 to-violet-500',
    shortName: 'Handover',
    deliverables: ['Final Product', 'Admin Training', 'Support Portal'],
    keywords: 'delivery, onboarding, documentation, support',
    duration: 'PT1W',
  },
];

// === Lazy Load Progress Indicator ===
const LazyProgressIndicator = lazy(() =>
  Promise.resolve({
    default: ({
      activeStep,
      totalSteps,
      color,
    }: {
      activeStep: number;
      totalSteps: number;
      color: string;
    }) => (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6"
      >
        <div className="flex justify-between items-center mb-3 text-sm font-medium text-gray-600 dark:text-gray-300">
          <span>Journey Progress</span>
          <span className="text-blue-600 dark:text-blue-400">
            {Math.round((activeStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className={`h-2.5 rounded-full bg-gradient-to-r ${color}`}
            initial={{ width: 0 }}
            animate={{ width: `${(activeStep / totalSteps) * 100}%` }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            role="progressbar"
            aria-valuenow={activeStep}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
          />
        </div>
        <ol className="flex justify-between mt-3 text-base text-gray-500 dark:text-gray-400">
          {workProcessData.map((step) => (
            <li
              key={step.id}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                step.id <= activeStep
                  ? `bg-gradient-to-r ${step.color}`
                  : 'bg-gray-300 dark:bg-slate-600'
              }`}
              title={step.title}
            />
          ))}
        </ol>
      </motion.div>
    ),
  }),
);

// === Optimized Step Item with Motion ===
const StepItem = React.memo<StepItemProps>(
  ({ step, isActive, onClick, index, total, onMouseEnter, onMouseLeave }) => {
    return (
      <motion.div
        role="tab"
        id={`step-tab-${step.id}`}
        aria-selected={isActive}
        aria-controls={`step-panel-${step.id}`}
        tabIndex={isActive ? 0 : -1}
        aria-posinset={index + 1}
        aria-setsize={total}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`group p-2 rounded-2xl cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 dark:focus:ring-blue-500 ${
          isActive
            ? 'bg-white dark:bg-slate-800 shadow-2xl border-l-4 border-blue-500 scale-105 ring-2 ring-blue-100 dark:ring-blue-900/30'
            : 'bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:bg-white dark:hover:bg-slate-800/80'
        }`}
        itemScope
        itemType="https://schema.org/HowToStep"
      >
        <div className="flex items-center gap-4 ">
          <motion.div
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg shrink-0 transition-transform duration-500`}
            animate={{
              scale: isActive ? 1.2 : 1,
              rotate: isActive ? 3 : 0,
            }}
            whileHover={{ rotate: -5 }}
          >
            <span className="text-white font-bold text-sm" itemProp="position">
              {step.id}
            </span>
          </motion.div>
          <div className=" min-w-0">
            <h3
              className={`text-base font-semibold transition-colors duration-300  ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-800 dark:text-white'
              }`}
              itemProp="name"
            >
              {step.title}
            </h3>
          </div>
          {isActive && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-blue-500"
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  },
);
StepItem.displayName = 'StepItem';

// === Auto-Play Hook ===
const useAutoPlay = (
  totalSteps: number,
  isPlaying: boolean,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  isPaused: boolean,
) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => (prev >= totalSteps ? 1 : prev + 1));
      }, 6000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, totalSteps, setActiveStep, isPaused]);
};

// === Reduced Motion Hook ===
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  return prefersReducedMotion;
};

// === Main Component ===
const Planning: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const activeProcess = useMemo(
    () => workProcessData.find((step) => step.id === activeStepId),
    [activeStepId],
  );

  const ActiveIcon = activeProcess?.icon;

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '6-Step Digital Product Development Process',
      description:
        'A comprehensive framework for transforming ideas into exceptional digital solutions.',
      totalTime: 'P15W',
      step: workProcessData.map((step) => ({
        '@type': 'HowToStep',
        name: step.title,
        text: step.description,
        position: step.id,
        url: `#step-${step.id}`,
        duration: step.duration,
      })),
      image: '/images/process-overview.webp',
    }),
    [],
  );

  const handleSetActiveStep = useCallback(
    (id: number) => {
      if (id === activeStepId) return;
      setActiveStepId(id);
      setHasUserInteracted(true);
      if (announcementRef.current) {
        const step = workProcessData.find((s) => s.id === id);
        announcementRef.current.textContent = `Now viewing step ${id}: ${step?.title}`;
      }
    },
    [activeStepId],
  );

  const handlePrevStep = useCallback(
    () => handleSetActiveStep(activeStepId > 1 ? activeStepId - 1 : 6),
    [activeStepId, handleSetActiveStep],
  );
  const handleNextStep = useCallback(
    () => handleSetActiveStep(activeStepId < 6 ? activeStepId + 1 : 1),
    [activeStepId, handleSetActiveStep],
  );

  useAutoPlay(
    6,
    !hasUserInteracted && !prefersReducedMotion,
    setActiveStepId,
    isHovered,
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target && (e.target as Element).closest('[role="tablist"]')) {
        switch (e.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            e.preventDefault();
            handleNextStep();
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            e.preventDefault();
            handlePrevStep();
            break;
          case 'Home':
            e.preventDefault();
            handleSetActiveStep(1);
            break;
          case 'End':
            e.preventDefault();
            handleSetActiveStep(6);
            break;
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleNextStep, handlePrevStep, handleSetActiveStep]);

  if (!activeProcess || !ActiveIcon) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div ref={announcementRef} className="sr-only" aria-live="polite" />

      <section
        ref={sectionRef}
        className="relative flex flex-col items-center px-4 py-12 w-full overflow-hidden "
        aria-labelledby="how-we-work-heading"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-40"
          />
          <motion.div
            animate={{
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            className="absolute -bottom-20 -right-20 w-80 h-80  rounded-full blur-3xl opacity-30"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div className="text-center mb-8">
            <h6 className="font-bold relative inline-block mb-4 text-[#1F2937]">
              HOW WE WORKS
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-black"></span>
            </h6>
            <h2 className="text-2xl sm:text-3xl font-semibold  text-gray-800 mb-4">
              The Journey from{' '}
              <span className="text-[#144A9C]"> Idea to Innovation</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 leading-relaxed">
                Ready to build something remarkable? We guide you through a
                strategic 6-step journey that transforms your vision into a
                robust digital reality.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-6xl">
          <div className="bg-white backdrop-blur-xl rounded-3xl shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-10">
              {/* Step Navigation */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="space-y-4"
                role="tablist"
              >
                {workProcessData.map((step, index) => (
                  <StepItem
                    key={step.id}
                    step={step}
                    isActive={activeStepId === step.id}
                    onClick={() => handleSetActiveStep(step.id)}
                    index={index}
                    total={6}
                    onMouseEnter={() =>
                      !prefersReducedMotion && setIsHovered(true)
                    }
                    onMouseLeave={() => setIsHovered(false)}
                  />
                ))}
              </motion.nav>

              {/* Content Panel */}
              <div className="lg:sticky lg:top-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStepId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    role="tabpanel"
                    id={`step-panel-${activeStepId}`}
                    className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-4 py-2 border border-gray-100 dark:border-slate-700"
                    itemScope
                    itemType="https://schema.org/HowToStep"
                  >
                    <header className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${activeProcess.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 10, scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ActiveIcon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h2
                        className="text-2xl font-bold text-gray-800 dark:text-white pt-4"
                        itemProp="name"
                      >
                        {activeProcess.title}
                      </h2>
                    </header>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
                      itemProp="text"
                    >
                      {activeProcess.description}
                    </motion.p>

                    <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-5 mb-6">
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                        Deliverables
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeProcess.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeProcess.color}`}
                            ></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Suspense
                      fallback={
                        <div className="h-20 bg-gray-200 dark:bg-slate-700 rounded-lg animate-pulse"></div>
                      }
                    >
                      <LazyProgressIndicator
                        activeStep={activeStepId}
                        totalSteps={6}
                        color={activeProcess.color}
                      />
                    </Suspense>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Planning;
