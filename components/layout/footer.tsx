import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-steel-blue text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-welding-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/mroncy-logo.png"
                alt="MRONCY School of Welding & Fabrication Engineering"
                width={140}
                height={56}
                className="h-auto bg-white/90 backdrop-blur-sm p-2 rounded-md"
              />
            </div>
            <p className="mb-4 text-white/90">
              Empowering individuals with real-world welding skills and business knowledge to build successful careers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Daniel-Muronzi/100093815093396/?fref=nf&ref=embed_post"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-white/10 p-2 rounded-full hover:bg-welding-orange transition-all duration-300 hover:scale-110 transform"
              >
                <Facebook className="transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 p-2 rounded-full hover:bg-welding-orange transition-all duration-300 hover:scale-110 transform"
              >
                <Instagram className="transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-white/10 p-2 rounded-full hover:bg-welding-orange transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin className="transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-welding-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Programs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Admissions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs - Simplified */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-welding-orange">Featured Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses#welding-business"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Start a Welding Business
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses#welding-school"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Start a Welding School
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses#business-planning"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Business Planning</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses#marketing"
                  className="hover:text-welding-orange transition-all duration-300 flex items-center group"
                >
                  <ArrowRight
                    size={16}
                    className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0"
                  />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Marketing for Welders
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-welding-orange font-medium hover:underline transition-all duration-300 flex items-center mt-2"
                >
                  View All Programs <ArrowRight size={16} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Simplified */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-welding-orange">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start group hover:translate-x-1 transition-transform duration-300">
                <MapPin
                  className="mr-2 mt-1 flex-shrink-0 text-welding-orange group-hover:scale-110 transition-transform duration-300"
                  size={18}
                />
                <span className="text-sm">978 Mugabe Heights, Borrowdale North, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                <Phone
                  className="mr-2 flex-shrink-0 text-welding-orange group-hover:scale-110 transition-transform duration-300"
                  size={18}
                />
                <a href="tel:+263710896129" className="hover:text-welding-orange transition-colors text-sm">
                  +263 71 089 6129
                </a>
              </li>
              <li className="flex items-center group hover:translate-x-1 transition-transform duration-300">
                <Mail
                  className="mr-2 flex-shrink-0 text-welding-orange group-hover:scale-110 transition-transform duration-300"
                  size={18}
                />
                <a
                  href="mailto:futuremillionairezw@gmail.com"
                  className="hover:text-welding-orange transition-colors text-sm"
                >
                  futuremillionairezw@gmail.com
                </a>
              </li>
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-welding-orange/20 backdrop-blur-sm hover:bg-welding-orange text-white px-4 py-2 rounded-md transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                >
                  Get in Touch <ArrowRight size={16} className="ml-2" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600/50 mt-8 pt-6 text-center">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} MRONCY School of Welding & Fabrication Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
