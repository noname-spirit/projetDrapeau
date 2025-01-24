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
      <div className="card_header">
        <p>{article.author}</p>
        <em> postele : {article.date}</em>
      </div>

      {isEditing ? (
        <textarea
          onChange={(e) => seteditContent(e.target.value)}
          autoFocus
          defaultValue={editContent ? editContent : article.content}
        ></textarea>
      ) : (
        <p> {editContent ? editContent : article.content}</p>
      )}

      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => serIsediting(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Article;
