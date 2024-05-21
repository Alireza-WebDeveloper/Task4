import Link from "next/link";
import React from "react";

interface LinkContainerProps {
  href: string;
  children: React.ReactNode;
}

const LinkContainer: React.FC<LinkContainerProps> = ({ children, ...rest }) => {
  return <Link {...rest}>{children}</Link>;
};

export default LinkContainer;
