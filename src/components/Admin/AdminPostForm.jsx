import AppControlInput from "../shared/AppControlInput";
import AppButton from "../shared/AppButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { db,addPost } from '../../firebase'

function AdminPostForm({ post }) {
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
    console.log(inputValue);
  };

  // const submitForm = () => {
  //   addPost()
  //   navigate("/admin/")
  // }


//   const fetchBlogs= async ()=>{
//     const response=db.collection('posts');
//     const data=await response.get();
//     data.docs.forEach(item=>{
//      setBlogs([...blogs,item.data()])
//     })
// }

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
      <AppButton type='submit'>Save</AppButton>
      <AppButton
        type='button'
        style={{ marginLeft: "10px" }}
        btnStyle='cancel'
        onClick={() => navigate("/admin/")}
      >
        Cancel
      </AppButton>
    </form>
  );
}

export default AdminPostForm;
