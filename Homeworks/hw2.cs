using System;
using System.Collections;
using System.IO;
using System.Runtime.CompilerServices;
using System.Text.RegularExpressions;
using Microsoft.VisualBasic.FileIO;

class Program
{
    public float getRelativeFrequency(Dictionary<string, int> dict, string key, int sum = 0)
    {
        if (sum == -1)
        {
            sum = 0;
            foreach (var value in dict.Values)
            {
                sum += value;
            }
        }
        return (float)dict[key] / sum;
    }

    public int getPercentageFrequency(Dictionary<string, int> dict, string key, int sum = -1)
    {
        if (sum == -1)
        {
            sum = 0;
            foreach (var value in dict.Values)
            {
                sum += value;
            }
        }

        return (int)Math.Round(((float)dict[key] / sum)*100);
    }

    public int getAttributeIndex(string first_line, string attribute)            
    {
        string[] first_line_splitted = Regex.Split(first_line, @",(?=(?:(?:[^""]*""){2})*[^""]*$)");

        for (int i = 0; i<first_line_splitted.Length; i++)
        {
            if (first_line_splitted[i] == attribute)
            {
                return i;
            }
        }
        return -1;
    }

    static void Main()
    {
        Program p = new Program();
        string filePath = "Z:\\Samuele\\Statistics\\hw2\\data.csv"; 

        Dictionary<string, int> Age = new Dictionary<string, int>();
        Dictionary<string, int> Sex = new Dictionary<string, int>();
        Dictionary<string, int> HW = new Dictionary<string, int>();
        Dictionary<string, int> JointDistr = new Dictionary<string, int>();

        List<Dictionary<string, int>> dict_list = new List<Dictionary<string, int>> { Age , Sex, HW, JointDistr};

        if (File.Exists(filePath))
        {
            using (StreamReader reader = new StreamReader(filePath))
            {
                string first_line = reader.ReadLine();
                int sexIdx = p.getAttributeIndex(first_line, "Sex");
                int HWIdx = p.getAttributeIndex(first_line, "Hard Worker (0-5)");
                int ageIdx = p.getAttributeIndex(first_line, "Age");

                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    // process each line here
                    string[] line_splitted = Regex.Split(line, @",(?=(?:(?:[^""]*""){2})*[^""]*$)");
                    
                    if (Age.ContainsKey(line_splitted[ageIdx])) {
                        Age[line_splitted[ageIdx]] += 1;
                    } else
                    {
                        Age[line_splitted[ageIdx]] = 1;
                    }

                    if (Sex.ContainsKey(line_splitted[sexIdx]))
                    {
                        Sex[line_splitted[sexIdx]] += 1;
                    }
                    else
                    {
                        Sex[line_splitted[sexIdx]] = 1;
                    }

                    if (HW.ContainsKey(line_splitted[HWIdx]))
                    {
                        HW[line_splitted[HWIdx]] += 1;
                    }
                    else
                    {
                        HW[line_splitted[HWIdx]] = 1;
                    }

                    if (JointDistr.ContainsKey($"{line_splitted[ageIdx]} <-> {line_splitted[sexIdx]}"))
                    {
                        JointDistr[$"{line_splitted[ageIdx]} <-> {line_splitted[sexIdx]}"] += 1;
                    }
                    else
                    {
                        JointDistr[$"{line_splitted[ageIdx]} <-> {line_splitted[sexIdx]}"] = 1;
                    }

                }

            }

            // Print the contents of the dictionary
            foreach (var dict in dict_list)
            {
                int sum = 0;
                foreach (var value in dict.Values)
                {
                    sum += value;
                }                
                foreach (var kvp in dict)
                {
                    Console.WriteLine($"Value: {kvp.Key} \n\tAbsolute Frequency: {kvp.Value}, \n\tRelative Frequency: {p.getRelativeFrequency(dict, kvp.Key, sum)}, \n\tPercentage frequency: {p.getPercentageFrequency(dict, kvp.Key, sum)}%");
                }
            }
        }
        else
        {
            Console.WriteLine("The CSV file does not exist.");
        }
    }
}
