import { MyContext } from "./CustomProvider";
import { useContext } from "react";
export const CustomDispatch = () => {
  const { dispatch } = useContext(MyContext);
  return dispatch;
};
