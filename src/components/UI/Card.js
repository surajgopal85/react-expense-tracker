import './Card.css';

const Card = (props) => {
  // props has className attr --- can pass these along to share styling
  const classes = 'card ' + props.className;

  // children == reserved word, includes all nested attributes and content!
  return <div className={classes}>{props.children}</div>
}

export default Card;
