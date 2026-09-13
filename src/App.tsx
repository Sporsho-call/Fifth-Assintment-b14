import { useEffect, useState } from 'react';
import type { Technology } from './types/technology';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { TechCard } from './components/TechCard';
import { StackSidebar } from './components/StackSidebar';
import { Footer } from './components/Footer';

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/technologies.json');

        if (!response.ok) {
          throw new Error('Failed to load technologies');
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch {
        toast.error('Failed to load technologies');
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isExist = stack.some((item) => item.id === tech.id);

    if (isExist) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);

    toast.success(`Added ${tech.name} to stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const item = stack.find(
      (technology) => technology.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (technology) => technology.id !== id
      )
    );

    if (item) {
      toast.info(`Removed ${item.name}`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);

    toast.info('Stack cleared!');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">

      <ToastContainer
        autoClose={2000}
        position="top-right"
        theme="light"
      />

      <Navbar />

      <main>

        <Banner />

        {/* TECHNOLOGIES */}
        <section
          id="technologies"
          className="mx-auto max-w-7xl px-6 py-10 md:px-8"
        >

          <div className="mb-7">

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">

              Explore the{' '}

              <span className="brand-gradient-text">
                Technologies
              </span>

            </h2>

            <p className="mt-2 text-[11px] text-slate-400 md:text-xs">
              Pick one technology per category to build your ideal stack.
            </p>

          </div>

          {loading ? (

            <div className="flex flex-col items-center justify-center py-20">

              <div className="loading-spinner" />

              <p className="mt-3 text-xs text-slate-400">
                Loading technologies...
              </p>

            </div>

          ) : technologies.length === 0 ? (

            <p className="py-20 text-center text-sm text-slate-400">
              No technologies available.
            </p>

          ) : (

            <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-4">

              {/* TECHNOLOGY CARDS */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">

                {technologies.map((tech) => {

                  const isAdded = stack.some(
                    (item) => item.id === tech.id
                  );

                  return (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAdd={handleAddToStack}
                      isAdded={isAdded}
                    />
                  );
                })}

              </div>

              {/* SIDEBAR */}
              <div className="lg:col-span-1">

                <StackSidebar
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />

              </div>

            </div>
          )}

        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="mx-auto max-w-7xl px-6 py-12 md:px-8"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            Projects
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Build projects using your selected technologies.
          </p>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-12 md:px-8"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            About
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Dev Stack helps developers explore, compare and organize
            technologies for modern web development.
          </p>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 py-12 md:px-8"
        >
          <h2 className="text-2xl font-bold text-slate-900">
            Contact
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Contact information can be added here.
          </p>
        </section>

      </main>

      <Footer />

    </div>
  );
};

export default App;