"use client";

import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import { useSidebarModeStore } from "@/hooks/useSidebarModeStore";
import { cn } from "@/lib/utils";
import { SafeUserT } from "@/schema/base";
import { TGetCurrentUser } from "@/service/user";

type MobileSidebarProps = {
  currentUser?: TGetCurrentUser | null;
};

export const MobileSidebar = ({ currentUser }: MobileSidebarProps) => {
  const { mode } = useSidebarModeStore();
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="left"
        className={cn(
          "p-0 bg-white",
          mode === "mini" ? "w-[100px]" : "w-[250px]"
        )}
      >
        <Sidebar currentUser={currentUser} setOpen={setSheetOpen} />
      </SheetContent>
    </Sheet>
  );
};
