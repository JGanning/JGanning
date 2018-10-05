$(document).ready(function() {
	
	$('.eHideDetails').hide();
	$('#ed').hide();
	
	$(".eHideDetails").click(function () {
		$('#ed').hide();
		$('.eHideDetails').hide();
		$('.eShowDetails').show();
	});
	
	$(".eShowDetails").click(function () {
		$('#ed').show();
		$('.eShowDetails').hide();
		$('.eHideDetails').show();
	});
	
	
	$('.wHideDetails').hide();
	$('#work').hide();
	
	$(".wHideDetails").click(function () {
		$('#work').hide();
		$('.wHideDetails').hide();
		$('.wShowDetails').show();
	});
	
	$(".wShowDetails").click(function () {
		$('#work').show();
		$('.wShowDetails').hide();
		$('.wHideDetails').show();
	});
	
	
	$('.mHideDetails').hide();
	$('.mDescription').hide();
	
	$(".mHideDetails").click(function () {
		$('.mDescription').hide();
		$('.mHideDetails').hide();
		$('.mShowDetails').show();
	});
	
	$(".mShowDetails").click(function () {
		$('.mDescription').show();
		$('.mShowDetails').hide();
		$('.mHideDetails').show();
	});
	
	$('.bHideDetails').hide();
	$('.bDescription').hide();
	
	$(".bHideDetails").click(function () {
		$('.bDescription').hide();
		$('.bHideDetails').hide();
		$('.bShowDetails').show();
	});
	
	$(".bShowDetails").click(function () {
		$('.bDescription').show();
		$('.bShowDetails').hide();
		$('.bHideDetails').show();
	});
	
	$('.kHideDetails').hide();
	$('.kDescription').hide();
	
	$(".kHideDetails").click(function () {
		$('.kDescription').hide();
		$('.kHideDetails').hide();
		$('.kShowDetails').show();
	});
	
	$(".kShowDetails").click(function () {
		$('.kDescription').show();
		$('.kShowDetails').hide();
		$('.kHideDetails').show();
	});
	
	$('.pHideDetails').hide();
	$('.pDescription').hide();
	
	$(".pHideDetails").click(function () {
		$('.pDescription').hide();
		$('.pHideDetails').hide();
		$('.pShowDetails').show();
	});
	
	$(".pShowDetails").click(function () {
		$('.pDescription').show();
		$('.pShowDetails').hide();
		$('.pHideDetails').show();
	});

});