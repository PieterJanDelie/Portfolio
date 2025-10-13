import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import ProjectCard from "../../components/Projectcard/Projectcard";
import "./Project.css";

const Project = () => {
  const projects = [
    /*{
      title: "VZW Dashboard",
      description: "Hier gaat momenteel het meeste van mijn vrije tijd naartoe. Dit project is voor de VZW in eerste instantie voor ticketregistratie + scanning. Dit wordt echter uitgebreid naar een volledig VZW dashboard. Dit dashboard zal de mogelijkheid bieden om ook kosten en extra inkomsten te monitoren per event. Dit platform zal verkocht worden aan steden en gemeentes. Zij zullen dit platform dan gratis kunnen aanbieden aan hun verenigingen. Want laat ons eerlijk zijn, VZW's verdienen toch alle hulp. Het zijn zulke mooie organisaties die zich inzetten voor de maatschappij en vaak met weinig middelen werken. Dit platform zal hen helpen om hun administratie te vereenvoudigen en een mooi overzicht bieden.",
      skills: ["Github.png", "React.png", "Node.png", "HTML.png"],
      status: "construction",
    },*/
    {
      title: "Circle (beta)",
      description: "Dit is een alles-in-één applicatie voor jouw vriendengroep, beschikbaar als zowel app als website. Elke groep kan de omgeving volledig personaliseren met extensies die passen bij hun eigen interesses en activiteiten. Zo kan een groep die graag uitgaat bijvoorbeeld drinkspelletjes toevoegen, terwijl een andere groep kiest voor de Mol-extensie. Op die manier krijgt elke vriendengroep een unieke ervaring die perfect aansluit bij hun stijl. Standaard bevat de applicatie een chatfunctie en een eventplanner die voor iedereen beschikbaar zijn. Daarnaast zijn er tal van uitbreidingsmogelijkheden, zoals een voetbalgok-extensie (zonder echt geld maar met opdrachten en muntjes), een FIFA-competitie, een darts-extensie, brainrotspelletjes, Chwazi en diverse drinkspelletjes. Ook zijn er enkele partygames zoals Brainrot en Randomizer. En dit is nog maar het begin, want er staan al veel nieuwe extensies gepland, waaronder een deelrekening (vergelijkbaar met Tricount), een Wukist-spelletje, Chwazi-uitbreidingen en nog veel meer.",
      skills: ["Github.png", "React Native.png", "firebase.png", "HTML.png"],
      link: ["https://circle-dun.vercel.app/"],
      images: [
        { src: "Circle/login.png", alt: "Login screen" },
        { src: "Circle/registreer.png", alt: "Register screen" },
        { src: "Circle/circleselection.png", alt: "Circle selection screen" },
        { src: "Circle/chat.png", alt: "Chat screen" },
        { src: "Circle/games.png", alt: "Games screen" },
        { src: "Circle/darts.png", alt: "Darts screen" },
        { src: "Circle/Voetbalgokken.png", alt: "Voetbalgokken screen" },
        { src: "Circle/FIFA.png", alt: "FIFA competitie screen" },
        { src: "Circle/Drankspelletjes.png", alt: "Drankspelletjes screen" },
        { src: "Circle/Drinkopoli.png", alt: "Drinkopoli screen" },
        { src: "Circle/Randomizer.png", alt: "Randomizer screen" },
        { src: "Circle/Brainrot.png", alt: "Brainrot screen" },
        { src: "Circle/event.png", alt: "Event screen" },
        { src: "Circle/instellingen.png", alt: "Instellingen screen" },
      ],
      status: "construction",
    },
    {
      title: "Tijl 801",
      description:
        "Deze website is ontworpen om de verhuur van appartement Tijl 801 in Nieuwpoort te bevorderen. Het appartement wordt momenteel verhuurd via de website van immokantoor Era. Vanwege bestaande contracten mag het appartement niet op andere platforms worden verhuurd. Daarom is er geen boekingssysteem op deze site geïntegreerd en zal er voor het huren van dit appartement worden doorverwezen naar Era. Er is samengewerkt met een fotograaf om de site van hoogwaardige foto's te voorzien. Om een zo breed mogelijk publiek aan te trekken is deze website beschikbaar in het Nederlands, Frans, Engels en het Duits.",
      skills: ["Github.png", "React.png", "HTML.png"],
      images: [
        { src: "Tijl0801/Homescherm.png", alt: "Homescherm" },
        { src: "Tijl0801/Location.png", alt: "Locatie pop up" },
        { src: "Tijl0801/Contacteer.png", alt: "Contacteerscherm" },
        { src: "Tijl0801/Activiteiten.png", alt: "Bezienswaardighedenscherm" },
        { src: "Tijl0801/ActiviteitPopUp.png", alt: "ActiviteitPopUp" },
        { src: "Tijl0801/Frans.png", alt: "Diksmuide Pop up in het Frans" },
      ],
      link: ["https://tijl0801.be/"],
    },
    {
      title: "Portfolio",
      description:
        "Deze website fungeert als mijn online CV. U bevindt zich momenteel op deze site, dus kijk gerust rond. De website is ontwikkeld met React, de programmeertaal waarin ik de meeste ervaring heb. Na jaren van experimenteren, vond ik React de meest gebruiksvriendelijke, snelle en duidelijke taal om in te programmeren.",
      skills: ["Github.png", "React.png", "HTML.png"],
      images: [
        { src: "Portfolio/Project.png", alt: "Project" },
        { src: "Portfolio/AboutMe.png", alt: "About me" },
        { src: "Portfolio/Timeline.png", alt: "Tijdlijn" },
        { src: "Portfolio/Contact.png", alt: "Contact" },
      ],
      github: "https://github.com/PieterJanDelie/portal",
    },
    {
      title: "Filou Oostende Portal",
      description:
        "Dit project is een portaal ontwikkeld voor Filou Oostende als onderdeel van mijn stage en bachelorproef voor de opleiding Toegepaste Informatica, specialisatie software development, aan de hogeschool Vives te Kortrijk. De entertainmentsector is zeer concurrerend. Het wordt steeds moeilijker om professioneel te blijven opereren. Veel aandacht gaat naar grote evenementen en artiesten, terwijl ook vrijwilligers veel evenementen organiseren. Daarom is het belangrijk om fans goed te entertainen zodat ze terugkomen. Dit portaal biedt unieke entertainmentopties die andere clubs niet hebben, wat zorgt voor een extra ervaring voor de fans. Dit helpt de Oostendse basketbalploeg om zich te onderscheiden. Het portaal bevat informatie over het eerste team, foto's van spelers, de kalender, stand, uitslagen, en unieke BCO-spelletjes die alleen hier te spelen zijn en gelinkt zijn aan de basketbalclub. De applicatie is ontwikkeld voor een groot touchscreen en is zo ontworpen dat er niet gescrold hoeft te worden. Het werkt het best in fullscreen. De schermen omvatten onder andere het homescherm, teamgedeelte, kalender, stand, uitslagen, en teaminformatie.",
      skills: ["Github.png", "Flask.png", "Python.png", "HTML.png"],
      images: [
        { src: "FilouOostende/Homescherm.png", alt: "Homescherm" },
        { src: "FilouOostende/Team.png", alt: "Team" },
        { src: "FilouOostende/Stand.png", alt: "Stand" },
        { src: "FilouOostende/Kalender.png", alt: "Kalender" },
        { src: "FilouOostende/Uitslagen.png", alt: "Uitslagen" },
        { src: "FilouOostende/Recensie.png", alt: "Recensie" },
        { src: "FilouOostende/Gamestart.png", alt: "Startscreen of a game" },
        {
          src: "FilouOostende/Endgame.png",
          alt: "Scherm na eindigen van een game",
        },
        { src: "FilouOostende/Quiz.png", alt: "Quiz" },
        { src: "FilouOostende/Memory.png", alt: "Memory" },
        { src: "FilouOostende/Lingo.png", alt: "Lingo" },
        { src: "FilouOostende/QuesTransfer.png", alt: "Raad de transfer" },
        { src: "FilouOostende/Rebus.png", alt: "Rebus" },
        { src: "FilouOostende/Would_you_rather.png", alt: "Wat wil je liever" },
        { src: "FilouOostende/Shotgame.png", alt: "Shotgame" },
      ],
      github: "https://github.com/PieterJanDelie/portal",
    },
    {
      title: "Custom React CLI",
      description:
        "Tijdens dit project maakte ik mijn eigen CLI-commando's voor het React-framework. Deze commando's zorgen ervoor dat ik sneller kan opstarten en developpen.",
      skills: ["Github.png", "React.png", "Node.png", "Javascript.png"],
      github: "https://github.com/PieterJanDelie/Custom-CLI",
    },
  ];

  const [openProject, setOpenProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <DefaultLayout>
      <div className="hero">
        <h1>Project</h1>
        <p>
          Dit zijn mijn grootste projecten. Op elk project ben ik trots op het
          bereikte resultaat.
        </p>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isOpen={openProject === index}
            onToggleProject={() => toggleProject(index)}
            onOpenModal={openModal}
          />
        ))}
      </div>

      {modalImage && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
            <img
              src={require(`../../assets/Images/Projects/${modalImage.src}`)}
              alt={modalImage.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Project;
