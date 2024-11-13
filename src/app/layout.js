
import "./globals.css";
import localFont from "next/font/local";




const breathing = localFont({
  src: "./fonts/Breathing.ttf",
  variable: "--font-breathing",
  weight: "100 900",
});


export default function RootLayout({ children }) {


  return (
    <html className="h-screen	">

      <body className={`p-4 w-screen	h-screen bg-black text-white ${breathing.className}  antialiased overflow-x-hidden	`}>

       
        {children}

      </body>
    </html>
  );
}
