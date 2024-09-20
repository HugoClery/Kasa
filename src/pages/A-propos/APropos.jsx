/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import Montagne from "../../assets/montagne.png";
import Collapsible from "../../components/collapsible/Collapsible";
import "./a-propos.scss";

function APropos() {
  return (
    <div className="ctn_a-propos">
      <div className="img_banner_apropos">
        <img src={Montagne} alt="Montagne et forêt" className="img_paysage" />
      </div>
      <div className="desc">
        <Collapsible key="1" label="Fiabilité">
          <p className="desc_p">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapsible>
        <Collapsible key="2" label="Respect">
          <p className="desc_p">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapsible>
        <Collapsible key="3" label="Service">
          <p className="desc_p">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapsible>
        <Collapsible key="4" label="Sécurité">
          <p className="desc_p">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapsible>
      </div>
    </div>
  );
}

export default APropos;
