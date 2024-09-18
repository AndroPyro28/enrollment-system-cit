"use client";

import { Hint } from "@/components/hint";
import { SidebarModeType } from "@/hooks/useSidebarModeStore";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { routeListType } from "./SidebarRoutes";
import { useState } from "react";

interface SidebarItemProps {
  mode: SidebarModeType;
  route: routeListType;
  setOpen?: (open: boolean) => void;
  setRouteId: (value: number) => void;
  routeId: null | number | undefined;
}

export const SidebarItem = ({
  mode,
  route,
  setOpen,
  setRouteId,
  routeId,
}: SidebarItemProps) => {
  const pathname = usePathname();
  // const router = useRouter();
  const isSimpleRoute = route.type === "simple";

  const [href, setHref] = useState("");
  const isActiveRoute = routeId === route.id;
  const Icon = route.icon;

  const onClick = (routeId: number, href?: string) => {
    if (setOpen) {
      setOpen(false);
    }
    setHref(href ?? "");
    // @ts-ignore
    setRouteId((prev: any) => routeId === prev ? null : routeId);
  };

  if (isSimpleRoute) {
    return (
      <Link
        href={route.href}
        className={cn(
          "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 dark:bg-[#020817] dark:text-white",
          isActiveRoute &&
            "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 "
        )}
        onClick={() => onClick(route.id, route.href)}
      >
        <div className="flex items-center gap-x-2 py-4">
          {mode === "mini" ? (
            <Hint label={route.label} side="right">
              <Icon
                size={18}
                className={cn(
                  "text-slate-500 dark:bg-[#020817] dark:text-white",
                  isActiveRoute && "text-sky-700"
                )}
              />
            </Hint>
          ) : (
            <Icon
              size={18}
              className={cn(
                "text-slate-500 dark:bg-[#020817] dark:text-white",
                isActiveRoute && "text-sky-700"
              )}
            />
          )}
          <span className={cn(mode === "mini" && "sr-only")}>
            {route.label}
          </span>
        </div>
        <div
          className={cn(
            "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
            isActiveRoute && "opacity-100"
          )}
        />
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "flex cursor-pointer flex-col  gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 dark:bg-[#020817] dark:text-white",
        isActiveRoute &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
      onClick={() => onClick(route.id)}
    >
      <div className="flex items-center gap-x-2 py-4">
        {mode === "mini" ? (
          <Hint label={route.label} side="right">
            <Icon
              size={18}
              className={cn(
                "text-slate-500 dark:bg-[#020817] dark:text-white",
                isActiveRoute && "text-sky-700"
              )}
            />
          </Hint>
        ) : (
          <Icon
            size={18}
            className={cn(
              "text-slate-500 dark:bg-[#020817] dark:text-white",
              isActiveRoute && "text-sky-700"
            )}
          />
        )}
        <span className={cn(mode === "mini" && "sr-only")}>{route.label}</span>
      </div>
      
      {isActiveRoute && (
        <div className="flex flex-col w-full ">
          {route.hrefs.map((r, index) => {
            const isActivePathname =  r.href && pathname.includes(r.href);
            const IconHref = r.icon
            return (
              <Link
                href={r.href}
                className={cn(
                  "flex items-center gap-x-2 text-slate-500 text-[13px] font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 dark:bg-[#020817] dark:text-white",
                  isActivePathname &&
                    "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 "
                )}
                onClick={() => onClick(route.id, r.href)}
              >
                <div className="flex items-center gap-x-2 py-4">
                  {mode === "mini" ? (
                    <Hint label={r.label} side="right">
                      <IconHref
                        size={18}
                        className={cn(
                          "text-slate-500 dark:bg-[#020817] dark:text-white",
                          isActivePathname && "text-sky-700"
                        )}
                      />
                    </Hint>
                  ) : (
                    <IconHref
                      size={18}
                      className={cn(
                        "text-slate-500 dark:bg-[#020817] dark:text-white",
                        isActivePathname && "text-sky-700"
                      )}
                    />
                  )}
                  <span className={cn(mode === "mini" && "sr-only")}>
                    {r.label}
                  </span>
                </div>
                <div
                  className={cn(
                    "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
                    isActivePathname && "opacity-100"
                  )}
                />
              </Link>
            );
          })}
        </div>
      )}
      <div>
        
      </div>
    </div>
  );
};
