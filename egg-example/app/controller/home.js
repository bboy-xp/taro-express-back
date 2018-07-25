'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, xp';
  }
  postCode() {
    const ctx = this.ctx;
    console.log(ctx.request.body);
    const data = ctx.request.body;
    const Code = ctx.model.Code;
    for (let i = 0; i < data.codeList.length; i++) {
      const codeStr = data.codeList[i];
      const code = new Code({
        openid: data.openid,
        code: codeStr,
      });
      code.save();
    }

    ctx.body = 'ok';
  }
  async postSearchCode() {
    const ctx = this.ctx;
    console.log(ctx.request.body);
    const data = ctx.request.body;
    const code = data.code;
    const Code = ctx.model.Code;
    //find的结果按照时间排序
    const searchCode = await Code.find({ code: code}).sort({'_id': -1});
    console.log(searchCode);
    
    ctx.body = searchCode;
  }
}

module.exports = HomeController;
