/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import { Link } from "react-router-dom";
import Error404 from "../../assets/error.png";
import "./error.scss";

function Error() {
  return (
    <div className="center">
      <img src={Error404} alt="Erreur 404" />
      <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner à la page d'acceuil</Link>
    </div>
  );
}

export default Error;
