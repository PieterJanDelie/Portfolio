import React from "react";
import PaidIcon from "@mui/icons-material/Paid";
import ComputerIcon from "@mui/icons-material/Computer";
import SchoolIcon from "@mui/icons-material/School";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./Timeline.css";

const Timeline = () => {
  return (
    <VerticalTimeline animate={true}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work tobefinished"
        date="September 2025"
        icon={<PaidIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Afgestudeerd: Banaba International Management
        </h3>
        <p>Vives</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work tobefinished"
        date="Augustus 2025"
        icon={<PaidIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Afgestudeerd: Artificiële Intelligentie
        </h3>
        <p>Vives</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juli 2025"
        icon={<PaidIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Start: Banaba International Management
        </h3>
        <p>Vives</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juni 2024"
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Afgestudeerd: Toegepaste Informatica - Software development
        </h3>
        <p>Vives</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Maart 2024 - juli 2024"
        icon={<SportsBasketballIcon />}
      >
        <h3 className="vertical-timeline-element-title">Stage</h3>
        <p>Filou Oostende</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juni 2023 - juli 2023"
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Honours degree</h3>
        <p>Vives</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="juni 2024 - augustus 2024"
        icon={<ComputerIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Student Software Developer bij Skyline Communications
        </h3>
        <p>Skyline Communication</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juni 2023 - juli 2023"
        icon={<ComputerIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Student Software Developer bij Skyline Communications
        </h3>
        <p>Skyline Communication</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juli 2022"
        icon={<ComputerIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Student Software Developer bij Barco
        </h3>
        <p>Barco</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juni 2022 - Juli 2022"
        icon={<ComputerIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Student Software Developer bij Skyline Communications
        </h3>
        <p>Skyline Communication</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Februari 2022"
        icon={<ComputerIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Start: Toegepaste Informatica - Artificiële Intelligentie
        </h3>
        <p>Vives</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oktober 2021"
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Behaald: Postman API Fundamentals Student Expert
        </h3>
        <p>Postman</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juli 2021"
        icon={<SportsBasketballIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Behaald: Initiator Basketbal
        </h3>
        <p>Trainerschool Vlaanderen</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2020"
        icon={<ComputerIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Start: Toegepaste Informatica - Software development
        </h3>
        <p>Vives</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juni 2020"
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Behaald: diploma secundair onderwijs Boekhouden-Informatica
        </h3>
        <p>Sgsintpaulusschool campus Hemelvaart</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Juli 2018 - augustus 2020"
        icon={<SportsKabaddiIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Animator Speelpleinwerking
        </h3>
        <p>Speelplein Desselgem</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2005 - juni 2014"
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Lager onderwijs</h3>
        <p>SBS Desselgem</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="27 Mei 2002"
        icon={<PregnantWomanIcon />}
      >
        <h3 className="vertical-timeline-element-title">Begin van mijn reis</h3>
        <p>Kortrijk</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
