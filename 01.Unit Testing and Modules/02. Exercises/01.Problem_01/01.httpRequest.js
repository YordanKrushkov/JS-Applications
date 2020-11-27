function httpRequest (request){

let methods=['GET','POST','DELETE','CONNECT'];
let uriChecker=/^([A-Za-z0-9.]+)+$|\*/g;
let versions=['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];
let messageChecker=/^([^<>\\&'"]*)$/g;

if(!request.hasOwnProperty('method')||!methods.includes(request.method)){
    throw new Error ('Invalid request header: Invalid Method');
}
if(!request.hasOwnProperty('uri')||!request.uri.match(uriChecker)){
    throw new Error ('Invalid request header: Invalid URI')
}
if(!request.hasOwnProperty('version')||!versions.includes(request.version)){
    throw new Error ('Invalid request header: Invalid Version')

}

if(!request.hasOwnProperty('message')||!request.message.match(messageChecker)){
    throw new Error ('Invalid request header: Invalid Message')

}



}
httpRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }  
  );