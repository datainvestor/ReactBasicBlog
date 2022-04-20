import { useState } from "react";
import AdminPostForm from "../../components/Admin/AdminPostForm";

function EditPostPage() {
  const [loadedPost, setLoadedPost] = useState({
    author: "Alexander",
    title: "My awesome Post",
    content: "Super amazing, thanks for that!",
    thumbnailLink:
      "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
  });

  return (
    <div>
      <section className='update-form'>
        <AdminPostForm post={loadedPost} />
      </section>
    </div>
  );
}

export default EditPostPage;
