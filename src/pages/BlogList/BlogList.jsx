import styles from "./BlogList.module.css";
import BlogCard from "../../components/BlogCard/BlogCard";

const BlogList = (props) => {
  console.log("BlogList props:", props);
  return (
    <main className={styles.container}>
      Blog List
      {props.blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </main>
  );
};

export default BlogList;
