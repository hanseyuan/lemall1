SET NAMES UTF8;
DROP DATABASE IF EXISTS qdm114262560_db;
CREATE DATABASE qdm114262560_db CHARSET=UTF8;
USE qdm114262560_db;
#用户信息表
CREATE TABLE le_user(
	uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16),
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender INT
);
INSERT INTO le_user VALUES
(NULL,'tom','123456','tom@qq.com','13512345678','img/1.jpg','王小二',1),
(NULL,'mike','123456','tom@qq.com','13512345678','img/1.jpg','王小五',1),
(NULL,'jerry','123456','tom@qq.com','13512345678','img/1.jpg','王花花',0),
(NULL,'jack','123456','tom@qq.com','13512345678','img/1.jpg','李冰冰',1),
(NULL,'kity','123456','tom@qq.com','13512345678','img/1.jpg','王小小',0);

#用户地址表
#用户购物车表
#用户订单表
#用户订单详情表
#商品类别表
#商品表
CREATE TABLE le_search(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    family_id INT,
    title VARCHAR(128),
    subtitle VARCHAR(128),
    price DECIMAL(10,2),
    pic VARCHAR(128),
    evaluate INT
);
INSERT INTO le_search VALUES
(NULL,1,'超4×40M','第四代超级电视×40M','1799.00','img/productList/tv/1.jpg',72),
(NULL,1,'超4×40M生态版','第四代超级电视×40M','2399.00','img/productList/tv/2.jpg',9),
(NULL,1,'超4×55M生态版','第四代超级电视×40M','3999.00','img/productList/tv/3.jpg',218),
(NULL,1,'超4×55M','第四代超级电视×40M','3699.00','img/productList/tv/4.jpg',22),
(NULL,1,'超4×50M','第四代超级电视×40M','2299.00','img/productList/tv/5.jpg',563),
(NULL,1,'超4×50M生态版','第四代超级电视×40M','2999.00','img/productList/tv/6.jpg',116),
(NULL,1,'超4×43M生态版','第四代超级电视×40M','2599.00','img/productList/tv/7.jpg',123),
(NULL,1,'超4×40M生态版','第四代超级电视×40M','2749.00','img/productList/tv/8.jpg',265),
(NULL,1,'超4×40M','第四代超级电视×40M','2249.00','img/productList/tv/9.jpg',335),
(NULL,1,'超4×40M生态版','第四代超级电视×40M','2249.00','img/productList/tv/10.jpg',89),
(NULL,1,'乐视旋转壁挂支架','第四代超级电视×40M','119.00','img/productList/tv/11.jpg',87),
(NULL,1,'超4×40M','第四代超级电视×40M','1799.00','img/productList/tv/1.jpg',72),
(NULL,1,'超4×40M生态版','第四代超级电视×40M','2399.00','img/productList/tv/2.jpg',9),
(NULL,1,'超4×55M生态版','第四代超级电视×40M','3999.00','img/productList/tv/3.jpg',218),
(NULL,1,'超4×55M','第四代超级电视×40M','3699.00','img/productList/tv/4.jpg',22),
(NULL,1,'超4×50M','第四代超级电视×40M','2299.00','img/productList/tv/5.jpg',563),
(NULL,1,'超4×50M生态版','第四代超级电视×40M','2999.00','img/productList/tv/6.jpg',116),
(NULL,1,'超4×43M生态版','第四代超级电视×40M','2599.00','img/productList/tv/7.jpg',123),
(NULL,1,'超4×40M生态版','第四代超级电视×40M','2749.00','img/productList/tv/8.jpg',265),
(NULL,1,'超4×40M','第四代超级电视×40M','2249.00','img/productList/tv/9.jpg',335),
(NULL,1,'超4×40M生态版','第四代超级电视×40M','2249.00','img/productList/tv/10.jpg',89),
(NULL,1,'乐视旋转壁挂支架','第四代超级电视×40M','119.00','img/productList/tv/11.jpg',87);

