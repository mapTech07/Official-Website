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
import {
  Users,
  Search,
  Presentation,
  Calendar,
  Rocket,
  CheckCircle,
} from 'lucide-react';

// Type definitions
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

// Enhanced data with SEO-friendly content and structured data
const workProcessData: WorkProcessStep[] = [
  {
    id: 1,
    title: 'Discussion',
    description:
      "Everything begins with meaningful dialogue. We sit down together to understand your vision, goals, challenges, and aspirations. This collaborative conversation forms the foundation of our partnership, ensuring we're aligned on objectives and expectations from day one.",
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    shortName: 'Discussion',
    deliverables: ['Project brief', 'Goals outline', 'Initial requirements'],
    keywords:
      'discussion consultation dialogue requirements gathering client meeting',
    duration: 'PT1W',
  },
  {
    id: 2,
    title: 'Research',
    description:
      'Knowledge is power. We dive deep into market analysis, competitor research, and industry trends. By understanding your landscape and target audience, we uncover insights that will shape smart decisions and give your project a competitive edge.',
    icon: Calendar,
    color: 'from-purple-500 to-purple-600',
    shortName: 'Research',
    deliverables: ['Market analysis', 'Competitor insights', 'Research report'],
    keywords: 'research analysis market study competitor analysis insights',
    duration: 'PT2W',
  },
  {
    id: 3,
    title: 'Pitch',
    description:
      'Ideas come to life through compelling presentation. We craft a comprehensive proposal that outlines our strategic approach, creative concepts, timeline, and investment. This is where vision meets viability, and dreams take their first tangible form.',
    icon: Search,
    color: 'from-green-500 to-green-600',
    shortName: 'Pitch',
    deliverables: [
      'Detailed proposal',
      'Creative concepts',
      'Project timeline',
    ],
    keywords: 'pitch proposal presentation concepts strategy creative brief',
    duration: 'PT1W',
  },
  {
    id: 4,
    title: 'Planning',
    description:
      'Success lives in the details. We meticulously map out every phase of your project, from resource allocation to milestone scheduling. Our comprehensive planning ensures smooth execution, risk mitigation, and clear communication throughout the journey.',
    icon: Presentation,
    color: 'from-orange-500 to-orange-600',
    shortName: 'Planning',
    deliverables: ['Project roadmap', 'Resource plan', 'Risk assessment'],
    keywords:
      'planning strategy roadmap scheduling project management timeline',
    duration: 'PT2W',
  },
  {
    id: 5,
    title: 'Executing',
    description:
      'This is where the magic happens. Our expert team brings your vision to life with precision, creativity, and unwavering attention to quality. We maintain constant communication, provide regular updates, and ensure every deliverable exceeds expectations.',
    icon: Rocket,
    color: 'from-red-500 to-red-600',
    shortName: 'Executing',
    duration: 'PT8W',
    deliverables: [
      'Regular progress updates',
      'Quality checkpoints',
      'Milestone deliverables',
    ],
    keywords:
      'execution implementation development production delivery quality',
  },
  {
    id: 6,
    title: 'Handover',
    description:
      'The final step is as important as the first. We ensure seamless transition with comprehensive documentation, training, and ongoing support options. Your project is delivered complete, polished, and ready to make its mark in the world.',
    icon: CheckCircle,
    color: 'from-indigo-500 to-indigo-600',
    shortName: 'Handover',
    deliverables: ['Final deliverables', 'Documentation', 'Training materials'],
    keywords:
      'handover delivery completion documentation training support transition',
    duration: 'PT1W',
  },
];

// Lazy load heavy components for better performance
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
      <div className="mt-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Journey Progress
          </span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {Math.round((activeStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <div
            className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-700 ease-out`}
            style={{ width: `${(activeStep / totalSteps) * 100}%` }}
            aria-valuenow={activeStep}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
            aria-label={`Progress: Step ${activeStep} of ${totalSteps}`}
            role="progressbar"
          />
        </div>

        <ol
          className="flex justify-between mt-2"
          aria-label="Process steps indicators"
        >
          {workProcessData.map((step) => (
            <li
              key={step.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                step.id <= activeStep
                  ? `bg-gradient-to-r ${step.color}`
                  : 'bg-gray-300 dark:bg-slate-600'
              }`}
              title={`Step ${step.id}: ${step.title}`}
              role="presentation"
            />
          ))}
        </ol>
      </div>
    ),
  }),
);

