// src/App.jsx
import Title from "./components/Title";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
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
