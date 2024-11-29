import React, { useState } from 'react';
import { Input, Select, Button, Typography, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Header, Container, StyledCard, Footer, JogoMemoriaContainer } from './stylesIndex';
import JogoMemoria from './Memoria';

const { Option } = Select;
const { Title, Text } = Typography;

const Conversor = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [convertedValue, setConvertedValue] = useState(null);

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert('Coloque um valor válido para converter.');
      return;
    }

    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao converter moeda. Tente novamente.');
        }
        return response.json();
      })
      .then((data) => {
        setConvertedValue(data.rates[toCurrency]);
      })
      .catch((err) => {
        console.error(err);
        alert('Erro ao converter moeda. Tente novamente.');
      });
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
            Conversor de Moedas
          </Title>
          <Input
            placeholder="Digite o valor a ser convertido"
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
              <Option value="USD">Dólar</Option>
              <Option value="EUR">Euro</Option>
              <Option value="BRL">Real</Option>
            </Select>
            <Select
              defaultValue="BRL"
              style={{ width: '48%' }}
              onChange={setToCurrency}
              size="large"
            >
              <Option value="USD">Dolár</Option>
              <Option value="EUR">Euro</Option>
              <Option value="BRL">Real</Option>
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
            Converter
          </Button>
          {convertedValue && (
            <div style={{ marginTop: 20, textAlign: 'center' }}>
              <Text type="success" strong style={{ fontSize: 18 }}>
                Valor Convertido: {convertedValue.toFixed(2)} {toCurrency}
              </Text>
            </div>
          )}
        </StyledCard>
      </Container>
      <Footer>
        Feito por Felipe :) - 2024
        <JogoMemoriaContainer className="jogo">
          <JogoMemoria />
        </JogoMemoriaContainer>
      </Footer>
    </div>
  );
};

export default Conversor;