import TemplatesWrapper from "@/components/dashboard/TemplatesWrapper";
import { getUserSubscription } from "@/utils/data/subscription/get-user-subscription";

export default async function Page() {
  const isSubscribedUser = await getUserSubscription();

  return <TemplatesWrapper isSubscribed={isSubscribedUser as boolean} />;
}
