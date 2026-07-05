import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'Produces oxygen at night and helps improve indoor air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
        description: 'A resilient plant known for filtering common household pollutants.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
        description: 'A graceful flowering plant that removes mold spores and toxins.',
        cost: '$18',
      },
      {
        name: 'Boston Fern',
        image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
        description: 'Adds humidity to rooms while softening the look of shelves and corners.',
        cost: '$20',
      },
      {
        name: 'Rubber Plant',
        image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
        description: 'Glossy leaves and easy care make this a classic indoor air purifier.',
        cost: '$17',
      },
      {
        name: 'Aloe Vera',
        image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
        description: 'A practical succulent with air-cleaning and skin-soothing benefits.',
        cost: '$14',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
        description: 'A calming scent often used for relaxation and restful spaces.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
        description: 'Sweetly fragrant blooms that brighten windowsills and patios.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
        description: 'Aromatic foliage that works beautifully in kitchens and sunny rooms.',
        cost: '$15',
      },
      {
        name: 'Mint',
        image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
        description: 'Fresh fragrance and fast growth make mint perfect for indoor herb planters.',
        cost: '$12',
      },
      {
        name: 'Lemon Balm',
        image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
        description: 'A citrusy herb prized for its gentle fragrance and calming effect.',
        cost: '$14',
      },
      {
        name: 'Hyacinth',
        image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
        description: 'Bright spring flowers with a rich scent and compact growth habit.',
        cost: '$22',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop',
        description: 'Thrives in low light and tolerates missed watering days.',
        cost: '$25',
      },
      {
        name: 'Pothos',
        image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
        description: 'A trailing favorite that grows well in many indoor conditions.',
        cost: '$10',
      },
      {
        name: 'Cast Iron Plant',
        image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
        description: 'A tough, elegant plant that handles shade and neglect.',
        cost: '$20',
      },
      {
        name: 'Succulent Trio',
        image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
        description: 'Compact drought-tolerant plants with sculptural shapes.',
        cost: '$18',
      },
      {
        name: 'Aglaonema',
        image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
        description: 'Colorful foliage that keeps its shape with minimal upkeep.',
        cost: '$22',
      },
      {
        name: 'Jade Plant',
        image: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/cactus-2030833_1280.jpg',
        description: 'A sturdy succulent with glossy leaves and a long indoor lifespan.',
        cost: '$16',
      },
    ],
  },
];

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartQuantity = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const addedPlantNames = useMemo(
    () => new Set(cartItems.map((item) => item.name)),
    [cartItems],
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  return (
    <div className="shop-page">
      <nav className="navbar">
        <a href="/" className="brand-link" onClick={handleHomeClick}>
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Paradise Nursery leaf logo"
          />
          <span>
            <strong>Paradise Nursery</strong>
            <small>Where Green Meets Serenity</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="/" onClick={handleHomeClick}>Home</a>
          <a href="#plants" onClick={handlePlantsClick}>Plants</a>
          <a href="#cart" className="cart-link" onClick={handleCartClick} aria-label="Shopping cart">
            <span className="cart-icon">Cart</span>
            <span className="cart_quantity_count">{totalCartQuantity}</span>
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <main className="product-grid" id="plants">
          {plantsArray.map((category) => (
            <section className="plant-category" key={category.category}>
              <div className="plantname_heading">
                <h2 className="plant_heading">{category.category}</h2>
              </div>
              <div className="product-list">
                {category.plants.map((plant) => {
                  const isAdded = addedPlantNames.has(plant.name);
                  return (
                    <article className="product-card" key={plant.name}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <h3 className="product-title">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-price">{plant.cost}</p>
                      <button
                        className={`product-button ${isAdded ? 'added-to-cart' : ''}`}
                        disabled={isAdded}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default ProductList;
