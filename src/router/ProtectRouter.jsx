import { Navigate, Outlet } from "react-router";
import { useUserStore } from "../stores/userStore";

function ProtectRouter() {
  const token = useUserStore((state) => state.token);
  if (!token) {
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />;
  }
}

export default ProtectRouter;
