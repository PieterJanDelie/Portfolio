import React, { useState, useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./AboutMe.css";
import Stack from "../../components/Stack/Stack";

const AboutMe = () => {
  const images = [
    { id: 1, img: "AboutMe/HouseOfAI.jpg" },
    { id: 2, img: "AboutMe/Zonsondergang.jpg" },
    { id: 3, img: "AboutMe/PE3.jpeg" },
    { id: 4, img: "AboutMe/Matties.jpeg" },
    { id: 5, img: "AboutMe/basket.jpg" },
    { id: 6, img: "AboutMe/groupHD.jpeg" },
    { id: 7, img: "AboutMe/Proclamatie.jpg" },
  ];

  const [cardDimensions, setCardDimensions] = useState({
    width: 600,
    height: 400,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 500) {
        setCardDimensions({ width: 200, height: 120 });
      } else if (window.innerWidth < 700) {
        setCardDimensions({ width: 400, height: 240 });
      } else {
        setCardDimensions({ width: 600, height: 400 });
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <DefaultLayout>
      <div className="hero">
        <div className="hero-content">
          <img
            src={require(`../../assets/Images/AboutMe/Portretfoto.png`)}
            alt="Portretfoto"
            className="portrait"
          />
          <div>
            <p>
              Hallo! Ik ben Pieter-Jan Delie, een gepassioneerde
              softwareontwikkelaar en AI-enthousiasteling.
            </p>
            <div className="dropdown">
              <button className="dropbtn">Download CV</button>
              <div className="dropdown-content">
                <a
                  href="../../assets/Docs/CV/CV_Pieter-Jan_Delie.pdf"
                  target="_blank"
                >
                  CV
                </a>
                <a
                  href="../../assets/Docs/CV/LinkedIn_Pieter-Jan_Delie.pdf"
                  target="_blank"
                >
                  LinkedIn CV
                </a>
                <a
                  href="../../assets/Docs/CV/CV_Creative_Pieter-Jan_Delie.pdf"
                  target="_blank"
                >
                  Creatieve CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-content">
        <section>
          <h2>Wie ben ik?</h2>
          <p>
            Ik heb een sterke passie voor softwareontwikkeling en geniet ervan
            om projecten van concept tot implementatie uit te werken. Mijn
            ervaring ligt voornamelijk in React, Java en C#, maar ik sta altijd
            open voor nieuwe technologieën. Vaak programmeer ik terwijl ik een
            aflevering van FC De Kampioenen kijk.
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/cuW9ZpoVNgs?si=vG9w6MBx38KukmDJ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section>
          <h2>Opleiding</h2>
          <p>
            Momenteel volg ik de Banaba International Management en de Bachelor
            Toegepaste Informatica Artificiële Intelligentie. In 2024 studeerde
            ik af in de Bachelor Toegepaste Informatica Software Development aan
            Hogeschool VIVES.
          </p>
        </section>

        <section>
          <h2>Werkervaring</h2>
          <p>
            Tijdens mijn loopbaan heb ik als student gewerkt bij bedrijven zoals
            Skyline Communications, Barco en Filou Oostende. Ik heb diverse
            applicaties gebouwd, variërend van mail-analysetools tot
            interactieve gamecenters (zie ook de pagina projecten).
          </p>
        </section>

        <section className="sports-section">
          <h2>Vrije tijd</h2>
          <p>
            Naast mijn passie voor programmeren ben ik een grote sportfan. Ik
            kijk graag naar voetbal, basketbal en rugby. Ik speel niet alleen
            zelf, maar coach ook, zodat ik mijn spelplezier kan overbrengen op
            opkomend talent.
          </p>
          <div className="sports-image">
            <Stack
              className="basket-image"
              randomRotation={true}
              sensitivity={180}
              cardsData={images}
              sendToBackOnClick={true}
              cardDimensions={cardDimensions}
            />
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default AboutMe;
