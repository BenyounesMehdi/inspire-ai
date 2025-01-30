import TemplatesWrapper from "@/components/dashboard/TemplatesWrapper";
import { getUserSubscription } from "@/utils/data/subscription/get-user-subscription";

export default async function Page() {
  const SubscribedUser = await getUserSubscription();
  const isSubscribedUser = SubscribedUser?.status === "active";

  return <TemplatesWrapper isSubscribed={isSubscribedUser as boolean} />;
}
