import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="bg-white w-full p-24 min-h-screen flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:w-1/2 text-gray-800 self-start">
          <h2 className="text-xl md:text-2xl text-black font-bold">
            About Dr. Serena Blake, PsyD (Clinical Psychologist)
          </h2>
          <p className="text-justify tracking-wider leading-loose font-thin">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center self-start">
          <Image
            src="/assets/potrait.jpg"
            alt="potrait"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </section>
      <div className="w-full h-[1px] bg-black"></div>
    </div>
  );
};

export default About;
