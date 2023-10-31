import styled from "styled-components";


export const ResultModelCardContainer = styled.div`
display: grid;
grid-template-columns: 4fr 6fr;
border: 1px solid #ddd;
position: relative;
margin: 10px;
margin-top: 0px;
padding: 10px;
border-radius: 5px;
background-color: #fff;
gap: 20px;
height: 300px;
padding-left: 20px;

& .image-div {
    display: flex; 
    align-items: center;
    justify-content: center;
}

& .model-image {
    aspect-ratio: 3/2;
    width: 100%;
    

}


  
& .model-details {
    flex: 3;
    font-size: 16px; 
  }
  
  
& .model-name {
    font-weight: bold;
    font-size: 24px; 
    margin-bottom: 5px;
  }
  
& .model-price {
    font-weight: bold;
    font-size: 24px; 
    color: #ff5733; 
    margin-bottom: 5px;
  }


& .model-description {
font-size: 20px; 
}



`