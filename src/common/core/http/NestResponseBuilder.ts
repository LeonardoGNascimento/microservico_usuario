import { NestResponse } from "./NestResponse";

export class NestResponseBuilder {
  private response: NestResponse = {
    status: 200,
    header: {},
    body: {}
  };

  public status(status: Number) {
    this.response.status = status;
    return this;
  }

  public headers(headers: Object) {
    this.response.header = headers;
    return this;
  }

  public body(body: Object) {
    this.response.body = body;
    return this;
  }

  public build() {
    return new NestResponse(this.response);
  }
}