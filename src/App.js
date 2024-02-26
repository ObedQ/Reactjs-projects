import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
      {/* <LoadMoreData/> */}
      {/* tree view menu */}
      {/* <TreeView menus={menus} /> */}
      {/* QR code generator */}
      {/* <QRCodeGenerator/> */}
      {/* light and dark mode */}
      {/* <LightDarkMode/> */}
      {/* scroll-indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
