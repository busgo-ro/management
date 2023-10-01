"use client";
import { SVGProps } from "@/interfaces/ComponentProps";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function FleetIconSvg(props: SVGProps) {
  const { width, height, fillColor } = props;
  const pathName = usePathname();
  return (
    <>
      <Link href="/fleet">
        <div className="flex items-center justify-center">
          <div className="">
            <svg
              width={width}
              height={height}
              fill="none"
              viewBox="2 -10 42 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.50008 0.663734C2.09508 0.663734 0.166748 2.4433 0.166748 4.66276V18.6593H4.50008C4.50008 20.2502 5.1849 21.776 6.40389 22.9009C7.62287 24.0259 9.27617 24.6579 11.0001 24.6579C12.724 24.6579 14.3773 24.0259 15.5963 22.9009C16.8153 21.776 17.5001 20.2502 17.5001 18.6593H30.5001C30.5001 20.2502 31.1849 21.776 32.4039 22.9009C33.6229 24.0259 35.2762 24.6579 37.0001 24.6579C38.724 24.6579 40.3773 24.0259 41.5963 22.9009C42.8153 21.776 43.5001 20.2502 43.5001 18.6593H47.8334V4.66276C47.8334 2.4433 45.9051 0.663734 43.5001 0.663734H4.50008ZM3.41675 3.663H12.0834V8.66178H3.41675V3.663ZM15.3334 3.663H24.0001V8.66178H15.3334V3.663ZM27.2501 3.663H35.9167V8.66178H27.2501V3.663ZM39.1667 3.663H44.5834V14.6603L39.1667 10.6613V3.663ZM11.0001 15.6601C11.862 15.6601 12.6887 15.9761 13.2982 16.5385C13.9077 17.101 14.2501 17.8639 14.2501 18.6593C14.2501 19.4548 13.9077 20.2177 13.2982 20.7801C12.6887 21.3426 11.862 21.6586 11.0001 21.6586C10.1381 21.6586 9.31148 21.3426 8.70198 20.7801C8.09249 20.2177 7.75008 19.4548 7.75008 18.6593C7.75008 17.8639 8.09249 17.101 8.70198 16.5385C9.31148 15.9761 10.1381 15.6601 11.0001 15.6601ZM37.0001 15.6601C37.862 15.6601 38.6887 15.9761 39.2982 16.5385C39.9077 17.101 40.2501 17.8639 40.2501 18.6593C40.2501 19.4548 39.9077 20.2177 39.2982 20.7801C38.6887 21.3426 37.862 21.6586 37.0001 21.6586C36.1381 21.6586 35.3115 21.3426 34.702 20.7801C34.0925 20.2177 33.7501 19.4548 33.7501 18.6593C33.7501 17.8639 34.0925 17.101 34.702 16.5385C35.3115 15.9761 36.1381 15.6601 37.0001 15.6601Z"
                fill={pathName === "/fleet" ? "#06a9a9" : fillColor}
                width={width}
                height={height}
              />
            </svg>
          </div>
        </div>
        <span className="text-sm mx-auto text-[#6a6a6a] mb-12">Fleet</span>
      </Link>
    </>
  );
}
