'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, xp';
  }
  async getOpenid() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const code = data.code;
    //发送授权请求获取openid
    const getOpenidRes = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=wxa65b857e40095d0e&secret=40030bc4b3d3af6bafb81ff33c459a50&js_code=${code}&grant_type=authorization_code`);
    const openid = getOpenidRes.data.openid;
    ctx.body = openid;
  }
  postCode() {
    const ctx = this.ctx;
    // console.log(ctx.request.body);
    const data = ctx.request.body;
    const openid = data.openid;
    let phone;
    let name;
    //判断openid确定派送员
    switch (openid) {
      case 'oA8kD5uS_GbKJqR5sTuc8CSQcEoA':
        name = '陈立新';
        phone = 18745013137;
        break;
      case 'oA8kD5knAxOz7RVq9yAqBkZO4poo':
        name = '于风';
        phone = 13045116673;
        break;
      case 'oA8kD5sMapEEsXaeESUfVsX5Sgcw':
        name = '施心平';
        phone = 18846084097;
        break;
      case 'oA8kD5gSIbE4dTZ896XOUGAjEutY':
        name = '栾智策';
        phone = 17745618946;
        break;
      case 'oA8kD5qtkBK48qaPmZnsimQaBpzE':
        name = '孙立秋';
        phone = 13045116670;
        break;
      case 'oA8kD5p1wiA5pxFnpi3ifx3i_6Kk':
        name = '姜锋';
        phone = 15546096800;
        break;
      case 'oA8kD5v03_kdX88XR6h3hli_q4ws':
        name = '曾源';
        phone = 18045174545;
        break;

      default:
        break;
    }
    const Code = ctx.model.Code;
    for (let i = 0; i < data.codeList.length; i++) {
      const codeStr = data.codeList[i];
      const code = new Code({
        openid: data.openid,
        code: codeStr,
        name: name,
        phone: phone,
        isQuestion: false
      });
      code.save();
    }

    ctx.body = 'ok';
  }
  postQuestionCode() {
    const ctx = this.ctx;
    // console.log(ctx.request.body);
    const data = ctx.request.body;
    const openid = data.openid;
    let phone;
    let name;
    //判断openid确定派送员
    switch (openid) {
      case 'oA8kD5uS_GbKJqR5sTuc8CSQcEoA':
        name = '陈立新';
        phone = 18745013137;
        break;
      case 'oA8kD5knAxOz7RVq9yAqBkZO4poo':
        name = '于风';
        phone = 13045116673;
        break;
      case 'oA8kD5sMapEEsXaeESUfVsX5Sgcw':
        name = '施心平';
        phone = 18846084097;
        break;
      case 'oA8kD5gSIbE4dTZ896XOUGAjEutY':
        name = '栾智策';
        phone = 17745618946;
        break;
      case 'oA8kD5qtkBK48qaPmZnsimQaBpzE':
        name = '孙立秋';
        phone = 13045116670;
        break;
      case 'oA8kD5p1wiA5pxFnpi3ifx3i_6Kk':
        name = '姜锋';
        phone = 15546096800;
        break;
      case 'oA8kD5v03_kdX88XR6h3hli_q4ws':
        name = '曾源';
        phone = 18045174545;
        break;

      default:
        break;
    }
    const Code = ctx.model.Code;
    for (let i = 0; i < data.codeList.length; i++) {
      const codeStr = data.codeList[i];
      const code = new Code({
        openid: data.openid,
        code: codeStr,
        name: name,
        phone: phone,
        isQuestion: true
      });
      code.save();
    }
    ctx.body = 'ok';
  }
  async postSearchCode() {
    const ctx = this.ctx;
    // console.log(ctx.request.body);
    const data = ctx.request.body;
    const code = data.code;
    const Code = ctx.model.Code;
    //find的结果按照时间排序
    const searchCode = await Code.find({ code: code }).sort({ '_id': -1 });
    // console.log(searchCode);

    ctx.body = searchCode;
  }
}

module.exports = HomeController;
