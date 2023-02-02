<template>
    <div class="container_wrap">
      <div class="contents_wrap">
        <div class="box_wrap">
          <div class="box_logo_wrap">
            <img alt="GDSC Symbol" src="../assets/gdscSymbol.png"> 
          </div>
          <div class="empty_space"></div>
          <div class="box_text_wrap">
            <div class="box-title">
              GDSC PNU
            </div>
            <div class="box-text">
              Google Developer Students Club
              Pusan National University Chapter
            </div>
            <div class="empty_space"></div>
            <div class="box-router">
              <router-link to="/Introduce">
                <button class="arrow_btn">
                  <div class="router_text">Introduce</div>
                </button>
              </router-link>
            </div>
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
  .container_wrap {position: relative; display: block; height: calc(100vh - 61px); overflow: visible;}

  .contents_wrap {position: relative;display: flex; flex-direction: column; justify-content: center; max-width: 1024px; margin:0px auto; padding: 50px 20px; vertical-align: middle; height: 100%; overflow: visible; padding: 0px 20px;}
  .contents_wrap .box_wrap {display: flex; justify-content: flex-start; padding: 80px; background-color: #FFFAE6; border-radius: 20px; box-shadow: 10px 10px 6px 0 rgba(11, 11, 11, 0.16); border: 1px solid #f0f0f0; overflow: visible;}
  .contents_wrap .box_wrap .box_logo_wrap {max-width: 250px;}
  .contents_wrap .box_wrap .box_logo_wrap img {max-width: 250px;}
  
  .contents_wrap .box_wrap .box_text_wrap {display: flex; flex-direction: column; justify-content: flex-start; text-align: center;}
  .contents_wrap .box_wrap .box_text_wrap .box-title {font-size: 75px; font-weight: 700; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal;}
  .contents_wrap .box_wrap .box_text_wrap .box-text {font-size: 14px;}

  .contents_wrap .box_wrap .box_text_wrap .box-router {display: flex; justify-content: end;}
  /* .contents_wrap .box_wrap .box_text_wrap .box-router a{color:#2e2d2d; text-decoration: none;}
  .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap .router_text{font-size:20px;text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.16); font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: left;} */
  .arrow_btn {background-color: #666666; border-radius: 12px; padding: 10px 20px; border: none;}
  .arrow_btn:hover {cursor: pointer; background-color: #808080;}
  .router_text {color: #ffffff; font-size: 16px;}
 

  .empty_space {width: 100px; height: 25px;}
  /* .contents_wrap .box_wrap .box_text_wrap .box-router .router_wrap img{ width:45px; height:36px; margin: 12px 0px 0px 10px;} */
  /* .contents_wrap .box_wrap .box_text_wrap .box-line {width:1224.5px; height: 2px; box-shadow: 20px 20px 6px 0 rgba(11, 11, 11, 0.16);background-color: #707070;}*/
  @media screen and (max-width: 1024px) { 
  .container_wrap {height: 100vh;}
  .contents_wrap .box_wrap {flex-direction: column;}
  .contents_wrap .box_wrap .box_logo_wrap {margin: 0px auto;}
  .contents_wrap .box_wrap .box_text_wrap .box-router {justify-content: center;}
  }

  /* 휴대폰 SIZE */
  @media screen and (max-width: 450px) { 
  .contents_wrap .box_wrap .box_logo_wrap img {max-width: 200px;}
  .contents_wrap .box_wrap {flex-direction: column; padding: 50px 20px;}
  .contents_wrap .box_wrap .box_text_wrap .box-title {font-size: 60px;}
  }
</style>
