import React, { useEffect, useCallback} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const FORM_ID = 'payment-form';

export default function Product({items}) {
    const { id } = useParams();

    const obtenerPreference = useCallback(
        async() => {
            const res = await(await (axios.post(`/pay`, items)).data)
            console.log(res);
            if(res.preferenceId){
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.mercadopago.com.co/integrations/v1/web-payment-checkount.js';
                script.setAttribute('data-preference-id', res.preferenceId);
                const form = document.getElementById(FORM_ID);
                form.appendChild(script)
            }
        },[id, items],
    )
    useEffect(() => {
        obtenerPreference()
    }, [obtenerPreference])

    return(
        <form id={FORM_ID} method='POST' />
    )
}
