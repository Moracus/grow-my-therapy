// src/components/Hero.js

export default function Hero() {
  return (
    <section className="w-full  min-h-screen flex justify-center items-center pb-8">
      <div className="relative  w-[92%] h-[700px] overflow-hidden flex justify-center items-center ">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 "
        >
          <source src="/assets/oceanvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Psychological Care for
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mt-8 mb-8 text-center">
            Change, Insight, and Well-Being
          </h2>
          <p className="mt-6 text-base md:text-lg font-thin">
            Offering individual psychotherapy for adults via telehealth in
            Michigan and most U.S. states through PSYPACT participation
          </p>
          <button className="mt-8 bg-[#94B0B0] text-white text-lg font-thin px-10 py-8 rounded-[50%] tracking-wide shadow-md hover:bg-opacity-50 transition-all">
            <p>Schedule a</p>
            <p>consultation</p>
          </button>
        </div>
      </div>
    </section>
  );
}
