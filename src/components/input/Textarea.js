import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, placeholder = "", children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      className="resize-none outline-none min-h-[140px] w-full py-4 px-6 border rounded-xl text-sm font-medium text-text1 placeholder:text-text4 bg-transparent dark:placeholder:text-text2 dark:text-white"
      placeholder={placeholder}
      {...field}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
