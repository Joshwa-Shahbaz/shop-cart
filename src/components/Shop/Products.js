import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const dummy = [
  {
    id: "p1",
    price: 10,
    title: "my first book",
    description: "the first book i ever wrote",
  },
  {
    id: "p2",
    price: 8,
    title: "On the river side",
    description: "romantice novel by shakespeare",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
