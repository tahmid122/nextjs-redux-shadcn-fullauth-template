"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction, useState } from "react";
const CategoriesDropdown = ({
  setSearchQuery,
}: {
  setSearchQuery: Dispatch<
    SetStateAction<{
      category: string;
      query: string;
    }>
  >;
}) => {
  const handleCategorySelect = (value: string) => {
    setSearchQuery((prev) => ({ ...prev, category: value }));
  };
  return (
    <Select onValueChange={(value) => handleCategorySelect(value)}>
      <SelectTrigger className="border-0 shadow-none focus-visible:ring-0 text-black">
        <SelectValue
          placeholder="Select a category"
          className="text-black placeholder:text-black"
        />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
          <SelectItem value="clothing">Clothing</SelectItem>
          <SelectItem value="books">Books</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CategoriesDropdown;
