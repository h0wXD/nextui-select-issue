import {Card, CardHeader} from "@nextui-org/react";
import {SentenceType} from "../types";

function Sentence({
  item
}: {
  item: SentenceType
}) {
  return (
    <Card className={`z-0 col-span-1 w-[400px]`} id={`card-${item.id}`}>
      <CardHeader className="flex gap-3">
        <div className="flex grow">
          <p className="text-md">{item.id} {item.title}</p>
        </div>
      </CardHeader>
    </Card>
  )
}

export default Sentence;