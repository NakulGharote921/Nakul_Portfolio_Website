import './input.css';
import { useEffect, useMemo, useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Contact from './components/Contact.jsx';
import HeroSection from './components/HeroSection.jsx';
import StartSection from './components/StartSection.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import Footer from './components/Footer.jsx';
import Certificate from './components/Certificate.jsx';
import MyNotes from './components/MyNotes.jsx';
import MyRoadMap from './components/MyRoadMap.jsx';
import ClickSpark from './components/ClickSpark.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      const hasStoredPreference = localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === 'dark';
      if (!hasStoredPreference) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const themeLabel = useMemo(() => (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'), [theme]);

  return (
    <BrowserRouter>
      <ClickSpark sparkColor="#0f766e" sparkSize={15} sparkRadius={18} sparkCount={10} duration={450}>
        <div className="page-shell min-h-screen bg-surface-main text-on-surface">
          <NavBar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} themeLabel={themeLabel} />
          <main className="w-full">
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
          </main>
          <Footer />
        </div>
      </ClickSpark>
    </BrowserRouter>
    
  );
}

export default App;
