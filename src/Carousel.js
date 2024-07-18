import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  function goForward() {
    setCurrCardIdx((prevIdx) => (prevIdx + 1) % total);
  }

  function goBackward() {
    setCurrCardIdx((prevIdx) => (prevIdx - 1 + total) % total);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${currCardIdx === 0 ? 'hidden' : ''}`}
          onClick={currCardIdx > 0 ? goBackward : null}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${currCardIdx === total - 1 ? 'hidden' : ''}`}
          onClick={currCardIdx < total - 1 ? goForward : null}
        />
      </div>
    </div>
  );
}

export default Carousel;
