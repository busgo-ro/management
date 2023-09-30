import Messages from "./messages";
import LoginModal from "../../components/Login/ServerLoginModal";

export default function Login() {
  return (
    <div>
      <LoginModal className="bg-background-login-form flex flex-col gap-20 mt-20 border rounded-lg" />
      <Messages />
    </div>
  );
}
