import "./Banner.css";

function Banner() {
  // JSX no vanilla seria algo parecido com ducment.creatElement('img')
  return (
    <header className="banner">
      <img
        src="/images/banner.png"
        alt="O banner principal da página do Organo"
      />
    </header>
  );
}

export default Banner;
