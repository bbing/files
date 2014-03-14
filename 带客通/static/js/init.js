/*******************************
 * Copyright:智讯互动(www.zhixunhudong.com)
 * Author:Mr.Think
 * Description:JS
 *******************************/
KISSY.ready(function(S){
    KISSY.config({
        packages: [{
                base:'',
                name: 'js',
                tag: S.now(),
                path: 'static/',
                charset: 'utf-8', 
                combine:false,
                debug:true
            }]
    });
    //取启动脚本配置
    KISSY.use('node',function(S,Node){
        var $=Node.all;
        var initJSDOM = $('[data-js]');
        if(initJSDOM != null){
            var mainMod = initJSDOM.attr('data-js');
            if(mainMod != null && mainMod != ''){
                KISSY.use(mainMod,function(S){});
            }
        }
    });
});