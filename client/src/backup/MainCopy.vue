<template>
    <div class="container_wrap">
      <div class="deco_img01">
        <img alt="deco line 01" src="../assets/deco_line_01.png" />
      </div>
      <div class="deco_img02">
        <img alt="deco line 02" src="../assets/deco_line_02.png" />
      </div>
      <div class="contents_wrap">
        <div class="box_group_01">
          <div class="box01">
            <div class="visual">
              <img alt="GDSC Symbol" src="../assets/gdscSymbol.png">
            </div> 
          </div> 
          <div class="box03">
            
          </div> 
        </div>  
        <div class="box_group_02">
          <div class="box02">
            <div class="main_text">
              Google Developer Students Club<br />
              Pusan National University Chapter
            </div>
            <div class="sub_text">
              <router-link to="/introduce">
                <img alt="GDSC Symbol" src="../assets/arrow.png">
                <p>Introduce</p>
              </router-link>
            </div>
            <div class="bottom_line">
            </div>
          </div> 
          <div class="box04">
            
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
  .container_wrap {position: relative;display: block; overflow: hidden;}
  .contents_wrap {position: relative;display: block;width: 1400px;height: 1070px;margin:91px auto;}

  .container_wrap .deco_img01 {position:absolute; margin:0; padding:0;}
  .container_wrap .deco_img01 img {width:483px; height:499.6px;}

  .container_wrap .deco_img02 {position:absolute; margin:777.2px 0 0 calc(100% - 1131.5px); padding:0;}
  .container_wrap .deco_img02 img {width:1145px; height:292.8px;}

  @media screen and (max-width: 1800px) {
    .container_wrap .deco_img01 {display: none;}
    .container_wrap .deco_img02 {display: none;}
  }

  .box_group_01 {float:left;}
  .box01 {width:400px;height:514.5px;}
  .box01 div.visual img{margin:179.2px 0 0 50px; width:405px; height:227.5px;}

  .box03 {height:300px;}

  .box_group_02 {float:left; width:1000px;}
  .box02 {margin:0 0 0 100px; width:950px;height:514.5px;}
  .box02 div.main_text{text-align: left; font-size:40px; padding:278px 0 0 10px;}
  .box02 div.sub_text a{color:#2e2d2d; text-decoration: none;}
  .box02 div.sub_text p{font-size:35px;float:right;margin:34.4px 10px 0 0; text-shadow: 4px 4px 4px rgba(11, 11, 11, 0.16);}
  .box02 div.sub_text img{float:right; width:40px; height:40px; margin:40px 0 0 0;}
  .box02 .bottom_line {margin:107.9px auto; height: 0; width:1224.5px; box-shadow: 20px 20px 6px 0 rgba(11, 11, 11, 0.16); border-bottom: 3px solid #707070;}
  
  .box04 {height:300px;}
</style>
