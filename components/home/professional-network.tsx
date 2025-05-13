import Link from "next/link"
import { CheckCircle } from "lucide-react"

const ProfessionalNetwork = () => {
  return (
    <section className="py-16 bg-steel-blue text-white relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-welding-orange/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Connecting Top Clients with <span className="text-welding-orange">Certified Professionals</span>
            </h2>
            <p className="text-lg mb-6">
              We provide skilled professionals for construction, offshore, and industrial projects across Zimbabwe and
              beyond.
            </p>

            <h3 className="text-xl font-bold mb-4">Our Talent Pool Includes:</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <CheckCircle size={20} className="text-welding-orange mr-2 flex-shrink-0" />
                <span>Welders</span>
              </li>
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <CheckCircle size={20} className="text-welding-orange mr-2 flex-shrink-0" />
                <span>Fabricators</span>
              </li>
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <CheckCircle size={20} className="text-welding-orange mr-2 flex-shrink-0" />
                <span>Boilermakers</span>
              </li>
            </ul>

            <div className="bg-welding-orange p-4 rounded-md inline-block mb-6 transform transition-transform duration-300 hover:scale-105">
              <h3 className="font-bold text-xl">Are You Certified?</h3>
            </div>

            <h3 className="text-xl font-bold mb-4">Join our network & access:</h3>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <CheckCircle size={20} className="text-welding-orange mr-2 flex-shrink-0" />
                <span>High-paying gigs</span>
              </li>
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <CheckCircle size={20} className="text-welding-orange mr-2 flex-shrink-0" />
                <span>Career growth</span>
              </li>
              <li className="flex items-center transition-transform duration-300 hover:translate-x-2">
                <CheckCircle size={20} className="text-welding-orange mr-2 flex-shrink-0" />
                <span>More visibility</span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="btn-primary bg-welding-orange hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Join Our Network Today
            </Link>
          </div>

          <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-6 text-welding-orange">Registration Process</h3>
            <ul className="space-y-4">
              <li className="flex items-start transition-all duration-300 hover:translate-x-2">
                <div className="bg-welding-orange rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-bold">Submit Your Details</p>
                  <p className="text-sm opacity-80">Full Name & Location</p>
                </div>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2">
                <div className="bg-welding-orange rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-bold">Provide Documentation</p>
                  <p className="text-sm opacity-80">Proof of Work (photos/videos) & Welding Certificate</p>
                </div>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2">
                <div className="bg-welding-orange rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-bold">Pay Registration Fee</p>
                  <p className="text-sm opacity-80">$20.00 one-time fee</p>
                </div>
              </li>
              <li className="flex items-start transition-all duration-300 hover:translate-x-2">
                <div className="bg-welding-orange rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-bold">Get Connected</p>
                  <p className="text-sm opacity-80">Start receiving job opportunities and networking benefits</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalNetwork
