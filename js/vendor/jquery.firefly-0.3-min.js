(function(e){var t={total:10,ofTop:0,ofLeft:0,on:"document.body",twinkle:.2,minPixel:1,maxPixel:2,color:"#fff"};e.firefly=function(n){e.firefly.settings=e.extend({},t,n);e.firefly.eleHeight=e(e.firefly.settings.on).height();e.firefly.eleWidth=e(e.firefly.settings.on).width();if(e.firefly.settings.on!=="document.body"){var r=e(e.firefly.settings.on).offset();e.firefly.offsetTop=r.top;e.firefly.offsetLeft=r.left;e.firefly.eleHeight=e(e.firefly.settings.on).height();e.firefly.eleWidth=e(e.firefly.settings.on).width()}else{e.firefly.offsetTop=0;e.firefly.offsetLeft=0;e.firefly.eleHeight=e(document.body).height();e.firefly.eleWidth=e(document.body).width()}for(i=0;i<e.firefly.settings.total;i++){e.firefly.fly(e.firefly.create(e.firefly.randomPixel(e.firefly.settings.minPixel,e.firefly.settings.maxPixel)))}return};e.firefly.create=function(t){spark=e("<div>").hide();if(e.firefly.settings.on==="document.body")e(document.body).append(spark);else e(e.firefly.settings.on).append(spark);return spark.css({position:"absolute",width:t,height:t,"background-color":e.firefly.settings.color,"z-index":e.firefly.random(20),top:e.firefly.offsetTop+e.firefly.random(e.firefly.eleHeight-50),left:e.firefly.offsetLeft+e.firefly.random(e.firefly.eleWidth-50)}).show()};e.firefly.fly=function(t){e(t).animate({top:e.firefly.offsetTop+e.firefly.random(e.firefly.eleHeight-50),left:e.firefly.offsetLeft+e.firefly.random(e.firefly.eleWidth-50),opacity:e.firefly.opacity(e.firefly.settings.twinkle)},(e.firefly.random(10)+5)*2e3,function(){e.firefly.fly(t)})};e.firefly.stop=function(t){e(t).stop()};e.firefly.randomPixel=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)};e.firefly.random=function(e){return Math.ceil(Math.random()*e)-1};e.firefly.opacity=function(e){op=Math.random();if(op<e)return 0;else return 1}})(jQuery)
