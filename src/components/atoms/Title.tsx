import clsx from "clsx";
import React, { FunctionComponent, ReactElement, ReactNode } from "react";

type TitleSize = {
  xl: string;
  md: string;
  xs: string;
};

type ButtonProps = {
  title: string;
  subtitle?: string;
  className?: string;
  size?: keyof TitleSize;
  children?: ReactElement;
};

const Title: FunctionComponent<ButtonProps> = ({
  children,
  title,
  subtitle,
  size = "md",
  className,
}: ButtonProps): ReactElement => {
  return (
    <>
      <div className={className}>
        <div className="lg:pr-4 my-4 md:my-8">
          {subtitle && (
            <p className="text-sm md:text-base font-semibold leading-4 text-indigo-600 dark:text-indigo-500">
              {subtitle}
            </p>
          )}
          <h1
            className={clsx(
              "mt-1 md:mb-2 font-bold tracking-tight text-gray-800 dark:text-gray-100",
              [{ "md:text-4xl text-2xl": size === "xl" }],
              [{ "md:text-2xl text-xl": size === "md" }],
              [{ "md:text-base text-sm": size === "xs" }]
            )}
          >
            {title}
          </h1>
          {children && (
            <div className="text-gray-600 dark:text-gray-300">{children}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Title;
