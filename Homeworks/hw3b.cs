public static int generateFrequencyY(float attack, float probability)
    {
        if (attack > probability) return 0;
        else return +1;
    }

//min value of probability
float minValue = 0;
//max value of probability
float maxValue = 1;


int[] x = generateX(numberOfAttacks);
int[] y;
//int[] yHistogram = new int[numberOfAttacks];
double[] cumulatedFrequency;
double[] relativeFrequency;
double[] normalizedRatio;

//int[] lastValues = new int[numberOfSystems];
//int[] nthAttack = new int[numberOfSystems];

chart1.Series.Clear();
chart2.Series.Clear();
chart3.Series.Clear();
chart4.Series.Clear();

(int[], double[], double[], double[]) result;



for (int i = 0; i < numberOfSystems; i++)
{

    result = generateCoordinateVector(numberOfAttacks, probability, minValue, maxValue);

    y = result.Item1;
    cumulatedFrequency = result.Item2;
    relativeFrequency = result.Item3;
    normalizedRatio = result.Item4;


    //lastValues.Append(y[y.Length - 1]);
    //nthAttack.Append(y[indexNthAttack]);

    var series = new Series($"Systems {i+1}");
    series.ChartType = SeriesChartType.Line;
    chart1.ChartAreas[0].AxisX.Minimum = 0;

    series.Points.DataBindXY(x, y);
    chart1.Series.Add(series);

    var series2 = new Series($"Systems {i + 1}");
    series2.ChartType = SeriesChartType.Line;
    chart2.ChartAreas[0].AxisX.Minimum = 0;

    series2.Points.DataBindXY(x, cumulatedFrequency);
    chart2.Series.Add(series2);

    var series3 = new Series($"Systems {i + 1}");
    series3.ChartType = SeriesChartType.Line;
    chart3.ChartAreas[0].AxisX.Minimum = 0;

    series3.Points.DataBindXY(x, relativeFrequency);
    chart3.Series.Add(series3);

    var series4 = new Series($"Systems {i + 1}");
    series4.ChartType = SeriesChartType.Line;
    chart4.ChartAreas[0].AxisX.Minimum = 0;

    series4.Points.DataBindXY(x, normalizedRatio);
    chart4.Series.Add(series4);
}