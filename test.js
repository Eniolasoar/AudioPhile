import { Resend } from "resend";

const resend = new Resend("re_Mb98q3aN_Aj8ssVAFY7KQgT8akTwjsz5C");

async function test() {
  const response = await resend.emails.send({
    from: "orders@resend.dev",
    to: "eniolanishe@gmail.com",
    subject: "Test email",
    html: "<p>This is a test</p>",
  });
  console.log(response);
}

test();
