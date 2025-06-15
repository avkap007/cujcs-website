interface HeadingBlockProps {
    paragraph: string;
}

export default function ParagraphBlock({paragraph} : HeadingBlockProps) {
  return (
    <div className="h-60 p-9">
        <div className="py-5">
            <div className="h-10"></div>
            <div className="w-70 pl-9">
                {paragraph}
            </div>
        </div>   
    </div>

  );
}