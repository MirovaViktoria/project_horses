import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div>
      This page doesn't exist. Go <Link to="/">home</Link>
    </div>
  );
};
export default NoPage;
