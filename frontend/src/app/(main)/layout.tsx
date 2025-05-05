import { Footer } from "./Footer";
import { Navigation } from "./user-header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-fit flex-col w-full">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
