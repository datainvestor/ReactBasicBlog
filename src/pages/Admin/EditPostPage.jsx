import AdminPostForm from "../../components/Admin/AdminPostForm";

const loadedPost = {
  author: "Alexander",
  title: "My awesome Post",
  content: "Super amazing, thanks for that!",
  thumbnailLink:
    "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
};

function EditPostPage() {
  return (
    <div>
      <section className='update-form'>
        <AdminPostForm post={loadedPost} />
      </section>
    </div>
  );
}

export default EditPostPage;
