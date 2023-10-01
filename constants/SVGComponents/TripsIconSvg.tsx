"use client";
import { SVGProps } from "@/interfaces/ComponentProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TripsIconSvg(props: SVGProps) {
  const { width, height, fillColor } = props;
  const [iconColor, setIconColor] = useState(fillColor);
  const pathName = usePathname();
  useEffect(() => {
    if (location.pathname == "/trips") setIconColor("#06a9a9");
    else setIconColor(fillColor);
  }, [pathName]);
  return (
    <>
      <Link href="/trips">
        <div className="flex items-center justify-center">
          <div>
            <svg
              width={width}
              height={height}
              viewBox="0 0 40 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.16664 2L14.1111 11.4482L2.16664 20.8965"
                stroke={iconColor}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.1112 2L26.0557 11.4482L14.1112 20.8965"
                stroke={iconColor}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.0556 2L38 11.4482L26.0556 20.8965"
                stroke={iconColor}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <span className="text-sm mx-auto  text-[#6a6a6a]">Trips</span>
      </Link>
    </>
  );
}
