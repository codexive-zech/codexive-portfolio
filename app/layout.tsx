import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-stone-900">
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
