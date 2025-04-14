
import { useState } from "react";
import { Image, X, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { toast } = useToast();

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
    // Reset form
    setCaption("");
    setSelectedImage(null);
    setIsOpen(false);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="fixed bottom-20 md:bottom-auto md:top-24 right-4 z-40 rounded-full w-12 h-12 md:w-auto md:h-auto md:rounded-md">
          <span className="sr-only md:not-sr-only md:ml-2">Create</span>
          <Image className="md:mr-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create new post</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
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
          )}
          
          {selectedImage && (
            <>
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
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
