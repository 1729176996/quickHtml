var mainData,loading;
$(function(){
    FastClick.attach(document.body);
    mainData = new Vue({
        el: "#main",
        data:{
            srcUrl:'',
            selector:'',
            bscroll:null
        },
        mounted:function(){
            var _this = this;
            
            _this.srcUrl = 'https://www.dongmanmanhua.cn/COMEDY/xin-xinlingdeshengyin/%E7%AC%AC1189%E8%AF%9D-%E6%99%BA%E9%BD%BF/viewer?title_no=381&episode_no=293';
            
            //渲染节点结束后执行
            _this.$nextTick(function(){
                if(_this.bscroll) _this.bscroll.destroy();
                _this.bscroll = new BScroll(".content",{
                    click: true,
                    pullUpLoad: {
                      threshold: 50
                    }
                })
            })
        },
        methods:{
            pickUp:function(){
                var _this = this;
                var imgs = $("#hiddenHtml").contents().find(_this.selector);
                console.log(imgs);
            },
            submit:function(){
                
            }
        }
    })
});
