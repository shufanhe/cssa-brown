import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FF6363]/[0.04] text-[#a0202b] mt-0 py-10 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 text-sm">

        {/* Disclaimer */}
        <div className="flex-1 text-sm md:text-left">
          <p>
            The content of UCS/GSC recognized student organization websites is generated independently from Brown University. The statements, views, opinions, and information contained on the site are personal to those of the authors and student organization and do not necessarily reflect those of Brown University. The content on the site is not reviewed, approved, or endorsed by Brown University or its faculty or staff.
          </p>
        </div>

        {/* Icons + Address */}
        <div className="flex flex-col items-center md:items-start gap-4 md:ml-16">
          <div className="flex space-x-4">
            <img
              src={import.meta.env.BASE_URL + "uploads/WeChat.png"}
              alt="Wechat"
              className="h-6 w-6"
            />

            <a
              href="https://www.instagram.com/brown_cssa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={import.meta.env.BASE_URL + "uploads/Instagram.png"}
                alt="Instagram"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </a>

            <a href="mailto:brown_cssa@hotmail.com">
              <img
                src={import.meta.env.BASE_URL + "uploads/email.png"}
                alt="Email"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>

          <div className="text-center md:text-left text-sm">
            <p>
              Brown University<br />Providence, RI 02912
            </p>
          </div>
        </div>



        {/* CSSA Logo */}
        <div className="flex items-center justify-end flex-shrink-0">
          <img 
            src={import.meta.env.BASE_URL + "uploads/5fac0ddc-b050-45a1-9902-5e3641a02156.png"}
            alt="CSSA Logo" 
            className="h-24 w-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
