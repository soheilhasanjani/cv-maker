import localFont from "next/font/local";

export const geistSans = localFont({
  src: "./geist/GeistVF.woff",
  variable: "--font-geist-sans",
});

export const geistMono = localFont({
  src: "./geist/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
