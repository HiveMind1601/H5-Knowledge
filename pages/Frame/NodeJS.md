什么是NodeJS
	NodeJS是一个JS的运行环境
它是对Google V8引擎进行了封装。V8引擎执行Javascript的速度非常快，性能非常好
V8引擎执行Javascript的速度非常快，性能非常好
Node.js对一些特殊用例进行了优化，提供了替代的API，使得V8在非浏览器环境下运行得更好
	Node.js 使用事件驱动， 非阻塞I/O 模型而得以轻量和高效，非常适合在分布式设备上运行数据密集型的实时应用
	编写高性能网络服务器的JavaScript工具包（用JS开发服务器端程序），它是单线程、异步、事件驱动的
	NodeJS中的JS，与浏览器中的JS其实现的目标与功能是相似的，但不一致，因为NodeJS可以连接数据库，可以操作文件
	2009年 作者Ryan Dalh
	在哪里应用
		PC网站项目
		移动端项目
		微信项目（小程序，公众号）
		桌面应用

单线程与多线程区别
	前提
		什么是进程
			当一个程序开始运行时，它就是一个进程，进程包括运行中的程序和程序所使用到的内存和系统资源。
而一个进程又是由多个线程所组成的
		什么是线程
			线程是程序中的一个执行流，每个线程都有自己的专有寄存器(栈指针、程序计数器等)，但代码区是共享的，
即不同的线程可以执行同样的函数
		线程相对于进程的优点
			开销小
			资源共享性好
		线程相对于进程的缺点
			共享资源需要耗费一定的锁资源，同步相对复杂
			一个线程崩溃可能导致整个进程崩溃，这个当然是自己的应用程序有问题
	什么是多线程
		多线程是指程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行不同的任务，
也就是说允许单个程序创建多个并行执行的线程来完成各自的任务。
		多线程的优点
			可以提高CPU的利用率。在多线程程序中，一个线程必须等待的时候，CPU可以运行其它的线程而不是等待，
这样就大大提高了程序的效率
		多线程的不足之处
			线程也是程序，所以线程需要占用内存，线程越多占用内存也越多
			多线程需要协调和管理，所以需要CPU时间跟踪线程
			线程之间对共享资源的访问会相互影响，必须解决竞用共享资源的问题
			线程太多会导致控制太复杂，最终可能造成很多Bug
	单线程
		单线程的也就是程序执行时，所跑的程序路径（处理的东西）是连续顺序下来的，必须前面的处理好，后面的才会执行到
	JS为什么是单线程
		JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事
		JavaScript的单线程，与它的用途有关。
作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。
这决定了它只能是单线程，否则会带来很复杂的同步问题。
比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？
		任务队列
			单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着
如果排队是因为计算量大，CPU忙不过来，倒也算了，但是很多时候CPU是闲着的，因为IO设备（输入输出设备）很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行
JavaScript语言的设计者意识到，这时主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回过头，把挂起的任务继续执行下去
			所有任务可以分成两种，
一种是同步任务（synchronous），
另一种是异步任务（asynchronous）。
同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行
			异步执行的运行机制如下。
（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）
				所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）
				主线程之外，还存在一个"任务队列"（task queue）。
只要异步任务有了运行结果，就在"任务队列"之中放置一个事件
				一旦"执行栈"中的所有同步任务执行完毕，
系统就会读取"任务队列"，看看里面有哪些事件。
那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
				主线程不断重复上面的第三步



事件驱动
	事件驱动是指在持续事务管理过程中，进行决策的一种策略，
即跟随当前时间点上出现的事件，调动可用资源，执行相关任务，
使不断出现的问题得以解决
		所谓事件驱动，简单地说就是你点什么按钮（即产生什么事件），电脑执行什么操作（即调用什么函数）.
当然事件不仅限于用户的操作. 事件驱动的核心自然是事件
		从事件角度说，事件驱动程序的基本结构是由一个事件收集器、一个事件发送器和一个事件处理器组成
		事件收集器专门负责收集所有事件，
包括来自用户的（如鼠标、键盘事件等）、来自硬件的（如时钟事件等）和来自软件的（如操作系统、应用程序本身等）
		事件发送器负责将收集器收集到的事件分发到目标对象中
		事件处理器做具体的事件响应工作，它往往要到实现阶段才完全确定，
因而需要运用虚函数机制（函数名往往取为类似于HandleMsg的一个名字）。
对于框架的使用者来说，他们唯一能够看到的是事件处理器


NodeJS的优点
	快，
