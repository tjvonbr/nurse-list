import Image from "next/image";
import logoSrc from "public/nurselist_logo_black.svg";

export default function NurseListLogo() {
  return <Image src={logoSrc} alt="NurseList logo" height={50} width={50} />;
}
