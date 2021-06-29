import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { SignUp } from "./views/SignUp";
import { Navbar } from "./component/navbar";
import { SignIn } from "./views/SignIn";
import { Dashboard } from "./views/Dashboard";
import { SectionCard } from "./component/SectionCard";
import { YourMedications } from "./component/YourMedications";
import { DailySymptoms } from "./views/DailySymptoms";
import { DailyVitals } from "./views/DailyVitals";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/demo">
					<Demo />
				</Route>
				<Route exact path="/single/:theid">
					<Single />
				</Route>
				<Route exact path="/AboutUs" component={SectionCard} />
				<Route exact path="/YourMedications" component={YourMedications} />
				<Route exact path="/DailyVitals" component={DailyVitals} />
				<Route exact path="/DailySymptoms" component={DailySymptoms} />
				<Route exact path="/SignUp" component={SignUp} />
				<Route exact path="/SignIn" component={SignIn} />
				<Route exact path="/Dashboard" component={Dashboard} />
				<Route>
					<h1>Not found!</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
