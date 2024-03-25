"use client";

import qs from "query-string";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

export const SearchInput = () => {
  const router = useRouter();
  const [debouncedValue, setValue] = useDebounceValue("", 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground h-4 w-4 transform" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search board"
        onChange={handleChange}
      />
    </div>
  );
};
