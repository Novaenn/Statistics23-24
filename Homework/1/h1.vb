Imports System.Drawing

Namespace hw1
    Public Partial Class Form1
        Inherits Form
        Public Sub New()
            InitializeComponent()
        End Sub

        Private Sub Form1_Load(ByVal sender As Object, ByVal e As EventArgs)

        End Sub

        Private Sub panel1_Paint(ByVal sender As Object, ByVal e As PaintEventArgs)
            Dim gra As Graphics = Me.panel1.CreateGraphics()
            Dim pen As Pen = New Pen(Color.Black, 3)

            ' Disegna una linea
            pen.Color = Color.DarkGreen
            Dim pnt1 As PointF = New PointF(100.0F, 100.0F)
            Dim pnt2 As PointF = New PointF(300.0F, 200.0F)
            e.Graphics.DrawLine(pen, pnt1, pnt2)

            ' Disegna un punto
            pen.Color = Color.Red
            e.Graphics.DrawRectangle(pen, 50, 100, 1, 1)

            ' Disegna un cerchio
            pen.Color = Color.Blue
            Dim rect_e As Rectangle = New Rectangle(250, 250, 150, 150)
            e.Graphics.DrawEllipse(pen, rect_e)

            ' Disegna un rettangolo
            pen.Color = Color.Orange
            Dim rect As Rectangle = New Rectangle(100, 200, 100, 200)
            e.Graphics.DrawRectangle(pen, rect)
        End Sub
    End Class
End Namespace
