import { z } from "zod";

const envSchema = z.object({
  // 文字列かつメール形式を強制
  MY_EMAIL_ADDRESS: z.string().email("無効なメールアドレス形式です"),

  // 数値への変換（環境変数は常に文字列なので transform が便利）
  PORT: z.string().default("3000").transform(Number),

  // 決まった値以外を許可しない
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  // 必須にしない場合
  API_KEY: z.string().optional(),
});

// バリデーションを実行
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  // 設定漏れがある場合は、起動時にエラーを表示してプロセスを終了させる
  console.error("❌ 環境変数の設定が不正です:", parsed.error.format());
  process.exit(1);
}

// 型が確定したオブジェクトをエクスポート
export const env = parsed.data;

// 型そのものを他で使いたい場合
export type Env = z.infer<typeof envSchema>;
