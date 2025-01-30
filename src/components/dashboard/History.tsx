import HistoryCard from "./HistoryCard";
import { NoData } from "../shared/NoData";
import { Content } from "@/types/Types";
import { getUserHistory } from "@/utils/data/history/get-user-history";

type HistoryProps = {
  userId: string;
};

export default async function History({ userId }: HistoryProps) {
  const data = await getUserHistory(userId);
  const history = data as Content[];

  if (!history || history.length === 0) {
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
