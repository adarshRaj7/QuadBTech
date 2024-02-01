import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const SubmittedModal = (props) => {
  const navigate = useNavigate();
  const handleClose = () => {
    props.toggle();
    navigate("/");
    // setTimeout(() => {
    // }, 5000);
  };
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Booking Confirmed</ModalHeader>
        <ModalBody>
          Congratulations! Booking confirmed for{" "}
          <b>{props.bookingDetails.seats}</b> seat(s) for{" "}
          <b>{props.bookingDetails.movieName}</b> in the name of{" "}
          <b>{props.bookingDetails.customerName}</b> for{" "}
          <b>{props.bookingDetails.time}</b> on{" "}
          <b>{props.bookingDetails.day}</b>.
          {props.bookingDetails.refreshments ? (
            <div>You have opted for refreshments</div>
          ) : (
            <div>You did not opt for refreshments.</div>
          )}
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={handleClose}>
            Finish
          </Button>{" "}
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default SubmittedModal;
