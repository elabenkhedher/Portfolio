import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Elaa — Full-stack developer",
  description:
    "Portfolio of Elaa, a full-stack developer based in Tunisia. I build web applications with Node.js, React and Angular.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-ink text-paper`}>
        {children}
      </body>
    </html>
  );
}
