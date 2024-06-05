import Like from '../../assets/icons/like.svg'


const Icon = ({ category }) => {
  const icons = {
    Like: Like,
  }

  return <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
}

export default Icon