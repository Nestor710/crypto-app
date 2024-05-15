import { Col, Collapse, CollapseProps, Row, Typography } from "antd";
import { useGetCurrenciesReferencesQuery } from "../services/cryptoApi"

const { Panel } = Collapse
const { Text } = Typography

const CurrencyRef = () => {

  const {data: currenciesData, isLoading} = useGetCurrenciesReferencesQuery()

  const items = currenciesData?.data.currencies.map(currency => ({
    name: currency.name,
    type: currency.type,
    symbol: currency.symbol,
    sign: currency.sign,
    label: <Text>{currency.name}</Text>,
    children: 
    <Row>
      <Col span={6}>
        <Text>{currency.name}</Text>
      </Col>
    </Row>
  }))

  return (
    <>
      <Row>
        <Col span={6}>Name</Col>  
        <Col span={6}>Type</Col>  
        <Col span={6}>Symbol</Col>  
        <Col span={6}>Sign</Col>  
      </Row>
      <Row>
        <Col span={24}>
          <Collapse bordered={false} items={items}/>
        </Col>
      </Row>
    </>
  )
}

export default CurrencyRef