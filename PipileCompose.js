function compose(pipeline) {
    // Implement the function here
    for(let i=0;i<pipeline.length;i++) {
        return function(pipeline[i]) {
            // Pipeline processing logic
            return pipeline[i]
        };
    }
}
const pipeline = [
    (num) => num - 1,
    (num) => num * 10,
    (num) => `${ num } as a string`
  ];

const composed = compose(pipeline);

composed(4); // => `30 as a string`