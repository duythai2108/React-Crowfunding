import React, { useEffect } from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link, useNavigate } from "react-router-dom";
import { Button, ButtonGoogle } from "components/button";
import FormGroup from "components/common/FormGroup";
import { Label } from "components/label";
import { Input } from "components/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useToggleValue from "hooks/useToggleValue";
import { IconEyeToggle } from "components/icons";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "store/auth/auth-slice";
const schema = yup.object({
  email: yup.string().email("").required("This field is required"),
  password: yup
    .string()
    .required("This field is requied")
    .min(8, "Password must be greater than 8"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: showpassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.id) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-text3 text-xs lg:text-sm  text-center font-normal lg:mb-8 mb-6">
        Dont have an account?{" "}
        <Link to="/register" className="text-primary underline font-medium">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email * </Label>
          <Input
            control={control}
            name="email"
            placeholder="abc@gmail.com"
            error={errors?.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={`${showpassword ? "text" : "password"}`}
            name="password"
            control={control}
            placeholder="Enter a password"
            error={errors?.password?.message}
          >
            <IconEyeToggle
              open={showpassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="text-right my-3">
          <span className="text-primary inline-block text-sm font-medium underline">
            Forgot password
          </span>
        </div>
        <Button type="submit" className=" w-full" kind="primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
