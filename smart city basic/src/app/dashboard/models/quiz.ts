import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
  
    config!: QuizConfig;
    questions: Question[]=[];
    length: number =260;

    constructor(data: any) {
        if (data) {
            this.config = new QuizConfig(data.config);
            this.questions = [];
            data.questions.forEach((q: any) => {
                this.questions.push(new Question(q));
            });
        }
    }
}
