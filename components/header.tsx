import { Building2, Home } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-blue-600" />
          <h1 className="text-lg font-semibold text-blue-900">
            LPPEH Search Portal
          </h1>
        </div>
        <Button variant="ghost" size="sm">
          <Home className="w-4 h-4 mr-2" />
          Home
        </Button>
      </div>
    </header>
  );
};

export default Header;
