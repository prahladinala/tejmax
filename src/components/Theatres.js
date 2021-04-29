import React, {useState, useEffect} from "react"
import TheatreCard from "./TheatreCard"
import Axios from "axios"
export default function Theatres() {

  const [details, setDetails] = useState({})
  const fetchDetails = async ()=>{
    const {data} = await Axios.get('http://localhost:3000/theatres')
    // console.log("RESPONSE: ", data)
    const details = data[0]
    setDetails(details)
  }
  useEffect(()=>{
    fetchDetails()
  },[])
  return (
    <div className='container'>
      <h1>Theatres</h1>
      <div className='row'>
        <TheatreCard details={details}/>
      </div>
    </div>
  )
}
