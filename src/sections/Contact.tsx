"use client";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Mail, ExternalLink, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-2">Say Hello</p>
          <h2 className="text-4xl font-bold text-[#1d1d1f] mb-4">Get in Touch</h2>
          <p className="text-[#6e6e73] text-lg mb-12 max-w-md mx-auto">
            Open to new opportunities, collaborations, and interesting conversations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl p-8 border border-[#e5e5ea] shadow-sm max-w-md mx-auto"
        >
          <div className="space-y-4">
            <a
              href={`mailto:${resume.email}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f5f5f7] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <Mail size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#6e6e73]">Email</p>
                <p className="text-sm font-medium text-[#1d1d1f] group-hover:text-blue-600 transition-colors">
                  {resume.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${resume.phone}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f5f5f7] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                <Phone size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#6e6e73]">Phone</p>
                <p className="text-sm font-medium text-[#1d1d1f]">{resume.phone}</p>
              </div>
            </a>

            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f5f5f7] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                <ExternalLink size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#6e6e73]">GitHub</p>
                <p className="text-sm font-medium text-[#1d1d1f] group-hover:text-blue-600 transition-colors">
                  github.com/krenilpatel11
                </p>
              </div>
            </a>

            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f5f5f7] transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                <ExternalLink size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#6e6e73]">LinkedIn</p>
                <p className="text-sm font-medium text-[#1d1d1f] group-hover:text-blue-600 transition-colors">
                  linkedin.com/in/krenilpatel
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3">
              <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                <MapPin size={16} />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#6e6e73]">Location</p>
                <p className="text-sm font-medium text-[#1d1d1f]">{resume.location}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-sm text-[#6e6e73]">
        <p>© 2026 Krenil Patel. Built with Next.js & Tailwind CSS.</p>
      </div>
    </section>
  );
}
