window.addEventListener('keydown',(event)=>{
    if (player.preventInput) return

    console.log(event)

    switch(event.key){
        
        case 'w':
            for(let i =0; i <doors.length;i++){
                const door = doors[i];
                if(player.hitbox.position.x +player.hitbox.width  <= door.position.x + door.width  &&
                    player.hitbox.position.x  >= door.position.x &&
                    player.hitbox.position.y +player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <=door.position.y+door.height){
                        player.velocity.x=0;player.velocity.y=0
                        console.log('we are at the door');//return
                        player.switchSprite('enterDoor')
                        door.play();
                        player.preventInput=true;//if this is true do not call  any of the code down below
                        return;
                    }
            }
            keys.w.pressed= true
            x=1;
            if(player.velocity.y ===0 && x==1){
                
                player.velocity.y=-25;
            }
            x=1;
            
            
            
            break;
        
        case 'a':
            //console.log("a pressed")
            //player.velocity.x=-4;
            keys.a.pressed=true;
            break
        
        case 'd':
            //console.log("d pressed")
            //player.velocity.x=+4;
            keys.d.pressed=true;
            break
        
    }
})

window.addEventListener('keyup',(event)=>{
    console.log(event)

    switch(event.key){
        case 'w':
            //console.log('i pressed w')
            //if(player.velocity.y ==0){
            //    //player.velocity.y=-10;
            //}
            keys.w.pressed=false;
            break;
        
        case 'a':
            keys.a.pressed=false;
            break
        
        case 'd':
            keys.d.pressed=false;
            break
        
    }
})