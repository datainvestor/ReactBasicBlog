import AdminPostForm from "../../components/Admin/AdminPostForm";

function NewPostPage() {
  return (
    <div className='admin-new-post-page'>
      <section className='new-post-form'>
        <AdminPostForm />
      </section>
    </div>
  );
}

export default NewPostPage;
