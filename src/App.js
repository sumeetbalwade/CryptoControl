import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Layout, Typography, Space } from "antd";
import {
	Navbar,
	Exchanges,
	HomePage,
	Crytocurrencies,
	CrytoDetails,
	News,
} from "./components";
import "./App.css";
const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Switch>
							<Route exact path='/'>
								<HomePage />
							</Route>
							<Route exact path='/exchanges'>
								<Exchanges />
							</Route>
							<Route exact path='/crytocurrencies'>
								<Crytocurrencies />
							</Route>
							<Route exact path='/crypto/:coinId'>
								<CrytoDetails />
							</Route>
							<Route exact path='/news'>
								<News />
							</Route>
						</Switch>
					</div>
				</Layout>
				<div className='footer'>
					<Typography.Title
						level={5}
						style={{ color: "white", textAlign: "center" }}
					>
						CryptoControl <br />
						Made with Love
					</Typography.Title>
					<Space>
						<Link to='/'>Home</Link>
						<Link to='/exchanges'>Exchanges</Link>
						<Link to='/news'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
