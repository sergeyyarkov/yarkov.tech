import { graphql } from "../graphql";
import execute from "../graphql/execute";

export async function getLatestAppealsByClientIp(client_ip: string, limit: number = 5) {
	const LatestAppealByClientIpQuery = graphql(`
		query LatestAppealByClientIpQuery($client_ip: String!, $limit: Int!) {
			appeal(filter: { client_ip: { _eq: $client_ip } }, sort: ["-date_created"], limit: $limit) {
				client_ip
				date_created
			}
		}
	`);

	const result = await execute(LatestAppealByClientIpQuery, { client_ip, limit });

	if (!result.data) return [];

	return result.data.appeal;
}

type CreateAppealParams = { name: string; email: string; subject: string; message: string; client_ip: string };

export async function createAppeal({ name, email, subject, message, client_ip }: CreateAppealParams) {
	const CreateAppealQuery = graphql(`
		mutation CreateAppealQuery(
			$name: String!
			$email: String!
			$subject: String!
			$message: String!
			$client_ip: String!
		) {
			create_appeal_item(
				data: { name: $name, email: $email, subject: $subject, message: $message, client_ip: $client_ip }
			) {
				id
			}
		}
	`);

	const result = await execute(CreateAppealQuery, { name, email, subject, message, client_ip });

	return result.data?.create_appeal_item;
}
