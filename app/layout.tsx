// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NewPath — Start your next step with clarity",
  description: "A simple landing page with a lead form that routes submissions into your CRM."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="body">
        <div className="page">
          {children}
          <footer className="footer">
            <div className="container footerInner">
              <div className="muted">
                © {new Date().getFullYear()} NewPath. All rights reserved.
              </div>
              <div className="muted">
                This site does not provide legal or credit repair advice.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
