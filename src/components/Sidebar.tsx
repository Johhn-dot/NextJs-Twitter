import Image from "next/image";
import { Navlink } from "./Navlink";
import {
  Home,
  Hash,
  BellRing,
  MailCheck,
  Bookmark,
  Twitter,
  User,
  CircleEllipsis,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="">
      <Image
        src="https://links.papareact.com/drq"
        alt=""
        width={40}
        height={40}
        className="m-3"
      />

      <nav className="flex flex-col gap-2">
        <Navlink Icon={Home} title="Home" />
        <Navlink Icon={Hash} title="Explore" />
        <Navlink Icon={BellRing} title="Notifications" />
        <Navlink Icon={MailCheck} title="Messages" />
        <Navlink Icon={Bookmark} title="Bookmarks" />
        <Navlink Icon={Twitter} title="Twitter Blue" />
        <Navlink Icon={User} title="Profile" />
        <Navlink Icon={CircleEllipsis} title="More" />
      </nav>

      <div className="my-4">
        <button className="text-white px-16 min-h-[52px] min-w-[225px] font-bold flex items-center justify-center bg-twitter rounded-full">
          Tweet
        </button>
      </div>
    </div>
  );
}
