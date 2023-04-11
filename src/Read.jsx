import React, { useState, useEffect } from "react";
import { supabase } from "./client";

function Read() {
  const [fetchError, setFetchError] = useState(null);
  const [crewMates, setCrewMates] = useState(null);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from("crewmates").select();
      if (error) {
        setFetchError("Could not fetch the crewmates");
        console.log(error);
      }
      if (data) {
        setCrewMates(data);
        setFetchError(null);
      }
    };
  }, []);
  return (
    <div className="home-crewmates">
      {fetchError && <p>{fetchError}</p>}
      {crewMates && (
        <div className="crewmates">
          {crewMates.map((crewmate) => (
            <p>{crewmate.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}
export default Read;
