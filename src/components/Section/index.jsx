import styled from 'styled-components';
import s from './section.module.scss';

const Section = styled.section.attrs((props) => ({
  className: s.section,
}))`
  margin: 3em auto;
`;

export default Section;
