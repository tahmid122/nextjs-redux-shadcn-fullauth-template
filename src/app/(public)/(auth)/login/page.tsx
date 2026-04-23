"use client";
import AuthWrapper from "@/components/custom/common/AuthWrapper";
import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import CustomAuthFormInput from "@/components/custom/common/CustomAuthFormInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "@/validation/authValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/store/features/auth/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/features/auth/authSlice";
import Cookies from "js-cookie";
const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  //rtk
  const [loginUser, { isLoading }] = useLoginMutation();
  //   submit login form
  const submitLoginForm = async (data: LoginFormData) => {
    try {
      const res = await loginUser(data).unwrap();
      if (res.success) {
        toast.success(res?.message);
        const userData = res.data;
        dispatch(
          setUser({
            accessToken: userData?.tokens?.accessToken,
            user: userData?.user,
            id: userData?.user?.id,
          }),
        );
        // set cookies
        Cookies.set("accessToken", userData?.tokens?.accessToken);
        router.push("/");
      } else {
        toast.error(res?.message);
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
        name="Welcome Back"
        description="Sign in to access the admin dashboard"
      >
        <form
          onSubmit={handleSubmit(submitLoginForm)}
          className="w-full space-y-5"
        >
          <CustomAuthFormInput
            label="Email or Phone"
            placeholder="Enter your email or phone"
            icon={<Mail className="text-muted-foreground" />}
            {...register("email")}
            error={errors.email?.message}
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Input id="remember-me" type="checkbox" className="h-4 w-4" />
              <Label htmlFor="remember-me" className="text-base font-normal">
                Remember me
              </Label>
            </div>
            <Link
              href="/forgot-password"
              className="text-red-500 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
          {/* submit button */}
          <Button disabled={isLoading} type="submit" className="w-full h-12">
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          {/* sign up link */}
          <div className="text-center">
            <Link href="/register" className="text-gray-600">
              Don&apos;t have an account?{" "}
              <span className="text-primary font-bold">Register</span>
            </Link>
          </div>
        </form>
      </AuthWrapper>
    </ContainerWrapper>
  );
};

export default Login;
