function show_education(){
	var edu_list = [
		{
			uni:'剑桥大学｜University of Cambridge',
			date_tag:['Sept.', '2019'],
			major:'MPhil in Biotechnology',
			date:'(10/2019 - 09/2020)',
			score:'',
			courses:['Biotechnology','Biophysics','Biomaterials','Pharmaceutical Engineering','Bionanotechnology','Management of Technology'],
			projects:[
				{
					project_name:'一个用于研究胆固醇在神经退行性疾病中的作用的系统生物学方法',
					project_discription:[
						'论文题目:&nbsp;Metal-Organic Frameworks: Optimization of Cell Staining Technique for Cellular Uptake and Computational Characterization of Mesoporosity',
						'从事一个系统生物学的课题来研究和模拟胆固醇在神经退行性疾病中的作用',
						'专攻阿尔兹海默症的病理，并和计算机团队紧密沟通与合作，将代谢网络转化成petri网，搜集相关酶促反应的米氏方程参数和其它动力学参数，整合到神经元模型中',
						'制作一个<a href="https://c3yrhckwpm.wixsite.com/neurodegenerative">网站(需要翻墙)</a>来提升青少年对于神经退行性疾病的意识',
					]
				},
				{
					project_name:'金属有机框架物：细胞摄取的染色技术优化和孔特性的计算机模拟',
					project_discription:[
						'论文题目:&nbsp;A Systems Biology Approach to Investigate the Role of Cholesterol in Neurodegenerative Diseases',
						'研究包和技术制备的有机框架复合物的细胞摄取途径及其在细胞内命运，因新冠疫情的原因只完成细胞染色条件的优化',
						'运用计算机进行Monte Carlo分子模拟研究金属有机框架与载体分子的相互作用',
						'另和实验室同伴撰写了一篇论文的手稿：Cellular Uptake of Metal-Organic Frameworks: a Journey Into the Cell'
					]
				}
			]
		},
		{
			uni:'密西根大学｜University of Michigan, Ann Arbor',
			date_tag:['Sept.', '2017'],
			major:'BS in Pharmaceutical Sciences',
			date:'(09/2017 - 05/2019)',
			score:'绩点:&nbsp;3.955/4.000',
			courses:['Pharmacy', 'Pharamceutical Sciences', 'Medicinal Chemistry','Biology','Biochemistry','Physiology','Chemistry'],
			projects:[
				{
					project_name:'脂质体仿制药分析及表征方法的建立',
					project_discription:[
						'论文题目:&nbsp;Development of Analytical Methodologies and Characterization of Liposomal Generic Drugs',
						'在体外评估和比较了原研药AmBisome®、两个在印度上市的仿制药和一个正在研发的仿制药的物理化学性质、毒性及抗真菌能力',
						'帮助建立了Exparel®体外释放实验的方法，并且评估了其体内药物代谢动力学',
						'在药学院研究会议上展示了AmBisome®课题的研究成果',
						'发表论文:&nbsp;<a href="https://www.sciencedirect.com/science/article/pii/S0939641120302848?casa_token=vtsXpiiXEQ8AAAAA:YNKGqBFvbEuBsDwakgYK-741TsE5T1GYeKGlmAebpUYKBAJbf_ej0CYsflOSA0ZWhkPMowVPQw">Liu, Y., Mei, Z., Mei, L., Tang, J., Yuan, W., Srinivasan, S., ... & Schwendeman, A. S. (2020). Analytical method development and comparability study for AmBisome® and generic Amphotericin B liposomal products. European Journal of Pharmaceutics and Biopharmaceutics, 157, 241-249.</a>'
					]
				}
			]
		},
		{
			uni:'中国药科大学｜China Pharmaceutical University',
			date_tag:['Sept.', '2014'],
			major:'BS in Biotechnology',
			date:'(09/2014 - 06/2019)',
			score:'加权平均:&nbsp;90.45/100',
			courses:['无机化学','有机化学','分析化学','物理化学','生物化学','分子生物学','生理学','微生物学','细胞生物学','药剂学','药理学','抗生素','免疫学','遗传学'],
			projects:[
				{
					project_name:'基于循序释药策略的聚合物纳米粒用于肿瘤多药耐药的研究',
					project_discription:[
						'与其他四位本科生一起设计和制备了一个有合适的粒径和粒径分布的脂质体模型药物',
						'合作撰写答辩用论文'
					]
				}
			]
		}
	]
	var html_edu = []
	
	for(let edu in edu_list){
		html_edu.push('<div class="info_container">')
		// console.log(edu_list[edu])
		var html_text = ''
		html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + edu_list[edu].date_tag[0] + '</div><div class="date_box_btm">' + edu_list[edu].date_tag[1] + '</div></div></div>'
			html_text += '<div class="main">'
				
				html_text += '<div class="place_name">'
				html_text += edu_list[edu].uni
				html_text += '</div>'
				
				
				html_text += '<div class="main_tag">'
				html_text += edu_list[edu].major
				html_text += '</div>'
				
				html_text += '<div class="main_year_tag">'
				html_text += edu_list[edu].date
				html_text += '</div>'
				
				if(edu_list[edu].score != ''){
					html_text += '<div class="main_year_tag">'
					html_text +=  edu_list[edu].score
					html_text += '</div>'
				}
				
				html_text += '<div class="main_subsection_title">实验课题</div>'
				html_text += '<div class="main_project_container">'
				for(let project_indiv in edu_list[edu].projects){
					html_text += '<div class="main_project_name">'
					html_text += edu_list[edu].projects[project_indiv].project_name
					html_text += '</div>'
					html_text += '<div class="main_project_discription_container">'
					for(let project_dis in edu_list[edu].projects[project_indiv].project_discription){
						html_text += '<div class="main_project_discription_line">'
							html_text += '<div class="main_project_discription_line_bullet">'
							html_text += '</div>'
							
							html_text += '<div class="main_project_discription_line_text">'
							html_text += edu_list[edu].projects[project_indiv].project_discription[project_dis]
							html_text += '</div>'
						html_text += '</div>'
					}
					html_text += '</div>'
					
				}
				html_text += '</div>'
				
				
				html_text += '<div class="main_subsection_title">主要课程</div>'
				html_text += '<div class="main_year_course_container">'
				for(let course_indiv in edu_list[edu].courses){
					html_text += '<div class="main_year_course">'
					html_text += edu_list[edu].courses[course_indiv]
					html_text += '</div>'
				}
				html_text += '</div>'
				
			html_text += '</div>'
		html_edu.push(html_text)
		html_edu.push('</div>')
	}
	
	document.getElementById('edu_js_anchor').innerHTML = html_edu.join("");
}


