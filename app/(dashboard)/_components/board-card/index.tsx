"use client";

import Link from "next/link";
import Image from "next/image";
import { Overlay } from "./overlay";

import { formatDistanceToNow } from "date-fns";
import { Footer } from "./footer";
import { useAuth } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  imageUrl: string;
  isFavorite: boolean;
  createdAt: number;
  orgId: string;
}

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  imageUrl,
  isFavorite,
  createdAt,
  orgId,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <Link href={`board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="bg-amber-50 flex-1 relative">
          <Image src={imageUrl} fill alt={title} className="object-fit" />
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          disabled={true}
          onClick={() => {}}
        />
      </div>
    </Link>
  );
};

export const BoardCardSkeleton = () => {
  return (
    <div className="aspect-[100/127] border rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
