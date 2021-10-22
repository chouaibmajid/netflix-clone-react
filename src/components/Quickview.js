import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import "./Quickview.scss";

function Quickview({ movie, clickpopup, bannerStyle, popup }) {
  return (
    <>
      {popup ? (
        <div className="popup">
          <div className="popup__banner" style={bannerStyle}>
            <div className="popup__content" >
              <div className="popup__title">
                {" "}
                {movie.title || movie.name || movie.original_title}
              </div>
              <p className="popup__decsription"> {movie.overview}</p>
              <button onClick={clickpopup}>
                {" "}
                <CancelIcon fontSize="large" />
              </button>
            </div>{" "}
          </div>{" "}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Quickview;
