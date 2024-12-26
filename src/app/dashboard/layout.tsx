import { AppSidebar } from "@/components/dashboard/App-Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full container mx-auto mt-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
