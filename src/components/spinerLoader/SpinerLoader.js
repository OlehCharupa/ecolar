import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Loader from "react-loader-spinner";
import style from "./SpinerLoader.module.css";


const SpinerLoader = () => {
  const onlyWidth = useWindowWidth();
  return (
    <Loader
      className={style.loader}
      type="Circles"
      color="#00387b"
      height={onlyWidth < 768 ? 70 : 200}
      width={onlyWidth < 768 ? 70 : 200}
      timeout={3000} //3 secs
    />
  );
};

export default SpinerLoader;
