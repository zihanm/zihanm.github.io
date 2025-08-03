function show_education(){
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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
						'论文题目:&nbsp;A Systems Biology Approach to Investigate the Role of Cholesterol in Neurodegenerative Diseases',
						'从事一个系统生物学的课题来研究和模拟胆固醇在神经退行性疾病中的作用',
						'专攻阿尔兹海默症的病理，并和计算机团队紧密沟通与合作，将代谢网络转化成petri网，搜集相关酶促反应的米氏方程参数和其它动力学参数，整合到神经元模型中',
						'制作一个<a href="https://c3yrhckwpm.wixsite.com/neurodegenerative">网站(需要翻墙)</a>来提升青少年对于神经退行性疾病的意识',
					]
				},
				{
					project_name:'金属有机框架物：细胞摄取的染色技术优化和孔特性的计算机模拟',
					project_discription:[
						'论文题目:&nbsp;Metal-Organic Frameworks: Optimization of Cell Staining Technique for Cellular Uptake and Computational Characterization of Mesoporosity',
						'研究包和技术制备的有机框架复合物的细胞摄取途径及其在细胞内命运，因新冠疫情的原因只完成细胞染色条件的优化',
						'运用计算机进行Monte Carlo分子模拟研究金属有机框架与载体分子的相互作用',
						'发表论文:&nbsp;<a href="https://pubs.rsc.org/en/content/articlehtml/2022/cs/d0cs01414a">Linnane, E., Haddad, S., Melle, F., Mei, Z., & Fairen-Jimenez, D. (2022). The uptake of metal–organic frameworks: a journey into the cell. Chemical Society Reviews.</a>'
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
						'发表论文:&nbsp;<a href="https://www.sciencedirect.com/science/article/pii/S0939641120302848?casa_token=vtsXpiiXEQ8AAAAA:YNKGqBFvbEuBsDwakgYK-741TsE5T1GYeKGlmAebpUYKBAJbf_ej0CYsflOSA0ZWhkPMowVPQw">Liu, Y., Mei, Z., Mei, L., Tang, J., Yuan, W., Srinivasan, S., ... & Schwendeman, A. S. (2020). Liu, Y., Mei, Z., Mei, L., Tang, J., Yuan, W., Srinivasan, S., ... & Schwendeman, A. S. (2020). Analytical method development and comparability study for AmBisome® and generic Amphotericin B liposomal products. European Journal of Pharmaceutics and Biopharmaceutics, 157, 241-249.</a>'
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
		var html_text = ''
		
		// Only show date_tag div if not on mobile
		if (!isMobile) {
			html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + edu_list[edu].date_tag[0] + '</div><div class="date_box_btm">' + edu_list[edu].date_tag[1] + '</div></div></div>'
		}
		
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
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	var career_list = [
		{
			company:'宁波优贝徳进出口有限公司｜Unibest',
			date_tag:['Nov.', '2022'],
			sections:[
				{
					role:'市场与项目经理',
					date:'(06/2024 - 09/2025)',
					projects:[
						{
							project_name:'制剂技术转移和分销&nbsp;|&nbsp;项目管理',
							project_discription:[
								{
									'项目背景':'在项目初期，通过线上拓客渠道获得了新客户 leads，这些潜在客户对制剂相关的技术转移和分销等服务表现出兴趣，但尚未明确具体需求和合作意向。'
								},
								{
									'项目目标':'与这些新客户进行对接，深入了解他们的需求，为客户提供精准的项目解决方案，并努力促成 CDA（保密协议）、MSA（主服务协议）和 TS（意向书）等关键文件的签署，从而推动项目合作的顺利开展。'
								},
								{
									'个人行动':'首先，通过电话会议（TC）以及安排线下见面的方式，与客户进行面对面的交流，深入挖掘并梳理他们的需求细节。在此过程中，识别出项目可能面临的高层次风险，包括专利问题、法规政策限制以及潜在的政治因素等。针对这些风险，进行全面的评估和分析，并制定了相应的风险应对策略。同时，负责项目范围管理，对项目的工作范围进行明确界定和合理规划，确保项目目标的清晰性和可行性。此外，积极协调各方相关利益者，通过有效的相关方管理，确保项目团队与客户之间的沟通顺畅，各方利益得到平衡和保障。'
								},
								{
									'项目结果':'在项目推进过程中，成功促成了 28 个制剂项目的合作，其中包括 1 个生物类似物 CDMO（合同开发与生产）项目，1 个医疗器械注册项目，1 个 license in（许可引进）项目，1 个创新药 NewCo（新公司）项目，以及 20 多个制剂分销和技术转移项目。这些项目的落地不仅为公司带来了显著的业务增长，也提升了公司在制剂技术转移和分销领域的市场影响力和竞争力。'
								}
							]
						},{
							project_name:'制剂业务&nbsp;|&nbsp;新客户开发(Acquisition)',
							project_discription:[
								{
									'项目背景':'为支持公司新业务发展 —— 制剂授权、NewCo 和分销，需在全球范围内拓展新客户资源。'
								},
								{
									'项目目标':'负责制剂业务新客户的开发工作，通过多种渠道寻找潜在买方，提升公司在全球市场的业务覆盖面和影响力。'
								},
								{
									'个人行动':'依据制剂产品特性，精心进行品牌与项目包装，制定针对性推广方案；利用领英与独立站开展广泛推广活动，提升公司及产品知名度；运用冷触达方式主动联系潜在客户，积极拓展客户群体。'
								},
								{
									'项目结果':'成功开发 15 个新客户 leads，广泛覆盖欧洲、中东和东南亚地区，为公司制剂业务的全球拓展奠定了坚实基础，进一步推动了公司新业务的发展进程。'
								}
							]
						}
					]
				},
				{
					role:'数字化产品与运营（管培）',
					date:'(11/2022 - 06/2024)',
					projects:[
						{
							project_name:'公司线上系统搭建&nbsp;|&nbsp;AI+全栈',
							project_discription:[
								{
									'项目背景':'在降本增效的大背景下，公司急需低成本搭建一个多功能的内部运作平台，以满足文件审计、药物检索、新员工培训等多种业务需求。'
								},
								{
									'项目目标':'负责收集并梳理需求，运用 AI 技术进行全栈开发，打造一个涵盖公司文件审计、药物检索、新员工培训系统等功能的综合运作平台。'
								},
								{
									'个人行动':'收集并梳理公司各部门的需求后，充分利用 AI 技术，采用全栈开发的方式，在同时兼顾其他工作的前提下，合理安排时间，逐步推进系统开发工作。'
								},
								{
									'项目结果':'1. 约半个月上线了单证部门文件审批系统，配合审计需求，详细记录文件审批的错误和操作记录，提高了文件审批的准确性和可追溯性；<br>2. 约半个月上线展会小程序，辅助业务员在线下参加展会时，能够及时查看公司 ERP 系统的供应商信息、快速了解某药物的 FDA 审批及药理信息，并为公司一站式服务工具箱提供了打标签的信息录入渠道，提升了业务员在展会中的工作效率和信息获取便捷性；<br>3. 约一周将展会小程序中的橙皮书查询及工具箱功能移至线上系统，以便于业务部门在日常工作时于企业微信端操作约一周将展会小程序中的橙皮书查询及工具箱功能移至线上系统，使业务部门在日常工作时能够便捷地在企业微信端操作，进一步方便了业务人员的工作流程；<br>4. 约两周上线了一个新员工培训系统，其中部分素材迎合公司对外开放的 ESG 原则，作为 “优贝徳商学院” 公开给社会群众（现已下线）。系统本身包括 PC 和移动端能够访问的学习平台，根据各部门的要求展示必学内容；一个后台管理页面，包括 HR 和领导可 access 的可视化看板，HR 操作的课程素材管理和新员工学习情况进度跟进等功能，有效提升了新员工培训的效率和管理水平；<br>5. 约一周上线财务催款系统，帮助财务根据订单数据、自动发送提醒付款邮件。'
								}
							]
						},
						{
							project_name:'快速立项&nbsp;|&nbsp;赋能业务',
							project_discription:[
								{
									'项目背景':'业务部门人员普遍缺乏化工背景，在项目推进过程中，难以快速获取对业务进展有关键帮助的医药化工信息。'
								},
								{
									'项目目标':'负责快速提炼医药化工信息，帮助业务部门人员快速了解业务项目背景，为业务赋能。'
								},
								{
									'个人行动':'通过尽调开源接口，运用 Python 开发各种药物分析小工具，并将这些工具汇聚在一个软件工具中，以便业务人员能够便捷地获取和分析相关信息。'
								},
								{
									'项目结果':'所开发的脚本共涵盖以下功能：<br>1. 某药企海关数据分析，通过深入分析海关数据，成功挖掘出高附加值产品，为业务拓展提供了精准方向；<br>2. 分析某药物在临床应用中的竞争格局，清晰呈现市场分布，助力业务团队制定差异化竞争策略；<br>3. 对某药企的管线进行深入分析，全面掌握其研发进度与产品布局，为业务合作或竞争策略提供关键依据，有效弥补了业务部门非化工背景的短板，推动了业务项目的快速推进。'
								}
							]
						},
						{
							project_name:'上新的ERP系统&nbsp;|&nbsp;项目管理',
							project_discription:[
								{
									'项目背景':'公司原有 ERP 系统存在本地部署、功能不齐全、ERP 厂商不配合等诸多问题，严重影响了公司的运营效率和业务发展，亟需引入新的 ERP 系统来解决现有问题。'
								},
								{
									'项目目标':'负责新 ERP 系统的选型与实施工作，包括对市面上 ERP 企业的尽调、与潜在厂商沟通需求、撰写 ERP 项目的商业可行性分析报告，并向领导层汇报，推动项目顺利进行。'
								},
								{
									'个人行动':'首先对市面上众多 ERP 企业进行深入尽调，筛选出符合公司需求的潜在厂商；然后与这些厂商积极沟通，详细了解他们的产品特点、功能、服务以及解决方案等；在此基础上，精心撰写了一份全面且详细的 ERP 项目的商业可行性分析报告，从多个维度对项目进行评估和分析，为领导层决策提供有力依据，并将该报告汇报给领导层。'
								},
								{
									'项目结果':'从 2023 年 7 月初到 9 月底，历时近 3 个月，累计沟通了 6、7 家厂商，成功入围并跟进方案的有 3 家厂商。在选型报告中，从背景、入选沟通的厂家基本情况、各家公司的方案比较与成本、方案 ROI 测算与推荐，以及最后基于 ERP 的数字化建设方案这几部分进行了系统阐述，尽管最后领导层告知项目中止，但前期的工作为公司新 ERP 系统的选型工作奠定了坚实基础，积累了宝贵的经验和资源。'
								}
							]
						},
						{
							project_name:'公司内部投资&nbsp;|&nbsp;公司尽调',
							project_discription:[
								{
									'项目背景':'在公司秉持绿色化学投资理念的背景下，计划投资一家 AIDD + 绿色化学公司，需配合完成尽调和商业计划书（BP）工作，以评估投资可行性和制定发展策略。'
								},
								{
									'项目目标':'负责尽调该公司管线产品的竞争格局，并结合海关数据分析等手段辅助开拓市场，同时延续公司已有的 “快速立项” 思路策略，挖掘可立项产品以完善 BP，助力达成天使轮投资目标。'
								},
								{
									'个人行动':'深入尽调磺胺类药物的市场竞争格局以及几个抗虫药的竞争格局，分析兽药市场的潜力；运用 Python 脚本分析绿皮书，结合被投公司绿色化学技术特点，寻找可立项产品，为完善 BP 提供有力支持。'
								},
								{
									'项目结果':'通过细致的尽调工作，清晰呈现了磺胺类药物和抗虫药的市场竞争态势，预估了入局兽药市场的潜力，为投资决策提供了关键依据；同时，成功找到符合公司绿色化学投资理念的可立项产品，进一步完善了 BP，为公司天使轮投资提供了有力保障，有效推动了投资项目的进展。'
								}
							]
						},
						{
							project_name:'公司对外形象建设&nbsp;|&nbsp;20周年新形象',
							project_discription:[
								{
									'项目背景':'公司迎来成立 20 周年的重要节点，急需通过打造全新的对外形象，强化品牌在市场中的影响力，吸引更广泛的客户群体。'
								},
								{
									'项目目标':'负责公司 20 周年新形象的塑造工作，包括制作相关的宣传素材，提升公司在客户心中的认知度。'
								},
								{
									'个人行动':'协调公司新 logo 设计工作，确保新 logo 能够准确传达公司的品牌理念和文化内涵；跟进集团网站的制作进程，与第三方制作团队保持密切沟通，保障网站的顺利开发与上线；根据不同目标客户群体的需求，精心制作了面向创新药企业客户、仿制药企业客户、CXO 企业客户的中英文新版 PPT，以及 2 份 Master 版本，全面展示公司的产品与服务优势。'
								},
								{
									'项目结果':'成功完成新 logo 设计并交付使用，为公司 20 周年形象升级奠定了基础；顺利上线集团中文官网和英文官网，为公司拓展国内外市场搭建了信息化桥梁；制作完成共计 8 份 PPT，其中面向创新药企业客户的 PPT 展示了公司在创新药物研发领域的前沿技术和解决方案，面向仿制药企业客户的 PPT 强调了公司在仿制药领域的高效生产与质量控制优势，面向 CXO 企业客户的 PPT 突出了公司在临床前研究、临床试验等环节的专业服务，有效满足了不同客户群体的多样化需求，全方位提升了公司的对外形象和市场竞争力。'
								}
							]
						},
						{
							project_name:'社交媒体运营&nbsp;|&nbsp;SEO',
							project_discription:[
								{
									'项目背景':'公司为夯实成熟贸易业务发展，需提升独立站曝光度，而当时独立站月曝光不足 1k，面临提升独立站流量的迫切需求。'
								},
								{
									'项目目标':'负责实施社交媒体运营与 SEO 优化策略，提升独立站曝光量，吸引潜在客户，增强品牌影响力。'
								},
								{
									'个人行动':'开展技术 SEO，优化网站 SEO 代码，提高网站在搜索引擎中的排名；执行月度流量分析，借助 Python 辅助精准评估流量变化趋势，同时结合第三方热力图进行用户行为分析，深入了解用户浏览习惯和行为路径，以便针对性优化网站布局和内容策略；设立并运营行业相关的 AI + 内容新板块，紧跟行业前沿趋势，为用户提供全面、深入且富有创新性的内容，提升网站吸引力；实现领英与独立站的联动，通过领英平台拓展社交网络，增加外部入口，引导流量至独立站，扩大品牌传播范围。'
								},
								{
									'项目结果':'在一年内，成功将独立站流量从不到 1k 显著提升，突破 30k，大幅提升了公司的网络可见度和品牌影响力，为贸易业务的拓展奠定了坚实基础，有效吸引了更多潜在客户，为公司的业务增长注入了新动力。'
								}
							]
						}
					]
				}
			],
			duties:['社交媒体运营（公众号+领英）','公司数字化转型','投资尽调','产品推广（<a href="www.unibestpharm.com">SEO</a>和新推广平台Reaxys）','公司内AI应用推行','产品立项','子公司国外客户会议翻译','老ERP维护']
		},
		{
			company:'上海织生科技有限公司｜NeuroWeave',
			date_tag:['Sept.', '2020'],
			sections:[
				
				{
					role:'研发总监（董事会成员）',
					date:'(10/2021 - 10/2022)',
					projects:[
						{
							project_name:'术后谵妄预警系统:项目管理&nbsp;|&nbsp;拓宽产品线',
							project_discription:[
								{
									'项目背景':'术后谵妄在老年人中发病率高，却被忽视，给临床带来挑战。及时发现潜在患者对改善手术预后意义重大。'
								},
								{
									'项目目标':'管理术后谵妄预警系统项目，通过科研手段，提出创新评估方法并推动其在临床应用。'
								},
								{
									'个人行动':'深入文献调研、参加讲座、检索临床试验，结合公司技术，提出新颖评估方法；定期与项目方沟通，确定解决方案流程；依据世卫组织 eHealth 方法，构建数据分析指标体系。'
								},
								{
									'项目结果':'该系统已在骨科和麻醉科投入使用，有效助力术后谵妄的早期预警，为改善患者手术预后发挥了积极作用。并且拓宽了公司的产品线。'
								}
							]
						},
						{
							project_name:'ADHD适应症合作:项目管理&nbsp;|&nbsp;拓宽产品线',
							project_discription:[
								{
									'项目背景':'一家国内 ADHD 诊疗公司寻求合作，期望利用眼动评估任务提升诊疗水平，我方需提供相关技术支持，共同推动项目开展。'
								},
								{
									'项目目标':'负责管理合作项目，涵盖项目推进与评估任务研发，确保项目顺利落地并满足合作方需求。'
								},
								{
									'个人行动':'深入调研文献，结合公司技术优势，精准定位评估范式；定期与合作方密切沟通，精准把握孩童 ADHD 评估需求，制定合理解决方案流程；积极推动合作公司开展数据收集与分析工作，确保数据的准确性和有效性。'
								},
								{
									'项目结果':'成功实现产品上线，并在 ADHD 诊疗机构顺利落地应用，有效拓宽了公司的产品线，增强了公司在 ADHD 诊疗领域的市场竞争力，为公司的业务拓展和品牌影响力提升做出了积极贡献。'
								}
							]
						},
						{
							project_name:'AI眼动医疗器械:轨迹分析&nbsp;|&nbsp;底层技术',
							project_discription:[
								{
									'项目背景':'AI 眼动追踪新技术虽能获取原始 (x, y, t) 系列数据，但需进一步加工提取对临床有意义的指标，以作为 “数字生物标记物”，为相关疾病诊断、研究提供依据。'
								},
								{
									'项目目标':'负责将原始眼动数据转化为临床有意义的 “数字生物标记物”，包括眼跳分类、特定疾病眼动参数分析等工作，为后续临床验证奠定基础。'
								},
								{
									'个人行动':'通过深入文献调研，找到合适眼跳分类器雏形，结合公司眼动任务特征，编写分类器. py，配合后端分析原始注视点 (x, y, t) 数据，对每个注视点精准打标签。后续针对 MCI、ADHD、ASD 等特定神经系统疾病展开调研，结合评估范式，对任务过程中的眼动参数进行专业计算分析，提取 “数字生物标记物”，为临床验证做好准备。'
								},
								{
									'项目结果':'制作的分类器. py 能精准区分凝视、眼跳、平缓追踪等主要眼动行为，眨眼. py 能有效鉴别任务过程中的眨眼情况。在后续疾病应用研究中，成功计算得到 29 个 “数字生物标记物”，目前这些成果已投入临床前 (MCI/AD) 和临床 (ADHD) 研究，为相关疾病的诊断和研究提供了有力支持，推动了 AI 眼动医疗器械在医疗领域的应用发展。'
								}
							]
						},
						{
							project_name:'AI眼动医疗器械申报:临床试验与申报&nbsp;|&nbsp;合作对接',
							project_discription:[
								{
									'项目背景':'医疗器械的临床和申报是公司 pre - A 轮融资的重要目标，需要设计并推动医疗器械临床前与临床试验，同时对接相关合作方以确保申报流程的顺利进行。'
								},
								{
									'项目目标':'负责设计眼动用于 MCI 诊断的临床前研究方案与 3 期临床方案，推进试验展开，并协同各方确定医疗器械的申报流程。'
								},
								{
									'个人行动':'结合药物临床试验知识，调研国内外类似产品临床试验方案，从统计学、诊断有效性等角度设计临床前及 3 期临床方案；协同 5 家以上医院推进试验；对接 CRO 公司，确定申报流程与临床时间安排；与公司 CXO 携手明确分类鉴定方向及产品定型目标。'
								},
								{
									'项目结果':'成功对接 3 家可开展临床前研究的医院，所设计临床方案获医生认可。在医疗器械申报方面，协同公司 CXO 及 CRO 公司，确定了分类鉴定方向与产品定型目标，为公司 pre - A 轮融资的医疗器械申报工作奠定了坚实基础。'
								}
							]
						}
					]
				},
				{
					role:'全栈产品经理',
					date:'(09/2020 - 10/2021)',
					projects:[
						{
							project_name:'脑倍佳记忆家庭管理 微信小程序:合作对接与定制化&nbsp;|&nbsp;数据驱动',
							project_discription:[
								{
									'项目背景':'罗氏制药（上海）为员工及家属举办记忆健康体检，但缺乏线下记忆评估师，需要线上解决方案实现 “评估 - 管理 - 干预” 全流程。'
								},
								{
									'项目目标':'以技术身份参与项目，对接第三方运营公司，开发定制化方案，确保数据安全，并利用数据分析辅助运营决策。'
								},
								{
									'个人行动':'主动与第三方运营公司对接，梳理用户路径与页面流程，完成前端代码开发；通过公众平台工具进行关键业务流程埋点，运用 Python + SQL 对埋点数据及公司数据库进行分析，每月产出报告，洞察用户行为、画像和转化漏斗，为运营策略提供数据支持；与 CTO 配合完成数据加密解密工作，保障用户数据安全。'
								},
								{
									'项目结果':'体检活动上线两个月内，完成 255 位用户的记忆健康体检；基于公众号文章 PGC 与注册人数关系分析，助力第三方运营公司优化 PGC，有效提升注册数，推动项目顺利开展。'
								}
							]
						},
						{
							project_name:'脑倍佳+ 微信小程序:V1.0到V2.0迭代&nbsp;|&nbsp;产品思维，回归需求',
							project_discription:[
								{
									'项目背景':'脑倍佳 + 微信小程序上线后，用户留存表现不佳，急需优化迭代以提升用户粘性。'
								},
								{
									'项目目标':'通过产品思维，回归用户需求，组织迭代开发工作，提高用户留存率。'
								},
								{
									'个人行动':'深入复盘并拆解功能模块，对国内外认知训练领域产品进行深入分析，整理成详细文档汇报，为决策层提供迭代方向建议。通过问卷和一对一老年人深度交流，访谈 20 余位长者，精准把握用户原始需求。运用 5W2H 和 KANO 方法，制定版本规划，涵盖社交圈子、自营商城等功能的开发，完成 PRD 和原型图设计，推进前端开发工作，协同 UI 设计师完成多个版本更新。'
								},
								{
									'项目结果':'在迭代过程中，与 UI 设计师紧密配合，陆续上线多个版本更新，功能模块不断优化，用户体验显著提升，为改善用户留存奠定了基础。'
								}
							]
						},
						{
							project_name:'脑倍佳+ 微信小程序:0到1的研发与开发&nbsp;|&nbsp;自学成"全栈"',
							project_discription:[
								{
									'项目背景':'公司已有的 toB 业务，缺乏从 toB 到 toC 的有效途径，需要搭建一个面向认知障碍老人的线上居家干预平台，实现商业模式的拓展。'
								},
								{
									'项目目标':'负责该微信小程序的全栈开发，从 0 到 1 打造产品，实现公司 toB 再 toC 的商业模式转变。'
								},
								{
									'个人行动':'依据 207 + 国内外流行病学研究文献，汇总 4 大类非药物干预方案，设计个性化自适应推荐算法；通过竞品分析，完成 MVP 原型图设计；花一个月自学前端开发，借助 Hbuilder X 完成开发，并利用 unicloud 云开发解决公司无后端工程师的困境。'
								},
								{
									'项目结果':'小程序成功上线，打通了 toB 到 toC 的业务链路；推荐算法申请专利 CN114038534A，为公司技术创新与商业模式拓展做出突出贡献。'
								}
							]
						}
						
					]
				}
			],
			duties:['国内外投融资路演及对接(天使轮、天使+轮)','园区、企业合作洽谈','老博会参展','<a href="https://pubmed.ncbi.nlm.nih.gov/36633098/">论文PMID: 36633098</a>实验数据分析和撰写','疾病预测模型等其它机器学习模型','海外商务洽谈','参与公司CXO天使+轮商业模式的探讨','公众号文章撰写','参加留学生创业培训','参加中小企业培训']
		}
	]
	var html_career = []
	
	for(let career in career_list){
		html_career.push('<div class="info_container">')
		var html_text = ''
		
		// Only show date_tag div if not on mobile
		if (!isMobile) {
			html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + career_list[career].date_tag[0] + '</div><div class="date_box_btm">' + career_list[career].date_tag[1] + '</div></div></div>'
		}
		
		html_text += '<div class="main">'
				
				html_text += '<div class="place_name">'
				html_text += career_list[career].company
				html_text += '</div>'
				
				
				for(let section in career_list[career].sections) {
					html_text += '<div class="main_tag">'
					html_text += career_list[career].sections[section].role
					html_text += '</div>'
					
					html_text += '<div class="main_year_tag">'
					html_text += career_list[career].sections[section].date
					html_text += '</div>'
					
					html_text += '<div class="main_subsection_title">项目经历</div>'
					html_text += '<div class="main_project_container">'
					for(let project_indiv in career_list[career].sections[section].projects){
						html_text += '<div class="main_project_name">'
						html_text += career_list[career].sections[section].projects[project_indiv].project_name
						html_text += '</div>'
						html_text += '<div class="main_project_discription_container">'
						for(let project_dis in career_list[career].sections[section].projects[project_indiv].project_discription){
							html_text += '<div class="main_project_discription_line">'
								html_text += '<div class="main_project_discription_line_tag">'
								html_text += Object.keys(career_list[career].sections[section].projects[project_indiv].project_discription[project_dis])[0]
								html_text += '</div>'
								
								html_text += '<div class="main_project_discription_line_text">'
								html_text += career_list[career].sections[section].projects[project_indiv].project_discription[project_dis][Object.keys(career_list[career].sections[section].projects[project_indiv].project_discription[project_dis])[0]]
								html_text += '</div>'
							html_text += '</div>'
						}
						html_text += '</div>'
					}
					html_text += '</div>'
				}
				
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
			'实验WET & DRY LAB':[
				'RASPA计算机分子模拟','DNA提取','质粒提取','PCR','电泳','TA克隆','细胞培养','细菌培养','HPLC','UPLC','LC/MS','小鼠给药','小鼠与家兔解剖','家兔简单手术操作'
			]
		},
		{
			'语言LANGUAGES':[
				'英语','西班牙语(正在自学)','普通话','宁波话','上海话'
			]
		},
		{
			'其他OTHERS':[
				'PMP@PMI','谷歌项目管理','Prism','LaTeX','Audition','Photoshop'
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
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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
							'项目背景':'天津大学无障碍通用设计研究中心开展关于标识空间环境的课题研究，亟需搭建实验与计算机辅助设计平台，一方面针对视障老年人群体的标识环境空间设计展开深入探究，实现信息录入、随机出题以及大体量数据记录与分析等关键功能；另一方面助力设计师优化标识色彩组合搭配，为相关设计工作提供有力支持。'
						},
						{
							'项目目标':'承担从前期研究到平台开发的一系列工作，涵盖论文研究、功能及界面流程梳理、前端代码编写、云数据库搭建，以及数据的清理、分析和可视化呈现，确保平台能够满足课题研究与设计辅助的多重需求。'
						},
						{
							'个人行动':'先是深入开展前期论文研究，梳理出平台所需的功能模块与界面流程；接着运用 HBuilder X 完成前端代码编写，并建立云数据库以实现数据的高效存储与管理；在数据处理方面，对原始数据进行细致清理，运用专业工具和技术手段进行深入分析及可视化呈现，为后续的研究和设计工作提供清晰、直观的数据支撑。'
						},
						{
							'项目结果':'<a href="http://signage.tju-audrc.cn/#/">平台交付后</a>，实验部分成功应用于硕士课题研究，为视障老年人群体的标识环境空间设计研究提供了有力的数据收集与分析工具；辅助设计部分则在专利申请（CN114444960A；CN114444188A）中发挥了重要作用，有效推动了无障碍通用设计领域的创新与发展。'
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
		
		// Only show date_tag div if not on mobile
		if (!isMobile) {
			html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + career_list[career].date_tag[0] + '</div><div class="date_box_btm">' + career_list[career].date_tag[1] + '</div></div></div>'
		}
		
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
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	var intern_list = [
		/* {
			company:'一郎软件',
			date_tag:['Oct.', '2022'],
			role:'数据分析师(兼职)',
			date:'(10/2022 - 至今)',
			projects:[
				{
					project_name:'数据分析',
					project_discription:[
						'接单的形式，根据需求进行数据分析（excel和python）'
					]
				}
			]
		}, */
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
			role:'分子生物学研究员实习生',
			date:'(05/2019 - 09/2019)',
			projects:[
				{
					project_name:'罕见病动物模型建立',
					project_discription:[
						'基因测序罕见病小鼠和大鼠转基因模型',
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
		
		// Only show date_tag div if not on mobile
		if (!isMobile) {
			html_text += '<div class="date_column"><div class="date_box"><div class="date_box_top">' + intern_list[intern].date_tag[0] + '</div><div class="date_box_btm">' + intern_list[intern].date_tag[1] + '</div></div></div>'
		}
		
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
