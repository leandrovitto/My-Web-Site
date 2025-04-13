import useTranslation from "next-translate/useTranslation";
import Typewriter from "typewriter-effect";
import { FunctionComponent, ReactElement } from "react";

const AboutTypewriter: FunctionComponent = (): ReactElement => {
  const { t } = useTranslation("common");

  const base = t("about-typewriter-base");
  const tArray = t(
    "about-typewriter-content",
    {},
    {
      returnObjects: true,
    }
  ) as Array<string>;

  const typewriterOptions = {
    delay: 90, // speed up insertion
    deleteSpeed: 40, // speed up deletion
    strings: tArray,
    autoStart: true,
    loop: true,
    cursor: "_",
  };

  return (
    <>
      {base}
      <Typewriter options={typewriterOptions} />
    </>
  );
};

export default AboutTypewriter;
