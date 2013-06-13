cc.dumpConfig();

//开机画面
var TitleScreen =cc.Layer.extend({
	_frames : [],
	_screenSprite :null,
	init:function () {
        var bRet = false;
        if (this._super()) {
        	var winSize= cc.Director.getInstance().getWinSize();
        	// 开机图
			var s_crystaltitlescreen_bab_texture = cc.TextureCache.getInstance()
					.addImage(s_crystaltitlescreen_bab_img);

			//帧序列
			
			
			for(var i=0;i<27;i++){
				var _row =parseInt(i/5);
				var _col =i%5 ;
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_crystaltitlescreen_bab_texture, cc.rect(170*_col, _row*80, 170, 80)));
			}
        	//开机画面
			this._screenSprite = cc.Sprite.createWithSpriteFrame(this._frames[0]);
			this._screenSprite.setPosition(0,0);
			this._screenSprite.setPosition( winSize.width / 2, winSize.height/2 );
			this._screenSprite.setScale(winSize.width /170.0);//放大
			this.addChild(this._screenSprite,-9 );
			
			
			// 开机画面动画
			var titleScreen_animation = cc.Animation.create(this._frames, 0.04);
			var titleScreen_animate = cc.Animate.create(titleScreen_animation);
			// 运行连串动作
			var actions = cc.Sequence.create(titleScreen_animate);
			this._screenSprite.runAction(actions);
			
            bRet = true;
        }
        return bRet;
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
