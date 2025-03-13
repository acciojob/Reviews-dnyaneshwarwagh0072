import React, { useState } from 'react'
import data from './Data';

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = data[index];
    console.log(id);

    const nextReview = () => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevReview = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const randomReview = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * data.length);
        } while (newIndex === index);
        setIndex(newIndex);
    };

    return (
        <article className="review">
            <img src={image} alt={name} className="person-img" />
            <h4 id={`author-${id}`} className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevReview}>Prev</button>
                <button className="next-btn" onClick={nextReview}>Next</button>
            </div>
            <button className="random-btn" onClick={randomReview}>Surprise me</button>
        </article>
    )
}

export default Reviews
