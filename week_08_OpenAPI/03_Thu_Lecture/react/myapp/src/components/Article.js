export default function Article(props) {
  return (
      <div>
        <h2>{props.title}</h2>
        {props.description}
      </div>
    )
}