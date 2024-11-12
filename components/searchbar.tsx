import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  searchType: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchType, setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
          <Input
            className="pl-10 h-12 text-lg border-blue-200 focus:border-blue-500"
            placeholder={`Search ${searchType}s...`}
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchBar;