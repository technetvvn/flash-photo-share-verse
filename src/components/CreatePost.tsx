
import { useNavigate } from "react-router-dom";
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreatePost() {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/create");
  };

  return (
    <Button 
      variant="outline" 
      className="fixed bottom-20 md:bottom-auto md:top-24 right-4 z-40 rounded-full w-12 h-12 md:w-auto md:h-auto md:rounded-md"
      onClick={handleCreateClick}
    >
      <span className="sr-only md:not-sr-only md:ml-2">Create</span>
      <Image className="md:mr-2" />
    </Button>
  );
}
