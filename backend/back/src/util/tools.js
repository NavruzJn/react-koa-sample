// import JWT from 'jsonwebtoken';
// import request from 'request-promise';
// import uuid from 'uuid/v1';
// import fs from 'fs-extra';

class Tools {
  // constructor() {
  //   this.sms = `https://sms.ru/sms/send?api_id=${process.env.SMS_KEY}`;
  //   this.secret = process.env.SECRET;
  // }
  //
  // async sendMessage(to, text) {
  //   const query = `&to=${to}&msg=${text}&json=1`;
  //
  //   try {
  //     const result = JSON.parse(await request.get(this.sms + query));
  //     delete result['balance'];
  //     return result;
  //   } catch (e) {
  //     return { error: e.message };
  //   }
  // }
  //
  // getJwtToken({ firstname, lastname, email, phone, id }) {
  //   const payload = { firstname, lastname, email, phone, id };
  //   const token = JWT.sign(payload, this.secret, { expiresIn: '7 days' });
  //   return token;
  // }
  //
  // getSymbol(num) {
  //   let str = '?, ';
  //   return str.repeat(num).slice(0, -2);
  // }
  //
  // getArrPayload(obj) {
  //   if (typeof obj !== 'object') return [[], []];
  //   const arr = [Object.keys(obj), Object.values(obj)];
  //   return arr;
  // }
  //
  // getUid() {
  //   return uuid()
  // }
  //
  // async moveToStatic(from, to) {
  //   try {
  //     await fs.copy(from, to);
  //     return true;
  //   } catch (e) {
  //     return { error: e.message };
  //   }
  // }

}

export default new Tools();
