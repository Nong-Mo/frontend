import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex justify-center min-h-screen bg-[#181A20]">
            <main className="content-container flex justify-center w-[414px] h-[852px] relative bg-white overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;