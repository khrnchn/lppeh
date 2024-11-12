import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface ResultItem {
  name: string;
  id: string;
  role: string;
  license: string;
  expiry: string;
}

interface ResultsGridProps {
  results: ResultItem[];
}

const ResultsGrid: React.FC<ResultsGridProps> = ({ results }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {results.map((result, index) => (
        <motion.div
          key={result.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ResultCard result={result} />
        </motion.div>
      ))}
    </div>
  );
};

const ResultCard: React.FC<{ result: ResultItem }> = ({ result }) => {
  return (
    <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-blue-900 mb-2">{result.name}</h3>
        <p className="text-sm text-blue-700 mb-1">{result.id}</p>
        <p className="text-sm text-blue-600 mb-1">{result.role}</p>
        <p className="text-sm text-blue-600 mb-2">License: {result.license}</p>
        <div className="flex items-center gap-1 text-sm text-blue-500">
          <Calendar className="w-4 h-4" />
          Expiry on {result.expiry}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsGrid;