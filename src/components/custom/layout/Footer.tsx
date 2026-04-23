import Image from "next/image";
import ContainerWrapper from "../common/ContainerWrapper";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
interface MLink {
  mainTitle: string;
  link: { title: string; href: string }[];
}
const mainLinks: MLink[] = [
  {
    mainTitle: "Quick Links",
    link: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "FAQS",
        href: "/faqs",
      },
      {
        title: "Travel",
        href: "/",
      },
      {
        title: "Contact Us",
        href: "/",
      },
    ],
  },
  {
    mainTitle: "About",
    link: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Terms & Conditions",
        href: "/terms-and-conditions",
      },
      {
        title: "Cancellation & Damage Policy",
        href: "/",
      },
      {
        title: "Help & Support",
        href: "/",
      },
    ],
  },
  {
    mainTitle: "Contact Us",
    link: [
      {
        title: "Admin@StringShare.app",
        href: "mailto:Admin@StringShare.app",
      },
      {
        title: "Cleveland, Ohio, United States",
        href: "https://www.google.com/maps/place/Cleveland,+OH,+USA",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] py-10 xl:py-25">
      <ContainerWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* about */}
          <div className="lg:col-span-2">
            <Image src={logo} alt="Logo" width={100} height={100} />
            <p className="text-sm lg:text-base leading-6">
              Play everywhere. StringShare makes it easy for musicians to access
              instruments anytime, anywhere. Stay connected to your music
              without the hassle of carrying your own gear.
            </p>
          </div>
          {/* links */}
          {mainLinks.map((link, index) => (
            <FooterLinks key={index} link={link} />
          ))}
        </div>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;

// Footer links
const FooterLinks = ({ link }: { link: MLink }) => {
  return (
    <div className="col-span-1">
      <h3 className="text-xl text-black mb-4 font-semibold">
        {link.mainTitle}
      </h3>
      <ul className="space-y-2 lg:space-y-3">
        {link.link.map((l) => (
          <li key={l.title}>
            <Link href={l.href} className="text-sm lg:text-base">
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
