import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();
  const compiler = {};

  compiler.redirectHome = () => {
    navigate(`/`);
  };

  compiler.redirectCustomize = () => {
    navigate(`/customize`);
  };

  compiler.selectorSize = () => {
    navigate(`/creation`);
  };

  compiler.redirectFounders = () => {
    navigate(`/founders`);
  };

  compiler.goBack = () => {
    navigate(-1);
  };

  return { ...compiler };
};

