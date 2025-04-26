import { Geist, Geist_Mono } from "next/font/google";

import FooterM from "@/Components/Simple/footerMobile";
import styles from "../Styles/modules/background.module.css";

import Navbar from "../Components/Simple/navbar.jsx";

import Footer from "../Components/Simple/footer.jsx";
import "../Styles/global.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PilatesMais",
  description: "Por Raphaella e Ian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.C}>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
          <Navbar></Navbar>

          {children}
          <Footer></Footer>
          <FooterM />
        </div>
      </body>
    </html>
  );
}
