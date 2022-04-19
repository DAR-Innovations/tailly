import { useState } from "react";

const useIsAuth = () => {
  function getIsAuth() {
    const localData = JSON.parse(localStorage.getItem("userAuthData")) || null;
    const isAuth = localData?.isAuth;
    return isAuth;
  }

  return getIsAuth();
};

export default useIsAuth;
