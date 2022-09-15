import React, {useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const AddReviewText = () => {

    const location = useLocation()

    const {id} = useParams()
    const [name, setName] = useState("")
    const [rating, setRating] = useState("Rating")
    const [reviewText, setReviewText] = useState("")
    
    function refreshPage() {
        window.location.reload(false);
    }

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post(`/${id}/addReview`, {
                name,
                review: reviewText,
                rating
            })
            refreshPage()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="mb-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="rating">Rating</label>
                        <select
                            onChange={(e)=> {setRating(e.target.value)}}
                            id="rating"
                            className="custom-select"
                        >
                            <option disabled>Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="reviewText">ReviewText</label>
                    <textarea
                        onChange={(e)=> {setReviewText(e.target.value)}}
                        id="reviewText"
                        className="form-control"
                    >
                    </textarea>
                </div>
                <button type="submit" onClick={handleSubmitReview} className="btn btn-primary">
                    Submit
                </button>
            </form>

        </div>
    )
}

export default AddReviewText