import React, { useEffect } from "react";
import { storeData } from "../../utils/common";

export const withLoadData = (WrappedComponent) => (props) => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://goldenpetalbonsai.s3.ap-southeast-2.amazonaws.com/data.json"
      );
      const jsonData = await response.json();
      storeData(JSON.stringify(jsonData));
    } catch (err) {
      console.log(err);
    }
  };
  return <WrappedComponent {...props} />;
};
