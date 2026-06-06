import './input.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Contact from './components/Contact.jsx';
import HeroSection from './components/HeroSection.jsx';
import StartSection from './components/StartSection.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import Footer from './components/Footer.jsx';
import ClickSpark from './components/ClickSpark.jsx';

// PERFORMANCE: Lazy load route components for code splitting
const Certificate = lazy(() => import('./components/Certificate.jsx'));
const MyNotes = lazy(() => import('./components/MyNotes.jsx'));
const MyRoadMap = lazy(() => import('./components/MyRoadMap.jsx'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full py-xl flex items-center justify-center">
    <div className="text-on-surface-variant">Loading...</div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ClickSpark sparkColor="#0f766e" sparkSize={15} sparkRadius={18} sparkCount={10} duration={450}>
        <div className="page-shell min-h-screen bg-surface-main text-on-surface">
          <NavBar />
          <main className="w-full">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <StartSection />
                      <CoursesSection />
                    </>
                  }
                />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/roadmap" element={<MyRoadMap />} />
                <Route path="/notes" element={<MyNotes />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ClickSpark>
    </BrowserRouter>
  );
}

export default App;
