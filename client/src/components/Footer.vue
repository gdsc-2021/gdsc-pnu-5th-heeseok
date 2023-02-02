<template>   
    <div class="footer">
        <div class="footer_wrap">
            <div class="footer_inner_wrap">
                <div class="logo_wrap">
                    <router-link to='/'>
                        <img class="logo_img" alt="Vue logo" src="../assets/footer_logo.png">
                    </router-link>
                </div>
                <div class="empty_row_50"></div>
                <div class="info_wrap">
                    <div>
                        <span class="text">github : </span> <span class="link_text">https://github.com/gdsc-2021/gdsc-pnu-5th-heeseok</span>
                    </div>
                    <div>
                        <span class="text">e-mail : simongmltjr2022@gmail.com</span>
                    </div>
                    <div class="empty_col_20"></div>
                    <div>
                        <span class="fc_text">@ 2022 Copyrights reserved by GDSC PNU.</span>
                    </div>
                </div>
            </div>
            <div v-if="width > 1024" class="info_wrap">
                <div>
                    <span class="link_text"><a href="https://sites.google.com/view/gdeveloperskorea/gdsc?pli=1" target="_blank">Google Developer</a></span>
                </div>
                <div>
                    <span class="none_text">-</span>
                </div>
                <div class="empty_col_20"></div>
                <div>
                    <span class="none_text">-</span>
                </div>
            </div>
            <div v-else class="info_wrap">
                <div>
                    <span class="link_text"><a href="https://sites.google.com/view/gdeveloperskorea/gdsc?pli=1" target="_blank">Google Developer</a></span>
                </div>
            </div>
        </div> 
    </div>    
</template>

<script>
    export default {
        name: 'Footer',
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
  /* 전체화면 */
  .footer {position: relative; bottom: 0; left:0;width: 100%; display: block;background: #f4f4f4; padding: 40px 0px;}
  .footer_wrap {position:relative;display:flex; justify-content: space-between; max-width: 1024px; height: inherit; margin: 0 auto;}
  .footer_inner_wrap {display: flex; justify-content: flex-start;}

  .footer .logo_wrap {position:relative; display:block;}
  .footer .logo_wrap .logo_img {display: block; width:150px; height:150px;}

  .empty_col_20 {height: 20px;}
  .empty_row_50 {width: 50px;}
  .empty {height: 0px;}

  .info_wrap {text-align: start; display: flex; flex-direction: column; justify-content: center;}
  .info_wrap .fc_text {font-size: 13px; color: #808080;}
  .info_wrap .text {font-size: 15px; color: #808080;}
  .info_wrap .link_text {font-size: 15px; color: #808080; text-decoration: underline;}
  .info_wrap .link_text a {font-size: 15px; color: #808080; text-decoration: underline;}
  .info_wrap .none_text {color: #f4f4f4;}

  @media screen and (max-width: 1024px) {
    .footer_wrap {display: flex; flex-direction: column; align-items: center;}
    .footer_inner_wrap {display: flex; flex-direction: column; align-items: center;}
    .info_wrap {text-align: center; margin-top: 20px;}
  }
</style>