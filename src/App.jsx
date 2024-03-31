// src/App.jsx
import React from "react";
/**
     * Header
     * Body
          -Search Bar
          -Resturant list
            -ResturantCard (Multiple)
                -Image
                -Name
                -Rating
                -Cusines 
     * Footer
          -Links
          -copyright
    
    */

const Title = () => {
  return (
    <>
      <img
        className="logo"
        alt="logo"
        src="https://scontent.fccu31-1.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iTgNwCKYX7MAX8MqNQl&_nc_ht=scontent.fccu31-1.fna&oh=00_AfDEMjEZ4kNuApG8JBwrii8XdH4aHlLIoOmDgCGX9hlOzA&oe=660E422E"
      />
    </>
  );
};
const burgerKing = [
  {
    name: "Burger King",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/7798d7bed74c81bc0e5ffc677a7d2eef",
    cuisines: ["Burger", "American"],
    rating: "4.2",
  },
];
const ResturantCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} alt={burgerKing.name} />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cuisines.join(",  ")}</h3>
      <h4>{burgerKing.rating} stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="resturant-list">
      <ResturantCard />
      <ResturantCard />
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const App = () => {
  return <AppLayout />;
};

export default App;

/*
 * HMR - Hot Module Replacement
 * File Watcher Algorithm
 * Bundling
 * Minify
 * Cleaning our code
 * Dev and production build
 * Super fast building algorithm
 * Images optimization
 * Caching while development
 * Compression
 * Compression with older version of browser (Pollyfills)
 * HTTPS on dev
 * port number
 * Consistent hashing algorithm
 * Zero config
 * Transitive Dependency
 * Tree shaking
 */
