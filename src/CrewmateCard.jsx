import { useState } from "react";
import { supabase } from "./client";

function CrewmateCard(props) {
  const product = props.product;
  const [editing, setEditing] = useState(false);
  const [crewName, setCrewName] = useState(product.crewName);
  const [age, setAge] = useState(product.age);
  const [speed, setSpeed] = useState(product.speed);

  async function updateProduct() {
    try {
      const { data, error } = await supabase
        .from("Crewmates")
        .update({
          crewName: crewName,
          age: age,
          speed: speed,
        })
        .eq("id", product.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteProduct() {
    try {
      const { data, error } = await supabase
        .from("Crewmates")
        .delete()
        .eq("id", product.id);

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div style={{}}>
      {editing == false ? (
        <>
          <div> Name: {product.crewName}</div>
          <br />
          <div>Speed: {product.speed}</div>
          <br />
          <div>Age: {product.age}</div>

          <br />

          <button
            style={{ backgroundColor: "blue" }}
            type="button"
            tton
            variant="secondary"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>

          <button
            style={{ backgroundColor: "plum" }}
            type="button"
            onClick={() => deleteProduct()}
          >
            Delete
          </button>
        </>
      ) : (
        <>
          <h4>Editing Product</h4>
          <button type="button" onClick={() => setEditing(false)}>
            Go Back
          </button>
          <br></br>
          <div> Name</div>
          <input
            type="text"
            id="name"
            defaultValue={product.crewName}
            onChange={(e) => setCrewName(e.target.value)}
          />
          <div>Speed</div>
          <input
            type="text"
            id="speed"
            defaultValue={product.speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <div> Age</div>
          <input
            type="text"
            id="age"
            defaultValue={product.age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br></br>
          <button type="button" onClick={() => updateProduct()}>
            Update
          </button>
        </>
      )}
    </div>
  );
}

export default CrewmateCard;
