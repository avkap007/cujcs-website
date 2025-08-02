import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

// Replace with actual image imports
import cujs from '../assets/artwork/cujs.jpg';
import cujs_2 from '../assets/artwork/cujs_2.jpg';
import cujs_3 from '../assets/artwork/cujs_3.jpg';
import cujs_4 from '../assets/artwork/cujs_4.jpg';
import cujs_5 from '../assets/artwork/cujs_5.jpg';
import cujs_56 from '../assets/artwork/cujs_56jpg.jpg';
import cujs_6 from '../assets/artwork/cujs_6jpg.jpg';


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

// Sample data - Replace with actual data
const editionsData: Edition[] = [
  {
    id: '2023',
    year: '2023',
    coverImage: '/api/placeholder/180/240',
    pdfUrl: '/editions/2023.pdf',
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
    coverImage: '/api/placeholder/180/240',
    pdfUrl: '/editions/2020.pdf',
    chapters: [
      { number: '3', title: 'Cognitive Load and Learning Efficiency', author: 'Jennifer Liu', page: 3 },
      { number: '18', title: 'Memory Consolidation During Sleep', author: 'Robert Kim', page: 18 },
      { number: '32', title: 'Visual Perception and Object Recognition', author: 'Amanda Foster', page: 32 },
      { number: '48', title: 'Language Acquisition in Bilingual Children', author: 'Carlos Martinez', page: 48 }
    ]
  },
  {
    id: '2019',
    year: '2019',
    coverImage: '/api/placeholder/180/240',
    pdfUrl: '/editions/2019.pdf',
    chapters: [
      { number: '5', title: 'Executive Function and Decision Making', author: 'Patricia Wong', page: 5 },
      { number: '22', title: 'Social Cognition and Theory of Mind', author: 'Daniel Brown', page: 22 },
      { number: '38', title: 'Attention Deficits and Working Memory', author: 'Sophie Martin', page: 38 }
    ]
  },
  {
    id: '2004',
    year: '2004',
    coverImage: '/api/placeholder/180/240',
    pdfUrl: '/editions/2004.pdf',
    chapters: []
  },
  {
    id: '2003',
    year: '2003',
    coverImage: '/api/placeholder/180/240',
    pdfUrl: '/editions/2003.pdf',
    chapters: []
  },
  {
    id: '2002',
    year: '2002',
    coverImage: '/api/placeholder/180/240',
    pdfUrl: '/editions/2002.pdf',
    chapters: []
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
        {/* <div className="max-w-7xl mx-auto"> */}
          <h1 className="text-5xl font-bold text-gray-900 pl-0 lg:pl-24">ALL COLLECTIVES</h1>
        {/* </div> */}
      </div>

      {/* Main Content */}
      <div className="relative px-8 pb-12 max-w-7xl mx-auto">
        {/* Journals Section */}
        <section className="mb-8" id="journals">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Journals</h2>
          
          <div className="space-y-4">
            {editionsData.map(edition => (
              <div key={edition.id} 
              className="overflow-hidden rounded-lg lg:rounded-none" 
              style={{ backgroundColor: '#F8F6F6' , borderRadius: window.innerWidth >= 1024 ? '0' : '' }}>
                {/* Edition Header */}
                <button
                    onClick={() => toggleEdition(edition.id)}
                    className="w-full px-4 lg:px-6 py-4 flex items-center justify-between transition-colors focus:outline-none bg-[#F8F6F6] hover:hover:bg-[#EAE7E7] rounded-none"
                    style={{
                      border: 'none',
                      outline: 'none',
                      
                    }}
                    // onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EAE7E7'}
                    // onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F8F6F6'}
                  >
                  <h3 className="text-lg font-medium text-gray-900" style={{ backgroundColor: 'inherit'}}>
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
                  <div className="px-4 lg:px-6 pb-6 bg-[#F8F6F6]" style={{ backgroundColor: '#F8F6F6' }}>
                    <div className="border-t border-gray-200 mb-6" style={{ marginLeft: '2px', marginRight: '2px' }} />
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                      {/* Cover Image and Button */}
                      <div className="flex flex-col items-center">
                        <img
                          src={edition.coverImage}
                          alt={`${edition.year} Edition cover`}
                          className="w-32 h-40 lg:w-44 lg:h-56 object-cover rounded mb-4"
                        />
                        <a
                          href={edition.pdfUrl}
                          className="w-32 lg:w-44 px-4 lg:px-6 py-2 bg-[#A70039] text-white rounded-full hover:bg-[#8B0030] transition-colors inline-flex items-center justify-center gap-2"
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
          <h2 className="mb-6">Art</h2>
          <p className="mb-8 max-w-4xl">
            Every issue of the journal features captivating art submitted by students. These works explore themes of cognition, consciousness, and the human mind through visual expression.
          </p>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
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