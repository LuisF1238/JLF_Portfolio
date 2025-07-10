import { HERO_CONTENT } from "@/constants";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4"
    >
      <div className="container max-w-6xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 lg:text-left text-center lg:pr-8">
            <h1 className="font-bold tracking-tight">
              <span className="text-fluid-xl opacity-0 animate-fade-in">{HERO_CONTENT.greeting}</span>
              <div className="text-fluid-6xl">
                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                  {HERO_CONTENT.firstName}
                </span>
                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                  {" "}
                  {HERO_CONTENT.lastName}
                </span>
              </div>
              <p className="text-fluid-xl text-muted-foreground mt-2 opacity-0 animate-fade-in-delay-2">
                I'm an aspiring Data Scientist
              </p>
            </h1>

            <p className="text-fluid-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
              {HERO_CONTENT.description}
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href={HERO_CONTENT.ctaLink} className="cosmic-button">
                {HERO_CONTENT.ctaText}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img 
              src="/ME.JPG" 
              alt="/ME.JPG" 
              className="w-80 h-80 object-cover rounded-full border-4 border-primary/30 shadow-xl opacity-0 animate-fade-in-delay-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
