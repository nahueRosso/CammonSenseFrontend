"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/app-header";
import { ProfileForm } from "@/components/app-form";

export default function Page() {
  const [currentSelection, setCurrentSelection] = useState({
    parent: "Dashboard",
    child: "Dashboard-1",
  });

  return (
    <SidebarProvider>
      <AppSidebar onItemClick={(parent, child) => setCurrentSelection({ parent, child })} />
      <SidebarInset>
        <Header parent={currentSelection.parent} child={currentSelection.child}/>


        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <ProfileForm />
        </div>
        
      </SidebarInset>
    </SidebarProvider>
  );
}