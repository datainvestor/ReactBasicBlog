import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoMatch from "./layouts/NoMatch";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/Admin/AdminPage";
import EditPostPage from "./pages/Admin/EditPostPage";
import NewPostPage from "./pages/Admin/NewPostPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/Post/PostPage";
import PostsPage from "./pages/Post/PostsPage"
import RequireAuth from "./pages/Auth/RequireAuth";
import {BlogProvider} from "./context/BlogContext"

function App() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route index element={<MainPage></MainPage>} />

          <Route path='posts' element={<PostsPage></PostsPage>} />
          <Route path='posts/:id' element={<PostPage></PostPage>} />
          <Route path='about' element={<AboutPage></AboutPage>} />
          <Route element={<RequireAuth />}>
            <Route path='admin' element={<AdminPage></AdminPage>} />
            <Route path='admin/:id' element={<EditPostPage></EditPostPage>} />
            <Route path='admin/new-post' element={<NewPostPage></NewPostPage>} />
          </Route>
          <Route path='login' element={<LoginPage></LoginPage>} />
          <Route path='register' element={<RegisterPage></RegisterPage>} />
          <Route path='*' element={<NoMatch></NoMatch>} />

        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
