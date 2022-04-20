import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PostList from "../components/Posts/PostList";

function MainPage() {
  return (
    <DefaultLayout>
      <div className='home-page'>
        <section className='intro'>
          <h1>Get the latest tech news!</h1>
        </section>
        <PostList />
      </div>
    </DefaultLayout>
  );
}

export default MainPage;
