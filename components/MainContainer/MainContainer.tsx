import { MainContainerProps } from "@/interfaces/ComponentProps";

export default function MainContainer(props: MainContainerProps) {
  const { children, className } = props;
  return <main className={className}>{children}</main>;
}
