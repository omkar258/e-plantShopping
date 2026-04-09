import React, { useState } from "react";

const plants = [
  // Indoor (6)
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 12, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor" },
  { id: 4, name: "Spider Plant", price: 9, category: "Indoor" },
  { id: 5, name: "Fern", price: 11, category: "Indoor" },
  { id: 6, name: "Palm", price: 18, category: "Indoor" },

  // Outdoor (6)
  { id: 7, name: "Rose", price: 14, category: "Outdoor" },
  { id: 8, name: "Tulip", price: 16, category: "Outdoor" },
  { id: 9, name: "Sunflower", price: 13, category: "Outdoor" },
  { id: 10, name: "Daisy", price: 10, category: "Outdoor" },
  { id: 11, name: "Lavender", price: 17, category: "Outdoor" },
  { id: 12, name: "Hibiscus", price: 19, category: "Outdoor" },

  // Succulent (6)
  { id: 13, name: "Cactus", price: 8, category: "Succulent" },
  { id: 14, name: "Jade", price: 10, category: "Succulent" },
  { id: 15, name: "Agave", price: 12, category: "Succulent" },
  { id: 16, name: "Aloe", price: 9, category: "Succulent" },
  { id: 17, name: "Echeveria", price: 11, category: "Succulent" },
  { id: 18, name: "Sedum", price: 13, category: "Succulent" }
];

export default function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [added, setAdded] = useState([]);

  const addToCart = (id) => {
    setCartCount(cartCount + 1);
    setAdded([...added, id]);
  };

  return (
    <div>
      <h2>🛒 Cart: {cartCount}</h2>

      {["Indoor", "Outdoor", "Succulent"].map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plants.filter(p => p.category === cat).map(p => (
            <div key={p.id}>
              <p>{p.name} - ${p.price}</p>

              <button
                disabled={added.includes(p.id)}
                onClick={() => addToCart(p.id)}
              >
                {added.includes(p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
