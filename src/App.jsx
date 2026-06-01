import './input.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <ClickSpark sparkColor="#0f766e" sparkSize={15} sparkRadius={18} sparkCount={10} duration={450}>
        <div className="page-shell min-h-screen bg-surface-main text-on-surface">
          <NavBar />
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
