const DEFAULT_IMAGE_PATH = "/images/stockimages/ouraim.png";

interface BioBoxProps {
    name: string;
    position: string;
    paragraph1: string;
    image?: string;
}

export default function BioBox({name, position, paragraph1, image = DEFAULT_IMAGE_PATH} : BioBoxProps) {
  return (
    <div className="bg-[#F2F0F0] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
        {/* Image Container */}
        <div className="w-full md:w-32 lg:w-32 flex-shrink-0">
            <div className="bg-gray-300 w-full h-32 md:h-32 lg:h-32 rounded-lg overflow-hidden">
                <img 
                    className="w-full h-full object-cover" 
                    src={image} 
                    alt={`${name} - ${position}`}
                    onError={(e) => { e.currentTarget.src = "/images/stockimages/ouraim.png"; }}
                />
            </div>
        </div>
        
        {/* Content Container */}
        <div className="flex-1 min-w-0">
            <div className="mb-4">
                <h4 className="font-mori font-bold text-lg md:text-xl text-gray-900 mb-1">{name}</h4>
                <h5 className="font-ibm font-normal text-sm md:text-base text-gray-600 uppercase tracking-wider">{position}</h5>
            </div>
            <p className="text-gray-700 leading-relaxed">{paragraph1}</p>
        </div>
    </div>
  );
}