import * as dotenv from "dotenv";
import * as defaults from "./devDefaults";

let config: Config = null;
export const CurrentConfig = config;

export const load = () => {
  let result = dotenv.config();

  if (result.error) {
    throw result.error;
  }

  config = new Config();

  if (config.isDev) {
    console.log(result.parsed);
  }
};

class Config {
  readonly youtrackToken: string = process.env.YOUTRACK_TOKEN;
  readonly youtrackInstance = process.env.YOUTRACK_INSTANCE;
  readonly isDev: boolean = process.env.DEV?.toLowerCase() == "true" || false;

  readonly backlogQuery = process.env.QUERY_BACKLOG || defaults.backlogQuery;
}
