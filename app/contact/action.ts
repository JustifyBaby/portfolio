"use server";
import { CreateEmailOptions, Resend } from "resend";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

const contactSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "メッセージを入力してください"),
});

export async function sendMessage(formData: FormData) {
  const name = formData.get("name")!.toString();
  const email = formData.get("email")!.toString();
  const message = formData.get("message")!.toString();

  // バリデーション
  const validation = contactSchema.safeParse({ name, email, message });
  if (!validation.success) {
    const errorMessages = z.treeifyError(validation.error);
    console.error(errorMessages);
    return { message: "入力内容に誤りがあります" };
  }

  const emailContent: CreateEmailOptions = {
    from: "portfolio@yourdomain.com",
    to: "your@email.com",
    subject: `[Portfolio] ${name}`,
    text: `${message}\n\n---\n${email}`,
  };

  try {
    await resend.emails.send(emailContent);
  } catch (error) {
    console.error("Error sending email:", error);
    console.log("EMAIL CONTENT:", JSON.stringify(emailContent));
    return { message: "メールの送信に失敗しました" };
  }

  return { message: "メールが正常に送信されました" };
}
