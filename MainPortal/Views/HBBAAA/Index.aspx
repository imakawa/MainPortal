<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Anaget.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    基本情報 - Anaget.com
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
        <script type="text/javascript">
            function Initialize() {
                var mainPortal = document.getElementById("mainPortal");
                mainPortal.className = "";
                var hbbaaa = document.getElementById("HBBAAA");
                hbbaaa.className = "active";
                var setInfo = document.getElementById("setInfo");
                setInfo.className = "hsub open";
                var setInfoMenu = document.getElementById("setInfoMenu");
                setInfoMenu.style = "display:block;";
            }
    </script>
    <div>123456</div>
</asp:Content>
