export default function Nav(props) {
    const data = props.data;
    let liTags = [];
    for (let i=0; i<data.length; ++i) {
      liTags.push(<li key={data[i].id}><a
        data-id={props.data[i].id} 
        onClick={function(e) {
          e.preventDefault();
          props.onChangeMode(Number(e.target.dataset.id));
        }} 
        href={`/${data[i].id}`}>{data[i].title}</a></li>);
    }
    return (
      <nav>
        <ul>
          {liTags}
        </ul>
      </nav>
    )
}
  