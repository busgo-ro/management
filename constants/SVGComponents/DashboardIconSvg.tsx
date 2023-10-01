"use client";

import { SVGProps } from "@/interfaces/ComponentProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardIconSvg(props: SVGProps) {
  const { width, height, fillColor } = props;
  const pathName = usePathname();
  return (
    <>
      <Link href="/dashboard">
        <div className="flex items-center justify-center">
          <div className="">
            <svg
              width={width}
              height={height}
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33334 30C2.41667 30 1.63167 29.6733 0.978336 29.02C0.325003 28.3667 -0.00110828 27.5822 2.82966e-06 26.6667V16.25H11.6667V30H3.33334ZM15 30V16.25H30V26.6667C30 27.5833 29.6733 28.3683 29.02 29.0217C28.3667 29.675 27.5822 30.0011 26.6667 30H15ZM2.82966e-06 12.9167V3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06H26.6667C27.5833 2.82966e-06 28.3683 0.32667 29.0217 0.980003C29.675 1.63334 30.0011 2.41778 30 3.33334V12.9167H2.82966e-06Z"
                fill={pathName === '/dashboard' ? "#06a9a9" :  fillColor}
              />
            </svg>
          </div>
        </div>
        <span className="text-sm text-[#6a6a6a]">Dashboard</span>
      </Link>
    </>
  );
}
