import { v } from "convex/values";
import { Resend } from "resend";
import { action } from "./_generated/server";

export const sendEmail = action({
  args: {
    email: v.string(),
    name: v.string(),
    orderId: v.string(),
    items: v.array(
      v.object({
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    totals: v.object({
      grandTotal: v.number(),
    }),
  },
  handler: async (_, { email, name, orderId, items, totals }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const html = `
        <h2>Hello ${name},</h2>
        <p>Thank you for your order <b>${orderId}</b>!</p>
        <ul>
          ${items.map((i) => `<li>${i.name} x${i.quantity} — $${i.price}</li>`).join("")}
        </ul>
        <p>Total: <b>$${totals.grandTotal}</b></p>
      `;

      const response = await resend.emails.send({
        from: "orders@resend.dev",
        to: email,
        subject: `Order Confirmation - ${orderId}`,
        html,
      });

      console.log("✅ Email sent:", response);
      return response;
    } catch (error) {
      console.error("❌ Error sending email:", error);
      return { error: error instanceof Error ? error.message : "Unknown error" };
    }
  },
});
