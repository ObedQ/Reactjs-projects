import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import SearchAutoComplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

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
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* custom-tab */}
      {/* <TabTest/> */}
      {/* custom-modal component */}
      {/* <ModalTest /> */}
      {/* search autocomplete */}
      {/* <SearchAutoComplete/> */}
      {/* Use fetch custom hook */}
      {/* <UseFetchHookTest/> */}
      {/* use onclick outside hook */}
      {/* <UseOnClickOutsideTest/> */}
      {/* handle resize function */}
      {/* <UseWindowResizeTest/> */}
      {/* Scroll to Top and Bottom */}
      <ScrollToTopAndBottom/>

    </div>
  );
}

export default App;
