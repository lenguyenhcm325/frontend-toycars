import React, {useState} from "react";

import Select from "react-select";
import { DeliveryOptionContainer } from "./delivery-option.styles";

const options = [
    { value: "", label: "Please choose your delivery option"},
    { value: '€3.99', label: 'Standard Delivery (€3.99, ETA: 3-5 days)' },
    { value: '€7.99', label: 'Express Delivery (€7.99, ETA: Next business day)' }
  ];


const DeliveryOption = ({onBubble}) => {

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const handleChange = (option) => {
        onBubble(option.value);
        setSelectedOption(option);
        
      };
    return(

        <DeliveryOptionContainer>
      <Select
      styles={{
        container: base => ({
          ...base,
          flex: 1
        })
      }}
        value={selectedOption}
        onChange={(e) => handleChange(e)}
        isSearchable={false}
        options={options}
      />  
        </DeliveryOptionContainer>
    )


}

export default DeliveryOption;