var currentElement = getCurrentScriptElement();

function getCurrentScriptElement() {
    var currentScript = null;


    if(document.currentScript){
        currentScript = document.currentScript;
        return currentScript;
    }
    currentScript = document.getElementsByTagName('script');
    currentNode = currentScript[currentScript.length - 1];
    return currentNode;
}

onLoadMakeAdCall(currentElement)();

function onLoadMakeAdCall(currentElement) {
    return function() {
        // console.log("making ad call");
        // var currentElement = getCurrentScriptElement();
        var loc = currentElement.src;
        var val = loc.split('/')[3];
        // alert(loc);
        if(val != "test") {
            // alert("outside test");
            makeAdCall(loc, currentElement, 6);
        } else {
            // alert("inside test");
            makeTestAdCall(currentElement, 4);
        }
    }
}

function makeTestAdCall(currentElement, pos) {
    var loc = window.location.href;
    var mod_loc = loc.replace("?siteid=", "");
    // alert("loc = " + mod_loc);
    makeAdCall(mod_loc, currentElement, pos);
}

function parse_query_string(query) {
  var vars1 = query.split("gclckunesc=");
//alert(vars[1]);
     if (vars1 == null) {
    // There is no array at all.
      } else if (vars1.length == 2) {
	//alert(vars1[1]);
		var a = "";
		try {
            a = decodeURIComponent(vars1[1]);
        }
        catch(e) {
        }
		return a;
    // There is an array, but there are no elements.
      }
   return 'undefined';
}

function getUrlVars(query)
{
    var vars = [], hash;
    var hashes = query.slice(query.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        //vars[hash[0]] = decodeURIComponent(hash[1]);
        try {
            vars[hash[0]] = decodeURIComponent(hash[1]);
        }
        catch(e) { 
            //Ignoring the error as ref param will now take the current URL
        }
    }
    return vars;
}

