import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
