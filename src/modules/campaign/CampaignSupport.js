import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="text-lg font-semibold mb-5">Support</h2>
      <div className="bg-white w-full shadow-1 py-7 px-6 flex flex-col">
        <p className="text-xl mb-8 text-text3 text-center">
          Pledge without reward
        </p>
        <Input
          name="pedge"
          control={control}
          placeholder="$10"
          className="text-lg font-medium py-2 px-5 border border-strock w-full rounded mb-5"
        ></Input>
        <div className="bg-grayf3 p-5 rounded-xl mb-5">
          <p className="text-text2 text-sm font-semibold mb-2">
            Back it because you believe in it.
          </p>
          <p className="text-text3 text-sm">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button className="w-full" kind="secondary">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
