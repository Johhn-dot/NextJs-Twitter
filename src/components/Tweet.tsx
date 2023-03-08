import Image from "next/image";
import { MessageCircle, RotateCw, Heart, BarChart2, Share } from "lucide-react";

type TweetProps = {
  tweet: {
    author: string;
    text: string;
    author_url: string;
    image_url: string;
  };
};

export function Tweet({ tweet }: TweetProps) {
  return (
    <div className="flex items-start px-4 gap-3 py-3 border-b border-[#2f3336]">
      <Image
        src={tweet.author_url}
        width={48}
        height={48}
        alt=""
        className="rounded-full"
      />
      <div className="flex flex-col flex-1">
        <div className="flex text-[#71767b] gap-2">
          <strong className="font-bold text-[#e7e9ea]">{tweet.author}</strong>
          <span>@{tweet.author.toLowerCase().replace(" ", "")}</span>
          <span>5m</span>
        </div>
        <p className="text-[#e7e9ea]">{tweet.text}</p>

        <div className="w-full aspect-video relative mt-3">
          <Image
            className="object-cotain rounded-lg"
            alt=""
            fill
            quality={100}
            src={tweet.image_url}
          />
        </div>
        <div className="flex mt-5 items-center justify-between mr-20 text-[#55595d]">
          <MessageCircle size="22" />
          <RotateCw size="22" />
          <Heart size="22" />
          <BarChart2 size="22" />
          <Share size="22" />
        </div>
      </div>
    </div>
  );
}
