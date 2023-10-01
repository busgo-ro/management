import Link from "next/link";
import LoginForm from "./ServerLoginForm";
import Logo from "../shared/ServerLogo";
import { LoginModalProps } from "@/interfaces/ComponentProps";

export default function LoginModal(props: LoginModalProps) {
  const { className } = props;
  return (
    <>
      <div className={className}>
        <Logo width={170} className="mx-auto mt-10" height={50} />
        <LoginForm className=" px-10 pb-[13rem] mt-[-2rem] flex flex-col justify-center gap-2" />
      </div>
    </>
  );
}
