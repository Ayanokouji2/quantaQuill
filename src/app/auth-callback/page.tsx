import {useRouter, useSearchParams} from "next/navigation";

const Page = async () => {
	const router = useRouter();

		const searchParams = useSearchParams();

		const origin = searchParams.get("origin");

		const apiresponse = await fetch('/api/whatever')

		const data = await apiresponse.json();

		return <div>page</div>;
};

export default Page;