但耗费内存多（网上一个百万级并发测试，未经优化的情况下1M链接消耗了16G的内存）
	RESTful API
	单线程
	Node.js可以在不新增额外线程的情况下，依然可以对任务进行并行处理
		Node.js是单线程的。
它通过事件轮询（event loop）来实现并行操作，
对此，我们应该要充分利用这一点 —— 尽可能的避免阻塞操作，
取而代之，多使用非阻塞操作
	非阻塞IO
	V8虚拟机
	事件驱动


NodeJS的不足之处及解决方案
	默认不支持多核，但可以用cluster解决
	默认不支持服务器集群，node-http-proxy可以进行解决
	使用nginx做负载均衡，静态的由nginx处理，动态的由NodeJs处理
	forever或者node-cluster实现灾难恢复
	IDE开发不完善

CDN
	内容分发网络
	CDN主要针对的是静态资源
	其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定
	CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。
其目的是使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。
	优点
		多域名加载资源
		文件可能已经被加载过并保存有缓存
		高效率
		分布式的数据中心
		内置版本控制
		使用情况分析
		有效防止网站被攻击

Http请求方式
	GET
	POST
	PUT
	DELETE
	CONNECT
	OPTIONS
	HEAD
	TRACE

端口
	http：80
	https：443
	Tomcat：8080
	SSH：22 
	FTP：21
	SQLServer：1433 
	MySQL：3306
	MongoDB：27017

继承
	构造
	原型链
	混合
	拷贝
	实例

MySQL
	二维关系型数据库
	table
		insert/updata/delete/select
	field
	column
	row/record
	nodejs+mysql桥
		createConnection
		connect
		字符串型的sql语句
		占位模式的sql语句
			??--->parmas传递
		createPool（连接池的概念）

MongoDB
	非关系型数据库
	嵌套的数据结构的，非字符型数据类型
	c++语言写的（NodeJS也是c++写的（所以NodeJS与MongpDB衔接性很好））
	快，简单，易用，易部署，文件存储模式
	
路由
	路由的核心点
		静态路由表
		分配地址
		统一入口
		寻址
		过滤
	自定义路由
		http/creatServer
			request
				request.url
					url
					querystring
			response
			router(静态路由表的设置)
				从服务器端向浏览器输出文本内容
					fs
						读取html文件
							get
							post
							put
							delete
		
	NodeJS Express框架
		
		cnpm i express -g
		cnpm i express-generator -g
		Express -e sxpressProjectName
			bin
				www
			public
				images
				javascript
				stylesheets
			routes
				index.js
				users.js
			views
				index.ejs
				error.ejs
			App.js
			packeage.json
		express参数
			设参
				ejs（里设置）
					get/post/put/delete（表单的参数）
				routes(里设置)
					：id/:xx    通过：（占位符，占一个参数的位置）
			传参
				ejs
					get/post/put/delete（表单的参数）
				地址里进行传递
			接参
				routes
					req.query.xxx/req.body.xxx
				routes里获取--->req.parmas.xx
		mongodb桥
			引用模块
			创建连接字符串
				Mongodb://127.0.0.1:27017
			connect数据库连接
				返回一个client对象
			client去找指定的数据库
			找到数据库后再找collection
			对集合进行增、删、改、查、的操作
		express-session
			客户端本地存储的方式
				cookie
					不大于4k
				localStorage
					5M
				sessionStorage
					会话型存储（关掉就没有了）
				websql
					无限存储（无大小限制）（存在浏览器是否支持的限制）
				indexeddb
					无限存储（无大小限制）
			需要引用并使用模块
			配置
				sercet
				resave
				maxAge
				saveUninitiallized
		新增的功能模块
			在app.js里先引入模块，并且设置路由项 
			在routes里创建路由模块
				comment.js
			需要在views里设置渲染页面
		在线编辑器
			ueditor
			kindeditor
			ckeditor
			xheditor


概念理解
	jquery/bootstrap
		框架
			有自己的设计思想，帮助解决整体功能架构的内容
				jquery核心设计思想：针对DOM的操作（DOM的对象选择器）
	jquery.cookie.js/jquery.tab.js/jquery.menu.js
		插件
			依附框架等内容，不能独立存在 
	async/moment.js
		类库
			函数集（可以不依赖其他任何内容而独立存在，它是一些功能的封装）
	首页/新闻/产品
		功能模块
			遵循框架思路，应用插件及类库实现企业项目的指定功能


第三方模块
	包管理器
		npm-> node package manager 包管理器
		cnpm
		yarn


