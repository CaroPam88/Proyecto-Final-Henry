import { useForm } from './formHook'
import imgHome from '../../../../Assets/img/hero3.jpg';
import style from './Form.module.css';

import { createUser } from '../../../../Redux/actionUser';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import NotAdmin from '../../Components/NotAdmin/NotAdmin';

function Form() {
	const { form,  addColor,  error,  validated,  colorError,  handleForm, genreHandler, genreDeleteHandler, handlerColor, handlerAddColor, colorDeleteHandler, SubmitHandler } = useForm();
	let styleError = {
		fontWeight: 'bold',
		color: '#dc3545',
	};

	let styleValidet = {
		fontWeight: 'bold',
		color: ' #22a922',
	};
	const dispatch = useDispatch();

    const theUser = useSelector(state => state.user.theUser)
    const { isAuthenticated,user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated && !theUser.id) dispatch(createUser(user))
    },[])


	if (theUser.id && !theUser.admin || isAuthenticated) return (
        <NotAdmin />
    ) 
	else return (
		<div class={style.container}>
			<img src={imgHome} alt="" className={style.img} />
			<form onSubmit={(e) => SubmitHandler(e)} class={style.form} >
				<input type="text" name="name" onChange={(e) => handleForm(e)} placeholder="Insert a Name" className={style.input} />
				{error.name 
				? (<span style={styleError}>{error.name}</span>) 
				: (<span style={styleValidet}> {validated.name}</span>)}
				
				
					<select  className={style.input} name="size" onChange={(e) => handleForm(e)} >
						<option value="" >Insert a Size</option>
						<option value="S">S</option>
						<option value="M">M</option>
						<option value="L">L</option>
						<option value="XL">XL</option>
						<option value="XXL">XXL</option>
					</select>
					{error.size 
					? (<span style={styleError}>{error.size}</span>) 
					: (<span style={styleValidet}> {validated.size}</span>)}
				
					
				<input type="number" name="price" min={1} onChange={(e) => handleForm(e)} placeholder="Insert a Price" className={style.input}/>
				{error.price 
				? (<span style={styleError}>{error.price}</span>) 
				: (<span style={styleValidet}>{validated.price}</span>)}
				
				<div>
					<select name="type" onChange={(e) => handleForm(e)} className={style.input}>
						<option value="">Insert a Type</option>
						<option value="remera">T-Shirt</option>
						<option value="vestido">Dress</option>
						<option value="chomba">Polo</option>
						<option value="pantalon">Pants</option>
						<option value="short">Short</option>
					</select>
					{error.type 
					? (<span style={styleError}>{error.type}</span>) 
					: (<span style={styleValidet}>{validated.type}</span>)}
				</div>
					
				<div>
					<select name="genre" onChange={(e) => genreHandler(e)} className={style.input}> 
						<option value="">Insert a Genre</option> 
						<option value="Female">Woman</option> 
						<option value="Male">Man</option>
					</select>
					<div className={style.genreCont}>
						<div>
							{form.sex?.map((genre, i) => (
								<button type="button" key={i} value={`${genre}`} className={style.inputColorDelete} onClick={(e) => genreDeleteHandler(e)} >{genre}</button>
							))}
						</div>
						{error.sex 
						? (<span style={styleError}>{error.sex}</span>) 
						: (<span style={styleValidet}>{validated.sex}</span>)}
					</div>
				</div>
					
				<div>
					<div className={style.colorCont}>
						<input type="text" name="color" placeholder="Insert a Color" onChange={(e) => handlerColor(e)} className={style.colorContInput}/>
						<input type="number" name="stockColors" min={1} placeholder="Insert the amount for Color" onChange={(e) => handlerColor(e)} className={style.colorContInput} />	
					</div>
					<div className={style.contentCol}>
						{!colorError.nameColor && !colorError.sizeColor &&  addColor.color !== '' && addColor.stockColors !== 0 && <button onClick={(e) => handlerAddColor(e)} className={style.inputColor}>Insert a Color</button>}
						<div>
							{form.colors?.map((el, i) => (
							<button type="button" key={i} value={i} onClick={(e) => colorDeleteHandler(e)} className={style.inputColorDelete} >{`${el.color} | ${el.stockColors}`}</button>
							))}
						</div>
					</div>
					{colorError.nameColor || colorError.sizeColor
					? colorError.nameColor
					? (<span style={styleError} >{colorError.nameColor}</span>)
					: (<span style={styleError} >{colorError.sizeColor}</span>)
					: error.colors 
					? (<span style={styleError}>{error.colors}</span>) 
					: (<span style={styleValidet}>{validated.colors}</span>)}
				</div>
				<div>
					<input type="file" id="image" name="image"  onChange={(e) => handleForm(e)} className={style.input} />
					{error.image 
					? (<span style={styleError}>{error.image}</span>) 
					: (<span style={styleValidet}>{validated.image}</span>)}
				</div>
				{!error.name && !error.price && !error.type && !error.image && !error.sex && !error.stockSize && !error.colors && validated.name && <button type="submit" className={style.btn}>Submit</button>}
			</form>
		</div>
	);
}

export default Form;	