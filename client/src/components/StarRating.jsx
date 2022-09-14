import React from 'react'

const StarRating = ({rating}) => {
    const stars = []

    for (let i = 1; i <=5; i++) {
        if  (i <= rating){
            stars.push(<i key={i} className="fa-solid fa-star text-warning"></i>)
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)){
            stars.push(<i key={i} className="fa-regular fa-star-half-stroke text-warning"></i>)
        } else {
            stars.push(<i key={i} className="fa-regular fa-star text-warning"></i>)
        }
    }

    return (
        <>
            {stars}
        </>
    )
}

export default StarRating


// CREATE TABLE reviews (
//     id BIGSERIAL NOT NULL PRIMARY KEY,
//     restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
//     name VARCHAR(50) NOT NULL,
//     review TEXT NOT NULL,
//     rating INT NOT NULL check(rating >= 1 and rating <= 5)
// );