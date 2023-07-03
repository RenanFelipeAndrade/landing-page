import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const PriceCardDescription = (props: ComponentProps<"p">) => {
  return (
    <p className={twMerge("text-gray-400 mb-4", props.className)}>
      {props.children}
    </p>
  );
};
