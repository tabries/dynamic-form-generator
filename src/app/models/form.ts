export class Form {
  constructor(_id = '', template_id = '', data = {}, created_at=new Date()) {
    this._id = _id;
    this.template_id = template_id;
    this.data = data;
    this.created_at = created_at;
  }
  _id: string;
  template_id: string;
  data: any;
  created_at: Date;
}
