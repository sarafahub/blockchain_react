import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Tracker2() {
  const [posts, setPosts] = useState();
  const [toggle, setToggle] = useState(false);
  //   useEffect(async () => {
  //     let fetchData = await fetch("https://www.reddit.com/r/reactjs.json");
  //     fetchData = await fetchData.json();
  //     fetchData = fetchData.data.children;
  //     console.log("fetchData", fetchData);
  //     setPosts(fetchData);
  //   }, [toggle]);

  useEffect(() => {
    (async () => {
      let fetchData = await axios.get("https://www.reddit.com/r/reactjs.json");
      console.log("Fetch", fetchData.data)
      fetchData = fetchData.data.data.children
      setPosts(fetchData)
    })()
  }, [toggle])

  //   console.log("posts", posts);
  //   console.log("toggle", toggle);
  return (
    <div className="App">
      <h1>
        <u>Data from API</u>
        {posts
          ? posts.map((post, index) => (
            <div key={index}>
              <h3>{post.data.title}</h3>
              <h2>{post.data.author}</h2>
              <li>
                {post.data.author_fullname} { } <br />
                <a href={post.data.url} target="_blank" rel="noreferrer">
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
export default Tracker2;
