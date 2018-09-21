/*
Navicat MySQL Data Transfer

Source Server         : js1804
Source Server Version : 50722
Source Host           : localhost:3306
Source Database       : dangdang

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2018-09-11 20:25:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `bannerb1`
-- ----------------------------
DROP TABLE IF EXISTS `bannerb1`;
CREATE TABLE `bannerb1` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bannerb1
-- ----------------------------
INSERT INTO `bannerb1` VALUES ('1', 'http://img62.ddimg.cn/2018/8/24/2018082418183390628.jpg');
INSERT INTO `bannerb1` VALUES ('2', 'http://img60.ddimg.cn/2018/8/28/201808281455193745.jpg');
INSERT INTO `bannerb1` VALUES ('3', 'http://img63.ddimg.cn/2018/8/28/2018082817424833672.jpg');
INSERT INTO `bannerb1` VALUES ('4', 'http://img61.ddimg.cn/2018/8/27/2018082715305935735.jpg');

-- ----------------------------
-- Table structure for `bannerb2`
-- ----------------------------
DROP TABLE IF EXISTS `bannerb2`;
CREATE TABLE `bannerb2` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bannerb2
-- ----------------------------
INSERT INTO `bannerb2` VALUES ('1', 'http://img61.ddimg.cn/2018/8/28/2018082817323791078.jpg');
INSERT INTO `bannerb2` VALUES ('2', 'http://img62.ddimg.cn/2018/8/28/2018082817160911359.jpg');
INSERT INTO `bannerb2` VALUES ('3', 'http://img62.ddimg.cn/2018/8/28/2018082817450058525.jpg');
INSERT INTO `bannerb2` VALUES ('4', 'http://img62.ddimg.cn/2018/8/28/2018082813592533621.jpg');

-- ----------------------------
-- Table structure for `bannert`
-- ----------------------------
DROP TABLE IF EXISTS `bannert`;
CREATE TABLE `bannert` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bannert
-- ----------------------------
INSERT INTO `bannert` VALUES ('1', 'http://img62.ddimg.cn/2018/8/28/2018082818244538738.jpg');
INSERT INTO `bannert` VALUES ('2', 'http://img63.ddimg.cn/2018/8/28/2018082817415169641.jpg');
INSERT INTO `bannert` VALUES ('3', 'http://img60.ddimg.cn/2018/8/27/2018082718465225182.jpg');
INSERT INTO `bannert` VALUES ('4', 'http://img62.ddimg.cn/2018/8/27/201808271903244348.jpg');
INSERT INTO `bannert` VALUES ('5', 'http://img62.ddimg.cn/2018/8/28/2018082817120325365.jpg');
INSERT INTO `bannert` VALUES ('6', 'http://img62.ddimg.cn/2018/8/28/2018082817123880123.jpg');
INSERT INTO `bannert` VALUES ('7', 'http://img63.ddimg.cn/2018/8/28/2018082817135465317.jpg');
INSERT INTO `bannert` VALUES ('8', 'http://img61.ddimg.cn/2018/8/28/2018082814071472274.jpg');

-- ----------------------------
-- Table structure for `bigtab`
-- ----------------------------
DROP TABLE IF EXISTS `bigtab`;
CREATE TABLE `bigtab` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bigtab
-- ----------------------------
INSERT INTO `bigtab` VALUES ('1', '莎士比亚悲剧喜剧全集·朱生豪译（2万好评！！收全10部悲剧13部喜剧！无删改1947年世界书局版简体本。完美再现莎剧神韵，极其通俗易懂。）', 'http://img3m8.ddimg.cn/46/1/23206438-1_l_1.jpg');
INSERT INTO `bigtab` VALUES ('2', '灵魂有香气的女子（100%亲笔签名，200万册畅销升级版！新增20%从未发表美人故事。愿我们读懂别人的故事，过好自己的人生。）', 'http://img3m4.ddimg.cn/17/12/25324514-1_l_8.jpg');
INSERT INTO `bigtab` VALUES ('3', '一品高官', 'http://img3m2.ddimg.cn/44/20/25311572-1_l_3.jpg');
INSERT INTO `bigtab` VALUES ('4', '新宋·大结局珍藏版（关于宋朝的大百科全书式小说套装1-4册）', 'http://img3m0.ddimg.cn/63/31/25290900-1_l_5.jpg');
INSERT INTO `bigtab` VALUES ('5', '红星照耀中国（青少版）人民文学出版社', 'http://img3m8.ddimg.cn/61/18/25100818-1_h_3.jpg');
INSERT INTO `bigtab` VALUES ('6', '谁的青春不迷茫（2018全新版）新增2013—2018 这几年间 3万字精选日记，随书附赠《不迷茫手册》', 'http://img3m3.ddimg.cn/83/2/25320323-1_l_11.jpg');
INSERT INTO `bigtab` VALUES ('7', '星星离我们有多远（卞毓麟 教育部新编初中语文教材指定阅读图书）八年级上册自主阅读推荐书', 'http://img3m7.ddimg.cn/74/2/25103207-1_h_9.jpg');
INSERT INTO `bigtab` VALUES ('8', '东野圭吾：解忧杂货店（王俊凯、迪丽热巴主演，这家店帮你找回内心流失的东西）', 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg');
INSERT INTO `bigtab` VALUES ('9', '万历十五年', 'http://img3m5.ddimg.cn/98/7/23445575-1_h_5.jpg');
INSERT INTO `bigtab` VALUES ('10', '三体：全三册 刘慈欣代表作，亚洲首部“雨果奖”获奖作品！', 'http://img3m4.ddimg.cn/32/35/23579654-1_h_3.jpg');

-- ----------------------------
-- Table structure for `bigtab2`
-- ----------------------------
DROP TABLE IF EXISTS `bigtab2`;
CREATE TABLE `bigtab2` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bigtab2
-- ----------------------------
INSERT INTO `bigtab2` VALUES ('1', '人间便利店', 'http://img3m6.ddimg.cn/38/9/1901077436-1_l_1.jpg');
INSERT INTO `bigtab2` VALUES ('2', '后宫·如懿传套装（全六册）', 'http://img3m3.ddimg.cn/11/36/1900551323-1_l_15.jpg');
INSERT INTO `bigtab2` VALUES ('3', '百年孤独(电子书)', 'http://img3m0.ddimg.cn/4/34/1901076610-1_l_1.jpg');
INSERT INTO `bigtab2` VALUES ('4', '宫花红(共4册)', 'http://img3m7.ddimg.cn/3/10/1901080767-1_l_1.jpg');
INSERT INTO `bigtab2` VALUES ('5', '不一样的卡梅拉手绘本（1-12册）', 'http://img3m8.ddimg.cn/55/35/23257828-1_h_5.jpg');
INSERT INTO `bigtab2` VALUES ('6', '谁的青春不迷茫（2018全新版）新增2013—2018 这几年间 3万字精选日记，随书附赠《不迷茫手册》', 'http://img3m3.ddimg.cn/83/2/25320323-1_l_11.jpg');
INSERT INTO `bigtab2` VALUES ('7', '抢占心智:产品与品牌快速崛起的引爆打法 分众传媒 创始人江南春 首部作品', 'http://img3m0.ddimg.cn/20/15/1901077220-1_l_1.jpg');
INSERT INTO `bigtab2` VALUES ('8', '东野圭吾：解忧杂货店（王俊凯、迪丽热巴主演，这家店帮你找回内心流失的东西）', 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg');
INSERT INTO `bigtab2` VALUES ('9', '写给儿童的中国历史（全14册）', 'http://img3m6.ddimg.cn/76/35/23427436-1_h_4.jpg');
INSERT INTO `bigtab2` VALUES ('10', '《正面管教》修订版', 'http://img3m0.ddimg.cn/64/6/23990140-1_h_6.jpg');

-- ----------------------------
-- Table structure for `bigtab3`
-- ----------------------------
DROP TABLE IF EXISTS `bigtab3`;
CREATE TABLE `bigtab3` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bigtab3
-- ----------------------------
INSERT INTO `bigtab3` VALUES ('1', '清宫私房事儿(百家讲坛主讲人李寅，清宫廷史，清后宫人物，清宫美食、生活细节、宫廷制度……)', 'http://img3m1.ddimg.cn/87/20/1901080851-1_l_1.jpg');
INSERT INTO `bigtab3` VALUES ('2', '大败局1、2（修订版）套装【当当网独家特供】（财经作家吴晓波经典之作，影响中国商业界的二十本图书”之一，关于中国企业失败的MBA式教案）（团购，请致电010-57993380）', 'http://img3m6.ddimg.cn/71/29/23368526-1_l_11.jpg');
INSERT INTO `bigtab3` VALUES ('3', '余世存：我们的经典（套装8册） （当当独家签名版，附赠精美笔记本“不器”）', 'http://img3m6.ddimg.cn/19/27/25302736-1_l_7.jpg');
INSERT INTO `bigtab3` VALUES ('4', '新宋·大结局珍藏版（关于宋朝的大百科全书式小说套装1-4册）', 'http://img3m0.ddimg.cn/63/31/25290900-1_l_5.jpg');
INSERT INTO `bigtab3` VALUES ('5', '我喜欢生命本来的样子(周国平经典散文作品集)', 'http://img3m0.ddimg.cn/28/30/24198400-1_h_4.jpg');
INSERT INTO `bigtab3` VALUES ('6', '小王子（畅销300万册，作者基金会官方认证简体中文版）', 'http://img3m3.ddimg.cn/81/7/23055003-1_h_22.jpg');
INSERT INTO `bigtab3` VALUES ('7', '游戏力畅销版套装（全3册）[精选套装]', 'http://img3m1.ddimg.cn/18/10/25283331-1_l_3.jpg');
INSERT INTO `bigtab3` VALUES ('8', '月亮与六便士（新版！未删节插图珍藏版，荣获波比小说奖诗人译本，夺得2017豆瓣阅读图书桂冠！）大星文化出品', 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg');
INSERT INTO `bigtab3` VALUES ('9', '活着（2017年新版）', 'http://img3m0.ddimg.cn/7/27/25137790-1_h_1.jpg');
INSERT INTO `bigtab3` VALUES ('10', '王小波文集八卷本', 'http://img3m5.ddimg.cn/68/24/23961335-1_l_5.jpg');

-- ----------------------------
-- Table structure for `bigtab4`
-- ----------------------------
DROP TABLE IF EXISTS `bigtab4`;
CREATE TABLE `bigtab4` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bigtab4
-- ----------------------------
INSERT INTO `bigtab4` VALUES ('1', '浮生六记 （汪涵推荐，畅销200万册。沈复给芸娘的绝美情书）', 'http://img3m7.ddimg.cn/52/5/23751637-1_h_18.jpg');
INSERT INTO `bigtab4` VALUES ('2', '岛上书店（每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔。）', 'http://img3m9.ddimg.cn/74/1/23685329-1_h_28.jpg');
INSERT INTO `bigtab4` VALUES ('3', '你坏（大冰2018作品！预售10分钟8.6万册+，30分钟突破11.8万册，再创当当历史新纪录）', 'http://img3m1.ddimg.cn/93/17/25288851-1_h_19.jpg');
INSERT INTO `bigtab4` VALUES ('4', '新宋·大结局珍藏版（关于宋朝的大百科全书式小说套装1-4册）', 'http://img3m0.ddimg.cn/63/31/25290900-1_l_5.jpg');
INSERT INTO `bigtab4` VALUES ('5', '红星照耀中国（青少版）人民文学出版社', 'http://img3m8.ddimg.cn/61/18/25100818-1_h_3.jpg');
INSERT INTO `bigtab4` VALUES ('6', '追风筝的人（2018年新版）', 'http://img3m5.ddimg.cn/26/14/25238195-1_h_3.jpg');
INSERT INTO `bigtab4` VALUES ('7', '星星离我们有多远（卞毓麟 教育部新编初中语文教材指定阅读图书）八年级上册自主阅读推荐书', 'http://img3m7.ddimg.cn/74/2/25103207-1_h_9.jpg');
INSERT INTO `bigtab4` VALUES ('8', '东野圭吾：解忧杂货店（王俊凯、迪丽热巴主演，这家店帮你找回内心流失的东西）', 'http://img3m8.ddimg.cn/92/3/23464478-1_h_7.jpg');
INSERT INTO `bigtab4` VALUES ('9', '万历十五年', 'http://img3m5.ddimg.cn/98/7/23445575-1_h_5.jpg');
INSERT INTO `bigtab4` VALUES ('10', '在深渊里仰望星空：魏晋名士的卑微与骄傲', 'http://img3m6.ddimg.cn/5/23/25261736-1_h_5.jpg');

-- ----------------------------
-- Table structure for `bigtab5`
-- ----------------------------
DROP TABLE IF EXISTS `bigtab5`;
CREATE TABLE `bigtab5` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bigtab5
-- ----------------------------
INSERT INTO `bigtab5` VALUES ('1', '所谓情商高，就是会说话', 'http://img3m9.ddimg.cn/58/23/24026269-1_l_11.jpg');
INSERT INTO `bigtab5` VALUES ('2', '美国纽约摄影学院--摄影教材（最新修订版）(上下册)', 'http://img3m5.ddimg.cn/19/36/21027025-1_l_2.jpg');
INSERT INTO `bigtab5` VALUES ('3', '现代汉语词典(第7版) 商务印书馆', 'http://img3m2.ddimg.cn/1/34/24039082-1_h_10.jpg');
INSERT INTO `bigtab5` VALUES ('4', '新宋·大结局珍藏版（关于宋朝的大百科全书式小说套装1-4册）', 'http://img3m0.ddimg.cn/63/31/25290900-1_l_5.jpg');
INSERT INTO `bigtab5` VALUES ('5', '红星照耀中国（青少版）人民文学出版社', 'http://img3m8.ddimg.cn/61/18/25100818-1_h_3.jpg');
INSERT INTO `bigtab5` VALUES ('6', '谁的青春不迷茫（2018全新版）新增2013—2018 这几年间 3万字精选日记，随书附赠《不迷茫手册》', 'http://img3m3.ddimg.cn/83/2/25320323-1_l_11.jpg');
INSERT INTO `bigtab5` VALUES ('7', '生活需要仪式感 （你可以活得更高级，把温暖和感动带给你在乎的人）', 'http://img3m4.ddimg.cn/58/12/25209814-1_h_2.jpg');
INSERT INTO `bigtab5` VALUES ('8', '张宇1000题2019 2019张宇考研数学题源探析经典1000题·数学二 习题分册+解析分册', 'http://img3m7.ddimg.cn/66/26/25251897-1_l_1.jpg');
INSERT INTO `bigtab5` VALUES ('9', '我的第一本地理启蒙书', 'http://img3m8.ddimg.cn/42/6/23967348-1_h_15.jpg');
INSERT INTO `bigtab5` VALUES ('10', '围城', 'http://img3m4.ddimg.cn/32/28/22819334-1_h_3.jpg');

-- ----------------------------
-- Table structure for `commend`
-- ----------------------------
DROP TABLE IF EXISTS `commend`;
CREATE TABLE `commend` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `url` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `bigprice` varchar(20) NOT NULL,
  `smallprice` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of commend
-- ----------------------------
INSERT INTO `commend` VALUES ('1', '活着（2017年新版）', 'http://img3m0.ddimg.cn/7/27/25137790-1_h_1.jpg', '25.80', '4.99');
INSERT INTO `commend` VALUES ('2', '郭论（郭德纲2018年重磅新作）', 'http://img3m9.ddimg.cn/47/1/25327019-1_h_8.jpg', '24.90', '12.00');
INSERT INTO `commend` VALUES ('3', '我喜欢生命本来的样子(周国平经典散文作品集)', 'http://img3m0.ddimg.cn/28/30/24198400-1_h_4.jpg', '22.50', '12.99');
INSERT INTO `commend` VALUES ('4', '摆渡人（如果命运是一条孤独的河流，谁会是你灵魂的摆渡人？）', 'http://img3m7.ddimg.cn/86/32/23694647-1_h_8.jpg', '18.00', '4.99');
INSERT INTO `commend` VALUES ('5', '岛上书店（每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔。）', 'http://img3m9.ddimg.cn/74/1/23685329-1_h_28.jpg', '17.50', '8.99');
INSERT INTO `commend` VALUES ('6', '浮生六记 （汪涵推荐，畅销200万册。沈复给芸娘的绝美情书）', 'http://img3m7.ddimg.cn/52/5/23751637-1_h_18.jpg', '16.00', '5.99');
INSERT INTO `commend` VALUES ('7', '在深渊里仰望星空：魏晋名士的卑微与骄傲', 'http://img3m6.ddimg.cn/5/23/25261736-1_h_5.jpg', '24.00', '13.99');
INSERT INTO `commend` VALUES ('8', '围城', 'http://img3m4.ddimg.cn/32/28/22819334-1_h_3.jpg', '24.00', '10.00');
INSERT INTO `commend` VALUES ('9', '人间失格（日本小说家太宰治的自传体小说）', 'http://img3m5.ddimg.cn/56/4/23761145-1_h_2.jpg', '9.70', '4.79');
INSERT INTO `commend` VALUES ('10', '东野圭吾：白夜行（2017版，易烊千玺、韩雪推荐，东野圭吾无冕之王）', 'http://img3m2.ddimg.cn/62/32/25119332-1_h_9.jpg', '41.10', '23.30');
INSERT INTO `commend` VALUES ('11', '中国人的历史：诸神的踪迹', 'http://img3m0.ddimg.cn/54/14/25160310-1_h_3.jpg', '35.60', '17.50');
INSERT INTO `commend` VALUES ('12', '平凡的世界：全三册（八年级下册自主阅读推荐）', 'http://img3m2.ddimg.cn/41/25/25090502-1_h_5.jpg', '74.50', '43.30');

-- ----------------------------
-- Table structure for `detail`
-- ----------------------------
DROP TABLE IF EXISTS `detail`;
CREATE TABLE `detail` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(500) NOT NULL,
  `title` varchar(50) NOT NULL,
  `dec` varchar(150) NOT NULL,
  `price` varchar(10) NOT NULL,
  `eprice` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detail
-- ----------------------------
INSERT INTO `detail` VALUES ('1', 'http://img3m0.ddimg.cn/7/27/25137790-1_w_1.jpg,http://img3m0.ddimg.cn/7/27/25137790-1_w_1.jpg,http://img3m0.ddimg.cn/7/27/25137790-1_w_1.jpg,http://img3m0.ddimg.cn/7/27/25137790-1_w_1.jpg,http://img3m0.ddimg.cn/7/27/25137790-1_w_1.jpg,http://img3m0.ddimg.cn/7/27/25137790-1_w_1.jpg', '活着（2017年新版）', '中国作家之一，他的作品成了当代中国的典范。世界华文“冰心文学奖”，入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”等 文艺书五折封顶，更多促销点击这里 ', '14.00', '7.99');
INSERT INTO `detail` VALUES ('2', 'http://img3m9.ddimg.cn/47/1/25327019-1_w_8.jpg,http://img3m9.ddimg.cn/47/1/25327019-2_w_9.jpg,http://img3m9.ddimg.cn/47/1/25327019-3_w_4.jpg,http://img3m9.ddimg.cn/47/1/25327019-4_w_1.jpg,http://img3m9.ddimg.cn/47/1/25327019-5_w_2.jpg,http://img3m9.ddimg.cn/47/1/25327019-6_w_2.jpg,http://img3m9.ddimg.cn/47/1/25327019-7_w_2.jpg', '郭论（郭德纲2018年重磅新作）', '免费抽郭德纲、岳云鹏VIP门票及签名等好礼。郭德纲口述中国文化通史，体会中国式人性、人情、人心！未删节完整收录。有道是聪明不过帝王，伶俐不过江湖，看郭德纲如何慢火烹茶，解读中国人骨子里的忠与义。  ', '24.90', '17.50');
INSERT INTO `detail` VALUES ('3', 'http://img3m0.ddimg.cn/28/30/24198400-1_w_4.jpg,http://img3m3.ddimg.cn/21/3/24009303-2_w_8.jpg,http://img3m3.ddimg.cn/21/3/24009303-3_w_17.jpg,http://img3m3.ddimg.cn/21/3/24009303-4_w_5.jpg,http://img3m3.ddimg.cn/21/3/24009303-5_w_2.jpg', ' 我喜欢生命本来的样子(周国平经典散文作品集)', '影响和改变万千年轻人对人生的思考和生活的态度！上市半年以来，销售突破10万册，4万读者诚挚推荐！2017年，周国平散文ZUI佳精选集！裸书脊精装，四色印刷，林帝浣插图，但愿你保持住一份生命的本色! 文艺书五折封顶，更多促销点击这里 ', '22.50', '12.90');
INSERT INTO `detail` VALUES ('4', 'http://img3m7.ddimg.cn/86/32/23694647-1_w_8.jpg,http://img3m7.ddimg.cn/86/32/23694647-2_w_1.jpg,http://img3m7.ddimg.cn/86/32/23694647-3_w_1.jpg', '摆渡人（如果命运是一条孤独的河流，谁会是你灵魂的摆渡人？）', '畅销欧美33个国家，荣获多项图书大奖。如果命运是一条孤独的河流，谁会是你灵魂的摆渡人？如果我真的存在，也是因为你需要我。白马时光 文艺书五折封顶，更多促销点击这里 ', '18.00', '4.99');
INSERT INTO `detail` VALUES ('5', 'http://img3m9.ddimg.cn/74/1/23685329-2_w_10.jpg,http://img3m9.ddimg.cn/74/1/23685329-2_w_10.jpg,http://img3m9.ddimg.cn/74/1/23685329-3_w_32.jpg,http://img3m9.ddimg.cn/74/1/23685329-4_w_11.jpg,http://img3m9.ddimg.cn/74/1/23685329-5_w_15.jpg,http://img3m9.ddimg.cn/74/1/23685329-6_w_15.jpg,http://img3m9.ddimg.cn/74/1/23685329-7_w_14.jpg,http://img3m9.ddimg.cn/74/1/23685329-8_w_8.jpg', '岛上书店（每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔。）', '现象级全球畅销书！一年之内畅销美英德法日等30国！感动全球千万读者的阳光治愈小说！美国独立书商推荐阅读桂冠、美国图书馆推荐阅读桂冠。每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔。读客出品 文艺书五折封顶，更多促销点击这里 ', '17.50', '8.90');
INSERT INTO `detail` VALUES ('6', 'http://img3m7.ddimg.cn/52/5/23751637-1_w_18.jpg,http://img3m7.ddimg.cn/52/5/23751637-2_w_13.jpg,http://img3m7.ddimg.cn/52/5/23751637-3_w_9.jpg,http://img3m7.ddimg.cn/52/5/23751637-4_w_9.jpg,http://img3m7.ddimg.cn/52/5/23751637-5_w_8.jpg,http://img3m7.ddimg.cn/52/5/23751637-6_w_2.jpg', '浮生六记 （汪涵推荐，畅销200万册。沈复给芸娘的绝美情书）', '“我们要学会用美的眼光，去发现周遭的一切”著名主持人汪涵念念不忘反复在节目中向观众推荐的一本书！本版白话精心译述，民国本精校原文欣赏，更好读懂中国挚美经典！ 文艺书五折封顶，更多促销点击这里 ', '16.00', '5.99');
INSERT INTO `detail` VALUES ('7', 'http://img3m6.ddimg.cn/5/23/25261736-3_w_8.jpg,http://img3m6.ddimg.cn/5/23/25261736-2_w_6.jpg,http://img3m6.ddimg.cn/5/23/25261736-3_w_8.jpg,http://img3m6.ddimg.cn/5/23/25261736-4_w_6.jpg', '在深渊里仰望星空：魏晋名士的卑微与骄傲', ' 在深渊里仰望星空：魏晋名士的卑微与骄傲    ', '24.00', '10.00');
INSERT INTO `detail` VALUES ('8', 'http://img3m4.ddimg.cn/32/28/22819334-1_w_3.jpg', '围城', '此品不参加促销，更多5折点击这', '24.00', '10.00');
INSERT INTO `detail` VALUES ('9', 'http://img3m5.ddimg.cn/56/4/23761145-1_w_2.jpg，http://img3m5.ddimg.cn/56/4/23761145-2_w_2.jpg', '人间失格（日本小说家太宰治的自传体小说）', '超燃！“丧文化”流行，《人间失格》成了现象级畅销书，创当当3天销售50000+册的奇迹！收录作者绝笔之作《Good bye》。一个“丧失为人资格”少年的心灵独白，一个对村上春树影响至深的绝望凄美故事。 文艺书五折封顶，更多促销点击这里 ', '9.70', '4.99');
INSERT INTO `detail` VALUES ('10', 'http://img3m2.ddimg.cn/62/32/25119332-1_w_9.jpg,http://img3m2.ddimg.cn/62/32/25119332-2_w_10.jpg,http://img3m2.ddimg.cn/62/32/25119332-3_w_8.jpg,http://img3m2.ddimg.cn/62/32/25119332-4_w_8.jpg,http://img3m2.ddimg.cn/62/32/25119332-5_w_3.jpg', '东野圭吾：白夜行（2017版，韩雪推荐，东野圭吾无冕之王）', '万千东野迷心中的无冕之王，周刊文春推理榜年度榜首作品，我一直走在白夜里，从来就没有太阳，所以不怕失去 此品不参加促销，更多5折点击这 ', '41.60', '31.00');
INSERT INTO `detail` VALUES ('11', 'http://img3m4.ddimg.cn/32/35/23579654-1_w_3.jpg,http://img3m4.ddimg.cn/32/35/23579654-2_w_5.jpg,http://img3m4.ddimg.cn/32/35/23579654-3_w_3.jpg,http://img3m4.ddimg.cn/32/35/23579654-4_w_3.jpg,http://img3m4.ddimg.cn/32/35/23579654-5_w_3.jpg,http://img3m4.ddimg.cn/32/35/23579654-1_w_3.jpg', '三体：全三册 刘慈欣代表作，亚洲首部“雨果奖”获奖作品！', ' 此品不参加促销，更多5折点击这 ', '55.80', '23.99');
INSERT INTO `detail` VALUES ('12', 'http://img3m2.ddimg.cn/41/25/25090502-2_w_3.jpg,http://img3m2.ddimg.cn/41/25/25090502-1_w_5.jpg', '平凡的世界：全三册（八年级下册自主阅读推荐）', '新晋男神朱一龙推荐阅读。茅盾文学奖皇冠上的明珠，激励亿万读者的不朽经典。深受老师和学生喜爱的新课标必读书 此品不参加促销，更多5折点击这 ', '74.50', '45.50');

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------

-- ----------------------------
-- Table structure for `login`
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1', '16603657258', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES ('2', '16603657258', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES ('3', '16603657258', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES ('4', '16603657258', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES ('5', '16603657258', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES ('6', '16603657259', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES ('7', '16603657259', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES ('8', '16603657250', 'fcea920f7412b5da7be0cf42b8c93759');
INSERT INTO `login` VALUES ('9', '16603657299', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `login` VALUES ('10', '17855842544', 'f56bcd597497cb2c1c223ebd42cd2c3e');
INSERT INTO `login` VALUES ('11', '16603657233', 'fcea920f7412b5da7be0cf42b8c93759');
INSERT INTO `login` VALUES ('12', '16603657255', 'fcea920f7412b5da7be0cf42b8c93759');
INSERT INTO `login` VALUES ('13', '16603657209', 'e10adc3949ba59abbe56e057f20f883e');

-- ----------------------------
-- Table structure for `mstime`
-- ----------------------------
DROP TABLE IF EXISTS `mstime`;
CREATE TABLE `mstime` (
  `sid` tinyint(1) unsigned zerofill NOT NULL,
  `url` varchar(200) NOT NULL,
  `title` varchar(100) NOT NULL,
  `scaleprice` varchar(10) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mstime
-- ----------------------------
INSERT INTO `mstime` VALUES ('1', 'http://img3m0.ddimg.cn/31/28/25310470-1_l_5.jpg', '锦绣集：邂逅最美爱情古诗词', '9.9', '43.1');
INSERT INTO `mstime` VALUES ('2', 'http://img3m0.ddimg.cn/1/9/1258539580-1_l_4.jpg', '茉蒂菲莉 衬衫', '46', '106');
INSERT INTO `mstime` VALUES ('3', 'http://img3m2.ddimg.cn/97/4/25071352-1_l_3.jpg', '四型生理时钟', '9.9', '30');
INSERT INTO `mstime` VALUES ('4', 'http://img3m7.ddimg.cn/70/12/1121450587-1_l_3.jpg', 'didas阿迪达斯 女装 2018新款', '78', '79');
INSERT INTO `mstime` VALUES ('5', 'http://img3m1.ddimg.cn/3/22/1272513531-1_l_12.jpg', '特百惠晶彩茶韵随心杯400ML塑料水杯学生运动便携水杯', '59', '109.9');
INSERT INTO `mstime` VALUES ('6', 'http://img3m1.ddimg.cn/93/25/25320531-1_l_3.jpg', '人力资源管理从新手到总监套装：秉骏哥李志勇HR工作干货精选', '52.6', '85.6');
INSERT INTO `mstime` VALUES ('7', 'http://img3m0.ddimg.cn/1/9/1258539580-1_l_4.jpg', '茉蒂菲莉 衬衫', '46', '106');
INSERT INTO `mstime` VALUES ('8', 'http://img3m7.ddimg.cn/15/6/1472431767-1_l_7.jpg', '良品铺子', '29.9', '39.9');
INSERT INTO `mstime` VALUES ('9', 'http://img3m9.ddimg.cn/48/1/1119032589-1_l_1.jpg', '乌龟先森 单鞋', '39', '73');
INSERT INTO `mstime` VALUES ('10', 'http://img3m9.ddimg.cn/90/15/410263119-1_l_1.jpg', '九型人格套装（共5册）九型人格+我这么自律', '75.4', '96');
INSERT INTO `mstime` VALUES ('11', 'http://img3m5.ddimg.cn/0/2/1237460895-1_l_9.jpg', '三只松鼠_休闲零食组合', '24.9', '31.9');
INSERT INTO `mstime` VALUES ('12', 'http://img3m5.ddimg.cn/10/26/25209865-1_l_3.jpg', '大师语文系列（套装共2册）', '24.9', '69');

-- ----------------------------
-- Table structure for `quicklyl`
-- ----------------------------
DROP TABLE IF EXISTS `quicklyl`;
CREATE TABLE `quicklyl` (
  `sid` tinyint(1) unsigned zerofill NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of quicklyl
-- ----------------------------
INSERT INTO `quicklyl` VALUES ('1', 'http://img61.ddimg.cn/upload_img/00768/kaixueji/pc-8.30-1535508691.jpg');
INSERT INTO `quicklyl` VALUES ('2', 'http://img50.ddimg.cn/97650019523040_y.jpg');
INSERT INTO `quicklyl` VALUES ('3', 'http://img60.ddimg.cn/upload_img/00634/zj/1212121212121212121.jpg');
INSERT INTO `quicklyl` VALUES ('4', 'http://img62.ddimg.cn/upload_img/00626/sxt05/21467logo-1535531828.jpg');
INSERT INTO `quicklyl` VALUES ('5', 'http://img56.ddimg.cn/213350032804836_y.jpg');

-- ----------------------------
-- Table structure for `quicklyr`
-- ----------------------------
DROP TABLE IF EXISTS `quicklyr`;
CREATE TABLE `quicklyr` (
  `sid` tinyint(1) unsigned zerofill NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of quicklyr
-- ----------------------------
INSERT INTO `quicklyr` VALUES ('1', 'http://img53.ddimg.cn/73440043106413_y.jpg');
INSERT INTO `quicklyr` VALUES ('2', 'http://img52.ddimg.cn/52610036437422_y.jpg');
INSERT INTO `quicklyr` VALUES ('3', 'http://img59.ddimg.cn/142480040828659_y.jpg');
INSERT INTO `quicklyr` VALUES ('4', 'http://img58.ddimg.cn/46640041948858_y.jpg');
INSERT INTO `quicklyr` VALUES ('5', 'http://img62.ddimg.cn/upload_img/00759/lily/1-1535451205.jpg');
INSERT INTO `quicklyr` VALUES ('6', 'http://img59.ddimg.cn/192480049100999_y.jpg');
INSERT INTO `quicklyr` VALUES ('7', 'http://img62.ddimg.cn/upload_img/00626/sxt03/21467pc-1535531844.jpg');
INSERT INTO `quicklyr` VALUES ('8', 'http://img63.ddimg.cn/upload_img/00754/suishiqi/wph-1534413152.jpg');
INSERT INTO `quicklyr` VALUES ('9', 'http://img60.ddimg.cn/upload_img/00754/suishiqi/wph_p-1534413228.jpg');
INSERT INTO `quicklyr` VALUES ('10', 'http://img60.ddimg.cn/upload_img/00678/zsts/wph_pc_199x238_180611-1528703106.jpg');

-- ----------------------------
-- Table structure for `slunbo`
-- ----------------------------
DROP TABLE IF EXISTS `slunbo`;
CREATE TABLE `slunbo` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of slunbo
-- ----------------------------
INSERT INTO `slunbo` VALUES ('1', 'http://img50.ddimg.cn/14540043128020_y.jpg');
INSERT INTO `slunbo` VALUES ('2', 'http://img61.ddimg.cn/upload_img/00570/tongshu/202x119_djj_0823-1535080557.jpg');
INSERT INTO `slunbo` VALUES ('3', 'http://img63.ddimg.cn/upload_img/00549/youxiaxiaobanner/2021193-1535521324.jpg');

-- ----------------------------
-- Table structure for `smalltab`
-- ----------------------------
DROP TABLE IF EXISTS `smalltab`;
CREATE TABLE `smalltab` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of smalltab
-- ----------------------------
INSERT INTO `smalltab` VALUES ('1', '积分支付上线了，直接当钱用');
INSERT INTO `smalltab` VALUES ('2', '当当阅读器 海量电子书随时读');
INSERT INTO `smalltab` VALUES ('3', '当当阅读器 海量电子书随时读');
INSERT INTO `smalltab` VALUES ('4', '话费卡兑换当当礼品卡');
INSERT INTO `smalltab` VALUES ('5', '网销礼品卡教师中秋传情义');

-- ----------------------------
-- Table structure for `smalltab1`
-- ----------------------------
DROP TABLE IF EXISTS `smalltab1`;
CREATE TABLE `smalltab1` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of smalltab1
-- ----------------------------
INSERT INTO `smalltab1` VALUES ('1', '网销礼品卡教师中秋传情义');
INSERT INTO `smalltab1` VALUES ('2', '开学季逻辑狗满299减40');
INSERT INTO `smalltab1` VALUES ('3', '创意文具开学季满100减50');
INSERT INTO `smalltab1` VALUES ('4', '创意文具开学季满100减50');
INSERT INTO `smalltab1` VALUES ('5', '网销礼品卡教师中秋传情义');
