
import { useState } from "react";
import { Post as PostType } from "@/data/mockData";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(post.hasLiked);
  const [saved, setSaved] = useState(post.hasSaved);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-sm mb-6 max-w-[470px]">
      {/* Post header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <Link to={`/profile/${post.user.username}`}>
            <img 
              src={post.user.avatar} 
              alt={post.user.username} 
              className="w-8 h-8 rounded-full object-cover"
            />
          </Link>
          <div>
            <Link to={`/profile/${post.user.username}`} className="font-semibold text-sm">
              {post.user.username}
              {post.user.isVerified && (
                <span className="ml-1 text-instagram-blue">●</span>
              )}
            </Link>
          </div>
        </div>
        <button className="text-gray-800">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post image */}
      <div className="relative" onDoubleClick={handleLike}>
        <img 
          src={post.image} 
          alt="Post content" 
          className="w-full object-cover"
        />
      </div>

      {/* Post actions */}
      <div className="p-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-4">
            <button onClick={handleLike}>
              <Heart 
                className={cn(
                  "w-6 h-6 transition-colors", 
                  liked ? "fill-instagram-red text-instagram-red" : "text-gray-800"
                )} 
              />
            </button>
            <button>
              <MessageCircle className="w-6 h-6 text-gray-800" />
            </button>
            <button>
              <Send className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          <button onClick={() => setSaved(!saved)}>
            <Bookmark 
              className={cn(
                "w-6 h-6 transition-colors", 
                saved ? "fill-gray-800 text-gray-800" : "text-gray-800"
              )} 
            />
          </button>
        </div>

        {/* Likes count */}
        <div className="font-semibold text-sm mb-1">
          {likeCount.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-sm mb-2">
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </div>

        {/* Comments preview */}
        {post.comments > 0 && (
          <button className="text-gray-500 text-sm">
            View all {post.comments} comments
          </button>
        )}

        {/* Timestamp */}
        <div className="text-xs text-gray-400 uppercase mt-2">
          {post.timestamp} ago
        </div>
      </div>
    </div>
  );
}
