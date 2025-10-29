import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ProductShowcase from './components/ProductShowcase';
import ContactOrder from './components/ContactOrder';

function App() {
  useEffect(() => {
    // Ensure smooth scroll behavior for anchor navigation
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
      <Hero />
      <About />
      <ProductShowcase />
      <ContactOrder />
    </div>
  );
}

export default App;
