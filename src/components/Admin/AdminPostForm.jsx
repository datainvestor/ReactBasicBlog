import AppControlInput from "../shared/AppControlInput";
import AppButton from "../shared/AppButton";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addPost, deletePost, editPost } from "../../firebase";
import BlogContext from "../../context/BlogContext";

function AdminPostForm({ post, id, isEdit }) {
  const { fetchPosts } = useContext(BlogContext);
  const [inputValue, setInputValue] = useState(
    post
      ? post
      : {
          author: "",
          title: "",
          thumbnailLink: "",
          content: "",
        }
  );
  const { author, title, thumbnailLink, content } = inputValue;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = {
      //copy original object
      ...inputValue,
      //set new value to the corresponding item
      [name]: value,
    };
    setInputValue(updatedForm);
  };

  const submitNewPost = () => {
    addPost(inputValue)
      .then(() => {
        fetchPosts().then(() =>  navigate("/admin/"))
       
      })
      .catch(() => console.log("something failed"));
  };

  const editForm = () => {
    editPost(id, inputValue)
      .then(() => {
        fetchPosts().then(() =>  navigate("/admin/"))
      })
      .catch(() => console.log("update failed"));
  };

  const deleteForm = () => {
    deletePost(id)
      .then(() => {
        fetchPosts().then(() =>  navigate("/admin/"))
      })
      .catch(() => console.log("update failed"));
  };


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <AppControlInput name='author' value={author} onChange={handleChange}>
        Author Name
      </AppControlInput>
      <AppControlInput name='title' value={title} onChange={handleChange}>
        Title
      </AppControlInput>
      <AppControlInput
        name='thumbnailLink'
        value={thumbnailLink}
        onChange={handleChange}
      >
        Thumbnail Link
      </AppControlInput>
      <AppControlInput
        name='content'
        value={content}
        controlType='textarea'
        onChange={handleChange}
      >
        Content
      </AppControlInput>
      <AppButton type='submit' onClick={isEdit ? editForm : submitNewPost}>
        Save
      </AppButton>
      <AppButton
        type='button'
        style={{ marginLeft: "10px" }}
        btnStyle='cancel'
        onClick={() => navigate("/admin/")}
      >
        Cancel
      </AppButton>
      <AppButton
        type='button'
        style={{ marginLeft: "10px" }}
        btnStyle='cancel'
        onClick={deleteForm}
      >
        Delete
      </AppButton>
    </form>
  );
}

export default AdminPostForm;
