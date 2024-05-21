import "./globals.css";
// !! Packages
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import AuthProvider from "@/app/provider/Auth";
import Header from "./Components/Common/Header";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "web",
  description: "learn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.className}  bg-gray-100 text-black  
        dark:bg-black dark:text-white capitalize`}
      >
        <AuthProvider>
          <Header />
          <main className="mt-[4.52rem]">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
