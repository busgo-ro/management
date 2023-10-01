import { LoginFormProps } from "@/interfaces/ComponentProps";
import EmailIconSVG from "../../assets/svgs/email_icon.svg";
import PasswordIconSVG from "../../assets/svgs/password_icon.svg";

import Image from "next/image";

export default function LoginForm(props: LoginFormProps) {
  const { className } = props;
  return (
    <>
      <form className={className} action="/auth/sign-in" method="post">
        <div className="flex flex-col mb-4 w-[22.5rem]">
          <div className="relative flex flex-col">
            <label className="text-lg" htmlFor="email">
              Email address
            </label>
            <div className="absolute  left-3 top-[2.65rem]">
              <Image
                src={EmailIconSVG}
                alt="An email icon"
                width={23}
                height={20}
              />
            </div>
            <input
              type="text"
              className="rounded-md pl-12 pr-4 py-[0.74rem] border mb-5 bg-text-field-background placeholder:text-sm placeholder:font-thin"
              name="email"
              placeholder="Type your email address"
              required
            />
          </div>
          <div className="relative flex flex-col">
            <label className="text-lg" htmlFor="password">
              Password
            </label>
            <div className="absolute left-3 top-[2.48rem]">
              <Image
                src={PasswordIconSVG}
                alt="An email icon"
                width={25}
                height={25}
              />
            </div>
            <input
              className="rounded-md placeholder:text-sm placeholder:font-thin pl-12 pr-4 py-[0.74rem] bg-text-field-background border "
              type="password"
              name="password"
              placeholder="Type your password"
              required
            />
          </div>
          <span className="text-xs font-thin ml-[14.8rem] mt-1">
            Forgot your password?
          </span>
        </div>

        <button className="bg-btn-login-background w-[7.5rem] mx-auto pt-2 pb-1  text-white  font-bold text-xl rounded-xl">
          LOG IN
        </button>
      </form>
    </>
  );
}
