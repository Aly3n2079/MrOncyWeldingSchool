import type { Metadata } from "next"
import Image from "next/image"
import Breadcrumbs from "@/components/navigation/breadcrumbs"
import { MapPin, Phone, Mail, Clock, Award, Briefcase, GraduationCap } from "lucide-react"
import VideoPlayer from "@/components/ui/video-player"

export const metadata: Metadata = {
  title: "About Us | Daniel Muronzi Welding Training Centre",
  description: "Learn about our mission, vision, and the story of Daniel Muronzi Welding Training Centre in Zimbabwe.",
}

export default function AboutPage() {
  // Define breadcrumb items for this page
  const breadcrumbItems = [{ label: "About Us", path: "/about" }]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-steel-blue text-white py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-welding-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">About Us</h1>
          <p className="text-xl max-w-3xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Discover the story behind Daniel Muronzi Welding Training Centre and our commitment to excellence in welding
            education.
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="bg-light-grey border-b border-gray-200">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      {/* Instructor Video Section - NEW */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Meet Our Instructors</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-steel-blue">Expert Guidance from Industry Professionals</h3>
              <p className="text-gray-700 mb-6">
                At MRONCY School of Welding, our instructors bring decades of real-world experience to the classroom.
                They are not just teachers but active professionals who understand the demands of the welding industry.
              </p>
              <p className="text-gray-700 mb-6">
                Our teaching approach combines hands-on training with personalized mentorship, ensuring that every
                student receives the attention and guidance they need to master welding techniques and business
                principles.
              </p>

              <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/instructors.jpeg"
                  alt="MRONCY School of Welding Instructors"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-light-grey/70 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Award size={18} className="text-welding-orange mr-2" />
                  <span className="text-sm font-medium">Certified Instructors</span>
                </div>
                <div className="flex items-center bg-light-grey/70 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Briefcase size={18} className="text-welding-orange mr-2" />
                  <span className="text-sm font-medium">Industry Experience</span>
                </div>
                <div className="flex items-center bg-light-grey/70 backdrop-blur-sm px-3 py-2 rounded-full">
                  <GraduationCap size={18} className="text-welding-orange mr-2" />
                  <span className="text-sm font-medium">Personalized Training</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <VideoPlayer
                src="/videos/instructor-video.mp4.mp4"
                poster="/images/instructors.jpeg"
                className="aspect-video relative"
              />
              <div className="absolute -bottom-4 -right-4 bg-welding-orange text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3 z-10">
                <p className="font-bold">Take a look at our instructors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg group transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <Image
                src="/images/instructors.jpeg"
                alt="Daniel Muronzi"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-lg">
              <h2 className="section-title animate-fade-in">The Daniel Muronzi Story</h2>
              <p className="text-gray-700 mb-4 animate-fade-in">
                With over two decades of experience in the welding industry across Southern Africa, Daniel Muronzi
                established this training centre with a vision to empower individuals with practical welding skills that
                meet international standards.
              </p>
              <p className="text-gray-700 mb-4 animate-fade-in">
                Having worked on major infrastructure projects and witnessing firsthand the skills gap in the welding
                sector, Daniel committed himself to creating a training institution that focuses on hands-on, practical
                education rather than just theoretical knowledge.
              </p>
              <p className="text-gray-700 mb-4 animate-fade-in">
                His expertise and industry connections have allowed the centre to develop curriculum that directly
                addresses the needs of employers, ensuring that graduates are job-ready from day one.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center bg-light-grey/70 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Award size={18} className="text-welding-orange mr-2" />
                  <span className="text-sm font-medium">20+ Years Experience</span>
                </div>
                <div className="flex items-center bg-light-grey/70 backdrop-blur-sm px-3 py-2 rounded-full">
                  <Briefcase size={18} className="text-welding-orange mr-2" />
                  <span className="text-sm font-medium">Industry Expert</span>
                </div>
                <div className="flex items-center bg-light-grey/70 backdrop-blur-sm px-3 py-2 rounded-full">
                  <GraduationCap size={18} className="text-welding-orange mr-2" />
                  <span className="text-sm font-medium">Master Instructor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-welding-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-steel-blue/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <h2 className="text-2xl font-bold mb-4 text-steel-blue">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                To be Zimbabwe's premier welding training centre through excellence, innovation, and practical
                education.
              </p>
              <p className="text-gray-700">
                We envision a self-sufficient, connected rural Zimbabwe where every community has the resources, skills,
                and facilities to thrive.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <h2 className="text-2xl font-bold mb-4 text-steel-blue">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Empowering individuals with real-world welding skills through hands-on training and internationally
                recognized certification programs.
              </p>
              <p className="text-gray-700">
                We are committed to transforming lives by providing quality education that leads to sustainable
                employment and entrepreneurship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information (Moved from Footer) */}
      <section className="py-16 bg-light-grey">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Locations & Hours</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <div className="flex items-start mb-4">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4 transition-transform duration-300 group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-blue">Borrowdale Location</h3>
                  <p className="text-gray-700">978 Sally Mugabe Heights, Borrowdale, Harare, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4 transition-transform duration-300 group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-blue">Contact</h3>
                  <p className="text-gray-700">
                    <a href="tel:+263710896129" className="hover:text-welding-orange transition-colors">
                      +263 71 089 6129
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <div className="flex items-start mb-4">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4 transition-transform duration-300 group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-blue">Waterfalls Location</h3>
                  <p className="text-gray-700">52 Bradfield Road, Waterfalls, Harare, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4 transition-transform duration-300 group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-blue">Contact</h3>
                  <p className="text-gray-700">
                    <a href="tel:+263787449904" className="hover:text-welding-orange transition-colors">
                      +263 78 744 9904
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
              <div className="flex items-start mb-4">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4 transition-transform duration-300 group-hover:scale-110">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-blue">Hours of Operation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-welding-orange p-3 rounded-full text-white mr-4 transition-transform duration-300 group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-steel-blue">Email</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:futuremillionairezw@gmail.com"
                      className="hover:text-welding-orange transition-colors"
                    >
                      futuremillionairezw@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02] group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Modern+Welding+Workshop"
                  alt="Welding Workshop"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">Modern Workshops</h3>
                <p className="text-gray-700">
                  Our fully-equipped workshops feature industry-standard welding machines and tools to provide students
                  with real-world experience.
                </p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02] group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Welding+Classroom"
                  alt="Classroom"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">Learning Spaces</h3>
                <p className="text-gray-700">
                  Comfortable classrooms for theoretical instruction, equipped with visual aids and demonstration
                  materials.
                </p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02] group">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Welding+Testing+Area"
                  alt="Testing Area"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-steel-blue">Testing Areas</h3>
                <p className="text-gray-700">
                  Dedicated spaces for certification testing and quality control, ensuring our graduates meet
                  international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-16 bg-light-grey relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-steel-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-welding-orange/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <h2 className="section-title text-center mb-12">Meet Our Founder</h2>

          <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl transform hover:scale-[1.01] max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="relative h-full min-h-[300px] md:col-span-1">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Daniel+Muronzi"
                  alt="Daniel Muronzi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:col-span-2">
                <h3 className="text-2xl font-bold mb-2 text-steel-blue">Daniel Muronzi</h3>
                <p className="text-welding-orange font-medium mb-4">Founder & Lead Instructor</p>
                <p className="text-gray-700 mb-4">
                  Daniel Muronzi brings over 20 years of welding expertise to his role as founder and lead instructor.
                  His career spans major infrastructure projects across Southern Africa, where he developed a deep
                  understanding of industry needs and standards.
                </p>
                <p className="text-gray-700 mb-4">
                  Passionate about education and skills development, Daniel established this training centre to bridge
                  the gap between theoretical knowledge and practical application, ensuring graduates are fully prepared
                  for successful careers in welding.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-welding-orange rounded-full mr-2"></div>
                    <span className="text-gray-700">AWS Certified Welding Instructor</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-welding-orange rounded-full mr-2"></div>
                    <span className="text-gray-700">Master Fabricator</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-welding-orange rounded-full mr-2"></div>
                    <span className="text-gray-700">Business Development Expert</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-welding-orange rounded-full mr-2"></div>
                    <span className="text-gray-700">Industry Consultant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
