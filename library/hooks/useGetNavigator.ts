import React from "react";

const useGetNavigator = () => {
  const [navigator, setNavigator] = React.useState(null);
  React.useEffect(() => {
    fetch("https://api.ipify.org?format=json");
  }, []);
  return navigator;
};

export default useGetNavigator;
