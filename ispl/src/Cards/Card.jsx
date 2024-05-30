import React from 'react';
import './Card.css'; // Import the CSS file for styling

export default function Card() {
  return (
    <div className="card-container">
      {/* Card 1 */}
      <div className="product-card">
        <div className="product-image">
          <img
            src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/mobilerepair1.jpg"
            srcSet="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/mobilerepair1.jpg"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="product-details">
          <p className="product-title">Mobile Repairing</p>
          <a
            href="#product-card"
            className="product-link"
          >
            Android/Apple
          </a>
          <p className="product-price">
            2,900 RS/-
            <span className="price-tag">Lowest price</span>
          </p>
          <p className="product-stock">
            (Any Mobile Repairing within <b>1</b> days!)
          </p>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn">Add to cart</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-image">
          <img
            src="https://hivelocityindia.com/wp-content/uploads/2018/03/ledtvrepair.jpg"
            srcSet="https://hivelocityindia.com/wp-content/uploads/2018/03/ledtvrepair.jpg"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="product-details">
          <p className="product-title">T.V Repairing</p>
          <a
            href="#product-card"
            className="product-link"
          >
      Sony/Intel/TATA
          </a>
          <p className="product-price">
              from 900 RS/-
            <span className="price-tag">Lowest price</span>
          </p>
          <p className="product-stock">
            (Any  Repairing within <b>1</b> days!)
          </p>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn">Add to cart</button>
        </div>
      </div>
      <div className="product-card">
        <div className="product-image">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/10/HT/MA/LQ/62919916/cctv-camera-repairing-service-500x500.jpeg"
            srcSet="https://5.imimg.com/data5/SELLER/Default/2022/10/HT/MA/LQ/62919916/cctv-camera-repairing-service-500x500.jpeg"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="product-details">
          <p className="product-title">CCTV Repairing</p>
          <a
            href="#product-card"
            className="product-link"
          >
            Pimapri location
          </a>
          <p className="product-price">
            12,900 RS/-
            <span className="price-tag">Lowest price</span>
          </p>
          <p className="product-stock">
            (Pan Pune within <b>1</b> days!)
          </p>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn">Add to cart</button>
        </div>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img
            src="https://3.imimg.com/data3/QN/JX/MY-15212771/split-ac-repairing-500x500.jpg"
            srcSet="https://3.imimg.com/data3/QN/JX/MY-15212771/split-ac-repairing-500x500.jpg"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="product-details">
          <p className="product-title">AC Repairing</p>
          <a
            href="#product-card"
            className="product-link"
          >
            
            Any Company 
          </a>
          <p className="product-price">
           from  1,900 RS/-
            <span className="price-tag">Lowest price</span>
          </p>
          <p className="product-stock">
            (Any  Repairing within <b>1</b> days!)
          </p>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
