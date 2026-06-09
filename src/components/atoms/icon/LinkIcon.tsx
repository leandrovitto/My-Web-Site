import Link from "next/link";
import { FunctionComponent, ReactElement } from "react";
import Icon from "./Icon";

type LinkIconProps = {
  icon: string;
  link: string;
};

const LinkIcon: FunctionComponent<LinkIconProps> = ({
  icon,
  link,
}: LinkIconProps): ReactElement => {
  const classes = "flex items-center ";

  return (
    <Link className={classes} href={link} target="__blank">
      <Icon icon={icon} className="ring-indigo-500 hover:animate-spin" />
    </Link>
  );
};

export default LinkIcon;
