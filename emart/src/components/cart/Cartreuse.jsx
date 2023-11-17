import React, { useState,useEffect,useContext} from 'react'
import axios from "axios";
import cartimage from '../assest/product-accessory1-400x400.jpg'
import "./Cartreuse.css"
import {contextCreated} from '../useContext/Context';


const Cartreuse = (props) => {
    var [increment,setIncrement] = useState(0)
    const handleIncrement =() =>{
        setIncrement(increment+1)
    }

    const handleDecreament = () => {
        setIncrement(increment-1)
    }
    const [product, setProduct] = useState();
    useEffect(() => {
        try{

            axios
              .get(`http://localhost:5000/cart/653a5883ed5ff3d646e346b3`)
              .then((res) => {setProduct(res.data)
              console.log(res.data)}
              
              );
        }catch(err){
            console.log(err)
        }
        
    }, []);
    const a = useContext( contextCreated)
    console.log(a)
   
    
  return (
    <>
   
    <div id='main_cart_div'>
        <div id='cartimage'>
            <img src={cartimage}></img>
        </div>
        <div id='ProductDetails'>
            <h3>Product Title</h3>
            <p>Product details</p>
            <p>my name is {a.user}</p>

        </div>
        <div id='quantity'>
            <div id='decrement'>
                <p onClick={handleDecreament}>-</p>
            </div>
            <h3>{increment}</h3>
            <div id='increment'>
                <p onClick={handleIncrement}>+</p>
                
            </div>
        </div>
        <div id='ProductSummary'>
            <p>Price</p>
            <p>Save for later</p>
            <p>Remove</p>

        </div>
    </div>
    </>
  )
}

export default Cartreuse