(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Level 2",
{ "compressionlevel":-1,
 "editorsettings":
    {
     "export":
        {
         "format":"js",
         "target":"..\/..\/..\/..\/Downloads\/Chris Courses - Multiroom Platformer-20221010T153536Z-001\/Chris Courses - Multiroom Platformer\/tiled\/eee.js"
        }
    },
 "height":9,
 "infinite":false,
 "layers":[
        {
         "data":[41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 291, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41,
            41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41, 41],
         "height":9,
         "id":2,
         "name":"Bg",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[27, 60, 60, 60, 60, 60, 28, 0, 41, 41, 41, 41, 41, 41, 41, 41,
            42, 135, 136, 136, 136, 137, 40, 0, 41, 41, 41, 41, 41, 41, 41, 41,
            42, 173, 174, 174, 142, 156, 40, 0, 0, 0, 0, 0, 0, 0, 0, 41,
            46, 22, 22, 23, 154, 156, 40, 0, 0, 0, 0, 0, 0, 0, 0, 41,
            41, 0, 0, 42, 154, 156, 40, 0, 0, 27, 60, 60, 60, 60, 28, 0,
            41, 27, 60, 61, 154, 156, 59, 60, 60, 61, 135, 136, 136, 137, 40, 0,
            41, 42, 135, 136, 161, 160, 136, 136, 136, 136, 170, 174, 174, 175, 40, 0,
            41, 42, 173, 174, 174, 174, 174, 174, 174, 174, 175, 21, 22, 22, 47, 41,
            41, 46, 22, 22, 22, 22, 22, 22, 22, 22, 22, 47, 0, 0, 41, 41],
         "height":9,
         "id":1,
         "name":"Tiles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "data":[292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            292, 0, 0, 0, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 292, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 0,
            0, 292, 292, 292, 0, 0, 292, 292, 292, 292, 0, 0, 0, 0, 292, 0,
            0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0,
            0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 0,
            0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0],
         "height":9,
         "id":4,
         "name":"Collisions",
         "opacity":0.22,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":3,
         "name":"Boxes and Door",
         "objects":[],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 273, 274, 0, 0, 256, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 280, 281, 0, 0, 263, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 277, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 256, 0, 271, 272, 271, 272, 271, 272, 0, 0, 0, 0, 0, 0,
            0, 0, 277, 0, 278, 279, 278, 279, 278, 279, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":9,
         "id":5,
         "name":"Decorations",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }],
 "nextlayerid":7,
 "nextobjectid":11,
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
         "source":"..\/..\/..\/..\/Downloads\/Chris Courses - Multiroom Platformer-20221010T153536Z-001\/Chris Courses - Multiroom Platformer\/tiled\/tilesets\/Decorations.tsx"
        }, 
        {
         "firstgid":290,
         "source":"..\/..\/..\/..\/Downloads\/Chris Courses - Multiroom Platformer-20221010T153536Z-001\/Chris Courses - Multiroom Platformer\/tiled\/tilesets\/Misc.tsx"
        }],
 "tilewidth":64,
 "type":"map",
 "version":"1.9",
 "width":16
});