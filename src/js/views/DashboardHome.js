import React, { useState, useEffect, useContext } from "react";
import "../../styles/dashboardHome.scss";
import { SideNav } from "../component/SideNav";
import { SmallMedCard } from "../component/SmallMedCard";
import { LineGraph } from "../component/LineGraph";
import { GlobalState } from "../store/appContext";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { BarGraph } from "../component/BarGraph";
import { Link, useLocation } from "react-router-dom";
import { SmallSympCard } from "../component/SmallSympCard";

export const DashboardHome = props => {
	const { store, actions } = useContext(GlobalState);

	return (
		<div className="container-fluid m-0 p-0 d-flex linear-bg">
			<div className="side-nav">
				<SideNav loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
			</div>
			<div className="container-fluid p-0 m-0">
				<div className="row g-0 p-0 m-0 med-and-symptom-row">
					<div className="col-6 your-symptoms-box">
						{store.allUserSymptoms &&
							store.allUserSymptoms.map((symptom, index) => (
								<Link
									key={index}
									to={{
										pathname: "/DashboardSymptomDetails/" + symptom.id,
										state: {
											symptom
										}
									}}>
									<SmallSympCard
										key={index}
										entity={symptom}
										id={store.allUserSymptoms[index].id}
										onDelete={() => stateSetter(symptom.id)}
									/>
								</Link>
							))}
					</div>
					<div className="col-6 your-medications-box d-flex flex-wrap">
						{store.allUserMedications &&
							store.allUserMedications.map((medication, index) => (
								<Link
									key={index}
									to={{
										pathname: "/DashboardMedDetails/" + medication.id,
										state: {
											medication
										}
									}}>
									<SmallMedCard
										key={index}
										entity={medication}
										id={store.allUserMedications[index].id}
										onDelete={() => stateSetter(medication.id)}
									/>
								</Link>
							))}
					</div>
				</div>
				<div className="row charts-row g-0 p-0 m-0">
					<div className="col-12 ">Charts go here</div>
					<div>
						<BarGraph />
					</div>
				</div>
			</div>
			{props.loggedIn ? "" : <Redirect to="SignIn" />}
		</div>
	);
};

DashboardHome.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
