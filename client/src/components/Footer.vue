<template>
    <div class="footer_wrap">
        <div class="footer">
            <div class="logo_wrap">
                <ul class="logo">
                    <li class="logo_img">
                        <router-link to='/'>
                            <img alt="Vue logo" src="../assets/footer_logo.png">
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="navi-wrap">
                <ul class="navi">
                    <li class="nm-mn1">
                        <router-link to='/Introduce'>
                            GDSC PNU 소개
                        </router-link>
                    </li>
                    <li class="nm-mn1">
                        <router-link to='/Member'>
                            구성원 소개
                        </router-link>
                    </li>
                    <li class="nm-mn1">
                        <router-link to="/Activity">
                            활동 내용
                        </router-link>
                    </li>
                    <li class="nm-mn1">
                        <a href="javascript:;" v-on:click="toParticipation()">
                            참여 신청
                        </a>
                    </li>
                </ul>
            </div>
            <div class="foot_copy_wrap">
                <div class="foot_copy">
                    Copyrights reserved by Google Developer Students Clubs Pusan National Univ.
                </div> 
            </div>
        </div> 
    </div>    
</template>

<script>
    import toParticipation from "./functions/toParticipation";

    export default {
        name: 'Footer',
        setup() {
            return {toParticipation}
        }
    }
</script>

<style scoped>
    .footer_wrap {position: relative; bottom: 0; left:0;width: 100%;height: 394px;display: block;background: #f4f4f4;}
    .footer {position:relative;display:block;width: 1400px;height: 100%;margin: 0 auto;}

    .footer .logo_wrap {position:relative;top:0;left:0;display:block; z-index: 600;}

    .footer .logo_wrap .logo {display: block;text-align: center; float: left; margin: 0; position: relative;}
    .footer .logo_wrap .logo li {position: relative;display: inline-block;vertical-align:middle;padding: 0 8px;}
    .footer .logo_wrap .logo li.logo_img img {display: block; width:321px; height: 317px; margin:22px 0 0 0;}

    .footer .navi-wrap {position:relative;top:0;left:0;display:block;width: 100%;}

    .footer .navi {display: block;text-align: center; float: right; margin:126px 0 0 0;}
    .footer .navi li.nm-mn1 {position: relative;display: inline-block;vertical-align:top;padding: 0 20px;}
    .footer .navi li.nm-mn1 a {position: relative;display:block;color:#808080;font-size:18px;font-weight: 600;line-height:80px;height: 80px;text-align: center; text-decoration: none;}
    .footer .navi li.nm-mn1 .router-link-active {color:#4285f4}

    .footer .foot_copy_wrap {width: 100%; float:left; margin-top: 20px;}
    .footer .foot_copy_wrap .foot_copy {position: relative; color:#9d9d9d; font-size: 15px;}

    @media screen and (max-width: 1080px) {
       .footer_wrap {position: relative; bottom: 0; left:0;width: 100%;height: 394px;display: block;background: #f4f4f4;}
       .footer {position:relative;display:block;max-width: 481px;height: 100%;margin: 0 auto;}
        
       .footer .logo_wrap {position:relative;top:0;left:0;display:block; z-index: 1; width: 100%; height: 90%;}
       .footer .logo_wrap .logo {display: block;text-align: center; margin: 0; position: relative; float:none; padding: 0;}
       .footer .logo_wrap .logo li.logo_img img {display: block; width:321px; height: 317px; margin:22px 0 0 0;}

       .footer .navi-wrap {display: none;}

       .footer .foot_copy_wrap {width: 100%; float:left; margin:0;}
       .footer .foot_copy_wrap .foot_copy {position: relative; color:#9d9d9d; font-size: 13px;}
    }

    @media screen and (max-width: 767px) {
       .footer_wrap {position: relative; bottom: 0; left:0;width: 100%;height: 294px;display: block;background: #f4f4f4;}
       .footer {position:relative;display:block;max-width: 481px;height: 100%;margin: 0 auto;}
        
       .footer .logo_wrap {position:relative;top:0;left:0;display:block; z-index: 1; width: 100%; height: 90%;}
       .footer .logo_wrap .logo {display: block;text-align: center; margin: 0; position: relative; float:none; padding: 0;}
       .footer .logo_wrap .logo li.logo_img img {display: block; width:221px; height: 217px; margin:22px 0 0 0;}

       .footer .navi-wrap {display: none;}

       .footer .foot_copy_wrap {width: 100%; float:left; margin:0;}
       .footer .foot_copy_wrap .foot_copy {position: relative; color:#9d9d9d; font-size: 12px;}
    }

    @media screen and (max-width: 481px) {
       .footer_wrap {position: relative; bottom: 0; left:0;width: 100%;height: 294px;display: block;background: #f4f4f4;}
       .footer {position:relative;display:block;max-width: 360px;height: 100%;margin: 0 auto;}
        
       .footer .logo_wrap {position:relative;top:0;left:0;display:block; z-index: 1; width: 100%; height: 90%;}
       .footer .logo_wrap .logo {display: block;text-align: center; margin: 0; position: relative; float:none; padding: 0;}
       .footer .logo_wrap .logo li.logo_img img {display: block; width:221px; height: 217px; margin:22px 0 0 0;}

       .footer .navi-wrap {display: none;}

       .footer .foot_copy_wrap {width: 100%; float:left; margin:0;}
       .footer .foot_copy_wrap .foot_copy {position: relative; color:#9d9d9d; font-size: 12px;}
    }
</style>