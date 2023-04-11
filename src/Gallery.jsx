import React, { useEffect, useState } from "react";
import { supabase } from "./client";
import ProductCard from "./CrewmateCard";

function Gallery() {
  const [crewName, setCrewName] = useState("");
  const [age, setAge] = useState("");
  const [speed, setSpeed] = useState("");
  const [crewmateItem, setProducts] = useState([]);

  const [fetchError, setFetchError] = useState(null);
  const [crewmates, setCrewmates] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const { data, error } = await supabase.from("Crewmates").select();
      if (error) throw error;
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div className="page-home">
      <h1>Crew Mates</h1>
      {fetchError && <p>{fetchError}</p>}
      {crewmateItem.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default Gallery;
