import styled from 'styled-components';
import { Menu } from 'antd';

const Header = styled(Menu)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  background-color: #f0f2f5;
  padding: 20px;
`;

const StyledCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

export { Header, Container, StyledCard };
    