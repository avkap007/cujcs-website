import BioBox from "../components/BioBox";
import ParagraphBlock from "../components/ParagraphBlock";
import teamData from "../data/team.json";

export default function About() {
  return (
    <>
      {/* Progressive Blur Header */}
      <section className="relative w-full h-[416px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${teamData.header.image}")`,
            width: '867px',
            height: '416px',
            flexShrink: 0,
          }}
        />
        {/* Progressive Blur Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 0%,
                rgba(255,255,255,0.1) 40%,
                rgba(255,255,255,0.3) 60%,
                rgba(255,255,255,0.6) 80%,
                rgba(255,255,255,0.9) 100%
              )
            `,
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-mori font-bold mb-4 drop-shadow-lg">{teamData.header.title}</h1>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 bg-[#F2F0F0]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main About Description */}
          <div className="mb-16">
            <ParagraphBlock 
              paragraph={teamData.about.description}
            />
          </div>

          {/* Aim Section */}
          <div className="mb-16">
            <ParagraphBlock 
              paragraph={teamData.about.aim}
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-mori font-bold mb-12 text-left">Meet our Team</h2>
          
          <div className="space-y-8">
            {teamData.team.map((member, index) => (
              <BioBox
                key={index}
                name={member.name}
                position={member.position}
                paragraph1={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 
