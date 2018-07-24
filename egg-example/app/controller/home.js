'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, xp';
  }
  postCode() {
    const ctx = this.ctx;
    ctx.body = 'ok';
  }
}

module.exports = HomeController;
