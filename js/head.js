var headerStr = '<div class="header">'+
'    <div class="header_top">'+
'        <div class="header_bd fixedWidth clearfix">'+
'            <div class="logo fl">'+
'                <img src="/images/logo.png" alt="">'+
'            </div>'+
'            <div class="search fl">'+
'               <div class="search_box clearfix">'+
'                   <div class="l_inp fl">'+
'                       <input type="text" placeholder="请您输入关键词">'+
'                   </div>'+
'                   <div class="r_btn fr">'+
'                       查询'+
'                   </div>'+
'               </div>'+
'            </div>'+
'            <div class="optionsBtn fr">'+
'                <p class="btn">'+
'                    <a class="" href="#">在线院刊</a>'+
'                </p>'+
'                <p class="btn">'+
'                    <a class="" href="#">医保政策</a>'+
'                </p>'+
'                <p class="btn">'+
'                    <a class="" href="#">客户服务</a>'+
'                </p>'+
'            </div>'+
'        </div>'+
'    </div>'+
'   <div class="header_nav" :class="{\'active\':isFixed}" ref="headerNav">'+
'       <ul class="nav fixedWidth">'+
'           <li class="column" v-for="(item,index) in tabs" @mouseover="function(e){handleMouseOver(e,index)}" @mouseleave="handleMouseLeave">'+
'               <a href="#">{{item.name}}</a>'+
'               <div class="content" v-if="item.children">'+
'                   <div class="menu_wrap">'+
'                       <div class="menu" v-for="row in item.children">'+
'                           <a href="#">{{row.name}}</a>'+
'                       </div>'+
'                   </div>'+
'               </div>'+
'           </li>'+
'       </ul>'+
'   </div>'+
'</div>';
$('.header_view').append(headerStr);
var footerStr = '<div class="footer">'+
'             <div class="footer_top fixedWidth clearfix">'+
'                 <div class="top_l fl">'+
'                     <ul class="info">'+
'                        <li class="dz">通讯地址：福建省福州市仓山区上藤路47号</li>'+
'                        <li class="yb">   邮编：350007</li>'+
'                        <li class="dh">'+
'                            <a href="#">来院导航</a>'+
'                        </li>'+
'                     </ul>'+
'                     <p class="phone">'+
'                        电话总机：0591-22169222'+
'                     </p>'+
'                 </div>'+
'                 <div class="top_r fr">'+
'                    邮箱：<a href="#">fzshier@126.com</a>'+
'                 </div>'+
'             </div>'+
'             <div class="footer_center">'+
'                 <div class="cen_view fixedWidth clearfix">'+
'                     <div class="cen_l fl clearfix">'+
'                         <div class="logo_img fl">'+
'                             <img src="/images/logo_2.png" alt="">'+
'                         </div>'+
'                         <div class="hz_img fl">'+
'                             <img src="/images/qualification.png" alt="">'+
'                         </div>'+
'                     </div>'+
'                     <div class="cen_r fr">'+
'                         <ul class="box_wrap">'+
'                            <li class="box">'+
'                                <div class="code_img"></div>'+
'                                <p class="name">官方微博</p>'+
'                            </li>'+
'                            <li class="box">'+
'                                <div class="code_img"></div>'+
'                                <p class="name">官方微信订阅号</p>'+
'                            </li>'+
'                            <li class="box">'+
'                                <div class="code_img"></div>'+
'                                <p class="name">官方微信服务号</p>'+
'                            </li>'+
'                            <li class="box">'+
'                                <div class="code_img"></div>'+
'                                <p class="name">官方抖音</p>'+
'                            </li>'+
'                         </ul>'+
'                     </div>'+
'                 </div>'+
'             </div>'+
'             <div class="footer_foot fixedWidth clearfix">'+
'                 <div class="foot_l fl">'+
'                     <ul class="route">'+
'                        <li class="badge">'+
'                            <img src="/images/badge.png" alt="">'+
'                           <a href="#">闽公网安备 35010402350152号</a>'+
'                       </li>'+
'                       <li class="beia">'+
'                            <a href="#">闽ICP备13015393号</a>'+
'                        </li>'+
'                     </ul>'+
'                 </div>'+
'                 <div class="foot_r fr">'+
'                     <ul>'+
'                         <li class="text">'+
'                            版权所有：2021 福建省福州市第二医院 All right reserved'+
'                         </li>'+
'                         '+
'                        <li>网站建设：<a href="#">北京凤凰世纪科技有限公司</a></li>'+
'                     </ul>'+
'                 </div>'+
'             </div>'+
'         </div>';
$('.footer_view').append(footerStr);
var rightStr = '<div class="rightBar">'+
'            <ul class="bar_cont">'+
'                <li class="item">'+
'                    <p class="icon">'+
'                        <img class="default" src="/images/pic-1-c.png" alt="">'+
'                        <img src="/images/pic-1-b.png" alt="" class="active">'+
'                    </p>'+
'                    <p class="text">预约挂号</p>'+
'                </li>'+
'                <li class="item">'+
'                    <p class="icon">'+
'                        <img class="default" src="/images/pic-2-c.png" alt="">'+
'                        <img src="/images/pic-2-b.png" alt="" class="active">'+
'                    </p>'+
'                    <p class="text">专家门诊</p>'+
'                </li>'+
'                <li class="item">'+
'                    <p class="icon">'+
'                        <img class="default" src="/images/pic-3-c.png" alt="">'+
'                        <img src="/images/pic-3-b.png" alt="" class="active">'+
'                    </p>'+
'                    <p class="text">就医须知</p>'+
'                </li>'+
'                <li class="item">'+
'                    <p class="icon">'+
'                        <img class="default" src="/images/pic-4-c.png" alt="">'+
'                        <img src="/images/pic-4-b.png" alt="" class="active">'+
'                    </p>'+
'                    <p class="text">交通指南</p>'+
'                </li>'+
'                <li class="item">'+
'                    <p class="icon">'+
'                        <img class="default" src="/images/pic-5-c.png" alt="">'+
'                        <img src="/images/pic-5-b.png" alt="" class="active">'+
'                    </p>'+
'                    <p class="text">科室分布</p>'+
'                </li>'+
'            </ul>'+
'         </div>';
$('.rightNav').append(rightStr);