import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

// Artwork imports
import cujs from '../assets/artwork/cujcs.png';
import cujs_2 from '../assets/artwork/cujcs_2.png';
import cujs_3 from '../assets/artwork/cujcs_3.png';
import cujs_4 from '../assets/artwork/cujcs_4.png';
import cujs_5 from '../assets/artwork/cujcs_5.png';
import cujs_56 from '../assets/artwork/cujcs_6.png';
import cujs_6 from '../assets/artwork/cujcs_7.png';

// Cover imports
import cover2023 from '../assets/covers/CUJCS2023_cover.png';
import cover2020 from '../assets/covers/CUJCS2020_cover.png';
import cover2013 from '../assets/covers/CUJCS2013_cover.jpg';
import cover2008 from '../assets/covers/CUJCS2008_cover.jpg';
import cover2004 from '../assets/covers/CUJCS2004_cover.png';
import cover2003 from '../assets/covers/CUJCS2003_cover.png';
import cover2002 from '../assets/covers/CUJCS2002_cover.png';

interface Chapter {
  number: string;
  title: string;
  author: string;
  page: number;
}

interface Edition {
  id: string;
  year: string;
  coverImage: string;
  pdfUrl: string;
  chapters: Chapter[];
}

// Google Drive hosted PDFs with actual cover images
const editionsData: Edition[] = [
  {
    id: '2023',
    year: '2023',
    coverImage: cover2023,
    pdfUrl: 'https://drive.google.com/file/d/1bYON9R87EX-R1MY8Kd__im_ES69qR3ir/view',
    chapters: [
      { number: '11', title: 'Age Influence on the Effect of Emojis on Affective Vocabulary Items: A Priming Approach', author: 'Hiu Man Ho', page: 11 },
      { number: '26', title: 'The effects of mindfulness on Mind Wandering: An eye tracking study', author: 'Aleksandra Baksheeva, Otto Sigiliadd Santesoon', page: 26 },
      { number: '79', title: 'Analogical Insight and Recategorization', author: 'Ningxin Li', page: 79 },
      { number: '91', title: 'Champion or Globetrotter? Investigating the Relationship between Global/Local Bias and Open-World Video Game Behaviour', author: 'Aleksandra Baksheeva, Otto Sigiliadd Santesoon', page: 91 },
    ]
  },
  {
    id: '2020',
    year: '2020',
    coverImage: cover2020,
    pdfUrl: 'https://drive.google.com/file/d/1PRciOQbQHX132XphXw817f9Eda6ZW97D/view',
    chapters: [
      { number: '3', title: 'Cognitive Load and Learning Efficiency', author: 'Jennifer Liu', page: 3 },
      { number: '18', title: 'Memory Consolidation During Sleep', author: 'Robert Kim', page: 18 },
      { number: '32', title: 'Visual Perception and Object Recognition', author: 'Amanda Foster', page: 32 },
      { number: '48', title: 'Language Acquisition in Bilingual Children', author: 'Carlos Martinez', page: 48 }
    ]
  },
  {
    id: '2013',
    year: '2013',
    coverImage: cover2013, 
    pdfUrl: 'https://drive.google.com/file/d/1N9ESQf52PGuBqGe_xcapMQEYeCQt8gTm/view',
    chapters: [
      { number: '5', title: 'A case for mandating the disclosure of incidental findings when seeking informed consent', author: 'Victoria H. Saigle', page: 5 },
      { number: '19', title: 'Transhumanism and personal identity', author: 'Arielle Friedman', page: 19 },
      { number: '27', title: 'Effect of cognitive dissonance on attitude change', author: 'Wool< Yang', page: 27 },
      { number: '37', title: 'Dating profile age analysis', author: 'Arielle Friedman, Rushil Singh & Ao Ao Feng', page: 37 },
      { number: '47', title: 'Sound changes of the /hi-phoneme from old english to modern english', author: 'Derrick Buchanan', page: 47 },
      { number: '57', title: 'Speaking, remembering and feeling the self', author: 'Mauro Silva', page: 57 }
    ]
  },
  {
    id: '2008',
    year: '2008',
    coverImage: cover2008,
    pdfUrl: 'https://drive.google.com/file/d/13sIdVsHsHSyFWWiRQm85B7njuuLHhpqY/view',
    chapters: [
      { number: '5', title: 'Why Animal Consciousness Falls Short: Language as a requirement for the highest level of conscious experience', author: 'Ben D. Amsel', page: 5 },
      { number: '19', title: 'Categorization in Problem Solving: Underpinning of cross-domain, expert level performance', author: 'David Baldwin', page: 19 },
      { number: '34', title: 'Damasio Without Error: On uniting emotion and reason while separating the neural and the biochemical', author: 'Govind Persad', page: 34 },
      { number: '47', title: 'Emergence in the Mind: On reductionism and the multiple realizability of mental states', author: 'Adrien Tough', page: 47 }
    ]
  },
  {
    id: '2004',
    year: '2004',
    coverImage: cover2004,
    pdfUrl: 'https://drive.google.com/file/d/1N9ESQf52PGuBqGe_xcapMQEYeCQt8gTm/view',
    chapters: [
      { number: '1', title: 'The Current State of Insight Research', author: 'Leo Trottier', page: 1 },
      { number: '17', title: 'Feature Distance in Consonantal Slips of the Tongue – Psycholinguistics and Methodological Aspects', author: 'Eva-Maria Waleschowski', page: 17 },
      { number: '41', title: 'Finding the Essence of Similarity', author: 'Christine Johnson', page: 41 },
      { number: '61', title: 'The Turing Test and Alternate Rationalities', author: 'Mete Atamel', page: 61 },
    ]
  },
  {
    id: '2003',
    year: '2003',
    coverImage: cover2003,
    pdfUrl: 'https://drive.google.com/file/d/1wJaqJ1Y3-QEvtOMaB7NQLaa3PdKnOy8y/view',
    chapters: [
      { number: '1', title: 'Effect of Grammatical Categories and Semantic Relatedness on Immediate Word Pairs Recall', author: 'Katia Dilkina', page: 1 },
      { number: '11', title: 'Mental Modules and Essentialism: Trait variation and its implications for evolutionary psychology', author: 'Clement Loo', page: 11 },
      { number: '20', title: 'Autonomous Navigation Using Visual Landmarks', author: 'Cameron Morland', page: 20 },
      { number: '34', title: 'Probing the Limits of Mind and Brain', author: 'Dave Suarez', page: 34 },
    ]
  },
  {
    id: '2002',
    year: '2002',
    coverImage: cover2002,
    pdfUrl: 'https://drive.google.com/file/d/144ghodOoaBfHcn7K3Ody8R5rufLnO509/view',
    chapters: [
      { number: '11', title: 'Age Influence on the Effect of Emojis on Affective Vocabulary Items: A Priming Approach', author: 'Hiu Man Ho', page: 11 },
      { number: '26', title: 'The effects of mindfulness on Mind Wandering: An eye tracking study', author: 'Aleksandra Baksheeva, Otto Sigiliadd Santesoon', page: 26 },
      { number: '79', title: 'Analogical Insight and Recategorization', author: 'Ningxin Li', page: 79 },
      { number: '91', title: 'Champion or Globetrotter? Investigating the Relationship between Global/Local Bias and Open-World Video Game Behaviour', author: 'Aleksandra Baksheeva, Otto Sigiliadd Santesoon', page: 91 },
    ]
  }
];

