import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: { id: v.any() },
  handler: async (ctx, args) => {
    return await ctx.db.query("Articles")
    .filter((q) => q.eq(q.field("identify"), args.id))
    .collect();
  },
});

export const updateMetadatas = mutation({
  args: {
    id: v.string(),
    newMetadatas: v.any()
  },
  handler: async (ctx, args) => {
    if(args.newMetadatas){
      await ctx.db.patch(args.id, { metadatas: args.newMetadatas })
    }
  }
})