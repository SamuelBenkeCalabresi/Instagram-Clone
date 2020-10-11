import React from "react";

// Styles
import "../styles/Home.css";
// Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Header />
        <div className="home__body">
          {/* Posts */}
          <main className="home__bodyPostContainer">
            <Post
              id="123456789"
              username="goodoldvegan"
              postImage="https://www.peta.org/wp-content/uploads/2010/06/vegan-food.png"
              description="Cajun Spiced Potato Wedges! Served with smoked tofu, salad, and
            avocado lime dip! 💥"
            />
            <Post
              id="123456789"
              username="footdistrict"
              postImage="https://www.sneakersnstuff.com/images/272949/product_2x.jpg"
              description="The online raffle for the adidas YEEZY QTNM Teal Blue is now CLOSED!"
            />
          </main>
          <Sidebar className="home__bodySidebar" />
        </div>
      </div>
    </div>
  );
}

export default Home;
