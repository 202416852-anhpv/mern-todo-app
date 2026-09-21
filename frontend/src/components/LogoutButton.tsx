import { useAuth } from "../contexts/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="w-9 h-9 text-[#646262] active:text-[#ff3b30] shrink-0 flex items-center justify-center"
    >
      <span className="font-mono text-[16px]">[-]</span>
    </button>
  );
}
