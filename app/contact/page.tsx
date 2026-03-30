"use client";
import { useState } from "react";
import PageShell from "@/components/layout/PageShell";
import DialogBox from "@/components/rpg/DialogBox";
import SectionTitle from "@/components/ui/SectionTitle";
import { PAGE_DIALOGS } from "@/lib/data";

type FormState = "idle" | "sending" | "done" | "error";

export default function ContactPage() {
  const d = PAGE_DIALOGS.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async () => {
    if (!name || !email || !message) return;
    setStatus("sending");
    // TODO: 実際の送信処理（API Route or Resend等）に差し替え
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("done");
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(10,10,40,.8)",
    border: "1px solid var(--border2)",
    color: "var(--rpg-white)",
    fontFamily: '"Press Start 2P", monospace',
    fontSize: "6px",
    padding: "8px 10px",
    outline: "none",
    lineHeight: 2,
  } as React.CSSProperties;

  const labelStyle = {
    fontSize: "6px",
    color: "var(--gray)",
    display: "block",
    marginBottom: 4,
  } as React.CSSProperties;

  return (
    <PageShell>
      <DialogBox speaker={d.speaker} message={d.message} />

      <div className="flex-1 overflow-y-auto animate-fadeIn">
        <SectionTitle>◈ SEND MESSAGE</SectionTitle>

        {status === "done" ? (
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
          <div className="flex flex-col gap-4">
            <div>
              <label style={labelStyle}>▸ NAME</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name..."
                style={inputStyle}
                onFocus={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    "var(--gold)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    "var(--border2)";
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>▸ EMAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    "var(--gold)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLInputElement).style.borderColor =
                    "var(--border2)";
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>▸ MESSAGE</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => {
                  (e.target as HTMLTextAreaElement).style.borderColor =
                    "var(--gold)";
                }}
                onBlur={(e) => {
                  (e.target as HTMLTextAreaElement).style.borderColor =
                    "var(--border2)";
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "sending" || !name || !email || !message}
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: "7px",
                color: "#fff",
                background:
                  status === "sending" ? "var(--border2)" : "var(--border)",
                border: "none",
                padding: "10px 20px",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                boxShadow: "3px 3px 0 rgba(0,0,0,.4)",
                alignSelf: "flex-start",
                transition: "background .1s",
              }}
            >
              {status === "sending" ? "▮▮▮ SENDING..." : "▶ SEND MESSAGE"}
            </button>
          </div>
        )}
      </div>
    </PageShell>
  );
}
