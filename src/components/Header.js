import React from "react";
import "../styles/header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../StateProvider";

function Header() {
	const [{ user }] = useStateValue();

	return (
		<div className="header">
			<div className="header-left">
				<Avatar
					className="header-avatar"
					alt={user?.displayName}
					src={user.photoURL}
				/>
				<AccessTimeIcon />
			</div>

			<div className="header-search">
				<SearchIcon />
				<input placeholder="Random Text" />
			</div>

			<div className="header-right">
				<HelpOutlineIcon />
			</div>
		</div>
	);
}

export default Header;
