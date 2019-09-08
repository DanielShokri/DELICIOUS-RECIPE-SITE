import React, { useState, useMemo } from 'react';
import RecipeService from './Services/RecipeService';
import Cards from './Components/Cards';
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';


const Home = () => {

    const [foodName, setFoodName] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading)
    const inputChangeHandler = event => {
        setFoodName(event.target.value)
    }

    const onSearchHandler = event => {
        if (event.charCode === 13 || event.type === 'click') {
            setIsLoading(true)
            RecipeService.query(foodName).then((res) => {
                setFoodList(food => food.concat(res.hits))
                setIsLoading(false)
            }
            ).catch((err) => console.log(err))
        }
    }


    return (
        <>
            <div className="search-bar">
                <fieldset class="field-container">
                    <input type="text" onKeyPress={onSearchHandler} placeholder="Search..." class="field" onChange={inputChangeHandler} />
                    <button className="search-btn" onClick={onSearchHandler}>Find!</button>
                    <div class="icons-container">
                        <div class="icon-search"></div>
                        <div class="icon-close">
                            <div class="x-up"></div>
                            <div class="x-down"></div>
                        </div>
                    </div>
                </fieldset>
            </div>

            {/* <input type="text" placeholder="What food are you looking for?" onChange={inputChangeHandler} value={foodName} />
            <button onClick={onSearchHandler}>Search</button> */}
            <div class="astrodivider"><div class="astrodividermask"></div><span><i><FontAwesomeIcon icon={faUtensils} /></i></span></div>

            <div className="card-layout">
                {isLoading && (
                    <img src="https://samherbert.net/svg-loaders/svg-loaders/puff.svg" className="loading-animation" alt="loading" />
                )}

                {useMemo(() =>
                    foodList.map(food => (
                        <Zoom>
                            <Cards key={food.recipe.calories} foodList={food} />
                        </Zoom>
                    ))
                    , [foodList])}
            </div>



        </>
    )

}


export default Home;