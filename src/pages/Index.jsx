import React, { useState } from 'react';
import { Input, Select, Button, Typography, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Header, Container, StyledCard } from './styles';

const { Option } = Select;
const { Title, Text } = Typography;

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [convertedValue, setConvertedValue] = useState(null);

  const handleConvert = () => {
    fetch(`https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
      .then((response) => response.json())
      .then((data) => setConvertedValue(data.result))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Header mode="horizontal" theme="dark">
        <Menu.Item key="home">
          <Link to="/">Início</Link>
        </Menu.Item>
        <Menu.Item key="ferramentas">
          <Link to="/">Mais ferramentas</Link>
        </Menu.Item>
        <Menu.Item key="trabalho">
          <Link to="/">Trabalhe conosco</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/">Sobre</Link>
        </Menu.Item>
      </Header>
      <Container>
        <StyledCard>
          <Title level={3} style={{ textAlign: 'center', marginBottom: 20 }}>
            Currency Converter
          </Title>
          <Input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ marginBottom: 20 }}
            size="large"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
            <Select
              defaultValue="USD"
              style={{ width: '48%' }}
              onChange={setFromCurrency}
              size="large"
            >
              <Option value="USD">USD</Option>
              <Option value="EUR">EUR</Option>
              <Option value="BRL">BRL</Option>
            </Select>
            <Select
              defaultValue="BRL"
              style={{ width: '48%' }}
              onChange={setToCurrency}
              size="large"
            >
              <Option value="USD">USD</Option>
              <Option value="EUR">EUR</Option>
              <Option value="BRL">BRL</Option>
            </Select>
          </div>
          <Button
            type="primary"
            size="large"
            block
            onClick={handleConvert}
            style={{
              backgroundColor: '#1890ff',
              borderColor: '#1890ff',
              fontWeight: 'bold',
            }}
          >
            Convert
          </Button>
          {convertedValue && (
            <div style={{ marginTop: 20, textAlign: 'center' }}>
              <Text type="success" strong style={{ fontSize: 18 }}>
                Converted Value: {convertedValue.toFixed(2)} {toCurrency}
              </Text>
            </div>
          )}
        </StyledCard>
      </Container>
    </div>
  );
};

export default CurrencyConverter;
