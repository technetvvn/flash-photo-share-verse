
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface FeedLayoutProps {
  children: ReactNode;
}

export default function FeedLayout({ children }: FeedLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="md:pl-16 lg:pl-64 pt-0 md:pt-16 pb-16 md:pb-0">
        {children}
      </div>
    </div>
  );
}
