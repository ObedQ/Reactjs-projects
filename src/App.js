import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      {/* <Accordian/> */}
      {/*Random Color component*/}
      {/* <RandomColor/> */}
      {/* star rating */}
      {/* <StarRating noOfStars={10}/> */}

      {/* image-slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* load-more-data */}
      <LoadMoreData/>
    </div>
  );
}

export default App;
