import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jovie's Web Dev Assignments",
  description: "Assignments for Web Dev 2 at SAIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue flex justify-center pt-20`}>
        <Link
          href={"/"}
          className="absolute text-xl top-2 left-2 bg-text text-pink px-3 py-2 hover:bg-pink hover:text-text flex justify-center items-center gap-2"
        >
          {/*icon for home icon from library*/}
          <TiHome />
          home
        </Link>
        <div className="w-[80%]">{children}</div>
      </body>
    </html>
  );
}
