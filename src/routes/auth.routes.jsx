import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";

export function AuthRotes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
