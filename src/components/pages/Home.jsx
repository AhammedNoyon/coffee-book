import Banner from "../banner";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Header
        title="Browse Coffee by category"
        subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste"
      ></Header>
      {/* category */}
      {/* nested category */}
    </div>
  );
};

export default Home;
