export class NestResponse {
  status: Number;
  header: Object;
  body: Object;

  constructor(response: NestResponse) {
    Object.assign(this, response);
  }
}