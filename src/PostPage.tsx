import React, { useEffect, useState } from "react";

type PostPageProp = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostPage = () => {
  const [post, setPost] = useState<PostPageProp[]>([]);
  const getPosts = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonResp = await resp.json();
    setPost(jsonResp);
  };


  useEffect(()=>{
    getPosts();
  },[])

  return (
    <section>
      <div>Post Page</div>
      <button onClick={getPosts}>Click Me</button>
      {post.map((postItem) => {
        return (
          <div  key={postItem.id} className="my-10">
            <h2>{postItem.title}</h2>
            <p>{postItem.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default PostPage;
