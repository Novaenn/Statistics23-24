using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Windows.Forms.DataVisualization.Charting;
using System.Globalization;
 
namespace Hw3
{
    public partial class Form1 : Form
    {
 
        public Form1()
        {
            InitializeComponent();
            WindowState = FormWindowState.Maximized;
 
            textBox1.Text = "10";
            textBox2.Text = "10";
            textBox3.Text = "0.6";
 
        }
 
        public static Random random = new Random();
 
        /*
        private void timer1_Tick(object sender, EventArgs e)
        {
            fillChart();
        }
        */
 
 
        //fillChart method
        private void fillChart()
        {
            int numberOfAttacks = int.Parse(textBox2.Text);
            int numberOfSystems = int.Parse(textBox1.Text);
            float probability;
 
            int indexNthAttack = 3;
 
            if (float.TryParse(textBox3.Text, NumberStyles.Float, CultureInfo.InvariantCulture, out probability))
            {
                Console.WriteLine("Conversione riuscita. Valore float: " + probability);
            }
            else
            {
                Console.WriteLine("Conversione non riuscita. L'input non è un valore float valido.");
            }
 
   
 
        }
 
        private void Form1_Load_1(object sender, EventArgs e)
        {
            fillChart();
 
        }
 
 
 
        public static int[] generateX(int size)
        {
            int[] x = new int[size];
            for (int i = 0; i < size; i++)
            {
                x[i] = i;
            }
 
            return x;
        }
 
        public static float GenerateRandomDouble(float minValue, float maxValue)
        {
            if (minValue > maxValue)
                throw new ArgumentException("minValue must be less than or equal to maxValue");
 
            float randomValue = (float)random.NextDouble(); // Generates a random double between 0 and 1
            float range = maxValue - minValue;
            float scaledValue = randomValue * range;
            float result = scaledValue + minValue;
 
            return result;
        }
 
        public static (int[], double[], double[], double[]) generateCoordinateVector(int size, float probability, float minValue, float maxValue)
        {
            int[] y = new int[size];
            double[] cumulatedFrequency = new double[size];
            double[] relativeFrequency = new double[size];
            double[] normalizedRatio = new double[size];
            y[0] = 0;
            int sum = 0;
            double sumFrequency = 0;
            float value = 0;
 
 
            for (int i = 1; i < size; i++)
            {
                value = GenerateRandomDouble(minValue, maxValue);
 
                sum += generateY(value, probability);
                sumFrequency += generateFrequencyY(value, probability);
                 
                y[i] = sum;
                cumulatedFrequency[i] = sumFrequency;
                relativeFrequency[i] = sumFrequency/i+1;
                normalizedRatio[i] = sumFrequency / Math.Sqrt(i + 1);
            }
 
            return (y, cumulatedFrequency, relativeFrequency, normalizedRatio);
        }
 
        public static int generateY(float attack, float probability)
        {
            if (attack <= probability) return -1;
            else return +1;
        }
 
        public static int generateFrequencyY(float attack, float probability)
        {
            if (attack > probability) return 0;
            else return +1;
        }
 
        private void button1_Click(object sender, EventArgs e)
        {
 
            //timer1.Stop(); // Arresta il Timer se è in esecuzione
            //timer1.Start(); // Riavvia il Timer
            fillChart();
 
        }
    }
}


public static float GenerateRandomDouble(float minValue, float maxValue)
    {
        if (minValue > maxValue)
            throw new ArgumentException("minValue must be less than or equal to maxValue");

        float randomValue = (float)random.NextDouble(); // Generates a random double between 0 and 1
        float range = maxValue - minValue;
        float scaledValue = randomValue * range;
        float result = scaledValue + minValue;

        return result;
    }

public static int generateY(float attack, float probability)
    {
        if (attack <= probability) return -1;
        else return +1;
    }

public static (int[], double[], double[], double[]) generateCoordinateVector(int size, float probability, float minValue, float maxValue)
    {
        int[] y = new int[size];
        double[] cumulatedFrequency = new double[size];
        double[] relativeFrequency = new double[size];
        double[] normalizedRatio = new double[size];
        y[0] = 0;
        int sum = 0;
        double sumFrequency = 0;
        float value = 0;


        for (int i = 1; i < size; i++)
        {
            value = GenerateRandomDouble(minValue, maxValue);

            sum += generateY(value, probability);
            sumFrequency += generateFrequencyY(value, probability);
                
            y[i] = sum;
            cumulatedFrequency[i] = sumFrequency;
            relativeFrequency[i] = sumFrequency/i+1;
            normalizedRatio[i] = sumFrequency / Math.Sqrt(i + 1);
        }

        return (y, cumulatedFrequency, relativeFrequency, normalizedRatio);
    }

