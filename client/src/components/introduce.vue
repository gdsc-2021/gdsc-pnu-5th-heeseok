<template>
  <div class="container_wrap">
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
                이곳에는 Google Developer Students Club 소개 및 GDSC PNU 소개가 들어갈 예정입니다~!<br />
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구<br />
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구<br />
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구<br />
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구<br />
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
  .container_wrap {position: relative;display: block; margin-top: 93px; height: 1000px; padding-bottom: 250px;}
  .contents_wrap {position: relative;display: block;background: #f9f9f9;width: 1400px;margin:0 auto;}

  .box_group_01 {float:left;width:700px;}
  .box01 {height: 300px; text-align: left;}
  .box01 div.visual img{margin:50px 0 0 80px; width:60%; height:60%;}

  .box03 {height: 300px;}
  .box03 div.main_text {text-align: left; padding:50px 0 0 80px;}
  .box03 div.main_text .bold_text{color:#000; font-size: 22px; font-weight: bold; }
  .box03 div.main_text .plain_text{color:#5c5c5c; font-size: 15px; margin-top:10px;}

  .box05 {height: 400px;text-align: left;}
  .box05 div.visual img{margin:100px 0 0 80px; width:50%; height:50%;}

  .box_group_02 {float:left;width:700px;}
  .box02 {height: 300px;}
  .box02 div.main_text {text-align: left; padding:50px 50px 0 0;}
  .box02 div.main_text .bold_text{color:#000; font-size: 22px; font-weight: bold;}
  .box02 div.main_text .plain_text{color:#5c5c5c; font-size: 15px; margin-top:10px;}

  .box04 {height: 300px; text-align: right;}
  .box04 div.visual img{margin:50px 80px 0 0; width:60%; height:60%;}

  .box06 {height: 400px;}
  .box06 div.main_text {text-align: left; padding:150px 0 0 0;}
  .box06 div.main_text .bold_text{color:#000; font-size: 22px; font-weight: bold;}
  .box06 div.main_text .plain_text{color:#5c5c5c; font-size: 15px; margin-top:10px;}
</style>
