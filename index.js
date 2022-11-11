let nav = window.navigator;

let os = "not identifiy";

if(nav.userAgent.match(/Windows NT 10.0/)) {
  os = "ms windows 10"
}

else if(nav.userAgent.match(/Windows/)) {
  os = "ms windows"
}


else if(nav.userAgent.match(/Linux/)) {
  os = "linux"
}


else if(nav.userAgent.match(/Macintosh/)) {
  os = "mac os"
}


let browser = nav.appName;

if(nav.userAgent.match(/Opera|OPR\//)) {
  browser = "opera"
}

else if(nav.userAgent.match(/Firefox\//)) {
  browser = "mozilla";
}


else if(nav.userAgent.match(/Chrome\//)) {
  browser = "chrome";
}

else if(nav.userAgent.match(/Safari\//)) {
  browser = "safari";
}


console.log("broweser", browser);
console.log("operating system", os)

window.alert("broweser is :" + browser + "\n" + "operating system is : " + os)


