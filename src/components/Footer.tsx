import {useState} from "react"
import {Select, SelectItem} from "@nextui-org/select";
import {days} from "../data";
import {DayType} from "../types";

function Footer() {
  const [Day, setDay] = useState<DayType | undefined>(undefined);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = Number(e.target.value);
    const day = days.find(x => x.key === key);
    setDay(day);
  };

  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 h-[80px] z-10">
        <div className="grid place-items-center">
          <div className="bg-black w-[400px] pt-3 pb-3 flex flex-row gap-2">
            <div className="flex flex-col grow">
              <Select
                items={days}
                label="Select a Day"
                className="w-[100%]"
                selectedKeys={Day ? [Day.key + ''] : []}
                onChange={handleSelectionChange}
              >
                {(day) => <SelectItem key={day.key}>{day.label}</SelectItem>}
              </Select>
            </div>
            <span className="flex flex-col justify-center">
              test
            </span>
          </div>
        </div>
      </div>
      <div className="h-[75px]">
      </div>
    </div>
  );
}

export default Footer;
