import React, { useEffect, useState } from "react";
import { supabase } from "./client";

function Gallery() {
  const [fetchError, setFetchError] = useState(null);
  const [crewmates, setCrewmates] = useState(null);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from("Crewmates").select();
      if (error) {
        setFetchError("Could not fetch the crewmates");
        console.log(error);
      }
      if (data) {
        setCrewmates(data);
      }
    };
    fetchCrewmates();
  }, []);

  return (
    <div className="page-home">
      <h1>Collection</h1>
      {fetchError && <p>{fetchError}</p>}
      {crewmates && (
        <div className="crewmates">
          {crewmates.map((crewmate) => (
            <div>
              <p>Name: {crewmate.crewName}</p>
              <p>Speed: {crewmate.speed}</p>
              <p>Age: {crewmate.age}</p>
              <br />
              <button style={{ backgroundColor: "blue" }} type="button">
                Edit
              </button>
              <button style={{ backgroundColor: "plum" }} type="button">
                Delete
              </button>
              <br />
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
