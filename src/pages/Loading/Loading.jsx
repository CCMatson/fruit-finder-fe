import styles from './Loading.module.css'
import LoadingIcon from '../../assets/branding/loading.svg'

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={LoadingIcon} alt="" />
    </main>
  )
}

export default Loading