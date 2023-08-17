import LayoutDashboard from "layout/LayoutDashboard";
import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("🚀 ~ StartCampaignPage ~ user:", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) {
      navigate("/login");
    }
  }, [user]);
  return (
    <Fragment>
      <CampaignAddNew></CampaignAddNew>
    </Fragment>
  );
};

export default StartCampaignPage;
