import React, { Fragment } from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import { Button } from "components/button";
import CampViewAuthor from "./parts/CampViewAuthor";
import CampaignSupport from "./CampaignSupport";
import CampingPerk from "./CampingPerk";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(32, 18, 63, 0) 0%, #000 93.43%),url(/banner.png)`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory
            text="Acrchitecture"
            className=" text-sm"
          ></CampCategory>
          <CampTitle className="font-bold text-xl mb-4">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="text-sm mb-6">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
            <div className="h-full w-2/4 rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full" kind="primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-300 mb-6">
        <div className="flex items-center gap-x-14 text-sm font-medium text-text3">
          <span className=" cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button kind="primary">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="text-lg font-semibold uppercase mb-5">Story</h2>
          <div className="bg-white w-full"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-8">
            <CampingPerk></CampingPerk>
            <CampingPerk></CampingPerk>
            <CampingPerk></CampingPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 font-semibold text-xl">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
