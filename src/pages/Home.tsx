
import { ScrollArea } from "@/components/ui/scroll-area";
import { stories, posts } from "@/data/mockData";
import StoryCircle from "@/components/StoryCircle";
import Post from "@/components/Post";
import FeedLayout from "@/components/FeedLayout";

export default function Home() {
  return (
    <FeedLayout>
      <div className="max-w-xl mx-auto pt-4 px-4">
        {/* Stories */}
        <div className="bg-white border border-gray-200 rounded-sm mb-6 p-4">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4">
              {stories.map((story) => (
                <StoryCircle key={story.id} story={story} />
              ))}
            </div>
          </ScrollArea>
        </div>
        
        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </FeedLayout>
  );
}
