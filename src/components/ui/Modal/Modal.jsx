import React from "react";
import "./modal.css";

const Modal = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper" >
      <div className="single__modal ">
        <span className="close__modal " onClick={() => setShowModal(false)}>
          <i className="ri-close-fill"></i>
        </span>

        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div className="input__item mb-3">
          <h6>Enter Quantity 7 available</h6>
          <input type="number" placeholder="Enter Quantity" />
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 mt-5">You must bid at least</p>
          <span className="money">5.9 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 mt-2">Service Fee</p>
          <span className="money">5.9 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 mt-2">Total Bid Amount</p>
          <span className="money">5.9 ETH</span>
        </div>
        <button className="place__bid-btn">place a Bid</button>
      </div>
    </div>
  );
};

export default Modal;
