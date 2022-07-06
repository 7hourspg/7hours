import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import "../components/Newsitem.css";
import Loading from "./Loading";

function News(props) {
  let Api_key = '8a48c369a3e943c8b4cda4612dc85c5b'

  const [data, setData] = useState([])
  const [category, setCategory] = useState(props.category)
  const [country, setCountry] = useState('in')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${Api_key}&pageSize=100`)


      .then(response => response.json())
      .then(json => {
        setData(json.articles)
        setIsLoading(false)
      });

    console.log('hello');

  }, [])

  return (
    <>
      {
        isLoading === true ?<Loading loading={isLoading}/> :  <div className="container content" >

        {
  
          data.map((item) => {
            return (<div style={{ margin: '0 auto' }} key={item.url}>
              <Newsitem title={item.title} img={item.urlToImage} desc={item.description} url={item.url} publish={item.source.name} loading={isLoading} />
            </div>
            )
          })
        }
      
  
      </div>
      }
  
    </>
  );
}

export default News;