function show_career(){
	var career_list = [
		{
			company:'上海织生科技有限公司｜NeuroWeave',
			date_tag:['Sept.', '2020'],
			role:'研发产品经理｜董事',
			date:'(09/2020 - 至今)',
			projects:[
				{
					project_name:'脑倍佳+ 微信小程序:0到1的研发与开发&nbsp;|&nbsp;自学成“全栈”',
					project_discription:[
						{
							'项目背景':'公司已有toB业务，但缺少从toB到toC的途径'
						},
						{
							'项目目标':'搭建一个面向认知障碍老人的线上居家干预平台，实现公司toB再toC的商业模式'
						},
						{
							'个人行动':'根据207+国内外流行病学研究文献，汇总了4大类非药物干预方案，设计了个性化自适应推荐算法。通过竞品分析，设计了MVP原型图。用了一个月自学了前端开发，用Hbuilder X完成开发，并用 unicloud云开发度过了公司没有后端工程师的局面。'
						},
						{
							'项目结果':'小程序成功上线，可以完成toB到toC的业务;推荐算法成功申请专利CN114038534A'
						}
					]
				},
				{
					project_name:'脑倍佳+ 微信小程序:V1.0到V2.0迭代&nbsp;|&nbsp;产品思维，回归需求',
					project_discription:[
						{
							'项目背景':'在干预小程序上线后，用户留存很差'
						},
						{
							'项目目标':'增加用户留存'
						},
						{
							'个人行动':'通过复盘、拆解功能模块，深入分析国内外在认知训练领域的产品，整理成分析文档并汇报展示，向决策层给出了迭代方向的建议。通过问卷和一对一老年人深度交流的方式，了解用户的原始需求，最后用综合运5W2H和KANO等需求分析方法，制定相应的版本规划(包括社交圈子、自营商城、游戏化激励体系、制定线 上服务支付流程等)、产出PRD和原型图，完成前端开发。'
						},
						{
							'项目结果':'与UI设计师配合，陆 续上线了一些版本更新，但大的更新由于融资后商业模式的改变而未能推进'
						}
					]
				},
				{
					project_name:'脑倍佳记忆家庭管理 微信小程序:合作对接与定制化&nbsp;|&nbsp;数据驱动',
					project_discription:[
						{
							'项目背景':'罗氏制药(上海)为其员工及家属举办记忆健康体检，但没有额外的线下记忆评估师'
						},
						{
							'项目目标':'实现独立的线上一整套“评估-管理-干预”方案'
						},
						{
							'个人行动':'以技术的身份参加了项目会议，主动与第三方运营公司对接。根据需求梳理用户路径与页面流程，完成前端代码，对关键业务流程用公众平台工具we分析埋点，对平台埋点数据和公司数据库分析(python + sql)用户行为、用户画像和转化漏斗，每月产出数据分析报告，辅助罗氏和第三方运营公司制定运营策略'
						},
						{
							'项目结果':'体检活动上线两个月内，完成了255位用户的记忆健康体检；通过公众号文章PGC与注册人数的关系，帮助第三方运营公司及时调整PGC，增加注册数'
						}
					]
				}
			],
			duties:['国内外投融资路演及对接(天使轮、天使+轮)','企业合作洽谈','老博会参展','SCI论文实验数据分析和撰写','海外商务洽谈','参与公司CXO天使+轮商业模式的探讨','公众号文章撰写','参加留学生创业培训','中小企业培训']
		}
	]
	var html_career = []
	
	for(let career in career_list){
		html_career.push('<div class="info_container">')
		var html_text = ''
		html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + career_list[career].date_tag[0] + '</div><div class="date_box_btm">' + career_list[career].date_tag[1] + '</div></div></div>'
			html_text += '<div class="main">'
				
				html_text += '<div class="place_name">'
				html_text += career_list[career].company
				html_text += '</div>'
				
				
				html_text += '<div class="main_tag">'
				html_text += career_list[career].role
				html_text += '</div>'
				
				html_text += '<div class="main_year_tag">'
				html_text += career_list[career].date
				html_text += '</div>'
				
				html_text += '<div class="main_subsection_title">项目经历</div>'
				html_text += '<div class="main_project_container">'
				for(let project_indiv in career_list[career].projects){
					html_text += '<div class="main_project_name">'
					html_text += career_list[career].projects[project_indiv].project_name
					html_text += '</div>'
					html_text += '<div class="main_project_discription_container">'
					for(let project_dis in career_list[career].projects[project_indiv].project_discription){
						html_text += '<div class="main_project_discription_line">'
							html_text += '<div class="main_project_discription_line_tag">'
							html_text += Object.keys(career_list[career].projects[project_indiv].project_discription[project_dis])[0]
							html_text += '</div>'
							
							html_text += '<div class="main_project_discription_line_text">'
							html_text += career_list[career].projects[project_indiv].project_discription[project_dis][Object.keys(career_list[career].projects[project_indiv].project_discription[project_dis])[0]]
							html_text += '</div>'
						html_text += '</div>'
					}
					html_text += '</div>'
					
				}
				html_text += '</div>'
				
				html_text += '<div class="main_subsection_title">其它工作内容与职责</div>'
				html_text += '<div class="main_year_course_container">'
				for(let duty in career_list[career].duties){
					html_text += '<div class="main_year_course">'
					html_text += career_list[career].duties[duty]
					html_text += '</div>'
				}
				html_text += '</div>'
				
				
			html_text += '</div>'
		html_career.push(html_text)
		html_career.push('</div>')
	}
	
	document.getElementById('career_js_anchor').innerHTML = html_career.join("");
}

