"use client";
import AuthWrapper from "@/components/custom/common/AuthWrapper";
import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import CustomAuthFormInput from "@/components/custom/common/CustomAuthFormInput";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  CreateNewPasswordFormData,
  createNewPasswordSchema,
} from "@/validation/authValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { useCreateNewPasswordMutation } from "@/store/features/auth/authApi";

const CreateNewPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewPasswordFormData>({
    resolver: zodResolver(createNewPasswordSchema),
  });
  //rtk
  const [createNewPassword, { isLoading }] = useCreateNewPasswordMutation();
  //   submit login form
  const submitLoginForm = async (data: CreateNewPasswordFormData) => {
    if (!token) {
      return router.push("/forgot-password");
    }
    try {
      const res = await createNewPassword({
        token: token,
        password: data.password,
      }).unwrap();
      if (res.success) {
        toast.success("Password reset successfully");
        router.push("/login");
      } else {
        toast.error(res.message || "Failed to reset password");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error resetting password:", error);
      toast.error(error?.data?.message || "Failed to reset password");
      router.push("/forgot-password");
    }
  };
  useEffect(() => {
    if (!token) {
      // Redirect to login or show error
      router.push("/forgot-password");
    }
  }, [token, router]);
  return (
    <ContainerWrapper>
      <AuthWrapper
        name="Create New Password"
        description="Your password must be different from previous used password"
      >
        <form
          onSubmit={handleSubmit(submitLoginForm)}
          className="w-full space-y-5"
        >
          <CustomAuthFormInput
            label="Password"
            placeholder="Enter your password"
            icon={<Lock className="text-muted-foreground" />}
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <CustomAuthFormInput
            label="Confirm Password"
            placeholder="Confirm your password"
            icon={<Lock className="text-muted-foreground" />}
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          {/* submit button */}
          <Button disabled={isLoading} type="submit" className="w-full h-12">
            {isLoading ? "Creating..." : "Create New Password"}
          </Button>
        </form>
      </AuthWrapper>
    </ContainerWrapper>
  );
};

export default CreateNewPassword;
