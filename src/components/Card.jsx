import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label={props.name}>
            {props.emoji}
          </span>
        </dt>
        <span>{props.name}</span>
        <dd>{props.meaning}</dd>
      </div>
    </>
  );
};


Card.propTypes = {
  emoji: PropTypes.string,
  name: PropTypes.string,
  meaning: PropTypes.string,
}

export default Card;
