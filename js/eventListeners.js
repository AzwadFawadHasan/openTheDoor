window.addEventListener('keydown',(event)=>{
    console.log(event)

    switch(event.key){
        case 'w':
            keys.w.pressed= true
            x=1;
            if(player.velocity.y ===0 && x==1){
                
                player.velocity.y=-20;
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