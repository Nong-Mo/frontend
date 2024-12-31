import React from 'react';

interface BoxListProps {
    title: string;
    count: number;
    icon: string; // Image URL as string
}

const BoxList: React.FC<BoxListProps> = ({ title, count, icon }) => {
    return (
        <div className="flex items-center bg-gray-800 my-2 p-4 rounded-lg">
            {/* 아이콘 */}
            <img src={icon} alt={title} className="w-10 h-10 mr-4" />
            {/* 제목과 숫자 */}
            <div className="flex-1">
                <p className="text-lg">{title}</p>
            </div>
            <span className="text-blue-500 text-lg mr-4">{count}</span>
            <span className="text-gray-400">{'>'}</span>
        </div>
    );
};

export default BoxList;