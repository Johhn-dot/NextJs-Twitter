import { cloneElement } from "react";
import { LucideIcon } from "lucide-react";

type NavlinkProps = {
  Icon: LucideIcon;
  title: string;
};

export function Navlink({ Icon, title }: NavlinkProps) {
  return (
    <a
      href="#"
      className="flex items-center gap-5 text-xl p-3 pr-7 text-white rounded-full hover:bg-[#181818] transition-all duration-200 max-w-fit"
    >
      <Icon size="26" />
      {title}
    </a>
  );
}
