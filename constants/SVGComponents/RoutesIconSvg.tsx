"use client";
import { SVGProps } from "@/interfaces/ComponentProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RoutesIconSvg(props: SVGProps) {
  const { width, height, fillColor } = props;
  const [iconColor, setIconColor] = useState(fillColor);
  const pathName = usePathname();
  useEffect(() => {
    if (location.pathname == "/routes") setIconColor("#06a9a9");
    else setIconColor(fillColor);
  }, [pathName]);
  return (
    <>
      <Link href="/routes">
        <div className="flex items-center justify-center">
          <div>
            <svg
              width={width}
              height={height}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4375 21.875H21.875C20.6719 21.875 19.6875 20.8906 19.6875 19.6875C19.6875 18.4844 20.6719 17.5 21.875 17.5H28.4375C28.4375 17.5 35 10.1855 35 6.5625C35 2.93945 32.0605 0 28.4375 0C24.8145 0 21.875 2.93945 21.875 6.5625C21.875 8.30566 23.3926 10.8965 24.9717 13.125H21.875C18.2588 13.125 15.3125 16.0713 15.3125 19.6875C15.3125 23.3037 18.2588 26.25 21.875 26.25H28.4375C29.6406 26.25 30.625 27.2344 30.625 28.4375C30.625 29.6406 29.6406 30.625 28.4375 30.625H12.6807C11.5869 32.3203 10.3701 33.8857 9.44727 35H28.4375C32.0537 35 35 32.0537 35 28.4375C35 24.8213 32.0537 21.875 28.4375 21.875ZM28.4375 4.375C29.6475 4.375 30.625 5.35254 30.625 6.5625C30.625 7.77246 29.6475 8.75 28.4375 8.75C27.2275 8.75 26.25 7.77246 26.25 6.5625C26.25 5.35254 27.2275 4.375 28.4375 4.375ZM6.5625 17.5C2.93945 17.5 0 20.4395 0 24.0625C0 27.6855 6.5625 35 6.5625 35C6.5625 35 13.125 27.6855 13.125 24.0625C13.125 20.4395 10.1855 17.5 6.5625 17.5ZM6.5625 26.25C5.35254 26.25 4.375 25.2725 4.375 24.0625C4.375 22.8525 5.35254 21.875 6.5625 21.875C7.77246 21.875 8.75 22.8525 8.75 24.0625C8.75 25.2725 7.77246 26.25 6.5625 26.25Z"
                fill={iconColor}
              />
            </svg>
          </div>
        </div>
        <span className="text-sm mx-auto  text-[#6a6a6a]">Routes</span>
      </Link>
    </>
  );
}
