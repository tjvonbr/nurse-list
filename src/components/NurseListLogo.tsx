import Image from "next/image";
import logoSrc from "public/nurselist_logo_black.svg";

interface NurseListLogoProps {
  height: number;
  width: number;
}

export default function NurseListLogo({ height, width }: NurseListLogoProps) {
  return (
    <Image src={logoSrc} alt="NurseList logo" height={height} width={width} />
  );
}
