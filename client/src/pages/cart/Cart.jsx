import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import Footer from "../../components/footer/Footer";
import "./Cart.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteReducer } from "../../redux/modules/cartSlice";

function Cart() {
  const [datas, setDatas] = useState([]);
  const [checkedDatas, setCheckedDatas] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const newCart = cart.map((product) => {
      return {
        ...product,
        quantity: 1,
        checked: false,
      };
    });
    setDatas([...newCart]);
  }, []);

  const onChangeQuantity = (e, id) => {
    //해당 data의 quantity를 바꿈.
    const newDatas = datas.map((data) => ({
      ...data,
      quantity: data._id === id ? e.target.value : data.quantity,
    }));
    setDatas([...newDatas]);
  };

  const onClickCheckbox = async (id) => {
    //해당 data의 checked를 바꿈.
    const newDatas = datas.map((data) => ({
      ...data,
      checked: data._id === id ? !data.checked : data.checked,
    }));
    setDatas([...newDatas]);
  };

  const onClickDelete = (id) => {
    //해당 data를 삭제함.
    const newDatas = datas.filter((data) => {
      return data._id !== id;
    });
    setDatas([...newDatas]);
    //해당 data를 리듀서로 삭제함.
    const data = datas.filter((data) => {
      return data._id === id;
    });
    console.log(data[0]._id);
    dispatch(deleteReducer(data[0]._id));
  };
  console.log(cart);

  const onClickDeleteChecked = () => {
    //선택된 data들을 삭제함.
    const newDatas = datas.filter((data) => {
      return data.checked === false;
    });
    setDatas([...newDatas]);
  };

  const onClickDeleteAll = () => {
    //모든 data를 삭제함.
    setDatas([]);
  };

  useEffect(() => {
    const newDatas = datas.filter((data) => {
      return data.checked === true;
    });
    setCheckedDatas([...newDatas]);
  }, [datas]);

  useEffect(() => {
    //배열에 checked된 상품의 price를 넣어준다.
    let priceArr = [];
    checkedDatas.map((checkedData) => {
      return priceArr.push(checkedData.price * checkedData.quantity);
    });
    const totalPrice = priceArr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    setTotalPrice(totalPrice);
  }, [checkedDatas]);

  return (
    <>
      <Navbar />
      <div className="cart">
        <Titlebar text="장바구니" />
        <table className="table">
          <thead>
            <tr>
              <td>전체 {datas.length}개</td>
              <td>선택</td>
              <td>상품명</td>
              <td>사진</td>
              <td>가격</td>
              <td>수량</td>
              <td>총 가격</td>
              <td>삭제</td>
            </tr>
          </thead>
          {datas.map((data) => (
            <tbody key={data._id}>
              <tr>
                <td>{datas.indexOf(data) + 1}</td>
                <td>
                  <input
                    type="checkbox"
                    className="table__tbody--checkbox"
                    onClick={() => onClickCheckbox(data._id)}
                  />
                </td>
                <td>{data.title}</td>
                <td>
                  <img
                    src={`http://localhost:7000/${data.productImg[0]}`}
                    alt={data.title}
                  />
                </td>
                <td>{data.price.toLocaleString("ko-KR")} 원</td>
                <td>
                  <input
                    type="number"
                    className="table__tbody--number"
                    value={data.quantity}
                    onChange={(e) => onChangeQuantity(e, data._id)}
                  ></input>
                </td>
                <td>
                  {(data.price * data.quantity).toLocaleString("ko-KR")} 원
                </td>
                <td>
                  <button onClick={() => onClickDelete(data._id)}>삭제</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="cart__total">
          <div className="cart__total--info">
            <div className="cart__total--info-text">장바구니 정보</div>
            <div className="cart__total--info-title">
              {checkedDatas.length !== 0
                ? `${checkedDatas[0].title} 외 ${checkedDatas.length - 1}건`
                : "상품이 없습니다."}
            </div>
            <div className="cart__total--info-quantity">
              전체 {checkedDatas.length}개
            </div>
          </div>
          <div className="cart__total--price">
            <div className="cart__total--price-select">
              <p>선택상품 금액</p>
              <p>{totalPrice.toLocaleString("ko-KR")} 원</p>
            </div>
            <div className="cart__total--price-total">
              <p>총 결제금액</p>
              <p>{totalPrice.toLocaleString("ko-KR")} 원</p>
            </div>
          </div>
          <div className="cart__total--button">
            <button onClick={onClickDeleteChecked}>선택 삭제</button>
            <button onClick={onClickDeleteAll}>전체 삭제</button>
            <button>결제하기</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
