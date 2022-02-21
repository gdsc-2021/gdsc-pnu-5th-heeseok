<template>
    <div class="container_wrap">
        <div class="contents_wrap">
            <div class="box_wrap">
                <div class="box_group01">
                    <div class="box-group01-select">
                        <div class="fixed-nth-wrapper">
                            <input id="fixed-menu-checkbox" type="checkbox" class="fixed-checkbox" />
                            <label for="fixed-menu-checkbox" class="fixed-label">
                                기수 선택
                                <svg class="menu-icon-svg" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stoke="#4D5159" strokewidth="1.5" strokelinecap="round" strokelinejoin="round" />
                                </svg>
                            </label>
                            <ul class="fixed-menu-ul">
                                <li>
                                    <a class="menu-anchor" href="">
                                        <span>1st Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="menu-anchor" href="">
                                        <span>2nd Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="menu-anchor" href="">
                                        <span>3th Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="menu-anchor" href="">
                                        <span>4th Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="menu-anchor" href="">
                                        <span>5th Members</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>   
</template>

<script>

export default {
  name: 'Member',
  components: {
    // Header
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container_wrap {position: relative;display: block; overflow: hidden;background-color: #f8f8f8;}
  .container_wrap .contents_wrap {position: relative;display: block;width: 1542px; height:2923px; background-color: #fff; margin: 93px auto 0 auto;}
  .container_wrap .contents_wrap .box_wrap {width: 1400px; height:2923px; margin: inherit;}

  /* .container_wrap .contents_wrap .box_wrap .box_group01 {display: flex; justify-content: flex-start;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select {margin-left: 114px; margin-top: 85px; width: 239px; height: 75px; border-radius: 10px; border: 1px solid #808080; background-color: #fff;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select .select { font-size: 30px; font-weight: 300; appearance: none; z-index: 3; border: none; outline: none; margin: 20px 0;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select .select option {background: #2c2c2c;color: #fff; padding: 3px 0;font-size: 30px; font-weight: 300;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select span svg {margin-left: 15px; width: 21px; height: 21px; z-index: 1;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select span svg:focus {transform: rotate(180deg);} */

  .container_wrap .contents_wrap .box_wrap .box_group01 {display: flex; justify-content: flex-start;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper {position: relative; display: inline-block;margin-left: 114px; margin-top: 85px; border: 1px solid #868894; border-radius: 10px; width:239px; height: 75px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox {display: none;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-label {display: inline-flex; width: 200px; height: 75px; justify-content: space-between; align-items: center; font-style: normal; font-weight: bold; font-size: 20px; letter-spacing: -0.02em; cursor: pointer;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-label .menu-icon-svg {margin-left:9px;margin-top:0px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox:checked+.fixed-label .menu-icon-svg {transform: rotate(180deg);}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox:checked~.fixed-menu-ul {display: block; opacity: 1;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul {list-style-type: none; display: none; position: absolute; width: 259px; height: 211px; margin-top:0px; padding: 20px; background: #2c2c2c; box-sizing: border-box; overflow-y: scroll;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li {margin: 0; font-style: normal; font-weight: bold; font-size: 14px; line-height: 150%; letter-spacing: -0.02em; }
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li .menu-anchor {display: block; align-items: center; text-decoration: none; color: #fff; cursor: pointer; font-family: AppleSDGothicNeo; font-size: 20px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; text-align: center;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li .menu-anchor span {margin-left: 8px; vertical-align: text-top;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li~li {margin-top: 20px;}

</style>