// Optimized Step Item Component with enhanced accessibility
const StepItem = React.memo<StepItemProps>(
  ({ step, isActive, onClick, index, total, onMouseEnter, onMouseLeave }) => {
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      },
      [onClick],
    );

    const handleClick = useCallback(
      (event: React.MouseEvent) => {
        event.preventDefault();
        onClick();
      },
      [onClick],
    );

    return (
      <div
        role="tab"
        id={`step-tab-${step.id}`}
        aria-controls={`step-panel-${step.id}`}
        aria-selected={isActive}
        aria-posinset={index + 1}
        aria-setsize={total}
        tabIndex={isActive ? 0 : -1}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`group p-4 rounded-xl cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isActive
            ? 'bg-white shadow-xl border-l-4 border-blue-500 ring-2 ring-blue-100 scale-[1.02]'
            : 'bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-white/90 hover:scale-[1.01]'
        }`}
        itemScope
        itemType="https://schema.org/HowToStep"
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-11 h-11 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg shrink-0 ${
              isActive ? 'scale-110 ring-2 ring-white ring-offset-2' : ''
            } transition-all duration-300`}
          >
            <span
              className="text-white font-bold text-sm"
              itemProp="position"
              aria-label={`Step ${step.id}`}
            >
              {step.id}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className={`text-base font-semibold transition-colors duration-300 truncate ${
                isActive ? 'text-blue-600' : 'text-gray-800'
              }`}
              itemProp="name"
            >
              {step.title}
            </h3>
          </div>
          {isActive && (
            <div className="text-blue-500 animate-pulse" aria-hidden="true">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    );
  },
);
StepItem.displayName = 'StepItem';

// Enhanced Auto-play hook with performance optimizations
const useAutoPlay = (
  totalSteps: number,
  isPlaying: boolean,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  isPaused: boolean,
) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);

  useEffect(() => {
    if (isPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        rafRef.current = requestAnimationFrame(() => {
          setActiveStep((prev: number) => (prev >= totalSteps ? 1 : prev + 1));
        });
      }, 5000); // Slightly longer for better UX
    } else {
      clearAutoPlay();
    }

    return clearAutoPlay;
  }, [isPlaying, totalSteps, setActiveStep, isPaused, clearAutoPlay]);

  return clearAutoPlay;
};

// Custom hook for reduced motion preference
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

const Planning: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [hasUserInteracted, setHasUserInteracted] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Memoized active process and structured data
  const activeProcess = useMemo(
    () => workProcessData.find((step) => step.id === activeStepId),
    [activeStepId],
  );

  const ActiveIcon = useMemo(() => activeProcess?.icon, [activeProcess]);

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '6-Step Digital Product Development Process',
      description:
        'Comprehensive framework for transforming ideas into exceptional digital solutions',
      totalTime: 'P15W',
      image: {
        '@type': 'ImageObject',
        url: '/images/process-overview.webp',
        width: '1200',
        height: '675',
      },
      step: workProcessData.map((step) => ({
        '@type': 'HowToStep',
        name: step.title,
        text: step.description,
        position: step.id,
        duration: step.duration || 'PT1W',
      })),
    }),
    [],
  );

  // Enhanced step handlers with performance optimizations
  const handleSetActiveStep = useCallback(
    (id: number) => {
      if (id === activeStepId) return; // Prevent unnecessary updates

      setActiveStepId(id);
      setHasUserInteracted(true);

      // Announce to screen readers
      if (announcementRef.current) {
        const step = workProcessData.find((s) => s.id === id);
        announcementRef.current.textContent = `Now viewing step ${id}: ${step?.title}`;
      }
    },
    [activeStepId],
  );

  const handlePrevStep = useCallback(() => {
    const prevId = activeStepId > 1 ? activeStepId - 1 : workProcessData.length;
    handleSetActiveStep(prevId);
  }, [activeStepId, handleSetActiveStep]);

  const handleNextStep = useCallback(() => {
    const nextId = activeStepId < workProcessData.length ? activeStepId + 1 : 1;
    handleSetActiveStep(nextId);
  }, [activeStepId, handleSetActiveStep]);

  // Hover handlers for auto-play control
  const handleMouseEnter = useCallback(() => {
    if (!prefersReducedMotion) {
      setIsHovered(true);
    }
  }, [prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Auto-play functionality with reduced motion support
  useAutoPlay(
    workProcessData.length,
    !hasUserInteracted && !prefersReducedMotion,
    setActiveStepId,
    isHovered,
  );

  // Enhanced keyboard navigation with ARIA live regions
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle keys when focus is within the tablist
      if (
        event.target &&
        (event.target as Element).closest('[role="tablist"]')
      ) {
        let handled = false;

        switch (event.key) {
          case 'ArrowDown':
          case 'ArrowRight':
            event.preventDefault();
            handleNextStep();
            handled = true;
            break;
          case 'ArrowUp':
          case 'ArrowLeft':
            event.preventDefault();
            handlePrevStep();
            handled = true;
            break;
          case 'Home':
            event.preventDefault();
            handleSetActiveStep(1);
            handled = true;
            break;
          case 'End':
            event.preventDefault();
            handleSetActiveStep(workProcessData.length);
            handled = true;
            break;
          case 'Escape':
            (event.target as HTMLElement).blur();
            handled = true;
            break;
        }

        if (handled) {
          // Focus the active tab after navigation
          setTimeout(() => {
            const activeTab = document.getElementById(
              `step-tab-${activeStepId}`,
            );
            activeTab?.focus();
          }, 100);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleNextStep, handlePrevStep, handleSetActiveStep, activeStepId]);

  // Error boundary fallback
  if (!activeProcess || !ActiveIcon) {
    return (
      <div
        className="flex items-center justify-center min-h-[400px]"
        role="alert"
        aria-live="assertive"
      >
        <div className="text-center">
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Content Loading
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we load the process information...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Screen reader announcements */}
      <div
        ref={announcementRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      />

      <section
        ref={sectionRef}
        className="relative flex flex-col items-center px-4 py-8 sm:py-12 w-full bg-gray-100 dark:bg-slate-900 overflow-hidden"
        aria-labelledby="how-we-work-heading"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        {/* Performance-optimized decorative elements with reduced motion support */}
        {!prefersReducedMotion && (
          <div aria-hidden="true" className="absolute inset-0 -z-0">
            <div className="absolute top-[-10rem] left-[-20rem] md:left-[-15rem] w-[50rem] h-[50rem] bg-sky-300 dark:bg-sky-700 rounded-full filter blur-3xl opacity-20 dark:opacity-30"></div>
            <div className="absolute bottom-[-15rem] right-[-15rem] md:right-[-10rem] w-[45rem] h-[45rem] bg-purple-300 dark:bg-purple-700 rounded-full filter blur-3xl opacity-20 dark:opacity-30"></div>
            <div className="absolute top-[25rem] left-[5rem] md:left-[15rem] w-[35rem] h-[35rem] bg-green-300 dark:bg-green-700 rounded-full filter blur-3xl opacity-15 dark:opacity-25"></div>
          </div>
        )}

        <div className="relative z-10 w-[95vw] sm:w-[90vw] max-w-6xl py-12 h-full mb-10">
          <header className="text-center mb-12 md:mb-16">
            <h1
              id="how-we-work-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
              itemProp="name"
            >
              The Journey from Idea to Innovation
            </h1>
            <p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              itemProp="description"
            >
              Ready to build something remarkable? We guide you through a
              strategic 6-step journey that transforms your vision into a robust
              digital reality.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Navigation */}
            <nav
              className="space-y-3"
              role="tablist"
              aria-orientation="vertical"
              aria-label="Development Process Steps"
            >
              {workProcessData.map((step, index) => (
                <StepItem
                  key={step.id}
                  step={step}
                  index={index}
                  total={workProcessData.length}
                  isActive={activeStepId === step.id}
                  onClick={() => handleSetActiveStep(step.id)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </nav>

            {/* Content Panel */}
            <div className="lg:sticky lg:top-24 h-max">
              <div
                role="tabpanel"
                id={`step-panel-${activeProcess.id}`}
                aria-labelledby={`step-tab-${activeProcess.id}`}
                className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-slate-700"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeProcess.color} flex items-center justify-center shadow-lg shrink-0`}
                  >
                    <ActiveIcon
                      className="w-8 h-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <h2
                      className="text-2xl font-bold text-gray-800 dark:text-white"
                      itemProp="name"
                    >
                      {activeProcess.title}
                    </h2>
                  </div>
                </header>

                <div className="prose prose-gray dark:prose-invert max-w-none mb-6">
                  <p
                    className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg text-justify"
                    itemProp="text"
                  >
                    {activeProcess.description}
                  </p>
                </div>

                {/* Deliverables section */}
                <div className="pt-2 pr-4 pb-4 pl-4 mb-6 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Key Deliverables
                  </h3>
                  <ul
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                    role="list"
                  >
                    {activeProcess.deliverables.map((deliverable, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        role="listitem"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeProcess.color}`}
                          aria-hidden="true"
                        ></div>
                        <span className="text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progress indicator with lazy loading */}
                <Suspense
                  fallback={
                    <div className="animate-pulse h-20 bg-gray-200 dark:bg-slate-700 rounded"></div>
                  }
                >
                  <LazyProgressIndicator
                    activeStep={activeProcess.id}
                    totalSteps={workProcessData.length}
                    color={activeProcess.color}
                  />
                </Suspense>
              </div>
            </div>
          </div>

          {/* SEO-friendly content for crawlers */}
          <div className="sr-only">
            <h2>Complete Development Process Overview</h2>
            {workProcessData.map((step) => (
              <div
                key={step.id}
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <h3 itemProp="name">{step.title}</h3>
                <p itemProp="text">{step.description}</p>
                <meta itemProp="position" content={step.id.toString()} />
                <meta itemProp="duration" content={step.duration || 'PT1W'} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Planning;
