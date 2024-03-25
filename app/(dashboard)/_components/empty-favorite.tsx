import Image from "next/image";

export const EmptyFavorite = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src={"/empty-favorites.svg"} height={140} width={140} alt="empty" />
      <h2 className="text-2xl font-semibold mt-6">No favorite boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};
