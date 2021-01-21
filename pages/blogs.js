import React from "react";
import axios from "axios";
import Link from "next/link";

function Blogs(props) {
  return (
    <div>
      <h1>Blogs Page</h1>
      {props.data.map((item, idx) => (
        <li key={idx}>
          <Link href="/blogs/[id]" as={`/blogs/${item.id}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  //SSR
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return {
      props: { data: response.data },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default Blogs;
