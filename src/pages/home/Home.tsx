import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../../assets/ChatGPT_logo.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

export const Home = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      const text = headingRef.current.textContent;

      if (text) {
        headingRef.current.innerHTML = text
          .split("")
          .map((char) => `<span class="char">${char}</span>`)
          .join("");

        const textWhiteSpan = headingRef.current.querySelectorAll("span");
        const lastPartLength = "grâce à l'IA".length;

        for (let i = textWhiteSpan.length - lastPartLength; i < textWhiteSpan.length; i++) {
          textWhiteSpan[i].classList.add("text-white");
        }

        const chars = headingRef.current.querySelectorAll(".char");
        gsap.from(chars, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
        });
      }
    }
  }, []);

  return (
  <div className="m-10 mt-20 md:m-20 relative flex flex-col justify-between h-[80vh]">
    <h1 ref={headingRef} className="font-inter font-bold text-6xl w-[80vh]">
      Simplifiez la création de votre entreprise <span> <br />grâce à l'IA</span>
    </h1>
    <img 
      src={logo} 
      alt="logo" 
      className="mt-5 rounded-lg absolute right-[-210px] top-20 md:top-10 md:right-0 md:w-[50vh]" 
    />
    <div className="flex justify-between items-end md:mb-40 md:w-2/3 z-10">
      <p className="flex-grow">
        Notre agent conversationnel vous guide simplement à chaque étape <span className="font-bold">de la création à la gestion de votre entreprise</span>, en posant des questions adaptées à votre profil pour <span className="font-bold">choisir le bon statut</span> et remplir vos démarches, le tout depuis votre mobile.
      </p>
      <Link to={'/ia'}>
        <div className=" px-6 py-4 bg-white ml-16 flex-shrink-0 text-sm rounded-lg flex flex justify-between items-end">
          Commencer dès maintenant
          <FaArrowRight className="w-6 mb-1" />
        </div>
      </Link>
    </div>
  </div>
  );
};
