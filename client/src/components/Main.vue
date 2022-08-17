<template>
    <div class="container_wrap">
      <div class="deco_img01">
        <img alt="deco line 01" src="../assets/deco_line_01.png" />
      </div>
      <div class="deco_img02">
        <img alt="deco line 02" src="../assets/deco_line_02.png" />
      </div>
      
      <div class="contents_wrap">
        <div class="box_wrap">
          <div class="box_logo_wrap">
            <img alt="GDSC Symbol" src="../assets/gdscSymbol.png"> 
          </div>
          <div class="box_text_wrap">
            <div class="box-title">
              <h1>
                Google Developer Students Club<br />
                Pusan National University Chapter
              </h1>
            </div>
            <div class="box-router">
              <router-link to="/Introduce">
                <div class="router_wrap">
                  <div class="router_text">Introduce</div>
                  <img alt="GDSC Symbol" src="../assets/arrow.png">
                </div>
              </router-link>
            </div>
            <div class="box-line"></div>
          </div> 
        </div> 
      </div>
    </div>   
</template>

<script>


export default {
  name: 'Main',
  components: {
    // Header
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 전체화면 */
  .container_wrap {position: relative; display: block; overflow: hidden;}

  .container_wrap .deco_img01 {position:absolute; margin:0; padding:0;}
  .container_wrap .deco_img01 img {width:483px; height:499.6px;}

  .container_wrap .deco_img02 {position:absolute; margin:777.2px 0 0 calc(100% - 1131.5px); padding:0;}
  .container_wrap .deco_img02 img {width:1145px; height:292.8px;}

  .contents_wrap {position: relative;display: block;width: 1400px;height: 888.8px;margin:91px auto 0 auto;}
  .contents_wrap .box_wrap {display: flex; justify-content: flex-start; padding-top: 181.2px; height: 335.3px;}
  .contents_wrap .box_wrap .box_logo_wrap {width: 405px; height: 227.5px; overflow: hidden;}
  
  .contents_wrap .box_wrap .box_text_wrap {margin-top:64px; width: calc(100% - 500px); margin-left: 56.5px;}
  .contents_wrap .box_wrap .box_text_wrap .box-title {height: 120px;}
  .contents_wrap .box_wrap .box_text_wrap .box-title h1 {font-size: 40px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left;}
  .contents_wrap .box_wrap .box_text_wrap .box-router {height: 75px; display: flex; justify-content: flex-end;}
  
  .contents_wrap .box_wrap .box_text_wrap .box-router a{color:#2e2d2d; text-decoration: none;}
  .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap {display: flex; justify-content: center; align-items: center;}
  .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap .router_text{font-size:35px;text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.16); font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left;}
  .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap img{ width:45px; height:36px; margin: 15px 0px 0px 10px;}

  .contents_wrap .box_wrap .box_text_wrap .box-line {width:1224.5px; height: 2px; box-shadow: 20px 20px 6px 0 rgba(11, 11, 11, 0.16);background-color: #707070;}

  /* 배경 Line Visible 설정 */
  @media screen and (max-width: 1800px) {
    .container_wrap .deco_img01 {display: none;}
    .container_wrap .deco_img02 {display: none;}
  }

  @media screen and (max-width: 1400px) { 
    .contents_wrap {max-width: 767px;}
    .contents_wrap .box_wrap {display: block;}
    .contents_wrap .box_wrap .box_logo_wrap {width: 345px; height: 207.5px; overflow: hidden; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_logo_wrap img {width: 345px; height: 207.5px;}
    
    .contents_wrap .box_wrap .box_text_wrap {margin-top:50px; width: 607px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_text_wrap .box-title {height: 145px;}
    .contents_wrap .box_wrap .box_text_wrap .box-title h1 {font-size: 38px; text-align: center;}
    
    .contents_wrap .box_wrap .box_text_wrap .box-router {height: 25px;}
    .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap .router_text{font-size:32px;}
    .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap img{ width:45px; height:33px; margin: 15px 0px 0px 10px;}

    .contents_wrap .box_wrap .box_text_wrap .box-line {width:100%; height: 2px; box-shadow: 20px 20px 6px 0 rgba(11, 11, 11, 0.16);background-color: #707070; margin-top: 65px;}
  }

  /* 휴대폰 가로 화면 CSS */
  @media screen and (max-width: 767px) { 
    .contents_wrap {max-width: 481px;}
    .contents_wrap .box_wrap .box_logo_wrap {width: 245px; height: 127.5px;}
    .contents_wrap .box_wrap .box_logo_wrap img {width: 245px; height: 127.5px;}
    
    .contents_wrap .box_wrap .box_text_wrap {width: 401px;}
    .contents_wrap .box_wrap .box_text_wrap .box-title {height: 100px;}
    .contents_wrap .box_wrap .box_text_wrap .box-title h1 {font-size: 24px;}
    
    .contents_wrap .box_wrap .box_text_wrap .box-router {height:0px;}
    .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap .router_text{font-size:25px;}
    .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap img{height:30px; margin: 12px 0px 0px 10px;}
  }

  /* 휴대폰 세로 화면 CSS */
  @media screen and (max-width: 481px) { 
    .contents_wrap {max-width: 365px;}
    
    .contents_wrap .box_wrap .box_text_wrap {width: 300px;}
    .contents_wrap .box_wrap .box_text_wrap .box-title h1 {font-size: 20px;}

    .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap .router_text{font-size:22px;}
    .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap img{height:28px; margin: 10px 0px 0px 10px;}
  }
</style>
