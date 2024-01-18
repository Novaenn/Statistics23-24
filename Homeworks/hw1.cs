using System;
using System.Drawing;
using System.Windows.Forms;

namespace hw1
{
    public partial class Form1 : Form
    {
        private Bitmap bitmap; // Declare a Bitmap

        public Form1()
        {
            InitializeComponent();
            // Initialize the Bitmap with the panel's size
            bitmap = new Bitmap(panel1.Width, panel1.Height);
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {
            // Get the Graphics object from the Bitmap
            using (Graphics graphics = Graphics.FromImage(bitmap))
            {
                // Clear the previous drawings
                graphics.Clear(panel1.BackColor);

                // Draw a line on the Bitmap
                Brush brush = new SolidBrush(Color.Red);
                Brush ellipse_brush = new SolidBrush(Color.Blue);
                Pen pen = new Pen(Color.Black, 2);

                graphics.DrawLine(pen, 150 + 50, 250, 160, 250);

                pen.Color = Color.Green;

                graphics.DrawRectangle(pen, 450, 100, 1, 1);

                Rectangle rect = new Rectangle(450, 276, 100, 50);

                graphics.FillEllipse(ellipse_brush, new Rectangle(10, 50, 100, 100));

                graphics.FillRectangle(brush, rect);

                bitmap.Save("Z:\\Samuele\\Statistics\\hw1\\hw1.png");
            }

            // Draw the Bitmap on the Panel
            e.Graphics.DrawImage(bitmap, Point.Empty);
        }
    }
}