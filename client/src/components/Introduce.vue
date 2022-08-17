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
        <div class="box_wrap">
          <div class="box_group01">
            <div class="box-group01-img">
              <img alt="ready" src="../assets/ready_01.png">
            </div>
            <div class="box-group01-text">
              <div class="box-group01-text-title">
                안녕하세요!<br />
                Google Developer Students Club PNU Chapter입니다.
              </div>
              <p class="box-group01-text-mtext">
                이곳에는 Google Developer Students Club 소개 및 GDSC PNU 소개가 들어갈 예정입니다~! <br />
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
                어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구 소개어쩌구저쩌구저쩌구
              </p>  
            </div>   
          </div>
          <div class="box_group02">
            <div class="box-group02-text">
              <div class="box-group02-text-title">
                저희는 이런저런 커뮤니티입니다
              </div>
              <p class="box-group02-text-mtext">
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵
                우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵 우리 커뮤니티는 이러쿵저러쿵
              </p>  
            </div>
            <div class="box-group02-img">
              <img alt="ready" src="../assets/ready_01.png">
            </div>   
          </div> 
          <div class="box_group03">
            <div class="box-group03-img">
              <img alt="GDSC Symbol" src="../assets/gdscSymbol.png">
            </div>
            <div class="box-group03-text">
              <div class="box-group03-text-title">
                Google Developer Students Club과 Google Developer 커뮤니티에<br />
                더 궁금하신 부분이 있으시다면 아래 링크로 이동하시면 됩니다~!
              </div>
              <p class="box-group03-text-mtext">
                링크링크링크링크링크링크링크링크링크링크링크링크링크링크링크링크
                링크링크링크링크링크링크링크링크링크링크링크링크링크링크링크링크
                링크링크링크링크링크링크링크링크링크링크링크링크링크링크링크링크
              </p>  
            </div>
          </div> 
        </div>  
      </div>
  </div>   
</template>

<script>

