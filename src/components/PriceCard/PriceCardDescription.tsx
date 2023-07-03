import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const PriceCardDescription = (props: ComponentProps<"p">) => {
  return (
    <p className={twMerge("text-text-gray mb-4", props.className)}>
      {props.children}
    </p>
  );
};
