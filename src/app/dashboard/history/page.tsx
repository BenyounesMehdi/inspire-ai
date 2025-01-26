import History from "@/components/dashboard/History";

export default function Page() {
  return (
    <div className="container w-full  px-5 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Your Generation History
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          View all your previously generated content
        </p>
      </div>
      <History />
    </div>
  );
}
