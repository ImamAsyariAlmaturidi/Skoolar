import Link from "next/link";
import ChatBox from "../../../../../components/parent/ChatBox";
import ChatRoom from "../../../../../components/parent/ChatRoom";
import SideBar from "../../../../../components/parent/Sidebar";
import { getAllGroup } from "../action";
import HeaderChat from "../../../../../components/parent/HeaderChat";
export default async function ParentDetailPage({ params }) {
  const { data } = await getAllGroup();
  return (
    <>
      <div className="w-full flex gap-3 px-5 py-10 h-screen bg-[#F1F7FE]">
        <SideBar />
        <div className="flex w-full">
          <div className="bg-white w-[30rem] rounded-2xl rounded-r-none border-r border-neutral-200 border-solid">
            <div className="border-b border-neutral-200 flex justify-start items-center h-[11%]">
              <p className="ml-8 text-[#3166ec] font-semibold text-2xl">
                Message
              </p>
              {/* <Searchbar /> */}
            </div>
            <div>
              <p className="ml-8 mt-3 mb-2 text-xs text-neutral-400">
                Group chat
              </p>
              {data?.map((groups) => {
                return (
                  <>
                    <Link href={`/dashboard/parent/chat/${groups._id}`}>
                      <ChatBox data={groups} />
                    </Link>
                  </>
                );
              })}
            </div>
            <div>
              <p className="ml-8 mt-7 mb-2 text-xs text-neutral-400">
                Personal Message
              </p>
              <ChatBox />
              <ChatBox />
            </div>
          </div>
          <div className="w-full bg-white ml-0 rounded-2xl rounded-l-none">
            <div className="border-b border-neutral-200 py-2 flex justify-start items-center h-[11%]">
              <div className="rounded-full bg-orange-200 border border-neutral-200 w-12 h-12 flex ml-8 items-center justify-center">
                <img
                  className="h-7 "
                  src="https://www.iconpacks.net/icons/2/free-apple-icon-2327-thumb.png"
                  alt=""
                />
              </div>
              <HeaderChat slug={params.slug} />
            </div>
            <div className="w-full h-[88%]">
              <ChatRoom id={params.slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
