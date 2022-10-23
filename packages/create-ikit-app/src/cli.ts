import type { PromptObject } from "prompts";
import prompts from "prompts";

const discordId = RegExp(/^[0-9]{16,19}$/);

const questions: PromptObject[] = [
	{
		type: "select",
		name: "value",
		message: "Select a template",
		choices: [
			{
				title: "JavaScript",
				value: "javascript",
			},
			{ title: "TypeScript", value: "typescript", disabled: true },
		],
		warn: "That template is not available",
	},
	{
		type: "text",
		name: "application_id",
		message: "Enter your bot's Application ID",
		validate: (value) =>
			discordId.test(value) ? true : "Please provide a proper application ID",
	},
	{
		type: "text",
		name: "public_key",
		message: "Enter your bot's Public Key",
		validate: (value) => (value ? true : "Please provide a proper public key"),
	},
	{
		type: "text",
		name: "token",
		message: "Enter your bot's Token",
		validate: (value) => (value ? true : "Please provide a proper public key"),
	},
	{
		type: "text",
		name: "development_server_id",
		message: "Enter your Development Server ID",
		validate: (value) =>
			discordId.test(value)
				? true
				: "Please provide a proper development server ID",
	},
	{
		type: "select",
		name: "platform",
		message: "Select Platform",
		choices: [
			{
				title: "Vercel",
				value: "vercel",
			},
		],
	},
];

const run = async () => {
	const result: prompts.Answers<
		| "value"
		| "application_id"
		| "public_key"
		| "token"
		| "development_server_id"
		| "platform"
	> = await prompts(questions);
	console.log(result);
};

void run();
