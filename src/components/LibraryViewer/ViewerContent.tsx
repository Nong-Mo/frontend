import React, { useState } from "react";
import icon1 from "../../icons/bookViewerCard/1.svg";
import icon2 from "../../icons/bookViewerCard/2.svg";
import icon3 from "../../icons/bookViewerCard/3.svg";
import icon4 from "../../icons/bookViewerCard/4.svg";

import BookViewerCard from "./BookViewerCard.tsx";

interface ViewerContentProps {
  width: number;
  height: number;
  title: string;
}

const ViewerContent = ({ width, height, title }: ViewerContentProps) => {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <div
      style={{ width: width, height: height }}
      className="flex justify-start pt-[21px] flex-col"
    >
      {/*토글 버튼*/}
      <div className="flex gap-8 h-[32px] justify-center z-10">
        <button
          className={`py-1.5 h-full w-[87px] transition-colors rounded-[16px] ${
            activeTab === "all" ? " bg-blue-500 text-white" : "text-gray-400 "
          }`}
          onClick={() => setActiveTab("all")}
        >
          전체 목록
        </button>
        <button
          className={`py-1.5 h-full w-[104px] transition-colors rounded-[16px] ${
            activeTab === "recent"
              ? " bg-blue-500 text-white"
              : "text-gray-400 "
          }`}
          onClick={() => setActiveTab("recent")}
        >
          최근 읽은 책
        </button>
      </div>

      {/* Content 영역*/}
      <div className="viewer-content-wrapper mt-[13px] w-full">
        {/*추가하기 버튼*/}
        <div className="plus-button mb-[16px]">
          <button className="text-4xl bg-[#1F222A] rounded-[12px] h-[48px] w-full text-white">
            +
          </button>
        </div>

        {/* Grid Content 영역*/}
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-[7px]">
          <BookViewerCard
            title="나는 고양이로소 이다."
            thumbnail={new URL("https://picsum.photos/156/196")}
            createdAt={new Date("2024-12-30T22:30:00")}
            icon={icon1}
          />
          <BookViewerCard
            title="코스모스"
            thumbnail={new URL("https://picsum.photos/156/196")}
            createdAt={new Date("2024-12-30T22:30:00")}
            icon={icon2}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewerContent;