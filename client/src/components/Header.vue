<template>
    <header class="header">
        <div class="header_wrap">
            <router-link v-if="width > 1024" class="logo" to='/'>Google Developer Students Club</router-link>
            <router-link v-else to='/' class="logo">GDSC PNU</router-link>
            <input class="menu-btn" type="checkbox" id="menu-btn" v-model="checked" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li>
                    <router-link to='/Introduce' @click="clickListener()">
                        GDSC PNU 소개
                    </router-link>
                </li>
                <li>
                    <router-link to="/Member" @click="clickListener()">
                        구성원 소개
                    </router-link>
                </li>
                <li>
                    <router-link to="/Activity" @click="clickListener()">
                        활동 내용
                    </router-link>
                </li>
                <li>
                    <a href="javascript:;" v-on:click="toParticipation()">
                        참여 신청
                    </a>
                </li>
            </ul>
        </div>
    </header> 
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return { width: window.innerWidth, height: window.innerHeight, checked: false };
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
            clickListener() {
                if(this.checked) {
                    this.checked = false;
                }
            },
            toParticipation() {
                var response = confirm("GDSC PNU 참여 신청 구글 폼으로 이동합니다.");
                if(response) {
                    if(this.checked) {
                        this.checked = false;
                    }
                    window.open("https://forms.gle/wUjcVjQnRexZjsJD8");
                }
            }
        }
    }
</script>

<style scoped>
    /* 반응형 Header */
    .header {background-color: #fff; box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1); position: fixed; width: 100%; z-index: 3;}
    .header_wrap {max-width: 1024px; margin-left: auto; margin-right: auto;}

    .header ul {margin: 0;padding: 0;list-style: none;overflow: hidden;background-color: #fff;}
    .header li a {display: block;padding: 20px 15px;border-right: 1px solid #f4f4f4;color:#808080;font-size:16px;font-weight: 500;text-align: center; text-decoration: none;}
    .header li a:hover,.header .menu-btn:hover {background-color: #f4f4f4; color:#4285f4}
    .router-link-active {color:#4285f4}

    .header .logo {display: block;float: left;font-size: 20px;padding: 20px;text-decoration: none; display: block;color:#808080;font-size:20px; line-height: 1; font-weight: bold; height: 100%;}

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

    /* 767px을 기점으로 Header 변화 */
    @media (min-width: 767px) {
        .header li {float: left;}
        .header li a {padding: 20px 15px;}
        .header .menu {clear: none;float: right;max-height: none;}
        .header .menu-icon {display: none;}
    }

</style>