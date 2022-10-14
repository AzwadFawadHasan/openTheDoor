(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Level 3",
{ "compressionlevel":-1,
 "height":9,
 "infinite":false,
 "layers":[
        {
         "data":[41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
         "height":9,
         "id":1,
         "name":"Background",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 27, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 28, 0,
            0, 42, 135, 136, 136, 136, 136, 136, 136, 136, 136, 136, 136, 137, 40, 0,
            0, 42, 154, 155, 155, 155, 155, 155, 155, 141, 174, 174, 174, 175, 40, 0,
            0, 42, 154, 155, 155, 155, 155, 155, 155, 156, 97, 98, 98, 85, 47, 0,
            0, 42, 154, 155, 155, 155, 155, 155, 155, 160, 136, 136, 137, 40, 0, 0,
            0, 42, 173, 174, 174, 174, 174, 174, 174, 174, 174, 174, 175, 40, 0, 0,
            0, 46, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 47, 41, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":2,
         "name":"Tiles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 259, 0, 274, 275, 274, 275, 274, 275, 274, 275, 274, 275, 0, 0,
            0, 0, 266, 0, 281, 282, 281, 282, 281, 282, 281, 282, 281, 282, 0, 0,
            0, 0, 273, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 259, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 280, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":4,
         "name":"Decorations",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":3,
         "name":"Misc",
         "objects":[
                {
                 "class":"",
                 "gid":248,
                 "height":112,
                 "id":1,
                 "name":"",
                 "rotation":0,
                 "visible":true,
                 "width":92,
                 "x":175.675,
                 "y":446.2
                }, 
                {
                 "class":"",
                 "gid":249,
                 "height":32,
                 "id":3,
                 "name":"",
                 "rotation":0,
                 "visible":true,
                 "width":44,
                 "x":133.196,
                 "y":448.681
                }, 
                {
                 "class":"",
                 "gid":249,
                 "height":32,
                 "id":5,
                 "name":"",
                 "rotation":0,
                 "visible":true,
                 "width":44,
                 "x":133.196,
                 "y":417.398
                }, 
                {
                 "class":"",
                 "gid":249,
                 "height":32,
                 "id":6,
                 "name":"",
                 "rotation":0,
                 "visible":true,
                 "width":44,
                 "x":789.424,
                 "y":447.514
                }, 
                {
                 "class":"",
                 "gid":249,
                 "height":32,
                 "id":7,
                 "name":"",
                 "rotation":0,
                 "visible":true,
                 "width":44,
                 "x":790.008,
                 "y":416.467
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0,
            0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
            0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0,
            0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250, 250, 0,
            0, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0,
            0, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 0, 0,
            0, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":5,
         "name":"Collisions",
         "opacity":0.22,
         "type":"tilelayer",
         "visible":false,
         "width":16,
         "x":0,
         "y":0
        }],
 "nextlayerid":6,
 "nextobjectid":12,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":64,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/..\/Downloads\/Chris Courses - Multiroom Platformer-20221010T153536Z-001\/Chris Courses - Multiroom Platformer\/tiled\/tilesets\/Main.tsx"
        }, 
        {
         "firstgid":248,
         "source":"..\/..\/..\/..\/Downloads\/Chris Courses - Multiroom Platformer-20221010T153536Z-001\/Chris Courses - Multiroom Platformer\/tiled\/tilesets\/Misc.tsx"
        }, 
        {
         "firstgid":251,
         "source":"..\/..\/..\/..\/Downloads\/Chris Courses - Multiroom Platformer-20221010T153536Z-001\/Chris Courses - Multiroom Platformer\/tiled\/tilesets\/Decorations.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.9",
 "width":16
});