import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFun from "./DashboardFun";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <div className=" max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFun></DashboardFun>
        <Button type="button" className="text-white bg-secondary px-7">
          Start a campain
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
