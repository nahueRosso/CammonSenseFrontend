"use client";

import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header({ parent, child }:{
    parent: string;
    child: string;
  }) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                <b>{parent}</b> - <b>{child}</b>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto px-3"></div>
    </header>
  );
}

// Uso del Header
export function App() {
  const [currentSelection, setCurrentSelection] = useState({
    parent: "Dashboard",
    child: "Dashboard-1",
  });

  return (
    <Header
      parent={currentSelection.parent}
      child={currentSelection.child}
    />
  );
}
