import "../App.css";
import React, { useState, useEffect } from "react";

function Tracker() {
  const [posts, setPosts] = useState();
  const [toggle, setToggle] = useState(false);
  useEffect(async () => {
    let fetchData = await fetch("https://www.reddit.com/r/reactjs.json");
    fetchData = await fetchData.json();
    fetchData = fetchData.data.children;
    console.log("fetchData", fetchData);
    setPosts(fetchData);
  }, [toggle]);

  console.log("posts", posts);
  console.log("toggle", toggle);
  return (
    <div className="App">
      <h1>
        <u>Data from API</u>
        {posts
          ? posts.map((post) => (
              <div>
                <h2>{post.data.author}</h2>
                <li>
                  {post.data.author_fullname} {} <br />
                  <a href={post.data.url} target="_blank">
                    Click Here
                  </a>
                </li>
                <hr />
              </div>
            ))
          : ""}
        <br />
        <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
      </h1>
    </div>
  );
}
export default Tracker;
