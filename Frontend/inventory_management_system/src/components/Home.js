import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Chocolate',
      price: '₹40',
      image: 'https://bdmuhib24.files.wordpress.com/2021/10/wp2066285.jpg',
    },
    {
      id: 2,
      name: 'Biscuits',
      price: '₹30',
      image: 'https://tse3.mm.bing.net/th?id=OIP.7TwcA9KxCxesiDyQ08NyBAHaEt&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Chips',
      price: '₹35',
      image: 'https://www.beyondthechickencoop.com/wp-content/uploads/2020/07/Homemade-Potato-Chips-1-of-1.jpg',
    },
    {
      id: 4,
      name: 'Cookies',
      price: '₹45',
      image: 'https://images2.alphacoders.com/793/793645.jpg',
    },
    {
      id: 5,
      name: 'Instant Noodles',
      price: '₹55',
      image: 'https://png.pngtree.com/background/20230424/original/pngtree-bowl-of-noodles-with-chopsticks-being-poured-over-it-picture-image_2458455.jpg',
    },
    {
      id: 6,
      name: 'Namkeen',
      price: '₹25',
      image: 'https://chattacknamkeens.com/wp-content/uploads/2023/07/Indian-Namkeens-1.jpg',
    },
    {
      id: 7,
      name: 'Energy Bar',
      price: '₹50',
      image: 'https://alissarumsey.com/wp-content/uploads/2015/11/energy_bars-.jpg',
    },
    {
      id: 8,
      name: 'Candy',
      price: '₹10',
      image: 'https://images2.alphacoders.com/109/1097138.jpg',
    },
    {
      id: 9,
      name: 'Dry Fruits Mix',
      price: '₹299',
      image: 'https://img.freepik.com/premium-photo/dry-fruits-hd-8k-wallpaper-stock-photographic_1064748-11253.jpg?w=2000',
    },
  ];
  

  return (
    <div className='container-fluid p-5 text-center' style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className='mb-4' style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#343a40' }}>
        Welcome to Shopoholic
      </h1>
      <p className='mb-4' style={{ fontSize: '18px', color: '#6c757d' }}>
        Discover the best products at unbeatable prices.
      </p>
      <button 
        className='btn btn-dark btn-lg mb-5' 
        onClick={() => navigate('/products')}
        style={{ fontSize: '18px', padding: '10px 20px' }}
      >
        Explore Products
      </button>

      <div className='row'>
        {products.map((product) => (
          <div key={product.id} className='col-md-4 mb-4'>
            <div className='card shadow-sm' style={{ border: 'none', borderRadius: '10px' }}>
              <img 
                src={product.image} 
                className='card-img-top' 
                alt={product.name} 
                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '250px', objectFit: 'cover' }}
              />
              <div className='card-body' style={{ backgroundColor: '#ffffff' }}>
                <h5 className='card-title' style={{ fontFamily: 'Verdana, sans-serif', fontWeight: 'bold', color: '#343a40' }}>
                  {product.name}
                </h5>
                <p className='card-text' style={{ fontSize: '16px', color: '#28a745', fontWeight: 'bold' }}>
                  {product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
