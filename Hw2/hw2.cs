public string[,] ParseTSV(string TSVpath) {
    string [] lines = File.ReadAllLines(TSVpath);

    int rows = lines.Length;
    int cols = lines[0].Split('\t').Length;

    string[,] matrix = new string[rows, cols];

    for (int i = 0; i < rows; i++) {
        string[] line = lines[i].Split('\t');
        for (int j = 0; j < cols; j++) {
            matrix[i, j] = line[j];
        }
    }

    return matrix
}