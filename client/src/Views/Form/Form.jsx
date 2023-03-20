import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { validateError, validate, validateColorError } from '../../Components/formValidation/errorHandler';
import {postClothes} from '../../Redux/ActionsGet';
import uploadImage from './uploadImage';
import style from './Form.module.css';

function Form() {
	const dispatch = useDispatch();

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
	const [colorError, setColorError] = useState({});
  //////////////////////////////////////////////
	const handleForm = async (event) => {
		if (event.target.name === 'image') {
			setError(validateError({ ...form, [event.target.name]: await uploadImage(event.target.files[0]) }));
			setValidated(validate({ ...form, [event.target.name]: await uploadImage(event.target.files[0]) }));
			setForm({
				...form,
				[event.target.name]: await uploadImage(event.target.files[0]),
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
		dispatch(postClothes(form));
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
		});
		alert('The cloth has been submitted');
	}

	let styleError = {
		fontWeight: 'bold',
		color: '#dc3545',
	};

	let styleValidet = {
		fontWeight: 'bold',
		color: ' #22a922',
	};

	return (
 
    <form onSubmit={(e) => SubmitHandler(e)}>
		<input type="text" name="name" onChange={(e) => handleForm(e)} placeholder="Incert name"/>
		{error.name 
		? (<span style={styleError}>{error.name}</span>) 
		: (<span style={styleValidet}> {validated.name}</span>)}

		<section>
			<select name="size" onChange={(e) => handleForm(e)}>
				<option value="">Insert size</option>
				<option value="S">S</option>
				<option value="M">M</option>
				<option value="L">L</option>
				<option value="XL">XL</option>
				<option value="XXL">XXL</option>
			</select>
			{error.size 
			? (<span style={styleError}>{error.size}</span>) 
			: (<span style={styleValidet}> {validated.size}</span>)}
		</section>

		<input type="number" name="price" min={1} onChange={(e) => handleForm(e)} placeholder="Insert price"/>
		{error.price 
		? (<span style={styleError}>{error.price}</span>) 
		: (<span style={styleValidet}>{validated.price}</span>)}

		<div>
			<select name="type" onChange={(e) => handleForm(e)}>
				<option value="">Insert type</option>
				<option value="remera">Remera</option>
				<option value="vestido">Vestido</option>
				<option value="chomba">Chomba</option>
				<option value="pantalon">Pantalón</option>
				<option value="short">Short</option>
			</select>
			{error.type 
			? (<span style={styleError}>{error.type}</span>) 
			: (<span style={styleValidet}>{validated.type}</span>)}
		</div>
			
		<div>
			<select name="genre" onChange={(e) => genreHandler(e)}> 
				<option value="">Inser genre</option> 
				<option value="Female">Female</option> 
				<option value="Male">Male</option>
			</select>
			
			{form.sex?.map((genre, i) => (
				<button type="button" key={i} value={`${genre}`} onClick={(e) => genreDeleteHandler(e)} >{genre}</button>
			))}
			{error.sex 
			? (<span style={styleError}>{error.sex}</span>) 
			: (<span style={styleValidet}>{validated.sex}</span>)}
		</div>
			
		<div>
			<input type="text" name="color" placeholder="Incert color name" onChange={(e) => handlerColor(e)}/>
			<input type="number" name="stockColors" min={1} placeholder="Incert color stock" onChange={(e) => handlerColor(e)} />
			{!colorError.nameColor && !colorError.sizeColor &&  addColor.color !== '' && addColor.stockColors !== 0 && <button onClick={(e) => handlerAddColor(e)}>Add color</button>}
			{form.colors?.map((el, i) => (
			<button type="button" key={i} value={i} onClick={(e) => colorDeleteHandler(e)}>{`${el.color} | ${el.stockColors}`}</button>
			))}
			{colorError.nameColor || colorError.sizeColor
			? colorError.nameColor
			? (<span style={styleError} >{colorError.nameColor}</span>)
			: (<span style={styleError} >{colorError.sizeColor}</span>)
			: error.colors 
			? (<span style={styleError}>{error.colors}</span>) 
			: (<span style={styleValidet}>{validated.colors}</span>)}
		</div>
		<div>
			<input type="file" id="image" name="image" onChange={(e) => handleForm(e)}/>
			{error.image 
			? (<span style={styleError}>{error.image}</span>) 
			: (<span style={styleValidet}>{validated.image}</span>)}
		</div>
		{!error.name && !error.price && !error.type && !error.image && !error.sex && !error.stockSize && !error.colors && validated.name && <button type="submit">Submit</button>}
    </form>
	);
}

export default Form;