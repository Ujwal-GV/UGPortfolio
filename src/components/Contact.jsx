import React from 'react';
import Messages from './Messages';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-lg mb-6">
            Feel free to reach out if you have any questions or would like to work together!
          </p>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:ujwalgowda2002v@gmail.com"
              className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-all"
            >
              <FaEnvelope className="mr-2" />
              Send an Email
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Ujwal-GV/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-all"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ujwal-gowda-v-5ba277276"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-all"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>

            {/* Phone */}
            <a
              href="tel:+91 7483268624"
              className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-all"
            >
              <FaPhoneAlt className="mr-2" />
              Contact Me
            </a>

            <Messages />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Ujwal Gowda. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
