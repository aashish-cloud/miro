import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    orgId: v.string(),
  },
  handler: async (ctx, { orgId }) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("User is not authorized!");

    const boards = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", orgId))
      .order("desc")
      .collect();

    return boards;
  },
});
