
import { useState } from "react";
import { User } from "@/data/mockData";
import { Grid, Bookmark, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserProfileProps {
  user: User;
  postsCount?: number;
  posts: string[];
}

export default function UserProfile({ user, postsCount = 0, posts }: UserProfileProps) {
  const [activeTab, setActiveTab] = useState<'posts' | 'saved' | 'tagged'>('posts');
  
  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile header */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <div className="w-24 h-24 md:w-36 md:h-36 mr-0 md:mr-10 mb-6 md:mb-0">
          <img 
            src={user.avatar} 
            alt={user.username} 
            className="w-full h-full rounded-full object-cover border border-gray-200"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <h1 className="text-xl font-semibold mb-4 md:mb-0 md:mr-5">
              {user.username}
              {user.isVerified && (
                <span className="ml-1 text-instagram-blue">●</span>
              )}
            </h1>
            <button className="bg-gray-100 px-4 py-1.5 rounded-md font-semibold text-sm">
              Edit Profile
            </button>
          </div>
          
          <div className="flex justify-center md:justify-start space-x-8 my-4">
            <div className="text-center md:text-left">
              <span className="font-semibold">{postsCount}</span>
              <span className="ml-1">posts</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-semibold">{formatCount(user.followers)}</span>
              <span className="ml-1">followers</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-semibold">{formatCount(user.following)}</span>
              <span className="ml-1">following</span>
            </div>
          </div>
          
          <div className="mt-4 text-center md:text-left">
            <h2 className="font-semibold">{user.fullName}</h2>
            {user.bio && <p className="mt-1 text-sm">{user.bio}</p>}
          </div>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="border-t border-gray-200">
        <div className="flex justify-center">
          <button 
            className={cn(
              "flex items-center px-4 py-3 text-xs font-semibold uppercase tracking-wider border-t-2 transition-colors",
              activeTab === 'posts' 
                ? "border-gray-800 text-gray-800" 
                : "border-transparent text-gray-500"
            )}
            onClick={() => setActiveTab('posts')}
          >
            <Grid className="w-3 h-3 mr-1" />
            Posts
          </button>
          <button 
            className={cn(
              "flex items-center px-4 py-3 text-xs font-semibold uppercase tracking-wider border-t-2 transition-colors",
              activeTab === 'saved' 
                ? "border-gray-800 text-gray-800" 
                : "border-transparent text-gray-500"
            )}
            onClick={() => setActiveTab('saved')}
          >
            <Bookmark className="w-3 h-3 mr-1" />
            Saved
          </button>
          <button 
            className={cn(
              "flex items-center px-4 py-3 text-xs font-semibold uppercase tracking-wider border-t-2 transition-colors",
              activeTab === 'tagged' 
                ? "border-gray-800 text-gray-800" 
                : "border-transparent text-gray-500"
            )}
            onClick={() => setActiveTab('tagged')}
          >
            <Tag className="w-3 h-3 mr-1" />
            Tagged
          </button>
        </div>
      </div>
      
      {/* Photo grid */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {posts.map((image, index) => (
          <div key={index} className="aspect-square relative group">
            <img 
              src={image} 
              alt={`Post ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-white flex items-center">
                <Heart className="w-4 h-4 mr-1 fill-white" />
                <span className="text-sm font-semibold">0</span>
                <MessageCircle className="w-4 h-4 ml-3 mr-1" />
                <span className="text-sm font-semibold">0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
