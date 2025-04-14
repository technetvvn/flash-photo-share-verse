
import { useState } from "react";
import { Image, X, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FeedLayout from "@/components/FeedLayout";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    // In a real app, this would send the data to a backend
    toast({
      title: "Post created",
      description: "Your post was created successfully!"
    });
    // Redirect to home page
    navigate("/");
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <FeedLayout>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Create new post</h1>
        
        <div className="space-y-6">
          {!selectedImage ? (
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-12">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-sm text-gray-500 mb-4">Drag photos here or upload from your device</p>
              <Label htmlFor="picture" className="cursor-pointer">
                <span className="bg-blue-500 text-white py-2 px-4 rounded-md">Select from computer</span>
                <Input
                  id="picture"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </Label>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Preview" 
                  className="w-full h-64 object-cover rounded-md"
                />
                <button 
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
              
              <div>
                <Label htmlFor="caption">Caption</Label>
                <Textarea
                  id="caption"
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <Button onClick={handlePost} className="w-full">
                Share
              </Button>
            </div>
          )}
        </div>
      </div>
    </FeedLayout>
  );
}
