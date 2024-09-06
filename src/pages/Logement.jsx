/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// @ts-nocheck

import { useParams } from "react-router-dom";
import tableau from "../data/data.json";
import Carousel from "../components/Carousel/Carousel.jsx";
import Collapsible from "../components/collapsible/Collapsible";
import Rating from "../components/Rating/Rating.jsx";

function DataLogement({
  pictures,
  title,
  location,
  rating,
  tags,
  description,
  equipments,
  host,
}) {
  return (
    <div className="logement">
      <Carousel data={pictures} />

      <div className="logement_flex">
        <div className="logement_title">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <div className="logement_tag_flex">
            {tags.map((tag, index) => (
              <li key={index} className="logement_li_flex">
                {tag}
              </li>
            ))}
          </div>
        </div>
        <div className="logement_host">
          <span className="logement_host_flex">
            <p align="right">{host.name}</p>
            <img
              className="logement_host_round"
              src={host.picture}
              alt={host.name}
            />
          </span>
          <Rating data={rating} />
        </div>
      </div>

      <div className="logement_desc">
        <div className="logement_desc_col margin">
          <Collapsible label="Description">
            <p className="desc_p">{description}</p>
          </Collapsible>
        </div>
        <div className="logement_desc_col">
          <Collapsible label="Équipements">
            <p className="desc_p">
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </p>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}

function Logement() {
  const { logementId } = useParams();
  const logement = tableau.find((logement) => {
    return logement.id === logementId;
  });
  // if (!logement) {
  //   return <Error />;
  // }

  return <DataLogement {...logement} />;
}

export default Logement;
