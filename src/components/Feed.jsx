import React from 'react';
import './Feed.css'; 

const NewsComponent = ({ news }) => {
  return (
    <div className="news-container">
      {news.map((item, index) => (
        <div key={index} className="news-card">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Author: {item.author}</p>
          <p>Published At: {item.publishedAt}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}

const Feed = () => {
  const news = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      description: 'Advancements in AI and ML applications across various industries, including natural language processing, computer vision, and predictive analytics.',
      author: 'John Doe',
      publishedAt: '2024-03-16',
      url: 'https://example.com/news1'
    },
    {
        title: 'Blockchain and Cryptocurrency',
        description: 'Developments in blockchain technology, decentralized finance (DeFi), non-fungible tokens (NFTs), and the adoption of cryptocurrencies by mainstream financial institutions.',
        author: 'John Doe',
        publishedAt: '2024-03-16',
        url: 'https://example.com/news1'
      },
    {
        title: 'Cybersecurity',
        description: ' Increasing focus on cybersecurity measures due to rising cyber threats, data breaches, and the importance of protecting sensitive information in the digital age',
        author: 'John Doe',
        publishedAt: '2024-03-16',
        url: 'https://example.com/news1'
      },
    {
      title: '5G Technology',
      description: 'Expansion of 5G networks worldwide and its implications for faster internet speeds, low latency, and enabling technologies like Internet of Things (IoT), augmented reality (AR), and virtual reality (VR).',
      author: 'Jane Smith',
      publishedAt: '2024-03-15',
      url: 'https://example.com/news2'
    }
   
  ];

  return (
    <div className="feed">
      <h1>Trending Topics </h1>
      <br />
      <NewsComponent news={news} />
    </div>
  );
}

export default Feed;
