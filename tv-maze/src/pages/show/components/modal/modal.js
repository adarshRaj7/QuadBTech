import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import React, { useState } from "react";
import SubmittedModal from "../submittedModal/submittedModal";
import { useNavigate } from "react-router-dom";

const MyModal = (props) => {
  const [bookingDetails, setBookingDetails] = useState({
    movieName: props.show.show.name,
    customerName: sessionStorage.getItem("name"),
    mobileNumber: sessionStorage.getItem("mobile"),
    seats: 1,
    day: "Select Day",
    time: "Select time",
    refreshments: false,
  });

  const navigate = useNavigate();

  console.log(props.show.show.schedule.time);
  const [submitted, setSubmitted] = useState(false);
  const toggle = () => {
    setSubmitted(!submitted);
  };

  const validate = () => {
    if (
      bookingDetails.customerName === "" ||
      bookingDetails.mobileNumber === "" ||
      bookingDetails.time === "Select time" ||
      bookingDetails.day === "Select Day"
    )
      return false;
    return true;
  };

  const handleSubmit = () => {
    sessionStorage.setItem("mobile", bookingDetails.mobileNumber);
    sessionStorage.setItem("name", bookingDetails.customerName);

    setSubmitted(true);
    console.log(bookingDetails);
    props.toggle();
    setTimeout(() => {
      setSubmitted(false);
      navigate("/");
      console.log("submit");
    }, 4000);
  };
  return (
    <div>
      <Modal
        style={{ maxWidth: "800px" }}
        isOpen={props.modal}
        toggle={props.toggle}
      >
        <ModalHeader toggle={props.toggle}>Book Tickets</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="movieName" sm={2}>
                Movie
              </Label>
              <Col sm={10}>
                <Input
                  id="movieName"
                  name="movieName"
                  type="text"
                  readOnly
                  defaultValue={bookingDetails.movieName}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="customerName" sm={2}>
                Name
              </Label>
              <Col sm={10}>
                <Input
                  id="customerName"
                  name="customerName"
                  placeholder="Enter Your Name"
                  type="text"
                  value={bookingDetails.customerName}
                  onChange={(e) => {
                    setBookingDetails((prev) => {
                      return {
                        ...prev,
                        customerName: e.target.value,
                      };
                    });
                  }}
                />
              </Col>
            </FormGroup>
            <Row>
              <Col sm={6}>
                <FormGroup row>
                  <Label for="mobileNumber" sm={4}>
                    Contact Number
                  </Label>
                  <Col sm={8}>
                    <Input
                      required
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="Enter Your Contact Number"
                      type="number"
                      value={bookingDetails.mobileNumber}
                      onChange={(e) => {
                        setBookingDetails((prev) => {
                          return {
                            ...prev,
                            mobileNumber: e.target.value,
                          };
                        });
                      }}
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup row>
                  <Label for="seats" sm={4}>
                    Select No. of Seats
                  </Label>
                  <Col sm={8}>
                    <Input
                      id="seats"
                      name="select"
                      type="select"
                      value={bookingDetails.seats}
                      onChange={(e) =>
                        setBookingDetails((prev) => {
                          return {
                            ...prev,
                            seats: e.target.value,
                          };
                        })
                      }
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <FormGroup row>
                  <Label for="day" sm={4}>
                    Select Day
                  </Label>
                  <Col sm={8}>
                    <Input
                      id="day"
                      name="select"
                      type="select"
                      value={bookingDetails.day}
                      onChange={(e) =>
                        setBookingDetails((prev) => {
                          return {
                            ...prev,
                            day: e.target.value,
                          };
                        })
                      }
                    >
                      <option>Select Day</option>
                      {props.show.show.schedule.days.map((day, index) => {
                        return <option key={index}>{day}</option>;
                      })}
                    </Input>
                  </Col>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup row>
                  <Label for="time" sm={4}>
                    Select Time
                  </Label>
                  <Col sm={8}>
                    <Input
                      id="time"
                      name="select"
                      type="select"
                      value={bookingDetails.time}
                      onChange={(e) =>
                        setBookingDetails((prev) => {
                          return {
                            ...prev,
                            time: e.target.value,
                          };
                        })
                      }
                    >
                      <option>Select time</option>
                      <option>{props.show.show.schedule.time}</option>
                    </Input>
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup row>
              <Label for="checkbox2" sm={2}>
                Refreshments
              </Label>
              <Col
                sm={{
                  size: 10,
                }}
              >
                <FormGroup check>
                  <Input
                    id="checkbox2"
                    type="checkbox"
                    value={bookingDetails.refreshments}
                    onChange={(e) => {
                      setBookingDetails((prev) => {
                        return {
                          ...prev,
                          refreshments: e.target.value,
                        };
                      });
                    }}
                  />{" "}
                  <Label check>Sure, I am interested in refreshments!</Label>
                </FormGroup>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit} disabled={!validate()}>
            Confirm Booking
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <SubmittedModal
        modal={submitted}
        bookingDetails={bookingDetails}
        toggle={toggle}
      />
    </div>
  );
};

export default MyModal;
