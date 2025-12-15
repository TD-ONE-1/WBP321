import { useAuth } from "../Contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  
  return (
    <div class="headerDiv">
      <span>Welcome, {user?.userName}</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
