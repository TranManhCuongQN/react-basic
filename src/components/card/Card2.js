import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    border-radius: 8px;
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    bottom: 0;
    width: calc(100% - 36px);
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: #333;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue};
  }
  .card-amount {
    /* Nếu có props có tên là secondary thì css (scp)*/
    /* Nếu có props.fontSize thì lấy props.fontSize nếu không lấy 18px */
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: bold;
    ${(props) =>
      props.secondary &&
      css`
        background-image: linear-gradient(86.88deg, #20e3b2, #2cccff, #fc2872);
      `};
    ${(props) =>
      !props.secondary &&
      css`
        background-image: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;
// Thay vì mình tạo thêm biến const CardImage tại vì tạo thêm biến rất là nhiều có thể không thích đặt biến nhiều như vậy có thể đặt class
const CardImage = styled.div`
  height: 400px;
  border-radius: 8px;
  width: 100%;
`;

const Card2 = (props) => {
  console.log(props);
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>

      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://images.unsplash.com/photo-1663720527180-4c60a78fe3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <div className="user-name">@zndrson</div>
          </div>
          <div>256</div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount" fontSize="22px">
            12,000 PSL
          </span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;

// So sánh 2 cách dùng:
// C1: khai báo từng biến như này thì nó sẽ OK hơn 1 chỗ là nó không bị xung đột tại vì ta sử dụng const ở trong component. Truyền props quá nhiều thì chúng ta phải truyền riêng cho từng cái.
// C2: khi ta đặt class như này thì nó sẽ xảy ra vấn đề xung đột class. Nhanh hơn cách 1. Cần truyền 1 chỗ thôi.
