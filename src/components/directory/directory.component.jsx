/**
 * Filename: directory.component.js
 * Author: Jose A Felix
 * Description: Directory component
 */

// ----------------------------------------------------------------
/** Imports */

import React from "react";

// ----------------------------------------------------------------
/** JSON data */

import SECTIONS_DATA from "./sections.data";

// ----------------------------------------------------------------
/** Components */

import MenuItem from "../menu-item/menu-item.component";

// ----------------------------------------------------------------
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
			sections: SECTIONS_DATA,
		};
	}

     // ----------------------------------------------------------------

     // Rendering component
	render() {
          // State desconstructed
		const { sections } = this.state;
		return (
			<div className="directory-menu">
				{sections.map(({ id, ...sectionProps }) => (
					<MenuItem key={id} {...sectionProps} />
				))}
			</div>
		);
	}
}

// Exporting component
export default Directory;
