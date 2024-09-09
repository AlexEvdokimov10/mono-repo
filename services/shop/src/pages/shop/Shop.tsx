import React from "react";
import {shopRoutes} from '@packages/shared/src/routes/shop'
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div>
        <Link to={shopRoutes.second}>go to second</Link>
      </div>
    </div>
  );
};

export default Shop;
