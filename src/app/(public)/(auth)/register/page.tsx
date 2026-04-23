"use client";
import AuthWrapper from "@/components/custom/common/AuthWrapper";
import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import CustomAuthFormInput from "@/components/custom/common/CustomAuthFormInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "@/validation/authValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/store/features/auth/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });
  // rtk
  const [registerMutation, { isLoading }] = useRegisterMutation();
  const router = useRouter();
  //   submit login form
  const submitRegisterForm = async (data: RegisterFormData) => {
    try {
      const res = await registerMutation(data).unwrap();
      if (res.success) {
        router.push(`/verification-code?email=${data.email}`);
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.message || "Something went wrong");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Register error:", error);
      toast.error(error?.data?.message || "Something went wrong");
    }
  };
  return (
    <ContainerWrapper>
      <AuthWrapper
        name="Register & Get Started"
        description="Let's get started with a free account"
      >
        <form
          onSubmit={handleSubmit(submitRegisterForm)}
          className="w-full space-y-5"
        >
          <CustomAuthFormInput
            label="Full Name"
            placeholder="Enter your full name"
            icon={<Mail className="text-muted-foreground" />}
            {...register("fullName")}
            error={errors.fullName?.message}
          />
          <CustomAuthFormInput
            label="Email"
            placeholder="Enter your email"
            icon={<Mail className="text-muted-foreground" />}
            {...register("email")}
            error={errors.email?.message}
          />
          <CustomAuthFormInput
            label="Phone"
            placeholder="Enter your phone"
            icon={<Phone className="text-muted-foreground" />}
            {...register("phone")}
            error={errors.phone?.message}
          />
          <CustomAuthFormInput
            label="Password"
            placeholder="Enter your password"
            icon={<Lock className="text-muted-foreground" />}
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          {/* remember me & forgot password */}
          <div className="">
            <div className="flex items-center gap-2">
              <Input
                id="terms"
                type="checkbox"
                className="h-4 w-4"
                {...register("agreedToTerms")}
              />
              <Label htmlFor="terms" className="text-base font-normal">
                I agree to the Terms & Conditions
              </Label>
            </div>
            {errors.agreedToTerms && (
              <p className="text-red-500 text-xs mt-2">
                {errors.agreedToTerms.message}
              </p>
            )}
          </div>
          {/* submit button */}
          <Button type="submit" disabled={isLoading} className="w-full h-12">
            {isLoading ? "Registering..." : "Register"}
          </Button>
          {/* sign up link */}
          <div className="text-center">
            <Link href="/login" className="text-gray-600">
              Already have an account?{" "}
              <span className="text-primary font-bold">Login</span>
            </Link>
          </div>
        </form>
      </AuthWrapper>
    </ContainerWrapper>
  );
};

export default Register;
