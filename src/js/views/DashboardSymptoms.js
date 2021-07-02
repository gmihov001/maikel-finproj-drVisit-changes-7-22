import React from "react";
import { YourSymptoms } from "../component/YourSymptoms";
import { SideNav } from "../component/SideNav";

export const DashboardSymptoms = () => {
	return (
		<div className="dashboard-wrapper d-flex">
			<div className="side-nav">
				<SideNav />
			</div>
			<div className="medication-column">
				<YourSymptoms />
			</div>
		</div>
	);
};
