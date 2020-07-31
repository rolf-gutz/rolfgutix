import React from 'react';
import styled from 'styled-components';

const Div  = styled.div`
    color: white;
    display: block;
	width: 300px;
    margin-bottom:10px;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: white;
    display: block;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 1px;
  margin: 5px;
  background: white;
  border: none;
  border-radius: 3px;
  outline:auto;
`;

function FormField ({label, type, name, value, onChange}) {
    return(
        <Div>
            <Label>
                {label}
            </Label>
   
            <Input
                type= {type}
                value={value}
                name= {name}
                onChange={onChange}
            />             
        </Div>
    )
} 

export default FormField;


