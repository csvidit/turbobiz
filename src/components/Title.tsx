import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = (props: TitleProps) => {
  return (
    <h1 className="text-amber-400 text-2xl lg:text-4xl font-light">
      {props.children}
    </h1>
  );
};

export default Title;
