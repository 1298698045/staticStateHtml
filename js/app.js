var mixin = {
    data: function(){
        return {
            isArticle: false,
            hasRoute: this.hasOwnProperty('$route'),
            selectMenu: '',
            isGotop:false,
            qrCodeIdx: 0,
            isTop:true, // 是否在页面顶部
            tabs:[
                {
                    name: '医院概况',
                    children:[
                        {
                            name: '医院简介'
                        },
                        {
                            name: '机构证件'
                        },
                        {
                            name: '医院文化'
                        },
                        {
                            name: '医院分布图'
                        },
                        {
                            name: '交通指南'
                        },
                        {
                            name: '院领导'
                        }
                    ]
                },
                {
                    name: '医院新闻',
                    children:[
                        {
                            name: '医院简介'
                        },
                        {
                            name: '机构证件'
                        },
                        {
                            name: '医院文化'
                        },
                        {
                            name: '医院分布图'
                        },
                        {
                            name: '交通指南'
                        },
                        {
                            name: '院领导'
                        }
                    ]
                },
                {
                    name: '院务公开'
                },
                {
                    name: '党建之窗'
                },
                {
                    name: '就医指南'
                },
                {
                    name: '专家推荐',
                    children:[
                        {
                            name: '医院简介'
                        },
                        {
                            name: '机构证件'
                        },
                        {
                            name: '医院文化'
                        },
                        {
                            name: '医院分布图'
                        },
                        {
                            name: '交通指南'
                        },
                        {
                            name: '院领导'
                        }
                    ]
                },
                {
                    name: '科研教学'
                },
                {
                    name: '护理园地'
                },
                {
                    name: '医务专栏'
                },
                {
                    name: '健康科普'
                },
                {
                    name: '科室介绍'
                }
            ],
            isFixed: false
        }
    },
    computed: {
        activeMenu: function() {
            return (this.selectMenu || this.typePath)
        }
    },
    mounted:function() {
        // window.addEventListener('scroll',this.handleIsScroll,true)
        window.addEventListener('scroll',this.handleSroll)
    },
    methods: {
        push: function(path) {
            router.push({path: path})
        },
        gotoHref: function(url) {
            location.href = url
        },
        goto: function(url) {
            window.open(url)
        },
        onMenuMouseOver: function(menu) {
            this.selectMenu = menu
        },
        onMenuMouseLeave: function() {
            this.selectMenu = ''
        },
        handleTabQrCode:function(idx){
            this.qrCodeIdx = idx;
        },
        handleIsScroll:function() {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 500 ? (this.isGotop = true) : (this.isGotop = false);
        },
        toTop:function() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            const timeTop = setInterval(function() {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                    this.isTop = true;
                    clearInterval(timeTop);
                }else {
                    this.isTop = false;
                }
            }, 10);
        },
        handleOpen:function(){
            this.$refs.childModal.dialogVisible = true;
        },
        handleSroll:function(e){
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            if(top>=140){
                this.isFixed = true;
            }else {
                this.isFixed = false;
            }
            
        },
        handleMouseOver:function(e,index){
            $('.wrapper .header .header_nav .nav .column').find('.content').removeClass('active');
            $('.wrapper .header .header_nav .nav .column').eq(index).find('.content').addClass('active');
        },
        handleMouseLeave:function(e){
            $('.wrapper .header .header_nav .nav .column').find('.content').removeClass('active');
        },
    }
}

// const Modal = 
// Vue.extend({
//     template: `
//         <el-dialog
//         title="试用申请咨询"
//         :visible.sync="dialogVisible"
//         width="440px"
//         :before-close="handleClose">
//         <div class="modalContent">
//             <div class="desc">完善以下信息您可以免费体验我们的产品功能，我们的顾问会在 1个工作日内与您取得联系</div>
//             <el-form ref="form" :rules="rules" :model="modalForm" label-width="80px">
//                 <el-form-item required class="form_item" size="mini" label="单位名称" prop="unitName">
//                     <el-input v-model="modalForm.unitName"></el-input>
//                 </el-form-item>
//                 <el-form-item required class="form_item" size="mini" label="姓名" prop="name">
//                     <el-input v-model="modalForm.name"></el-input>
//                 </el-form-item>
//                 <el-form-item required class="form_item" size="mini" label="手机号" prop="phone">
//                     <el-input v-model="modalForm.phone"></el-input>
//                 </el-form-item>
//             </el-form>
//         </div>
//         <span slot="footer" class="dialog-footer">
//             <el-button class="submitBtn" type="primary" @click="dialogVisible = false">提交申请</el-button>
//         </span>
//     </el-dialog>
//     `,
//     data(){
//         return {
//             dialogVisible:false,
//             modalForm:{
//                 unitName: '',
//                 name: '',
//                 phone: ''
//             },
//             rules:{
//                 unitName:[
//                     { required: true, message: '请输入单位名称', trigger: 'blur' }
//                 ],
//                 name:[
//                     { required: true, message: '请输入姓名', trigger: 'blur' }
//                 ],
//                 phone:[
//                     { required: true, message: '请输入电话', trigger: 'blur' }
//                 ]
//             }
//         }
//     },
//     methods:{
//         handleClose(){
//             this.dialogVisible = false;
//         },
//         // 弹框
//         handleClose(){
//             this.dialogVisible = false;
//         }
//     }
// })