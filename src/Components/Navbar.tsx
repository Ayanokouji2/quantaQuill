import Link from "next/link";
import MaxWidthWraper from "./maxWidthWraper";
import {buttonVariants} from "./ui/button";
import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = () => {
	return (
		<nav className="sticky h-15 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWraper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
					<Link className="flex z-40 font-semibold" href="/">
						<span>Quanta Quill</span>
					</Link>

					<div className="hidden items-center space-x4 sm:flex">
						<>
							<Link
								className={buttonVariants({
									variant: "ghost",
									size: "sm",
								})}
								href="/pricing"
							>
								Pricing
							</Link>
							<LoginLink
								className={buttonVariants({
									variant: "ghost",
									size: "sm",
								})}
							>
								Sign In
							</LoginLink>

							<RegisterLink
								className={buttonVariants({
									size: "sm",
								})}
							>
								Register
							</RegisterLink>
						</>
					</div>
				</div>
			</MaxWidthWraper>
		</nav>
	);
};

export default Navbar;
