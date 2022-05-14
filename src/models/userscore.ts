export class UserScore{

  constructor(
    public percentage: number,
    public correctCount: number,
    public incorrectCount: number,
    public experienceWon: number,
    public detail: Array<boolean> // array position is question num and array value is correct/incorrect
  ) { }

};
