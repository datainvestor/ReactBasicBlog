import React from 'react'
import PostPreview from './PostPreview'

const postListStyle = {
  display: 'flex',
  padding: '20px',
  boxSizing: 'border-box',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
}

function PostList({isAdmin}) {
  return (
    <section style={postListStyle}>
    <PostPreview
      id="1"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      isAdmin={isAdmin}
      title="Hello there!"
      previewText="This my first post!" />
    <PostPreview
      id="2"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      isAdmin={isAdmin}
      title="Hello there - the second time!"
      previewText="This my second post!" />
    <PostPreview
      id="3"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      isAdmin={isAdmin}
      title="Hi!"
      previewText="This my third post!" />
  </section>
  )
}

export default PostList