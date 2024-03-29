var PokemonTrainer = cc.Sprite
		.extend({
			isWalk : false,// 是否正在行走
			anim_duation : 0.05,
			move_duation : 0.15,
			anim_frames_w : [],
			anim_frames_a : [],
			anim_frames_d : [],
			anim_frames_s : [],
			_backTileMap:null ,//地图
			ctor : function() {
				this._super();
				/*
				// 精灵帧图
				var s_shellysprites_texture = cc.TextureCache.getInstance()
						.addImage(s_shellysprites_img);

				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(70, 0, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(100, 0, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(130, 0, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(160, 0, 20, 20)));

				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(70, 30, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(100, 30, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(130, 30, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(160, 30, 20, 20)));

				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(70, 60, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(100, 60, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(130, 60, 20, 20)));
				this._frames.push(cc.SpriteFrame.createWithTexture(
						s_shellysprites_texture, cc.rect(160, 60, 20, 20)));

*/
				/*
				cc.SpriteFrameCache.getInstance().addSpriteFrames(s_shellysprites_plist);//加载精灵
				for(var i=0;i<12;i++){
					this._frames.push(cc.SpriteFrameCache.getInstance().getSpriteFrame("shellysprites_walk_"+i+".png"));
				}
				
				
				
				// 各方向帧
				this.anim_frames_d = [ this._frames[3], this._frames[7],
						this._frames[11] ];
				this.anim_frames_a = [ this._frames[1], this._frames[5],
						this._frames[9] ];
				this.anim_frames_w = [ this._frames[2], this._frames[6],
						this._frames[10] ];
				this.anim_frames_s = [ this._frames[0], this._frames[4],
						this._frames[8] ];
						*/
				
				// 各方向帧
				cc.SpriteFrameCache.getInstance().addSpriteFrames(s_dp_dawn_plist);//加载精灵
				var direction =['d','a','w','s'];
				for(var i=1;i<=3;i++){
					for(var j=0;j<4;j++){
						var frameName ="dp_dawn_walk_"+direction[j]+"_"+i+".png";
						this["anim_frames_"+direction[j]].push(cc.SpriteFrameCache.getInstance().getSpriteFrame(frameName));
					}
				}
				
				// 初始帧
				this.initWithSpriteFrame(this.anim_frames_s[0]);

			},
			// 行走
			walk : function(tag) {
				if (this.isWalk) {
					return;
				}
				var callFunc = cc.CallFunc.create(this.walkDone, this, tag);// 行走完动作
				// 初始帧
				this.initWithSpriteFrame(this["anim_frames_"+tag][0]);
				if (tag == 'd') {// 右
					
					
					
					//检测障碍物
					var layer = this._backTileMap.getLayer("objects");
			    	var tileSize = this._backTileMap.getTileSize();
			    	var mapSize = this._backTileMap.getMapSize();
			    	var tileX = Math.floor(this.getPositionX()/ tileSize.width)+1;
			    	var tileY = Math.floor(mapSize.height - this.getPositionY()/ tileSize.height); // Because Tiled maps register in the top left corner rather than bottom left
			    	var tileCoord = cc.p(tileX, tileY);
			    	var tileGID = layer.getTileGIDAt(tileCoord);
					
					if(tileGID!=0){
						return;
					}
					this.isWalk = true;
					
					
					
					
					var move_action = cc.MoveBy.create(this.move_duation, cc.p(
							tileSize.width, 0));// 移动动作
					// 移动动画
					var move_animation = cc.Animation.create(
							this.anim_frames_d, this.anim_duation);
					var move_animate = cc.Animate.create(move_animation);
					// 运行连串动作
					var actions = cc.Sequence.create(cc.Spawn.create(
							move_action, move_animate), callFunc);

					this.runAction(actions);

				} else if (tag == 'a') {// 左
					
					
					//检测障碍物
					var layer = this._backTileMap.getLayer("objects");
			    	var tileSize = this._backTileMap.getTileSize();
			    	var mapSize = this._backTileMap.getMapSize();
			    	var tileX = Math.floor(this.getPositionX()/ tileSize.width)-1;
			    	var tileY = Math.floor(mapSize.height - this.getPositionY()/ tileSize.height); // Because Tiled maps register in the top left corner rather than bottom left
			    	var tileCoord = cc.p(tileX, tileY);
			    	var tileGID = layer.getTileGIDAt(tileCoord);
					
					if(tileGID!=0){
						return;
					}
					
					
					this.isWalk = true;
					var move_action = cc.MoveBy.create(this.move_duation, cc.p(
							-tileSize.width, 0));// 移动动作
					// 移动动画
					var move_animation = cc.Animation.create(
							this.anim_frames_a, this.anim_duation);
					var move_animate = cc.Animate.create(move_animation);
					// 运行连串动作
					var actions = cc.Sequence.create(cc.Spawn.create(
							move_action, move_animate), callFunc);

					this.runAction(actions);

				} else if (tag == 'w') {// 上
					
					//检测障碍物
					
					var layer = this._backTileMap.getLayer("objects");
			    	var tileSize = this._backTileMap.getTileSize();
			    	var mapSize = this._backTileMap.getMapSize();
			    	var tileX = Math.floor(this.getPositionX()/ tileSize.width);
			    	var tileY = Math.floor(mapSize.height - this.getPositionY()/ tileSize.height)-1; // Because Tiled maps register in the top left corner rather than bottom left
			    	var tileCoord = cc.p(tileX, tileY);
			    	var tileGID = layer.getTileGIDAt(tileCoord);
					
					if(tileGID!=0){
						return;
					}
					
					this.isWalk = true;
					var move_action = cc.MoveBy.create(this.move_duation, cc.p(
							0, tileSize.height));// 移动动作
					// 移动动画
					var move_animation = cc.Animation.create(
							this.anim_frames_w, this.anim_duation);
					var move_animate = cc.Animate.create(move_animation);
					// 运行连串动作
					var actions = cc.Sequence.create(cc.Spawn.create(
							move_action, move_animate), callFunc);

					this.runAction(actions);

				} else if (tag == 's') {// 下
					//检测障碍物
					
					
					var layer = this._backTileMap.getLayer("objects");
			    	var tileSize = this._backTileMap.getTileSize();
			    	var mapSize = this._backTileMap.getMapSize();
			    	var tileX = Math.floor(this.getPositionX()/ tileSize.width);
			    	var tileY = Math.floor(mapSize.height - this.getPositionY()/ tileSize.height)+1; // Because Tiled maps register in the top left corner rather than bottom left
			    	var tileCoord = cc.p(tileX, tileY);
			    	var tileGID = layer.getTileGIDAt(tileCoord);
					
					if(tileGID!=0){
						return;
					}
					
					this.isWalk = true;

					var move_action = cc.MoveBy.create(this.move_duation, cc.p(
							0, -tileSize.height));// 移动动作
					// 移动动画
					var move_animation = cc.Animation.create(
							this.anim_frames_s, this.anim_duation);
					var move_animate = cc.Animate.create(move_animation);
					// 运行连串动作
					var actions = cc.Sequence.create(cc.Spawn.create(
							move_action, move_animate), callFunc);

					this.runAction(actions);

				}

			},
			// 行走完
			walkDone : function(tag) {
				this.isWalk = false;
			},
			
			setBackTileMap:function(map){
				this._backTileMap =map;
			}
		});
