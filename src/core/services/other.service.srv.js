export default class OtherService {
  constructor() {
    this.data = {
      url: 'some-url.com'
    };
  }

  fetch () {
    return this.data.url;
  }
}