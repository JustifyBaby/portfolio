"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useActionState, useState } from "react";
import PageShell from "@/components/layout/PageShell";
import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { PAGE_DIALOGS } from "@/lib/data";
import { sendMessage } from "./action";

const schema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.email("メールアドレスが不正です"),
  message: z.string().min(10, "10文字以上入力してください"),
});

type FormValues = z.infer<typeof schema>;

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(10,10,40,.8)",
  border: "1px solid var(--border2)",
  color: "var(--rpg-white)",
  fontFamily: '"Press Start 2P", monospace',
  fontSize: "6px",
  padding: "8px 10px",
  outline: "none",
  lineHeight: 2,
};

export default function ContactPage() {
  const d = PAGE_DIALOGS.contact;
  const [state, action, isPending] = useActionState(sendMessage, {
    err: null,
  });

  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <PageShell>
      <DialogBox speaker={d.speaker} message={d.message} />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>◈ SEND MESSAGE</SectionTitle>

        {isPending ? (
          <div
            style={{
              border: "1px solid var(--green)",
              padding: "20px",
              background: "rgba(10,40,10,.5)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "8px",
                color: "var(--green)",
                marginBottom: 10,
              }}
            >
              ✦ MESSAGE SENT!
            </p>
            <p
              style={{ fontSize: "6px", color: "var(--gray)", lineHeight: 2.2 }}
            >
              伝令を受け取りました。
              <br />
              1〜2営業日以内に返信します。
            </p>
          </div>
        ) : (
          <form action={action} className="flex flex-col gap-4">
            {/* NAME */}
            <div>
              <label
                style={{
                  fontSize: "6px",
                  color: "var(--gray)",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                ▸ NAME
              </label>
              <input
                {...register("name")}
                placeholder="Your name..."
                style={{
                  ...inputStyle,
                  borderColor: errors.name ? "var(--red)" : "var(--border2)",
                }}
                onFocus={(e) => {
                  if (!errors.name)
                    (e.target as HTMLInputElement).style.borderColor =
                      "var(--gold)";
                }}
                onBlur={(e) => {
                  if (!errors.name)
                    (e.target as HTMLInputElement).style.borderColor =
                      "var(--border2)";
                }}
              />
              {errors.name && (
                <p
                  style={{ fontSize: "5px", color: "var(--red)", marginTop: 3 }}
                >
                  ▸ {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label
                style={{
                  fontSize: "6px",
                  color: "var(--gray)",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                ▸ EMAIL
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="your@email.com"
                style={{
                  ...inputStyle,
                  borderColor: errors.email ? "var(--red)" : "var(--border2)",
                }}
                onFocus={(e) => {
                  if (!errors.email)
                    e.currentTarget.style.borderColor = "var(--gold)";
                }}
                onBlur={(e) => {
                  if (!errors.email)
                    e.currentTarget.style.borderColor = "var(--border2)";
                }}
              />
              {errors.email && (
                <p
                  style={{ fontSize: "5px", color: "var(--red)", marginTop: 3 }}
                >
                  ▸ {errors.email.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label
                style={{
                  fontSize: "6px",
                  color: "var(--gray)",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                ▸ MESSAGE
              </label>
              <textarea
                {...register("message")}
                placeholder="Your message..."
                rows={5}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  borderColor: errors.message ? "var(--red)" : "var(--border2)",
                }}
                onFocus={(e) => {
                  if (!errors.message)
                    e.currentTarget.style.borderColor = "var(--gold)";
                }}
                onBlur={(e) => {
                  if (!errors.message)
                    e.currentTarget.style.borderColor = "var(--border2)";
                }}
              />
              {errors.message && (
                <p
                  style={{ fontSize: "5px", color: "var(--red)", marginTop: 3 }}
                >
                  ▸ {errors.message.message}
                </p>
              )}
            </div>

            {/* Server error */}
            {state.err && (
              <p style={{ fontSize: "5px", color: "var(--red)" }}>
                ▸ {state.err}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: "7px",
                color: "#fff",
                background: isSubmitting ? "var(--border2)" : "var(--border)",
                border: "none",
                padding: "10px 20px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                boxShadow: "3px 3px 0 rgba(0,0,0,.4)",
                alignSelf: "flex-start",
                transition: "background .1s",
              }}
            >
              {isSubmitting ? "▮▮▮ SENDING..." : "▶ SEND MESSAGE"}
            </button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
