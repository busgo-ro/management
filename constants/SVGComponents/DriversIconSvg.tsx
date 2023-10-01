"use client";
import { SVGProps } from "@/interfaces/ComponentProps";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DriversIconSvg(props: SVGProps) {
  const { width, height, fillColor } = props;
  const pathName = usePathname();
  
  return (
    <>
      <Link href="/drivers">
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.37497 4.10417C7.37497 3.68442 11.7028 0.75 16 0.75C20.2971 0.75 24.625 3.68537 24.625 4.10417C24.625 5.59917 24.4659 6.48467 24.3317 6.96671C24.2426 7.28296 23.9465 7.45833 23.6178 7.45833H8.38218C8.05347 7.45833 7.75735 7.28296 7.66822 6.96671C7.53406 6.48467 7.37497 5.59917 7.37497 4.10417ZM14.5625 3.625C14.3083 3.625 14.0646 3.72597 13.8848 3.90569C13.7051 4.08541 13.6041 4.32917 13.6041 4.58333C13.6041 4.8375 13.7051 5.08125 13.8848 5.26098C14.0646 5.4407 14.3083 5.54167 14.5625 5.54167H17.4375C17.6916 5.54167 17.9354 5.4407 18.1151 5.26098C18.2948 5.08125 18.3958 4.8375 18.3958 4.58333C18.3958 4.32917 18.2948 4.08541 18.1151 3.90569C17.9354 3.72597 17.6916 3.625 17.4375 3.625H14.5625ZM8.36972 13.4172C5.17847 12.4302 5.98347 10.6668 7.20056 9.375H25.0658C26.0395 10.6189 26.5618 12.297 23.6187 13.3013C23.739 14.3689 23.6336 15.4499 23.3093 16.4741C22.9849 17.4983 22.4489 18.443 21.7361 19.2468C21.0232 20.0505 20.1494 20.6955 19.1712 21.1399C18.193 21.5842 17.1324 21.818 16.0581 21.8261C14.9838 21.8342 13.9197 21.6165 12.935 21.1869C11.9502 20.7573 11.0667 20.1256 10.3418 19.3327C9.61691 18.5397 9.06675 17.6033 8.72702 16.5841C8.38728 15.5648 8.26555 14.4856 8.36972 13.4163V13.4172ZM15.7393 14.1667C18.2712 14.1667 20.2339 14.0325 21.7385 13.7987C21.7879 14.58 21.6773 15.3632 21.4134 16.1003C21.1495 16.8374 20.7378 17.5128 20.2036 18.0852C19.6694 18.6575 19.024 19.1148 18.3068 19.4289C17.5897 19.743 16.816 19.9073 16.0331 19.9118C15.2502 19.9163 14.4746 19.7609 13.7539 19.4551C13.0332 19.1493 12.3825 18.6995 11.8418 18.1333C11.3011 17.5672 10.8816 16.8965 10.6092 16.1625C10.3368 15.4285 10.2172 14.6467 10.2576 13.8648C11.6597 14.0584 13.4566 14.1667 15.7393 14.1667ZM24.0663 28.1583C23.1994 26.8059 22.0063 25.6933 20.5967 24.923C19.1871 24.1526 17.6063 23.7492 16 23.75C14.3929 23.749 12.8115 24.1524 11.4013 24.9231C9.99119 25.6938 8.79769 26.8071 7.93081 28.1602C7.60908 27.6647 7.11496 27.3062 6.5441 27.154L4.6926 26.6585C4.07892 26.494 3.42502 26.58 2.87472 26.8976C2.32442 27.2151 1.9228 27.7383 1.75818 28.3519L1.01452 31.1292C0.933069 31.4331 0.912288 31.7501 0.953359 32.062C0.994431 32.374 1.09655 32.6748 1.25389 32.9473C1.41122 33.2198 1.62069 33.4586 1.87034 33.6502C2.11998 33.8417 2.40491 33.9822 2.70885 34.0636L4.55939 34.56C4.87066 34.6438 5.19568 34.6638 5.51487 34.6187C5.83407 34.5736 6.14082 34.4643 6.41664 34.2974C6.4174 34.5516 6.5191 34.795 6.69936 34.9742C6.87962 35.1534 7.12368 35.2536 7.37785 35.2529C7.63202 35.2521 7.87547 35.1504 8.05465 34.9701C8.23383 34.7899 8.33407 34.5458 8.33331 34.2917V33.3333C8.33331 32.9682 8.35918 32.6088 8.40806 32.2571L13.3952 33.594C13.6267 34.0895 13.9948 34.5087 14.4561 34.8024C14.9175 35.0961 15.4531 35.2521 16 35.2521C16.5469 35.2521 17.0825 35.0961 17.5438 34.8024C18.0052 34.5087 18.3732 34.0895 18.6047 33.594L23.5919 32.2571C23.6408 32.6088 23.6666 32.9682 23.6666 33.3333V34.2917C23.6654 34.5458 23.7651 34.7901 23.9439 34.9707C24.1228 35.1513 24.366 35.2535 24.6202 35.2548C24.8743 35.2561 25.1186 35.1563 25.2992 34.9775C25.4799 34.7987 25.582 34.5554 25.5833 34.3012C26.12 34.6232 26.7831 34.7354 27.4358 34.56L29.2873 34.0645C29.5912 33.9831 29.8761 33.8427 30.1258 33.6511C30.3754 33.4596 30.5849 33.2208 30.7422 32.9483C30.8996 32.6758 31.0017 32.375 31.0428 32.063C31.0838 31.751 31.063 31.4341 30.9816 31.1301L30.237 28.3529C30.0724 27.7392 29.6707 27.2161 29.1204 26.8985C28.5701 26.5809 27.9162 26.495 27.3026 26.6595L25.4511 27.155C24.8815 27.3066 24.3882 27.6646 24.0663 28.1583ZM8.91118 30.4075C9.42886 29.1555 10.2688 28.0629 11.3455 27.2406C12.4223 26.4184 13.6975 25.8958 15.0416 25.7261V29.6639C14.6122 29.8162 14.2249 30.0682 13.9117 30.3993C13.5986 30.7303 13.3683 31.1308 13.24 31.5681L8.91118 30.4085V30.4075ZM23.0888 30.4075C22.571 29.1556 21.7311 28.063 20.6543 27.2408C19.5776 26.4185 18.3024 25.8959 16.9583 25.7261V29.6639C17.8246 29.9705 18.5012 30.6797 18.76 31.5681L23.0888 30.4085V30.4075ZM16 33.3333C16.2541 33.3333 16.4979 33.2324 16.6776 33.0526C16.8573 32.8729 16.9583 32.6292 16.9583 32.375C16.9583 32.1208 16.8573 31.8771 16.6776 31.6974C16.4979 31.5176 16.2541 31.4167 16 31.4167C15.7458 31.4167 15.5021 31.5176 15.3223 31.6974C15.1426 31.8771 15.0416 32.1208 15.0416 32.375C15.0416 32.6292 15.1426 32.8729 15.3223 33.0526C15.5021 33.2324 15.7458 33.3333 16 33.3333Z"
                fill={pathName === '/drivers' ? "#06a9a9" :  fillColor}
              />
            </svg>
          </div>
        </div>
        <span className="text-sm mx-auto  text-[#6a6a6a]">Drivers</span>
      </Link>
    </>
  );
}
