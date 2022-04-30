import { createContext, useState, useEffect } from "react";
import { db } from "./../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts
  const fetchPosts = async () => {
    setIsLoading(true);
    let unsubscribed = false;
    getDocs(collection(db, "posts"))
      .then((query) => {
        if (unsubscribed) return; // unsubscribed? do nothing.
        const newPostDataArray = query.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPostData(newPostDataArray);
        setIsLoading(false);
      })
      .catch((err) => {
        if (unsubscribed) return; // unsubscribed? do nothing.
        console.error("Failed to retrieve data", err);
        setIsLoading(false);
      });
    return () => (unsubscribed = true);
  };

  const loadPost = async (id) => {
        const postRef = doc(db, 'posts', id)
        const loadedPost = await getDoc(postRef)
        // console.log(loadedPost.data())
        return loadedPost.data()
    }

  return (
    <BlogContext.Provider
      value={{
        postData,
        isLoading,
        loadPost,
        fetchPosts
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
