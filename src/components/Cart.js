import React from "react";

const Cart = () => {
	return (
		<div>
			<section>
				<div id="cartPage">
					<div class="container blank">
						<div class="mainFlex flexCol spaceB">
							<div class="upperCart mainFlex spaceB">
								<h4>my cart:</h4>
								<h6 id="totalItems"></h6>
							</div>
							<div class="midCart mainFlex spaceB flexWrap" id="midCart"></div>
							<div class="lowerCart mainFlex spaceB">
								<input
									type="button"
									value="back to shopping"
									id="backSh"
									onclick="switchHome()"
								/>
								<input
									type="button"
									value="clear cart"
									id="clrCart"
									onclick="clrCart()"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Cart;
