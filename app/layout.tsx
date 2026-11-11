import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DarkZ143 // Binary Vault",
  description: "A terminal-style release catalog by DarkZ143. Browse the live Android APK and upcoming channels.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
