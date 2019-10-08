/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/bot/404.html","d30827c9a8ace12d042be3b8f95b34ff"],["/bot/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/bot/css/AccountSignupModal.css","5cd559a6ab1ba8ccdeda5f6bb935457e"],["/bot/css/ResetPasswordModal.css","ffdda21b4ed64d6693748d7eb4c2566a"],["/bot/css/app.css","290a0fd579a01eb10bc93721a080f443"],["/bot/css/bot.css","2caaa57cd13682bebf8011069de5e699"],["/bot/css/modals.css","2cfb5f36dd9bbbdb4fd2be0a530b8150"],["/bot/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/bot/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/bot/favicon.ico","f0f5ae91043173a44666de5f8a92e863"],["/bot/index.html","3ce006b0be95ab1b4bdccfa3c7daecd3"],["/bot/js/0.f9def82272bdb4fde4da.js","1ad7cfcf9f623eb0b4f1021e4577fa58"],["/bot/js/1.f9def82272bdb4fde4da.js","4b7c3d7fa1d76850dabe642d58d123e1"],["/bot/js/10.f9def82272bdb4fde4da.js","203ee6eac939a96a6ddd8caa2dc7243e"],["/bot/js/11.f9def82272bdb4fde4da.js","74f1834ba8d6a80874909ea43ceb5fc0"],["/bot/js/12.f9def82272bdb4fde4da.js","a14fe0bf385c252100079b53b2737f3c"],["/bot/js/13.f9def82272bdb4fde4da.js","5d51090eeed6390d38b5eddf02362034"],["/bot/js/14.f9def82272bdb4fde4da.js","016c32854ce499b86786bd26ec331aeb"],["/bot/js/15.f9def82272bdb4fde4da.js","520f6a47dd91294546d8986ca387d24e"],["/bot/js/16.f9def82272bdb4fde4da.js","307735a2d6b364039f690e4abe668828"],["/bot/js/17.f9def82272bdb4fde4da.js","0a7345385f4a0b44592ead1953975943"],["/bot/js/18.f9def82272bdb4fde4da.js","335f979ad678267721e784424bec5b23"],["/bot/js/19.f9def82272bdb4fde4da.js","1ed394ef332521a66ca463b8bca50a49"],["/bot/js/2.f9def82272bdb4fde4da.js","afbfe804411d7a29831e6719857e9700"],["/bot/js/20.f9def82272bdb4fde4da.js","6409bee529af42a2977c79a330d97549"],["/bot/js/21.f9def82272bdb4fde4da.js","b242553dea29c2e2680050e8e928997c"],["/bot/js/22.f9def82272bdb4fde4da.js","2e9ab045157cc7a7f6d6ec563cc23303"],["/bot/js/23.f9def82272bdb4fde4da.js","ca2f0e918cae87232e4ede8fb1498984"],["/bot/js/24.f9def82272bdb4fde4da.js","12d0cfafd0a6be7714ccafcdecc4782b"],["/bot/js/25.f9def82272bdb4fde4da.js","596247685fa6700ecf74f72dea0ae812"],["/bot/js/26.f9def82272bdb4fde4da.js","0cd538655d8c58b1d5b050afbbae98ca"],["/bot/js/27.f9def82272bdb4fde4da.js","8e3fee641eea7a28b9aa63d32573bb10"],["/bot/js/28.f9def82272bdb4fde4da.js","189420e4935481b5f98656055ed53ff9"],["/bot/js/29.f9def82272bdb4fde4da.js","de59577a88d25dbc4f33f8de735050d2"],["/bot/js/3.f9def82272bdb4fde4da.js","12b29325988d7e101a5796fac481221f"],["/bot/js/30.f9def82272bdb4fde4da.js","934c676a10eaa60e944616b4de53366f"],["/bot/js/31.f9def82272bdb4fde4da.js","725ded42272db014ad31657e415c1e87"],["/bot/js/32.f9def82272bdb4fde4da.js","e58bf4bd0cf9bb0ea1644efe3f04806c"],["/bot/js/33.f9def82272bdb4fde4da.js","f9dedeeab2bf44aa32eb05f093ca3a2f"],["/bot/js/34.f9def82272bdb4fde4da.js","c7e7a9cfc91eee941e998a3dda84300d"],["/bot/js/35.f9def82272bdb4fde4da.js","e743eba013a6c7901261cabfa24dbf3e"],["/bot/js/36.f9def82272bdb4fde4da.js","3625a8eb6f79ab24f6740a78047137c0"],["/bot/js/37.f9def82272bdb4fde4da.js","f2e82a36db054de39532c41f17f8f87b"],["/bot/js/38.f9def82272bdb4fde4da.js","a58361056118a3065898b8dbc52e38b4"],["/bot/js/39.f9def82272bdb4fde4da.js","073c9554498689b8f5781ef2ea1c5dc0"],["/bot/js/4.f9def82272bdb4fde4da.js","788727ca6e2ddf7f9595664057354eb6"],["/bot/js/40.f9def82272bdb4fde4da.js","6cd6180a48493dbbfe65262f6afcca74"],["/bot/js/404.f9def82272bdb4fde4da.js","a8c35fdf3bc0951ac8bfb3a6ab1ccbdb"],["/bot/js/41.f9def82272bdb4fde4da.js","9d4250d874869cf379d30fbf93e41441"],["/bot/js/42.f9def82272bdb4fde4da.js","0626240800adeab032aae6a5ba2fbf42"],["/bot/js/43.f9def82272bdb4fde4da.js","91524e640ced71c53f727dc311941bba"],["/bot/js/44.f9def82272bdb4fde4da.js","925b141cddfbc0d96f9a96e78ec00d17"],["/bot/js/45.f9def82272bdb4fde4da.js","1c38e04ad1440e92fb8022e36105e998"],["/bot/js/46.f9def82272bdb4fde4da.js","d78710f827a67dc374b6b02e4971adde"],["/bot/js/47.f9def82272bdb4fde4da.js","337cff0e683c0f129570c2ceb4dc98f4"],["/bot/js/48.f9def82272bdb4fde4da.js","c364e7e8925f9d5edd31b8c81f91cf87"],["/bot/js/49.f9def82272bdb4fde4da.js","a6a50feb20093474f22af1d6a9d98acd"],["/bot/js/5.f9def82272bdb4fde4da.js","e6366e04ec629722339957ddc863fdd9"],["/bot/js/50.f9def82272bdb4fde4da.js","ce0282b30ea3d3dba37826a0beb98d94"],["/bot/js/51.f9def82272bdb4fde4da.js","b9e9a47169b2ec7fd57ded0bd90366f2"],["/bot/js/52.f9def82272bdb4fde4da.js","92ab5ede6b0f9f73b3850d9518217643"],["/bot/js/53.f9def82272bdb4fde4da.js","ffa3b905be41f6487b9c7a640a29b40e"],["/bot/js/54.f9def82272bdb4fde4da.js","6a51f1192cdd94e7ed913d98b79f26e5"],["/bot/js/55.f9def82272bdb4fde4da.js","02f310b82f1ee8a99d149f1e1bafbf1e"],["/bot/js/56.f9def82272bdb4fde4da.js","a0b9bdf97306b5583adb3c95137b7c05"],["/bot/js/57.f9def82272bdb4fde4da.js","c5b0749efe1305c881599fd58c1e963f"],["/bot/js/58.f9def82272bdb4fde4da.js","fb71a2ffe91a3d03d4bc4198f96489e5"],["/bot/js/59.f9def82272bdb4fde4da.js","5fdfedfa113b841c3a897dd8c90dd1eb"],["/bot/js/6.f9def82272bdb4fde4da.js","d62d6542ef3a25864638d36951671403"],["/bot/js/60.f9def82272bdb4fde4da.js","18880d3c16a70833efc190a436855538"],["/bot/js/61.f9def82272bdb4fde4da.js","828617f8fdcf6df4bcf63cadc50e2f9d"],["/bot/js/62.f9def82272bdb4fde4da.js","9a1032afb6ed722eb3f8ff496f9a2499"],["/bot/js/63.f9def82272bdb4fde4da.js","7759338c0d58f911b8b2ae3c09400111"],["/bot/js/64.f9def82272bdb4fde4da.js","b0ad3aaf497a35fafdee91219c5aa4f0"],["/bot/js/65.f9def82272bdb4fde4da.js","c61c1b48bb83157bfd16e45deac9e2d1"],["/bot/js/66.f9def82272bdb4fde4da.js","ae28a02834cfa329cbfaf36fc917c2f3"],["/bot/js/67.f9def82272bdb4fde4da.js","e560ffc698955bb90e83b4e3e08b6aa8"],["/bot/js/68.f9def82272bdb4fde4da.js","e2340ae101a9018557d5867fa6024718"],["/bot/js/69.f9def82272bdb4fde4da.js","0c0c569b00d2d14e8db05378027ee7f3"],["/bot/js/7.f9def82272bdb4fde4da.js","5f3756c23862d83f46bf01cf9521c2b5"],["/bot/js/70.f9def82272bdb4fde4da.js","c678159a19f5678dad5d771eb4757204"],["/bot/js/71.f9def82272bdb4fde4da.js","9fb914a4bddf49627e6bfcd967e3e68e"],["/bot/js/72.f9def82272bdb4fde4da.js","0c4319094888d1909949092909cf9c39"],["/bot/js/73.f9def82272bdb4fde4da.js","4d1e1240306c7870f9587f0ed43d7933"],["/bot/js/74.f9def82272bdb4fde4da.js","eef2531cf5190020e15393622f33a55e"],["/bot/js/75.f9def82272bdb4fde4da.js","514650db9b15b3cb1b9f6023b8b45404"],["/bot/js/76.f9def82272bdb4fde4da.js","6570cd4f788276888884710c2e298924"],["/bot/js/77.f9def82272bdb4fde4da.js","488ae1edfa055f084af0e790ae2862ee"],["/bot/js/78.f9def82272bdb4fde4da.js","0a550732105789c95dd3c69b619e1b16"],["/bot/js/79.f9def82272bdb4fde4da.js","2d81f3d41d2cbb1e47c6239a60f4c69d"],["/bot/js/8.f9def82272bdb4fde4da.js","2337c9fd19678f7ee97bcd3a7dd1096a"],["/bot/js/80.f9def82272bdb4fde4da.js","084eafb4a4982c8d3ceb4416674808c9"],["/bot/js/81.f9def82272bdb4fde4da.js","c8155282d85029457298f42568de1181"],["/bot/js/82.f9def82272bdb4fde4da.js","432938a2c287fb5dc492ce67e08e707e"],["/bot/js/83.f9def82272bdb4fde4da.js","1eec17916b1e2ed13401c5049c973082"],["/bot/js/84.f9def82272bdb4fde4da.js","22d42f7a07a3e47c820e87aba2e30454"],["/bot/js/85.f9def82272bdb4fde4da.js","01298e8ac20a2ad6a654c4755335e8f1"],["/bot/js/86.f9def82272bdb4fde4da.js","760af12aaf0503d31223e18d76a6a5fa"],["/bot/js/87.f9def82272bdb4fde4da.js","868e8aef72edd356c55e1f6e9dc3c740"],["/bot/js/88.f9def82272bdb4fde4da.js","2a2aa95a7c138d9a561ba6dab63a9a12"],["/bot/js/89.f9def82272bdb4fde4da.js","716de44be269eeabeff72cd7423dc142"],["/bot/js/9.f9def82272bdb4fde4da.js","3316fd1c1a8fd17b8190dec4dc829592"],["/bot/js/90.f9def82272bdb4fde4da.js","5fee7c1e37302970b78f93d3befc9c93"],["/bot/js/91.f9def82272bdb4fde4da.js","a7bf86b9b42abde33e49b3e8df9ea0e3"],["/bot/js/92.f9def82272bdb4fde4da.js","217175de277b19d8d0c853e82cbde7db"],["/bot/js/93.f9def82272bdb4fde4da.js","63a1b5889cc33735f99998ddba94d0d8"],["/bot/js/94.f9def82272bdb4fde4da.js","2e0af0d4149a768855e1bb2bdd5361f8"],["/bot/js/95.f9def82272bdb4fde4da.js","b15309534c0249d2882d7e937488b7f3"],["/bot/js/96.f9def82272bdb4fde4da.js","e6c8f06c1453f75dd693efc49096c6ca"],["/bot/js/AccountSignupModal.f9def82272bdb4fde4da.js","46c3e8de4a594a912e490b58afaaef24"],["/bot/js/ResetPasswordModal.f9def82272bdb4fde4da.js","c8fd593d9bcfa9b3a959bbc9701a74c3"],["/bot/js/account-info.f9def82272bdb4fde4da.js","206d525661693c5eb81c78eb8270cbf3"],["/bot/js/bot/1-a6403d.bot.js","64b412169591e0c4b9b4ab71e618b49a"],["/bot/js/bot/10-0f378f.bot.js","7c472c7486e48061f604665765addb2b"],["/bot/js/bot/11-47e682.bot.js","82349955dceddce5bb2833ac3b35e9f2"],["/bot/js/bot/12-136c46.bot.js","bce0787023ac9935a15a5d82b78da87e"],["/bot/js/bot/13-972435.bot.js","97c4594f20c2c375c7ca7febb9c10a4e"],["/bot/js/bot/14-6ba47f.bot.js","e1b207d3504859530c67b35fdfc41670"],["/bot/js/bot/15-ef2efc.bot.js","c6b46462dca9ec710d48272c5cde014d"],["/bot/js/bot/16-5cc379.bot.js","e714351db0674444cb0328a9d1d17a82"],["/bot/js/bot/17-42ec7b.bot.js","c3cc93841a740b1f968c56d53b54de7e"],["/bot/js/bot/18-d3f827.bot.js","e31b0ec6f520579df3b2aa9564c6e73e"],["/bot/js/bot/19-603d19.bot.js","8c1643abe07dd41e79c23d0ad4c15303"],["/bot/js/bot/2-d40b3b.bot.js","37d2f58638667a4e3e4503ccdf3ae4bd"],["/bot/js/bot/20-81567f.bot.js","4731a270424902303d26a5ef0e5f2a3f"],["/bot/js/bot/21-a1feaa.bot.js","afc6c6180eb42eef80ca723296160766"],["/bot/js/bot/22-5197be.bot.js","6b7ea34b653e47275c8e41f1920d9344"],["/bot/js/bot/23-0fc5c2.bot.js","22559017901d6a415b0d1ab36a572ab7"],["/bot/js/bot/24-88ebc2.bot.js","40914ba5871f57adb744d087ef5e77c0"],["/bot/js/bot/25-8ec36c.bot.js","b5d97965a08c14d3cbbb8d173865028a"],["/bot/js/bot/26-fcecfa.bot.js","f936567bc599fcd10e3da7272414f810"],["/bot/js/bot/27-35c2e4.bot.js","4def2847832d063fc416f05c02dcf43a"],["/bot/js/bot/28-228607.bot.js","c12e38ba65dc4b4a43c3bafe2b2627f0"],["/bot/js/bot/29-903a69.bot.js","7b7f366c437b900ff705c3371582cae7"],["/bot/js/bot/3-833942.bot.js","3b8509edc5105955976edc5293d27b75"],["/bot/js/bot/30-3398ae.bot.js","bdc7cd5517a76e1d0ceb56fc289ab552"],["/bot/js/bot/31-f349c5.bot.js","3c45e4ba924ec8e511b3453c9169ae55"],["/bot/js/bot/32-8b3687.bot.js","febe7898e7342d68f84d21e7d055efd1"],["/bot/js/bot/33-6640e8.bot.js","9d8204e856193c735453ff6054a8f563"],["/bot/js/bot/34-8e18d3.bot.js","ce8fe097dcef28bbfcdd210e8746e8da"],["/bot/js/bot/35-3860c3.bot.js","7d15f4785ccd22a970ecff7514237714"],["/bot/js/bot/36-1428d4.bot.js","75467ae771d6868fc28b646cd48f0efd"],["/bot/js/bot/37-6dd378.bot.js","9e15e4dd4683eb58a0ea7a16c90772e6"],["/bot/js/bot/38-5bcb68.bot.js","8739128b8b30c53ce186110d5a60abe5"],["/bot/js/bot/39-d9493f.bot.js","72da585ae9866daab0a6d224b3ec15d6"],["/bot/js/bot/4-478f5b.bot.js","0a31976e7117ac6532f8cd3a1a1fb80e"],["/bot/js/bot/5-065f52.bot.js","dbc3aa6ff61414351ce0a846f2cbedc8"],["/bot/js/bot/6-ca661d.bot.js","2031c6452c02b1b158c618527aeafa43"],["/bot/js/bot/7-978652.bot.js","447fb14e68067ad5dfd34aa77429739d"],["/bot/js/bot/8-39edbe.bot.js","1c52d49ed922c692768820f934e0c3c2"],["/bot/js/bot/9-35124d.bot.js","bca05f5252d97a61560f49dae919072e"],["/bot/js/bot/bot-sprite.svg","9f50fd229ecd8ecc2819b16a387d6bd4"],["/bot/js/bot/bot.css","2caaa57cd13682bebf8011069de5e699"],["/bot/js/bot/media/1x1.gif","4b252c2abb0553eeb61ed061862f7540"],["/bot/js/bot/media/arrow.svg","e349301923b796d8dd6b56b6203c5188"],["/bot/js/bot/media/arrow_button.svg","af12c5eec2bd1f1e25d072869364cced"],["/bot/js/bot/media/break_out.png","389292b608291d05870de4e1ac97372b"],["/bot/js/bot/media/candle_list.png","f43494bc7e430218d2a14c7e6501e0bf"],["/bot/js/bot/media/candle_list_1.png","024749ea807d25be83ad510e90f6dd97"],["/bot/js/bot/media/check_result.png","23806d8bb4f54193205537b19e32de68"],["/bot/js/bot/media/click.mp3","f71910b391538a67231e088bba0d47eb"],["/bot/js/bot/media/click.ogg","abef65ecb98a4828172f263fd5ff7064"],["/bot/js/bot/media/click.wav","39c900d2154fec42201e998bcf305a4f"],["/bot/js/bot/media/comment-arrow-down.svg","5574bacda3e4e4ff0d6e8e954102b253"],["/bot/js/bot/media/comment-arrow-up.svg","003e1e1c67962afe7ecb9430b959deaf"],["/bot/js/bot/media/compare_logic.png","fe2dcee8f26f119960429de18c00c97b"],["/bot/js/bot/media/constrain.png","1ae50a795be1452098d6da18970363df"],["/bot/js/bot/media/continue.png","69b7ac5d0c65e9440292358e28b4c12c"],["/bot/js/bot/media/control_forever.svg","11e7bf044cf13076eb1f9f63309017cc"],["/bot/js/bot/media/control_repeat.svg","35db6c180f639644f5bbd79d658eaf64"],["/bot/js/bot/media/control_stop.svg","0a513fecbaa8fb54d5d105d529f158c6"],["/bot/js/bot/media/control_wait.svg","55c2a2baaf2a4508b7d883a71e6606fe"],["/bot/js/bot/media/controls_for.png","12fc68f3dad2deffcb156364f92c7e69"],["/bot/js/bot/media/controls_forEach.png","58733f070a0788209eee78bedcfb9ded"],["/bot/js/bot/media/controls_if.png","bec72ea49d083e68cee719ea0f647923"],["/bot/js/bot/media/delete-x.svg","8d3241cf86fcac1cd1656fec47d9a0b6"],["/bot/js/bot/media/delete.mp3","611d9f6a9392bb80d2000e143aa64323"],["/bot/js/bot/media/delete.ogg","404bc7b7f1119d2eae0532a228814cf3"],["/bot/js/bot/media/delete.wav","f079a6272c75b7ddce61f72a98a07731"],["/bot/js/bot/media/dropdown-arrow-dark.svg","000650484bd9fc536153dc5d7d064996"],["/bot/js/bot/media/dropdown-arrow.svg","be850da552699b8705b5902cb59c6d37"],["/bot/js/bot/media/epoch.png","5aad262f4afe0fc29f3feb3d62ea962a"],["/bot/js/bot/media/event_broadcast_blue.svg","66d4fdeb552c48adb936dd134f9a7cc3"],["/bot/js/bot/media/event_broadcast_coral.svg","1c866d5fc9b809e085f815d4cc528c3d"],["/bot/js/bot/media/event_broadcast_green.svg","07fc1baf5962aa6035c259dedfbdf10b"],["/bot/js/bot/media/event_broadcast_magenta.svg","4288ba3e3534c6c3bf065f888c74276a"],["/bot/js/bot/media/event_broadcast_orange.svg","fe7e38133cf1be78f504777da6864807"],["/bot/js/bot/media/event_broadcast_purple.svg","97e3a8d9596074ccb0f02f888e290920"],["/bot/js/bot/media/event_when-broadcast-received_blue.svg","a1c3ec8129337cdc6a0e00d51ba75b75"],["/bot/js/bot/media/event_when-broadcast-received_coral.svg","5cddf42acdb787c2cf03bdd5c3507e16"],["/bot/js/bot/media/event_when-broadcast-received_green.svg","7fdc28bcbc5bae41c0e55e8c1009bf6a"],["/bot/js/bot/media/event_when-broadcast-received_magenta.svg","1ada6afd03b601a82d0f7650f72b39b3"],["/bot/js/bot/media/event_when-broadcast-received_orange.svg","fcd47384fbb6dc6e136a6961b042bb0e"],["/bot/js/bot/media/event_when-broadcast-received_purple.svg","0da127529cc813e1f615b87cdcf87d28"],["/bot/js/bot/media/event_whenflagclicked.svg","b93d2d06ce25b6a10a8af6caac0890f3"],["/bot/js/bot/media/eyedropper.svg","ad88aac393c2d7d9e88f7229ac5bcdde"],["/bot/js/bot/media/get_candle.png","b0ade6ef41382e091226788a8896bed2"],["/bot/js/bot/media/green-flag.svg","6a025d288965050155abca89738f6b10"],["/bot/js/bot/media/handclosed.cur","6b45ea439228cba3afaa23022f1246a2"],["/bot/js/bot/media/handdelete.cur","b0b4b0b44ed0136f7899c8b2957ca68f"],["/bot/js/bot/media/handopen.cur","505cbb975d6102c374ec64aa92397051"],["/bot/js/bot/media/if-return.png","bb611be28a973077bb6f6b11b4caeded"],["/bot/js/bot/media/in_candle_list_read.png","bf78c9849331b6577136e4a61979fb95"],["/bot/js/bot/media/is_candle_black.jpeg","51be3a2c0fbef85906ae894c5f9675f7"],["/bot/js/bot/media/is_candle_black_1.jpeg","d72d98eff294937daeec896afd174776"],["/bot/js/bot/media/logic.png","ce964ddad66e93551850d06021bb04f4"],["/bot/js/bot/media/microbit-block-icon.svg","762e3f99bc602ad35add07a3d34cc177"],["/bot/js/bot/media/music-block-icon.svg","9d9e41ee9e7df510bcbb5c65cc927526"],["/bot/js/bot/media/notify_telegram.png","e6707af81bf665fed6e4e72007090771"],["/bot/js/bot/media/pen-block-icon.svg","2d0b6dcc703fcf4cdfd2c9c19c407f9f"],["/bot/js/bot/media/read_candle_value.png","357ae750a0dae068a18949de40a37354"],["/bot/js/bot/media/remove.svg","c9b4db61d6901dc5326d8af8f00eb770"],["/bot/js/bot/media/repeat.svg","faeda723162340d506d259eab15a57fc"],["/bot/js/bot/media/repeat_until.png","257c8e4cdb56c67430fc05107ded3bd1"],["/bot/js/bot/media/repeat_while.png","f950108af6350a3ed0c5d01f7ff75bd0"],["/bot/js/bot/media/rotate-left.svg","09b2fa9a323038e25e0d71f2e204c714"],["/bot/js/bot/media/rotate-right.svg","68c6346a929214004666a69407245ce4"],["/bot/js/bot/media/sell_available.png","0f0b9892163c95fa32bdccb29a0c880e"],["/bot/js/bot/media/sell_pl.png","8d9e6b733be449ca305fe295d7b783fc"],["/bot/js/bot/media/set-led_blue.svg","64e271cacd79c04f51e4140976ed69aa"],["/bot/js/bot/media/set-led_coral.svg","0f819c06f38eec93562e8a7e0390aa8d"],["/bot/js/bot/media/set-led_green.svg","95d552a2bf92aaf29ea7b7850efc1e78"],["/bot/js/bot/media/set-led_magenta.svg","bab1714e185b0cce2134c239d7f9dad4"],["/bot/js/bot/media/set-led_mystery.svg","7f11f033db1a2764ba822a9492113802"],["/bot/js/bot/media/set-led_orange.svg","8b9ac813216487a8c0ab20120d55e22c"],["/bot/js/bot/media/set-led_purple.svg","208edc4045ede72b45a4242e9237dde4"],["/bot/js/bot/media/set-led_white.svg","a8a2fcc4c60a3c2c4a093081568c2456"],["/bot/js/bot/media/set-led_yellow.svg","59a03bf890f2c2223b47faa092451e3c"],["/bot/js/bot/media/sma_array.png","5d47121a70ca20944ed2fc018987339f"],["/bot/js/bot/media/sma_array_explanation.jpeg","79c52881f915825a5e9ed0e54b56fdc1"],["/bot/js/bot/media/sma_block.jpeg","809aad7cf886d7e41edc3d9eff605dc2"],["/bot/js/bot/media/sma_block_example.png","6dfece091e3ce56929df1f3c4bd7f1c0"],["/bot/js/bot/media/sma_block_example_1.png","bda6a7ef636af1eee27d6c899851cd93"],["/bot/js/bot/media/sma_chart_1.png","3a31f9b46813ac814bc3fb312e7361ad"],["/bot/js/bot/media/sma_chart_2.png","7a7e8de40b21134a0be32ca8687ef689"],["/bot/js/bot/media/sma_formula.png","15c459793534844fda8711db850b728d"],["/bot/js/bot/media/sprites.png","525a87801f9b33ec2cf606683aefed54"],["/bot/js/bot/media/sprites.svg","911d25e52cb1d95f2d942ec5b7670d06"],["/bot/js/bot/media/status-not-ready.svg","f78900031c49204a86c16c7bf733b88f"],["/bot/js/bot/media/status-ready.svg","48ce534fd447c2be7e4e914640a29f01"],["/bot/js/bot/media/todatetime.png","dcc439ff765277b4c3675582f8e50faa"],["/bot/js/bot/media/totimestamp.png","a0e16856157f4f6a07e73ada8ca0f16b"],["/bot/js/bot/media/trade_again.png","27a3794f1db90dad12246ceda6cc2696"],["/bot/js/bot/media/wedo2-block-icon.svg","1a0ef9e4545e669d48764fc8af37adf9"],["/bot/js/bot/media/wedo_motor-clockwise.svg","4829ed554af2e113d3893e7ddfcacdec"],["/bot/js/bot/media/wedo_motor-counterclockwise.svg","ff174bda55c2cbd90fa98409845454eb"],["/bot/js/bot/media/wedo_motor-speed_fast.svg","c6ccc23958f6f1f63bf3da24397ce6d0"],["/bot/js/bot/media/wedo_motor-speed_med.svg","043ca7700cb3d77feb7c961e20902445"],["/bot/js/bot/media/wedo_motor-speed_slow.svg","5d36448f0913922583b23bbda55723f6"],["/bot/js/bot/media/wedo_when-distance_close.svg","a0a0a92846810f59ef052cea7335a80e"],["/bot/js/bot/media/wedo_when-tilt-backward.svg","9fbb87c4587ecaf99818cf2e32aa121c"],["/bot/js/bot/media/wedo_when-tilt-forward.svg","50ad4484043907a264ddd3d8959845c4"],["/bot/js/bot/media/wedo_when-tilt-left.svg","e37ddacb2f596649efccf371b6ea14af"],["/bot/js/bot/media/wedo_when-tilt-right.svg","1a3d9d81b6d8844a8a1442c4d2601861"],["/bot/js/bot/media/wedo_when-tilt.svg","eda90cb35927caf62a93effa8139cf1b"],["/bot/js/bot/media/zoom-in.svg","db8254dc60f8e2b5190a2f19440ddf74"],["/bot/js/bot/media/zoom-out.svg","6dcc03cf4f57ffe8e5738cc0fc0ca731"],["/bot/js/bot/media/zoom-reset.svg","c70243f271cbeec1c06acbff9d525dd5"],["/bot/js/bot/scratch.min.js","0e908ed1f31bda40d5d085cca8bc37d8"],["/bot/js/bot/xml/main.xml","10c873091b3f704f87bf9b7d9987062f"],["/bot/js/bot/xml/toolbox.xml","d6f55e4d0ac4c5d8d14859da71b5904d"],["/bot/js/main.f9def82272bdb4fde4da.js","bb207eea0feb18fb838b9639115ac1de"],["/bot/js/modals.f9def82272bdb4fde4da.js","98414ee1373f753fb7cac9eed5ad3888"],["/bot/js/push-notification.f9def82272bdb4fde4da.js","110a297363982dc7466458c0961aedbb"],["/bot/js/settings-language.f9def82272bdb4fde4da.js","1be856a1cae1eec6927c5e6b5acb5898"],["/bot/js/settings-theme.f9def82272bdb4fde4da.js","1c24ce9cfd25c82f7f302d1726b94d27"],["/bot/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/bot/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/bot/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/bot/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/bot/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/bot/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/bot/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/bot/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/bot/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/bot/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/bot/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/bot/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/bot/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/bot/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/bot/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/bot/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/bot/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/bot/js/toggle-menu-drawer.f9def82272bdb4fde4da.js","1d28a3dbfb1b1beddd8c39a670a7f63a"],["/bot/js/vendors~ResetPasswordModal.f9def82272bdb4fde4da.js","6c25fa616f222d629862935a2e1c3a64"],["/bot/js/vendors~bot.f9def82272bdb4fde4da.js","a173c7c8da6de312f590d311b26a97c4"],["/bot/js/vendors~main.f9def82272bdb4fde4da.js","dca7d42aac223599af306c92050bb1b1"],["/bot/js/work-in-progress.f9def82272bdb4fde4da.js","23701c7dbb75d51e238c659a3f77654e"],["/bot/manifest.json","bfc637cd46688e2969ec57f4d7c99d2e"],["/bot/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/bot/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/bot/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/bot/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/bot/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/bot/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/bot/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/bot/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/bot/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/bot/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/bot/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/bot/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/bot/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/bot/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/bot/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/bot/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/bot/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/bot/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/bot/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/bot/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/bot/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/bot/public/images/favicons/favicon.ico","f0f5ae91043173a44666de5f8a92e863"],["/bot/robots.txt","6978a616c585d03cb5b542a891995efb"],["/bot/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/bot/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







