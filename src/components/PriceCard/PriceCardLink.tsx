import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const PriceCardLink = (props: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={twMerge(
        "inline-flex mx-auto mt-auto w-fit h-fit p-2 lg:px-5 lg:py-3 bg-light-gray rounded-lg",
        props.className
      )}
    >
      {props.children}
    </button>
  );
};
