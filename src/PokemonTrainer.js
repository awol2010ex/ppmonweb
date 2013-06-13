var PokemonTrainer = cc.Sprite
		.extend({
			_frames : [],
			isWalk : false,// �Ƿ���������
			anim_duation : 0.05,
			move_duation : 0.15,
			anim_frames_w : null,
			anim_frames_a : null,
			anim_frames_d : null,
			anim_frames_s : null,
			_backTileMap:null ,//��ͼ
			ctor : function() {
				this._super();
				// ����֡ͼ
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

				// ������֡
				this.anim_frames_d = [ this._frames[3], this._frames[7],
						this._frames[11] ];
				this.anim_frames_a = [ this._frames[1], this._frames[5],
						this._frames[9] ];
				this.anim_frames_w = [ this._frames[2], this._frames[6],
						this._frames[10] ];
				this.anim_frames_s = [ this._frames[0], this._frames[4],
						this._frames[8] ];
				// ��ʼ֡
				this.initWithSpriteFrame(this._frames[0]);

			},
			// ����
			walk : function(tag) {
				if (this.isWalk) {
					return;
				}
				var callFunc = cc.CallFunc.create(this.walkDone, this, tag);// �����궯��

				if (tag == 'd') {// ��
					
					// ��ʼ֡
					this.initWithSpriteFrame(this._frames[3]);
					
					//����ϰ���
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
							tileSize.width, 0));// �ƶ�����
					// �ƶ�����
					var move_animation = cc.Animation.create(
							this.anim_frames_d, this.anim_duation);
					var move_animate = cc.Animate.create(move_animation);
					// ������������
					var actions = cc.Sequence.create(cc.Spawn.create(
							move_action, move_animate), callFunc);

					this.runAction(actions);

				} else if (tag == 'a') {// ��
					
					// ��ʼ֡
					this.initWithSpriteFrame(this._frames[1]);
					
					//����ϰ���
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
							-tileSize.width, 0));// �ƶ�����
					// �ƶ�����
					var move_animation = cc.Animation.create(
							this.anim_frames_a, this.anim_duation);
					var move_animate = cc.Animate.create(move_animation);
					// ������������
					var actions = cc.Sequence.create(cc.Spawn.create(
							move_action, move_animate), callFunc);

					this.runAction(actions);

				} else if (tag == 'w') {// ��
					// ��ʼ֡
					this.initWithSpriteFrame(this._frames[2]);
					
					//����ϰ���
					
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
							0, tileSize.height));// �ƶ�����
					// �ƶ�����
					var move_animation = cc.Animation.create(
							this.anim_frames_w, this.anim_duation);
					var move_animate = cc.Animate.create(move_animation);
					// ������������
					var actions = cc.Sequence.create(cc.Spawn.create(
							move_action, move_animate), callFunc);

					this.runAction(actions);

				} else if (tag == 's') {// ��
					// ��ʼ֡
					this.initWithSpriteFrame(this._frames[0]);
					//����ϰ���
					
					
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
							0, -tileSize.height));// �ƶ�����
					// �ƶ�����
					var move_animation = cc.Animation.create(
							this.anim_frames_s, this.anim_duation);
					var move_animate = cc.Animate.create(move_animation);
					// ������������
					var actions = cc.Sequence.create(cc.Spawn.create(
							move_action, move_animate), callFunc);

					this.runAction(actions);

				}

			},
			// ������
			walkDone : function(tag) {
				this.isWalk = false;
			},
			
			setBackTileMap:function(map){
				this._backTileMap =map;
			}
		});
