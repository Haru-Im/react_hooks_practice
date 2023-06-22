import React, { useEffect, useState, CSSProperties } from "react";

interface BoxProps {
  createBoxStyle: () => CSSProperties;
}

const Box: React.FC<BoxProps> = ({ createBoxStyle }) => {
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    console.log("Box Component re-rendered!");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
};

export default Box;
