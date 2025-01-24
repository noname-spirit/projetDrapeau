import { useEffect, useState } from "react";
import axios from "axios";

import Navigation from "../components/Navigation";
import Article from "../components/Article";

const News = () => {
  const [newData, setNewData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const getData = () => {
    axios
      .get("http://localhost:3001/articles")
      .then((res) => setNewData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission

    axios
      .post("http://localhost:3001/articles", {
        author,
        content,
        date: new Date(),
      })
      .then(() => {
        setAuthor, setContent, getData();
      });
  };

  return (
    <div className="news-container">
      <Navigation />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <textarea
          placeholder="Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <input type="submit" value="Send" />
      </form>

      <ul>
        {newData.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default News;
