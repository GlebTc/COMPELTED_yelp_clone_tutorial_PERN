import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdatePage from './routes/UpdatePage'
import RestaurantDetailPage from './routes/RestaurantDetailPage'
import Home from './routes/Home'

const App = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/restaurants/:id/update" element={<UpdatePage />} />
                    <Route exact path="/restaurants/:id" element={<RestaurantDetailPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App