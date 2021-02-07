import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import moviesList from "./movies.json";
import Section from "./components/Section";
import sound from "./assets/audios/toudoum.mp3";
function App() {
    return (
        <div className="App">
            <audio src={sound} autoPlay></audio>
            <Header />
            {moviesList.map((item, index) => {
                return (
                    <Section
                        key={index}
                        category={item.category}
                        images={item.images}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
