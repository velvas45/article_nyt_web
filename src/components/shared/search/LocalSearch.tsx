import { useDebounce } from "usehooks-ts";
import { ChangeEvent, useState, useEffect } from "react";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const LocalSearch = ({ value, setValue }: Props) => {
  const [input, setInput] = useState<string>(value);
  const debouncedValue = useDebounce<string>(input, 800);

  useEffect(() => {
    setValue(input);
  }, [debouncedValue]);

  return (
    <input
      type="text"
      value={input}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
      }}
      placeholder="Search Article..."
      className="py-2 px-4 flex-1 bg-transparent text-gray-800 placeholder:text-gray-800 border border-gray-800 rounded-md focus:outline-none focus:ring-0"
    />
  );
};

export default LocalSearch;
