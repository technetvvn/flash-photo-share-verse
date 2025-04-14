
import { cn } from "@/lib/utils";
import { Story } from "@/data/mockData";

interface StoryCircleProps {
  story: Story;
  size?: "sm" | "md" | "lg";
  showUsername?: boolean;
}

export default function StoryCircle({ 
  story, 
  size = "md", 
  showUsername = true 
}: StoryCircleProps) {
  const sizeClasses = {
    sm: "w-14 h-14",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  const ringClasses = story.hasSeen 
    ? "ring-gray-300" 
    : "ring-2 bg-instagram-gradient p-[2px]";

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className={cn("rounded-full", ringClasses)}>
        <div className="bg-white rounded-full p-[2px] h-full w-full">
          <img
            src={story.user.avatar}
            alt={story.user.username}
            className={cn(
              "rounded-full object-cover w-full h-full border border-white",
              sizeClasses[size]
            )}
          />
        </div>
      </div>
      {showUsername && (
        <span className="text-xs truncate max-w-[76px]">{story.user.username}</span>
      )}
    </div>
  );
}
