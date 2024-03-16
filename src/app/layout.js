import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Abhivardhan Jaggu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="app-layout">
      <main>{children}</main>
    </div>
      </body>
    </html>
  );
}
