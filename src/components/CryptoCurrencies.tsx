import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useEffect, useState } from "react";
import { Coin } from "../interfaces/CryptoApi.interface";
import Loader from "./Loader";
import NoData from "./NoData";

const CryptoCurrencies = ({ simplified }: {simplified?: boolean}) => {
  const count = simplified ? 10 : 100
  
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
  const coins = cryptoList?.data.coins
  const [cryptos, setCryptos] = useState<Coin[] | undefined>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { 
    const filteredData = coins?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setCryptos(filteredData)
  }, [cryptoList, searchTerm, coins]);

  if(isFetching) return (<Loader />)
  

  return (
    <>
      { !simplified &&
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      }
      {
      cryptos && cryptos?.length > 0 &&
      <Row gutter={[32,32]} className="crypto-card-container">
        { cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="crypto-image" src={currency.iconUrl}  alt={currency.name} />}
                  hoverable
                >
                  <p>Price: {millify(Number(currency.price))}</p>
                  <p>Market Cap: {millify(Number(currency.marketCap))}</p>
                  <p>Daily Change: {millify(Number(currency.change))}%</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
      }
      { cryptos && cryptos?.length <= 0 && <NoData />}
    </>
  )
}

export default CryptoCurrencies