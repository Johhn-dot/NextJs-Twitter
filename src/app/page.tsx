import { Feed } from "@/components/Feed";
import { Sidebar } from "@/components/Sidebar";
import { Widgets } from "@/components/Widgets";
import { fetchTweets } from "@/utils/fetchTweets";

export default async function Home() {
  const tweets = await fetchTweets();

  return (
    <div className="grid grid-cols-[275px_1fr_350px] w-full max-w-7xl mx-auto">
      <Sidebar />
      <Feed tweets={tweets} />
      <Widgets />
    </div>
  );
}
