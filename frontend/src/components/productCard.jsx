export default function ProductCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button>Add to cart</button>
    </div>
  );
}
