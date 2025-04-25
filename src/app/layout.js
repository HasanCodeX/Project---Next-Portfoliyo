import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/footer";

// Load the Geist and Geist_Mono fonts (optional, for specific elements)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mehedi Portfoliyo",
  description: "Work with me !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Link to Michroma font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
        rel="stylesheet"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'Michroma, var(--font-geist-sans), sans-serif' }} // Apply Michroma as the default
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
