import Image from "next/image";
import BusGOLogo from "../../assets/images/busgo-logo.png";
import { LogoProps } from "@/interfaces/ComponentProps";

export default function Logo(props: LogoProps) {
  const { width, height, className } = props;
  return (
    <>
      <Image
        className={className}
        width={width}
        height={height}
        src={BusGOLogo}
        alt="BusGO logo"
      />
    </>
  );
}
