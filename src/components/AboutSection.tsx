export default function AboutSection() {
  return (
    <section>
        <div>
            <h1 className="text-3xl md:text-3xl font-semibold text-deepRed py-8">
                A Journal for Students of the Cognitive Sciences
            </h1>
        </div>
        <div>
            <h1 className="text-xl md:text-xl font-light text-black italic text-center pb-5">
                Exploring the interdisciplinary field of cognitive science through undergraduate research.
            </h1>
        </div>
        <div className="w-full md:w-full box-content rounded grid grid-cols-3 gap-5 py-5 text-left md:text-left">
            <div className="bg-lightPink rounded px-8 py-10 gap-3">
                <div className="box-content size-8 bg-deepRed rounded">
                </div>
                <div className="text-deepRed py-3 font-semibold">
                    Who Are We?
                </div>
                <div className="text-black pt-3 text-wrap">
                    The Canadian Undergraduate Journal of Cognitive Science is an electronic and print journal published by the Cognitive Science Student Society at Simon Fraser University. 
                </div>
            </div>
            <div className="bg-lightGray rounded px-8 py-10 gap-3">
                <div className="box-content size-8 bg-deepRed rounded">
                </div>
                <div className="text-deepRed py-3 font-semibold">
                    Our Aim
                </div>
                <div className="text-black pt-3 text-wrap">
Our aim is to provide a forum for students to share work among peers and gain valuable experience in the process of getting an academic paper published.                 </div>
            </div>
            <div className="bg-lightOrange rounded px-8 py-10 gap-3">
                <div className="box-content size-8 bg-brightOrange rounded">
                </div>
                <div className="text-deepRed py-3 font-semibold">
                    Our Publication Process
                </div>
                <div className="text-black pt-3 text-wrap">
As a publication, CUJCS provides a unique reference for students, showcases research by undergraduate students, improves the contact and exchange of ideas between Canadian students and cognitive scientists alike, and illustrates the interdisciplinary work that is the hallmark of cognitive science.                </div>
            </div>
            
        </div>   
        <div>
            <h1 className="text-xl md:text-xl font-light text-brightOrange italic text-center pt-5">
                Learn more about us and our mission
            </h1>
        </div>
    </section>
    
  );
}