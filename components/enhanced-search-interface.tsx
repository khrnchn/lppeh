"use client";

import { useState } from "react";
import Header from "./header";
import SearchOptions from "./search-options";
import QuickStats from "./quick-stats";
import SearchBar from "./searchbar";
import ResultsGrid from "./results-grid";
import { motion } from "framer-motion";

const results = [
  {
    name: "AFZ REALTY SDN BHD",
    id: "E (1) 0094",
    role: "Real Estate Negotiator",
    license: "REN 12345",
    expiry: "12/2024",
  },
  {
    name: "XYZ PROPERTIES",
    id: "E (2) 1234",
    role: "Property Consultant",
    license: "REN 67890",
    expiry: "06/2025",
  },
  {
    name: "ABC REAL ESTATE",
    id: "E (3) 5678",
    role: "Estate Agent",
    license: "REN 24680",
    expiry: "03/2026",
  },
  {
    name: "CITY HOMES REALTY",
    id: "E (1) 9876",
    role: "Real Estate Negotiator",
    license: "REN 13579",
    expiry: "09/2024",
  },
  {
    name: "METRO PROPERTY SERVICES",
    id: "E (2) 3456",
    role: "Property Manager",
    license: "REN 97531",
    expiry: "12/2025",
  },
];

export function EnhancedSearchInterface() {
  const [searchType, setSearchType] = useState("firm");
  const [, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <main className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Find Real Estate Professionals
          </h2>
          <p className="text-xl text-blue-700">
            Search for firms, members, or negotiators in our comprehensive
            database
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <SearchOptions
              searchType={searchType}
              setSearchType={setSearchType}
            />
            <QuickStats />
          </div>

          <div className="space-y-6">
            <SearchBar
              searchType={searchType}
              setSearchQuery={setSearchQuery}
            />
            <ResultsGrid results={results} />
          </div>
        </div>
      </main>
    </div>
  );
}
