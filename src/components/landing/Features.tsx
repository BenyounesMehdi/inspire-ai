import { features } from "@/constants/Constants";

export default function Features() {
  return (
    <section className="container mx-auto py-8 space-y-6 md:py-12 lg:py-24 px-7">
      <div className="mx-auto flex  flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to create amazing content
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((e) => {
          return (
            <div
              key={e.id}
              className="relative overflow-hidden rounded-lg border bg-gradient-to-r from-green-400 to-green-600 p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <e.icon className="h-12 w-12 text-primary-500" />
                <div className="space-y-2">
                  <h3 className="font-bold">{e.title}</h3>
                  <p className="text-sm text-muted">{e.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
