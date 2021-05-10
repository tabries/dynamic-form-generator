export class FieldBase<T> {
  value: T;
  id: string;
  title: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: {id: string, value: string}[];
  mask: string;

  constructor(options: {
      value?: T;
      id?: string;
      title?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: {id: string, value: string}[];
      mask?: string;
    } = {}) {
    this.value = options.value!;
    this.id = options.id || '';
    this.title = options.title || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.mask = options.mask || '';
  }
}
