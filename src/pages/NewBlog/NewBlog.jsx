import { useState } from "react"
import styles from './NewBlog.module.css'

const NewBlog = (props) => {
  const [form, setForm] = useState({
    title: '',
    text: '',
    category: 'News',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleAddBlog(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
				<textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={form.text}
          placeholder="Text"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={form.category}
          onChange={handleChange}
        >
          <option value="Give away">Give away</option>
          <option value="Request">Request</option>
          <option value="Gratitude">Gratitude</option>
          <option value="Recipe">Recipe</option>
        
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewBlog