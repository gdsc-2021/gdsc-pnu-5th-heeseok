<template>
    <div class="header_wrap">
        <div class="header">
            <div class="logo_wrap">
                <router-link to='/'>
                <ul class="logo">
                    <li class="logo_img">
                        
                    </li>
                    <li class="logo_txt">
                        <div>Google Developer Students Club Pusan National Univ</div>
                    </li>
                </ul>
                </router-link>
            </div>
            <div class="navi-wrap">
                <ul class="navi">
                    <li class="nm-mn1">
                        <router-link to='/Introduce'>
                            GDSC PNU 소개
                        </router-link>
                    </li>
                    <li class="nm-mn1">
                        <router-link to="/Member">
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
        </div>
    </div>    
</template>

<script>
    import toParticipation from "./functions/toParticipation";

    export default {
        name: 'Header',
        setup() {
            return {toParticipation}
        }
    }
</script>

<style scoped>
    .header_wrap {position: fixed; top: 0;left: 0;width: 100%;height: 93px;display: block;background: #fff; box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16); border-bottom: 1px solid #011557; z-index:500}
    .header {position:relative;top:0;left:0;display:block;width: 1400px;height: 91px;margin: 0 auto;}

    .header .logo_wrap {position:relative;display:block;width: 636px; height:65px; z-index: 100;}

    .header .logo_wrap .logo {display: block; float:left}
    .header .logo_wrap .logo li {position: relative;display: block; float:left; padding: 0 20px 0 0;}
    /* .header .logo_wrap .logo li.logo_img {width:72px; height: 65px;} */
    /* .header .logo_wrap .logo li.logo_img img {display: block; width:72px; height: 65px;} */
    .header .logo_wrap .logo li.logo_txt div {display: block;color:#808080;font-size:20px;line-height:65px;}

    .header .navi-wrap {position:absolute;top:0;left:0;display:block;width: 100%;}

    .header .navi {display: block;text-align: center; float: right;}
    .header .navi li.nm-mn1 {position: relative;display: inline-block;vertical-align:top;padding: 0 20px; line-height:65px;}
    .header .navi li.nm-mn1 a {position: relative;display:block;color:#808080;font-size:20px;font-weight: 600;text-align: center; text-decoration: none;}
    .header .navi li.nm-mn1 a:hover {color:#4285f4}
    .header .navi li.nm-mn1 .router-link-active {color:#4285f4}

</style>