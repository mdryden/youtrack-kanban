import { BaseContext } from "koa";
import { Config } from "../config";
import fetch from "node-fetch";

export default class IndexController {
  public static async getIndex(ctx: BaseContext) {
    ctx.status = 200;
  }

  public static async getBackLog(context: BaseContext) {
    // TODO: check api key
    // TODO: create a youtrack service
    console.log(Config.isDev);
    console.log(Config.youtrackToken);
    let url = `${Config.youtrackInstance}/youtrack/api/issues?fields=idReadable,summary&query=${Config.backlogQuery}`;
    console.log(url);
    let result = await fetch(url, { method: "GET" });
    context.body = result.json();
  }
}
