<template>
    <header class="header">
        <router-link v-if="width > 1400" class="logo" to='/'>Google Developer Students Club Pusan National Univ</router-link>
        <router-link v-else to='/' class="logo">GDSC PNU</router-link>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
            <li>
                <router-link to='/Introduce'>
                    GDSC PNU 소개
                </router-link>
            </li>
            <li>
                <router-link to="/Member">
                    구성원 소개
                </router-link>
            </li>
            <li>
                <router-link to="/Activity">
                    활동 내용
                </router-link>
            </li>
            <li>
                <a href="javascript:;" v-on:click="toParticipation()">
                    참여 신청
                </a>
            </li>
        </ul>
    </header> 
</template>

<script>
    import toParticipation from "./functions/toParticipation";

    export default {
        name: 'Header',
        setup() {
            return {toParticipation}
        },
        data() {
            return { width: window.innerWidth, height: window.innerHeight };
        },
        created() {
            window.addEventListener("resize", this.onResize);
        },
        unmounted() {
            window.removeEventListener("resize", this.onResize);
        },
        methods: {
            onResize() {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
            },
        }
    }
</script>

<style scoped>
    /* 반응형 Header */
    .header {background-color: #fff;box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);position: fixed;width: 100%;z-index: 3;}

    .header ul {margin: 0;padding: 0;list-style: none;overflow: hidden;background-color: #fff;}
    .header li a {display: block;padding: 20px 20px;border-right: 1px solid #f4f4f4;color:#808080;font-size:18px;font-weight: 500;text-align: center; text-decoration: none;}
    .header li a:hover,.header .menu-btn:hover {background-color: #f4f4f4; color:#4285f4}
    .router-link-active {color:#4285f4}

    .header .logo {display: block;float: left;font-size: 20px;padding: 22px 20px 19px 20px;text-decoration: none; display: block;color:#808080;font-size:20px; line-height: 1; font-weight: bold; height: 100%;}

    .header .menu {clear: both;max-height: 0;transition: max-height .2s ease-out;}

    .header .menu-icon {cursor: pointer;display: inline-block;float: right;padding: 28px 20px;position: relative;user-select: none;}

    .header .menu-icon .navicon{background:#333;display:block;height:2px;position:relative;transition:background .2s ease-out;width:18px}
    .header .menu-icon .navicon:after,.header .menu-icon .navicon:before{background:#333;content:'';display:block;height:100%;position:absolute;transition:.2s ease-out;width:100%}

    .header .menu-icon .navicon:before{top:5px}
    .header .menu-icon .navicon:after {top: -5px;}

    .header .menu-btn {display: none;}
    .header .menu-btn:checked ~ .menu {max-height: 300px;}

    .header .menu-btn:checked ~ .menu-icon .navicon {background: transparent;}

    .header .menu-btn:checked ~ .menu-icon .navicon:before {transform: rotate(-45deg);}

    .header .menu-btn:checked ~ .menu-icon .navicon:after {transform: rotate(45deg);}

    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {top: 0;}

    /* 900px을 기점으로 Header 변화 */
    @media (min-width: 900px) {
        .header li {float: left;}
        .header li a {padding: 18px 30px;}
        .header .menu {clear: none;float: right;max-height: none;}
        .header .menu-icon {display: none;}
    }

</style>