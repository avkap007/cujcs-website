export default function Card() {
  return (
    <div className="bg-[#F8F6F6] shadow-md rounded-xl p-4 h-auto w-full max-w-md md:max-w-lg lg:max-w-xl ">
      <h2 className="p-4 mb-2 text-left text-black">
            WHO ARE WE?
      </h2>
      <img
        src="/images/logos/student_society_banner.png"
        alt="Card Image"
        className="w-[530px] h-[220px] object-cover rounded-lg p-4 mb-4"
      />
      <p className="text-left text-black p-4">
        The Canadian Undergraduate Journal of Cognitive Science is an electronic and print journal published by the Cognitive Science Student Society at Simon Fraser University.
      </p>
    </div>
  );
}
