import React, { useState, useEffect } from 'react';
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import SchwarzschildCalculator from './SchwarzschildCalculator';

const BlackHoleContent: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">Black Hole Physics</h2>
        <button 
          onClick={() => setShowCalculator(!showCalculator)}
          className="flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Calculator className="h-5 w-5" />
          <span>Calculator</span>
          {showCalculator ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {showCalculator && (
        <div className="mb-8 p-4 bg-gray-900 rounded-lg">
          <SchwarzschildCalculator holeType="black" />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Event Horizon</h3>
          <p className="text-gray-300 mb-4">
            The event horizon is a boundary in spacetime beyond which events cannot affect an outside observer. 
            It is the point of no return—once an object crosses this threshold, it will inevitably be drawn toward 
            the singularity at the center of the black hole.
          </p>
          <p className="text-gray-300 mb-4">
            At the event horizon (r = r_s), the term (1 - r_s/r) becomes zero, causing the time component 
            of the metric to vanish and the radial component to become infinite.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Time Dilation</h3>
          <p className="text-gray-300 mb-4">
            As an object approaches the event horizon, an outside observer would see time slow down for that object. 
            From the observer's perspective, it would take an infinite amount of time for the object to reach the horizon.
          </p>
          <p className="text-gray-300">
            This is a direct consequence of the Schwarzschild metric, where the time component approaches zero 
            as r approaches r_s.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Singularity</h3>
          <p className="text-gray-300 mb-4">
            At the center of a black hole (r = 0) lies a gravitational singularity—a point where the curvature 
            of spacetime becomes infinite and the laws of physics as we know them break down.
          </p>
          <p className="text-gray-300 mb-4">
            In the Schwarzschild metric, this is represented by the terms becoming undefined at r = 0.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Spacetime Reversal</h3>
          <p className="text-gray-300 mb-4">
            Inside the event horizon (r &lt; r_s), the radial coordinate (r) becomes timelike, and the time 
            coordinate (t) becomes spacelike. This means that movement in the r-direction is as inevitable as 
            the forward flow of time outside the black hole.
          </p>
          <p className="text-gray-300">
            All worldlines within the event horizon terminate at the singularity, making it impossible to escape.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Black hole visualization" 
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
        <p className="text-gray-400 text-sm mt-2 text-center">
          Artistic representation of a black hole and its event horizon
        </p>
      </div>
    </div>
  );
};

export default BlackHoleContent;