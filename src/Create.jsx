import React, { useState } from "react";
import { supabase } from "../src/client";

function Create() {
  const [post, setPost] = useState({
    crewName: "",
    speed: "",
    age: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Name ", name, "value ", value);
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const createPost = async (event) => {
    const { data, error } = await supabase
      .from("Crewmates")
      .insert([
        {
          crewName: post.crewName,
          speed: post.speed,
          age: post.age,
        },
      ])
      .select();

    window.location = "/";
  };
  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={createPost}>
        <label for="crewName">Name</label> <br />
        <input
          type="text"
          id="crewName"
          name="crewName"
          value={post.crewName}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="speed">Speed</label>
        <br />
        <input
          type="text"
          id="speed"
          name="speed"
          value={post.speed}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="color">Age</label>
        <br />
        <input
          type="text"
          id="age"
          name="age"
          value={post.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Create;
