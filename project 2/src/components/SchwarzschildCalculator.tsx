import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

interface SchwarzschildCalculatorProps {
  holeType: 'black' | 'white';
}

const SchwarzschildCalculator: React.FC<SchwarzschildCalculatorProps> = ({ holeType }) => {
  const [mass, setMass] = useState<number>(1); // Solar masses
  const [radius, setRadius] = useState<number>(10); // km from event horizon
  const [speedOfLight, setSpeedOfLight] = useState<number>(299792.458); // km/s
  const [results, setResults] = useState<{
    schwarzschildRadius: number;
    timeDilation: number;
    escapeVelocity: number;
    curvature: number;
  }>({
    schwarzschildRadius: 0,
    timeDilation: 0,
    escapeVelocity: 0,
    curvature: 0,
  });

  // Constants
  const G = 6.67430e-11; // Gravitational constant in m^3 kg^-1 s^-2
  const solarMassInKg = 1.989e30; // Mass of the Sun in kg
  
  useEffect(() => {
    calculateResults();
  }, [mass, radius, speedOfLight]);

  const calculateResults = () => {
    // Convert mass to kg
    const massInKg = mass * solarMassInKg;
    
    // Calculate Schwarzschild radius in km
    const rs = (2 * G * massInKg) / (speedOfLight * speedOfLight) / 1000;
    
    // Calculate time dilation factor
    let timeDilation = 0;
    if (radius > rs) {
      timeDilation = 1 / Math.sqrt(1 - rs / radius);
    }
    
    // Calculate escape velocity at given radius (km/s)
    const escapeVelocity = speedOfLight * Math.sqrt(rs / radius);
    
    // Calculate spacetime curvature (simplified representation)
    const curvature = rs / (radius * radius * radius);
    
    setResults({
      schwarzschildRadius: rs,
      timeDilation: timeDilation,
      escapeVelocity: escapeVelocity,
      curvature: curvature,
    });
  };

  const resetValues = () => {
    setMass(1);
    setRadius(10);
    setSpeedOfLight(299792.458);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        {holeType === 'black' ? 'Black' : 'White'} Hole Calculator
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-gray-400 mb-2">Mass (Solar Masses)</label>
          <input
            type="number"
            min="0.1"
            max="1000000"
            step="0.1"
            value={mass}
            onChange={(e) => setMass(parseFloat(e.target.value))}
            className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-1">
            <input
              type="range"
              min="0.1"
              max="100"
              step="0.1"
              value={mass}
              onChange={(e) => setMass(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-400 mb-2">Radius (km from center)</label>
          <input
            type="number"
            min={results.schwarzschildRadius + 0.1}
            max="10000"
            step="0.1"
            value={radius}
            onChange={(e) => setRadius(parseFloat(e.target.value))}
            className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-1">
            <input
              type="range"
              min={results.schwarzschildRadius + 0.1}
              max="1000"
              step="0.1"
              value={radius}
              onChange={(e) => setRadius(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-400 mb-2">Speed of Light (km/s)</label>
          <input
            type="number"
            value={speedOfLight}
            onChange={(e) => setSpeedOfLight(parseFloat(e.target.value))}
            className="w-full bg-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
          <button
            onClick={resetValues}
            className="mt-2 flex items-center space-x-1 text-blue-400 hover:text-blue-300"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Reset Values</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Schwarzschild Radius</h4>
          <p className="text-3xl font-bold text-blue-400">
            {results.schwarzschildRadius.toFixed(4)} km
          </p>
          <p className="text-gray-400 mt-2">
            The radius defining the event horizon, where escape velocity equals the speed of light.
          </p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Time Dilation Factor</h4>
          <p className="text-3xl font-bold text-blue-400">
            {results.timeDilation.toFixed(4)}
          </p>
          <p className="text-gray-400 mt-2">
            How much slower time passes relative to an observer at infinity.
            {results.timeDilation > 10 && " Extreme time dilation detected!"}
          </p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Escape Velocity</h4>
          <p className="text-3xl font-bold text-blue-400">
            {results.escapeVelocity.toFixed(2)} km/s
          </p>
          <p className="text-gray-400 mt-2">
            {results.escapeVelocity > speedOfLight * 0.5 
              ? "Extremely high escape velocity required!"
              : "Velocity needed to escape the gravitational pull at this radius."}
          </p>
        </div>
        
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Spacetime Curvature</h4>
          <p className="text-3xl font-bold text-blue-400">
            {results.curvature.toExponential(4)}
          </p>
          <p className="text-gray-400 mt-2">
            Relative measure of spacetime curvature (simplified representation).
          </p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-700 rounded-lg">
        <h4 className="text-lg font-medium mb-2">Interpretation</h4>
        <p className="text-gray-300">
          {holeType === 'black' 
            ? `At a distance of ${radius} km from the center of a black hole with mass ${mass} solar masses, 
               spacetime is significantly curved. The event horizon is located at ${results.schwarzschildRadius.toFixed(2)} km. 
               ${radius <= results.schwarzschildRadius 
                 ? "You are inside the event horizon! Escape is impossible." 
                 : `You are ${(radius - results.schwarzschildRadius).toFixed(2)} km from the event horizon.`}`
            : `For a theoretical white hole with mass ${mass} solar masses, the ejection horizon would be at 
               ${results.schwarzschildRadius.toFixed(2)} km. Unlike a black hole, matter can only move outward 
               from this boundary. ${radius <= results.schwarzschildRadius 
                 ? "You are inside the ejection horizon!" 
                 : `You are ${(radius - results.schwarzschildRadius).toFixed(2)} km from the ejection horizon.`}`
          }
        </p>
      </div>
    </div>
  );
};

export default SchwarzschildCalculator;