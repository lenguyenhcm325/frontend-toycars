import { ReactComponent as CarLogoSVG } from "../../assets/car-svgrepo-com.svg"
import { styled } from "styled-components";
// import { ReactComponent as UserSVGFile } from "../../assets/user-svg.svg"
// import { ReactComponent as CartSVGFile } from "../../assets/shopping-cart-svg.svg"


export const BrandNameContainer = styled.div`
    display: flex;
    padding-top: 20px;
    gap: 25px
`

export const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    // display: flex;
    width: 12%;
    // justify-content: center;   
`

export const IconsContainer = styled.div`
    display: flex;
    width: 12%;
    justify-content: space-around;
    gap: 24px;
    padding-right: 16px;
`

export const BrandName = styled.a`
    color: ${(props) => props.color || black};
    font-size: 16px;
`
export const CarLogo = styled(CarLogoSVG)`
    width: 64px;
    height: 64px;
    cursor: pointer;
`
// export const UserSVG = styled(UserSVGFile)`
//     width: 24px;
//     height: 24px;
// `

// export const CartSVG = styled(CartSVGFile)`
//     width: 24px;
//     height: 24px;
// `




