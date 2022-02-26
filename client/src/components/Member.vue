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
                                <svg class="menu-icon-svg" width="21" height="13" viewBox="0 0 12 7" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stoke="#4D5159" strokewidth="1.5" strokelinecap="round" strokelinejoin="round" />
                                </svg>
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
                                        <span>3th Members</span>
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
                                    <img alt="profile photo" src="../assets/profile_photo.png" />
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
                            <!-- <div class="box-group02-card">
                                카드내용2
                            </div>  -->
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
      };
  },
  methods: {
      handleMemberNum(v) {
        switch (v) {
            case 1:
                this.cards = data1;
                return (this.memberNumber = 1);
            case 2:
                this.cards = data2;
                return (this.memberNumber = 2);
            case 3:
                this.cards = data3;
                return (this.memberNumber = 3);
            case 4:
                this.cards = data4;
                return (this.memberNumber = 4);
            case 5:
                this.cards = data5;
                return (this.memberNumber = 5);
            default:
                return 5;
        }
      },
  },  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container_wrap {position: relative;display: block; overflow: hidden;background-color: #f8f8f8;}
  .container_wrap .contents_wrap {position: relative;display: block;width: 1542px; /* height:2934px; */ background-color: #fff; margin: 93px auto 0 auto;}
  .container_wrap .contents_wrap .box_wrap {width: 1400px; /* height:2934px; */ margin: inherit; }

  /* .container_wrap .contents_wrap .box_wrap .box_group01 {display: flex; justify-content: flex-start;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select {margin-left: 114px; margin-top: 85px; width: 239px; height: 75px; border-radius: 10px; border: 1px solid #808080; background-color: #fff;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select .select { font-size: 30px; font-weight: 300; appearance: none; z-index: 3; border: none; outline: none; margin: 20px 0;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select .select option {background: #2c2c2c;color: #fff; padding: 3px 0;font-size: 30px; font-weight: 300;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select span svg {margin-left: 15px; width: 21px; height: 21px; z-index: 1;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .box-group01-select span svg:focus {transform: rotate(180deg);} */

  .container_wrap .contents_wrap .box_wrap .box_group01 {display: flex; justify-content: flex-start;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper {position: relative; display: inline-block;margin-left: 25px; margin-top: 85px; border: 1px solid #868894; border-radius: 10px; width:239px; height: 75px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox {display: none;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-label {display: inline-flex; width: 200px; height: 75px; justify-content: space-between; align-items: center; font-style: normal; font-weight: bold; font-size: 20px; letter-spacing: -0.02em; cursor: pointer;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-label .menu-icon-svg {margin-left:9px;margin-top:0px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox:checked+.fixed-label .menu-icon-svg {transform: rotate(180deg);}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-checkbox:checked~.fixed-menu-ul {display: block; opacity: 1;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul {list-style-type: none; display: none; position: absolute; width: 259px; height: 211px; margin-top:0px; padding: 0px; background: #2c2c2c; box-sizing: border-box; overflow-y: scroll;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li {height: 70px; text-align: left;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li:hover {background-color: #4c5664;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li .menu-anchor {display: inline-block; text-decoration: none; color: #fff; cursor: pointer; font-family: AppleSDGothicNeo; font-size: 20px; font-weight: 300; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: normal; padding: 20px 62.5px;}
  /* .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li .menu-anchor span {} */
  /* .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul li~li {margin-top: 20px;} */

  /* 커스텀 스크롤바 */
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul::-webkit-scrollbar {width:12px;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul::-webkit-scrollbar-track {background-color: inherit;}
  .container_wrap .contents_wrap .box_wrap .box_group01 .fixed-nth-wrapper .fixed-menu-ul::-webkit-scrollbar-thumb {background: #868686; border-radius: 5px;}

  /* 카드 디자인 */
  .container_wrap .contents_wrap .box_wrap .box_group02 {display: flex; justify-content: flex-start; height: calc(100% - 373px); margin-top:211px; }
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap {margin:0px auto; width: 100%; height: 100%; padding-bottom: 163px;} 
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap {width:100%; height:inherit; margin: 0px 104px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card {float:left; width: 526px; height: 304px; margin: 35px; box-shadow: 10px 10px 40px 0 rgba(0, 0, 0, 0.16); }
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top {margin:37px 39px 0px 56px; height: 133px; display: flex; justify-content: space-between; }
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top img {width: 123px; height: 122px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info {width:270px; height: 133px; text-align: left; }
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-text {font-family: AppleSDGothicNeo;font-size: 15px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: left;color: #0b0b0b;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-text .profile-info-text02 {margin-top: 6px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-text .profile-info-text03 {margin-top: 6px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-tag {width:100%; height:44px; margin-top: 17px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-tag .tag {display: table; height: 22px;margin-right:6px; margin-bottom:3px; padding:0px 6px; text-align: center; border-radius: 11px;background-color: #4c5664; float: left;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top .profile-info .profile-info-tag .tag span {font-family: AppleSDGothicNeo;font-size: 15px;font-weight: 300;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: left;color: #fff;}

  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom {margin:0px 39px 41px 56px; height: 54px; margin-top: 40px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom .profile-info-tag {width:100%; height:55px; margin-top: 17px;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom .profile-info-tag .tag {display: table; height: 22px;margin-right:6px; margin-bottom:10px; padding:0px 6px; text-align: center; border-radius: 11px;background-color: #6a6a6a; float: left;}
  .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-bottom .profile-info-tag .tag span {font-family: AppleSDGothicNeo;font-size: 15px;font-weight: 300;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: left;color: #fff;}

  /* 화면 너비 줄어들면 카드 일렬로 정렬 */
  @media screen and (max-width: 1000px) {
    .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap {width:100%; height:inherit; margin: 0px;}
    .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card {float: none;}
    .container_wrap .contents_wrap .box_wrap .box_group02 .box_group02_inner_wrap .box_group02_card_wrap .box-group02-card .box-group02-card-top {padding-top: 37px;}
  }
</style>
