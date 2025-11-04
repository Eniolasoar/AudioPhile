import { internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = internalMutation({
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
    try {
      const itemsHtml = items
        .map(
          (i) =>
            `<tr>
              <td style="padding:8px 12px;">${i.name}</td>
              <td style="padding:8px 12px;">${i.quantity}</td>
              <td style="padding:8px 12px;">$${i.price}</td>
            </tr>`
        )
        .join("");

      const html = `
        <div style="font-family:Arial, sans-serif; color:#333;">
          <h2>Hello ${name},</h2>
          <p>Thank you for your purchase! Your order <b>${orderId}</b> has been confirmed.</p>
          <table style="border-collapse:collapse; width:100%; margin-top:16px;">
            <thead>
              <tr style="background:#f2f2f2;">
                <th style="padding:8px 12px; text-align:left;">Item</th>
                <th style="padding:8px 12px;">Qty</th>
                <th style="padding:8px 12px;">Price</th>
              </tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
          </table>
          <h3 style="margin-top:20px;">Total: $${totals.grandTotal.toLocaleString()}</h3>
          <p style="margin-top:20px;">We’ll notify you once your order ships.</p>
          <a href="https://yourwebsite.com/orders/${orderId}"
            style="display:inline-block; margin-top:20px; background:#D87D4A; color:white; padding:10px 16px; text-decoration:none; border-radius:6px;">View your order</a>
        </div>
      `;

      const response = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: `Order Confirmation - ${orderId}`,
        html,
      });

      console.log("✅ Email sent successfully:", response);
      return { success: true, message: "Email sent", response };
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      return { success: false, message: error instanceof Error ? error.message : "Unknown error" };
    }
  },
});
