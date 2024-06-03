import styles from './BlogList.module.css'

const BlogList = (props) => {
  console.log('BlogList props:', props)
  return (
    <main className={styles.container}>
      Blog List
      {props.blogs.map((blog) => (
        <p key={blog._id}>
          {blog.title}
        </p>
      ))}
    </main>
  )
}

export default BlogList