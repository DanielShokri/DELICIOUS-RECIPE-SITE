import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurn, faChevronRight, faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import Flippy, { FrontSide, BackSide } from 'react-flippy';


const Cards = props => {
    const { foodList } = props


    const ImgHeader = () => {
        let style = {
            backgroundImage: 'url(' + foodList.recipe.image + ')',
        };
        return (
            <header style={style} id={foodList.recipe.image} className="card-header">
                <h4 className="card-header--title">{foodList.recipe.dietLabels}</h4>
            </header>
        )
    }
    console.log(foodList)
    return (
        <div>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
            >
                <FrontSide>
                    <article className="card">
                        <ImgHeader></ImgHeader>

                        <div className="card-body">
                            <p className="date"><FontAwesomeIcon icon={faBurn} />&nbsp;{Math.floor(foodList.recipe.calories)} calories</p>

                            <h2>{foodList.recipe.label}</h2>

                            <p className="body-content"><strong>From:</strong>{foodList.recipe.source}</p>
                            <p className="body-content"><a href={foodList.recipe.url}>Source</a></p>

                            <button className="button button-primary">
                                <FontAwesomeIcon icon={faChevronRight} /> Find out more
                </button>

                        </div>
                    </article>
                </FrontSide>
                <BackSide>
                    <article>

                        <div className="card-body">
                            <p className="date"><FontAwesomeIcon icon={faAppleAlt} />&nbsp; &nbsp;{foodList.recipe.healthLabels.map((label, i) => (
                                <span key={i}>
                                    {(i ? ', ' : '') + label}&nbsp;
                                </span>
                            ))}</p>


                            <p className="body-content"><strong>Ingredients:</strong>&nbsp;{foodList.recipe.ingredientLines.map((ingredient, i) => (
                                <span key={i}>
                                    {(i ? ', ' : '') + ingredient}&nbsp;
                                </span>
                            ))}</p>

                            <button className="button button-primary">
                                <FontAwesomeIcon icon={faChevronRight} /> Back
                </button>

                        </div>
                    </article>
                </BackSide>
            </Flippy>
        </div>
    )
}

export default Cards;