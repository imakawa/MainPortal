<%@ Control Language="VB" Inherits="System.Web.Mvc.ViewUserControl" %>
<%-- 次の行は、ASP.NET のコンパイラの警告を回避します --%>
<%: ""%>
<%
    If Request.IsAuthenticated Then
    %>
        ようこそ <b><%: Page.User.Identity.Name %></b> さん
        [ <%: Html.ActionLink("ログオフ", "LogOff", "Account")%> ]
    <%
    Else
    %>
        [ <%: Html.ActionLink("ログオン", "LogOn", "Account")%> ]
    <%        
    End If
%>