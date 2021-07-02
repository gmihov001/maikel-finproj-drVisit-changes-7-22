import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.scss";
import { SingleSymptomCard } from "./SingleSymptomCard";
import * as mdb from "mdb-ui-kit"; // lib
import { GlobalState } from "../store/appContext";

export const YourSymptoms = () => {
	const { store, actions } = useContext(GlobalState);
	const [symptomlist, setSymptomList] = useState([]);
	const [symptoms, setSymptoms] = useState({
		symptomName: "",
		// dose: "",
		// frequency: "",
		// reason: "",
		// sideEffects: "",
		severity: ""
	});
	const handleInput = e => {
		setSymptoms({ ...symptoms, [e.target.name]: e.target.value });
	};
	const confirmNewSymptom = sym => {
		actions.addUserSymptom(sym);
	};
	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});
	let dynamicValue = "adde";
	const getSymptomList = dynamicValue => {
		useEffect(() => {
			fetch(``)
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					// Read the response as json.
					return response.json();
				})
				.then(function(responseAsJson) {
					// Do stuff with the JSON
					console.log("response log", responseAsJson.results);
					setSymptomList(responseAsJson.results);
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});
		}, []);
	};

	console.log("second log", symptomlist);

	return (
		<>
			<h1>Your Symptoms</h1>
			<button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
				Add a new symptom.
			</button>
			{store.allUserSymptoms &&
				store.allUserSymptoms.map((symptom, index) => {
					console.log(symptom);
					return (
						// <SingleSymptomCard key={symptom.id} entity={symptom} onDelete={() => stateSetter(symptom.id)} />
						<SingleSymptomCard key={index} entity={symptom} onDelete={() => stateSetter(index)} />
					);
				})}
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Add a Symptom
							</h5>
							<button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="rxterms"
										className="form-control"
										name="symptomName"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="rxterms">
										Symptom name
									</label>
									<div>Suggetions here? </div>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="drug_strength"
										className="form-control"
										name="dose"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="drug_strength">
										Current dose
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="number"
										id="frequency-input"
										className="form-control"
										name="frequency"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="frequency-input">
										How often do you take it
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="reason-input"
										className="form-control"
										name="reason"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="reason-input">
										Reason for medication
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="sideEffects-input"
										className="form-control"
										name="sideEffects"
										onChange={handleInput}
									/>
									<label className="form-label" htmlFor="sideEffects-input">
										Side effects
									</label>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => confirmNewSymptom(symptoms)}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
