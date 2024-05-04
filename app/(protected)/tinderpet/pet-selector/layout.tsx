import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Selector",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
