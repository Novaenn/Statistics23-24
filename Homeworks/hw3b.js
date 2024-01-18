const listCumulatedFrequencies = frequencyValue[0];
const listRelativeFrequencies = frequencyValue[1];
const listNormalizedFrequencies = frequencyValue[2];

//setInterval(drawChart(listCumulatedFrequencies,numberSystems, "myCanvas2"), 500);
DrawChart(listCumulatedFrequencies, numberSystems, "myCanvas2");
DrawChart(listRelativeFrequencies, numberSystems, "myCanvas3");
DrawChart(listNormalizedFrequencies, numberSystems, "myCanvas4");

//drawHistogram(listCumulatedFrequencies, numberSystems, "histogramChart");
CalculateFrequencyHistogram();
