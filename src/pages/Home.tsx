import homepageImg from "../assets/imgs/homepage.avif";

function Home() {
  return (
    <>
      <h1>Home Page - <em>Please navigate to store page to select products</em></h1>
      <img src={homepageImg} width="1400px"></img>
    </>
  );
}

export default Home;
