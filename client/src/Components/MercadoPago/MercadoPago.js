import React, { useEffect, useCallback} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const FORM_ID = 'payment-form';

export default function Product({ids}) {
    const { id } = useParams();

    const obtenerPreference = useCallback(
        async() => {
            const response = await(axios.post(`/pay`, ids))
            const res = await response.data
            console.log(res);
            if(res.preferenceId){
                const script = document.createElement('script');
                script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
                script.type = 'text/javascript';
                script.setAttribute('data-preference-id', res.preferenceId);
                let form = document.getElementById(FORM_ID);
                if (!form) {
                    form = document.createElement('form');
                    form.id = FORM_ID;
                    form.method = 'GET';
                    document.body.appendChild(form);
                }
                form.appendChild(script);
            }
        },[id, ids],
    )
    useEffect(() => {
        obtenerPreference()
    }, [obtenerPreference])

    return(
        <form id={FORM_ID} method='GET' />
    )
    
}

