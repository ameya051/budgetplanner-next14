import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import RootProviders from "@/components/providers/RootProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Budget Planner",
  description: "Making handling your budgets easy and fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="dark"
        style={{
          colorScheme: "dark",
        }}
      >
        <body className={inter.className}>
          {/*<header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
