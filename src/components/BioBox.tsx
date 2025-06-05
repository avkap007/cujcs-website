import { ReactNode } from "react";

interface HeadingBlockProps {
    image: ReactNode;
    name: string;
    position: string;
    paragraph1: string;
    paragraph2: string;
}

export default function HeadingBlock({image, name, position, paragraph1, paragraph2} : HeadingBlockProps) {
  return (
    <div className="h-60 px-9 bg-pageWhite">
        <div className="h-60 p-9 flex flex-row">
            <div className="border-8 border-white h-50 p-8 bg-cardDarkGrey">
                {image}
            </div>
            <div className="p-8 bg-white">
                <div>
                    <div className="font-ibm">
                        {name}
                    </div>
                    <div className="font-ibm">
                        {position}
                    </div>
                    <div className="font-mori">
                        {paragraph1}
                    </div>
                    <div className="font-mori">
                        {paragraph2}
                    </div>
                </div>
                
            </div>
        </div>  
    </div>
  );
}