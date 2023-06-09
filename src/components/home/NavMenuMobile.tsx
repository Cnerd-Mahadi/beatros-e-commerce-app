import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { overlayAction } from "../../store/overlaySlice";
import { RootState } from "../../store/store";

export const NavMenuMobile = () => {
	const menu = useSelector((state: RootState) => state.overlay.menu);
	const cart = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleMenuOff = () => {
		dispatch(overlayAction.menuOff());
	};

	return (
		<>
			<div className={`nav-menu-mobile ${!menu && "menu-off"}`}>
				<div className="nav-items nav-menu-mobile__links">
					<NavLink
						to="/home"
						className={({ isActive }) => (isActive ? "active" : "link--tag")}
						onClick={() => handleMenuOff()}>
						Home
					</NavLink>
					<NavLink
						to="/shop"
						className={({ isActive }) => (isActive ? "active" : "link--tag")}
						onClick={() => handleMenuOff()}>
						Shop
					</NavLink>
					<NavLink
						to="/blogs"
						className={({ isActive }) => (isActive ? "active" : "link--tag")}
						onClick={() => handleMenuOff()}>
						Blog
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) => (isActive ? "active" : "link--tag")}
						onClick={() => handleMenuOff()}>
						<div className="nav-menu-mobile__cart">
							Cart {cart.length > 0 && <span>({cart.length})</span>}
						</div>
					</NavLink>
					<NavLink
						to="/signin"
						className={({ isActive }) => (isActive ? "active" : "link--tag")}
						onClick={() => handleMenuOff()}>
						SignIn
					</NavLink>
					<NavLink
						to="/signup"
						className={({ isActive }) => (isActive ? "active" : "link--tag")}
						onClick={() => handleMenuOff()}>
						SignUp
					</NavLink>
					<div
						className="link--tag nav-menu-mobile__logout"
						onClick={() => {
							handleMenuOff();
							localStorage.removeItem("username");
							navigate("/");
						}}>
						LogOut
					</div>
				</div>
			</div>
		</>
	);
};
