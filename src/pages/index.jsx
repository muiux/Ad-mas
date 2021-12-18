import { useEffect } from "react";
import { navigate } from "gatsby";

const Index = () => {
  useEffect(() => {
    navigate("/dvpn", { replace: true });
  }, []);

  return null;
};

export default Index;
