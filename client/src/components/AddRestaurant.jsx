import React from 'react'

const AddRestaurant = () => {
    return (
        <div className="md-4">
            <form action="">
                <div className="row row-cols-4">
                    <div className="col">
                        <input type="text" className="form-control" placeholder='name'/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder='location'/>
                    </div>
                    <div className="col">
                        <select className='form-control custom-select my-1 mr-sm-2'>
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="btn btn-primary">Add</div>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant