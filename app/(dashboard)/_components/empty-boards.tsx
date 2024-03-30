import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const createBoard = useMutation(api.board.create);

  const handleClick = () => {
    if (!organization) return;

    createBoard({
      title: "Untitled",
      orgId: organization.id,
    })
      .then(() => toast.success("Board created"))
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={"/note.svg"} height={110} width={110} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button size={"lg"} onClick={handleClick}>
          Create board
        </Button>
      </div>
    </div>
  );
};
