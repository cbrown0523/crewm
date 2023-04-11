import React from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./client";

const Update = ({ data }) => {
  const updatePost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Crewmates")
      .update({
        crewName: post.crewName,
        autspeedhor: post.speed,
        age: post.age,
      })
      .eq("id", id);
  };

  const { id } = useParams();
  const post = data.filter((item) => item.id === id)[0];

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase.from("Crewmates").delete().eq("id", id);
    alert("post deleted!");
    window.location = "/";
  };
  return (
    <div>
      <form onSubmit={updatePost}>
        <label for="crewName">Name</label> <br />
        <input
          type="text"
          id="crewName"
          name="crewName"
          value={post.crewName}
        />
        <br />
        <br />
        <label for="speed">Speed</label>
        <br />
        <input type="text" id="speed" name="speed" value={post.speed} />
        <br />
        <br />
        <label for="color">Age</label>
        <br />
        <input type="text" id="age" name="age" value={post.age} />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <button className="deleteButton" onClick={updatePost}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default Update;
