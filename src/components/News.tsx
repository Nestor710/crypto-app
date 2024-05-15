import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { Typography, Row, Col, Card } from 'antd'
import moment from 'moment'
import Loader from './Loader'

const { Text, Title } = Typography

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'

const News = ({ simplified }: {simplified?: boolean}) => {
  const { data: news, isLoading } = useGetCryptoNewsQuery()
  const cryptoNews = simplified ? news?.data.slice(0, 10) : news?.data
  
  if (isLoading) return (<Loader />)

  return (
    <Row gutter={[24, 42]}>
      { cryptoNews?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{ news.title }</Title>
                <img src={news.thumbnail || demoImage} height={75} width={75} alt={news.title} />
              </div>
              <p>
                { 
                  news.description.length > 100 
                  ? `${news.description.substring(0, 100)}...`
                  : news.description
                }
              </p>
              <div className="provider-container">
                <Text>{moment(news.createdAt).startOf('seconds').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))
      }
    </Row>
  )
}

export default News