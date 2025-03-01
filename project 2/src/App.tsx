import React, { useState, useEffect } from 'react';
import { ArrowRight, Moon, Sun, Github, Info, ChevronDown, ChevronUp } from 'lucide-react';
import BlackHoleContent from './components/BlackHoleContent';
import WhiteHoleContent from './components/WhiteHoleContent';
import VisitorCounter from './components/VisitorCounter';

function App() {
  const [activeHole, setActiveHole] = useState<'black' | 'white'>('black');
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  useEffect(() => {
    // Simulate visitor counter increment
    const storedCount = localStorage.getItem('visitorCount');
    if (storedCount) {
      setVisitorCount(parseInt(storedCount, 10));
    } else {
      const initialCount = Math.floor(Math.random() * 1000) + 500;
      setVisitorCount(initialCount);
      localStorage.setItem('visitorCount', initialCount.toString());
    }

    // Increment counter for new visits
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().toDateString();
    if (lastVisit !== now) {
      const newCount = visitorCount + 1;
      setVisitorCount(newCount);
      localStorage.setItem('visitorCount', newCount.toString());
      localStorage.setItem('lastVisit', now);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {activeHole === 'black' ? (
            <Moon className="h-8 w-8 text-white" />
          ) : (
            <Sun className="h-8 w-8 text-yellow-300" />
          )}
          <h1 className="text-2xl font-bold">Cosmic Horizons</h1>
        </div>
        <div className="flex items-center space-x-4">
          <VisitorCounter count={visitorCount} />
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Info className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Info Panel */}
      {showInfo && (
        <div className="container mx-auto px-4 py-4 bg-gray-800 rounded-lg mb-6">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold mb-2">The Schwarzschild Metric</h2>
            <button 
              onClick={() => setShowInfo(false)}
              className="text-gray-400 hover:text-white"
            >
              <ChevronUp className="h-5 w-5" />
            </button>
          </div>
          <p className="mb-4">
            The Schwarzschild metric describes the geometry of spacetime around a non-rotating, electrically neutral massive object:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg mb-4 overflow-x-auto">
            <code className="text-green-400">
              ds² = -(1 - r_s/r)c²dt² + (1 - r_s/r)^(-1)dr² + r²(dθ² + sin²θdφ²)
            </code>
          </div>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>r_s:</strong> Schwarzschild radius (event horizon)</li>
            <li><strong>r:</strong> Radial coordinate</li>
            <li><strong>t:</strong> Time coordinate</li>
            <li><strong>θ and φ:</strong> Angular coordinates</li>
            <li><strong>c:</strong> Speed of light</li>
          </ul>
          <p>
            Inside the event horizon (r &lt; r_s), the terms (1 - r_s/r) and (1 - r_s/r)^(-1) change signs, 
            causing the radial coordinate to become timelike and the time coordinate to become spacelike.
          </p>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hole Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-full">
            <button
              onClick={() => setActiveHole('black')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeHole === 'black' 
                  ? 'bg-blue-900 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Black Hole
            </button>
            <button
              onClick={() => setActiveHole('white')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeHole === 'white' 
                  ? 'bg-yellow-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              White Hole
            </button>
          </div>
        </div>

        {/* Dynamic Content Based on Selection */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          {activeHole === 'black' ? <BlackHoleContent /> : <WhiteHoleContent />}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 mt-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Cosmic Horizons. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;