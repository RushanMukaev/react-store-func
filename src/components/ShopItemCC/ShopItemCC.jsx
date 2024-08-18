import classes from "./shopItemCC.module.css";
import { Component } from "react";

export class ShopItemCC extends Component {
  render() {
    const {brand, title, description, descriptionFull, currency, price} = this.props.item
    return (
      <div className={classes["main-content"]}>
    <h2>{brand}</h2>
    <h1>{title}</h1>
    <h3>{description}</h3>
    <div className={classes["description"]}>{descriptionFull}</div>
    <div className={classes["highlight-window mobile"]}>
      <div className={classes["highlight-overlay"]}></div>
    </div>
    <div className={classes["divider"]}></div>
    <div className={classes["purchase-info"]}>
      <div className={classes["price"]}>{currency}{price}</div>
      <button>Добавить в корзину</button>
    </div>
  </div>
    )
  }
  
}
