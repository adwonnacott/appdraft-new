'use client';

interface CostImpactCardProps {
  totalCost: number;
}

export default function CostImpactCard({ totalCost }: CostImpactCardProps) {
  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-orange-200">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">The Business Impact</h2>
        <p className="text-gray-600 mb-6">
          These issues are costing you approximately
        </p>
        <div className="text-5xl font-bold text-red-600 mb-2">
          £{totalCost.toLocaleString()}
        </div>
        <p className="text-xl text-gray-700">per year</p>
      </div>
    </div>
  );
}