function makeAdCall(locIn, currentElement, pos) {
    var xml_http;      
    // alert("I am here");

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xml_http = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xml_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
	
    var locI = locIn.indexOf('?');
    if(locI < 1) { 
       locI=locIn.length;
    }
    var locInSplit  = [locIn.slice(0,locI), locIn.slice(locI+1)];
    var num_ads = "1";
    var question_mark    = "?";
    var param_separator  = "&";
    var value_separator  = "=";

    var dsp_base_url     = "http://adserver.enpoint.com/impdi/";

    var user_agent_param = "ua";
    var num_ads_param    = "nads";
    var version          = "ver";
    var version_value    = "js_1";
  
    var user_agent_value = navigator.userAgent;
    var post_payload     = user_agent_param;
    post_payload = post_payload.concat(value_separator);
    post_payload = post_payload.concat(user_agent_value);

 	var queryparams = getUrlVars(locInSplit[1]);

    var adcsite = queryparams['adcsite'];
    if( adcsite != 'undefined' && typeof(adcsite) != "undefined")
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('site-id');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(adcsite));
    } 

    post_payload = post_payload.concat(param_separator);
    post_payload = post_payload.concat(num_ads_param);
    post_payload = post_payload.concat(value_separator);
    post_payload = post_payload.concat(num_ads);
    post_payload = post_payload.concat(param_separator);
    post_payload = post_payload.concat(version);
    post_payload = post_payload.concat(value_separator);
    post_payload = post_payload.concat(version_value);


    var adcw = queryparams['adcw'];
    if( adcw != 'undefined' && typeof(adcw) != "undefined")
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('w');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(adcw));
    } 


    var adch = queryparams['adch'];
    if( adch != 'undefined' && typeof(adch) != "undefined")
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('h');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(adch));
    }
	
	var adceb = queryparams['adceb'];
    if( adceb != 'undefined' && typeof(adceb) != "undefined")
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('eb');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(adceb));
    } 

	var adcsec = queryparams['adcsec'];
    if( adcsec != 'undefined' && typeof(adcsec) != "undefined")
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('sec');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(adcsec));
    } 

    var aidsha1 = queryparams['aidsha1'];
    if( aidsha1 != 'undefined' && typeof(aidsha1) != "undefined")
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('aidsha1');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(aidsha1));
    }  
    
    var aidmd5 = queryparams['aidmd5'];
    if( aidmd5 != 'undefined' && typeof(aidmd5) != "undefined")
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('aidmd5');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(aidmd5));
    }

	var aid = queryparams['aid'];
    if( aid != 'undefined' && typeof(aid) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('aid');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(aid));
    }

    var idfa = queryparams['idfa'];
    if( idfa != 'undefined' && typeof(idfa) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('idfa');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(idfa));
    }

    var adid = queryparams['adid'];
    if( adid != 'undefined' && typeof(adid) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('adid');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(adid));
    }

    var gaid = queryparams['gaid'];
    if( gaid != 'undefined' && typeof(gaid) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('gaid');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(gaid));
    }
   
    var bundlename = queryparams['bundlename'];
    if( bundlename != 'undefined' && typeof(bundlename) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('bundlename');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(bundlename));
    }


    var appname = queryparams['appname'];
    if( appname != 'undefined' && typeof(appname) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('appname');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(appname));
    }

    var appver  = queryparams['appver'];
    if( appver != 'undefined' && typeof(appver) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('appver');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(appver));
    }

    var cntid  = queryparams['cntid'];
    if( cntid != 'undefined' && typeof(cntid) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('cntid');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(cntid));
    }

    var cnttitle  = queryparams['cnttitle'];
    if( cnttitle != 'undefined' && typeof(cnttitle) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('cnttitle');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(cnttitle));
    }

    var cntlen  = queryparams['cntlen'];
    if( cntlen != 'undefined' && typeof(cntlen) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('cntlen');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(cntlen));
    }

    var cnturl  = queryparams['cnturl'];
    if( cnturl != 'undefined' && typeof(cnturl) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('cnturl');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(cnturl));
    }

    var dnt  = queryparams['dnt'];
    if( dnt != 'undefined' && typeof(dnt) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('dnt');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(dnt));
    }

    var dpidmd5  = queryparams['dpidmd5'];
    if( dpidmd5 != 'undefined' && typeof(dpidmd5) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('dpidmd5');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(dpidmd5));
    }

    var dpidsha1  = queryparams['dpidsha1'];
    if( dpidsha1 != 'undefined' && typeof(dpidsha1) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('dpidsha1');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(dpidsha1));
    }

    var ifa  = queryparams['ifa'];
    if( ifa != 'undefined' && typeof(ifa) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('ifa');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(ifa));
    }

    var ifamd5  = queryparams['ifamd5'];
    if( ifamd5 != 'undefined' && typeof(ifamd5) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('ifamd5');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(ifamd5));
    }

    var ifasha1  = queryparams['ifasha1'];
    if( ifasha1 != 'undefined' && typeof(ifasha1) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('ifasha1');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(ifasha1));
    }

    var lat  = queryparams['lat'];
    if( lat != 'undefined' && typeof(lat) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('lat');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(lat));
    }

    var lon  = queryparams['lon'];
    if( lon != 'undefined' && typeof(lon) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('lon');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(lon));
    }

    var  storeurl = queryparams['storeurl'];
    if( storeurl != 'undefined' && typeof(storeurl) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('storeurl');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(storeurl));
    }

	var  kpadv = queryparams['kpadv'];
    if( kpadv != 'undefined' && typeof(kpadv) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('kpadv');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(kpadv));
    }

    var  kpcam = queryparams['kpcam'];
    if( kpcam != 'undefined' && typeof(kpcam) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('kpcam');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(kpcam));
    }

    var  kpad = queryparams['kpad'];
    if( kpad != 'undefined' && typeof(kpad) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('kpad');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(kpad));
    }

    var cachebuster = queryparams['cbuster'];
    if( cachebuster != 'undefined' && typeof(cachebuster) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('cbuster');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(cachebuster));
    }

    var videodescription = queryparams['videodsc'];
    if( videodescription != 'undefined' && typeof(videodescription) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('videodsc');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(videodescription));
    }

    post_payload     = post_payload.concat(param_separator);
    post_payload     = post_payload.concat('dw');
    post_payload     = post_payload.concat(value_separator);
    post_payload     = post_payload.concat(encodeURIComponent("1"));

    var  ref = queryparams['ref'];
    if( ref != 'undefined' && typeof(ref) != "undefined" && ref != "" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('ref');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(ref));
    } else {
		try{
        	ref = window.top.location.href;
        	if( ref != 'undefined' && typeof(ref) != "undefined" && ref != "" )
        	{
            	post_payload     = post_payload.concat(param_separator);
            	post_payload     = post_payload.concat('ref');
            	post_payload     = post_payload.concat(value_separator);
            	post_payload     = post_payload.concat(encodeURIComponent(ref));
        	}
	        if( ref == 'undefined' ||  typeof(ref) == "undefined" || ref == ""){
    	        ref = window.location.href;
        	    if( ref != 'undefined' && typeof(ref) != "undefined" && ref != "" )
            	{
                	post_payload     = post_payload.concat(param_separator);
	                post_payload     = post_payload.concat('ref');
    	            post_payload     = post_payload.concat(value_separator);
        	        post_payload     = post_payload.concat(encodeURIComponent(ref));
            	}
        	}
		}catch(e){
		} 
    }

    var pageurl = queryparams['pageurl'];
    if( pageurl != 'undefined' && typeof(pageurl) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('pageurl');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(pageurl));
    } else {
		if( ref != 'undefined' && typeof(ref) != "undefined" && ref != "" ){
			pageurl = ref;
			post_payload     = post_payload.concat(param_separator);
			post_payload     = post_payload.concat('pageurl');
			post_payload     = post_payload.concat(value_separator);
			post_payload     = post_payload.concat(encodeURIComponent(pageurl));
		}
	}

    var refprevurl = document.referrer;

    if( refprevurl != 'undefined' && typeof(refprevurl) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('refprevurl');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(refprevurl));
    }

    var gdpr = queryparams['gdpr'];
    if( gdpr != 'undefined' && typeof(gdpr) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('gdpr');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(gdpr));
    }

    var consent = queryparams['consent'];
    if( consent != 'undefined' && typeof(consent) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('consent');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(consent));
    }

    var tnp = queryparams['tnp'];
    if( tnp != 'undefined' && typeof(tnp) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('tnp');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(tnp));
    }

    var fmt1 = queryparams['fmt1'];
    if( fmt1 != 'undefined' && typeof(fmt1) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('fmt1');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(fmt1));
    }

    var mcc = queryparams['mcc'];
    if( mcc != 'undefined' && typeof(mcc) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('mcc');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(mcc));
    }

    var mnc = queryparams['mnc'];
    if( mnc != 'undefined' && typeof(mnc) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('mnc');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(mnc));
    }

    var lmt = queryparams['lmt'];
    if( lmt != 'undefined' && typeof(lmt) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('lmt');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(lmt));
    }

    var zip = queryparams['zip'];
    if( zip != 'undefined' && typeof(zip) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('zip');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(zip));
    }

    var accuracy = queryparams['accuracy'];
    if( accuracy != 'undefined' && typeof(accuracy) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('accuracy');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(accuracy));
    }

	//gclckunesc should always be the last param
    var parsed_qs = parse_query_string(locInSplit[1]);
    if( parsed_qs != 'undefined' && typeof(parsed_qs) != "undefined" )
    {
        post_payload     = post_payload.concat(param_separator);
        post_payload     = post_payload.concat('gclckunesc');
        post_payload     = post_payload.concat(value_separator);
        post_payload     = post_payload.concat(encodeURIComponent(parsed_qs));
    }

    var getUrl = dsp_base_url + question_mark + post_payload;
    var docWriteValue = '<scr' + 'ipt language="Javascript" src="' + getUrl + '"></scr' + 'ipt>'
    // console.log(docWriteValue);
    document.write(docWriteValue);
}
