import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-center py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-welding-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-[30%] right-[15%] w-40 h-40 bg-steel-blue/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in backdrop-blur-sm bg-black/20 p-8 rounded-lg border border-white/10 shadow-2xl hover:shadow-welding-orange/20 transition-all duration-500">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
            Unlock a <span className="text-welding-orange">Lucrative Career</span> in Welding
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Professional Training | Industry Certification | Business Development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Link
              href="/admissions"
              className="btn-primary text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-welding-orange to-welding-orange/80 group-hover:scale-110 transition-transform duration-500"></span>
              <span className="relative">Enroll Now</span>
            </Link>
            <Link
              href="/courses"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-steel-blue text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore Programs
            </Link>
          </div>
          <div
            className="mt-8 bg-welding-orange/80 backdrop-blur-sm p-4 rounded-lg inline-block animate-slide-up transition-all duration-300 hover:shadow-lg transform hover:scale-105 border border-welding-orange/30"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="font-bold">Investment: $200 | Duration: 2 Months</p>
            <p className="text-sm">Potential earnings: $3K-$4K per month in Zimbabwe</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
