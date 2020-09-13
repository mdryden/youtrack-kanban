import { BaseContext } from "koa";

export default class IndexController {
  public static async getIndex(ctx: BaseContext) {
    ctx.status = 200;
  }

  public static async getBackLog(context: BaseContext) {}
}
