import { Outlet } from "react-router-dom";

import ServiceHeader from "../components/common/ServiceHeader";
import ServiceMedia from "../components/common/ServiceMedia";

function KioskRoot() {
  return (
    <>
      <ServiceHeader />
      <ServiceMedia />
      <Outlet />
    </>
  );
}

export default KioskRoot;
