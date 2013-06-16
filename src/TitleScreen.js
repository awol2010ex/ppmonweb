cc.dumpConfig();

//��������
var TitleScreen =cc.Layer.extend({
	_frames : [],
	_screenSprite :null,
	init:function () {
        var bRet = false;
        if (this._super()) {
        	var winSize= cc.Director.getInstance().getWinSize();
        	// ����ͼ
			var s_crystaltitlescreen_bab_texture = cc.TextureCache.getInstance()
					.addImage(s_crystaltitlescreen_bab_img);

			//֡����
			
			
			for(var i=0;i<27;i++){
				var _row =parseInt(i/5);
				var _col =i%5 ;
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_crystaltitlescreen_bab_texture, cc.rect(170*_col, _row*80, 170, 80)));
			}
        	//��������
			this._screenSprite = cc.Sprite.createWithSpriteFrame(this._frames[0]);
			this._screenSprite.setPosition(0,0);
			this._screenSprite.setPosition( winSize.width / 2, winSize.height/2 );
			this._screenSprite.setScale(winSize.width /170.0);//�Ŵ�
			this.addChild(this._screenSprite,-9 );
			
			
			// �������涯��
			var titleScreen_animation = cc.Animation.create(this._frames, 0.04);
			var titleScreen_animate = cc.Animate.create(titleScreen_animation);
			
			
			var callFunc = cc.CallFunc.create(this.showMenu, this);// ��ʾ�˵�����
			
			// ������������
			var actions = cc.Sequence.create(titleScreen_animate,callFunc);
			this._screenSprite.runAction(actions);
			
            bRet = true;
        }
        return bRet;
    },
    //��ʾ�˵�
    showMenu:function(){
    	
    	var winSize = cc.Director.getInstance().getWinSize();
    	// �˵�֡ͼ
		var startGameMenu_texture = cc.TextureCache.getInstance()
				.addImage(s_menu01_img);
		var startGameMenu_frame= cc.SpriteFrame.createWithTexture(
				startGameMenu_texture, cc.rect(300, 50, 105, 120))
		var startGameMenu = cc.Sprite.createWithSpriteFrame(startGameMenu_frame);
		
		
		var startGameMenuItem = cc.MenuItemSprite.create(startGameMenu, null, null, function () {
			// initialize director
	        var director = cc.Director.getInstance();
	      //����Ϸ����
	        cc.Loader.preload(g_maingame, function () {
	        	
	            director.replaceScene(cc.TransitionFade.create(1.2, GameWalkingMapLayer.scene()));
	        }, this);
        }.bind(this));
		
		var menu = cc.Menu.create(startGameMenuItem);
        menu.alignItemsVerticallyWithPadding(10);
        this.addChild(menu, 1);
        menu.setPosition(winSize.width / 2, winSize.height / 2-200);
    }
});
TitleScreen.create = function () {
    var sg = new TitleScreen();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

TitleScreen.scene = function () {
    var scene = cc.Scene.create();
    var layer = TitleScreen.create();
    scene.addChild(layer);
    return scene;
};
