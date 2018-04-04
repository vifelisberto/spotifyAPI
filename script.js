let body = document.querySelector("body");
let section = document.createElement('section');

fetch('https://api.spotify.com/v1/users/22cnleideojl5tnn4qep27zzq/playlists/0sZkxSkbUjgHdGxl4TEu1J', {
method: 'GET',
headers: new Headers({
    'Accept': 'application/json',
    'Authorization': 'Bearer BQC1aclbSFh3C9LuOqoxNtvSGx0hPnrM0BNptuB3B0APdx-mct56HHB7_IAyMLOJr4D_bkt9STFRleOn2jb24py0X9jYozhtyYdJgR9LSFIPV9vj5_uK8EAU7h8XWnYIsw_ejo_Js2fO_IiLKsFX0v3fpQg7iSBPjFBjI0-x3oa50QuuNK4tOdcqdsER8a3G59UkQKIl3k1U1_BYf-Gi4UKbMtjFtsOAfnuq-VPbobQEATl72BLlZ7EPlZaqSRM6GftH2UT6PZxOJCuYA282CtsHm7tzErs',
})
})
.then(function(resposta){
    return resposta.json();
}).then(function(dados){
    for(var dado of dados.tracks.items){
        console.log(dado);
        
        let elem = document.createElement('div');
        let p1 = document.createElement('p');
        let img = document.createElement('img');
        let audio = document.createElement('video');
        let source = document.createElement('source');
        
        p1.textContent = dado.track.name;
        img.src = dado.track.album.images[0].url;
        img.width = '150';
        img.padding = '10';
    
        elem.appendChild(p1);
        elem.appendChild(img);
        
        audio.style.visibility = "hidden";
        source.type = "audio/mpeg";
        source.src = dado.track.preview_url;
        
        audio.appendChild(source);
        elem.appendChild(audio);
        elem.onclick = function(){
            window.open(dado.track.uri);
        };

        elem.onmouseover = function(){
            this.style.opacity = 1;
            this.style.transform = "scale(1.2)"; 
            this.children[2].play();           
        }
        
        elem.onmouseout = function(){
            this.style = null;
            this.children[2].pause();
        }
        
        section.appendChild(elem); 
        body.appendChild(section);

        setTimeout(function(){ document.querySelectorAll("div").forEach(function(item){ item.className = "normal"}), 1690 });
    }
});