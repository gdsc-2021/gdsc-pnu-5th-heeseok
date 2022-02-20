<template>
    <div class="container_wrap">
        <div class="contents_wrap">
            <div class="box_wrap">
                <div class="box-top">
                    <div class="box-top-select">
                        <select name="n-th" class="select">
                            <option value="5th_Members">5th Members</option>
                            <option value="4th_Members">4th Members</option>
                            <option value="3th_Members">3th Members</option>
                            <option value="2th_Members">2th Members</option>
                            <option value="1th_Members">1th Members</option>
                        </select>  
                        <span>
                            <svg class="menu-icon-svg" width="12" height="7" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stoke="#4D5159" strokewidth="1.5" strokelinecap="round" strokelinejoin="round" />
                            </svg>
                        </span>  
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

  .container_wrap .contents_wrap .box_wrap .box-top {display: flex; justify-content: flex-start;}
  .container_wrap .contents_wrap .box_wrap .box-top .box-top-select {margin-left: 114px; margin-top: 85px; width: 239px; height: 75px; border-radius: 10px; border: 1px solid #808080; background-color: #fff;}
  .container_wrap .contents_wrap .box_wrap .box-top .box-top-select .select { font-size: 30px; font-weight: 300; appearance: none; z-index: 3; border: none; outline: none; margin: 20px 0;}
  .container_wrap .contents_wrap .box_wrap .box-top .box-top-select .select option {background: #2c2c2c;color: #fff; padding: 3px 0;font-size: 30px; font-weight: 300;}
  .container_wrap .contents_wrap .box_wrap .box-top .box-top-select span svg {margin-left: 15px; width: 21px; height: 21px; z-index: 1;}
</style>
