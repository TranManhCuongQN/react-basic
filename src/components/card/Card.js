import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  border-radius: 8px;
  width: 100%;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: 0;
  width: calc(100% - 36px);
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: balck;
`;
const CardAmount = styled.span`
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
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://images.unsplash.com/photo-1447875569765-2b3db822bec9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </CardImage>

      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://images.unsplash.com/photo-1663720527180-4c60a78fe3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmount secondary={props.secondary} fontSize="22px">
            12,000 PSL
          </CardAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
