/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
// @ts-nocheck

import { useParams } from "react-router-dom";
import tableau from "../../data/data.json";
import Error from "../Error/Error.jsx";
import DataLogement from "../../components/DataLogement/DataLogement.jsx";
import "./logement.scss";

function Logement() {
  const { logementId } = useParams();
  const logement = tableau.find((logement) => {
    return logement.id === logementId;
  });
  if (!logement) {
    return <Error />;
  }

  return <DataLogement {...logement} />;
}

export default Logement;
