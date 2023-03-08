import { Tweet } from "./Tweet";
import { TweetBox } from "./TweetBox";

type FeedProps = {
  tweets: {
    id: string;
    data: {
      author: string;
      text: string;
      author_url: string;
      image_url: string;
    };
  }[];
};

export function Feed({ tweets }: FeedProps) {
  return (
    <div className="border-x h-screen overflow-hidden border-[#2f3336]">
      <div className="flex flex-col sticky top-0">
        <div className="p-4">
          <h1 className="text-[#E7E9EA] text-xl font-bold">Home</h1>
        </div>
        <div className="flex h-[58px] border-b border-[#2f3336]">
          <button className=" flex flex-1 items-center justify-center text-white font-bold px-4 hover:bg-[#181818] transition-all duration-200">
            <span className="relative h-full py-4">
              For you
              <div className="absolute bg-twitter rounded-full h-1 w-full bottom-0 left-1/2 -translate-x-1/2" />
            </span>
          </button>
          <button className="text-[#71767b] flex-1 hover:bg-[#181818] transition-all duration-200">
            Following
          </button>
        </div>
      </div>

      <div className="overflow-y-scroll h-full pb-40">
        <TweetBox />
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet.data} />
        ))}
      </div>
    </div>
  );
}