function show_skills(){
	var skill_list = [
		{
			'编程CODING':[
				'Python','JS','XML','CSS','HTML','SQL','Linux'
			]
			
		},
		{
			'原型PROTOTYPE DESIGN':[
				'Axure','Adobe XD'
			]
		},
		{
			'其他OTHERS':[
				'Prism','LaTeX','Audition','Photoshop'
			]
		},
		{
			'实验WET & DRY LAB':[
				'RASPA计算机分子模拟','DNA提取','质粒提取','PCR','电泳','TA克隆','细胞培养','细菌培养','HPLC','UPLC','LC/MS','小鼠给药','小鼠与家兔解剖','家兔简单手术操作'
			]
		},
		{
			'语言LANGUAGES':[
				'英语','西班牙语(正在自学)','普通话','宁波话','上海话'
			]
		}
	]
	
	var html_skills = []
	for(let skill in skill_list){
		html_skills.push('<div class="info_container">')
		var html_text = ''
		
		var categories = Object.keys(skill_list[skill])[0]
		// html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + categories.substring(0,2) + '</div><div class="date_box_btm">' + categories.substring(2) +'</div></div></div>'
		html_text += '<div class="date_column"></div>'
		html_text += '<div class="main">'
		
		html_text += '<div class="place_name">'
		html_text += categories.substring(0,2)
		html_text += '</div>'
		
		html_text += '<div class="main_tag">'
		html_text += categories.substring(2)
		html_text += '</div>'
		
		html_text += '<div class="main_year_course_container">'
		for(let skill_indiv in skill_list[skill][categories]){
			html_text += '<div class="main_year_course">'
			html_text += skill_list[skill][categories][skill_indiv]
			html_text += '</div>'
		}
		html_text += '</div>'
		
		html_text += '</div>'
		html_skills.push(html_text)
		html_skills.push('</div>')
	}
	
	document.getElementById('skill_js_anchor').innerHTML = html_skills.join("");
}

