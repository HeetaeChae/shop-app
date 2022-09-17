import React, { useState, useEffect } from "react";
import Navbar from "../../components/nav/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import Footer from "../../components/footer/Footer";
import "./Cart.css";

function Cart() {
  const dummyDatas = [
    {
      _id: 1,
      title: "첫 번째 상품",
      image:
        "https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg",
      price: 58000,
      quantity: 1,
      checked: false,
    },
    {
      _id: 2,
      title: "두 번째 상품",
      image:
        "https://interbalance.org/wp-content/uploads/2021/08/flouffy-VBkIK3qj3QE-unsplash-scaled-e1631077364762.jpg",
      price: 35000,
      quantity: 1,
      checked: false,
    },
    {
      _id: 3,
      title: "세 번째 상품",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFunsC41rpknsUqV5-rzazGLMyG3gzArw0jg&usqp=CAU",
      price: 27000,
      quantity: 1,
      checked: false,
    },
  ];

  const [datas, setDatas] = useState([...dummyDatas]);
  const [checkedDatas, setCheckedDatas] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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

  const onClickCheckboxAll = () => {
    //모든 data의 checked를 바꿈.
    const newDatas = datas.map((data) => ({
      ...data,
      checked: !data.checked,
    }));
    setDatas([...newDatas]);
  };

  const onClickDelete = (id) => {
    //해당 data를 삭제함.
    const newDatas = datas.filter((data) => {
      return data._id !== id;
    });
    setDatas([...newDatas]);
  };

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
              <td>
                <input type="checkbox" onClick={onClickCheckboxAll} />
              </td>
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
                  <img src={data.image} alt={data.title} />
                </td>
                <td>{data.price}</td>
                <td>
                  <input
                    type="number"
                    className="table__tbody--number"
                    value={data.quantity}
                    onChange={(e) => onChangeQuantity(e, data._id)}
                  ></input>
                </td>
                <td>{data.price * data.quantity}</td>
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
              <p>{totalPrice}</p>
            </div>
            <div className="cart__total--price-total">
              <p>총 결제금액</p>
              <p>{totalPrice}</p>
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
