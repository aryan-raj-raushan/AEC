import { ClockIcon } from "@/src/Asset";
import Image from "next/image";

export default function UpdateDateArticle({ dateTime }: { dateTime: string }) {
	return (
		<div className="flex gap-3 my-1 text-primary-text">
			<Image src={ClockIcon} width={20} height={20} alt="" />
			<p>Updated on {dateTime}</p>
		</div>
	);
}
