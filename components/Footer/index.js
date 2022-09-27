import socials from "../../data/socials";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/avatar/logo.png";

const Footer = () => {
  const filteredSocials = socials.filter((social) => {
    if (
      social.name === "twitter" ||
      social.name === "github" ||
      social.name === "linkedIn"
    ) {
      return social;
    }
  });
  const Icons = filteredSocials.map((social, index) => {
    return (
      <Link href={social.link} key={index}>
        <a className="mr-3" target="_blank" title={social.name}>
          <Image src={social.image} width={25} height={25} alt={social.name} />
        </a>
      </Link>
    );
  });
  const yearNow = new Date().getFullYear();
  return (
    <section className="  -mt-4 ">
      <div className="max-w-[80%] mx-auto">
        <div className=" flex flex-col items-center py-8">
          <Image src={logo} width={160} height={30} alt="mhbaando logo" />
          <div className="my-4">{Icons}</div>
          <p className="text-[0.7rem] font-bold">{`© ${yearNow} Copyright Allrights Reserved`}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
