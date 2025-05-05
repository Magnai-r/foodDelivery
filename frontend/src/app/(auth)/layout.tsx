import { AuthBigImage } from "./signup/AuthBigImage";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="flex w-[40%] h-full items-center justify-end pr-12">
        {children}
      </div>
      <AuthBigImage />
    </div>
  );
}
