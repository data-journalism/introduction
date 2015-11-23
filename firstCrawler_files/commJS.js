
function CheckIsNull(name){
    var x = 0;
    for (var y = 0; y < name.length; y=y+1)  {
        var ch = name.charAt(y);
        if(ch != " "){
            x=x+1;
            break;
        }
    }
    if(x === 0){
        return true;
    }
    return false;
}

function checkIsInteger(Str) {
	Str=""+Str;
	RegularExp=/^[0-9]+$/;	
	if (RegularExp.test(Str)) {
		return false;
	}
	else {
		return true;
	}	
}

function checkIsString(Str) {
	Str=""+Str;
	RegularExp=/^[a-zA-Z]+$/;	
	if (RegularExp.test(Str)) {
		return false;
	}
	else {
		return true;
	}	
}

function checkIsStringNumber(Str) {
	Str=""+Str;
	RegularExp=/^[_a-zA-Z0-9]+$/;	
	if (RegularExp.test(Str)) {
		return false;
	}
	else {
		return true;
	}	
}

function checkIsMoney(Str) {
	Str=""+Str;
	RegularExp=/^[.0-9]+$/;	
	if (RegularExp.test(Str)) {
		return false;
	}
	else {
		return true;
	}	
}

function checkIsHexString(Str) {
	Str=""+Str;
	RegularExp=/^[0-9a-fA-F]+$/;	
	if (RegularExp.test(Str)) {
		return false;
	}
	else {
		return true;
	}	
}

function absStringLength(inputStr)
{
   var str;
   var discrepancyLength;
   var chineseWordNum;
   str = escape(inputStr);
   discrepancyLength = str.length - inputStr.length;
   chineseWordNum = parseInt(discrepancyLength / 5);
   return inputStr.length + chineseWordNum;
}


function mouseOverTR(obj) {
	//alert("aa");
	obj.style.background='#D8E3F9';	
}

function mouseOutTR(obj) {
	obj.style.background="#5E89E1";
}


function StringTrim( Str , Flag )
{

	Str	= ""+Str;
	if( Flag == "l" || Flag == "L" )/*trim left side only*/
	{
		RegularExp	= /^\s+/gi;
		return Str.replace( RegularExp,"" );
	}
	else if( Flag == "r" || Flag == "R" )/*trim right side only*/
	{
		RegularExp	= /\s+$/gi;
		return Str.replace( RegularExp,"" );
	}
	else/*defautly, trim both left and right side*/
	{
		RegularExp	= /^\s+|\s+$/gi;
		return Str.replace( RegularExp,"" );
	}
}
function checkPhoneFormat(str) {
	Str=""+str;
	RegularExp=/^[0-9]{11}$/;
	if (RegularExp.test(Str)) {
		return false;
	}
	else {
//		alert("Phone No. is wrong format??There should be 11 digits??");
		return true;
	}
}

function checkMailFormat(str)
{
   Str = ""+str;
   RegularExp = /[a-z0-9_-]*@[a-z0-9_-]*\.[a-z0-9_-]+/gi;
   if (RegularExp.test(Str)||str==="")
   {
       return false;
   }else{
       
       return true;
   }
}


function checkTelFormat(str)
{ 
   Str = ""+str;
   RegularExp = /^((([0-9]{4}|[0-9]{3})-)|(\(([0-9]{4}|[0-9]{3})\)))*([0-9]{7}|[0-9]{8})$|^[0-9]{11}$/
   if (RegularExp.test(Str))
   {
       return true;
   }else{
       return false;
   }
}

function checkDateFormat(str) {
   Str = ""+str;
  // RegularExp = /^[1-9]{1}[0-9]{3}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/
   RegularExp =  /^[1-2]{1}[0-9]{3}[-]{1}[0]{1}[1-9]{1}[-]{1}[0]{1}[1-9]{1}$|^[1-2]{1}[0-9]{3}[-]{1}[0]{1}[1-9]{1}[-]{1}[1-2]{1}[0-9]{1}$|^[1-2]{1}[0-9]{3}[-]{1}[0]{1}[1-9]{1}[-]{1}[3]{1}[0-1]{1}$|^[1-2]{1}[0-9]{3}[-]{1}[1]{1}[0-2]{1}[-]{1}[0]{1}[1-9]{1}$|^[1-2]{1}[0-9]{3}[-]{1}[1]{1}[0-2]{1}[-]{1}[1-2]{1}[0-9]{1}$|^[1-2]{1}[0-9]{3}[-]{1}[1]{1}[0-2]{1}[-]{1}[3]{1}[0-1]{1}$/;
   if (RegularExp.test(Str))
   {
       return false;
   }else{
       //alert("Date is wrong format,the right is \"20010425\"");
       return true;
   }
}

function checkTimeFormat(str) {
	Str=""+str;
	RegularExp=/^[0-1]{1}[0-9]{1}[:]{1}[0-5]{1}[0-9]{1}$|^[2]{1}[0-4]{1}[:]{1}[0-5]{1}[0-9]{1}$/;
	if (RegularExp.test(Str))
   {
       return true;
   }else{
       alert("Time is wrong format,the right is \"04:06\"");
       return false;
   }
}



function primary_domain(str) 
{
   Str = ""+str;
   RegularExp = /[0-9A-Za-z]*\.[0-9A-Za-z]+/gi
   if (RegularExp.test(Str))
   {
       return true;
   }else{
       //alert("Identification NO. is wrong format??");
       return false;
   }
}

function master_domain(str) 
{
   Str = ""+str;
   RegularExp = /[0-9A-Za-z]*\.[0-9A-Za-z]*\.[0-9A-Za-z]+/gi
   if (RegularExp.test(Str))
   {
       return true;
   }else{
       //alert("Identification NO. is wrong format??");
       return false;
   }
}

function CheckIpFormat(str) 
{
   Str = ""+str;
   RegularExp = /[0-9]*\.[0-9]*\.[0-9]*\.[0-9]+/gi
   if (RegularExp.test(Str))
   {
       return false;
   }else{
       return true;
   }
}

function checkIsNormalText(str) {
	var myStr=""+str;
	RegularExp=/^\w*$/
	if (RegularExp.test(myStr)){
		return true;
	}
	else {
		return false;
	}	
}


function replaceStr(Str,toMoveStr,toReplaceStr)
          {
     	var returnStr="";
             var sourceStr=""+Str;
	       while (sourceStr.length>0 && sourceStr.indexOf(toMoveStr)!=-1)
             {
		 var curPlace=sourceStr.indexOf(toMoveStr);
		 returnStr+=sourceStr.substring(0,curPlace)+toReplaceStr;
		 sourceStr=sourceStr.substring(curPlace+toMoveStr.length,sourceStr.length);
             }
	       returnStr+=sourceStr;
	       return returnStr;
}
