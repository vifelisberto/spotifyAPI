let body = document.querySelector("body");
let section = document.createElement('section');

fetch('https://api.spotify.com/v1/users/22cnleideojl5tnn4qep27zzq/playlists/0sZkxSkbUjgHdGxl4TEu1J', {
method: 'GET',
headers: new Headers({
    'Accept': 'application/json',
    'Authorization': 'Bearer BQBbARzkhPHRgGr6qqq8Qz2J8zFCOhf4oY7balIvydRBx4-YqyWBo1ic5DpmFl-onC0ZBv6a7gzWRi78BVIKIdFBtPndj45xgUuluuiHekWazX4zLfViebEEDSAL0tKXmFkMGjY_sp5xpj0cQVpyHolhfCDW55QeDrbmopWlyn_xsWdABRAJvcTSKtDG_EdEY-SkY9vg96Rt_iSiUhu68pmN2IUQulQcInw8ZndG_ExheIUoZr93qp0EvcNurz7PU8f6627QEWl-agMbWjW5TO7NqPKk1Hj-bl8v',
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
