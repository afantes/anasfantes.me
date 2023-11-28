import { FC } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { ImageFrame } from "@/components/CardImage/styles";
import Image from "next/image";

export const CardImage: FC = () => {
  const [darkMode] = useAtom(darkModeAtom);
  return (
    <ImageFrame darkMode={darkMode}>
      <Image
        src="/Profile1.jpeg"
        alt="Profile"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 42%"
        className="image"
      />
    </ImageFrame>
  );
};
