import { Link, useLocation } from "react-router";
import { FaStarOfLife } from "react-icons/fa";

export default function Ariane({ ...props }) {
	
	const title = props.title;
	const sub = props.subtitle;

	const location = useLocation();
	return(
		<div className="ariane">
			<div className="c-title--main c-title--centered">
				<h1>
					{ title }
				</h1>
				<h2 className="c-title--sub-main pt-10">
					{ sub }
				</h2>
			</div>
			<ul className="ariane__list">
				<li className="ariane__element">
					<Link to='/'>
						Home
					</Link>
				</li>
				<li className="ariane__element">
					{ location.pathname }
				</li>
			</ul>
			<div className="ariane__animations">
				<FaStarOfLife />
				<FaStarOfLife />
			</div>
		</div>
	)
}