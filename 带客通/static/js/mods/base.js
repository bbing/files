/*******************************
 * Copyright:智讯互动(www.zhixunhudong.com)
 * Author:Mr.Think
 * Description:MOD
 *******************************/
KISSY.add('js/mods/base',function(S,Node){
	var $=Node.all;
	//详情查看
	var lmiDown=$('.lmi-down');
	lmiDown.on('click',function(){
		console.log('s')
		var flag=$(this).hasClass('lmi-down-click');
		var next=$(this).next('.lmi-content');
		if(flag){
			$(this).removeClass('lmi-down-click');
			next.slideUp(.2);
		}else{
			$(this).addClass('lmi-down-click');
			next.slideDown(.2);
		}
		
	});
	
    
},{requires:['node']}); 