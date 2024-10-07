"use client";
import {
	IconBell,
	IconHome,
	IconList,
	IconMenu2,
	IconPlus,
	IconSubtask,
	IconX,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Clean up the effect when the component is unmounted
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	function SlideInMenu({ toggleMenu }: { toggleMenu: () => void }) {
		return (
			<div className="">
				<div
					className={`fixed inset-0 left-none top-none w-full h-full bg-black opacity-50 ${isOpen ? "block" : "hidden"}`}
					onClick={toggleMenu}
				></div>

				<div
					className={`fixed left-none top-none w-[50%] p-xs h-full bg-gray-800 text-white transform ${
						isOpen ? "translate-x-0" : "-translate-x-full"
					} transition duration-300 ease-in-out`}
				>
					<nav>
						<ul className="flex flex-col gap-xs">
							<li className="flex gap-2xs">
								<IconHome className="w-icon-sm h-icon-sm" />
								<p className="text-caption">Home</p>
							</li>
							<li className="flex flex-col gap-xs">
								<div className="flex justify-between w-full items-center">
									<div className="flex gap-2xs">
										<IconList className="w-icon-sm h-icon-sm" />
										<p className="text-caption">Project(s)</p>
									</div>
									<IconPlus className="w-icon-xs h-icon-xs" />
								</div>

								{/* Project List */}
								<ul className="flex flex-col gap-xs ml-xs">
									<li className="flex gap-2xs">
										<IconSubtask className="w-icon-sm h-icon-sm" />
										<p className="text-caption">Project A</p>
									</li>
									<li className="flex gap-2xs">
										<IconSubtask className="w-icon-sm h-icon-sm" />
										<p className="text-caption">Project A</p>
									</li>

									<li className="flex gap-2xs">
										<IconSubtask className="w-icon-sm h-icon-sm" />
										<p className="text-caption">Project A</p>
									</li>

									<li className="flex gap-2xs">
										<IconSubtask className="w-icon-sm h-icon-sm" />
										<p className="text-caption">Project A</p>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}

	return (
		<>
			<nav className="flex justify-between px-sm py-xs border-b-black border-b-2 sticky top-[0px] bg-white">
				<div className="flex items-center gap-sm">
					<button onClick={toggleMenu}>
						<IconMenu2 />
					</button>
					<div className="flex items-center gap-xs">
						<IconHome className="w-icon-md" />
						<p className="text-small">Acme Inc.</p>
					</div>
				</div>
				<IconBell />
			</nav>
			{isOpen && <SlideInMenu toggleMenu={toggleMenu} />}
		</>
	);
}
