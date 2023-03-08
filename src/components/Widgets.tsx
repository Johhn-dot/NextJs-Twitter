import { Search } from "lucide-react";
import { TrendingLink } from "./TrendingLink";
import { ProfileLink } from "./ProfileLink";

export function Widgets() {
  return (
    <div className="pl-6 pt-3 flex flex-col gap-3">
      <div className="h-[46px] rounded-full bg-[#202327] flex items-center">
        <div className="pl-4">
          <Search size="20" className="text-[#5a5e63]" />
        </div>
        <input
          type="text"
          className="bg-transparent p-4 placeholder:text-[#5a5e63] outline-none flex-1 text-white"
          placeholder="Search Twitter"
        />
      </div>

      <div className="rounded-2xl bg-[#16181c]">
        <h1 className="font-bold text-xl text-[#E7E9EA] py-3 px-4">
          What is happening
        </h1>
        <div className="flex flex-col">
          <TrendingLink />
          <TrendingLink />
          <TrendingLink />
          <TrendingLink />
        </div>
        <div className="p-4">
          <a href="#" className="text-twitter text-sm">
            Show more
          </a>
        </div>
      </div>
      <div className="rounded-2xl bg-[#16181c]">
        <h1 className="font-bold text-xl text-[#E7E9EA] py-3 px-4">
          Who to follow
        </h1>
        <div className="flex flex-col">
          <ProfileLink />
          <ProfileLink />
        </div>
        <div className="p-4">
          <a href="#" className="text-twitter text-sm">
            Show more
          </a>
        </div>
      </div>
    </div>
  );
}
