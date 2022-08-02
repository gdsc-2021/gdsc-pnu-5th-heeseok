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
                <img alt="GDSC Symbol" src="../assets/arrow.png">
                <p>Introduce</p>
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
  .contents_wrap .box_wrap .box_text_wrap .box-title h1 {font-family: AppleSDGothicNeo; font-size: 40px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left;}
  .contents_wrap .box_wrap .box_text_wrap .box-router {height:calc(100% - 120px - 31.3px);}
  .contents_wrap .box_wrap .box_text_wrap .box-router a{color:#2e2d2d; text-decoration: none;}
  .contents_wrap .box_wrap .box_text_wrap .box-router p{font-size:35px;float:right;margin:34.4px 10px 0 0; text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.16); font-family: AppleSDGothicNeo; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left;}
  .contents_wrap .box_wrap .box_text_wrap .box-router img{float:right; width:45px; height:29px; margin:50px 0 0 0;}

  .contents_wrap .box_wrap .box_text_wrap .box-line {width:1224.5px; height: 2px; box-shadow: 20px 20px 6px 0 rgba(11, 11, 11, 0.16);background-color: #707070;}

  @media screen and (max-width: 1800px) {
    .container_wrap .deco_img01 {display: none;}
    .container_wrap .deco_img02 {display: none;}
  }

  @media screen and (max-width: 1400px) { 
    .contents_wrap {position: relative;display: block; max-width: 767px;height: 888.8px;margin:91px auto 0 auto;}
    .contents_wrap .box_wrap {display: block; padding-top: 181.2px; height: 335.3px;}
    .contents_wrap .box_wrap .box_logo_wrap {width: 345px; height: 207.5px; overflow: hidden; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_logo_wrap img {width: 345px; height: 207.5px;}
    
    .contents_wrap .box_wrap .box_text_wrap {margin-top:64px; width: 767px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_text_wrap .box-title {height: 120px;}
    .contents_wrap .box_wrap .box_text_wrap .box-title h1 {font-family: AppleSDGothicNeo; font-size: 30px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: center;}
    .contents_wrap .box_wrap .box_text_wrap .box-router {height:calc(100% - 120px - 31.3px);}
    .contents_wrap .box_wrap .box_text_wrap .box-router a{color:#2e2d2d; text-decoration: none;}
    .contents_wrap .box_wrap .box_text_wrap .box-router p{font-size:27px;float:right;margin:7.5px 10px 0 0; text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.16); font-family: AppleSDGothicNeo; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left;}
    .contents_wrap .box_wrap .box_text_wrap .box-router img{float:right; width:45px; height:29px; margin: 16.5px 15px 0 0;}

    .contents_wrap .box_wrap .box_text_wrap .box-line {width:100%; height: 2px; box-shadow: 20px 20px 6px 0 rgba(11, 11, 11, 0.16);background-color: #707070; margin-top: 65px;}
  }

  @media screen and (max-width: 767px) { 
    .contents_wrap {position: relative;display: block; max-width: 481px;height: 888.8px;margin:91px auto 0 auto;}
    .contents_wrap .box_wrap {display: block; padding-top: 181.2px; height: 335.3px;}
    .contents_wrap .box_wrap .box_logo_wrap {width: 245px; height: 127.5px; overflow: hidden; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_logo_wrap img {width: 245px; height: 127.5px;}
    
    .contents_wrap .box_wrap .box_text_wrap {margin-top:64px; width: 481px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_text_wrap .box-title {height: 100px;}
    .contents_wrap .box_wrap .box_text_wrap .box-title h1 {font-family: AppleSDGothicNeo; font-size: 24px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: center;}
    .contents_wrap .box_wrap .box_text_wrap .box-router {height:calc(100% - 120px - 31.3px);}
    .contents_wrap .box_wrap .box_text_wrap .box-router a{color:#2e2d2d; text-decoration: none;}
    .contents_wrap .box_wrap .box_text_wrap .box-router p{font-size:25px;float:right;margin:0px 10px 0 0; text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.16); font-family: AppleSDGothicNeo; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left;}
    .contents_wrap .box_wrap .box_text_wrap .box-router img{float:right; width:45px; height:29px; margin: 8px 15px 0 0;}

    .contents_wrap .box_wrap .box_text_wrap .box-line {width:100%; height: 2px; box-shadow: 20px 20px 6px 0 rgba(11, 11, 11, 0.16);background-color: #707070; margin-top: 55px;}
  }

  @media screen and (max-width: 481px) { 
    .contents_wrap {position: relative;display: block; max-width: 365px;height: 888.8px;margin:91px auto 0 auto;}
    .contents_wrap .box_wrap {display: block; padding-top: 181.2px; height: 335.3px;}
    .contents_wrap .box_wrap .box_logo_wrap {width: 245px; height: 127.5px; overflow: hidden; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_logo_wrap img {width: 245px; height: 127.5px;}
    
    .contents_wrap .box_wrap .box_text_wrap {margin-top:64px; width: 300px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_text_wrap .box-title {height: 100px;}
    .contents_wrap .box_wrap .box_text_wrap .box-title h1 {font-family: AppleSDGothicNeo; font-size: 20px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: center;}
    .contents_wrap .box_wrap .box_text_wrap .box-router {height:calc(100% - 120px - 31.3px);}
    .contents_wrap .box_wrap .box_text_wrap .box-router a{color:#2e2d2d; text-decoration: none;}
    .contents_wrap .box_wrap .box_text_wrap .box-router p{font-size:22px;float:right;margin:10px 10px 0 0; text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.16); font-family: AppleSDGothicNeo; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left;}
    .contents_wrap .box_wrap .box_text_wrap .box-router img{float:right; width:45px; height:29px; margin: 12px 0px 0 0;}

    .contents_wrap .box_wrap .box_text_wrap .box-line {width:100%; height: 2px; box-shadow: 20px 20px 6px 0 rgba(11, 11, 11, 0.16);background-color: #707070; margin-top: 55px;}
  }
</style>
