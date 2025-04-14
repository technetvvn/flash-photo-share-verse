
import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";
import { navItems } from "@/data/mockData";

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed inset-x-0 bottom-0 md:left-0 md:top-0 md:h-screen md:w-16 lg:w-64 bg-white border-t md:border-r border-gray-200 z-50">
      <div className="flex flex-row md:flex-col h-full">
        {/* Logo - hidden on mobile */}
        <div className="hidden md:flex items-center justify-center h-16 px-4 border-b border-gray-200 lg:justify-start">
          <Link to="/" className="flex items-center space-x-2">
            <Instagram className="h-7 w-7" />
            <span className="hidden lg:inline text-xl font-bold">Instagram</span>
          </Link>
        </div>

        {/* Navigation links */}
        <div className="flex flex-row md:flex-col justify-around w-full py-2 md:py-6 md:space-y-2 md:mt-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center justify-center md:justify-start px-3 py-2 rounded-lg transition-colors duration-200 
                  ${isActive ? "font-semibold" : "text-gray-600 hover:bg-gray-100"} 
                  lg:space-x-4`}
              >
                <item.icon className={`h-6 w-6 ${isActive ? "" : "text-gray-600"}`} />
                <span className="hidden lg:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
