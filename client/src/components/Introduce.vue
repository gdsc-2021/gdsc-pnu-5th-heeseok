<template>
  <div class="container_wrap">
      <div class="contents_wrap">
        <div class="box_wrap">
          <div class="box_group">
            <div class="box-img-wrap">
              <img alt="banner" src="../assets/introduce_banner_01.png">
            </div>
            <div class="empty_space"></div>
            <div class="box-group-text">
              <div class="box-group-text-title">
                <p>
                  안녕하세요!<br />
                  GDSC PNU Chapter입니다.
                </p>
              </div>
              <div class="box-group-text-mtext">
                <p>
                  GDSC는 Google Developer Students Club의 약어이고 여러 대학이 참여하고 있는 활동입니다. 
                  GDSC는 다양한 Google Developer 기술 (Flutter, Tensorflow, angular, Google Cloud Platform 등) 지식을 함께 공부하고
                  사회적 문제를 해결하는데 관심이 있는 대학생 개발자들이 모여 새로운 가치를 창출하는 커뮤니티입니다. 새로운 가치를 만들고 서로의 기술 지식을 공유하며
                  함께 프로젝트를 진행하는 시간을 가질 수 있습니다. 부산대학교 GDSC에 많은 참여바랍니다!
                </p>
              </div>  
            </div>   
          </div>
          <div class="empty_section_col"></div>
          <div class="box_group reverse">
            <div class="box-group-text">
              <div class="box-group-text-title">
                <p>
                  저희는 Google 기술을 활용하는 커뮤니티입니다!
                </p>
              </div>
              <div class="box-group-text-mtext">
                <p>
                  4기까지는 IT 자격증, 앱 개발, 웹 개발 등 자유로운 주제를 선정해서 멘토가 수업을 하는 방식이었습니다.
                  5기부터는 다같이 진행했고 텍스트 분석 및 이미지 처리를 위한 딥러닝 기법을 학습했고 자체 해커톤을 진행하여 
                  Google의 다양한 기술을 활용해서 웹/엡 개발을 진행했습니다. 청년 일자리/자격증에 관련한 서비스, 농촌거주 학생들을 위한 교육 서비스, 
                  시각/청각/신체 장애인을 위한 서비스, 코로나 시대에 필요한 비대면 서비스를 주제로 각 팀이 기획, 디자인, 개발, 시연까지 완료했습니다.
                </p>
              </div>  
            </div>
            <div class="empty_space"></div>
            <div class="box-img-wrap">
              <img alt="banner" src="../assets/introduce_banner_02.jpg">
            </div>  
          </div> 
          <div class="empty_section_col"></div>
          <div class="box_group">
            <div class="box-img-wrap">
              <img alt="banner" src="../assets/introduce_banner_03.jpg">
            </div>
            <div class="empty_space"></div>
            <div class="box-group-text">
              <div >
                <p class="box-group-text-title">
                  Google Developer 행사도 있습니다!
                </p>
              </div>
              <div class="box-group-text-mtext">
                <p>
                  GDSC는 대학 간 교류를 위한 행사를 진행하고 Google의 기술을 익힐 수 있도록 다양한 교육 지원도 하고 있습니다.
                  2021년에는 devfest2021을 게더타운에서 진행하였고 대학별 준비한 강연, 행사를 많은 학생들이 즐길 수 있었습니다. 
                  역대 GDSC 선배님들께서도 참여하여 현직자의 경험을 들려주셨습니다. 
                  2022년에는 GDSC Korea 세미나에서 Google Cloud에 관한 강연을 진행하였고 GDSC Solution Challenge 행사도 있었습니다. 
                  GDSC에 참여하셔서 다양한 행사를 즐겨보시면 좋을 것 같습니다!
                </p>
              </div>  
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
  .container_wrap {position: relative;display: block; overflow: hidden; width: 100%;}

  .contents_wrap {position: relative;display: block; max-width: 1024px; margin:91px auto 0 auto; padding: 50px 0px;}
  .contents_wrap .box_wrap {max-width: 100%; text-align: start;}

  .contents_wrap .box_wrap .box_group {display: flex; justify-content: space-between; max-width: 100%;}
  .contents_wrap .box_wrap .box_group .box-img-wrap {max-width: 400px;}
  .contents_wrap .box_wrap .box_group .box-img-wrap img {max-width: 100%; border-radius: 25px;}
  .contents_wrap .box_wrap .box_group .box-group-text {display: flex; flex-direction: column; text-align: start; max-width: 100%;}
  .contents_wrap .box_wrap .box_group .box-group-text .box-group-text-title {font-size: 20px; font-weight: bold; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; color: #000;}
  .contents_wrap .box_wrap .box_group .box-group-text .box-group-text-mtext {font-size: 15px; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; color: #5c5c5c;}

  .empty_space {width: 200px; height: 50px;}
  .empty_section_col {height: 100px;}

  @media screen and (max-width: 1024px) { 
    .contents_wrap .box_wrap .box_group {flex-direction: column; max-width: 100%; align-items: center;}
    .contents_wrap .box_wrap .box_group .box-group-text {text-align: center; padding: 0px 20px;}
    .contents_wrap .box_wrap .reverse {flex-direction: column-reverse;}
    .contents_wrap .box_wrap .box_group .box-img-wrap {padding: 0px 20px;}
  }
</style>
