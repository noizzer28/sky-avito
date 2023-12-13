import styled from "styled-components";

export const Header = styled.header`
  background-color: #009ee4;
  @media screen and (max-width: 620px) {
    width: 100%;
    height: 55px;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    /* position: fixed; */
    left: 0;
    top: 0;
    z-index: 3;
  }
`;
export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;

  @media screen and (max-width: 620px) {
    height: 55px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 0 20px;
  }
`;
export const HeaderLogo = styled.div`
  display: none;
  @media screen and (max-width: 620px) {
    display: block;
  }
`;
export const HeaderLogoMobLink = styled.a`
  @media screen and (max-width: 620px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;
export const HeaderLogoMobImg = styled.img`
  @media screen and (max-width: 620px) {
    width: 32px;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;
export const HeaderButton = styled.button`
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  width: 232px;
  height: 40px;

  &:last-child {
    margin-left: 10px;
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

// export const Header = styled.div`

// `
// export const Header = styled.div`

// `
