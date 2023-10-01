import { NavigationDrawerProps } from "@/interfaces/ComponentProps";
import Logo from "../shared/ServerLogo";
import { navComponents } from "@/constants/constants";
export default function NavigationDrawer(props: NavigationDrawerProps) {
  const { className } = props;
  return (
    <nav className={className}>
      <ol className="flex flex-col justify-center align-center">
        <li>
          <Logo width={79} className="py-[2.6rem] mx-auto" height={2} />
        </li>
        <hr className="w-[4.7rem] mx-auto" />
        <div className="mt-[5rem] flex flex-col justify-center align-middle gap-10">
          {navComponents.map((element, index) => {
            const helpSectionGap = index === 5 ? "mt-[28rem]" : "";
            return (
              <li
                className={`mx-[0.9rem] flex flex-col justify-center align-center text-center ${helpSectionGap}`}
              >
                {" "}
                {element.component}
              </li>
            );
          })}
        </div>
      </ol>
    </nav>
  );
}
