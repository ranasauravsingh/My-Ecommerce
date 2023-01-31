import React, { useEffect, useState } from "react";
import { view } from "../services/CommanService";
import { ConfigService } from "../services/ConfigService";

const Card = () => {
	const [productModel, setProductModel] = useState([]);
	const prodList = () => {
		view(ConfigService.BASE_URL_PRODUCT).then((res) => {
			// console.log(res);
			setProductModel(res);
		});
	};

	useEffect(() => {
		prodList();
	}, []);

	return (
		<>
			{productModel &&
				productModel.map((item, i) => {
					return (
						<div className="foodCard" key={i}>
							<div className="foodImage">
								<img id={`foodImg${i}`} src={item.productImage} alt="foodImg" />
								<div className="cardFunction mainFlex spaceE">
									<i
										className="fa fa-light fa-heart hideIcon"
										// onclick="wish(this)"
									></i>
									<div
										// onclick={`insert(foodName${i},price${i},foodImg${i})`}
										className="add"
										id={`card${i}`}
									>
										<h5>add to cart</h5>
									</div>
									<i className="fa fa-light fa-eye hideIcon"></i>
								</div>
							</div>
							<div className="foodDetails">
								<h2 id={`foodName${i}`}>{item.productName}</h2>
								<h3 className="foodPrice" id={`price${i}`}>
									{item.productPrice} <span>{item.cutPrice}</span>
								</h3>
							</div>
						</div>
					);
				})}
		</>
	);
};

export default Card;
