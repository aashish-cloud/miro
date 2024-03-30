import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
  "/placeholders/1.svg",
  "/placeholders/2.svg",
  "/placeholders/3.svg",
  "/placeholders/4.svg",
  "/placeholders/5.svg",
  "/placeholders/6.svg",
  "/placeholders/7.svg",
  "/placeholders/8.svg",
  "/placeholders/9.svg",
  "/placeholders/10.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, { orgId, title }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User not authorized!");

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: title,
      orgId: orgId,
      authorName: identity.name!,
      authorId: identity.subject,
      imageUrl: randomImage,
    });
    console.log(board);
    return board;
  },
});
