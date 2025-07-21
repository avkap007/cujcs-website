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
                <img className="w-[165px] h-[107px] md:h-[112px] lg:h-[112px] md:w-[139px] lg:w-[139px]" src="{image}">
                </img>
            </div>
            
            <div className="md:col-span-2 lg:col-span-2">
                <div className="font-ibm text-[12px] font-extrabold pb-1">
                {name}
                </div>

                <div className="font-ibm text-[12px] font-normal pt-1 pb-3">
                {position}
                </div>
            </div>
            
            

            <div className="font-mori text-[10px] pt-4 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2" >
                {paragraph1}
            </div>
        </div>
    </div>
  );
}