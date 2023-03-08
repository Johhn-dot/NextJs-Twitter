import Image from "next/image";
import {
  Image as ImageIcon,
  Mic,
  LayoutList,
  Smile,
  Calendar,
  MapPin,
} from "lucide-react";

export function TweetBox() {
  return (
    <div className="p-4 flex gap-4 items-start border-b border-[#2f3336]">
      <Image
        src="https://avatars.githubusercontent.com/u/76454477?v=4"
        alt=""
        width={48}
        height={48}
        className="rounded-full object-cover aspect-square"
        quality={100}
      />
      <div className="flex flex-col gap-4 flex-1">
        <div className="py-3">
          <input
            type="text"
            placeholder="What's happening?"
            className="text-xl text-white bg-transparent placeholder:text-[#64686d] outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-twitter">
            <ImageIcon size="18" />
            <Mic size="18" />
            <LayoutList size="18" />
            <Smile size="18" />
            <Calendar size="18" />
            <MapPin size="18" />
          </div>
          <button
            disabled
            className="px-4 h-[38px] rounded-full font-bold bg-twitter text-white disabled:opacity-70"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
