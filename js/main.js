$(function() 
{
$("#button").click( function()
{
   var TXT_URL = 'archivo.txt';
   //var TXT_URL = $("#input-url").val();

    $.ajax
    (
    	{
        	url : TXT_URL,
			dataType: "text",
			success : function (data) 
			{
            	$(".text").html("<pre>"+data+"</pre>");
			}
		}
	);
   });
});