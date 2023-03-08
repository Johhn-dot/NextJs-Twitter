import Image from "next/image";

export function ProfileLink() {
  return (
    <a href="#" className="flex items-center py-3 px-4 gap-3">
      <Image
        src="https://avatars.githubusercontent.com/u/76454477?v=4"
        alt=""
        width={48}
        height={48}
        className="rounded-full aspect-square object-contain"
      />
      <div className="flex flex-col">
        <strong className="font-bold text-[#e7e9ea]">Johnn</strong>
        <span className="text-[#71767b]">@eujoaotorrel</span>
      </div>

      <button className="ml-auto h-[32px] px-4 rounded-full bg-[#eff3f4] flex items-center justify-center text-sm font-bold">
        Follow
      </button>
    </a>
  );
}
