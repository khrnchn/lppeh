import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const QuickStats = () => {
  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-600">582</p>
          <p className="text-sm text-blue-700">Active Negotiators</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">203</p>
          <p className="text-sm text-blue-700">Registered Firms</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStats;
