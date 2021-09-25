import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        name: 'First Book',
        description: 'First book I ever wrote',
        price: 6
    },
    {
        id: 'p2',
        name: 'Second Book',
        description: 'Second book I ever wrote',
        price: 5
    },
]

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(product => (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            title={product.name}
                            price={product.price}
                            description={product.description}
                        />
                )
                )}
            </ul>
        </section>
    );
};

export default Products;
