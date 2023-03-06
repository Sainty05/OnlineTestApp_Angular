import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionServiceService {
  getQuestion() {
    return {
      questions: [
        {
          questionText: "What feature TypeScript don't have?",
          options: [
            {
              optNo: 1,
              text: 'a. Class',
            },
            {
              optNo: 2,
              text: 'b. Interface',
            },
            {
              optNo: 3,
              text: 'c. Modules',
            },
            {
              optNo: 4,
              text: 'd. Losely Typed',
              correct: true,
            },
          ],
          explanation:
            'Correct Ans (d): TypeScript is a strongly Typed language.',
        },
        {
          questionText:
            'Which of the following is NOT a type used in TypeScript?',
          options: [
            {
              optNo: 1,
              text: 'a. number',
            },
            {
              optNo: 2,
              text: 'b. string',
            },
            {
              optNo: 3,
              text: 'c. boolean',
            },
            {
              optNo: 4,
              text: 'd. enum',
              correct: true,
            },
          ],
          explanation:
            'Correct Ans (d): enum is not used as a type in TypeScript',
        },
        {
          questionText:
            'How can we specify properties and methods for an object in TypeScript',
          options: [
            {
              optNo: 1,
              text: 'a. Use classes.',
            },
            {
              optNo: 2,
              text: 'b. Use interfaces.',
              correct: true,
            },
            {
              optNo: 3,
              text: 'c. Use enums.',
            },
            {
              optNo: 4,
              text: 'd. Use async/await.',
            },
          ],
          explanation:
            'Correct Ans (b): interfaces are typically used to list the properties and methods for an object',
        },
        {
          questionText: 'How else can Array<number> be written in TypeScript?',
          options: [
            {
              optNo: 1,
              text: 'a. @number',
            },
            {
              optNo: 2,
              text: 'b. number[]',
              correct: true,
            },
            {
              optNo: 3,
              text: 'c. number!',
            },
            {
              optNo: 4,
              text: 'd. number?',
            },
          ],
          explanation:
            'Correct Ans (b): number[] is another way of writing Array<number> in TypeScript',
        },
        {
          questionText: 'In which of these does a class take parameters?',
          options: [
            {
              optNo: 1,
              text: 'a. constructor',
              correct: true,
            },
            {
              optNo: 2,
              text: 'b. destructor',
            },
            {
              optNo: 3,
              text: 'c. import',
            },
            {
              optNo: 4,
              text: 'd. subscribe',
            },
          ],
          explanation:
            'Correct Ans (a): a constructor is used by a class to take in parameters',
        },
        {
          questionText: 'Which is NOT an access modifier?',
          options: [
            {
              optNo: 1,
              text: 'a. private',
            },
            {
              optNo: 2,
              text: 'b. protected',
            },
            {
              optNo: 3,
              text: 'c. public',
            },
            {
              optNo: 4,
              text: 'd. async',
              correct: true,
            },
          ],
          explanation:
            'Correct Ans (d): async is not used as an access modifier type in TypeScript',
        },
        {
          questionText:
            'Which keyword allows us to share information between files in TypeScript?',
          options: [
            {
              optNo: 1,
              text: 'a. import',
            },
            {
              optNo: 2,
              text: 'b. export',
              correct: true,
            },
            {
              optNo: 3,
              text: 'c. async',
            },
            {
              optNo: 4,
              text: 'd. constructor',
            },
          ],
          explanation:
            'Correct Ans (b): the export keyword allows for the information to be transmitted between files',
        },
        {
          questionText:
            'Which is an array method to generate a new array based on a condition?',
          options: [
            {
              optNo: 1,
              text: 'a. filter',
              correct: true,
            },
            {
              optNo: 2,
              text: 'b. map',
            },
            {
              optNo: 3,
              text: 'c. async',
            },
            {
              optNo: 4,
              text: 'd. enum',
            },
          ],
          explanation:
            'Correct Ans (a): filter is a method used to conditionally create a new array',
        },
        {
          questionText: 'How is a property accessible within a class?',
          options: [
            {
              optNo: 1,
              text: 'a. Using this.propertyName',
              correct: true,
            },
            {
              optNo: 2,
              text: 'b. Accessors',
            },
            {
              optNo: 3,
              text: 'c. Destructuring',
            },
            {
              optNo: 4,
              text: 'd. Arrow function',
            },
          ],
          explanation:
            'Correct Ans (a): this.propertyName is the way to access a specific property within a class',
        },
        {
          questionText: 'Which language is used in angluar?',
          options: [
            {
              optNo: 1,
              text: 'a. TypeScript',
              correct: true,
            },
            {
              optNo: 2,
              text: 'b. JavaScript',
            },
            {
              optNo: 3,
              text: 'c. Java',
            },
            {
              optNo: 4,
              text: 'd. Pythan',
            },
          ],
          explanation: 'Correct Ans (a): Angular uses TypeScript as language.',
        },
      ],
    };
  }
}
