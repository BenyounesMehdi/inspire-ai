"use client";

import {
  GalleryVerticalEnd,
  CreditCard,
  History,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: GalleryVerticalEnd,
      items: [
        {
          title: "Generate",
          url: "/dashboard/generate",
          icon: Sparkles,
        },

        {
          title: "History",
          url: "/dashboard/history",
          icon: History,
        },
        {
          title: "Pricing",
          url: "/pricing",
          icon: CreditCard,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center gap-2">
                <Link href="/">
                  <ArrowLeft />
                </Link>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-muted">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <span className="font-semibold">ContentGen</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="hover:text-primary focus-visible:text-primary"
                >
                  <Link href={item.url} className="font-medium">
                    <item.icon />
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className="hover:text-primary focus-visible:text-primary"
                        >
                          <Link
                            href={subItem.url}
                            className={`  ${
                              subItem.url === pathname
                                ? "bg-primary text-white "
                                : "text-primary"
                            }`}
                          >
                            <subItem.icon />
                            {subItem.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      <Button
        className="m-5 bg-green-600 hover:bg-green-700 text-white"
        asChild
      >
        <LogoutLink>Log out</LogoutLink>
      </Button>
    </Sidebar>
  );
}
