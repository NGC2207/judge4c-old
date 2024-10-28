"use client";

import * as React from "react";
import {
  BicepsFlexed,
  BookOpen,
  Bot,
  GraduationCap,
  LifeBuoy,
  Map,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "ngc2207",
    email: "cfngc3109@gmail.com",
    avatar: "/litchi.svg",
  },
  navMain: [
    {
      title: "试炼场",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "历史记录",
          url: "#",
        },
        {
          title: "我的收藏",
          url: "#",
        },
        {
          title: "设置",
          url: "#",
        },
      ],
    },
    {
      title: "AI助教",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "设置",
          url: "#",
        }
      ],
    },
    {
      title: "文档",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "简介",
          url: "#",
        },
        {
          title: "入门指南",
          url: "#",
        },
        {
          title: "教程",
          url: "#",
        },
        {
          title: "更新日志",
          url: "#",
        },
      ],
    },
    {
      title: "应用设置",
      url: "#",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "支持",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "反馈",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "校园助手",
      url: "#",
      icon: Map,
    },
    {
      name: "健身俱乐部",
      url: "#",
      icon: BicepsFlexed,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GraduationCap className="size-6" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">上海电力大学</span>
                  <span className="truncate text-xs">教育机构</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
