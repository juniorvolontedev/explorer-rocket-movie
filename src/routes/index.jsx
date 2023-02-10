import { BrowserRouter } from "react-router-dom";
import { AuthRotes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRotes />
    </BrowserRouter>
  );
}
