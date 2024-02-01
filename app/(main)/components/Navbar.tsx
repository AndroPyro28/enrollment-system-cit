import { MobileSidebar } from "./MobileSidebar";
import { NavbarRoutes } from "./NavbarRoutes";
import { GetCurrentUserT } from "@/service/user";

type NavbarProps = {
  currentUser?: GetCurrentUserT | null;
};

export const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="p-4 border-none border-0 h-full flex items-center bg-white dark:bg-sky-700/75 dark:text-white backdrop-blur">
      <MobileSidebar currentUser={currentUser} />
      <NavbarRoutes currentUser={currentUser} />
    </div>
  );
};
