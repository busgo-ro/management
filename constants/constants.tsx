import DashboardIconSvg from "@/constants/SVGComponents/DashboardIconSvg";
import DriversIconSvg from "@/constants/SVGComponents/DriversIconSvg";
import FleetIconSvg from "@/constants/SVGComponents/FleetIconSvg";

import HelpIconSvg from "@/constants/SVGComponents/HelpIconSvg";

import TripsIconSvg from "@/constants/SVGComponents/TripsIconSvg";
import RoutesIconSvg from "@/constants/SVGComponents/RoutesIconSvg";

export const navComponents = [
  {
    component: <DashboardIconSvg width={40} fillColor="#6a6a6a" height={40} />,
  },
  {
    component: <TripsIconSvg width={40} fillColor="#6a6a6a" height={40} />,
  },
  {
    component: <RoutesIconSvg width={40} fillColor="#6a6a6a" height={40} />,
  },
  {
    component: <FleetIconSvg width={55} fillColor="#6a6a6a" height={40} />,
  },
  {
    component: <DriversIconSvg width={40} fillColor="#6a6a6a" height={40} />,
  },
  {
    component: <HelpIconSvg width={40} fillColor="#6a6a6a" height={40} />,
  },
];
