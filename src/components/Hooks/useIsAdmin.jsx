import useFetchUserData from "./useFetchUserData";

const useIsAdmin = () => {
  const userData = useFetchUserData();
  const isAdmin = userData?.isAdmin;

  return isAdmin;
};

export default useIsAdmin;
