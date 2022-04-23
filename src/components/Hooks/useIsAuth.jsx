import { useCookies } from "react-cookie";

const useIsAuth = () => {
  const [cookies] = useCookies();
  const isAuth = cookies?.userAuthData?.isAuth;

  return isAuth;
};

export default useIsAuth;
