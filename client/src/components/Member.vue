<template>
    <div class="container_wrap">
        <div class="contents_wrap">
            <div class="box_wrap">

                <div class="box_group01">
                    <div class="box-group01-select">
                        <div class="fixed-nth-wrapper">
                            <input id="fixed-menu-checkbox" type="checkbox" class="fixed-checkbox" v-model="checked" />
                            <label for="fixed-menu-checkbox" class="fixed-label">
                                <span v-if="memberNumber === 1">{{ memberNumber }}st Members</span>
                                <span v-else-if="memberNumber === 2">{{ memberNumber }}nd Members</span>
                                <span v-else-if="memberNumber === 3">{{ memberNumber }}rd Members</span>
                                <span v-else>{{ memberNumber }}th Members</span>
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill menu-icon-svg" viewBox="0 0 16 16"> <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/> </svg>
                            </label>
                            <ul class="fixed-menu-ul">
                                <li>
                                    <a @click="handleMemberNum(1)" class="menu-anchor">
                                        <span>1st Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="handleMemberNum(2)" class="menu-anchor">
                                        <span>2nd Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="handleMemberNum(3)" class="menu-anchor">
                                        <span>3rd Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="handleMemberNum(4)" class="menu-anchor">
                                        <span>4th Members</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="handleMemberNum(5)" class="menu-anchor">
                                        <span>5th Members</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Member Card -->
                <div class="box_group02">
                    <div class="box_group02_inner_wrap">
                        <div class="box_group02_card_wrap">
                            <div class="box-group02-card" v-for="content in cards" :key="content.id">
                                <div class="box-group02-card-top">
                                    <!-- <img alt="profile photo" src="../assets/profile_photo.png" /> -->
                                    <div class="img_box">
                                        <img v-if="content.githubAvatarUrl == 'default'" class="profile_img" alt="profile photo" src="../assets/profile_photo.png" />
                                        <img v-else class="profile_img" alt="profile photo" v-bind:src="content.githubAvatarUrl" />
                                    </div>
                                    <div class="empty_col"></div>
                                    <div class="profile-info">
                                        <div class="profile-info-text">
                                            <div class="profile-info-text01">
                                                Name : {{ content.name }}
                                            </div>
                                            <div class="profile-info-text02">
                                                Address : {{ content.address }}
                                            </div>
                                            <div class="profile-info-text03">
                                                Git : {{ content.git }}
                                            </div>
                                        </div>
                                        <div class="profile-info-tag">
                                            <div class="tag" v-for="item in content.skillAndLanguage" :key="item.id">
                                                <span># {{ item.value }}</span>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div class="box-group02-card-bottom">
                                    <div class="profile-info-tag">
                                        <div class="tag" v-for="item in content.attendingSessions" :key="item.id">
                                            <span># {{ item.value }}</span>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
import { data1, data2, data3, data4, data5 } from "./data/dummy.js";

export default {
  name: 'Member',
  components: {},
  data() {
      return {
          cards: data5,
          memberNumber: 5,
          checked: false
      };
  },
  methods: {
      handleMemberNum(v) {
        switch (v) {
            case 1:
                this.cards = data1;
                this.checked = false
                return (this.memberNumber = 1);
            case 2:
                this.cards = data2;
                this.checked = false
                return (this.memberNumber = 2);
            case 3:
                this.cards = data3;
                this.checked = false
                return (this.memberNumber = 3);
            case 4:
                this.cards = data4;
                this.checked = false
                return (this.memberNumber = 4);
            case 5:
                this.cards = data5;
                this.checked = false
                return (this.memberNumber = 5);
            default:
                return 5;
        }
      }
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 전체화면 */
  .container_wrap {position: relative;display: block; overflow: hidden;background-color: #f8f8f8; width: 100%;}
  .container_wrap .contents_wrap {position: relative;display: block; max-width: 1200px; background-color: #fff; margin: 61px auto 0 auto;}
  .container_wrap .contents_wrap .box_wrap {max-width: 1024px; margin: inherit; padding: 50px 20px;}

  .container_wrap .contents_wrap .box_wrap .box_group01 {display: flex; justify-content: center;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select {width: 100%;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper {width: 100%; position: relative; display: inline-block; border: 2px solid #dcdada; border-radius: 10px; height: 50px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox {display: none;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-label {display: inline-flex; height: 100%; justify-content: space-between; align-items: center; cursor: pointer; width: 95%;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-label span {color: #0b0b0b; font-size: 20px; font-weight: 500;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: center;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-label .menu-icon-svg {margin-top:2px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox:checked+.fixed-label .menu-icon-svg {transition: all 0.5s ease; transform: rotate(180deg);}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox:checked~.fixed-menu-ul {display: block; opacity: 1;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul {list-style-type: none; display: none; position: absolute; width: 100%; height: 200px; margin-top:0px; padding: 0px; background: #2c2c2c; box-sizing: border-box; overflow-y: scroll; overflow-x: hidden; border-radius: 10px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li {height: 70px; text-align: start; width: 100%;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li:hover {background-color: #4c5664;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li .menu-anchor {width: 100%; display: inline-block; text-decoration: none; color: #fff; cursor: pointer; font-family: AppleSDGothicNeo; font-size: 18px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; padding: 20px;}

  /* 커스텀 스크롤바 */
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul::-webkit-scrollbar {width:10px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul::-webkit-scrollbar-track {background-color: inherit;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul::-webkit-scrollbar-thumb {background: #868686; border-radius: 5px;}

  /* 카드 디자인 */
  .container_wrap .contents_wrap .box_wrap .box_group02 {display: flex; justify-content: flex-start; margin-top: 50px; }
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap {margin:0px auto; width: 100%; height: 100%; } 
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap {width:100%; display: flex; justify-content: space-between; flex-wrap: wrap;}

  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card {float:left; width: 400px; box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.16); padding: 25px; border-radius: 10px; margin: 25px 0px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top {display: flex; justify-content: space-around; align-items: center;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .img_box {width: 100px; height: 100px; border-radius: 70%; overflow: hidden;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .img_box .profile_img {width: 100%; height: 100%; object-fit: cover;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info {text-align: left; }
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-text {font-size: 13px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: left;color: #0b0b0b;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-text .profile-info-text02 {margin-top: 0px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-text .profile-info-text03 {margin-top: 0px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-tag {width:100%; margin-top: 10px; display: flex; justify-content: flex-start; flex-wrap: wrap;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-tag .tag {display: table; margin-right:5px; padding:1px 5px; text-align: center; border-radius: 11px;background-color: #4c5664;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-tag .tag span {font-size: 13px;font-weight: 300;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: left;color: #fff; vertical-align: middle;}

  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom {margin-top: 10px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom .profile-info-tag {width:100%; margin-top: 15px; display: flex; justify-content: flex-start; flex-wrap: wrap; padding: 0px 10px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom .profile-info-tag .tag {display: table; ;margin-right:5px; margin-bottom: 5px; padding:1px 5px; text-align: center; border-radius: 11px;background-color: #6a6a6a; }
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom .profile-info-tag .tag span {font-size: 13px;font-weight: 300;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: left;color: #fff; vertical-align: middle;}

  /* 태블릿, 패드 CSS */
  @media screen and (max-width: 1024px) {
    .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap {justify-content: space-around;}
  }

  /* 휴대폰 SIZE */
  @media screen and (max-width: 450px) { 
      .empty_col {height: 15px;}
      .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top {flex-direction: column;}
      .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom .profile-info-tag {flex-direction: column;}
        .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom .profile-info-tag .tag {margin-right: 15px;}
  }
</style>
