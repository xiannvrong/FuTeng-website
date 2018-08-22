$().ready(function(){
    var _index=0;

    $(".tab-menu li").eq(0).addClass("change").siblings().removeClass("change");

    $(".tab-menu li").mouseover(function(){
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        _index = $(this).index();
        numFun()
    });

    $('.right').click(function(){
        _index++;
        if( _index == $(".tab-box>div").length) _index=0
        numFun()
    });

    $('.left').click(function(){
        _index--;
        if( _index == -1 ) _index=$(".tab-box>div").length-1
        numFun()
    });

    function numFun(){
        //让内容框的第 _index 个显示出来，其他的被隐藏
        $(".tab-box>div").eq(_index).show().siblings().hide();
        //改变选中时候的选项框的样式，移除其他几个选项的样式
        $(".tab-menu li").eq(_index).addClass("change").siblings().removeClass("change");
    }
});