import "./App.css";
import HeaderApp from "./components/Header/HeaderApp";
import MainSectionPlatformApp from "./components/MainSectionPlatformApp/MainSectionPlatformApp";
import MainSectionApplyApp from "./components/MainSectionApplyApp/MainSectionApplyApp";
import SliderApp from "./components/SliderApp/SliderApp";
import MainSectionClientsApp from "./components/MainSectionClientsApp/MainSectionClientsApp";
import FooterApp from "./components/FooterApp/FooterApp";

export default function App() {
  return (
    <>
      <HeaderApp />
      <main className="main">
        <MainSectionPlatformApp />
        <MainSectionApplyApp />
        <SliderApp />
        <MainSectionClientsApp />
      </main>
      <FooterApp />
    </>
  );
}
