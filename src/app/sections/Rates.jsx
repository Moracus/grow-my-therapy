export default function Rates() {
  return (
    <section className="bg-[#94b0b0] py-20 px-6 text-center text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-10">
          Rates and Insurance
        </h2>

        <p className="mb-4 text-lg">Individual session - $200</p>
        <p className="mb-6 text-lg">couples session - $240</p>

        <p className="mb-4 text-base">
          I accept both private pay and insurance. I am in-network with BCBS and
          Aetna.
        </p>

        <p className="text-base">
          For out-of-network plans, I’ve partnered with Mentaya using{" "}
          <a
            href="https://www.mentaya.com/" // replace with actual tool URL
            className="underline hover:text-gray-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            this tool
          </a>{" "}
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  );
}
