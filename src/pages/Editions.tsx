import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import cujs from '../assets/artwork/cujs.jpg';
import cujs_2 from '../assets/artwork/cujs_2.jpg';
import cujs_3 from '../assets/artwork/cujs_3.jpg';
import cujs_4 from '../assets/artwork/cujs_4.jpg';
import cujs_5 from '../assets/artwork/cujs_5.jpg';
import cujs_56 from '../assets/artwork/cujs_56jpg.jpg';
import cujs_6 from '../assets/artwork/cujs_6jpg.jpg';

// Define types for our data
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

// In your EditionsPage component, update the artwork array:
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
  const [expandedSections, setExpandedSections] = useState<string[]>(['journals']);
  const [selectedArtwork, setSelectedArtwork] = useState<{ id: string; title: string; artist: string; imageUrl: string } | null>(null);

  const toggleEdition = (editionId: string) => {
    setExpandedEditions(prev => 
      prev.includes(editionId) 
        ? prev.filter(id => id !== editionId)
        : [...prev, editionId]
    );
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Orange Background Shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 rounded-full blur-3xl opacity-40 transform translate-x-1/3 -translate-y-1/3" />
      
      {/* Header */}
      <div className="relative pt-24 pb-12 px-8">
        <h1 className="text-5xl font-bold text-gray-900">ALL COLLECTIVES</h1>
      </div>

      {/* Main Content */}
      <div className="relative px-8 pb-12">
        {/* Journals Section */}
        <section className="mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection('journals')}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors bg-white"
            >
              <h2 className="text-2xl font-semibold text-gray-900">Journals</h2>
              {expandedSections.includes('journals') ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {expandedSections.includes('journals') && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="space-y-4 pt-6">
                  {editionsData.map(edition => (
                    <div key={edition.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                      {/* Edition Header */}
                      <button
                        onClick={() => toggleEdition(edition.id)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        style={{ backgroundColor: 'white', color: '#1f2937' }}
                      >
                        <h3 className="text-lg font-medium" style={{ color: '#1f2937' }}>
                          Canadian Undergraduate Journal of Cognitive Science - {edition.year} Edition
                        </h3>
                        {expandedEditions.includes(edition.id) ? (
                          <ChevronUp className="w-5 h-5" style={{ color: '#6b7280' }} />
                        ) : (
                          <ChevronDown className="w-5 h-5" style={{ color: '#6b7280' }} />
                        )}
                      </button>

                      {/* Expanded Content */}
                      {expandedEditions.includes(edition.id) && (
                        <div className="px-6 pb-6 border-t border-gray-200">
                          <div className="flex gap-8 pt-6">
                            {/* Cover Image and Button */}
                            <div className="flex flex-col items-center">
                              <img
                                src={edition.coverImage}
                                alt={`${edition.year} Edition cover`}
                                className="w-44 h-56 object-cover rounded shadow-md mb-4"
                              />
                              <p className="text-sm font-medium text-gray-700 mb-2">{edition.year} Edition</p>
                              <a
                                href={edition.pdfUrl}
                                className="px-6 py-2 bg-[#A70039] text-white rounded-full text-sm font-medium hover:bg-[#8B0030] transition-colors inline-flex items-center gap-2"
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
                                      <span className="text-gray-500 font-medium min-w-[2rem]">{chapter.number}</span>
                                      <div className="flex-1">
                                        <p className="text-gray-900 font-medium leading-tight">{chapter.title}</p>
                                        <p className="text-gray-600 text-sm italic mt-1">{chapter.author}</p>
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
              </div>
            )}
          </div>
        </section>

        {/* Art Section */}
        <section className="relative">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Art</h2>
          <p className="text-gray-600 mb-8 max-w-4xl">
            Every issue of the journal features captivating art submitted by students. These works explore themes of cognition, consciousness, and the human mind through visual expression.
          </p>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
  {artworks.map((artwork) => (
    <div
      key={artwork.id}
      className="mb-4 break-inside-avoid cursor-pointer transition-transform duration-200 transform hover:scale-105"
      onClick={() => setSelectedArtwork(artwork)}
    >
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className="w-full rounded-lg shadow-md object-cover"
      />
      <div className="mt-2">
        <p className="font-semibold text-gray-800">{artwork.title}</p>
        <p className="text-sm text-gray-600 italic">{artwork.artist}</p>
      </div>
    </div>
  ))}
</div>


          {/* Modal for selected artwork */}
          {selectedArtwork && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedArtwork(null)}>
              <div
                className="bg-white p-6 rounded-lg max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={() => setSelectedArtwork(null)}
                >
                  ✕
                </button>
                <img
                  src={selectedArtwork.imageUrl}
                  alt={selectedArtwork.title}
                  className="w-full h-auto rounded mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{selectedArtwork.title}</h3>
                <p className="text-gray-600 italic">by {selectedArtwork.artist}</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default EditionsPage;
