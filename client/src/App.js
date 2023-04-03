import {Route, useLocation, Routes} from 'react-router-dom';
import {Home} from './Views/Home/Home';
import Form from './Views/Admin/Scenes/Form/Form';
import Detail from './Views/Detail/Detail';
import {NavBar} from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import LoadingView from './Views/Landing/LandingPage';
import {WhatsApp} from './Components/WhatsApp/Whatsapp';
import Footer from './Components/Footer/Footer';
import Cart from './Views/Cart/Cart';
import Contact from './Views/Contact/Contact';
import Nosotros from './Components/Nosotros/Nosotros';

import DashBoard from './Views/Admin/Scenes/Dashboard/Dasboard';
import AllProducts from './Views/Admin/Scenes/ViewProducts/AllProducts/AllProducts';
import DetailProduct from './Views/Admin/Scenes/ViewProducts/DetailProduct/DetailProduct';
import AllUsers from './Views/Admin/Scenes/ViewUsers/AllUsers/AllUsers';
import DetailUser from './Views/Admin/Scenes/ViewUsers/DetailUser/DetailUser';
import ProductForm from './Views/Admin/Scenes/ModifyProduct/ModifyProduct';

import UserProfile from './Authentication/ProfileScreen/UserProfile';
import SideBar from './Views/Admin/Components/SideBar/SideBar';

function App() {
	const {pathname} = useLocation();

	return (
		<div className="App">
			{pathname !== '/' && !pathname.includes('/admin') ? (
				<NavBar />
			) : null}
			<Routes>
				<Route path="/" element={<LoadingView />} />
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/detail/:id" element={<Detail />} />
				<Route exact path="/form" element={<Form />} />
				<Route exact path="/user/profile" element={<UserProfile />} />
				<Route exact path="/cart" element={<Cart />} />
				<Route exact path="/nosotros" element={<Nosotros />} />
				<Route exact path="/contact" element={<Contact />} />

				<Route exact path="/admin/dashboard" element={<DashBoard />} />
				<Route exact path="/admin/allProducts" element={<AllProducts />} />
				<Route exact path="/admin/allusers" element={<AllUsers />} />
				<Route exact path="/admin/detail/:id" element={<DetailProduct />} />
				<Route exact path="/admin/detailUser/:id" element={<DetailUser />} />
				<Route exact path="/admin/allProducts" element={<AllProducts />} />
				<Route exact path="/admin/product/detail/:id" element={<DetailProduct />} />
				<Route exact path="/admin/product/ModifyProduct/:id" element={<ProductForm />} />
				
				
			</Routes>
			{pathname !== '/' && pathname.split('/')[1] !== 'dashboard' ? (
				<Footer />
			) : null}
			{pathname !== '/' && pathname.split('/')[1] !== 'dashboard' ? (
				<WhatsApp />
			) : null}
		</div>
	);

}

export default App;
