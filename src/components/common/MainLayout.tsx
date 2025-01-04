import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="main-wrapper flex justify-center min-h-screen">
            <main className="content-container flex justify-center w-[414px] h-[896px] relative bg-white overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;