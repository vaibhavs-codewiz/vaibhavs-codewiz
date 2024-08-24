import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  let errObj = useRouteError();
  console.log(errObj);

  return (
    <>
      <h2>Error occured</h2>
      <h3>{errObj.status}: {errObj.statusText}</h3>
    </>
  );
}

export default Error;
