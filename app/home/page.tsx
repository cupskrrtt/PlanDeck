import {
	IconCalendarMonth,
	IconCircle,
	IconCircleCheck,
	IconLoader2,
	IconMessage2,
} from "@tabler/icons-react";

interface projectCardProps {
	projectTitle: string;
}

interface recentActivityCardProps {
	message: string;
	comment: string;
}

function RecentActivityCard({ message, comment }: recentActivityCardProps) {
	return (
		<div className="flex flex-col p-xs gap-xs bg-gray-200 rounded-xs">
			<p className="text-regular">{message}</p>
			<div className="flex items-center gap-2xs">
				<IconMessage2 className="w-icon-xs" />
				<p className="text-caption">{comment}</p>
			</div>
			<div className="flex items-center gap-2xs">
				<IconCalendarMonth className="w-icon-xs" />
				<p className="text-caption">20 Dec 2024</p>
			</div>
		</div>
	);
}

function ProjectCard({ projectTitle }: projectCardProps) {
	return (
		<div className="p-xs gap-xs bg-gray-200 flex-grow flex-basis-0">
			<h5 className="text-h5">{projectTitle}</h5>
			<div className="flex gap-sm">
				<div className="flex items-center gap-xs">
					<IconCircle className="w-icon-xs h-icon-xs" />
					<p className="text-caption">0</p>
				</div>
				<div className="flex items-center gap-xs">
					<IconLoader2 className="w-icon-xs h-icon-xs" />
					<p className="text-caption">0</p>
				</div>
				<div className="flex items-center gap-xs">
					<IconCircleCheck className="w-icon-xs h-icon-xs" />
					<p className="text-caption">0</p>
				</div>
			</div>
		</div>
	);
}

export default function DashboardPage() {
	const formatDate = (date: Date): string => {
		return new Intl.DateTimeFormat("en-GB", {
			weekday: "long", // Full weekday name (Monday, Tuesday, etc.)
			day: "numeric", // Day of the month (1, 2, 3, ..., 31)
			month: "long", // Full month name (January, February, etc.)
		}).format(date);
	};

	const today = new Date(); // Get today's date
	const formattedDate = formatDate(today);

	return (
		<div className="flex flex-col space-y-md">
			{/* Hello Message */}
			<div className="flex flex-col items-center justify-center gap-2xs">
				<h3 className="text-h3">Hi there, John Doe</h3>
				<p className="text-small">{formattedDate}</p>
			</div>

			{/* Divider */}
			<hr className="w-full border-black border-[1px]" />

			{/* Overview */}
			<div className="flex flex-col gap-xs">
				<h4 className="text-h4">Overview</h4>
				<p className="text-small">
					Welcome to ACME Inc.'s centralized project management workspace. This
					is where teams collaborate, manage projects, and track progress across
					departments. The workspace is designed to ensure transparency,
					streamline communication, and improve productivity in executing
					company goals.
				</p>
			</div>

			{/* Member */}
			<div className="flex flex-col gap-xs">
				<h4 className="text-h4">Member</h4>
				<div className="flex gap-2xs">
					<img
						src={
							"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="Jane Doe"
						className="w-icon-lg h-icon-lg rounded-rounded"
					/>
					<img
						src={
							"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="Jane Doe"
						className="w-icon-lg h-icon-lg rounded-rounded"
					/>
					<img
						src={
							"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="Jane Doe"
						className="w-icon-lg h-icon-lg rounded-rounded"
					/>
					<img
						src={
							"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="Jane Doe"
						className="w-icon-lg h-icon-lg rounded-rounded"
					/>
				</div>
			</div>

			{/* Ongoing Project */}
			<div className="flex flex-col gap-xs">
				<h4 className="text-h4">Ongoing Project</h4>
				<div className="flex gap-xs flex-wrap flex-basis-0">
					<ProjectCard projectTitle="tulip" />
					<ProjectCard projectTitle="tulip" />
					<ProjectCard projectTitle="tulip" />
					<ProjectCard projectTitle="tulip" />
					<ProjectCard projectTitle="tulip" />
					<ProjectCard projectTitle="ppp" />
					<ProjectCard projectTitle="yayay" />
				</div>
			</div>

			{/* Recent Activity */}
			<div className="flex flex-col gap-xs">
				<h4 className="text-h4">Recent Activity</h4>
				<div>
					<RecentActivityCard
						message="Yalip added shit"
						comment="adding shit"
					/>
				</div>
			</div>
		</div>
	);
}
