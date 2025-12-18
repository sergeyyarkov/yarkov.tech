import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { createAppeal, getLatestAppealsByClientIp } from "../queries";

const CREATE_APPEAL_LIMIT_HRS = 1;
const APPEALS_LAST_HRS_LIMIT = 2;

export const server = {
	appeal: defineAction({
		accept: "form",
		input: z.object({
			name: z.string(),
			email: z.string().email(),
			subject: z.string(),
			message: z.string(),
		}),
		handler: async (data, ctx) => {
			const currentDate = new Date();
			const appealsLastHrs = (await getLatestAppealsByClientIp(ctx.clientAddress, 5)).filter((a) => {
				const hourDiff = (currentDate.getTime() - new Date(a.date_created).getTime()) / (1000 * 60 * 60);
				return hourDiff <= CREATE_APPEAL_LIMIT_HRS;
			});

			if (appealsLastHrs.length >= APPEALS_LAST_HRS_LIMIT) {
				throw new ActionError({
					code: "TOO_MANY_REQUESTS",
					message: "Appeal create limit exceeded.",
				});
			}

			const appeal = await createAppeal({ ...data, client_ip: ctx.clientAddress });

			if (appeal) return true;

			throw new ActionError({
				code: "INTERNAL_SERVER_ERROR",
				message: "Unable to create appeal.",
			});
		},
	}),
};
