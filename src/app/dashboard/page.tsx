"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/app-header";
import { TableParent } from "@/components/app-tabels";

export default function Page() {
  const [currentSelection, setCurrentSelection] = useState({
    parent: "Dashboard",
    child: "Dashboard-1",
  });

  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer" },
  ];

  return (
    <SidebarProvider>
      <AppSidebar onItemClick={(parent, child) => setCurrentSelection({ parent, child })} />
      <SidebarInset>
        <Header parent={currentSelection.parent} child={currentSelection.child}/>


        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <TableParent parent={currentSelection.parent} child={currentSelection.child} data={tableData} />
        </div>
        
      </SidebarInset>
    </SidebarProvider>
  );
}
