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
          type="radio"
          name="age"
          id="age-range-1"
          value="0-17"
          onChange={handleChange}
          checked={post.age === "0-17"}
        />
        <label for="age-range-1">Under 18</label>
        <br />
        <input
          type="radio"
          name="age"
          id="age"
          value="18-24"
          onChange={handleChange}
          checked={post.age === "18-24"}
        />
        <label for="age-range-2">18-24</label>
        <br />
        <input
          type="radio"
          name="age"
          id="age"
          value="25-34"
          onChange={handleChange}
          checked={post.age === "25-34"}
        />
        <label for="age-range-3">25-34</label>
        <br />
        <input
          type="radio"
          name="age"
          id="age"
          value="35-44"
          onChange={handleChange}
          checked={post.age === "35-44"}
        />
        <label for="age-range-4">35-44</label>
        <br />
        <input
          type="radio"
          name="age"
          id="age"
          value="45-54"
          onChange={handleChange}
          checked={post.age === "45-54"}
        />
        <label for="age-range-5">45-54</label>
        <br />
        <input
          type="radio"
          name="age"
          id="age-range-6"
          value="55-64"
          onChange={handleChange}
          checked={post.age === "55-64"}
        />
        <label for="age-range-6">55-64</label>
        <br />
        <input
          type="radio"
          name="age"
          id="age-range-7"
          value="65+"
          onChange={handleChange}
          checked={post.age === "65+"}
        />
        <label for="age-range-7">65+</label>
        <br />
        <br />
        <br />
        <button style={{ backgroundColor: "blue" }} type="submit">
          Create!
        </button>
      </form>
    </div>
  );
}
export default Create;
