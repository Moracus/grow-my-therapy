export default function Footer() {
  return (
    <footer className="bg-[#f3f0e8] text-black py-10 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Column 1: Name & Title */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Dr. Serena Blake, PsyD</h4>
          <p>Clinical Psychologist</p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>📍 1287 Maplewood Drive</p>
          <p>Los Angeles, CA 90026</p>
          <p>📞 (323) 555-0192</p>
          <p>
            📧{" "}
            <a
              href="mailto:serena@blakepsychology.com"
              className="underline hover:text-gray-200"
            >
              serena@blakepsychology.com
            </a>
          </p>
        </div>

        {/* Column 3: Office Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Office Hours</h4>
          <p>🧍‍♀️ In-person: Tue & Thu, 10 AM–6 PM</p>
          <p>💻 Virtual (Zoom): Mon, Wed & Fri, 1 PM–5 PM</p>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-200">
        &copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
      </div>
    </footer>
  );
}
