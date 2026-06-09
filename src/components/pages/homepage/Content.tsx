import useTranslation from "next-translate/useTranslation";
import { FunctionComponent, ReactElement } from "react";
import SolarSystem from "./SolarSystem";
import Title from "@/components/atoms/Title";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { Routes } from "@/routes";
import Hero from "../../atoms/Hero";

type Props = {};

const Content: FunctionComponent<Props> = ({}: Props): ReactElement => {
  const { t } = useTranslation("common");

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center lg:mx-0 lg:max-w-none mt-4">
      <div className="flex order-first md:m-4">
        <div className="w-[48rem] max-w-none sm:w-[57rem]">
          <SolarSystem animate={true} />
        </div>
      </div>
      <div className="flex flex-col lg:ml-auto lg:pt-4 lg:pl-4">
        <Title title={t("profile.hi")} subtitle={t("title")}>
          <p
            className="lg:mt-4 mt-2 lg:text-sm text-xs lg:leading-6 text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: t("profile.about_mini").replace(
                /<a href="(.*?)">/g,
                `<a class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" href="$1">`
              ),
            }}
          />
        </Title>
        <Link className="mx-auto my-4" href={Routes.about}>
          <Button type={"info"}>{t("btn.more_about_me")}</Button>
        </Link>
        <div className="lg:max-w-xl mx-auto text-center items-center">
          <Image
            src={"/images/studio.jpg"}
            width={1280}
            height={1024}
            alt="studio"
          />
          <p className="text-xs -mt-4">My Studio</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
