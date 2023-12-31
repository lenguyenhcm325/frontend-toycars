import { ReactComponent as CarLogoSVG } from "../../assets/car-svgrepo-com.svg"
import { styled } from "styled-components";
 



export const BrandNameContainer = styled.div`
    display: flex;
    padding-top: 20px;
    gap: 25px
`

export const NavigationContainer = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

& .link, & .link:visited {
    text-decoration: none;
    text-align: center;
    color: black;
}

& .search-bar-outer-div {
    flex: 1;
}
`

export const LogoContainer = styled.div`
    width: 12%;   
`

export const IconsContainer = styled.div`
    display: flex;
    width: 12%;
    justify-content: space-around;
    gap: 24px;
    font-size: 16px;
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




