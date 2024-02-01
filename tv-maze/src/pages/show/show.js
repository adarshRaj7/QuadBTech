import React, { useState } from "react";
import { useParams } from "react-router-dom";
import defaultImage from "../../assets/default-image.png";
import "./show.css";
import { Badge, Button } from "reactstrap";
import MyModal from "./components/modal/modal";

const Show = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const { showId } = useParams();
  const renderStars = (rating) => {
    let list = [];
    let i = 1;
    for (i = 1; i <= rating; i++) {
      list.push(
        <svg
          key={i}
          className="stars"
          viewBox="0 0 24 24"
          fill="#fff700"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fbff00"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
              stroke="#fff700"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );
    }
    if (i - 1 < rating) {
      list.push(
        <svg
          key={i}
          className="stars"
          viewBox="0 0 24 24"
          fill="#fff700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M8.30595 19.371L12.0008 16.7999L12.0008 4.44753V4.44752C12.0008 4.18078 12.0008 4.0474 11.9674 4.01758C11.9387 3.99199 11.8979 3.98509 11.8624 3.99986C11.821 4.01705 11.7772 4.14304 11.6897 4.395L9.94998 9.39985C9.8841 9.58938 9.85116 9.68414 9.7918 9.75471C9.73936 9.81706 9.67249 9.86564 9.597 9.89625C9.51154 9.93089 9.41123 9.93294 9.21063 9.93702L5.26677 10.0174C4.56191 10.0318 4.20949 10.0389 4.06884 10.1732C3.94711 10.2894 3.892 10.459 3.92218 10.6246C3.95706 10.8158 4.23795 11.0288 4.79975 11.4547L7.94316 13.8379C8.10305 13.9591 8.183 14.0197 8.23177 14.098C8.27486 14.1671 8.3004 14.2457 8.30618 14.327C8.31272 14.419 8.28367 14.515 8.22556 14.707L7.08328 18.4827C6.87913 19.1575 6.77706 19.4949 6.86127 19.6702C6.93416 19.8218 7.07846 19.9267 7.24523 19.9491C7.43793 19.9751 7.72727 19.7737 8.30595 19.371Z"
              stroke="#fff700"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );
    }
    return <div key={i}>{list}</div>;
  };

  return props.allData.map((show, index) => {
    if (show.show.id === Number(showId)) {
      return (
        <div className="outer" key={index}>
          <div className="inner">
            {show.show.image ? (
              <img
                alt="Sample"
                style={{ borderRadius: "5px" }}
                src={show.show.image.original}
              />
            ) : (
              <img
                alt="Sample"
                style={{
                  height: "400px",
                  marginLeft: "20px",
                  marginTop: "20px",
                }}
                src={defaultImage}
              />
            )}
            <div className="info">
              <div className="heading">
                {show.show.url ? (
                  <a className="link" href={show.show.url}>
                    {show.show.name}
                  </a>
                ) : (
                  <div href={show.show.url}>{show.show.name}</div>
                )}
              </div>
              <div className="mb-2 text-muted" tag="h5">
                {show.show.genres.join(",")}
              </div>
              <div>TVMaze ID: {show.show.id}</div>
              {show.show.status === "Running" ? (
                <Badge pill color="success">
                  Running
                </Badge>
              ) : show.show.status === "Ended" ? (
                <Badge color="danger" pill>
                  Ended
                </Badge>
              ) : (
                <Badge color="warning" pill>
                  In Development
                </Badge>
              )}
              <div style={{ display: "flex", alignItems: "center" }}>
                Rating:
                {show.show.rating.average ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {renderStars(show.show.rating.average)}(
                    {show.show.rating.average})
                  </div>
                ) : (
                  <div>Not Available</div>
                )}
              </div>
              {show.show.type}, {show.show.language}
              {show.show.premiered ? (
                <div>Premiered: {show.show.premiered}</div>
              ) : (
                <></>
              )}
              {show.show.ended ? <div>Ended: {show.show.ended}</div> : <></>}
              {show.show.network ? (
                <div>
                  Network: {show.show.network.name},{" "}
                  {show.show.network.country.timezone},{" "}
                  {show.show.network.country.name}
                </div>
              ) : (
                <></>
              )}
              <div className="buttons">
                <Button onClick={toggle} className="my-button" color="warning">
                  Book Tickets
                </Button>
                {show.show.officialSite ? (
                  <Button
                    href={show.show.officialSite}
                    style={{ marginLeft: "10px" }}
                    className="my-button"
                    color="warning"
                  >
                    Watch Online
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <h2>Summary:</h2>
          <div dangerouslySetInnerHTML={{ __html: show.show.summary }} />
          <MyModal modal={modal} toggle={toggle} show={show} />
        </div>
      );
    }
    return null;
  });
};

export default Show;
