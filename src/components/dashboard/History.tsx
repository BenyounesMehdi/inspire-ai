import { getUserHisotory } from "@/utils/data/history/get-user-history";
import HistoryCard from "./HistoryCard";
import { NoData } from "../shared/NoData";
import { Content } from "@/types/Types";

export default async function History() {
  const data = await getUserHisotory();
  const history = data as Content[];

  if (history.length === 0) {
    return <NoData variant="search" />;
  }

  return (
    <div className="flex flex-col space-y-4">
      {data?.map((item) => {
        return <HistoryCard key={item.id} content={item} />;
      })}
    </div>
  );
}
