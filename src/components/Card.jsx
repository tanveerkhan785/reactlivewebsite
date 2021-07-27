import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card mb-4">
          <img src={props.imgsrc} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-capitalize">
              {props.title}
            </h5>
            <p className="card-text py-2">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-outline-primary">
              Check Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
