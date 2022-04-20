import PostList from "../../components/Posts/PostList";
import DefaultLayout from "../../layouts/DefaultLayout";

function PostPage() {
  return (
    <div>
      <DefaultLayout>
        <PostList />
      </DefaultLayout>
    </div>
  );
}

export default PostPage;
