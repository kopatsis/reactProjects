import React from "react";
import { useNavigate } from "react-router-dom";

const CharStatus = () => {
  const navigate = useNavigate();

  return (
    <div className="popup-outer">
      <div className="popup-inner">
        <button onClick={() => navigate("/game")}>X Close</button>
        <div>Have you found these characters?</div>
        <div>
          <div>
            {/* EACH IMG */}
            <div>The Armored Titan</div>
            <div>Classification: Easy</div>
            <div>Staus: Not found</div>
          </div>
          <div>
            {/* EACH IMG */}
            <div>Catbus</div>
            <div>Classification: Medium</div>
            <div>Staus: Not found</div>
          </div>
          <div>
            {/* EACH IMG */}
            <div>Johnny Bravos</div>
            <div>Classification: Difficult</div>
            <div>Staus: Not found</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharStatus;
