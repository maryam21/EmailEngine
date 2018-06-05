var url="http://109.236.88.80:3003/relays/deploy";

$.post(url,function(data){
    console.log(data)
    servers = data;
    for (i=0; i< servers.length ;i++){
        $('#server').append('<td>'+servers[i].name+'<td/>'+'<td>'+servers[i].id+'<td/>'+'<td>'+servers[i].status+'<td/>'+'<td>'+servers[i].details+'<td/>');
    }
})