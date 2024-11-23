import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-full items-center justify-center">
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}