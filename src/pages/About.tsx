import HeadingBlock from "../components/HeadingBlock";
import BioBox from "../components/BioBox";

export default function About() {
  return (
    <>
      <BioBox
        name="Name"
        position="Position"
        paragraph1="P1"
      />
      <HeadingBlock
        title="About Us"
        paragraph="Test"
      />
    </>
  );
} 
