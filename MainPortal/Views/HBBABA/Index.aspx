<%@ Page Title="" Language="VB" MasterPageFile="~/Views/Shared/Anaget.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	職員情報 - Anaget.com
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
	<script type="text/javascript">
		function Initialize() {
			var mainPortal = document.getElementById("mainPortal");
			mainPortal.className = "";
			var hbbaba = document.getElementById("HBBABA");
			hbbaba.className = "active";
			var setInfo = document.getElementById("setInfo");
			setInfo.className = "hsub open";
			var setInfoMenu = document.getElementById("setInfoMenu");
			setInfoMenu.style = "display:block;";
		}
	</script>
	
	<!-- 1. Load libraries -->
	<!-- Polyfill(s) for older browsers -->
	<script type="text/javascript" src="../tsc/node_modules/core-js/client/shim.min.js"></script>
	<script type="text/javascript" src="../tsc/node_modules/zone.js/dist/zone.js"></script>
	<script type="text/javascript" src="../tsc/node_modules/reflect-metadata/Reflect.js"></script>
	<script type="text/javascript" src="../tsc/node_modules/systemjs/dist/system.src.js"></script>
	<!-- 2. Configure SystemJS -->
	<script type="text/javascript" src="../tsc/systemjs.config.js"></script>
	<script type="text/javascript">
	  System.import('HBBABA').catch(function(err){ console.error(err); });
	</script>


		<div class="main-container" id="main-container">
			<script type="text/javascript">
				try { ace.settings.check('main-container', 'fixed') } catch (e) { }
			</script>

			<div id="sidebar" class="sidebar responsive hide">
				<script type="text/javascript">
					try { ace.settings.check('sidebar', 'fixed') } catch (e) { }
				</script>

				<script type="text/javascript">
					try { ace.settings.check('sidebar', 'collapsed') } catch (e) { }
				</script>
			</div>

			<div class="main-content">
				<div class="page-content">
					<div class="page-content-area">
						<HBBABA>
                            <!--<img src="https://mypraluentportal.com/_content/images/loading.gif" />-->
							Loading...
						</HBBABA>
					</div><!-- /.page-content-area -->
				</div><!-- /.page-content -->
			</div><!-- /.main-content -->

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
			</a>
		</div><!-- /.main-container -->
        
		<!-- basic scripts -->
        <script src="https://code.angularjs.org/2.0.0-alpha.45/router.dev.js"></script>

		<!--[if !IE]> -->
		<script src="../assets/js/jquery/jquery-2.1.1.min.js"></script>
		<!-- <![endif]-->

		<!--[if IE]>
		<script src="../assets/js/jquery/jquery-1.11.1.min.js"></script>
		<![endif]-->

		<!--[if !IE]> -->
		<script type="text/javascript">
		    window.jQuery || document.write("<script src='../assets/js/jquery.min.js'>" + "<" + "/script>");
		</script>
		<!-- <![endif]-->

		<!--[if IE]>
		<script type="text/javascript">
		 window.jQuery || document.write("<script src='../assets/js/jquery1x.min.js'>"+"<"+"/script>");
		</script>
		<![endif]-->
		
		<script type="text/javascript">
		    if ('ontouchstart' in document.documentElement) document.write("<script src='../assets/js/jquery.mobile.custom.min.js'>" + "<" + "/script>");
		</script>
		<script src="../assets/bootstrap/3.2.0/js/bootstrap.min.js"></script>

		<!-- page specific plugin scripts -->
		<script src="../assets/js/jquery.dataTables.min.js"></script>
		<script src="../assets/js/jquery.dataTables.bootstrap.js"></script>

		<!-- ace scripts -->
		<script src="../assets/js/ace-elements.min.js"></script>
		<script src="../assets/js/ace.min.js"></script>

		<!-- inline scripts related to this page -->
		<!--<script type="text/javascript">
			/**jQuery(function($) {
				var oTable1 = 
				$('#sample-table-2')
				//.wrap("<div class='dataTables_borderWrap' />")   //if you are applying horizontal scrolling (sScrollX)
				.dataTable( {
					bAutoWidth: false,
					"aoColumns": [
					  { "bSortable": false },
					  null, null,null, null, null,
					  { "bSortable": false }
					],
					"aaSorting": [],
			
					//,
					//"sScrollY": "200px",
					//"bPaginate": false,
			
					//"sScrollX": "100%",
					//"sScrollXInner": "120%",
					//"bScrollCollapse": true,
					//Note: if you are applying horizontal scrolling (sScrollX) on a ".table-bordered"
					//you may want to wrap the table inside a "div.dataTables_borderWrap" element
			
					//"iDisplayLength": 50
			    } );
				
				var tableTools = new $.fn.dataTable.TableTools( oTable1, {
					"sSwfPath": "../../copy_csv_xls_pdf.swf",
			        "buttons": [
			            "copy",
			            "csv",
			            "xls",
						"pdf",
			            "print"
			        ]
			    } );
			    $( tableTools.fnContainer() ).insertBefore('#sample-table-2');
				*/
			$(document).ready(function(){      $('#sample-table-2').dataTable();  });
			
				$(document).on('click', 'th input:checkbox' , function(){
					var that = this;
					$(this).closest('table').find('tr > td:first-child input:checkbox')
					.each(function(){
						this.checked = that.checked;
						$(this).closest('tr').toggleClass('selected');
					});
				});
			
			
				$('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
				function tooltip_placement(context, source) {
					var $source = $(source);
					var $parent = $source.closest('table')
					var off1 = $parent.offset();
					var w1 = $parent.width();
			
					var off2 = $source.offset();
					//var w2 = $source.width();
			
					if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
					return 'left';
				}
			
			})
		</script>-->

</asp:Content>
