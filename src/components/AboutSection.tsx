export default function AboutSection() {
  return (
    <section className="py-16 bg-[#F2F0F0]">
      <div className="max-w-7xl mx-auto mt-12 mb-8">
        <h3 className="mb-4 text-left font-normal">A journal for students of the cognitive sciences, exploring <br />
            the interdisciplinary field through undergraduate research.</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-start min-w-0 flex-1 min-h-[320px]">
          <h4 className="uppercase font-ibm font-normal mb-4">Who Are We?</h4>
          <img src="/images/stockimages/whoarewe.png" alt="Who Are We" className="w-full h-24 object-cover rounded mb-4" />
          <p>
            The Canadian Undergraduate Journal of Cognitive Science is an electronic and print journal published by the Cognitive Science Student Society at Simon Fraser University.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-start min-w-0 flex-1 min-h-[320px]">
          <h4 className="uppercase font-ibm font-normal mb-4">Our Aim</h4>
          <img src="/images/stockimages/ouraim.png" alt="Our Aim" className="w-full h-24 object-cover rounded mb-4" />
          <p>
            Our aim is to provide a forum for students to share work among peers and gain valuable experience in the process of getting an academic paper published.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-start min-w-0 flex-1 min-h-[320px]">
          <h4 className="uppercase font-ibm font-normal mb-4">Our Process</h4>
          <img src="/images/stockimages/ourprocess.png" alt="Our Process" className="w-full h-24 object-cover rounded mb-4" />
          <p>
            All papers submitted to the journal undergo a thorough peer review process, including peer and professional review by academics and industry experts. For more information, see <a href="/publication" className="underline">our publication page</a>.
          </p>
        </div>
      </div>
      <div className="text-center mt-16">
        <a href="/about" className="uppercase tracking-widest text-gray-700 hover:text-deepRed inline-flex items-center gap-2">
          Learn more about us and our mission
          <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
}