import { Plus } from "lucide-react";

import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Hint from "@/components/hint";

const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create organization" side="right" sideOffset={18} align="start">
            <button className="bg-white/25 h-full w-full opacity-60 hover:opacity-100 transition flex items-center justify-center rounded-md">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default NewButton;
