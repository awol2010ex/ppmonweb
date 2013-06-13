
//ѵ��Ա���ߵ�ͼ��
var GameWalkingMapLayer = cc.Layer.extend({
	_backTileMap:null,
	_playerSprite:null,
    init:function () {
        var bRet = false;
        if (this._super()) {
            
            //����
            this.initControll();
            
            //������ͼ
            this.initBackground();
            //����
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
    initBackground:function () {//������ͼ
        //tilemap
        this._backTileMap = cc.TMXTiledMap.create(s_dptwinleaftown_tmx);
        this._backTileMap.setPosition( new cc.Point(0,0) );
        this.addChild(this._backTileMap, -9);
    },
    initPlayer:function(){//����
    	
    	
    	this._playerSprite =new PokemonTrainer();
    	this._playerSprite.setScale(16.0/20.0);
    	this._playerSprite.setPosition(new cc.Point(104,140) );
    	
    	this._playerSprite.setBackTileMap(this._backTileMap);//��ͼ
    	
    	this.addChild(this._playerSprite, -8);
    	
    },
    onKeyDown:function (key) {  
    	if(cc.KEY.w == key ){
    		
    		this._playerSprite.walk("w"); //��
    	} 
    	else
    	if(cc.KEY.a == key ){
    		
    		this._playerSprite.walk("a"); //��
    	}
    	else
        if(cc.KEY.s == key ){
        		
        	this._playerSprite.walk("s"); //��
        }
        else
        if(cc.KEY.d == key ){
            		
            this._playerSprite.walk("d"); //��
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
