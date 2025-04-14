
import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

export type User = {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  isVerified: boolean;
  followers: number;
  following: number;
  bio?: string;
};

export type Post = {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  hasLiked: boolean;
  hasSaved: boolean;
};

export type Story = {
  id: string;
  user: User;
  hasSeen: boolean;
};

export const users: User[] = [
  {
    id: "1",
    username: "janedoe",
    fullName: "Jane Doe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format",
    isVerified: true,
    followers: 1243,
    following: 453,
    bio: "Photographer | Traveler | Coffee lover ✈️☕️"
  },
  {
    id: "2",
    username: "johndoe",
    fullName: "John Doe",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format",
    isVerified: false,
    followers: 874,
    following: 302,
    bio: "Life is a journey 🌍"
  },
  {
    id: "3",
    username: "travelguy",
    fullName: "Travel Guy",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format", 
    isVerified: true,
    followers: 10243,
    following: 1252,
    bio: "Professional traveler | Sharing adventures from around the world 🌎"
  },
  {
    id: "4",
    username: "foodielicious",
    fullName: "Foodie Delicious",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format",
    isVerified: false,
    followers: 4521,
    following: 876,
    bio: "Food blogger | Recipe developer | Always hungry 🍕"
  },
  {
    id: "5",
    username: "natgeo",
    fullName: "National Geographic",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=250&auto=format",
    isVerified: true,
    followers: 1800000,
    following: 125,
    bio: "Exploring and protecting our planet 🌏"
  }
];

export const posts: Post[] = [
  {
    id: "1",
    user: users[0],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format",
    caption: "Beautiful sunset at the mountains today! 🌄 #nature #sunset #mountains",
    likes: 1243,
    comments: 42,
    timestamp: "2h",
    hasLiked: false,
    hasSaved: false
  },
  {
    id: "2",
    user: users[1],
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600&auto=format",
    caption: "My cat being cute as always 😺 #catsofinstagram #petlove",
    likes: 876,
    comments: 31,
    timestamp: "4h",
    hasLiked: true,
    hasSaved: true
  },
  {
    id: "3",
    user: users[2],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format",
    caption: "Tech vibes. Building something new! 💻 #developer #coding #tech",
    likes: 493,
    comments: 17,
    timestamp: "1d",
    hasLiked: false,
    hasSaved: true
  },
  {
    id: "4",
    user: users[3],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format",
    caption: "Working from home vibes ✨ #remotework #productivity #homeoffice",
    likes: 726,
    comments: 23,
    timestamp: "2d",
    hasLiked: true,
    hasSaved: false
  },
  {
    id: "5",
    user: users[4],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format",
    caption: "The intricate details of technology. #electronics #tech #innovation",
    likes: 2145,
    comments: 62,
    timestamp: "5d",
    hasLiked: false,
    hasSaved: false
  }
];

export const stories: Story[] = [
  {
    id: "1",
    user: users[0],
    hasSeen: false
  },
  {
    id: "2",
    user: users[1],
    hasSeen: false
  },
  {
    id: "3",
    user: users[2],
    hasSeen: true
  },
  {
    id: "4",
    user: users[3],
    hasSeen: false
  },
  {
    id: "5",
    user: users[4],
    hasSeen: true
  }
];

export const exploreImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600&auto=format",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format"
];

export const navItems = [
  {
    label: "Home",
    icon: Home,
    path: "/"
  },
  {
    label: "Explore",
    icon: Search,
    path: "/explore"
  },
  {
    label: "Create",
    icon: PlusSquare,
    path: "/create"
  },
  {
    label: "Notifications",
    icon: Heart,
    path: "/notifications"
  },
  {
    label: "Profile",
    icon: User,
    path: "/profile"
  }
];
