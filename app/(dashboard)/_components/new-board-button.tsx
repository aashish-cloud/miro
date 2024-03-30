"use client";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface NewButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewButtonProps) => {
  const createBoard = useMutation(api.board.create);
  const router = useRouter();

  const onClick = () => {
    createBoard({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created");
        // router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board!"));
  };

  return (
    <button
      className={cn(
        "aspect-[100/127] border rounded-lg flex flex-col justify-center items-center bg-blue-600 text-white py-6 col-span-1 hover:bg-blue-800",
        disabled && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Plus className="h-12 w-12 stroke-1" />
      <p className="text-sm font-light">New board</p>
    </button>
  );
};
