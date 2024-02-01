import React from "react";
import "./home.css";
import defaultImage from "../../assets/default-image.png";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import {
  Link,
  Navigate,
  Outlet,
  useNavigate,
  useOutlet,
} from "react-router-dom";

const Home = (props) => {
  console.log(props)
  const outlet = useOutlet();
  const navigate = useNavigate();
  const NavigateToShow = (prop) => {
    console.log(prop);
    // navigate(`/${props.id}`)
  };
  return (
    <div>
      <Navbar className="navbar">
        <NavbarBrand href="/">TVMaze</NavbarBrand>
      </Navbar>
      {outlet ? (
        outlet
      ) : (
        <div className="main">
          {props.allData.map(({show}, index) => {
            return (
              <Card
                className="card"
                style={{
                  width: "18rem",
                }}
                key={index}
              >
                {show.image ? (
                  <img
                    alt="Sample"
                    style={{ height: "400px" }}
                    src={show.image.medium}
                  />
                ) : (
                  <img alt="Sample" style={{ height: "400px" }} src={defaultImage} />
                )}
                <CardBody>
                  <CardTitle tag="h5">{show.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {show.genres.join(',')}
                  </CardSubtitle>
                  <div>
                    {show.rating.average ? (
                      <CardText>Rating: {show.rating.average}</CardText>
                    ) : (
                      <br />
                    )}
                    {show.premiered ? (
                      <CardText>Premiered: {show.premiered}</CardText>
                    ) : (
                      <br />
                    )}
                    {show.type}, {show.language}
                  </div>
      
                  <Link to={`/${show.id}`}>
                    <Button>Details</Button>
                  </Link>
                </CardBody>
              </Card>
            );
          })}
        </div>
      )}
      {/* <Outlet /> */}
    </div>
  );
};

export default Home;
