import { Option } from './option';

export class Question {
    filter(arg0: (x: any) => boolean) {
      throw new Error('Method not implemented.');
    }
    sStatementID: any;
    sDescription: string ="";
    options: Option[];
    answered!: boolean;

    constructor(data: any) {
        data = data || {};
        this.sStatementID = data.sStatementID;
        this.sDescription = data.sDescription;
        this.options = [];
        data.options.forEach((o: any) => {
            this.options.push(new Option(o));
        });
    }
}
