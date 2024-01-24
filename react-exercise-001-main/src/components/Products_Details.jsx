import React from 'react'
import { useParams } from 'react-router-dom'
import { Products_data, } from '../utils/Products_data'
import { Navbar } from './Navbar'
export const Products_Details = () => {
  const params = useParams()
  // s
  const data = Products_data.filter((pro) => {
    return pro.id == params.id
  })

  console.log(params.id);
  console.log(data)
  return (
    <div>
      <Navbar />
      {
        data.map((e, i) => {
          return (
            <div style={{}}>
              <img src={e.images} width="500px" height="600px" style={{ marginLeft: "150px", marginTop: "5%" }} alt="" />
              <h1 style={{ marginLeft: "690px", fontSize: "40px", marginTop: "-30%" }}>{e.title}</h1>
              <br /><br /><br />

              <h4 style={{ marginLeft: "690px", fontSize: "20px" }}>{e.description}</h4>
              <br /><br /><br />
              <h1 style={{ marginLeft: "690px", fontSize: "40px" }}>Price : {e.price}</h1>
            </div>
          )
        })
      }
    </div>
  )
}