function show_freelancing(){
	var career_list = [
		{
			company:'天津大学无障碍通用设计研究中心｜AUDRC',
			date_tag:['Nov.', '2021'],
			role:'全栈工程师',
			date:'(11/2021 - 03/2022)',
			projects:[
				{
					project_name:'无障碍通用标识环境设计实验web端',
					project_discription:[
						{
							'项目背景':'天津大学无障碍通用设计研究中心关于标识空间环境的课题'
						},
						{
							'项目目标':'搭建一实验和计算机辅助设计平台。前者研究面向视障老年人群体的标识环境空间设计，需要实现信息录入、随机出题、大体量数据记录与分析等功能;后者则是用于辅助设计师进行标识色彩组合的搭配。'
						},
						{
							'个人行动':'前期的论文研究和功能、界面流程的梳理，HBuilder X前端代码和云数据库的建立，及原始数据清理、分析和可视化。'
						},
						{
							'项目结果':'<a href="http://signage.tju-audrc.cn/#/">交付后</a>，辅助设计部分被用于申请专利，整个研究被剑桥大学Inclusive Design Toolkit team报道'
						}
					]
				}
			],
		}
	]
	var html_career = []
	
	for(let career in career_list){
		html_career.push('<div class="info_container">')
		var html_text = ''
		html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + career_list[career].date_tag[0] + '</div><div class="date_box_btm">' + career_list[career].date_tag[1] + '</div></div></div>'
			html_text += '<div class="main">'
				
				html_text += '<div class="place_name">'
				html_text += career_list[career].company
				html_text += '</div>'
				
				
				html_text += '<div class="main_tag">'
				html_text += career_list[career].role
				html_text += '</div>'
				
				html_text += '<div class="main_year_tag">'
				html_text += career_list[career].date
				html_text += '</div>'
				
				html_text += '<div class="main_subsection_title">项目经历</div>'
				html_text += '<div class="main_project_container">'
				for(let project_indiv in career_list[career].projects){
					html_text += '<div class="main_project_name">'
					html_text += career_list[career].projects[project_indiv].project_name
					html_text += '</div>'
					html_text += '<div class="main_project_discription_container">'
					for(let project_dis in career_list[career].projects[project_indiv].project_discription){
						html_text += '<div class="main_project_discription_line">'
							html_text += '<div class="main_project_discription_line_tag">'
							html_text += Object.keys(career_list[career].projects[project_indiv].project_discription[project_dis])[0]
							html_text += '</div>'
							
							html_text += '<div class="main_project_discription_line_text">'
							html_text += career_list[career].projects[project_indiv].project_discription[project_dis][Object.keys(career_list[career].projects[project_indiv].project_discription[project_dis])[0]]
							html_text += '</div>'
						html_text += '</div>'
					}
					html_text += '</div>'
					
				}
				html_text += '</div>'
				
			html_text += '</div>'
		html_career.push(html_text)
		html_career.push('</div>')
	}
	
	document.getElementById('freelancing_js_anchor').innerHTML = html_career.join("");
}

