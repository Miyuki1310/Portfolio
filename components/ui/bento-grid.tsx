import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GlobeConfig";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-[30px] md:auto-rows-[15rem] md:grid-cols-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  header,
  contentClassName,
  img,
  squareImg,
  icon,
}: {
  className?: string;
  id?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  contentClassName?: string;
  img?: string;
  squareImg?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative shadow-input overflow-hidden row-span-1 flex flex-col justify-end space-y-4 rounded-3xl bg-[#0C0E23] px-4 py-10  transition duration-200 hover:shadow-lg dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {img && (
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-3xl">
          <Image src={img} layout="fill" objectFit="cover"  alt=""/>  
        </div>
      )}
      {squareImg && (
        <div className="absolute right-0 bottom-[-30px] w-1/2 h-2/3 rounded-3xl">
          <Image src={squareImg} layout="fill" objectFit="contain" alt=""/>
        </div>
      )}
      {id === 6 && (
        <BackgroundGradientAnimation containerClassName="absolute overflow-hidden rounded-3xl left-0 right-0 bottom-0 m-0 w-full h-full">
          <div className="absolute z-50 inset-0 flex items-center justify-center">

          </div>
        </BackgroundGradientAnimation>
      )}
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2 z-10  md:h-full min-h-40 flex flex-col px-5 p-5">
        {icon}
        <div className="font-sans text-sm font-extralight text-[#c1c2d3]">
          {description}
        </div>
        <div className={cn("mt-2 mb-2 leading-[120%] font-sans font-bold text-white", contentClassName)}>
          {title}
        </div>
        
      </div>
      {id === 2 && <GlobeDemo />}
    </div>
  );
};
