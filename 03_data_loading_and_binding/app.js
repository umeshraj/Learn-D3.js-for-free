// data
const dataSet = [1, 2, 3, 4, 5];

d3.select("body")
  .selectAll("p")
  .data(dataSet)
  .enter()
  .append("p")
  // .text("D3 is awesome!");
  .text(d => `This is item ${d}`);
