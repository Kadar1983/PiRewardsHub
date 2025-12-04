import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="font-bold">Pi Rewards Hub</h1>
      <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
        خروج
      </button>
    </header>
  );
}
