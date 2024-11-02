import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Layouts = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto m-0 p-0 box-border">
      {/* navBar */}
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-288px)]">
        {/* dynamic */}
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
