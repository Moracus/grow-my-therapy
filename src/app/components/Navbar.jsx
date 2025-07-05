import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" w-full bg-[#F3F0E8] flex items-center gap-2 md:gap-3 text-xl md:text-2xl pt-[3vw] pb-[3vw] pl-[4vw] pr-[4vw] z-50">
      <div>
        <Image src={"/assets/logodemo.png"} alt="logo" width={50} height={50} />
      </div>
      <div>
        <h1 className="text-[#3A5646]">Grow Therapy</h1>
      </div>
    </div>
  );
};

export default Navbar;