export default {
  name: 'Introduce',
  components: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 전체화면 */
  .container_wrap {position: relative;display: block; overflow: hidden; }

  .container_wrap .deco_img01 {position:absolute; margin:0; padding:0;}
  .container_wrap .deco_img01 img {width:483px; height:499.6px;}

  .container_wrap .deco_img03 {position:absolute; margin:796px 0 0 0; padding:0; width:100%}
  .container_wrap .deco_img03 img {width:101%; height:338.3px;}

  .container_wrap .deco_img04 {position:absolute; margin:1325px 0 0 calc(100% - 482px); padding:0;}
  .container_wrap .deco_img04 img {width:495px; height:499.6px;}

  /* 배경 Line Visible 설정 */
  @media screen and (max-width: 1800px) {
    .container_wrap .deco_img01 {display: none;}
    .container_wrap .deco_img03 {display: none;}
    .container_wrap .deco_img04 {display: none;}
  }

  .contents_wrap {position: relative;display: block;width: 1400px; height: 1582px; margin:91px auto 0 auto; }
  .contents_wrap .box_wrap {height: 100%;}

  .contents_wrap .box_wrap .box_group01 {width:100%; height: 263px; display: flex; justify-content: space-between; margin-top: 228px;}
  .contents_wrap .box_wrap .box_group01 .box-group01-img {width: 555px; height: 263px;}
  .contents_wrap .box_wrap .box_group01 .box-group01-img img {width: 555px; height: 263px;}
  .contents_wrap .box_wrap .box_group01 .box-group01-text {width: 817px; height: 263px; text-align: left; margin-left:67px;}
  .contents_wrap .box_wrap .box_group01 .box-group01-text .box-group01-text-title {font-size: 25px; font-weight: bold; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left; color: #000;}
  .contents_wrap .box_wrap .box_group01 .box-group01-text .box-group01-text-mtext {font-size: 18px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left; color: #5c5c5c;}

  .contents_wrap .box_wrap .box_group02 {width:100%; height: 257px; display: flex; justify-content: space-between; margin-top: 167px;}
  .contents_wrap .box_wrap .box_group02 .box-group02-img {width: 560px; height: 257px; text-align: right;}
  .contents_wrap .box_wrap .box_group02 .box-group02-img img {width: 560px; height: 257px;}
  .contents_wrap .box_wrap .box_group02 .box-group02-text {width: 815px; height: 257px; text-align: left; margin-right: 67px;}
  .contents_wrap .box_wrap .box_group02 .box-group02-text .box-group02-text-title {font-size: 25px; font-weight: bold; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left; color: #000;}
  .contents_wrap .box_wrap .box_group02 .box-group02-text .box-group02-text-mtext {font-size: 18px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left; color: #5c5c5c;}

  .contents_wrap .box_wrap .box_group03 {width: 100%; height: 227.5px; display: flex; justify-content: space-between; margin-top: 397.3px;}
  .contents_wrap .box_wrap .box_group03 .box-group03-img {width: 405px; height: 227.5px; text-align: left;}
  .contents_wrap .box_wrap .box_group03 .box-group03-img img {width: 405px; height: 227.5px;}
  .contents_wrap .box_wrap .box_group03 .box-group03-text {width: 850px; height: 227.5px; text-align: left; }
  .contents_wrap .box_wrap .box_group03 .box-group03-text .box-group03-text-title {font-size: 25px; font-weight: bold; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left; color: #000;}
  .contents_wrap .box_wrap .box_group03 .box-group03-text .box-group03-text-mtext {font-size: 18px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left; color: #5c5c5c;}

  /* 태블릿, 패드 CSS */
  @media screen and (max-width: 1400px) { 
    .contents_wrap {max-width: 767px; height: 2182px; }
    .contents_wrap .box_wrap {height: 100%;}

    .contents_wrap .box_wrap .box_group01 {display: block; margin-top: 228px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group01 .box-group01-img {margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group01 .box-group01-text {width: 555px; text-align: left; margin-top: 40px; margin-left: auto; margin-right: auto;}
    
    .contents_wrap .box_wrap .box_group02 {display: block; margin-top: 500px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group02 .box-group02-img {width: 555px; height: 263px; text-align: right; margin-top: 155px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group02 .box-group02-img img {width: 555px; height: 263px;}
    .contents_wrap .box_wrap .box_group02 .box-group02-text {width: 555px; text-align: left; margin-right: 0px; height: 140px; margin-left: auto; margin-right: auto;}
    
    .contents_wrap .box_wrap .box_group03 {display: block; margin-top: 487.3px;}
    .contents_wrap .box_wrap .box_group03 .box-group03-img {margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group03 .box-group03-text {width: 555px; text-align: left; margin-left: auto; margin-right: auto; margin-top: 50px;}
  }

  /* 휴대폰 가로 화면 CSS */
  @media screen and (max-width: 767px) { 
    .contents_wrap {max-width: 481px; height: 1582px;}
    .contents_wrap .box_wrap {height: 100%;}

    .contents_wrap .box_wrap .box_group01 {display: block; width:100%; height: 263px; margin-top: 228px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group01 .box-group01-img {width: 320px; height: 153px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group01 .box-group01-img img {width: 320px; height: 153px;}
    .contents_wrap .box_wrap .box_group01 .box-group01-text {width: 320px; text-align: left; margin-top: 30px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group01 .box-group01-text .box-group01-text-title {font-size: 18px;}
    .contents_wrap .box_wrap .box_group01 .box-group01-text .box-group01-text-mtext {font-size: 12px;}

    .contents_wrap .box_wrap .box_group02 {display: block; width:100%; height: 257px; margin-top: 267px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group02 .box-group02-img {width: 320px; height: 153px; text-align: right; margin-top: 20px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group02 .box-group02-img img {width: 320px; height: 153px;}
    .contents_wrap .box_wrap .box_group02 .box-group02-text {width: 320px; text-align: left; margin-right: 0px; height: 200px; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group02 .box-group02-text .box-group02-text-title {font-size: 18px;}
    .contents_wrap .box_wrap .box_group02 .box-group02-text .box-group02-text-mtext {font-size: 12px;}

    .contents_wrap .box_wrap .box_group03 {width: 100%; height: 227.5px; display: block; margin-top: 257.3px;}
    .contents_wrap .box_wrap .box_group03 .box-group03-img {width: 320px; height: 173px; text-align: left; margin-left: auto; margin-right: auto;}
    .contents_wrap .box_wrap .box_group03 .box-group03-img img {width: 320px; height: 173px;}
    .contents_wrap .box_wrap .box_group03 .box-group03-text {width: 320px; text-align: left; margin-left: auto; margin-right: auto; margin-top: 40px;}
    .contents_wrap .box_wrap .box_group03 .box-group03-text .box-group03-text-title {font-size: 18px;}
    .contents_wrap .box_wrap .box_group03 .box-group03-text .box-group03-text-mtext {font-size: 12px;}
  }

  /* 휴대폰 세로 화면 CSS */
  @media screen and (max-width: 481px) { 
    .contents_wrap {position: relative;display: block;max-width: 365px; height: 1582px; margin:91px auto 0 auto; }
    .contents_wrap .box_wrap .box_group02 .box-group02-img {width: 320px; height: 153px; text-align: right; margin-top: 0px; margin-left: auto; margin-right: auto;}
  }
</style>
