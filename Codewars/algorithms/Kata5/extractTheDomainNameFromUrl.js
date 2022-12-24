/* KATA 5
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url){
    const regExHTTP = new RegExp('^(http|https)://') 
    let urlStr = url.replace(regExHTTP, "");
    const urlArr = urlStr.split(".");
    if(urlArr[0] === "www"){
        return urlArr[1]
    }else{
        return urlArr[0]
    }
}
console.log(
    domainName("http://github.com/carbonfive/raygun")
);
console.log(
    domainName("http://www.zombie-bites.com")
);
console.log(
    domainName("https://www.cnet.com")
);


//CodeWars soluciones alternativas:
function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};

function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}