import React, { useEffect, useState } from "react";
import { supabase } from "./client";

function Home() {
  return (
    <div>
      <h1>Welcome to the Crew Mate creator</h1>
      <h3>
        Here is where you can create your very own set of crew mates before
        sending them off into space!
      </h3>
      <img
        style={{ height: "250px", width: "180px" }}
        src="https://th.bing.com/th/id/R.a5fe2ab54a9c13ce74622ce405aaa394?rik=1Kqyoy9Occ6wrQ&pid=ImgRaw&r=0"
      />
    </div>
  );
}

export default Home;
