import ContainerWrapper from "@/components/custom/common/ContainerWrapper";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <ContainerWrapper className="py-5 xl:py-15 space-y-5">
      {/* 1st */}
      <div>
        <h1 className="text-2xl font-semibold text-black mb-2.5">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          At Absolutely Astrology, we respect and protect your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal information when using our app.
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
      {/* 4th */}
      <div>
        <h1 className="text-2xl font-semibold text-black mb-2.5">Contact Us</h1>
        <p className="text-gray-600">
          For any questions or concerns about your privacy, feel free to reach
          us
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-gray-600">
            Email: support@absolutelyastrology.com
          </li>
          <li className="text-gray-600">Phone: +123 456 7890</li>
        </ul>
      </div>
    </ContainerWrapper>
  );
};

export default PrivacyPolicy;
