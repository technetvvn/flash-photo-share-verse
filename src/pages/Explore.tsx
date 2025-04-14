
import { useState } from "react";
import { exploreImages } from "@/data/mockData";
import { Search } from "lucide-react";
import FeedLayout from "@/components/FeedLayout";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <FeedLayout>
      <div className="max-w-6xl mx-auto p-4">
        {/* Search bar */}
        <div className="relative mb-6 max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Explore grid */}
        <div className="grid grid-cols-3 gap-1">
          {exploreImages.map((image, index) => (
            <div key={index} className="aspect-square relative group">
              <img 
                src={image} 
                alt={`Explore ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </FeedLayout>
  );
}
