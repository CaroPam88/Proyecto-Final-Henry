import React, {useEffect, useCallback} from 'react';
// import { useParams } from "react-router-dom";
import axios from 'axios';
import style from "./mercadopago.module.css"
const FORM_ID = 'payment-form';

export default function Product({ids}) {
	const obtenerPreference = useCallback(async () => {
		const response = await axios.post(`/pay`, ids);
		const res = await response.data;
		if (res.preferenceId) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src =
				'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
		
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
	}, []);
	useEffect(() => {
		obtenerPreference();
	}, [obtenerPreference]);

	localStorage.setItem('currentPurechase', JSON.stringify(ids));

	return <form id={FORM_ID} method="GET" />;
}
