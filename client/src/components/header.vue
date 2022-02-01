<template>
    <div class="header_wrap">
        <div class="header">
            <div class="logo_wrap">
                <router-link to='/'>
                <ul class="logo">
                    <li class="logo_img">
                        <img alt="Vue logo" src="../assets/google.png">
                    </li>
                    <li class="logo_txt">
                        <div>Developer Students Club Pusan National Univ</div>
                    </li>
                </ul>
                </router-link>
            </div>
            <div class="navi-wrap">
                <ul class="navi">
                    <li class="nm-mn1">
                        <router-link to='/introduce'>
                            GDSC PNU 소개
                        </router-link>
                    </li>
                    <li class="nm-mn1">
                        <a href="#">
                            구성원 소개
                        </a>
                    </li>
                    <li class="nm-mn1">
                        <a href="#">
                            활동 내용
                        </a>
                    </li>
                    <li class="nm-mn1">
                        <a href="#">
                            참여 신청
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    .header_wrap {position: fixed; top: 0;left: 0;width: 100%;height: 93px;display: block;background: #fff; box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16); border-bottom: 1px solid #011557; z-index:500}
    .header {position:relative;display:block;width: 1400px;height: 80px;margin: 0 auto;}

    .header .logo_wrap {position:relative;top:0;left:0;display:block;width: 100%; z-index: 600;}

    .header .logo_wrap .logo {display: block;text-align: center; float: left;}
    .header .logo_wrap .logo li {position: relative;display: inline-block;vertical-align:middle;padding: 0 8px;}
    .header .logo_wrap .logo li.logo_img img {display: block;height:40px;line-height:80px;}
    .header .logo_wrap .logo li.logo_txt div {display: block;color:#808080;font-size:20px;line-height:80px;}

    .header .navi-wrap {position:absolute;top:0;left:0;display:block;width: 100%;}

    .header .navi {display: block;text-align: center; float: right;}
    .header .navi li.nm-mn1 {position: relative;display: inline-block;vertical-align:top;padding: 0 20px;}
    .header .navi li.nm-mn1 a {position: relative;display:block;color:#808080;font-size:20px;font-weight: 600;line-height:80px;height: 80px;text-align: center; text-decoration: none;}
    .header .navi li.nm-mn1 .router-link-active {color:#4285f4}

</style>