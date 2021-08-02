
export default function projects(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <a href={props.link}>
        <img
          className="mywebpage"
          src={props.img}
          alt="A picture of a Day Planner App."
        />
      </a>
      <br />
      <a className="githubLink" href={props.repo}>
        Github Repo
      </a>
    </div>
  );
}
