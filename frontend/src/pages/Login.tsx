import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, token } = useAuth();
  const navigate = useNavigate();

  if (token) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#201d1d]">Todo App</h1>
      </div>
      <div className="border border-[rgba(15,0,0,0.12)] rounded p-8 bg-[#fdfcfc]">
        <p className="text-[#424245] text-base mb-6 text-center">Sign in to continue</p>
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential) {
                login(credentialResponse.credential).then(() => navigate("/"));
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
