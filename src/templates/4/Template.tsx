import React, { useState, useEffect } from "react";
import { useWindowScroll } from "@uidotdev/usehooks";
import HeaderMenuRightLogoLeft from "../../ui/headers/HeaderMenuRightLogoLeft";
import HeroImgBackground from "../../ui/heros/HeroImgBackground";
import BasicSection from "../../ui/marketing/BasicSection";
import SimpleGallery from "../../ui/elements/galeries/SimpleGallery";
import Testimonial from "../../ui/marketing/testimonials/Testimonial";
import FooterWithCatchphrase from "../../ui/footers/FooterWithCatchphrase";

import Card from "../../ui/elements/Card";

interface OpeningHour {
  day: string;
  open: string;
  close: string;
}

interface OpeningHoursProps {
  hours: OpeningHour[];
}

const TemplateRestaurant: React.FC<OpeningHoursProps> = () => {
  const [{ y }] = useWindowScroll();
  const [headerBackground, setHeaderBackground] = useState(false);

  // not optimized but works
  useEffect(() => {
    if (y && y > 50) {
      // You can adjust the threshold as needed
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  }, [y]);

  const openingHours = [
    { day: "Lundi", hours: "Fermé" },
    { day: "Mardi", open: "12h00 - 14h00", close: "19h00 - 21h00" },
    { day: "Mercredi", open: "11h00 - 14h30", close: "19h00 - 23h00" },
    { day: "Jeudi", open: "12h00 - 14h00", close: "19h00 - 22h00" },
    { day: "Vendredi", open: "12h00 - 14h00", close: "19h00 - 23h00" },
    { day: "Samedi", open: "12h00 - 14h00", close: "19h00 - 21h00" },
    { day: "Dimanche", open: "12h00 - 14h00", close: "19h00 - 21h00" },
  ];

  return (
    <div>
      <HeaderMenuRightLogoLeft
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          background: headerBackground ? "#191e24" : "transparent",
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          transition: "background-color 0.3s",
        }}
      />
      <HeroImgBackground
        sub="Depuis 1904 !"
        title="Crêperie Trésor Breton"
        btnContent="Découvrir notre carte"
      />
      <BasicSection title="Nos horaires d'ouverture" description="">
        <ul>
          {openingHours.map((hour) => (
            <li key={hour.day} className="flex justify-start">
              <span className="font-bold w-24">{hour.day} : </span>
              <span>
                {hour.hours ? hour.hours : `${hour.open} / ${hour.close}`}
              </span>
            </li>
          ))}
        </ul>
      </BasicSection>

      <SimpleGallery
        title="Nos spécialités"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
        images={[
          "https://picsum.photos/800",
          "https://picsum.photos/801",
          "https://picsum.photos/802",
          "https://picsum.photos/803",
          "https://picsum.photos/804",
          "https://picsum.photos/805",
          "https://picsum.photos/806",
          "https://picsum.photos/807",
        ]}
      />

      <Testimonial
        title="C'est vous qui le dites."
        description="Sans vous nous ne serions rien."
      >
        <Card
          name="jiko l'homo"
          job="gay pornstar"
          description="Test description lorem ipsoum description lorem ipsoum lorem ipsoum"
        />

        {/* second card */}
        <Card name="viko l'homo" job="gay pornstar" />

        {/* third card */}
        <Card name="polo l'homo" job="dark pornstar" />
      </Testimonial>

      <FooterWithCatchphrase
        catchphrase="On se donne rendez-vous autour d'une authentique galette Bretonne ?"
        btnContent="Réserver une table"
        center
      />
    </div>
  );
};

export default TemplateRestaurant;