function show_intern(){
	var intern_list = [
		{
			company:'彬彬教育',
			date_tag:['Apr.', '2020'],
			role:'海外导师(兼职)',
			date:'(04/2020 - 04/2021)',
			projects:[
				{
					project_name:'线上留学辅导',
					project_discription:[
						'辅导AP生物',
						'为想要出国留学的学生提供建议',
					]
				}
			]
		},
		{
			company:'药明康德',
			date_tag:['May', '2019'],
			role:'分子生物学实习生',
			date:'(05/2019 - 09/2019)',
			projects:[
				{
					project_name:'罕见病动物模型建立',
					project_discription:[
						'基因测序罕⻅病小鼠和大鼠转基因模型',
						'熟悉了包括PCR引物设计、CRISPR-Cas9 sgRNA和ssDNA的设计在内的分子生物学技术'
					]
				}
			]
		}
	]
	var html_intern = []
	
	for(let intern in intern_list){
		html_intern.push('<div class="info_container">')
		// console.log(edu_list[edu])
		var html_text = ''
		html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + intern_list[intern].date_tag[0] + '</div><div class="date_box_btm">' + intern_list[intern].date_tag[1] + '</div></div></div>'
			html_text += '<div class="main">'
				
				html_text += '<div class="place_name">'
				html_text += intern_list[intern].company
				html_text += '</div>'
				
				html_text += '<div class="main_tag">'
				html_text += intern_list[intern].role
				html_text += '</div>'
				
				html_text += '<div class="main_year_tag">'
				html_text += intern_list[intern].date
				html_text += '</div>'
				
				html_text += '<div class="main_subsection_title">职责</div>'
				html_text += '<div class="main_project_container">'
				for(let project_indiv in intern_list[intern].projects){
					html_text += '<div class="main_project_name">'
					html_text += intern_list[intern].projects[project_indiv].project_name
					html_text += '</div>'
					html_text += '<div class="main_project_discription_container">'
					for(let project_dis in intern_list[intern].projects[project_indiv].project_discription){
						html_text += '<div class="main_project_discription_line">'
							html_text += '<div class="main_project_discription_line_bullet">'
							html_text += '</div>'
							
							html_text += '<div class="main_project_discription_line_text">'
							html_text += intern_list[intern].projects[project_indiv].project_discription[project_dis]
							html_text += '</div>'
						html_text += '</div>'
					}
					html_text += '</div>'
					
				}
				html_text += '</div>'
				
			html_text += '</div>'
		html_intern.push(html_text)
		html_intern.push('</div>')
	}
	
	document.getElementById('intern_js_anchor').innerHTML = html_intern.join("");
}