import React, { useState, useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Stack from "../../components/Stack/Stack";
import "./AboutMe.css";
import DropdownMenu from "../../components/Dropdownmenu/Dropdownmenu";
import AboutSection from "../../components/Aboutsection/Aboutsection";
import VideoEmbed from "../../components/Videoembed/Videoembed";

const AboutMe = () => {
  const images = [
    "HouseOfAI.jpg",
    "Zonsondergang.jpg",
    "PE3.jpeg",
    "Matties.jpeg",
    "basket.jpg",
    "groupHD.jpeg",
    "Proclamatie.jpg",
  ].map((img) => ({ id: img, img: `AboutMe/${img}` }));

  const [cardDimensions, setCardDimensions] = useState({ width: 600, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth < 400 ? 100 : window.innerWidth < 550 ? 200 : window.innerWidth < 750 ? 400 : 600;
      const height = width * 0.67;
      setCardDimensions({ width, height });
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <DefaultLayout>
      <section className="hero">
        <div className="hero-content">
          <img
            src={require("../../assets/Images/AboutMe/Portretfoto.png")}
            alt="Portretfoto"
            className="portrait"
          />
          <div>
            <p>Hallo! Ik ben Pieter-Jan Delie, een gepassioneerde softwareontwikkelaar en AI-enthousiasteling.</p>
            <DropdownMenu />
          </div>
        </div>
      </section>

      <section className="about-content">
        <AboutSection
          title="Wie ben ik?"
          content="Hallo! Ik ben Pieter-Jan, een student softwaredevelopment die ervan geniet om projecten van concept tot implementatie uit te werken. Mijn ervaring ligt voornamelijk in React, Java en C#, maar ik sta altijd open voor nieuwe technologieën. Vaak programmeer ik tijdens het kijken naar een aflevering van FC De Kampioenen. Hieronder mijn favoriete aflevering."
        />
        <VideoEmbed src="https://www.youtube.com/embed/cuW9ZpoVNgs?si=vG9w6MBx38KukmDJ" />
        
        <AboutSection
          title="Opleiding"
          content="Momenteel volg ik de Banaba International Management en de Bachelor Toegepaste Informatica Artificiële Intelligentie. In 2024 studeerde ik af in de Bachelor Toegepaste Informatica Software Development aan Hogeschool VIVES."
        />
        
        <AboutSection
          title="Werkervaring"
          content="Tijdens mijn loopbaan heb ik als student gewerkt bij bedrijven zoals Skyline Communications, Barco en Filou Oostende. Ik heb diverse applicaties gebouwd, variërend van mail-analysetools tot interactieve gamecenters (zie ook de pagina projecten)."
        />

        <section className="sports-section">
          <h2>Vrije tijd</h2>
          <p>Naast mijn passie voor programmeren ben ik een grote sportfan: voetbal, basketbal, rugby, ... Ik speel niet alleen zelf, maar coach ook, zodat ik mijn spelplezier kan overbrengen op opkomend talent.</p>
          <div className="sports-image">
            <Stack
              className="basket-image"
              randomRotation
              sensitivity={180}
              cardsData={images}
              sendToBackOnClick
              cardDimensions={cardDimensions}
            />
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
};

export default AboutMe;
