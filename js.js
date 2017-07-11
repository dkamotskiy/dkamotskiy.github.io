
//Плавный скролл для всех ссылок А

$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 1000);
return false;
});
});

// Скролл 200пикс

$(document).ready(function() {
    $('.scrolldvesti').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 200) {
	 $(".scrolldvesti").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 300

$(document).ready(function() {
    $('.scrolltrista').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 300) {
	 $(".scrolltrista").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 500

$(document).ready(function() {
    $('.scrollp').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 500) {
	 $(".scrollp").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 600

$(document).ready(function() {
    $('.scrollb').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 600) {
	 $(".scrollb").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 800

$(document).ready(function() {
    $('#howiamworking h1').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 800) {
	 $("#howiamworking h1").fadeTo( "slow", 1);}
		 
      
   });

});

// Скролл 1000 c задержкой

$(document).ready(function() {
    $('#elone,#eltwo,#elthree,#elfour,#elfive').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 1000) {
	 $("#elone").fadeTo( "slow", 1);
	 $("#eltwo").delay(600).fadeTo( "slow", 1);
	 $("#elthree").delay(1200).fadeTo( "slow", 1);
	 $("#elfour").delay(1800).fadeTo( "slow", 1);
	 $("#elfive").delay(2400).fadeTo( "slow", 1);
	 }
		 
      
   });

});

//Cкролл 1300

$(document).ready(function() {
    $('#contactme h1').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 1300) {
	 $("#contactme h1").fadeTo( "slow", 1);}
		 
      
   });

});

//Cкролл 1500

$(document).ready(function() {
    $('#contactme .container-fluid').fadeTo( 1, 0.01);
});

$(document).ready(function(){	
$(window).scroll(function() {
     if ($(this).scrollTop() > 1500) {
	 $("#contactme .container-fluid").fadeTo( "slow", 1);}
		 
      
   });

});

var email;  
     var subj = "тема письма";  
     var tel = "собственно тело письма";  
 
function SendMail(sRecipientMail, sSubject, sMsgBody, files)   
{   
    try   
    {   
        // create a session and log on -- username and password in profile    
        var refMsg = WScript.CreateObject("CDO.Message");   
        var refConf = WScript.CreateObject("CDO.Configuration");   
           
        // Setting configuration params   
        with(refConf.Fields)   
        {   
            Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "smtp.rambler.ru";  
            Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2; 
            Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1;  
            Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = "deniskamotskiy@ro.ru";  
            Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "***"; 
        }   
        refConf.Fields.Update();   
        with(refMsg)   
        {   
            Configuration = refConf;   
            To       = sRecipientMail;   
            From     = "lou@list.ru";   
            Subject  = sSubject;   
            TextBody = sMsgBody;   
        }  
        if (files)  
        {  
            for(var i=0; i<files.length; i++)  
                refMsg.AddAttachment(files[i]);  
        }  
        refMsg.Send();   
    }    
    catch(e)   
    {   
        WScript.Echo("SendMail error !!! : " + e.description);   
        WScript.Quit(1);   
    }   
}