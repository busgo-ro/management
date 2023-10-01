"use client";
import { SVGProps } from "@/interfaces/ComponentProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HelpIconSvg(props: SVGProps) {
  const { width, height, fillColor } = props;
  const [iconColor, setIconColor] = useState(fillColor);
  const pathName = usePathname();
  useEffect(() => {
    if (location.pathname == "/help") setIconColor("#06a9a9");
    else setIconColor(fillColor);
  }, [pathName]);
  return (
    <>
      <Link href="/help">
        <div className="flex items-center justify-center">
          <div className="">
            <svg
              width={width}
              height={height}
              viewBox="-3 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5417 0.583344H3.45833C2.77319 0.583344 2.11611 0.855515 1.63164 1.33998C1.14717 1.82445 0.875 2.48153 0.875 3.16668V21.25C0.875 22.6708 2.0375 23.8333 3.45833 23.8333H8.625L11.5829 26.7913C12.0867 27.295 12.9004 27.295 13.4042 26.7913L16.375 23.8333H21.5417C22.9625 23.8333 24.125 22.6708 24.125 21.25V3.16668C24.125 1.74584 22.9625 0.583344 21.5417 0.583344ZM13.7917 21.25H11.2083V18.6667H13.7917V21.25ZM16.4654 11.2396L15.3029 12.4279C14.5538 13.19 14.0242 13.8488 13.8562 15.0888C13.7787 15.6442 13.3267 16.0704 12.7583 16.0704H12.3579C12.1991 16.0701 12.0422 16.0358 11.8978 15.9697C11.7534 15.9037 11.6249 15.8074 11.5208 15.6874C11.4168 15.5675 11.3396 15.4266 11.2946 15.2743C11.2497 15.122 11.2378 14.9618 11.26 14.8046C11.4021 13.6292 11.9446 12.5829 12.7325 11.7821L14.3342 10.1546C14.7992 9.68959 15.0833 9.04376 15.0833 8.33334C15.0833 6.91251 13.9208 5.75001 12.5 5.75001C11.3762 5.75001 10.4075 6.48626 10.0587 7.49376C9.89083 7.97168 9.49042 8.32043 8.98667 8.32043H8.59917C7.85 8.32043 7.33333 7.59709 7.54 6.87376C7.892 5.68233 8.6613 4.65753 9.7071 3.98692C10.7529 3.31632 12.0052 3.04478 13.2349 3.22201C14.4645 3.39924 15.5892 4.01338 16.403 4.95202C17.2169 5.89066 17.6655 7.09101 17.6667 8.33334C17.6667 9.47001 17.2017 10.5033 16.4654 11.2396Z"
                fill={iconColor}
              />
            </svg>
          </div>
        </div>
        <span className="text-sm  mx-auto text-[#6a6a6a]">Help</span>
      </Link>
    </>
  );
}