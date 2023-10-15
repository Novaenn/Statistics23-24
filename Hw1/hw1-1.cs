using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace simplechart
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        public Bitmap b;
        public Graphics g;

        private void Form1_Load(object sender, EventArgs e)
        {

            b = new Bitmap(this.pictureBox1.Width, this.pictureBox1.Height);
            g = Graphics.FromImage(b);
            
            g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
            g.CompositingQuality = System.Drawing.Drawing2D.CompositingQuality.HighQuality;
            g.TextRenderingHint = System.Drawing.Text.TextRenderingHint.AntiAliasGridFit;

            g.FillRectangle(Brushes.Red, new Rectangle(10, 10, 50, 150));

            g.FillEllipse(Brushes.RoyalBlue , new Rectangle(10, 170, 50, 50));

            g.DrawLine(Pens.Black, new Point(10, 230), new Point(60, 230));

            g.FillEllipse(Brushes.Green, new Rectangle(10, 230, 50, 50));

            this.pictureBox1.Image = b;

        }
    }
}