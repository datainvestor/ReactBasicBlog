import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoMatch from "./layouts/NoMatch";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/Admin/AdminPage";
import EditPostPage from "./pages/Admin/EditPostPage";
import NewPostPage from "./pages/Admin/NewPostPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/Post/PostPage";
import PostsPage from "./pages/Post/PostsPage"

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route index element={<MainPage></MainPage>} />

          <Route path='posts' element={<PostsPage></PostsPage>} />
          <Route path='posts/:id' element={<PostPage></PostPage>} />
          <Route path='about' element={<AboutPage></AboutPage>} />
          <Route path='admin' element={<AdminPage></AdminPage>} />
          <Route path='admin/:id' element={<EditPostPage></EditPostPage>} />
          <Route path='admin/new-post' element={<NewPostPage></NewPostPage>} />
          <Route path='*' element={<NoMatch></NoMatch>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
