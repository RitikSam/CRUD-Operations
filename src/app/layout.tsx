import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nevbar from "../../components/Nevbar";
// import TopicsList from "../../components/TopicsList";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRUD Operation",
  description: "Desined ",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Nevbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
