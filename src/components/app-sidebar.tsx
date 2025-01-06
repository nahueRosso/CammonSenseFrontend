import * as React from "react";
import { ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Dashboard-1",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Dashboard-2",
          url: "#",
          type: "TasksPage",
        },
      ],
    },
    {
      title: "Client",
      url: "#",
      items: [
        {
          title: "User",
          url: "#",
          type: "ProfileForm",
        },
        {
          title: "Companies",
          url: "#",
          type: "TasksPage",
          isActive: true,
        },
        {
          title: "Form Requests",
          url: "#",
          type: "LoginForm",
        },
        {
          title: "Transactions",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Recurrent Transactions",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Documents",
          url: "#",
          type: "TasksPage",
        },
      ],
    },
    {
      title: "Portfolios",
      url: "#",
      items: [
        {
          title: "Portfolios-1",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Portfolios-2",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Portfolios-3",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Portfolios-4",
          url: "#",
          type: "TasksPage",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Settings-1",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Settings-2",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Settings-3",
          url: "#",
          type: "TasksPage",
        },
        {
          title: "Settings-4",
          url: "#",
          type: "TasksPage",
        },
      ],
    },
  ],
};


export function AppSidebar({
  onItemClick,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  onItemClick?: (parent: string, child: string, type: string) => void;
}) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <Image
                src="/isologo.png"
                alt="Isologo"
                width={542}
                height={32}
                className="rounded-md"
              />
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width]"
                align="start"
              ></DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {data.navMain.map((parentItem) => (
          <Collapsible
            key={parentItem.title}
            title={parentItem.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {parentItem.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {parentItem.items.map((childItem) => (
                      <SidebarMenuItem key={childItem.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={childItem.isActive}
                          onClick={() =>
                            onItemClick?.(
                              parentItem.title,
                              childItem.title,
                              childItem.type // Pasar el tipo
                            )
                          }
                        >
                          <a href={childItem.url}>{childItem.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

