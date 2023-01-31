import React from "react";

const WishList = () => {
	return (
		<div>
			<section>
				<div id="wishPage">
					<div class="container blank">
						<div class="mainFlex flexCol spaceB">
							<div class="upperCart mainFlex spaceB">
								<h4>my wishlist:</h4>
								<h6 id="totalwishItems">3 item</h6>
							</div>
							<div class="midCart mainFlex spaceB flexWrap" id="midWish">
								<div class="cartRow">
									<div class="cartItem">
										<div class="mainFlex spaceB">
											<div class="cartImage">
												<img
													src="./saurav_donutsImages/orange juice.webp"
													alt=""
												/>
											</div>
											<div class="cartDes">
												<a href="#">
													<h4>orange juice</h4>
												</a>
											</div>
										</div>
									</div>
									<div class="addWishCart">
										<input type="button" value="add to cart" id="addWishBtn" />
									</div>
									<div class="wishCnt">
										<h3 class="wishPrice" id="wish1">
											$2.00
											<span> $5.00 </span>
										</h3>
										<input type="button" value="remove" id="removeWishBtn" />
									</div>
								</div>
								<div class="cartRow">
									<div class="cartItem">
										<div class="mainFlex spaceB">
											<div class="cartImage">
												<img src="./saurav_donutsImages/burger.webp" alt="" />
											</div>
											<div class="cartDes">
												<a href="#">
													<h4>chesse deluxe</h4>
												</a>
											</div>
										</div>
									</div>
									<div class="addWishCart">
										<input type="button" value="add to cart" id="addWishBtn" />
									</div>
									<div class="wishCnt">
										<h3 class="wishPrice" id="wish1">
											$9.00
											<span> $11.00 </span>
										</h3>
										<input type="button" value="remove" id="removeWishBtn" />
									</div>
								</div>
								<div class="cartRow">
									<div class="cartItem">
										<div class="mainFlex spaceB">
											<div class="cartImage">
												<img src="./saurav_donutsImages/donut.jpg" alt="" />
											</div>
											<div class="cartDes">
												<a href="#">
													<h4>french toast</h4>
												</a>
											</div>
										</div>
									</div>
									<div class="addWishCart">
										<input type="button" value="add to cart" id="addWishBtn" />
									</div>
									<div class="wishCnt">
										<h3 class="wishPrice" id="wish1">
											$3.00
											<span> $5.00 </span>
										</h3>
										<input type="button" value="remove" id="removeWishBtn" />
									</div>
								</div>
							</div>
							<div class="lowerCart mainFlex spaceB">
								<input
									type="button"
									value="back to shopping"
									id="backSh"
									onclick="switchHome()"
								/>
								<input
									type="button"
									value="clear wishlist"
									id="clrWish"
									onclick="clrWish()"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default WishList;
