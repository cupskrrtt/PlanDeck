import Navbar from "./_components/navbar";

export default function DashboardLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<section>
			<Navbar />
			<div className="p-sm">{children}</div>
		</section>
	);
}
