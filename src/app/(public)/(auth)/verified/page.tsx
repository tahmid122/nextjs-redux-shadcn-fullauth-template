"use client";
import AuthWrapper from "@/components/custom/common/AuthWrapper";
import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

const VerificationCode = () => {
  const [otp, setOtp] = useState("");
  const [resendCountdown, setResendCountdown] = useState(59);

  //   submit forgot password form

  //   resend code
  const resendCode = () => {
    console.log("Resend code");
    // TODO: Implement resend code logic
    setResendCountdown(59);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (resendCountdown > 0) {
        setResendCountdown((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [resendCountdown]);
  return (
    <ContainerWrapper>
      <AuthWrapper
        name="Verified"
        description="Your account has been verified successfully. "
      >
        <Link href="/login">
          <Button type="button" className="w-full h-12">
            Go to Login
          </Button>
        </Link>
      </AuthWrapper>
    </ContainerWrapper>
  );
};

export default VerificationCode;
