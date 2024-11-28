import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Task Libs",
  description: "Descrição do Projeto"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <DashboardWrapper>
          {children}
        </DashboardWrapper>
      </body>
    </html>
  );
}