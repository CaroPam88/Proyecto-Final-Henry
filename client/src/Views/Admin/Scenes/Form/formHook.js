import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {  useNavigate  } from 'react-router-dom';
import { validateError, validate, validateColorError } from '../../../../Components/formValidation/errorHandler';
import {postClothes} from '../../../../Redux/ActionsGet';
import uploadImage from './uploadImage';

export const useForm = () => {
	const dispatch = useDispatch();
	const navigate =  useNavigate ();
	
	const [form, setForm] = useState({
		name: "",
		size: "",
		price: "",
		type: "",
		image: "",
		sex: [],
		stockGeneral: 0,
		stockSize: 0,
		colors: [],
		existing: true,
	});
	const [addColor, setAddColor] = useState({
		color: '',
		stockColors: 0,
	});
  ///////////////// Validation ///////////////////////////
	const [error, setError] = useState({});
	const [validated, setValidated] = useState({});
	const [colorError, setColorError] = useState({
		nameColor: '',
		sizeColor: '',
	});
  //////////////////////////////////////////////
	const handleForm = async (event) => {
		if (event.target.name === 'image') {
			let imageUrl = await uploadImage(event.target.files[0])
			setError(validateError({ ...form, image: imageUrl }));
			setValidated(validate({ ...form, image: imageUrl }));
			setForm({
				...form,
				image: imageUrl,
			});
		} else {
			setError(validateError({ ...form, [event.target.name]: event.target.value }));
			setValidated(validate({ ...form, [event.target.name]: event.target.value }));
			setForm({...form, [event.target.name]: event.target.value});
		}
	};

	const genreHandler = (e) => {
		let value = e.target.value;
		if (value === "") alert("Please select a genre");
		else if (form.sex?.includes(value))
			alert("The genre has already been selected");
		else {
			setError(validateError({ ...form, sex: value }));
			setValidated(validate({ ...form, sex: value }));
				setForm((prevState) => ({
				...prevState,
				sex: [...prevState.sex, value],
			}));
		}
	};
	const genreDeleteHandler = (e) => {
		const value = e.target.value;
		const filteredGenre = form.sex?.filter((genre) => genre !== value.toString());
		setError(validateError({ ...form, sex: filteredGenre }));
		setValidated(validate({ ...form, sex: filteredGenre }));
		setForm({ ...form, sex: filteredGenre });
	};

	const handlerColor = (e) => {
		const value = e.target.value;
		const event = e.target.name;

		if(value === 'color') value.toLowerCase();
		setColorError(validateColorError({...addColor, [event] : value }));
		setAddColor({...addColor, [event] : value });
	};
	const handlerAddColor = (e) => {
		e.preventDefault();
		setError(validateError({ ...form, colors: [...form.colors, addColor] }));
		setValidated(validate({ ...form, colors: [...form.colors, addColor] }));
		setForm((prevState) => ({
				...prevState,
				colors: [...form.colors, addColor],
			}));
	};
	const colorDeleteHandler = (e) => {
		const key = e.target.key;
		const index = form.colors?.findIndex((color) => color.key === key);
		if (index !== -1) {
			const filteredColors = [...form.colors];
			filteredColors.splice(index, 1);
			setError(validateError({ ...form, colors: filteredColors }));
			setValidated(validate({ ...form, colors: filteredColors }));
			setForm({ ...form, colors: filteredColors });
		}
	};

	function SubmitHandler(e) {
		e.preventDefault();
		dispatch(postClothes(form))
		.then(
		setForm({
			name: '',
			size: '',
			price: '',
			type: '',
			image: '',
			sex: [],
			stockGeneral: 0,
			stockSize: 0,
			colors: [],
			existing: true,
		}),
		navigate('/home')
		);
		alert('The cloth has been submitted');
	}

	return { form,  addColor,  error,  validated,  colorError,  handleForm, genreHandler, genreDeleteHandler, handlerColor, handlerAddColor, colorDeleteHandler, SubmitHandler }
}