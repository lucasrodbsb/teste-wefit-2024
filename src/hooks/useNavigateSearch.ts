import { createSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname: string, params: any) =>
    navigate({ pathname, search: `?${createSearchParams(params)}` });
};
