import { cn } from "@/lib/utils";
import Image from "next/image";

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
  title,
  description,
  header,
  contentClassName,
  img,
  squareImg,
  icon,
}: {
  className?: string;
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
        "group/bento relative shadow-input row-span-1 flex flex-col justify-end space-y-4 rounded-3xl bg-[#0C0E23] px-4 py-10 transition duration-200 hover:shadow-lg dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {img && (
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-3xl">
          <Image src={img} layout="fill" objectFit="cover"  alt=""/>  
        </div>
      )}
      {squareImg && (
        <div className="absolute right-0 top-0 h-full w-full overflow-hidden rounded-3xl">
          <Image src={squareImg} layout="fill" objectFit="contain" alt=""/>
        </div>
      )}
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2 z-10">
        {icon}
        <div className={cn("mt-2 mb-2 leading-[120%] font-sans font-bold text-white", contentClassName)}>
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-white">
          {description}
        </div>
      </div>
    </div>
  );
};
