import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getProductDetail, modifyTheProduct} from '../../../../Redux/ActionsGet';
import style from './ModifyProduct.module.css';
import hero3 from '../../../../Assets/img/hero3.jpg';
import {useNavigate} from 'react-router-dom';
import uploadImage from '../Form/uploadImage';

import { createUser } from '../../../../Redux/actionUser';
import { useAuth0 } from '@auth0/auth0-react';
import NotAdmin from '../../Components/NotAdmin/NotAdmin';

function ProductForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {id} = useParams();
	const [newColor, setNewColor] = useState({
		color: '',
		stockColors: 0,
	});

	let types = ['vestido', 'remera', 'chomba', 'pantalon', 'short'];
	let talles = ['S', 'M', 'L', 'XL', 'XXL'];

	const theUser = useSelector(state => state.user.theUser)
    const { isAuthenticated,user } = useAuth0();

	useEffect(() => {
		dispatch(getProductDetail(id));
		if (isAuthenticated && !theUser.id) dispatch(createUser(user))
	}, [theUser]);

	//////////////////////////////////////////////////////////

	const product = useSelector((state) => state.products.productDetail);

	////////////////TALLE////////////////////////////////////

	function encontrarPrimerPar(arr) {
		for (let sizes of arr) {
			return sizes.size;
		}
	}
	let thetalle;
	if (product.sizes) {
		thetalle = encontrarPrimerPar(product.sizes);
	}

	// let imageUrl = await uploadImage(event.target.files[0])
	///////////////////////////////////////////////////

	let filterTypes = types.filter((e) => e !== product.type);

	const [name, setName] = useState(product.name);
	const [size, setSize] = useState(thetalle);
	const [colors, setColors] = useState(
		product.sizes?.flatMap((el) => el.colors.flatMap((el) => el))
	);
	console.log('estado colors', colors);
	const [price, setPrice] = useState(product.price);
	const [type, setType] = useState(product.type);
	const [image, setImage] = useState(product.image);
	const [sex, setSex] = useState(product.sex);

	///////////////////////////////////////////////////////////////
	//////////////////COLOR-STOCKCOLOR//////////////////////////////

	const handleColorChange = (e, index) => {
		let updatedColors = [...colors];
		let name = e.target.name;
		let value = e.target.value;

		if (e.target.value) {
			updatedColors = colors.map((color, i) => {
				if (i === index) {
					if (name === 'stockColors') {
						return {...color, [name]: parseInt(value)};
					} else {
						return {...color, [name]: value};
					}
				}
				return color;
			});
		}

		setColors(updatedColors);
	};

	const handleColorDelete = (e, index) => {
		e.preventDefault();
		const updatedColors = [...colors];
		updatedColors.splice(index, 1);
		setColors(updatedColors);
	};

	const handleNewColorChange = (e) => {
		e.preventDefault();
		console.log('NUEVO COLOR', newColor);
		let {name, value} = e.target;

		if (name === 'stockColors') {
			value = parseInt(value);
		}

		setNewColor({
			...newColor,
			[name]: value,
		});
	};

	const handleNewColorSubmit = (event) => {
		event.preventDefault();
		const updatedColors = [...colors, newColor];
		setColors(updatedColors);
		setNewColor({
			color: '',
			stockColors: 0,
		});
	};
	//////////////////////////////////////////////////////
	const handleToggleSex = (sexToToggle) => {
		if (sex.includes(sexToToggle)) {
			const newSex = sex.filter((sexItem) => sexItem !== sexToToggle);
			setSex(newSex);
		} else {
			const newSex = [...sex, sexToToggle];
			setSex(newSex);
		}
	};
	/////////////////////////////////////////////////////

	let nuevoTalles = talles;
	if (product.sizes) {
		nuevoTalles = talles.filter((talle) => {
			for (let i = 0; i < product.sizes.length; i++) {
				if (product.sizes[i].size === talle) {
					return false;
				}
			}
			return true;
		});
	}

	//////////////////////////////////////////////////
	///////////////////////////////////////////////////

	let handleImage = async (e) => {
		let imageUrl = await uploadImage(e.target.files[0]);
		setImage(imageUrl);
	};

	//////////////////////////////////////////////////////////

	const handleSubmit = (event) => {
		event.preventDefault();

		const updatedProduct = {
			name,
			size,
			price,
			type,
			image,
			sex,
			colors,
		};
		console.log(updatedProduct);
		dispatch(modifyTheProduct(id, updatedProduct));
		alert('The cloth has been Modify');
		navigate(`/admin/product/detail/${id}`);
	};

	if (!isAuthenticated) {
		return (
			<div className={style.content}>
				<div className={style.loader}>
					<div className={style.circle}></div>
					<div className={style.circle}></div>
					<div className={style.circle}></div>
					<div className={style.circle}></div>
				</div>
			</div>
		);
	}
	if (theUser.id && !theUser.admin) return (
        <NotAdmin />
    )
    else return (
		<section className={style.productFormContainer} name>
			<img src={hero3} alt="found" className={style.founds} />
			<form className={style.formContainer} onSubmit={handleSubmit}>
				<div className={style.formRow}>
					<label className={style.formLabel}>
						Name:
						<input
							className={style.formInput}
							type="text"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</label>
				</div>
				<div className={style.formRow}>
					<label className={style.formLabel}>
						Size:
						<select
							className={style.formSelect}
							value={size}
							onChange={(event) => setSize(event.target.value)}
						>
							<option value={thetalle}>{thetalle}</option>
							{nuevoTalles?.map((e) => {
								return (
									<option key={e} value={e}>
										{e}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div className={style.formRow}>
					<label className={style.formLabel}>
						Price:
						<input
							className={style.formInput}
							type="text"
							value={price}
							onChange={(event) => setPrice(event.target.value)}
						/>
					</label>
				</div>
				<div>
					<label className={style.formLabel}>
						Type:
						<select
							name=""
							id=""
							value={type}
							onChange={(event) => setType(event.target.value)}
						>
							<option value={type}>{type}</option>
							{filterTypes?.map((e) => {
								return (
									<option key={e} value={e}>
										{e}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div className={style.formRow}>
					<label className={style.formLabel}>
						Image:
						<input
							className={style.formInput}
							type="file"
							name="image"
							onChange={(e) => handleImage(e)}
						/>
					</label>
					<img src={image} alt="product.image" />
				</div>
				<div className={style.formRow}>
					<label className={style.formLabel}>
						Genre:
						<span className={style.checkboxLabel}>
							<label htmlFor="male">
								Male
								{sex && (
									<input
										type="checkbox"
										id="male"
										checked={sex.includes('Male')}
										onChange={() => handleToggleSex('Male')}
									/>
								)}
							</label>
						</span>
						<span className={style.checkboxLabel}>
							<label htmlFor="female">
								Female
								{sex && (
									<input
										type="checkbox"
										id="female"
										checked={sex.includes('Female')}
										onChange={() =>
											handleToggleSex('Female')
										}
									/>
								)}
							</label>
						</span>
					</label>
				</div>
				<div>
					<form onSubmit={handleNewColorSubmit}>
						<label className={style.formLabel}>Modify Color:</label>
						<input
							type="text"
							name="color"
							value={newColor.color}
							onChange={handleNewColorChange}
							placeholder="Nuevo color"
						/>
						<input
							type="number"
							name="stockColors"
							value={newColor.stockColors}
							onChange={handleNewColorChange}
							placeholder="Stock"
						/>
						<button type="button" onClick={handleNewColorSubmit}>
							Add a color
						</button>
					</form>
					{colors?.map((color, index) => (
						<div key={index}>
							<input
								type="text"
								name="color"
								value={color.color}
								onChange={(e) => {
									if (e.target.value) {
										handleColorChange(e, index);
									}
								}}
							/>
							<input
								type="number"
								name="stockColors"
								value={color.stockColors}
								onChange={(e) => {
									if (e.target.value) {
										handleColorChange(e, index);
									}
								}}
							/>
							<button
								onClick={(e) => handleColorDelete(e, index)}
							>
								Delete
							</button>
						</div>
					))}
				</div>
				<div className={style.formRow}>
					<button type="submit" className={style.submitButton}>
						Save Changes
					</button>
				</div>
			</form>
		</section>
	);
}

export default ProductForm;