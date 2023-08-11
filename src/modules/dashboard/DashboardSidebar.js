import {
  IconCampaign,
  IconDarkmode,
  IconDashBoard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "utils/classNames";

const DashboardSidebar = () => {
  const sidebarLinks = [
    {
      icon: <IconDashBoard></IconDashBoard>,
      title: "Dashboard",
      url: "/",
    },
    {
      icon: <IconCampaign></IconCampaign>,
      title: "Campaign",
      url: "/campaign",
    },
    {
      icon: <IconPayment></IconPayment>,
      title: "Payment",
      url: "/payment",
    },
    {
      icon: <IconWithdraw></IconWithdraw>,
      title: "Withdraw",
      url: "/withdraw",
    },
    {
      icon: <IconProfile></IconProfile>,
      title: "Profile",
      url: "/profile",
    },
    {
      icon: <IconLogout></IconLogout>,
      title: "Logout",
      url: "#",
      onclick: () => {},
    },
    {
      icon: <IconDarkmode></IconDarkmode>,
      title: "Light/Dark",
      url: "#",
      onclick: () => {},
    },
  ];
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-sdprimary px-[14px] py-10 flex flex-col flex-shrink-0">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={classNames(
            "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 text-icon-color last:mt-auto last:bg-white last:shadow-sdprimary",
            ({ isActive }) =>
              isActive ? "bg-primary text-primary bg-opacity-20" : "inactive"
          )}
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
