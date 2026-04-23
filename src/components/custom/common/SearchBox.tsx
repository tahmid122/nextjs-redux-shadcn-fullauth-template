"use client";
import { Input } from "@/components/ui/input";
import CategoriesDropdown from "./CategoriesDropdown";
import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<{
    category: string;
    query: string;
  }>({
    category: "all",
    query: "",
  });
  //   handle search
  const handleSearch = () => {
    router.push(
      `/search?category=${searchQuery.category}&query=${searchQuery.query}`,
    );
  };
  return (
    <div className="flex-1 rounded px-4 py-2.5 bg-muted/50 h-11 flex items-center">
      {/* dropdown */}
      <CategoriesDropdown setSearchQuery={setSearchQuery} />
      {/* search bar */}
      <Input
        onChange={(e) =>
          setSearchQuery({ ...searchQuery, query: e.target.value })
        }
        className="shadow-none border-0 focus-visible:ring-0 border-l rounded-none"
        placeholder="Search on Guiters ..."
      />
      {/* search icon */}

      <button onClick={handleSearch} className="cursor-pointer">
        <Search className="text-gray-400 hover:text-primary" />
      </button>
    </div>
  );
};

export default SearchBox;
