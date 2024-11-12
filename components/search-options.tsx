import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, User } from "lucide-react";

interface SearchOption {
  type: string;
  icon: React.FC<{ className?: string }>;
  label: string;
}

interface SearchOptionsProps {
  searchType: string;
  setSearchType: (type: string) => void;
}

const SearchOptions: React.FC<SearchOptionsProps> = ({ searchType, setSearchType }) => {
  const searchOptions: SearchOption[] = [
    { type: 'firm', icon: Building2, label: 'Search for Firm' },
    { type: 'member', icon: Users, label: 'Search for Member' },
    { type: 'negotiator', icon: User, label: 'Search for Negotiator' },
  ];

  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Search Options</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {searchOptions.map((option) => (
          <Button
            key={option.type}
            variant={searchType === option.type ? "default" : "outline"}
            className="justify-start gap-2 h-12"
            onClick={() => setSearchType(option.type)}
          >
            <option.icon className="w-5 h-5" />
            {option.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default SearchOptions;