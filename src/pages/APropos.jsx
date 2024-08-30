// @ts-nocheck
import Montagne from "../assets/montagne.png";
import Collapsible from "../components/collapsible/Collapsible";

function APropos() {
  return (
    <div className="ctn_a-propos">
      <div className="img_banner_apropos">
        <img src={Montagne} alt="Montagne et forêt" className="img_paysage" />
      </div>
      <div className="desc">
        <Collapsible key="1" label="Fiabilité">
          <p className="desc_p">En toute tranquilité</p>
        </Collapsible>
      </div>
    </div>
  );
}

export default APropos;
