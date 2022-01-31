<template>
  <div class="doc_wrap">
    <Header />
    <div class="container_wrap">
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
              <a href="#">
                <img alt="GDSC Symbol" src="../assets/arrow.png">
                <p>Introduce</p>
              </a>
            </div>
          </div> 
          <div class="box04">
            
          </div> 
        </div>
      </div>
    </div>
  </div>
  
    
</template>

<script>
import Header from "./header";

export default {
  name: 'Main',
  components: {
    Header
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .doc_wrap {position:relative;overflow:hidden;min-width:1400px;}

  .container_wrap {position: relative;display: block; margin-top: 93px;}
  .contents_wrap {position: relative;display: block;background: #f9f9f9;width: 1400px;margin:0 auto;}

  .box_group_01 {float:left;}
  .box01 {width:400px;height:400px;}
  .box01 div.visual img{margin:130px 0 0 50px; width:350px; height:200px;}

  .box03 {height:300px;}

  .box_group_02 {float:left;}
  .box02 {width:1000px;height:400px; box-shadow: 0 10px 10px -10px rgba(11, 11, 11, 0.16);border-bottom: 3px solid #707070;}
  .box02 div.main_text{text-align: left; font-size:40px; padding:240px 0 0 60px;}
  .box02 div.sub_text a{text-decoration: none;}
  .box02 div.sub_text p{font-size:35px;float:right;margin:10px 10px 0 0;}
  .box02 div.sub_text img{float:right; width:40px; height:40px; margin:16px 0 0 0;}
  
  .box04 {height:300px;}
</style>
