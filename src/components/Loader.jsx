import React from "react";
import { Oval } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="loader">
      <div className="loading">
        <Oval
          visible={true}
          height="100"
          width="100"
          color="white"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loader;
