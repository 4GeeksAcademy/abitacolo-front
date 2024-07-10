import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderHome from "/src/components/HeaderHome.jsx";
import FooterHome from "../components/FooterHome";
import Filters from "../components/Filters";
import Card from "../components/Card";
import { Context } from "../context/appContext";

function App() {
  const { store, actions } = useContext(Context);

  return (
    <>
      {/* <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faUser} /> */}
      <div className="bg-gray-300 px-5 lg:px-20 py-10">
        <div className=" max-xl:hidden">
          <HeaderHome />
        </div>
        <div className="xl:hidden">
            <button className="bg-gray-400 p-2 rounded">Filters</button>
          </div>
        <div className="flex mt-14 max-xl:justify-center">
          <div className="max-xl:hidden">
            <Filters />
          </div>

          <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-y-4 gap-x-24 xl:gap-x-32  justify-items-stretch">
            {store.muebles.map((mueble) => ( 
              <Card
                key={mueble.id}
                categoria={mueble.categoria}
                color={mueble.color}
                disponibles={mueble.disponibilidad}
              />
            ))}
          </div>
        </div>
        <FooterHome />
      </div>
    </>
  );
}
export default App;