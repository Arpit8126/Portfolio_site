import React, { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return <div className="py-10">{children}</div>;
};

export default PageLayout;
