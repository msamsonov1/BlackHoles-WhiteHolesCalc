import React, { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import SchwarzschildCalculator from './SchwarzschildCalculator';

const WhiteHoleContent: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-4">White Hole Physics</h2>
        <button 
          onClick={() => setShowCalculator(!showCalculator)}
          className="flex items-center space-x-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Calculator className="h-5 w-5" />
          <span>Calculator</span>
          {showCalculator ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>

      {showCalculator && (
        <div className="mb-8 p-4 bg-gray-900 rounded-lg">
          <SchwarzschildCalculator holeType="white" />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Theoretical Concept</h3>
          <p className="text-gray-300 mb-4">
            A white hole is a hypothetical region of spacetime that cannot be entered from the outside, 
            but from which matter and light can escape. It is essentially the time-reversal of a black hole.
          </p>
          <p className="text-gray-300 mb-4">
            In the Schwarzschild metric, a white hole can be described by reversing the direction of the time 
            coordinate (t) when moving away from the singularity.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Ejection Horizon</h3>
          <p className="text-gray-300 mb-4">
            Similar to the event horizon of a black hole, a white hole has an "ejection horizon"—a boundary 
            that matter and energy can only cross in an outward direction.
          </p>
          <p className="text-gray-300">
            The mathematical description is identical to that of a black hole's event horizon, but with time 
            flowing in the opposite direction.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Thermodynamics</h3>
          <p className="text-gray-300 mb-4">
            While black holes absorb matter and increase in entropy, white holes would theoretically eject matter 
            and decrease in entropy. This apparent violation of the second law of thermodynamics is one reason 
            why many physicists are skeptical about the existence of white holes.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Wormhole Connections</h3>
          <p className="text-gray-300 mb-4">
            Some theoretical models suggest that black holes and white holes might be connected via wormholes, 
            forming a bridge between different regions of spacetime or even different universes.
          </p>
          <p className="text-gray-300 mb-4">
            In this scenario, matter falling into a black hole would emerge from a white hole elsewhere.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Existence in Reality</h3>
          <p className="text-gray-300">
            While mathematically allowed by general relativity, there is currently no observational evidence 
            for white holes, and many theoretical issues remain unresolved.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src="https://images.unsplash.com/photo-1506703719100-a0b3a3c7be4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="White hole concept" 
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
        <p className="text-gray-400 text-sm mt-2 text-center">
          Artistic representation of a white hole ejecting matter and energy
        </p>
      </div>
    </div>
  );
};

export default WhiteHoleContent;