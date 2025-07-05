import Image from "next/image";
import Lanyard from "@/components/Lanyard/Lanyard";
import RotatingText from "@/components/RotatingText/RotatingText";
import SplitText from "@/components/SplitText/SplitText";
import BlurText from "@/components/BlurText/BlurText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import Squares from "@/components/Squares/Squares";
import SplashCursor from "@/components/SplashCursor/SplashCursor";
import GradientText from "@/components/GradientText/GradientText";
import {Timeline} from "@/components/Timeline/timeline";
import TrueFocus from "@/components/TrueFocus/TrueFocus";
import {color} from "motion-dom";


export default function Home() {
    const data = [
        {
            title: "BANK SYARIAH INDONESIA",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
                        MAGIC – Mass Application for Goverment, Institutional and Corporate
                        An integrated web application designed to support both internal and external processes in the banking sector, such as fund distribution management and financial reporting. The application has been utilized by operational and management teams to improve work efficiency, data transparency, and system integration across banking operations.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/images/bsi.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "KPK",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
                        LHKPN (Laporan Harta Kekayaan Penyelenggara Negara) - Application is designed to record and manage the asset declarations of public officials as part of a mandatory reporting system. Its primary goal is to ensure transparency in wealth accumulation and to prevent potential violations and acts of corruption. The application supports structured reporting, data verification, and integration with supervisory institutions.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/images/lhkpn.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "BTNGR",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
                        The E-Simaksi Or E-Rinjani applications are modern digital solutions designed to support the management of the Rinjani National Park conservation area and hiking activities. They enhance efficiency, transparency, and ecological sustainability through an integrated system for booking, permitting, education, and online reporting.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/images/erinjani.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Pemprov NTB",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
                        Development of Digital Tools to Support Government Programs in West Nusa Tenggara Province
                        Developed digital applications to support top-level leadership in executing strategic programs across West Nusa Tenggara Province. The system integrates data and workflows from government agencies (OPD) down to field-level operations, enabling fast, data-driven decision-making.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/images/ntb.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "DPRD Lombok Tengah",
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-white-200">
                        Digital Archive of Central Lombok DPRD
                        The Digital Archive application for the Central Lombok Regional House of Representatives (DPRD) was developed to accelerate the distribution of official information and documents, such as work invitations, meeting notes, and other formal correspondence. The system is structured hierarchically, enabling efficient document flow from leadership to field-level units. It aims to enhance coordination speed, transparency, and operational effectiveness within the regional legislative body.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/assets/images/dprd.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
    ];
  return (
    <div className="min-h-screen offerflow-x-hidden bg-[#19222D]">
        <SplashCursor />
        <div className="absolute top-0 left-0 right-0 button-0 w-full h-full">
            <Squares
                speed={0.5}
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#444A29'
                hoverFillColor='#1922D'
            />
        </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6">
              <div className="flex items-center h-screen">
                  <div className="flex flex-col gap-4">
                          <AnimatedContent
                              distance={150}
                              direction="horizontal"
                              reverse={false}
                              duration={1.2}
                              ease="bounce.out"
                              initialOpacity={0}
                              animateOpacity
                              scale={1.1}
                              threshold={0.2}
                              delay={0.8}
                              >
                              <div className="flex items-center gap-2">
                          <div className="text-2x1 text-white font-bold">I'm Ready For Job</div>
                              <RotatingText
                                  texts={['Web Development', 'Web Programing']}
                                  mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden
                       py-0.5 sm:py-1 justify-center rounded-lg text-2x1 font-bold inline-flex transition-all"
                                  staggerFrom={"last"}
                                  initial={{ y: "100%" }}
                                  animate={{ y: 0 }}
                                  exit={{ y: "-120%" }}
                                  staggerDuration={0.025}
                                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                  rotationInterval={2000}
                              />
                      </div>
                          </AnimatedContent>
                      <div className="flex flex-col items-start">
                          <SplitText
                              text="I'm Tri Yulianto"
                              className="text-6xl font-semibold text-start text-white"
                              delay={50}
                              ease="power3.out"
                              splitType="chars"
                              from={{ opacity: 0, y: 40 }}
                              to={{ opacity: 1, y: 0 }}
                              threshold={0.1}
                              rootMargin="-100px"
                              textAlign="center"
                          />
                          <SplitText
                              text="Full Stack Developer"
                              className="text-6xl font-semibold text-start text-[#C6F10E]"
                              delay={75}
                              ease="power3.out"
                              splitType="chars"
                              from={{ opacity: 0, y: 40 }}
                              to={{ opacity: 1, y: 0 }}
                              threshold={0.1}
                              rootMargin="-100px"
                              textAlign="center"
                          />
                      </div>
                      <BlurText
                          text="I'm a Full-Stack Product Designer and Frontend Developer from Indonesia with over 5 years of experience. I specialize in system analysis, UI/UX design, and leading cross-functional teams to deliver intuitive digital products. Skilled in PHP, Java Spring, JavaScript, and database design, I combine design thinking with solid coding practices to build efficient and scalable solutions. Currently leading product design in a tech company, while also taking freelance frontend projects."
                          delay={75}
                          animateBy="words"
                          direction="top"
                          className="text-xl mb-8 text-white"
                      />
                      <div className="fle">
                          <AnimatedContent
                              distance={150}
                              direction="horizontal"
                              reverse={false}
                              duration={2.5}
                              ease="bounce.out"
                              initialOpacity={0}
                              animateOpacity
                              scale={1.1}
                              threshold={0.2}
                              delay={0.8}
                          >
                              <a
                                  href="https://wa.me/6282339925042?text=Hi%2C%20I%27m%20interested%20in%20your%20consultation%20services."
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <GradientText
                                      colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]}
                                      animationSpeed={3}
                                      showBorder={true}
                                      className="px-7 py-4 rounded-lg border"
                                  >
                                      Consultation Now
                                  </GradientText>
                              </a>

                          </AnimatedContent>
                      </div>
                  </div>

              </div>

          </div>
          <div className="col-span-6">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>
        </div>
          <Timeline data={data} />
          <div className="flex flex-col items-center justify-center text-white h-screen space-y-6">
              <TrueFocus
                  sentence="Contact Me"
                  manualMode={false}
                  blurAmount={3}
                  borderColor="#C6F10E"
                  animationDuration={2}
                  pauseBetweenAnimations={1}
              />

              <div className="flex flex-col gap-3 items-center text-center">
                  {/* Email */}
                  <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#C6F10E]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m0 0l4 4 4-4m-4-4v8" />
                      </svg>
                      <a href="mailto:tri.yulianto.st@gmail.com" className="hover:underline">
                          tri.yulianto.st@gmail.com
                      </a>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#C6F10E]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm6.5-.75a1 1 0 110 2 1 1 0 010-2zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                      </svg>
                      <a href="https://instagram.com/thretink" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          @thretink
                      </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#C6F10E]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.2c-1 0-1.7-.8-1.7-1.8 0-1 .7-1.8 1.7-1.8s1.7.8 1.7 1.8c0 1-.7 1.8-1.7 1.8zm13.5 10.2h-3v-4.8c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.9h-3v-9h2.9v1.2h.1c.4-.7 1.5-1.5 3-1.5 3.2 0 3.8 2.1 3.8 4.8v4.5z"/>
                      </svg>
                      <a href="https://www.linkedin.com/in/tri-yulianto-77b10817b" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          linkedin.com/in/tri-yulianto
                      </a>
                  </div>
              </div>
          </div>



      </div>
    </div>
  );
}
