import useAuth from "./hooks/useAuth";
import { GuestRoutes, ProtectedRoutes } from "./routes";

const App = () => {
  const { isAuth } = useAuth();

  return isAuth ? <ProtectedRoutes /> : <GuestRoutes />;
};

export default App;
