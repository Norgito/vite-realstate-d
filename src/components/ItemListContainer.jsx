import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, [idCategory]);

  return (
    <>
      {ItemList ? (
            <ItemList items={datos} />
      ) : (
        <>

            <p>CARGANDO</p>

        </>
      )}
    </>
  );
};

export default ItemListContainer;