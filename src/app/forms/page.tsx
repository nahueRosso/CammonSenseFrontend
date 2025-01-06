"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/app-header";
import { ProfileForm } from "@/components/app-form";
import { TasksPage } from "@/components/app-tasks";
import { LoginForm } from "@/components/app-login-form"

export default function Page() {
  const [currentSelection, setCurrentSelection] = useState({
    parent: "Dashboard",
    child: "Dashboard-1",
    type: "TasksPage",
  });

  const renderContent = () => {
    switch (currentSelection.type) {
      case "TasksPage":
        return <TasksPage />;
      case "ProfileForm":
        return <ProfileForm />;
      case "LoginForm":
        return <LoginForm />;
      default:
        return <div>Component not found or not create</div>;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar
        onItemClick={(parent, child, type) =>
          setCurrentSelection({ parent, child, type })
        }
      />
      <SidebarInset>
        <Header
          parent={currentSelection.parent}
          child={currentSelection.child}
        />
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          {renderContent()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