#首页轮播图表
CREATE TABLE le_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(64),
	href VARCHAR(128)
);
INSERT INTO le_index_carousel VALUES
(NULL,'img/banner/1.jpg','img1',''),
(NULL,'img/banner/2.jpg','img2',''),
(NULL,'img/banner/3.jpg','img3','');
#首页商品栏目表
CREATE TABLE le_index_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    details VARCHAR(128),
    pic VARCHAR(128),
    price DECIMAL(10,2),
    href VARCHAR(128),
    home TINYINT,
    phone TINYINT,
    parets TINYINT,
    capacity TINYINT

);
INSERT INTO le_index_product VALUES
(NULL,'乐S3爵迹版','含1年乐次元影视会员','img/floor1/floor1.2.jpg','899','',1,0,0,0),
(NULL,'乐2','金融一体化机身','img/floor1/floor1.3.jpg','899','',2,0,0,0),
(NULL,'Leme耳机','音乐既能好听更能好看','img/floor1/floor1.4.jpg','99','',3,0,0,0),
(NULL,'Cool S1',' ','img/floor1/floor1.5.jpg','2599','',4,0,0,0),
(NULL,'乐视超级手机1S保护套',' ','img/floor1/floor1.6.jpg','29','',5,0,0,0),
(NULL,'乐视超级移动电源',' ','img/floor1/floor1.7.jpg','119','',6,0,0,0),
(NULL,'乐视反戴耳机',' ','img/floor1/floor1.8.jpg','39','',7,0,0,0),
(NULL,'超4×50M','3GB运存+16GB闪存','img/floor2/floor2.2.jpg','2299','',0,1,0,0),
(NULL,'超4×43M','3GB运存+16GB闪存','img/floor2/floor2.3.jpg','1999','',0,2,0,0),
(NULL,'乐视盒子','大屏生态第一步','img/floor2/floor2.4.jpg','349','',0,3,0,0),
(NULL,'超4×40M',' ','img/floor2/floor2.5.jpg','1799','',0,4,0,0),
(NULL,'乐视超级无线音箱S','','img/floor2/floor2.6.jpg','1499','',0,5,0,0),
(NULL,'乐视固定挂架LS065NN3P','','img/floor2/floor2.7.jpg','99','',0,6,0,0),
(NULL,'主动快门式3D眼睛','','img/floor2/floor2.8.jpg','69','',0,7,0,0),
(NULL,'乐视超级无限音箱S','提供不用寻常的视听享受','img/floor3/floor3.1.jpg','1499','',0,0,1,0),
(NULL,'乐视运动蓝牙耳机','炫彩时尚&nbsp;佩戴舒适&nbsp;全身水洗','img/floor3/floor3.2.jpg','159','',0,0,2,0),
(NULL,'乐视三合一体感摄像头','来自科技的体感摄像头','img/floor3/floor3.3.jpg','899','',0,0,3,0),
(NULL,'乐Pro3双摄AI保护套','','img/floor3/floor3.4.jpg','29','',0,0,4,0),
(NULL,'乐视固定挂架LS698SFP','','img/floor3/floor3.5.jpg','49','',0,0,5,0),
(NULL,'酷派Type-移动电源','','img/floor3/floor3.6.jpg','99','',0,0,6,0),
(NULL,'乐视ETV&nbsp;HDMI&nbsp;高清线1.4','','img/floor3/floor3.7.jpg','49','',0,0,7,0),
(NULL,'乐Pro3双摄AI版PU保护套','','img/floor3/floor3.8.jpg','29','',0,0,8,0),
(NULL,'乐视反戴耳机','','img/floor3/floor3.9.jpg','39','',0,0,9,0),
(NULL,'新玩Q1酷玩版游戏手柄','','img/floor3/floor3.10.jpg','138','',0,0,10,0),
(NULL,'乐视路由器','会员共享路由器','img/floor4/floor4.1.jpg','99','',0,0,0,1),
(NULL,'LeVR-LINGVR小白1升级版','只为成就更完美的你','img/floor4/floor4.2.jpg','99','',0,0,0,2),
(NULL,'乐视轻车机套装1S','手机变车机&nbsp;爱车秒升级','img/floor4/floor4.3.jpg','199','',0,0,0,3),
(NULL,'Kido 4G儿童智能手表','','img/floor4/floor4.4.jpg','698','',0,0,0,4),
(NULL,'力博得I5智能抗菌声波牙刷','','img/floor4/floor4.5.jpg','699','',0,0,0,5),
(NULL,'Leme运动蓝牙耳机EB40','','img/floor4/floor4.6.jpg','199','',0,0,0,6),
(NULL,'酷派TYPE-C金属耳机','','img/floor4/floor4.7.jpg','55','',0,0,0,7),
(NULL,'新游智能游戏手柄','','img/floor4/floor4.8.jpg','138','',0,0,0,8),
(NULL,'乐视随身看','','img/floor4/floor4.9.jpg','299','',0,0,0,9),
(NULL,'3D眼睛Letv&nbsp;F5000','','img/floor4/floor4.10.jpg','49','',0,0,0,10);




























