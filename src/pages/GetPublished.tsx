import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import getPublished_1 from '../assets/getPublished_1.png';
import getPublished_2 from '../assets/getPublished_2.png';
import getPublished_3 from '../assets/getPublished_3.png';
import getPublished_4 from '../assets/getPublished_4.png';
import arrow_outward from '../assets/arrow_outward.png';

interface Theme {
  id: number;
  title: string;
  description: string;
  keywords: string;
  image: string;
}

const GetPublished: React.FC = () => {
  const [expandedChecklist, setExpandedChecklist] = useState<'paper' | 'art' | null>(null);

  const themes: Theme[] = [
    {
      id: 1,
      title: "The Minds of Many: Theory of Mind, Neurodiversity, and Social Cognition",
      description: "How do we understand other minds? This theme explores the diverse ways cognition presents itself; through classic Theory of Mind frameworks, the ethical imperative of neurodiversity, and the ever-evolving models of social reasoning in digital and real-world contexts.",
      keywords: "Psychology, philosophy, linguistics, disability studies",
      image: getPublished_1
    },
    {
      id: 2,
      title: "Intelligence in Decline: Memory, Identity, and Neurodegeneration",
      description: "What happens when cognition falters? This theme encompasses memory disorders, AI-based detection of decline, VR and cognitive intervention research, and the ethical questions that arise as technology intersects with aging and cognitive loss.",
      keywords: "Neuroscience, health sciences, aging studies, psychology, ethics",
      image: getPublished_2
    },
    {
      id: 3,
      title: "Developing Intelligence: Human, Artificial, and Everything In-Between",
      description: "Where does intelligence come from; and how do we build it? This theme focuses on the developmental arcs of human and artificial intelligence, including childhood cognition, educational reform through tech, machine learning models, and the blurred lines between learning and programming.",
      keywords: "Developmental psych, education, AI/ML research, cognitive modeling",
      image: getPublished_3
    },
    {
      id: 4,
      title: "Consciousness and the Machine: Brains, Bots, and the Self",
      description: "This theme tackles one of the oldest - and newest; questions in cognitive science: What is consciousness? With AI pushing the boundaries of simulation, and neuroscience probing the edges of awareness, this theme spans brain organoids, ethical design, the self, and machine sentience.",
      keywords: "Philosophy of mind, neuroethics, AI, cognitive neuroscience",
      image: getPublished_4
    }
  ];

  const paperChecklist = [
    {
      title: "The paper has not been published elsewhere, online or in-print.",
      description: null,
      checked: true
    },
    {
      title: "The paper is written in English.",
      description: "Please note that as CUJCS is a Canadian undergraduate journal, we will standardize all spelling to Canadian English (using words such as \"behaviour\", \"program\", and \"centre\")",
      checked: true
    },
    {
      title: "Use an accepted format for your submission.",
      description: "PDF (.pdf) is preferred, but word processing formats such as Open Office XML (.docx), Word Document (.doc), Rich Text Format (.rtf), and OpenDocument (.odf) are also acceptable. Please do not submit Apple Pages (.page) or uncompiled LaTeX (.tex) files.",
      checked: false
    },
    {
      title: "Use standard APA7 formatting.",
      description: "Times New Roman, double-spaced, twelve-point font, 1-inch or 2.54cm margins, APA-style in-text citations and references.",
      checked: false
    },
    {
      title: "Remove personal identifiers.",
      description: "As the CUJCS editorial team likes to review blind, please write your initials in lieu of your name on the title page and omit your academic institution. For example, if Mark Giles wanted to submit his paper titled \"The Future of Artificial Intelligence\", his title page would look like this:\n\nM. G.   The Future of Artificial Intelligence",
      checked: false
    },
    {
      title: "The paper is 2000 to 5000 words.",
      description: "While this is not a hard limit, please do try to conform to the length limits. Remember the famous quote – \"If I had more time I would have written a shorter letter\". There is elegance in a concisely argued point and eloquently explained concept",
      checked: false,
      rightColumn: true
    },
    {
      title: "You have the rights to all content used in your paper.",
      description: "Ensure that all the content in your submission is your own or that you hold the appropriate license for the intellectual property of others. For example, if your paper is citing another, already published, article and using one of their graphs as an element of your paper, you must have the right to use it.\n(Frequently, papers are released under license that allow for limited redistribution and reuse, or the original authors may be happy to grant you permission.)\n**If you cannot prove you have the rights to use someone else's work, you will delay the entire publication process.**",
      checked: false,
      rightColumn: true
    },
    {
      title: "Maintain a copy of any collected data or analysis scripts.",
      description: "If your paper relies on collected data and/or analysis scripts, please maintain a copy of them. The editorial team will likely ask to see them during the review process.",
      checked: false,
      rightColumn: true
    }
  ];

  const artChecklist = [
    {
      title: "All forms of art are accepted, but it must be able to be conveyed by a two-dimensional, colour image (or series of images). Art is allotted one page per work.",
      description: "Examples of accepted art include (but are not limited to): Photography, illustration, painting, sculpture, poetry.",
      checked: true
    },
    {
      title: "Your art submission must relate to Cognitive Science or a discipline of the cognitive sciences.",
      description: "For example, neuroscience, computer science, linguistics, etc. What that means and how you choose to creatively represent it depends on you.",
      checked: false
    },
    {
      title: "Use an accepted format for your submission.",
      description: "This includes JPG, PNG, TIFF, EPS, SVG, TGA, BMP files. Please do not submit 'working files', such as PSD, CLIP, raw image files, etc.",
      checked: false
    },
    {
      title: "Include an artist statement in your submission email.",
      description: "The artist statement should describe the piece, techniques and mediums used, and the general themes you reflected on and intend viewers to experience. Please note that this statement will only be used by the Editorial Board and will not be published alongside your piece in the journal.",
      checked: false
    },
    {
      title: "Include your name (as you want it to be printed), the title of your piece, and your university in your submission email.",
      description: null,
      checked: false,
      rightColumn: true
    },
    {
      title: "Only submit art made during your undergraduate career.",
      description: null,
      checked: false,
      rightColumn: true
    },
    {
      title: "Do not submit work that is not your own.",
      description: "This protects you, the original creator, the journal, Simon Fraser University, and your university. You will retain the copyright to your own work.",
      checked: false,
      rightColumn: true
    },
    {
      title: "Consider image resolution and aspect ratio, and print/digital colors.",
      description: "While you are free to create and submit as you see fit (contingent to other guidelines), we suggest that you submit at a high resolution/pixel count, eg. DPI 300. The journal is taller than it is wide, which may be worth considering as well. Because the journal is published in both print and digital form, you can optionally submit two versions of your piece - one in CMYK (for print) and one in RGB (for digital). Please clearly indicate which is which in your submission.",
      checked: false,
      rightColumn: true
    }
  ];

  return (
    <div>
      {/* Header section */}
      <div className="pt-24 pb-16 px-8 lg:px-24 max-w-7xl mx-auto">
        {/* Submissions closed notice */}
        <div className="bg-cardWhite rounded-md p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-deepRed rounded-full flex-shrink-0" />
            <p className="text-pageBlack text-body font-semibold font-mori">
              Submissions closed July 31, 2025.
            </p>
          </div>
          <p className="text-pageBlack text-body font-mori">
            All authors should expect to be contacted in early September.
          </p>
        </div>

        <h1 className="text-h1 font-normal font-mori text-pageBlack">GET PUBLISHED</h1>
      </div>

      {/* 2025 Themes Section */}
      <div className="px-8 lg:px-24 pb-16 max-w-7xl mx-auto">
        <h2 className="text-h2 font-normal font-mori text-black mb-4">2025 Themes</h2>
        <p className="text-body font-normal font-mori text-black mb-12 max-w-2xl">
          Accepted submissions will be categorized into one of the four themes listed below.
        </p>

        {/* Theme Cards */}
        <div className="space-y-6">
          {themes.map((theme) => (
  <div key={theme.id} className="bg-cardWhite rounded-md p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-start items-center">
    {/* Image Icon */}
    <img 
      src={theme.image} 
      alt={theme.title}
      className="w-32 h-32 object-contain flex-shrink-0 mx-auto lg:mx-0"
    />
    
    {/* Content */}
    <div className="flex-1">
      <h3 className="text-h3 font-semibold font-mori text-pageBlack mb-4">
        {theme.title}
      </h3>
      <p className="text-body font-normal font-mori text-black mb-4">
        {theme.description}
      </p>
      <p className="text-body font-mori text-black">
        <span className="font-ibm">Related: {theme.keywords}</span>
      </p>
    </div>
  </div>
))}
        </div>
      </div>

      {/* Submission Information Section */}
      <div className="bg-deepRed py-16">
        <div className="px-8 lg:px-24 max-w-7xl mx-auto">
          <p className="text-white text-h3 font-normal font-mori mb-6 max-w-2xl">
            We accept submissions from undergraduate students studying at accredited institutions around the world. Collaborations are allowed (and encouraged!) but please make sure all contributors are undergraduate students.
          </p>
          <p className="text-white text-body font-normal font-mori mb-8 max-w-2xl">
            Before submitting, please ensure you meet all requirements in the submission checklist. Note that there are separate checklists for paper and artwork contributions. Submissions that don't meet the requirements may be rejected. If you have questions, please <a href="/contact" className="underline text-white">contact</a> our editorial team. We are here to help you.
          </p>

          {/* Checklists */}
          <div className="space-y-4 mb-8">
            {/* Paper Checklist */}
            <div className="bg-cardWhite rounded-md overflow-hidden">
              <button
                onClick={() => setExpandedChecklist(expandedChecklist === 'paper' ? null : 'paper')}
                className="w-full px-12 py-6 flex items-center justify-between bg-cardWhite transition-colors"
                style={{
                border: 'none',
                outline: 'none',
                }}
              >
                <h3 className="text-h3 font-semibold font-mori text-pageBlack">Paper Submission Checklist</h3>
                <div className="flex items-center gap-4">
                  <span className="text-caption font-ibm text-pageBlack uppercase">
                    {expandedChecklist === 'paper' ? 'Minimize Checklist' : 'Expand Checklist'}
                  </span>
                  {expandedChecklist === 'paper' ? (
                    <ChevronUp className="w-6 h-6 text-pageBlack" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-pageBlack" />
                  )}
                </div>
              </button>
              {expandedChecklist === 'paper' && (
                <div className="px-12 pb-12 pt-8 bg-cardWhite">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                    {/* Left Column */}
                    <div className="space-y-12">
                      {paperChecklist.filter(item => !item.rightColumn).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 ${item.checked ? 'bg-deepRed' : 'bg-stone-200'}`} />
                          <div>
                            <p className="text-body font-semibold font-mori text-pageBlack mb-2">{item.title}</p>
                            {item.description && (
                              <>
                                {item.title === "Remove personal identifiers." ? (
                                  <div>
                                    <p className="text-body font-normal font-mori text-black leading-snug mb-4">
                                      {item.description.split('\n\n')[0]}
                                    </p>
                                    <div className="text-body font-normal font-mori text-black leading-snug text-center mt-4 ">
                                      <p>M. G.</p>
                                      <p>The Future of Artificial Intelligence</p>
                                    </div>
                                  </div>
                                ) : (
                                  <p className="text-body font-normal font-mori text-black leading-snug whitespace-pre-line">{item.description}</p>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Right Column */}
                    <div className="space-y-12">
                      {paperChecklist.filter(item => item.rightColumn).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 ${item.checked ? 'bg-deepRed' : 'bg-stone-200'}`} />
                          <div>
                            <p className="text-body font-semibold font-mori text-pageBlack mb-2">{item.title}</p>
                            {item.description && (
                              <div className="text-body font-normal font-mori text-black leading-snug">
                                {item.description.split('\n').map((paragraph, i) => (
                                  <p key={i} className={i > 0 ? 'mt-4' : ''}>
                                    {paragraph.split('**').map((part, j) => 
                                      j % 2 === 0 ? part : <span key={j} className="font-semibold">{part}</span>
                                    )}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Art Checklist */}
            <div className="bg-cardWhite rounded-md overflow-hidden">
              <button
                onClick={() => setExpandedChecklist(expandedChecklist === 'art' ? null : 'art')}
                className="w-full px-12 py-6 flex items-center justify-between bg-cardWhite transition-colors"
                style={{
                border: 'none',
                outline: 'none',
                }}
              >
                <h3 className="text-h3 font-semibold font-mori text-pageBlack">Art Submission Checklist</h3>
                <div className="flex items-center gap-4">
                  <span className="text-caption font-ibm text-pageBlack uppercase">
                    {expandedChecklist === 'art' ? 'Minimize Checklist' : 'Expand Checklist'}
                  </span>
                  {expandedChecklist === 'art' ? (
                    <ChevronUp className="w-6 h-6 text-pageBlack" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-pageBlack" />
                  )}
                </div>
              </button>
              {expandedChecklist === 'art' && (
                <div className="px-12 pb-12 pt-8 bg-cardWhite">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                    {/* Left Column */}
                    <div className="space-y-12">
                      {artChecklist.filter(item => !item.rightColumn).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 ${item.checked ? 'bg-deepRed' : 'bg-stone-200'}`} />
                          <div>
                            <p className="text-body font-semibold font-mori text-pageBlack mb-2">{item.title}</p>
                            {item.description && (
                              <p className="text-body font-normal font-mori text-black leading-snug whitespace-pre-line">{item.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Right Column */}
                    <div className="space-y-12">
                      {artChecklist.filter(item => item.rightColumn).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 ${item.checked ? 'bg-deepRed' : 'bg-stone-200'}`} />
                          <div>
                            <p className="text-body font-semibold font-mori text-pageBlack mb-2">{item.title}</p>
                            {item.description && (
                              <p className="text-body font-normal font-mori text-black leading-snug whitespace-pre-line">{item.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-8">
            <button 
              className="w-full bg-pageDarkRed hover:bg-pageVeryDarkRed text-white font-semibold font-mori text-h3 py-6 px-12 rounded-md transition-colors flex items-center justify-start gap-3 focus:outline-none"
              style={{
                border: 'none',
                outline: 'none',
              }}
            >
              Submit your work now
              <img src={arrow_outward} alt="" className="w-4 h-4" />
            </button>
          </div>

          <div className="text-body font-mori text-white space-y-2 max-w-2xl">
            <p>
              If the link above doesn't work, please email your work to <span className="font-medium">submissions@cujcs.ca</span>
            </p>
            <p>
              Once you have submitted your work, you should receive an automated response confirming that we have received your email.
            </p>
          </div>
        </div>
      </div>

      {/* What happens next section */}
      <div className="py-16 px-8 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-h2 font-normal font-mori text-black mb-12">What happens next?</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-cardWhite rounded-md p-12">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
              <h3 className="text-h3 font-semibold font-mori text-black">Step 1: Initial Review and Acceptance</h3>
              <span className="text-h4 font-ibm text-black lg:whitespace-nowrap lg:ml-8">SUMMER 2025</span>
            </div>
            <p className="text-body font-mori text-black max-w-2xl">
              Your paper will be read by the review and editorial team, who will make the decision whether to accept or reject your paper. Authors will be informed whether their paper has been accepted or rejected.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-cardWhite rounded-md p-12">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
              <h3 className="text-h3 font-semibold font-mori text-black">Step 2: Peer Review</h3>
              <span className="text-h4 font-ibm text-black lg:whitespace-nowrap lg:ml-8">SUMMER-FALL 2025</span>
            </div>
            <p className="text-body font-mori text-black max-w-2xl">
              The accepted papers will go through typically 1–3 rounds of review and modification based on the editorial team's comments marked on your paper. These comments may come in the form of critical comments or requests for clarification. You, the author, are expected to make changes and edit your work as needed to rectify these issues, and then re-submit your work to us. This process of commenting and modifying may be repeated several times.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-cardWhite rounded-md p-12">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
              <h3 className="text-h3 font-semibold font-mori text-black">Step 3: Professional Review</h3>
              <span className="text-h4 font-ibm text-black lg:whitespace-nowrap lg:ml-8">FALL 2025</span>
            </div>
            <p className="text-body font-mori text-black max-w-2xl">
              The papers will be passed to our expert panel, which is comprised of various professors and industry professionals. They will perform an assessment of your document, request additional edits as necessary, and grant final approval. Please note that they may suggest rejecting your paper.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-cardWhite rounded-md p-12">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
              <h3 className="text-h3 font-semibold font-mori text-black">Step 4: Publication</h3>
              <span className="text-h4 font-ibm text-black lg:whitespace-nowrap lg:ml-8">EARLY 2026</span>
            </div>
            <p className="text-body font-mori text-black max-w-2xl">
              After final approval is granted, your work is done. The rest is up to us to deliver to you the final edition of the journal. The editorial team may make additional edits to fit layout and flow. After the journal is sent to publishing companies, it will then be distributed to authors, universities, libraries, and online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPublished;