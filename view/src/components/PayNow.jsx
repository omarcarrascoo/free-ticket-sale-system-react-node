import React from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Don't forget to import axios
import StripeCheckout from 'react-stripe-checkout';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BuyBtn = styled.button`
    background:#D7FF52;
    border: 1px solid #D7FF52;
    color: #000;
    border-radius: 20px;
    padding: 12px 20px;
    margin: 0 auto;
    cursor: pointer;
    font-size: 20px;
`;
function PayNow({ order, orderId }) {
    console.log(order);
    console.log(orderId)
    const setNewOrder = async (data) => {
        try {
            const response = await axios.post(`http://134.199.238.36:7722/api/orders/setOrder`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return(response);
        } catch (error) {
            console.log('Error Making payment:', error);
        }
    };
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) =>{
        setStripeToken(token)
    }
    const history = useNavigate()
    

    // Wrap the makePayment function call inside an arrow function
    // const handlePaymentClick = () => {
    //     makePayment(order);
    // };
    const totalMult = order.totalOrder * 100
    console.log(totalMult);

    useEffect(()=>{
        const makeRequest = async(data) =>{
            try {
                const res = await axios.post(
                    "http://134.199.238.36:7722/api/checkout/payment",{
                        tokenId: stripeToken.id,
                        amount: totalMult,
                    }
                )
                console.log(res)
                if (res.status == 200) {
                    const newOrderData = await setNewOrder(order, res._id);
                    console.log("Borra todos los console log inserbibles")
                    console.log(newOrderData);
                    const newOrderArray = newOrderData.data
                    console.log(newOrderArray)
                    history(`/tickets/${newOrderArray[0]._id}`)
                }
                    // history.push('/succes')

            } catch (error) {
                console.log(error);
            }
        }
        stripeToken && makeRequest()

    },[stripeToken])
    return (
    <StripeCheckout 
    orderMail={order.mail} 
    image="http://134.199.238.36:7722/public/images/EventTest.png" 
    billingAddress 
    description={`Total de compra: $ ${order.totalOrder}`}
    amount={totalMult} 
    token={onToken} 
    stripeKey="pk_test_51RTFeZE4w5h4OZCMUPESSiErpXyDYAhotURjgoNdHB3xT7HYsVyEtm029MomSShduWn8Dj2j9lzrMuKXG1WRBOrS00HIPdQBvA"  >
        <BuyBtn >Buy Tickets</BuyBtn>
    </StripeCheckout>
    );
}

export default PayNow;
