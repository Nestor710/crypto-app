import { Col, Row } from "antd"

const NoData = () => {
  return (
    <Row gutter={[32, 32]} style={{ justifyContent: 'center' }}>
        <Col>
            <div className="crypto-empty-search">
                <h1>Sorry, we dont have data for you!</h1>
            </div>
        </Col>
    </Row>
  )
}

export default NoData