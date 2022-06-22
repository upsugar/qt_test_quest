import React from "react";
import "./App.css";
import PackOfFeed from "./components/packOfFeed";
import data from "./parcels.json";

function App() {
    let foods = data.foods;
    return (
        <div className="App">
            <header className="App-header">Ты сегодня покормил кота?</header>
            <div className="App-container">
                {foods.map((food) => {
                    return <PackOfFeed key={food.id} info={food}/>;
                })}
            </div>
        </div>
    );
}

export default App;
