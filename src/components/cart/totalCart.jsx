import { useEffect } from "react";
import styles from "./cart.module.css";

export const TotalCart = ({total, setTotal,cart, found, convertPrice}) => {
  useEffect(() => {

    if(found) {
      const sum = found.map((item) => item[0].price * item[0].quantity);
      const reducer = (acc, cur) => acc + cur;
      if(sum.length === 0){
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }

  )
    return(
        <div className={styles.total}>
        <div className={styles.total_price}>
          <p className={styles.cart_product_total_price}>총 상품금액</p>
          <p className={styles.cart_product_price}>{total}</p>
        </div>
        <div className={styles.pay_minus}>
          <img src="/images/icon-minus-line.svg" alt="minus" />
        </div>
        <div className={styles.sale}>
          <p className={styles.cart_product_sale}>상품 할인</p>
          <p className={styles.cart_product_sale_price}>0원</p>
        </div>
        <div className={styles.pay_plus}>
          <img src="/images/icon-plus-line.svg" alt="plus" />
        </div>
        <div className={styles.delivery}>
          <p className={styles.cart_product_delivery}>배송비</p>
          <p className={styles.cart_product_delivery_price}>0원</p>
        </div>

        <div className={styles.payment}>
          <p className={styles.cart_prouct_payment}>결제 예정 금액</p>
          <p className={styles.cart_prouct_payment_price}>{convertPrice(total)}</p>
        </div>
      </div>
    )
}