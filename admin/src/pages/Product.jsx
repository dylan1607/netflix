import { Link } from "react-router-dom";
import FeatureChart from "../components/FeatureChart";
import "./Product.scss";
import { productData } from "../Dump";
import { Publish } from "@material-ui/icons";

export const Product = () => {
  return (
    <div className="product">
      <div className="product__top">
        <h1 className="product__top--title">Product</h1>
        <Link to="/newproduct ">
          <button className="product__top--btn">Create</button>
        </Link>
      </div>
      <div className="product__mid">
        <div className="product__mid--left">
          <FeatureChart
            title="Sales Performance"
            data={productData}
            dataKey="Sales"
            grid
          />
        </div>
        <div className="product__mid--right">
          <div className="right__infoTop">
            <img
              src="https://images.unsplash.com/photo-1615750173609-2fbf12fd1d2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxtYWNib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <span className="right__infoTop--title">Macbook</span>
          </div>
          <div className="right__infoBot">
            <div className="right__infoBot__item">
              <span className="item--key">id:</span>
              <span className="item--value">123</span>
            </div>
            <div className="right__infoBot__item">
              <span className="item--key">sales:</span>
              <span className="item--value">500</span>
            </div>
            <div className="right__infoBot__item">
              <span className="item--key">active:</span>
              <span className="item--value">yes</span>
            </div>
            <div className="right__infoBot__item">
              <span className="item--key">in stock:</span>
              <span className="item--value">12</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bot">
        <span className="product__bot--title">Edit Product</span>
        <form className="product__bot--form">
          <div className="form__left">
            <label for="">Product Name</label>
            <input type="text" placeholder="Macbook" className="item--input" />

            <label for="">In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label for="">Available</label>
            <select name="available" id="available">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          
          <div className="form__right">
            <div className="form__right--update">
              <img
                src="https://images.unsplash.com/photo-1615750173609-2fbf12fd1d2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQyfHxtYWNib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <label htmlFor="file">
                <Publish className="update--icon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="form__right--btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
