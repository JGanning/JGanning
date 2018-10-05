var siteWidth = 1280;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

$(document).ready(function() {
	
	$('.eHideDetails').hide();
	$('#ed').hide();
	
	$(".eHideDetails").click(function () {
		$('#ed').hide('blind');
		$('.eHideDetails').hide();
		$('.eShowDetails').show();
	});
	
	$(".eShowDetails").click(function () {
		$('#ed').show('blind');
		$('.eShowDetails').hide();
		$('.eHideDetails').show();
	});
	
	
	$('.wHideDetails').hide();
	$('#work').hide();
	
	$(".wHideDetails").click(function () {
		$('#work').hide('blind');
		$('.wHideDetails').hide();
		$('.wShowDetails').show();
	});
	
	$(".wShowDetails").click(function () {
		$('#work').show('blind');
		$('.wShowDetails').hide();
		$('.wHideDetails').show();
	});
	
	
	$('.mHideDetails').hide();
	$('.mDescription').hide();
	
	$(".mHideDetails").click(function () {
		$('.mDescription').hide('blind');
		$('.mHideDetails').hide();
		$('.mShowDetails').show();
	});
	
	$(".mShowDetails").click(function () {
		$('.mDescription').show('blind');
		$('.mShowDetails').hide();
		$('.mHideDetails').show();
	});
	
	$('.bHideDetails').hide();
	$('.bDescription').hide();
	
	$(".bHideDetails").click(function () {
		$('.bDescription').hide('blind');
		$('.bHideDetails').hide();
		$('.bShowDetails').show();
	});
	
	$(".bShowDetails").click(function () {
		$('.bDescription').show('blind');
		$('.bShowDetails').hide();
		$('.bHideDetails').show();
	});
	
	$('.kHideDetails').hide();
	$('.kDescription').hide();
	
	$(".kHideDetails").click(function () {
		$('.kDescription').hide('blind');
		$('.kHideDetails').hide();
		$('.kShowDetails').show();
	});
	
	$(".kShowDetails").click(function () {
		$('.kDescription').show('blind');
		$('.kShowDetails').hide();
		$('.kHideDetails').show();
	});
	
	$('.pHideDetails').hide();
	$('.pDescription').hide();
	
	$(".pHideDetails").click(function () {
		$('.pDescription').hide('blind');
		$('.pHideDetails').hide();
		$('.pShowDetails').show();
	});
	
	$(".pShowDetails").click(function () {
		$('.pDescription').show('blind');
		$('.pShowDetails').hide();
		$('.pHideDetails').show();
	});

});
