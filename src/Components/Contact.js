import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  border: 1px solid #000;
  background-color: #72A8E4;
  width: 2000px;
  height: 2000px;
`

const Contact = () => {
    return (
        <Content>
            <p>Contact Us</p>
        </Content>
    );
}

export default Contact;
