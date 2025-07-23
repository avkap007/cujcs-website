interface ParagraphBlockProps {
    paragraph: string;
    className?: string;
}

export default function ParagraphBlock({paragraph, className = ""} : ParagraphBlockProps) {
  return (
    <div className={`bg-[#F2F0F0] rounded-lg p-8 md:p-12 ${className}`}>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            {paragraph}
        </p>
    </div>
  );
}