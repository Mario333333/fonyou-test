import { NavbarProps } from "../../utils/ts/componentTypes";
import Navbar from "./components/Navbar/index";

const MainLayout: React.FC<NavbarProps> = ({ id, className, children }) => {
  return (
    <div id={id} className={`page__layout ${className}`}>
      <div className="content">
        <Navbar />
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
