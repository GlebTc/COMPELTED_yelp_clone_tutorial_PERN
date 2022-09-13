import React, {useState, useContext} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const AddRestaurant = () => {
    const {addRestaurant} = useContext(RestaurantsContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post("/", {
                name: name,     // This can be shortned to just name since our key and value are the same
                location,       // The above logic is applied here
                price_range: priceRange
            })
            addRestaurant(response.data.data.restaurant)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="md-4">
            <form action="">
                <div className="row row-cols-4">
                    <div className="col">
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder='name'
                        />
                    </div>
                    <div className="col">
                        <input
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder='location'
                        />
                    </div>
                    <div className="col">
                        <select 
                            value={priceRange}
                            onChange={e => setPriceRange(e.target.value)}
                            className='form-control custom-select my-1 mr-sm-2'
                        >
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant