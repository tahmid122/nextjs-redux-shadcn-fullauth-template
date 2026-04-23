"use client";
import AuthWrapper from "@/components/custom/common/AuthWrapper";
import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import CustomAuthFormInput from "@/components/custom/common/CustomAuthFormInput";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "@/validation/authValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgotPasswordMutation } from "@/store/features/auth/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  //rtk
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  //   submit forgot password form
  const submitForgotForm = async (data: ForgotPasswordFormData) => {
    try {
      const res = await forgotPassword(data).unwrap();
      if (res.success) {
        toast.success(res.message);
        router.push(`/verification-code?email=${data.email}&type=forgot`);
      } else {
        toast.error(res.message);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Something went wrong");
    }
  };
  return (
    <ContainerWrapper>
      <AuthWrapper
        name="Forgot Password?"
        description="Enter your email, we will send a verification
          code to your email"
      >
        <form
          onSubmit={handleSubmit(submitForgotForm)}
          className="w-full space-y-5"
        >
          <CustomAuthFormInput
            label="Email"
            placeholder="Enter your email"
            icon={<Mail className="text-muted-foreground" />}
            {...register("email")}
            error={errors.email?.message}
          />

          {/* submit button */}
          <Button disabled={isLoading} type="submit" className="w-full h-12">
            {isLoading ? "Sending..." : "Send Verification Code"}
          </Button>
          {/* sign up link */}
          <div className="text-center">
            <Link href="/login" className="text-primary font-bold">
              Back To Login
            </Link>
          </div>
        </form>
      </AuthWrapper>
    </ContainerWrapper>
  );
};

export default ForgotPassword;
