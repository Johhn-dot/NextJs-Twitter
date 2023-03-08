import * as prismic from "@prismicio/client";
import sm from "../../sm.json";

export const prismicClient = prismic.createClient(sm.apiEndpoint);
