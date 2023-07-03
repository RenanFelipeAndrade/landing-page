import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface PriceTitleProps extends ComponentProps<"h4"> {
  title: string;
}

export const PriceCardTitle = ({ title, ...rest }: PriceTitleProps) => {
  return (
    <h4
      {...rest}
      className={twMerge(
        "mb-4 text-xl sm:text-2xl text-center font-medium",
        rest.className
      )}
    >
      {title}
    </h4>
  );
};
