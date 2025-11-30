import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

const certificates = [
  {
    title: "SAP Student Academy - SAP ABAP",
    issuer: "Certificate of Completion",
    date: "2020 - 2021",
    image:
      "../../../public/Images/SAP pic.jpg",
    file: "../../../public/Images/SAP.pdf",
  },
  {
    title: "Writeria Society, PMEC",
    issuer: "Certificate of Appreciation",
    date: "2023",
    image:
      "../../../public/Images/Writeria pic.jpg",
    file: "../../../public/Images/Writeria.png",
  },
  {
    title: "Amazon Web Services",
    issuer: "Certificate of Completion",
    date: "1/10/2022 - 30/11/2022",
    image:
      "../../../public/Images/AWS pic.jpeg",
    file: "../../../public/Images/AWS.jpg",

  },
  {
    title: "TCS Youth Employment Program",
    issuer: "Certificate of Accomplishment",
    date: "7/01/2022",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop",
    file: "../../../public/Images/TCS.pdf",
  },
];

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center py-16 bg-transparent relative"
    >
      {/* Floating soft lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-blue-400/5 blur-3xl pointer-events-none" />

      <motion.div
        className="container mx-auto px-3 sm:px-6 relative z-10 flex flex-col justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Certificates & Achievements
            </span>
            
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Highlights of my learning milestones and professional growth.
          </p>
        </div>

        {/* Grid layout - smaller cards, centered rows */}
        <div
          className="flex flex-wrap justify-center gap-5 w-full max-w-6xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 0px 20px rgba(0, 180, 255, 0.25)",
                transition: { duration: 0.3 },
              }}
              className="relative rounded-xl bg-white/5 border border-white/10 
                         backdrop-blur-md overflow-hidden group transition-all 
                         cursor-pointer flex flex-col justify-between
                         w-[230px] h-[200px] sm:w-[250px] sm:h-[210px]"
            >
              {/* Image background */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 
                             transition-all duration-500 scale-105 group-hover:scale-110"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Text */}
              <div className="relative z-10 p-4 text-center">
                <h3 className="text-base font-semibold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-white/70 text-sm mb-1">{cert.issuer}</p>
                <p className="text-xs text-white/50">{cert.date}</p>
              </div>

              {/* Hover Buttons */}
              <div
                className="absolute inset-0 flex items-center justify-center 
                           gap-3 opacity-0 group-hover:opacity-100 
                           bg-black/40 backdrop-blur-sm transition-all duration-300 z-20"
              >
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full 
                             bg-white/10 text-white/80 hover:bg-sky-500/20 
                             hover:text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" /> View
                </a>
                <a
                  href={cert.file}
                  download
                  className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full 
                             bg-sky-500/10 text-sky-400 hover:bg-sky-500 
                             hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download
                </a>
              </div>

              {/* Border Glow */}
              <div
                className="absolute inset-0 rounded-xl border border-transparent 
                           group-hover:border-sky-400/40 
                           group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] 
                           transition-all duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};



