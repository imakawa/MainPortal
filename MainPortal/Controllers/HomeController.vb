<HandleError()> _
Public Class HomeController
    Inherits System.Web.Mvc.Controller

    Function Index() As ActionResult
        ViewData("Message") = "ASP.NET MVC へようこそ"

        Return View()
    End Function

    Function About() As ActionResult
        Session.Add("222", "www")

        Return View()
    End Function

    Function GetData() As String
        Return "123456"
    End Function

    Function AuthAnagetUser() As String
        Dim userStr As String = Me.Request.Params("user")
        Dim user As AnagetUser = JsonConvert.DeserializeObject(Of AnagetUser)(userStr)

        Dim rtn As Boolean = False
        If user.name.Equals("123") AndAlso user.pw.Equals("456") Then
            rtn = True
        End If
        Return JsonConvert.SerializeObject(rtn)
    End Function
End Class

Public Class AnagetUser
    Private _id As Integer
    <JsonProperty("id")>
    Public Property id As Integer
        Get
            Return _id
        End Get
        Set(value As Integer)
            _id = value
        End Set
    End Property

    Private _name As String
    <JsonProperty("name")>
    Public Property name As String
        Get
            Return _name
        End Get
        Set(value As String)
            _name = value
        End Set
    End Property

    Private _pw As String
    <JsonProperty("pw")>
    Public Property pw As String
        Get
            Return _pw
        End Get
        Set(value As String)
            _pw = value
        End Set
    End Property
End Class