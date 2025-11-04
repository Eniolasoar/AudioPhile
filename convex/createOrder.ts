import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api"; 

export const createOrder = mutation({
  args: {
    orderId: v.string(),
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      vat: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const order = {
      ...args,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    await ctx.db.insert("orders", order);

    // ✅ Properly call your internal function
    await ctx.scheduler.runAfter(0, internal.sendEmail.sendEmail, {
      email: args.customer.email,
      name: args.customer.name,
      orderId: args.orderId,
      items: args.items.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totals: { grandTotal: args.totals.grandTotal },
    });

    return { success: true, orderId: args.orderId };
  },
});
