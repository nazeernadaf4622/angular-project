export class Option {
    id: number;
    text: string ="";
    selected!: boolean;
    isAnswer: any;
    statementID: any;

    constructor(data: any) {
        data = data || [];
        this.id = data.id;
        this.text = data.text;
        this.isAnswer = data.isAnswer;
    }
}
