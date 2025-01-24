import axios from "axios";
import { useState } from "react";

const Article = ({ article }) => {
  const [isEditing, serIsediting] = useState(false);
  const [editContent, seteditContent] = useState("");

  const handleEdit = () => {
    const data = {
      author: article.author,
      content: editContent ? editContent : article.content,
      date: article.date,
    };

    axios
      .put("http://localhost:3001/articles" + article.id, data)
      .then(() => serIsediting(false));
  };

  return (
    <div className="article">
      <p>{article.author}</p>
      <em> postele : {article.date}</em>

      {<p> {editContent ? editContent : article.content}</p>}
    </div>
  );
};

export default Article;
