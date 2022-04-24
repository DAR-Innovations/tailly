import { useCookies } from "react-cookie";

const useUID = () => {
  const [cookies] = useCookies();
  const uid = cookies?.userAuthData?.uid;

  return uid;
};

export default useUID;
