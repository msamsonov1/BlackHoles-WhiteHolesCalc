import React from 'react';
import { Users } from 'lucide-react';

interface VisitorCounterProps {
  count: number;
}

const VisitorCounter: React.FC<VisitorCounterProps> = ({ count }) => {
  return (
    <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
      <Users className="h-4 w-4 text-blue-400" />
      <span className="text-sm text-gray-300">
        {count.toLocaleString()} visitors
      </span>
    </div>
  );
};

export default VisitorCounter;