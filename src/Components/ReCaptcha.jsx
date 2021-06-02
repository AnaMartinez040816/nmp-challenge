import React, { useState } from "react";
import Recaptcha from "react-recaptcha";

const ReCaptchaComponent = ({isVerified,setIsVerified}) => {
  

  const recaptchaLoaded = () => {
    console.log("capcha successfully loaded");
  };

  const handleSubscribe = () => {
    if (isVerified) {
      alert("You have successfully subscribed!");
    } else {
      alert("Please verify that you are a human!");
    }
  };

  const verifyCallback = (response) => {
    if (response) {
      /*
      this.setState({
        isVerified: true,
      });*/
      setIsVerified(true);
    }
  };

  return (
    <div>
      <Recaptcha data-netlify-recaptcha="true"
        sitekey="6LeIqAkbAAAAAHarOImWYvtmhz2J1B-ywsnzQBIr"
        render="explicit"
        onloadCallback={recaptchaLoaded}
        verifyCallback={verifyCallback}
      />
    </div>
  );
};

export default ReCaptchaComponent;
