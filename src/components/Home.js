import React from "react";
import Card from "./Card";

const Home = () => {
	return (
		<div>
			<section>
				<div id="homePage">
					<div className="container blank">
						<div className="mainFlex flexWrap spaceB" id="mainCart">
							<Card />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
