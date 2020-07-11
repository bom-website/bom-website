import React from 'react';
import styled from 'styled-components';
import bgImage from '../images/bom.jpg';

const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${bgImage});
  width: 2000px;
  height: 2000px;
`
const DiamondList = styled.ul`
  list-style-type: circle;
`;

const AboutUs = () => {
  return (
    <Content>
          <h1><strong>Xin Chào Anh Chị Em! </strong></h1>
          <div>
            <p>Đây là forum để chúng ta <strong>chia sẻ chứng ngôn</strong> của chúng ta về:</p>
              <ol>
                <li><strong><em>Sách Mặc Môn (Book of Mormon)</em></strong></li>
                <li><strong><em>Giáo Hội Các Thánh Hữu Ngày Sau Của Chúa Giê Su Ky Tô (The Church of Jesus Christ of Latter Day Saints)</em></strong>.</li>
              </ol>
            </div>

            <div>
              <p><strong>Sách Mặc Môn là gì?</strong></p>
              <DiamondList>
                <li><a href="https://www.churchofjesuschrist.org/study/scriptures/bofm?lang=vie" target="_blank" rel="noopener noreferrer">Đọc Sách Mặc Môn</a></li>
                <li><a href="https://www.youtube.com/watch?v=edg-0hAM3iA&list=PLWHql2MOiVzrVKRL790oOLrmxf-6HBp3k" target="_blank" rel="noopener noreferrer">Xem phim về Sách Mặc Môn</a></li>
              </DiamondList>
              <p><strong>Giáo Hội Các Thánh Hữu Ngày Sau Của Chúa Giê Su Ky Tô là gì?</strong></p>
              <ul>
                <li><a href="https://www.churchofjesuschrist.org/study?lang=vie" target="_blank" rel="noopener noreferrer">Trang web của Giáo Hội Các Thánh Hữu Ngày Sau Của Chúa Giê Su Ky Tô/ The Church of Jesus Christ of Latter Day Saints</a></li>
                <li><a href="https://www.youtube.com/user/MormonMessages" target="_blank" rel="noopener noreferrer">Kênh Youtube của Giáo Hội Các Thánh Hữu Ngày Sau Của Chúa Giê Su Ky Tô</a></li>
              </ul>
            </div>
    </Content>
  );
}
export default AboutUs;
