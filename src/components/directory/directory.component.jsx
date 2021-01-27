/**
 * Filename: directory.component.js
 * Author: Jose A Felix
 * Description: Directory component
 */

// ----------------------------------------------------------------

/** Components */
import React from "react";
import MenuItem from "../menu-item/menu-item.component";

/** Styles */
import "./directory.styles.scss";

// ----------------------------------------------------------------

// Main component
class Directory extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		// Component state
		this.state = {
			sections: [
				{
					title: "hats",
					imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
					id: 1,
					linkUrl: "shop/hats",
				},
				{
					title: "jackets",
					imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
					id: 2,
					linkUrl: "shop/jackets",
				},
				{
					title: "sneakers",
					imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
					id: 3,
					linkUrl: "shop/sneakers",
				},
				{
					title: "womens",
					imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
					size: "large",
					id: 4,
					linkUrl: "shop/womens",
				},
				{
					title: "mens",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
					id: 5,
					linkUrl: "shop/mens",
				},
			],
		};
	}

	render() {
		const { sections } = this.state;
		return (
			<div className="directory-menu">
				{sections.map(({ title, imageUrl, id, size }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
				))}
			</div>
		);
	}
}

// Exporting component
export default Directory;
