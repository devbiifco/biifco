import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>Dashboard Page</div>
      <div><UserButton /></div>
    </div>
  );
}