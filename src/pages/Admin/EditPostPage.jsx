import AdminPostForm from "../../components/Admin/AdminPostForm";
import { useContext, useEffect, useState } from "react";
import BlogContext from "../../context/BlogContext";
import { useParams } from "react-router-dom";


function EditPostPage() {
  const params = useParams();
  const { loadPost } = useContext(BlogContext);
  const [singlePost, setSinglePost] = useState();
  const [isSingleLoading, setSingleLoading] = useState(true);

  useEffect(() => {
    loadPost(params.id).then((data) => {
      setSinglePost(data);
      setSingleLoading(false);
    });
  }, [loadPost, params]);

  return isSingleLoading ? (<div>Loading...</div>): (
    <div>
      <section className='update-form'>
        <AdminPostForm post={singlePost} id={params.id} isEdit={true} />
      </section>
    </div>
  );
}

export default EditPostPage;
