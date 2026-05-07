"use server";
import { CreateEmailOptions, Resend } from "resend";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

const contactSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "メッセージを入力してください"),
});

export type Status = { err: string | null };

export async function sendMessage(
  prev: Status,
  formData: FormData,
): Promise<Status> {
  const name = formData.get("name")!.toString();
  const email = formData.get("email")!.toString();
  const message = formData.get("message")!.toString();

  // バリデーション
  const validation = contactSchema.safeParse({ name, email, message });
  if (!validation.success) {
    const errorMessages = z.treeifyError(validation.error);
    console.error(errorMessages);
    return { err: "入力内容に誤りがあります" };
  }

  const emailContent: CreateEmailOptions = {
    from: "onboarding@resend.dev", // ドメイン取得まではこれ固定
    to: process.env.MY_EMAIL_ADDRESS!, // 自分の受信用メアド
    replyTo: email, // 返信先を送信者のメアドに

    subject: `[Portfolio] ${name}`,
    text: `${message}\n\n---\n${email}`,
  };

  try {
    await resend.emails.send(emailContent);
  } catch (error) {
    console.error("Error sending email:", error);
    console.log("EMAIL CONTENT:", JSON.stringify(emailContent));
    return { err: "メールの送信に失敗しました" };
  }

  return { err: null };
}
