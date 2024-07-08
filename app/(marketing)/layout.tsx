"use client"
import { useConvexAuth } from 'convex/react';
import { Navbar } from './_components/navbar';
import { Spinner } from '@/components/spinner';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading)
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner />
            </div>
        );
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
            <Navbar />
            <main className="h-full pt-40">{children}</main>
        </div>
    );
};

export default MarketingLayout;
