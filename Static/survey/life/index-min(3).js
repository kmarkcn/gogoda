/*! simple-mask - v1.0 - 2013-09-22 4:23:32 PM
* Copyright (c) 2013 bachi; Licensed  */
KISSY.add("gallery/simple-mask/1.0/index",function(a){"use strict";function b(c,d){return this instanceof b?(this.con=a.one(c),b.superclass.constructor.call(this,d),this.init(),void 0):new b(c,d)}return b.ATTRS={id:{value:"J-Simple-Mask"},className:{value:""},zIndex:{value:999},opacity:{value:.6},fade:{value:!0},duration:{value:.3}},a.extend(b,a.Base,{init:function(){var a=this;a.id=a.get("id"),a.zIndex=a.get("zIndex"),a.opacity=a.get("opacity"),a.fade=a.get("fade"),a.duration=a.get("duration")},addMask:function(){var b=this;if(a.one("#"+b.id))return this;var c=a.Node('<div id="'+b.id+'"></div>');return c.css({display:"none","z-index":b.zIndex,"background-color":"black",left:0,position:"fixed",top:0,width:window.innerWidth+"px",opacity:b.fade?0:b.opacity,height:window.innerHeight+"px"}),a.one("body").append(c),b.fade?(c.css("display","block"),a.Anim(c,{opacity:b.opacity},b.duration,"none",function(){b.fire("maskReady")}).run()):(c.css("display","block"),b.fire("maskReady")),b._disableTouchMove(),b._addWindowResize(),this},_addWindowResize:function(){var b=this;a.one(window).on("resize",b._doWindowResize)},_removeWindowResize:function(){var b=this;a.one(window).detach("touchmove",b._doWindowResize)},_doWindowResize:function(){var a=this;a.getMask.css({left:0,position:"fixed",top:0,width:window.innerWidth+"px",height:window.innerHeight+"px"})},removeMask:function(){var b=this,c=a.one("#"+b.id);return c?(b.fade?a.Anim(c,{opacity:0},b.duration,"none",function(){c.remove(),b.fire("maskRemoved")}).run():(a.one("#"+b.id).remove(),b.fire("maskRemoved")),b._enableTouchMove(),b._removeWindowResize(),this):!1},masked:function(){var b=this;return a.one("#"+b.id)?!0:!1},getMask:function(){var b=this;return b.masked()?a.one("#"+b.id):null},_disableTouchMove:function(){a.one(document).on("touchmove",this._preventTouchMove)},_enableTouchMove:function(){a.one(document).detach("touchmove",this._preventTouchMove)},_preventTouchMove:function(a){a.preventDefault()},destory:function(){}}),b},{requires:["base","node"]});