import React from "react";

const useGetCursor = () => {
  const [posX, setPosX] = React.useState(0);
  const [posY, setPosY] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPosX(e.clientX);
      setPosY(e.clientY);
    });
  }, []);

  return [posX, posY];
};

export default useGetCursor;
