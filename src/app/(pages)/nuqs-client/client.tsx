"use client";

import { Input } from "@/components/ui/input";
import { parseAsString, useQueryState, useQueryStates } from "nuqs";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useDebouncedCallback } from "use-debounce";

export function NuqsInput() {
	const [keyword, setKeyword] = useQueryState("keyword", parseAsString);

	const handleChange = useDebouncedCallback((value: string) => {
		if (!value) {
			setKeyword(null);
			return;
		}
		setKeyword(value);
	}, 500);

	return (
		<>
			<Input
				key="input-client"
				// defaultValue={keyword || ""}
				onChange={(e) => {
					handleChange(e.target.value);
				}}
				placeholder="Enter a product name, e.g. 'laptop'"
			/>

			<Card className="sm:col-span-2 mt-5">
				<CardHeader className="pb-3">
					<CardTitle>👤 Client Side Search Params</CardTitle>
					<CardDescription className="max-w-lg text-balance leading-relaxed">
						value: {keyword}
					</CardDescription>
				</CardHeader>
			</Card>
		</>
	);
}
