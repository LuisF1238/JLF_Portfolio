import { HERO_CONTENT } from "@/constants";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="container max-w-6xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 lg:text-left text-center lg:pr-8 max-w-full overflow-hidden">
            <h1 className="font-bold tracking-tight word-break break-words">
              <span className="text-fluid-xl opacity-0 animate-fade-in block mb-2">{HERO_CONTENT.greeting}</span>
              <div className="text-fluid-6xl leading-tight">
                <span className="text-primary opacity-0 animate-fade-in-delay-1 inline-block">
                  {HERO_CONTENT.firstName}
                </span>
                <span className="text-gradient ml-1 sm:ml-2 opacity-0 animate-fade-in-delay-2 inline-block">
                  {" "}
                  {HERO_CONTENT.lastName}
                </span>
              </div>
              <p className="text-fluid-xl text-muted-foreground mt-2 sm:mt-4 opacity-0 animate-fade-in-delay-2">
                I'm an aspiring Data Scientist
              </p>
            </h1>

            <p className="text-fluid-lg sm:text-fluid-xl text-muted-foreground max-w-full sm:max-w-2xl opacity-0 animate-fade-in-delay-3 px-2 sm:px-0">
              {HERO_CONTENT.description}
            </p>

            <div className="pt-4 sm:pt-6 opacity-0 animate-fade-in-delay-4 px-4 sm:px-0">
              <a href={HERO_CONTENT.ctaLink} className="cosmic-button inline-block">
                {HERO_CONTENT.ctaText}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src="/ME.JPG" 
              alt="Profile" 
              className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-primary/30 shadow-xl opacity-0 animate-fade-in-delay-2 max-w-[90vw] max-h-[90vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
