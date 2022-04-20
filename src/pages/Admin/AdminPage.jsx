import { useNavigate } from "react-router-dom";
import PostList from "../../components/Posts/PostList";
import AppButton from "../../components/shared/AppButton";

function AdminPage() {
  const navigate = useNavigate();
  return (
    <div className='admin-page'>
      <section className='new-post'>
        <AppButton onClick={() => navigate("/admin/new-post")}>Create Post</AppButton>
      </section>
      <section className='existing-posts'>
        <h1>Existing Posts</h1>
        <PostList isAdmin={true}></PostList>
      </section>
    </div>
  );
}

export default AdminPage;
