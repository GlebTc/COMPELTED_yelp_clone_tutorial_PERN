import React from 'react'

const RestaurantList = () => {
    return (
        <div>
            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Restaurant</th>
      <th scope="col">Location</th>
      <th scope="col">Price Range</th>
      <th scope="col">Ratings</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>McDonalds</td>
      <td>New York</td>
      <td>$$</td>
      <td><button className="btn btn-warning">Update</button></td>
      <td><button className="btn btn-danger">Delete</button></td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td>McDonalds</td>
      <td>New York</td>
      <td>$$</td>
      <td><button className="btn btn-warning">Update</button></td>
      <td><button className="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default RestaurantList