<template>
  <div class="container_wrap">
      <div class="deco_img01">
        <img alt="deco line 01" src="../assets/deco_line_01.png" />
      </div>
      <div class="deco_img03">
        <img alt="deco line 03" src="../assets/deco_line_03.png" />
      </div>
      <div class="deco_img04">
        <img alt="deco line 04" src="../assets/deco_line_04.png" />
      </div>
      <div class="contents_wrap">
        <div class="box_group_01">
          <div class="box01">
            <div class="visual">
              <img alt="ready" src="../assets/ready_01.png">
            </div> 
          </div> 
          <div class="box03">
            <div class="main_text">
              <div class="bold_text">
                저희는 이런저런 커뮤니티입니다
              </div>
              <div class="plain_text">
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵<br />
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵<br />
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵<br />
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵<br />
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵<br />
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵
              </div>
            </div>
          </div> 
          <div class="box05">
            <div class="visual">
              <img alt="GDSC Symbol" src="../assets/gdscSymbol.png">
            </div>
          </div> 
        </div>  

        <div class="box_group_02">
          <div class="box02">
            <div class="main_text">
              <div class="bold_text">
                안녕하세요!<br />
                Google Developer Students Club PNU Chapter입니다.
              </div>
              <div class="plain_text">
                이곳에는 Google Developer Students Club 소개 및 GDSC PNU 소개가 들어갈 예정입니다~!
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
              </div>
            </div>
          </div> 
          <div class="box04">
            <div class="visual">
              <img alt="ready" src="../assets/ready_01.png">
            </div>
          </div>
          <div class="box06">
            <div class="main_text">
              <div class="bold_text">
                Google Developer Students Club과 Google Developer 커뮤니티에<br />
                더 궁금하신 부분이 있으시다면 아래 링크로 이동하시면 됩니다~!
              </div>
              <div class="plain_text">
                링크링크링크링크링크링크링크링크링크링크링크링크링크링크링크링크
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>   
    <!-- <Footer /> -->
</template>

<script>
// import Footer from "./footer.vue";

export default {
  name: 'Introduce',
  components: {
    // Footer,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container_wrap {position: relative;display: block; overflow: hidden; padding-bottom: 150px;}
  .contents_wrap {position: relative;display: block;width: 1400px;margin:93px auto;}

  .container_wrap .deco_img01 {position:absolute; margin:0; padding:0;}
  .container_wrap .deco_img01 img {width:483px; height:499.6px;}

  .container_wrap .deco_img03 {position:absolute; margin:796px 0 0 0; padding:0; width:100%}
  .container_wrap .deco_img03 img {width:101%; height:338.3px;}

  .container_wrap .deco_img04 {position:absolute; margin:1325px 0 0 calc(100% - 482px); padding:0;}
  .container_wrap .deco_img04 img {width:495px; height:499.6px;}

  @media screen and (max-width: 1800px) {
    .container_wrap .deco_img01 {display: none;}
    .container_wrap .deco_img03 {display: none;}
    .container_wrap .deco_img04 {display: none;}
  }

  .box_group_01 {float:left;width:700px;}
  .box01 {height: 400px; text-align: left; margin:137px 0 0 80px;}
  .box01 div.visual img{ width:555px; height:263px;}

  .box03 {height: 300px; margin: 67px 0 0 0;}
  .box03 div.main_text {text-align: left; padding:10px 0 0 80px;}
  .box03 div.main_text .bold_text{color:#000; font-size: 22px; font-weight: bold; }
  .box03 div.main_text .plain_text{color:#5c5c5c; font-size: 15px;}

  .box05 {height: 300px;text-align: left; margin:377.3px 0 0 80px;}
  .box05 div.visual img{ width:405px; height:227.5px;}

  .box_group_02 {float:left;width:700px;}
  .box02 {height: 400px; margin:137px 0 0 0;}
  .box02 div.main_text {text-align: left; padding:5px 50px 0 0;}
  .box02 div.main_text .bold_text{color:#000; font-size: 22px; font-weight: bold;}
  .box02 div.main_text .plain_text{color:#5c5c5c; font-size: 15px; margin-top:10px;}

  .box04 {height: 300px; margin: 67px 0 0 0;}
  .box04 div.visual img{width:555px; height:263px;}

  .box06 {height: 300px; width: 850px; margin:377.3px 0 0 0;}
  .box06 div.main_text {text-align: left; padding:44.7px 0 44.7px 0;}
  .box06 div.main_text .bold_text{color:#000; font-size: 22px; font-weight: bold;}
  .box06 div.main_text .plain_text{color:#5c5c5c; font-size: 15px; margin-top:20px;}
</style>
