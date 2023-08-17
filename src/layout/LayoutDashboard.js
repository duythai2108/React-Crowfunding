import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampingPerk from "modules/campaign/CampingPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import RequireAuthPage from "pages/RequireAuthPage";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex gap-x-10 items-start">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
