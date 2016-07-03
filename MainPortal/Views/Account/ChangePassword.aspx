<%@ Page Language="VB" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage(Of MainPortal.ChangePasswordModel)" %>

<asp:Content ID="changePasswordTitle" ContentPlaceHolderID="TitleContent" runat="server"> パスワードの変更</asp:Content>

<asp:Content ID="changePasswordContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>パスワードの変更</h2>
    <p>
        次のフォームを使用して、パスワードを変更してください。
    </p>
    <p>
        新しいパスワードは、<%: ViewData("PasswordLength") %> 文字以上である必要があります。
    </p>

    <% Using Html.BeginForm() %>
        <%: Html.ValidationSummary(True, "パスワードの変更に失敗しました。エラーを修正し、再試行してください。")%>
        <div>
            <fieldset>
                <legend>アカウント情報</legend>
                
                <div class="editor-label">
                    <%: Html.LabelFor(Function(m) m.OldPassword) %>
                </div>
                <div class="editor-field">
                    <%: Html.PasswordFor(Function(m) m.OldPassword) %>
                    <%: Html.ValidationMessageFor(Function(m) m.OldPassword) %>
                </div>
                
                <div class="editor-label">
                    <%: Html.LabelFor(Function(m) m.NewPassword) %>
                </div>
                <div class="editor-field">
                    <%: Html.PasswordFor(Function(m) m.NewPassword) %>
                    <%: Html.ValidationMessageFor(Function(m) m.NewPassword) %>
                </div>
                
                <div class="editor-label">
                    <%: Html.LabelFor(Function(m) m.ConfirmPassword) %>
                </div>
                <div class="editor-field">
                    <%: Html.PasswordFor(Function(m) m.ConfirmPassword) %>
                    <%: Html.ValidationMessageFor(Function(m) m.ConfirmPassword) %>
                </div>
                
                <p>
                    <input type="submit" value="パスワードの変更" />
                </p>
            </fieldset>
        </div>
    <% End Using %>
</asp:Content>

