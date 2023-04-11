import React from "react";

function Up() {
  const [crewName, setCrewName] = useState("");
  const [age, setAge] = useState("");
  const [speed, setSpeed] = useState("");

  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Crewmates")
      .update({
        crewName,
        speed,
        age,
      })
      .eq("id", id)
      .select();
    if (error) {
      console.log(error);
    }
  };

  return <div>Up</div>;
}

export default Up;
