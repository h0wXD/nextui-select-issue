import {useState, useRef} from "react"
import {Input} from "@nextui-org/react";

type SearchProps = {
  onSearch: (text: string) => void
}
function Search({
  onSearch
}: SearchProps) {
  const [value, setValue] = useState('');
  const ref = useRef<ReturnType<typeof setTimeout> | number>(0);

  const search = (text: string): void => {
    setValue(text);
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      onSearch(text);
    }, 500);
  }

  return (
    <div className="sticky top-0 z-10 bg-black col-span-1 w-[400px] pt-3 pb-3">
      <Input
        isClearable
        radius="lg"
        placeholder="Type to search..."
        value={value}
        onValueChange={search}
      />
    </div>
  );
}

export default Search;
