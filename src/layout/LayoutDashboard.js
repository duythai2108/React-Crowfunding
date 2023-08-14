import { Button } from "components/button";
import Overlay from "components/common/Overlay";
import CampingPerk from "modules/campaign/CampingPerk";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center "
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto"
      >
        <button className="absolute z-10 right-10 top-[10px] text-text1 cursor-pointer w-11 h-11 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">
          Back this project
        </h2>
        <p className="text-sm mb-3">Enter the contribute amount $10</p>
        <input
          type="text"
          name="amount"
          placeholder="$10"
          className="text-lg font-medium py-3 px-5 border border-strock w-full rounded"
        ></input>
        <p className="text-text3 text-sm my-5">
          Contribution are not associatied with perks
        </p>
        <Button kind="primary">Continue</Button>
        <div className="mt-[60px]"></div>
        <CampingPerk showButton></CampingPerk>
      </ReactModal>
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
