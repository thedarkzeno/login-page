import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetEmail } from "../Store/actions";

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetEmail(""));
  }, [dispatch, history]);
  return <></>;
};

export default Logout;
