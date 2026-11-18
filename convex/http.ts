import { handle as questionnaireAdmin } from "./questionnaireHttp";
import { httpRouter } from "convex/server";
import { authComponent, createAuth } from "./auth";

const http = httpRouter();
authComponent.registerRoutes(http, createAuth);
http.route({ path: "/questionnaire-admin", method: "POST", handler: questionnaireAdmin });
export default http;
