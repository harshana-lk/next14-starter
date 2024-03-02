import PostUser from "@/components/postUser/PostUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// Fetch data with an API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);
  return {
    title: post?.title,
    description: post?.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // Fetch data with an API
  // const post = await getData(slug);
  // Fetch data without an API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
