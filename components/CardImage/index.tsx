import { FC } from "react";
import { useAtom } from "jotai";
import { darkModeAtom } from "@/store";
import { ImageFrame } from "@/components/CardImage/styles";
import Image from "next/image";

export const CardImage: FC = () => {
  const [darkMode] = useAtom(darkModeAtom);
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <ImageFrame
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      darkMode={darkMode}
    >
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
