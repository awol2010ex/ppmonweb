var dirImg = "res/";
var dirMusic = "res/Music/";//����
var dirMap = "res/map/";//��ͼ
var dirSprite = "res/sprite/";//����
var dirScreen="res/screen/";//����
var dirMenu="res/menu/";//�˵�
//img
var s_dptwinleaftown_img = dirMap+"dptwinleaftown.png";//��ͼԭͼƬ
var s_shellysprites_img = dirSprite+"shellysprites.png";//����ͼƬ
var s_dp_dawn_img = dirSprite+"dp_dawn.png";//����ͼƬ
var s_crystaltitlescreen_bab_img = dirScreen+"crystaltitlescreen_bab.png";//��������
var s_menu01_img =dirMenu+"menu01.png";//�˵��ز�
//tmx
var s_dptwinleaftown_tmx =dirMap +"dptwinleaftown.tmx";//��ͼtmx
//plist
var s_dp_dawn_plist = dirSprite+"dp_dawn.plist";//����plist
var s_shellysprites_plist = dirSprite+"shellysprites.plist";//����plist
var g_startgame =[
{src:s_crystaltitlescreen_bab_img},//��������
{src:s_menu01_img}//�˵��ز�              
];

var g_maingame = [
    //img
    {src:s_dptwinleaftown_img},//��ͼԭͼƬ
    {src:s_shellysprites_img},//����ͼƬ
    {src:s_shellysprites_plist},//����plist
    {src:s_dp_dawn_img},//����ͼƬ
    {src:s_dp_dawn_plist},//����plist
    //tmx
    {src:s_dptwinleaftown_tmx}//��ͼtmx
];