NodeJS内置模块
	http
		createServer
			Wamp/Sphptudy
			Hbuild
			gulp
			webpack
			http-server
			nodejs
			....
		listen 监听端口
		http在请求的时候有两大内容
			request  请求
				request.url
					Favicon.ico
					/
				请求方式
					request（rest API）
						get
							options/method
							res.on/data/end/error
								on事件绑定 chunk 块 数据都是以块状内容进行传递 监听同时需要开第二个cmd，如果直接在监听同时打node，会破坏监听
								error：看请求是否出错
							chunk
								数据时一块一块的传过来,所以对数据的进行拼接
							req.end
							工具
								json-sever
									模拟数据服务器支撑 
								axios
									第三方模块
										实际项目使用
类似以前的ajax请求
								postman
									前后端接口调试工具
							spider
								蜘蛛的原理就是对html的源码分析
									cheerio（类jquery）第三方模块
							get 最主要的是返回
						post
						put
						delet
					headers
						头文件
							从代码层次到协议层次
			reponse 返回
				response.writeHead（）
					http状态码
						1 信息
						2 成功
						3 重定向
						4 客户端错误
						5 服务器错误
					Content-Type
						数据返回来以后形成的文件类型
							Application/json
							text/html
						编码
							文件编码
								当页面里面没有写meta标签来说明编码时，可以把文件设置成utf-8/utf-8 BOM的也可以解决乱码
							页面编码
								html页面里的meta标签
							请求编码
								ajax请求时可以设置编码 content-type
由于ajax是有默认的编码，所以一般据没设置
							地址编码
							设置编码
	events
		订阅及发布模式（广播和提交）
			broadcast(从上向下进行广播操作)
			on 事件监听
			emit(从下向上进行数据发射)
	url
		url 格式内容
			
				protocol ：协议
					http
					https
					Ftp
						操作时需输入用户名，密码
				pathname：路径名称
				search：搜索
					目标
				query：查询
					区间
				hash：锚点
		url.parse():字符串转成对象
			url.parse('//www.baidu.com:8080/b2c/product/list.php?from=qianfeng&source=nodejs#level1',true,true)
第一个true解决query为对象，第二个true解决 可以使host(主域名)port(端口)hash(锚点)出现不为null (所以这也是网址)
			url.parse('https://www.baidu.com:8080/b2c/product/list.php?from=qianfeng&source=nodejs#level1',true)
query从字符串变成对象
		url.format 把对象变成字符串
		url.resolve url的地址合并,拼接
	querstring
		querystring.stringify 把对象装化成字符串
			querystring.stringify({name:'xiaowei',sex:['man','woman']})
name=xiaowei&sex=man&sex=woman'
querystring.stringify({name:'xiaowei',sex:['man','woman']},',') ','改变分割符
querystring.stringify({name:'xiaowei',sex:['man','woman']},',',':') ':'把等号变成冒号
		querystring.parse把字符串转化成对象
			但是有时是需要参数的，就是原来使怎么转的，现在就怎么转回去
		querystring.escape
			querystring.escape('哈尔滨') 汉字穿个后端就可能乱码
'%E5%93%88%E5%B0%94%E6%BB%A8'-->url encode （url编码）地址编码 把这个传给后端不会乱码
		querystring.unescape
		JSON
			JSON.stringify
			JSON.parse
	fs
		isDir
		isFile
		readFile
			编码
				utf-8
					文本型
				binary
					图片
					word
					MP3
					MP4
		readFileSync
		appendfile(添加文件)
		appendFileSync
		unlink(删除文件)
		stream
			createReadStream
			createWriteStream
		zlib
			createGzip
		pipe
			pipe符号： |
		res/req
			on/data/end/error
		chunk	
			基础大小：65536字节
	async(即能用在客户端也能用在服务器端)
		串行有关联
			series
		串行无关联
			waterfall
		并行无关联
			parallel
	浏览器与NodeJS环境的异同
		window/document
		process
	每一次修改代码需要重新启动
		supervisor
		nodemon



用户自定义模块
	必须遵循CommJS规范
		模块定义
			变量
			对象
			方法
			类
		接口暴露
			moudel exports
			exports
			export default
			export const
		模块引入
			require
			import
		模块调用
	AMD/CMD
		require.js
		sea.js


支持Restful API接口形式
	Restful API 架构详情
		规范（约定）
			GET 安全且幂等
			POST 不安全且不幂等
			PUT 不安全但幂等
			DELETE 不安全但幂等
			幂等性
				
某个函数或者某个接口使用相同参数调用一次或者无限次，其造成的后果是一样的，在实际应用中一般针对于接口进行幂等性设计
				幂等函数，或幂等方法，是指可以使用相同参数重复执行，并能获得相同结果的函数。这些函数不会影响系统状态，也不用担心重复执行会对系统造成改变
