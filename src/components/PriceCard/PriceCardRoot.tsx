import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const PriceCardRoot = (props: ComponentProps<"div">) => {
  return (
    <div {...props} className={twMerge("p-6 lg:p-16 flex flex-col", props.className)}>
      {props.children}
    </div>
  );
};
