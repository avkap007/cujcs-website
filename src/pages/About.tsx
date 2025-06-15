import HeadingBlock from "../components/HeadingBlock";
import ParagraphBlock from "../components/ParagraphBlock";
import BioBox from "../components/BioBox";

export default function About() {
  return (
    <>
    <BioBox
      image="image"
      name="Name"
      position="Position"
      paragraph1="P1">
    </BioBox>
    
    <HeadingBlock
    title="About Us"
    paragraph="Test">
    </HeadingBlock>
    </>

  );
} 
