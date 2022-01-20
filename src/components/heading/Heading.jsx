import "./heading.scss";

const Heading = ({title}) => {
  const titleArray = title.split("");

  return (
    <h1 className="heading">
      {titleArray.map((letter, index) => (
        <span
          style={{ background: letter === " " && "transparent" }}
          key={index}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default Heading;
