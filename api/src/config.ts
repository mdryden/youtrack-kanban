import * as defaults from "./devDefaults";

export interface IConfig {
  readonly isDev: boolean;
  readonly youtrackToken: string;
  readonly youtrackInstance: string;
  readonly backlogQuery: string;
}

const config: IConfig = {
  isDev: process.env.DEV?.toLowerCase() == "true" || false,
  youtrackToken: process.env.YOUTRACK_TOKEN,
  youtrackInstance: process.env.YOUTRACK_INSTANCE,
  backlogQuery: process.env.QUERY_BACKLOG || defaults.backlogQuery,
};

export const Config = config;
