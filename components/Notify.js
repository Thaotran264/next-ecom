import React, { useContext } from "react";
import { DataContext } from "../store/globalState";
import Loading from "./Loading";
import ToastComponent from "./Toast";

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;
  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <ToastComponent
          msg={{ msg: notify.error, title: "Error" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor='bg-danger'
        />
      )}

      {notify.success && (
        <ToastComponent
          msg={{ msg: notify.success, title: "Success" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor='bg-success'
        />
      )}
    </>
  );
};

export default Notify;
