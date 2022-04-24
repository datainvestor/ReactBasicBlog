import { useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
import PostList from "../../components/Posts/PostList";
import AppButton from "../../components/shared/AppButton";
import {logout} from "../../firebase"
// import { useEffect } from "react";

function AdminPage() {
  const navigate = useNavigate();
  // const [user, loading, error] = useAuthState(auth);
  const logoutAndRedirect = () => {
    logout()
    navigate("/")
  }

  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) return navigate("/");
  // }, [user, loading]);

  return (
    <div className='admin-page'>
      <section className='new-post'>
        <AppButton onClick={() => navigate("/admin/new-post")}>Create Post</AppButton>
      </section>
      <section className='existing-posts'>
        <h1>Existing Posts</h1>
        <PostList isAdmin={true}></PostList>
      </section>
      <section className='logout-section'>
        <AppButton onClick={logoutAndRedirect}>Logout</AppButton>
      </section>
    </div>
  );
}

export default AdminPage;
