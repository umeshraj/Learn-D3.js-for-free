// selection
d3.select();
const ur = d3.selectAll();

// Change h1
d3.select("h1")
  .style("color", "red")
  .attr("class", "myHeading")
  .text("Updated heading");

// Adding a paragraph
d3.select("body")
  .append("p")
  .text("First para");
d3.select("body")
  .append("p")
  .text("Second para");
d3.select("body")
  .append("p")
  .text("Third para");

// Change all paras
d3.selectAll("p").style("color", "blue");
