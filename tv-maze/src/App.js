import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import { useEffect, useState } from "react";
import axiosInstance from "./services/axios";
import Show from "./pages/show/show";

function App() {
  
  sessionStorage.setItem("name", "");
  sessionStorage.setItem("mobile", "");
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axiosInstance.get();
      if (res.status === 200) {
        const {show} = res.data;
        setAllData(res.data);
      }
    }
    fetchData();
  }, []);

  const renderShow = ({ match }) => {
    console.log("match");
    return (
      <Show
        show={
          allData.filter(
            (show) => show.show.id === parseInt(match.params.showId, 10)
          )[0]
        }
      ></Show>
    );
  };

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" exact element={<Home allData={allData} />}></Route>
        <Route path="/:showId" element={renderShow}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home allData={allData} />}>
          <Route path="/:showId" element={<Show allData={allData}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
