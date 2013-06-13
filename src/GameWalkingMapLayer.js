
//训练员行走地图层
var GameWalkingMapLayer = cc.Layer.extend({
	_backTileMap:null,
	_playerSprite:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            
            //控制
            this.initControll();
            
            //背景地图
            this.initBackground();
            //精灵
            this.initPlayer();
            bRet = true;
        }
        return bRet;
    },
    initControll:function(){
    	
    	// accept touch now!

        if( 'keyboard' in sys.capabilities )
            this.setKeyboardEnabled(true);

        if( 'mouse' in sys.capabilities )
            this.setMouseEnabled(true);

        if( 'touches' in sys.capabilities )
            this.setTouchEnabled(true);
    },
    initBackground:function () {//背景地图
        //tilemap
        this._backTileMap = cc.TMXTiledMap.create(s_dptwinleaftown_tmx);
        this._backTileMap.setPosition( new cc.Point(0,0) );
        this.addChild(this._backTileMap, -9);
    },
    initPlayer:function(){//精灵
    	
    	
    	this._playerSprite =new PokemonTrainer();
    	this._playerSprite.setScale(16.0/20.0);
    	this._playerSprite.setPosition(new cc.Point(104,140) );
    	
    	this._playerSprite.setBackTileMap(this._backTileMap);//地图
    	
    	this.addChild(this._playerSprite, -8);
    	
    },
    onKeyDown:function (key) {  
    	if(cc.KEY.w == key ){
    		
    		this._playerSprite.walk("w"); //上
    	} 
    	else
    	if(cc.KEY.a == key ){
    		
    		this._playerSprite.walk("a"); //左
    	}
    	else
        if(cc.KEY.s == key ){
        		
        	this._playerSprite.walk("s"); //下
        }
        else
        if(cc.KEY.d == key ){
            		
            this._playerSprite.walk("d"); //右
        }
    }
});

GameWalkingMapLayer.create = function () {
    var sg = new GameWalkingMapLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameWalkingMapLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameWalkingMapLayer.create();
    scene.addChild(layer);
    return scene;
};
