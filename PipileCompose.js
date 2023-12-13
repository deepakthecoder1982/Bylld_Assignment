function compose(pipeline) {
    return function (value) {
      let result = value;
      for (let i = 0; i < pipeline.length; i++) {
        result = pipeline[i](result);
      }
      return result;
    };
  }
  
const pipeline = [
  (num) => num - 1,
  (num) => num * 10,
  (num) => `${num} as a string`,
];

const composed = compose(pipeline);

composed(4); // => `30 as a string`
console.log(composed(4))


//Second question that I solve for myself

const numPipeline = [
    (arr) => arr.map(x => x * 2),
    (arr) => arr.filter(x => x > 5),
    (arr) => arr.reduce((acc, curr) => acc + curr, 0),
  ];
  
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ComposedForArray=(numPipeline)=>{
    return (arr)=>{
        let results = arr;
        for(let i=0; i<numPipeline.length; i++){
            results = numPipeline[i](results);
        }
        return results;
    }
}
let finalResult = ComposedForArray(numPipeline);
console.log(finalResult(arr));
// console.log(finalResult);