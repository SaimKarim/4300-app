import React from "react";
import Hdr from "./components/Hdr";
import SignInPage from "@/app/components/SignInPage";
import Footer from "./src/app/components/Footer";

function SignIn() {
  return (
    <div>
      <Hdr />
      <SignInPage />
      <Footer />
    </div>
  );
}

export default SignIn;