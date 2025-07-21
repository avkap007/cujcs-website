interface BioBoxProbs {
    name: string;
    position: string;
    paragraph1: string;
}

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

export default function BioBoxProbs({name, position, paragraph1} : BioBoxProbs) {
  return (
    <div className="bg-cardGrey w-[201px] h-[274px] md:h-[158px] lg:h-[158px] md:w-[621px] lg:w-[621px] flex items-center justify-center md:justify-start md:pl-10 lg:justify-start lg:pl-10"> 
        <div className="bg-cardGrey w-[165px] h-[226px] md:h-[112px] lg:h-[112px] md:w-[139px] lg:w-[139px] md:grid md:grid-flow-col md:grid-rows-3 md:gap-4 lg:grid lg:grid-flow-col lg:grid-rows-3 lg:gap-4">
            <div className="bg-cardDarkGrey w-[165px] h-[107px] md:h-[112px] lg:h-[112px] md:w-[139px] lg:w-[139px] md:row-span-3 lg:row-span-3">
                <img className="w-[165px] h-[107px] md:h-[112px] lg:h-[112px] md:w-[139px] lg:w-[139px]" src="{image}" />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
                <h4 className="pb-1">{name}</h4>
                <h5 className="pt-1 pb-3">{position}</h5>
            </div>
            <p className="pt-4 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2">{paragraph1}</p>
        </div>
    </div>
  );
}