import React from 'react';
import './App.css';
import Hamburger, {HamburgerSize, HamburgerStuffing, HamburgerTopping} from "./domain/hamburger";

function App() {
// маленький гамбургер с начинкой из сыра
    const hamburger = new Hamburger(HamburgerSize.SMALL, HamburgerStuffing.SALAD);
    hamburger.addTopping(HamburgerTopping.MAYO);
    console.log("Calories: ", hamburger.calculateCalories());
    console.log("Price: ", hamburger.calculatePrice());
    hamburger.addTopping(HamburgerTopping.SPICE);
    console.log("Price with sauce: ", hamburger.calculatePrice());
    console.log("Is hamburger large: ", hamburger.getSize() === HamburgerSize.LARGE); // -> false
    hamburger.removeTopping(HamburgerTopping.SPICE);
    console.log("Have %d toppings", hamburger.getToppings().length); // 1
    console.log(hamburger.getStuffing(), 'stuffing')
    return (
        <div className="App">
            Hello hamburger, check console
        </div>
    );
}

export default App;
