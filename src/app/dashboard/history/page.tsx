import History from "@/components/dashboard/History";
import { getUser } from "@/utils/data/user/get-user";

export default async function Page() {
  const user = await getUser();
  return (
    <div className="container w-full  px-5 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your History</h1>
        <p className="text-lg text-muted-foreground mt-2">
          View all your previously generated content
        </p>
      </div>
      <History userId={user?.id as string} />
    </div>
  );
}
