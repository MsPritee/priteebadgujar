
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



export const metadata = {
  ttitle: "Pritee Portfolio",
  description: "Created with Next.js",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar Component */}
        <Navbar />
        
        {/* Page Content */}
        {children}

        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
