var dirImg = "res/";
var dirMusic = "res/Music/";//音乐
var dirMap = "res/map/";//地图
var dirSprite = "res/sprite/";//精灵
var dirScreen="res/screen/";//画面
var dirMenu="res/menu/";//菜单
//img
var s_dptwinleaftown_img = dirMap+"dptwinleaftown.png";//地图原图片
var s_shellysprites_img = dirSprite+"shellysprites.png";//精灵图片
var s_dp_dawn_img = dirSprite+"dp_dawn.png";//精灵图片
var s_crystaltitlescreen_bab_img = dirScreen+"crystaltitlescreen_bab.png";//开机画面
var s_menu01_img =dirMenu+"menu01.png";//菜单素材
//tmx
var s_dptwinleaftown_tmx =dirMap +"dptwinleaftown.tmx";//地图tmx
//plist
var s_dp_dawn_plist = dirSprite+"dp_dawn.plist";//精灵plist
var s_shellysprites_plist = dirSprite+"shellysprites.plist";//精灵plist
var g_startgame =[
{src:s_crystaltitlescreen_bab_img},//开机画面
{src:s_menu01_img}//菜单素材              
];

var g_maingame = [
    //img
    {src:s_dptwinleaftown_img},//地图原图片
    {src:s_shellysprites_img},//精灵图片
    {src:s_shellysprites_plist},//精灵plist
    {src:s_dp_dawn_img},//精灵图片
    {src:s_dp_dawn_plist},//精灵plist
    //tmx
    {src:s_dptwinleaftown_tmx}//地图tmx
];
