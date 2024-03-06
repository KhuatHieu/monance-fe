import { About, LandingPage, SignIn, SignUp } from "@/features";
import { GuestLayout } from "@/layout";
import { Route, Routes } from "react-router";

const DefinedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route path="/about" element={<About />} />
    </Routes>
  );
};

const GuestRoutes = () => {
  return (
    <>
      <GuestLayout>
        <DefinedRoutes />
      </GuestLayout>
    </>
  );
};

export default GuestRoutes;
