export class Contact {
  // tslint:disable-next-line: variable-name
  constructor(
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public _id?: string
  ) {}
  setId?() {
    this._id = makeId();
  }
}
function makeId(length = 10) {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