const artworks = [
  { id: '1', title: 'Cognitive Reflections', artist: 'Emily Zhang', imageUrl: cujs },
  { id: '2', title: 'Synaptic Dreams', artist: 'Michael Liu', imageUrl: cujs_2 },
  { id: '3', title: 'Neural Echoes', artist: 'Sara Ahn', imageUrl: cujs_3 },
  { id: '4', title: 'Layers of Thought', artist: 'David Romero', imageUrl: cujs_4 },
  { id: '5', title: 'Algorithmic Bloom', artist: 'Naomi Tanaka', imageUrl: cujs_5 },
  { id: '6', title: 'Digital Mirage', artist: 'Omar El-Sayed', imageUrl: cujs_56 },
  { id: '7', title: 'Digital Mirage', artist: 'Omar El-Sayed', imageUrl: cujs_6 },
];

const EditionsPage: React.FC = () => {
  const [expandedEditions, setExpandedEditions] = useState<string[]>(['2023']);
  const [selectedArtwork, setSelectedArtwork] = useState<{ id: string; title: string; artist: string; imageUrl: string } | null>(null);

  const toggleEdition = (editionId: string) => {
    setExpandedEditions(prev => 
      prev.includes(editionId) 
        ? prev.filter(id => id !== editionId)
        : [...prev, editionId]
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Header */}
      <div className="relative pt-24 pb-12 px-8">
        <h1 className="text-5xl font-bold text-gray-900 pl-0 lg:pl-24">ALL COLLECTIVES</h1>
      </div>

      {/* Main Content */}
      <div className="relative px-8 pb-12 max-w-7xl mx-auto">
        {/* Journals Section */}
        <section className="mb-8" id="journals">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Journals</h2>
          
          <div className="space-y-4">
            {editionsData.map(edition => (
              <div 
                key={edition.id} 
                className="overflow-hidden rounded-[5px]" 
                style={{ backgroundColor: '#F8F6F6' }}
              >
                {/* Edition Header */}
                <button
                  onClick={() => toggleEdition(edition.id)}
                  className="w-full px-4 py-6 lg:px-12 lg:py-8 lg:pr-12 flex items-center justify-between transition-colors focus:outline-none bg-[#F8F6F6] hover:bg-[#EAE7E7]"
                  style={{
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  {/* Mobile: Short title, left-aligned */}
                  <h3 className="text-lg font-medium text-gray-900 text-left lg:hidden">
                    {edition.year} Edition
                  </h3>
                  
                  {/* Desktop: Full title */}
                  <h3 className="hidden lg:block text-lg font-medium text-gray-900">
                    Canadian Undergraduate Journal of Cognitive Science - {edition.year} Edition
                  </h3>
                  
                  {expandedEditions.includes(edition.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedEditions.includes(edition.id) && (
                  <div className="px-4 pb-6 lg:px-12 lg:pb-12 bg-[#F8F6F6]">
                    <div className="border-t border-gray-200 mb-6" style={{ marginLeft: '2px', marginRight: '2px' }} />
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                      {/* Cover Image and Button */}
                      <div className="flex flex-col items-center lg:items-center">
                        <img
                          src={edition.coverImage}
                          alt={`${edition.year} Edition cover`}
                          className="w-full h-auto lg:w-44 lg:h-56 object-contain lg:object-cover rounded mb-4"
                        />
                        <a
                          href={edition.pdfUrl}
                          className="w-full lg:w-44 px-4 lg:px-6 py-2 bg-[#A70039] text-white rounded-full hover:bg-[#8B0030] transition-colors inline-flex items-center justify-center gap-2"
                        >
                          READ NOW <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      {/* Table of Contents */}
                      {edition.chapters.length > 0 && (
                        <div className="flex-1">
                          <div className="grid gap-3">
                            {edition.chapters.map((chapter, index) => (
                              <div key={index} className="flex items-start gap-4 py-2 border-b border-gray-200 last:border-b-0">
                                <span className="min-w-[2rem]">{chapter.number}</span>
                                <div className="flex-1">
                                  <p className="leading-tight">{chapter.title}</p>
                                  <p className="mt-1">{chapter.author}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Art Section */}
        <section className="relative" id="art">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Art</h2>
          <p className="mb-8 max-w-4xl">
            Every issue of the journal features captivating art submitted by students. These works explore themes of cognition, consciousness, and the human mind through visual expression.
          </p>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="mb-4 break-inside-avoid">
                {/* Desktop: Hover interaction */}
                <div
                  className="hidden lg:block cursor-pointer group relative overflow-hidden rounded-lg"
                  onClick={() => setSelectedArtwork(artwork)}
                >
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100">
                    <div className="text-center px-4">
                      <h3 className="mb-2 leading-tight">{artwork.title}</h3>
                      <p>{artwork.artist}</p>
                    </div>
                    
                    {/* Expand Icon */}
                    <div className="absolute bottom-4 right-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Mobile: Always visible title and artist */}
                <div className="lg:hidden">
                  <div
                    className="cursor-pointer overflow-hidden rounded-lg mb-2"
                    onClick={() => setSelectedArtwork(artwork)}
                  >
                    <img
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900 mb-1">{artwork.title}</h3>
                    <p className="text-gray-600">{artwork.artist}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for selected artwork */}
          {selectedArtwork && (
            <div className="fixed inset-0 flex items-center justify-center z-50 p-8" style={{ backgroundColor: 'rgba(60, 57, 60, 0.96)' }} onClick={() => setSelectedArtwork(null)}>
              <div className="relative flex flex-col items-center">
                <button
                  className="absolute -top-2 -right-14 text-white hover:text-gray-300 z-10 leading-none flex items-center justify-center"
                  onClick={() => setSelectedArtwork(null)}
                  style={{ 
                    background: 'none', 
                    border: 'none',
                    width: '49px',
                    height: '49px',
                    fontSize: '24px'
                  }}
                >
                  ✕
                </button>
                <img
                  src={selectedArtwork.imageUrl}
                  alt={selectedArtwork.title}
                  className="rounded-lg object-contain max-h-[60vh] max-w-[60vw] mb-6"
                />
                
                <div className="text-white text-center">
                   <h3 className="mb-2">{selectedArtwork.title}</h3>
                   <p>{selectedArtwork.artist}</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default EditionsPage;