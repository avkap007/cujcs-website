import { ReactNode } from "react";

interface HeadingBlockProps {
    title: ReactNode;
    paragraph: string;
}

export default function HeadingBlock({title, paragraph} : HeadingBlockProps) {
  return (
    <div className="border-8 border-pageWhite h-60 px-9 bg-gradient-to-r from-white to-cardDarkGrey">
        <div className="py-5">
            <h2 className="pl-9">
                {title}
            </h2>
            <div className="h-10"></div>
            <div className="w-96 pl-9">
                {paragraph}
            </div>
        </div>   
    </div>
  );
}