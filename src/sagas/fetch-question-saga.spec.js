import { handleFetchQuestion } from "./fetch-question-saga";

describe('Fetch questions saga', () =>{
  it("should fetch the question", () => {
    console.log("Test running");
    handleFetchQuestion()
  });
});