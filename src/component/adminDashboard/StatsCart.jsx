import React from "react";

import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sliedbar";
import { Link } from "react-router-dom";
import Graph from "./Graph";

function StatsCards() {
  return (
    <>
      <DashboardNavbar />

      {/* Wrapper div */}
      <div className="container-fluid my-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-12 col-md-3 col-lg-2 bg-light  p-0">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9 col-lg-10 p-4">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="card h-100 shadow-sm" style={{ cursor: "pointer" }}>
                  <Link to="/showproduct">
                    <img
                      src="https://dc-mkt-prod.cloud.bosch.tech/xrm/media/global/campaigns/digital_product_twins/icon-as-rexroth_640x360.jpg"
                      className="card-img-top"
                      alt="All product"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">All Products</h5>
                    <p className="card-text">Click here.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="card h-100 shadow-sm" style={{ cursor: "pointer" }}>
                  <Link to="/add_product">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPwBz4ImbR9ZWwUFZYivlYA4vlIJEGrqkZw&s"
                      className="card-img-top"
                      alt="Add product"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">Add Product</h5>
                    <p className="card-text">Click here.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-12 col-sm-6 col-md-4">
                <div className="card h-100 shadow-sm" style={{ cursor: "pointer" }}>
                  <Link to="/alluser">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGSKRPPyT13qegr7tPEwGt8iKpx4B3mHFTQ&s"
                      className="card-img-top"
                      alt="Card 3"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">All users</h5>
                    <p className="card-text">Click here</p>
                  </div>
                </div>
              </div>
            </div>
      <Graph/>

          </div>
        </div>
      </div>
      
    </>
  );
}

export default StatsCards;
