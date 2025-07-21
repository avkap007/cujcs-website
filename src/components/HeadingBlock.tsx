import { ReactNode } from "react";

interface HeadingBlockProps {
    title: ReactNode;
    paragraph: string;
}

export default function HeadingBlock({title, paragraph} : HeadingBlockProps) {
  return (
    <div className="h-60 bg-cardGrey">
        <div className="py-5 grid grid-cols-2">
            <div>
                <h2 className="pl-9">
                    {title}
                </h2>
                <div className="h-10"></div>
                <div className="pl-9">
                    {paragraph}
                </div>
            </div>
            <div>
                <img className="w-[165px] h-[107px] md:h-[112px] lg:h-[112px] md:w-[139px] lg:w-[139px]" src="{image}">
                </img>
            </div>
            
        </div>   
    </div>
  );
}