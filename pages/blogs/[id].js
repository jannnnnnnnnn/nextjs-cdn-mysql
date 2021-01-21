import React from "react";
import { withRouter } from "next/router";

function Blog(props) {
  return (
    <div>
      <h1>Blog {props.router.query.id}</h1>
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
    </div>
  );
}

Blog.getInitialProps = async ({ query }) => {
  //SSR
  console.log("i am in get init props");
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    console.log(response);
    return {
      props: { data: response.data },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
  return { props: {} };
};

export default withRouter(Blog);
