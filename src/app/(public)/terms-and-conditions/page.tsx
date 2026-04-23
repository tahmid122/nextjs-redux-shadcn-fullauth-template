import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <ContainerWrapper className="py-5 xl:py-15 space-y-5">
      {/* 1st */}
      <div>
        <h1 className="text-2xl font-semibold text-black mb-2.5">
          Terms and Conditions
        </h1>
        <p className="text-gray-600">
          By using the Galapagos app, you agree to comply with and be bound by
          the following terms and conditions. Please read them carefully before
          using our services.
        </p>
      </div>
      {/* 2nd */}
      <div>
        <h1 className="text-2xl font-semibold text-black mb-2.5">
          How We Use Your Information{" "}
        </h1>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-gray-600">
            To provide and improve our app’s services.
          </li>
          <li className="text-gray-600">
            To communicate with you about your account, updates, and promotions.
          </li>
          <li className="text-gray-600">
            To personalize your experience and recommend services based on your
            preferences.
          </li>
          <li className="text-gray-600">
            To ensure the security and integrity of our app.
          </li>
        </ul>
      </div>
      {/* 3rd */}
      <div>
        <h1 className="text-2xl font-semibold text-black mb-2.5">
          Information We Collect
        </h1>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-gray-600">
            Personal Information: Name, email address, and phone number.
          </li>
          <li className="text-gray-600">
            Usage Data: Information on how you use the app and interactions with
            content.
          </li>
        </ul>
      </div>
      <p className="text-gray-600">
        Terms & Conditions are shown here. Read full details below.
        <Link href="/terms-and-conditions" className="text-blue-600">
          Click Here
        </Link>
      </p>
    </ContainerWrapper>
  );
};

export default TermsAndConditions;
