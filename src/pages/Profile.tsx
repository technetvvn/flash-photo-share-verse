
import { users, exploreImages } from "@/data/mockData";
import UserProfile from "@/components/UserProfile";
import FeedLayout from "@/components/FeedLayout";
import { Heart, MessageCircle } from "lucide-react";

export default function Profile() {
  // Using the first user as the profile user
  const profileUser = users[0];
  
  return (
    <FeedLayout>
      <UserProfile 
        user={profileUser} 
        postsCount={9} 
        posts={exploreImages.slice(0, 9)} 
      />
    </FeedLayout>
  );
}
