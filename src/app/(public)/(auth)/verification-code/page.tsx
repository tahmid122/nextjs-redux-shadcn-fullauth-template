"use client";
import AuthWrapper from "@/components/custom/common/AuthWrapper";
import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useResendVerificationEmailMutation,
  useVerifyForgotPasswordOtpMutation,
  useVerifyRegisterOtpMutation,
} from "@/store/features/auth/authApi";
import { toast } from "sonner";

const VerificationCode = () => {
  const [otp, setOtp] = useState("");
  const [resendCountdown, setResendCountdown] = useState(59);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const type = searchParams.get("type");
  const router = useRouter();
  // rtk
  const [verifyRegisterOtp, { isLoading }] = useVerifyRegisterOtpMutation();
  const [resendVerificationEmail, { isLoading: isResending }] =
    useResendVerificationEmailMutation();
  //forgot password otp verification
  const [verifyForgotPasswordOtp, { isLoading: isVerifyingForgotPasswordOtp }] =
    useVerifyForgotPasswordOtpMutation();
  //   submit forgot password form
  const handleOtpVerification = async () => {
    if (!email) {
      return;
    }
    // check if we are verifying forgot password otp or register otp
    if (type && type === "forgot") {
      try {
        const res = await verifyForgotPasswordOtp({
          email,
          code: otp,
        }).unwrap();
        if (res.success) {
          toast.success(res?.message);
          router.push(`/create-new-password?token=${res?.data?.resetToken}`);
        } else {
          toast.error(res?.message);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("OTP verification failed:", error);
        toast.error(error?.data?.message || "OTP verification failed");
      }
      return;
    }
    // else we are verifying register otp
    try {
      const res = await verifyRegisterOtp({ email, code: otp }).unwrap();
      if (res.success) {
        toast.success(res?.message);
        router.push("/verified");
      } else {
        toast.error(res?.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("OTP verification failed:", error);
      toast.error(error?.data?.message || "OTP verification failed");
    }
  };
  //   resend code
  const resendCode = async () => {
    if (!email) {
      return;
    }
    try {
      const res = await resendVerificationEmail(email).unwrap();
      if (res.success) {
        toast.success(res?.message);
        setResendCountdown(59);
      } else {
        toast.error(res?.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Resend code failed:", error);
      toast.error(error?.data?.message || "Resend code failed");
    }
  };

  useEffect(() => {
    if (!email) {
      router.push("/register");
      return;
    }
    const interval = setInterval(() => {
      if (resendCountdown > 0) {
        setResendCountdown((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [resendCountdown, email, router]);
  return (
    <ContainerWrapper>
      <AuthWrapper
        name="Verification Code"
        description="Enter the verification code that we have sent to your email"
      >
        <div className="w-full space-y-5">
          <OtpInput
            containerStyle={"justify-between sm:max-w-1/2 mx-auto"}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span> </span>}
            renderInput={(props) => (
              <input
                {...props}
                className="min-h-12 max-h-12 min-w-12 max-w-12 border border-gray-300 rounded-lg bg-[#FCFCFD1A] text-center focus:border-primary focus:outline-primary"
                placeholder=""
              />
            )}
          />
          {/* submit button */}
          <Button
            onClick={handleOtpVerification}
            disabled={
              otp.length !== 4 || isLoading || isVerifyingForgotPasswordOtp
            }
            type="button"
            className="w-full h-12"
          >
            {isLoading || isVerifyingForgotPasswordOtp
              ? "Verifying..."
              : "Verify Code"}
          </Button>
          {/* resend code  */}
          {type === null || type === undefined ? (
            <div className="text-center">
              {resendCountdown === 0 ? (
                <Button type="button" variant="link" onClick={resendCode}>
                  {isResending ? "Resending..." : "Resend Code"}
                </Button>
              ) : (
                <p className="text-muted-foreground">
                  Re-send code in{" "}
                  <span className="text-primary">
                    00:{resendCountdown.toString().padStart(2, "0")}
                  </span>
                </p>
              )}
            </div>
          ) : null}
        </div>
      </AuthWrapper>
    </ContainerWrapper>
  );
};

export default VerificationCode;
