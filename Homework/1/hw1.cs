using System.Drawing;

namespace hw1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {
            Graphics gra = this.panel1.CreateGraphics();
            Pen pen = new Pen(Color.Black, 3);

            // Disegna una linea
            pen.Color = Color.DarkGreen;
            PointF pnt1 = new PointF(100.0F, 100.0F);
            PointF pnt2 = new PointF(300.0F, 200.0F);
            e.Graphics.DrawLine(pen, pnt1, pnt2);

            // Disegna un punto
            pen.Color = Color.Red;
            e.Graphics.DrawRectangle(pen, 50, 100, 1, 1);

            // Disegna un cerchio
            pen.Color = Color.Blue;
            Rectangle rect_e = new Rectangle(250, 250, 150, 150);
            e.Graphics.DrawEllipse(pen, rect_e);

            // Disegna un rettangolo
            pen.Color = Color.Orange;
            Rectangle rect = new Rectangle(100, 200, 100, 200);
            e.Graphics.DrawRectangle(pen, rect);
        }
    }
}