function PlantCard({ plant }) {
  const { name, image, price } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className="primary">In Stock</button>
    </li>
  );
}

export default PlantCard;
