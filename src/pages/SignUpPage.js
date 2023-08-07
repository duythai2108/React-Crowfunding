import React, { useState } from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";
import FormGroup from "components/common/FormGroup";
import { Button } from "components/button";
import { Checkbox } from "components/checkbox";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({});
  const handleSignUp = (values) => {
    console.log("🚀 ~ SignUpPage ~ values:", values);
  };
  const [acceptTerm, setAcceptTerm] = useState(false);
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-text3 text-xs lg:text-sm  text-center font-normal lg:mb-8 mb-6">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary underline font-medium">
          Sign in
        </Link>
      </p>
      <button className="flex items-center gap-x-3 w-full justify-center py-4 border border-strock rounded-xl text-text2 text-base font-semibold mb-5">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>Sign up with Google</span>
      </button>
      <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full name * </Label>
          <Input control={control} name="name" placeholder="Duy Thai"></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            control={control}
            name="email"
            placeholder="examplae@gmail.com"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type="password"
            control={control}
            name="password"
            placeholder="Create a password"
          ></Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 flex-1 mb-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            {" "}
            <p className="text-sm text-text2">
              I agree to the{" "}
              <span className="text-secondary underline">Terms of Use</span> and
              have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button type="submit" className="bg-primary w-full">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
