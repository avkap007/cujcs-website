import HeadingBlock from "../components/HeadingBlock";
import ParagraphBlock from "../components/ParagraphBlock";
import BioBox from "../components/BioBox";

export default function About() {
  return (
    <div className="bg-pageWhite" >
      <div className="h-10"></div>
      <HeadingBlock 
      title="ABOUT"
      paragraph="The Canadian Undergraduate Journal of Cognitive Science (CUJCS) is an electronic and print journal published by the Cognitive Science Student Society (CS³) at Simon Fraser University."
      />
      <div></div>
      <ParagraphBlock
      paragraph="Our aim is to provide a forum for students to share work among peers and gain valuable experience in the process of getting an academic paper published. As a publication, CUJCS provides a unique reference for students, showcases research by undergraduate students, improves  the contact and exchange of ideas between Canadian students and cognitive scientists alike, and illustrates the interdisciplinary work that is the hallmark of cognitive science. Although preference is given to Canadian students, contributions from students elsewhere are strongly encouraged.">
      </ParagraphBlock>
      <BioBox
      image="image"
      name="Name"
      position="Position"
      paragraph1="P1"
      paragraph2="P2">
      </BioBox>
    </div>

  );
} 
