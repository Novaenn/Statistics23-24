Imports System
Imports System.Drawing
Imports System.Windows.Forms

Namespace simplechart
    Public Partial Class Form1
        Inherits Form
        Public Sub New()
            InitializeComponent()
        End Sub


        Public b As Bitmap
        Public g As Graphics

        Private Sub Form1_Load(ByVal sender As Object, ByVal e As EventArgs)

            b = New Bitmap(Me.pictureBox1.Width, Me.pictureBox1.Height)
            g = Graphics.FromImage(b)

            g.SmoothingMode = Drawing.Drawing2D.SmoothingMode.HighQuality
            g.CompositingQuality = Drawing.Drawing2D.CompositingQuality.HighQuality
            g.TextRenderingHint = Drawing.Text.TextRenderingHint.AntiAliasGridFit

            g.FillRectangle(Brushes.Red, New Rectangle(10, 10, 50, 150))

            g.FillEllipse(Brushes.RoyalBlue, New Rectangle(10, 170, 50, 50))

            g.DrawLine(Pens.Black, New Point(10, 230), New Point(60, 230))

            g.FillEllipse(Brushes.Green, New Rectangle(10, 230, 50, 50))

            Me.pictureBox1.Image = b

        End Sub
    End Class
End Namespace
