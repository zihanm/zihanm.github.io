function show_education(){
	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	var edu_list = [
		{
			uni:'University of Cambridge',
			date_tag:['Sept.', '2019'],
			major:'MPhil in Biotechnology',
			date:'(10/2019 - 09/2020)',
			score:'',
			courses:['Biotechnology','Biophysics','Biomaterials','Pharmaceutical Engineering','Bionanotechnology','Management of Technology'],
			projects:[
				{
					project_name:'A Systems Biology Approach to Investigate the Role of Cholesterol in Neurodegenerative Diseases',
					project_discription:[
						'Engaged in a systems-biology project to investigate and model the role of cholesterol in neurodegenerative diseases',
						'Specialized in Alzheimer’s pathology and worked closely with the computational team to convert metabolic networks into Petri nets, collect Michaelis–Menten parameters and other kinetic parameters for relevant enzymatic reactions, and integrate them into neuronal models',
						'Launched an outreach &nbsp;<a href="https://c3yrhckwpm.wixsite.com/neurodegenerative">website (VPN required) </a>&nbsp;to raise the awareness of neurodegenerative diseases among children',
					]
				},
				{
					project_name:'Metal-Organic Frameworks: Optimization of Cell Staining Technique for Cellular Uptake and Computational Characterization of Mesoporosity',
					project_discription:[
						'Investigated the cellular uptake pathways and intracellular fate of organic-framework composites prepared by encapsulation and technical methods; due to the COVID-19 pandemic, only the optimization of cell-staining conditions was completed',
						'Performed Monte Carlo molecular simulations to study the interactions between metal-organic frameworks and carrier molecules',
						'Publication:&nbsp;<a href="https://pubs.rsc.org/en/content/articlehtml/2022/cs/d0cs01414a">Linnane, E., Haddad, S., Melle, F., Mei, Z., & Fairen-Jimenez, D. (2022). The uptake of metal–organic frameworks: a journey into the cell. Chemical Society Reviews.</a>'
					]
				}
			]
		},
		{
			uni:'University of Michigan, Ann Arbor',
			date_tag:['Sept.', '2017'],
			major:'BS in Pharmaceutical Sciences',
			date:'(09/2017 - 05/2019)',
			score:'GPA:&nbsp;3.955/4.000',
			courses:['Pharmacy', 'Pharamceutical Sciences', 'Medicinal Chemistry','Biology','Biochemistry','Physiology','Chemistry'],
			projects:[
				{
					project_name:'Development of Analytical Methodologies and Characterization of Liposomal Generic Drugs',
					project_discription:[
						'Evaluated and compared in vitro the physicochemical properties, toxicity, and antifungal efficacy of the originator AmBisome®, two generics marketed in India, and one in-house generic under development.',
						'Assisted in establishing the in vitro release assay for Exparel® and evaluated its in vivo pharmacokinetics',
						'Presented the findings of the AmBisome® project at the School of Pharmacy research conference',
						'Publication:&nbsp;<a href="https://www.sciencedirect.com/science/article/pii/S0939641120302848?casa_token=vtsXpiiXEQ8AAAAA:YNKGqBFvbEuBsDwakgYK-741TsE5T1GYeKGlmAebpUYKBAJbf_ej0CYsflOSA0ZWhkPMowVPQw">Liu, Y., Mei, Z., Mei, L., Tang, J., Yuan, W., Srinivasan, S., ... & Schwendeman, A. S. (2020). Liu, Y., Mei, Z., Mei, L., Tang, J., Yuan, W., Srinivasan, S., ... & Schwendeman, A. S. (2020). Analytical method development and comparability study for AmBisome® and generic Amphotericin B liposomal products. European Journal of Pharmaceutics and Biopharmaceutics, 157, 241-249.</a>'
					]
				}
			]
		},
		{
			uni:'China Pharmaceutical University',
			date_tag:['Sept.', '2014'],
			major:'BS in Biotechnology',
			date:'(09/2014 - 06/2019)',
			score:'Graded Average:&nbsp;90.45/100',
			courses:['Inorganic Chemistry','Organic Chemistry','Analytical Chemistry','Physical Chemistry','Biochemistry','Molecular Biology','Physiology','Microbiology','Cell Biology','Pharmaceuticals','Pharmacology','Antibiotics','Immunology','Genetics'],
			projects:[
				{
					project_name:'Stepwise-release-based polymeric nanoparticles for overcoming tumor multidrug resistance',
					project_discription:[
						'Collaborated with four other undergraduates to design and prepare a liposome model drug with appropriate particle size and size distribution',
						'Co-authored the thesis for defense'
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
				
				html_text += '<div class="main_subsection_title">Projects</div>'
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
							
							html_text += '<div class="main_project_discription_line_text_en">'
							html_text += edu_list[edu].projects[project_indiv].project_discription[project_dis]
							html_text += '</div>'
						html_text += '</div>'
					}
					html_text += '</div>'
					
				}
				html_text += '</div>'
				
				
				html_text += '<div class="main_subsection_title">Courses</div>'
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
			company:'Unibest Industrial Co., Ltd.',
			date_tag:['Nov.', '2022'],
			sections:[
				{
					role:'Marketing and Project Manager',
					date:'(06/2024 - 09/2025)',
					projects:[
						{
							project_name:'FDF Technology Transfer & Distribution | Project Management',
							project_discription:[
								{
									'Background':'New client leads were obtained through online customer-acquisition channels; these prospects expressed interest in FDF-related technology transfer and distribution services, yet their specific needs and business models remained undefined.'
								},
								{
									'Objective':'Engage these new clients, gain an in-depth understanding of their requirements, deliver precise project solutions, and strive to secure the signing of key documents—CDA (Confidentiality Disclosure Agreement), MSA (Master Service Agreement), and TS (Term Sheet)—to advance collaboration.'
								},
								{
									'Actions':'First, conducted telephone conferences (TCs) and arranged offline meetings to communicate face-to-face with clients, thoroughly uncovering and clarifying their detailed needs. During this process, high-level risks were identified, including patent issues, regulatory policy constraints, and potential political factors. A comprehensive risk assessment and analysis were performed, followed by the formulation of corresponding mitigation strategies. Simultaneously, managed project scope by clearly defining and reasonably planning the work boundaries to ensure the clarity and feasibility of Objectives. Additionally, coordinated all relevant stakeholders through effective stakeholder management, ensuring smooth communication between the project team and clients while balancing and safeguarding the interests of all parties.'
								},
								{
									'Results':'Throughout project execution, successfully facilitated the collaboration of 28 FDF projects, comprising 1 biosimilar CDMO (Contract Development & Manufacturing) project, 1 medical-device registration project, 1 license-in project, 1 innovative-drug NewCo (new company) project, and over 20 formulation distribution and technology-transfer projects. The implementation of these projects generated significant business growth for the company and enhanced its market influence and competitiveness in the field of formulation technology transfer and distribution.'
								}
							]
						},{
							project_name:'FDF New Business&nbsp;|&nbsp;Lead Acquisition',
							project_discription:[
								{
									'Background':'To support the company’s new business initiatives—FDF licensing, NewCo creation, and distribution—global expansion of new client resources is required.'
								},
								{
									'Objective':'Responsible for developing new clients for FDF business; identify prospective buyers through multiple channels and enhance the company’s global market coverage and influence.'
								},
								{
									'Actions':'Tailored branding and project packaging based on FDF product characteristics, created targeted promotion plans; leveraged LinkedIn and the website for extensive promotional campaigns to raise company and product visibility; employed cold-outreach to proactively contact potential clients and actively expand the customer base.'
								},
								{
									'Results':'Successfully generated 15 new client leads spanning Europe, the Middle East, and Southeast Asia, laying a solid foundation for global expansion of the company’s formulation business and further advancing the development of the company’s new ventures.'
								}
							]
						}
					]
				},
				{
					role:'Digital Product and Operation (Management Trainee)',
					date:'(11/2022 - 06/2024)',
					projects:[
						{
						  project_name: 'Generic Drug Project Initiation & Digital Marketing | Data-Driven',
						  project_discription: [
						    {
						      'Background': 'The company needed to break away from traditional trading models and, through a data-driven “initiation–promotion–customer acquisition” closed loop, quickly identify high-value-added products in the highly competitive generic API/intermediate space and convert them into orders.'
						    },
						    {
						      'Objective': 'Integrate open-source regulatory data, customs intelligence and epidemiological indicators to build a quantitative project-initiation model; simultaneously run an independent-site SEO + B2B matrix to fully digitalize the entire chain of “select right product – content-driven leads – convert leads”.'
						    },
						    {
						      'Actions': '1. Automated scraping of openFDA, PubChem and other databases/APIs with Python, combined with customs data and epidemiology analysis to build a new-drug tracking & product-selection model;<br>2. Mapped ROS via Reaxys & PharmaIntelligence to filter out high-barrier, high-value intermediates;<br>3. Performed SEO on the independent site and authored disease-education + synthesis + pharma-market articles;<br>4. Deployed GA + Hotjar to track visitor behavior.'
						    },
						    {
						      'Results': '1. Initiated 16 API & intermediate pipelines in total;<br>2. For an HIV/AIDS drug example, narrowed down 10+ key intermediates from nearly 100 compounds and pushed CAS No. keywords to Google’s first page within one quarter;<br>3. Identified Argentine pharma company A through visitor behavior, which was successfully converted after sales follow-up;<br>4. Assisted the business team in presenting the project to a strategic supplier’s legal entity, indirectly facilitating the company’s equity investment.'
						    }
						  ]
						},
						{
							project_name:'Internal System Development&nbsp;|&nbsp;AI+ Full Stack',
							project_discription:[
								{
									'Background':'Against the backdrop of cost reduction and efficiency improvement, the company urgently needed a low-cost, multi-functional internal operations platform to meet diverse business needs such as document auditing, drug retrieval, and new-employee training.'
								},
								{
									'Objective':'Responsible for collecting and clarifying requirements, leveraging AI technologies to conduct full-stack development, and creating an integrated operations platform that encompasses company document auditing, drug retrieval, and new-employee training systems.'
								},
								{
									'Actions':'After collecting and clarifying requirements from all departments, fully utilized AI technologies and adopted a full-stack development approach; while balancing other responsibilities, arranged time rationally and advanced system development step by step.'
								},
								{
									'Results':'1. Deployed the Logistics Department file-approval system in ~2 weeks; aligned with audit requirements, recorded file-approval errors and operation logs in detail, enhancing accuracy and traceability.<br>2. Rolled out an exhibition mini-program in ~2 weeks; at offline events it lets sales staff instantly pull supplier data from the company ERP, quickly retrieve a drug’s FDA approval status and pharmacological profile, and tag/enter data for the one-stop service toolkit—boosting on-site efficiency and information accessibility.<br>3. Within ~1 week migrated Orange-Book lookup and toolkit functions from the exhibition mini-program to the online system, enabling business teams to operate them directly via WeCom during daily work and further streamlining staff workflows.<br>4. Launched a new-employee training system in ~2 weeks; select ESG-aligned materials were once released to the public (now offline). The system comprises a PC- and mobile-accessible learning platform that presents required content per department mandates, plus a back-end admin page with an HR/leadership-accessible visual dashboard, HR-controlled course-content management, and real-time tracking of onboarding progress—significantly raising training efficiency and management quality.<br>5. Deployed a finance dunning system in ~1 week; it pulls order data and automatically sends payment-reminder emails for finance.'
								}
							]
						},
						{
							project_name:'Quick New Product Selection&nbsp;|&nbsp;Business Enablement',
							project_discription:[
								{
									'Background':'Business team members generally lack a chemical background, making it difficult to quickly obtain pharmaceutical and chemical information that is critical to project progress.'
								},
								{
									'Objective':'Responsible for rapidly extracting pharmaceutical and chemical information to help business personnel quickly understand Backgrounds and empower business operations.'
								},
								{
									'Actions':'Conducted due-diligence on open-source APIs, developed various drug-analysis mini-tools in Python, and integrated them into a single software tool for easy information retrieval and analysis by business users.'
								},
								{
									'Results':'The scripts provide the following functions<br>1. Pharma customs-data analysis: in-depth mining of customs records successfully identified high-value-added products, providing precise direction for business expansion.<br>2. Clinical-application competitive landscape analysis for a specific drug—clearly mapped market distribution, enabling the business team to craft differentiated competitive strategies.<br>3. Conducted in-depth pipeline analysis of a target pharmaceutical company, comprehensively tracking R&D progress and product portfolio to supply critical evidence for partnership or competitive strategies—effectively bridging the non-chemistry background gap of the business team and accelerating project initiation.'
								}
							]
						},
						{
							project_name:'New ERP System Rollout | Project Management',
							project_discription:[
								{
									'Background':'The legacy ERP system suffered from on-prem deployment, incomplete functionality, and an uncooperative vendor, severely hindering operational efficiency and business growth; a new ERP system was urgently required.'
								},
								{
									'Objective':'Lead ERP selection and implementation: conduct due-diligence on market solutions, communicate requirements with shortlisted vendors, author a comprehensive business-case report, and present findings to leadership to drive the project forward.'
								},
								{
									'Actions':'Performed deep due-diligence on numerous ERP vendors, filtered candidates matching company needs; held detailed discussions on product features, functions, services, and solutions; authored a thorough business-case analysis evaluating the project from multiple dimensions and submitted the report to leadership.'
								},
								{
									'Results':'From early July to late September 2023—nearly three months—engaged 6–7 vendors, shortlisted and advanced proposals from 3. The final selection report systematically covered background, vendor profiles, solution & cost comparisons, ROI calculations & recommendations, and an ERP-based digitalization roadmap. Although leadership ultimately halted the project, the groundwork laid a solid foundation and accumulated valuable experience and resources for future ERP selection.'
								}
							]
						},
						{
							project_name:'Internal Corporate Investment | Due Diligence',
							project_discription:[
								{
									'Background':'Aligned with the company’s green-chemistry investment philosophy, the plan is to invest in an AIDD + green-chemistry startup; comprehensive due-diligence and a business plan (BP) are required to assess investment feasibility and define growth strategies.'
								},
								{
									'Objective':'Responsible for due-diligence on the target company’s pipeline competitive landscape; leverage customs-data analysis and similar tools to support market entry; follow the established “rapid project initiation” approach to identify additional product opportunities, enrich the BP, and help secure the angel-round investment.'
								},
								{
									'Actions':'Conducted in-depth due-diligence on the competitive landscape of sulfonamide drugs and several anthelmintic agents, analyzed the veterinary-drug market potential; used Python scripts to parse the Green Book, combined with the investee’s green-chemistry strengths, to pinpoint viable initiation products and strengthen the BP.'
								},
								{
									'Results':'Detailed due-diligence clearly mapped the competitive dynamics of sulfonamides and anthelmintics, estimated the attractiveness of entering the veterinary market, and provided critical evidence for investment decisions; successfully identified initiation products aligned with the company’s green-chemistry mandate, further refined the BP, offered solid support for the angel-round investment, and effectively advanced the investment project.'
								}
							]
						},
						{
							project_name:'Corporate Branding Upgrade | 20th Anniversary Rebrand',
							project_discription:[
								{
									'Background':'Marking the company’s 20th anniversary, a refreshed external branding was urgently needed to strengthen brand influence and attract a broader client base.'
								},
								{
									'Objective':'Lead the 20th-anniversary rebranding effort—including creating promotional assets—to elevate client awareness.'
								},
								{
									'Actions':'Coordinated the new logo design to ensure the new mark accurately conveys corporate values and culture; oversaw the bilingual corporate website build, liaising closely with the third-party team to secure on-time launch; produced targeted, bilingual slide decks—one each for innovative-drug clients, generic-drug clients, and CXO clients, plus two Master versions—showcasing the company’s product and service strengths.'
								},
								{
									'Results':'Delivered the new logo on schedule, laying the visual foundation for the 20th-anniversary upgrade; successfully launched both Chinese and English corporate websites, creating a digital gateway for domestic and global markets; delivered eight presentations in total—highlighting cutting-edge R&D for innovative-drug firms, efficient manufacturing & QC for generic-drug firms, and specialized pre-clinical & clinical services for CXO partners—meeting diverse client needs and comprehensively elevating the company’s market presence.'
								}
							]
						},
						{
							project_name:'Social Media Operation | SEO',
							project_discription:[
								{
									'Background':'To consolidate the company’s mature trading business, the product promotion website urgently needed higher exposure; monthly traffic was <1 k.'
								},
								{
									'Objective':'Lead SEO & social-media initiatives to boost website traffic, attract prospects, and enhance brand influence.'
								},
								{
									'Actions':'Performed technical SEO (code-level site & keyword optimization); ran monthly traffic analyses with Python to track trends and used heat-maps to study user paths; launched an “AI + Industry Insights” content series; built a LinkedIn ↔ site traffic loop.'
								},
								{
									'Results':'Within one year lifted monthly traffic from <1 k to >30 k, sharply raising online visibility and brand impact and laying a solid foundation for trading-business expansion.'
								}
							]
						}
					]
				}
			],
			duties:['Social Media Operation (WeChat OA + LinkedIn)','Corporate Digital Transformation','Investment Due Diligence','Product Promotion (SEO & new platform Reaxys)','AI Application Roll-out','Product Initiation','Translation for Subsidiary’s Overseas Client Meetings','Legacy ERP Maintenance']
		},
		{
			company:'Shanghai Neuroweave Technology',
			date_tag:['Sept.', '2020'],
			sections:[
				
				{
					role:'R&D Director (Board Memeber)',
					date:'(10/2021 - 10/2022)',
					projects:[
						{
							project_name:'Post-Operative Delirium Early-Warning System: Project Management | Product-Line Expansion',
							project_discription:[
								{
									'Background':'Post-operative delirium has a high incidence in the elderly yet is often overlooked, posing clinical challenges; timely identification of at-risk patients is critical for improving surgical outcomes.'
								},
								{
									'Objective':'Manage the post-operative delirium early-warning system project, devise an innovative assessment method through scientific research, and promote its clinical adoption.'
								},
								{
									'Actions':'Conducted thorough literature reviews, attended seminars, searched clinical trials, and—leveraging company technology—proposed a novel assessment approach; held regular stakeholder meetings to finalize solution workflows; built a data-analysis indicator framework aligned with WHO eHealth methodology.'
								},
								{
									'Results':'The system has been deployed in orthopedics and anesthesiology departments, enabling effective early warning of post-operative delirium and positively impacting patient outcomes while expanding the company’s product line.'
								}
							]
						},
						{
							project_name:'ADHD Indication Partnership: Project Management | Product-Line Expansion',
							project_discription:[
								{
									'Background':'A domestic ADHD diagnosis & treatment firm sought collaboration, aiming to leverage eye-tracking assessment tasks to raise clinical standards; our side was to supply technical support and jointly advance the initiative.'
								},
								{
									'Objective':'Manage the collaboration project, covering project delivery and assessment-task R&D, to ensure successful implementation and full partner satisfaction.'
								},
								{
									'Actions':'Conducted in-depth literature reviews, leveraged company strengths to pinpoint the optimal assessment paradigm; held regular, close communication with the partner to accurately capture pediatric ADHD assessment needs and craft a feasible solution workflow; actively drove the partner’s data collection and analysis efforts to guarantee data accuracy and validity.'
								},
								{
									'Results':'Achieved successful product launch and on-site deployment in ADHD clinics, effectively broadening the company’s product line, strengthening competitiveness in the ADHD field, and making a positive contribution to business growth and brand influence.'
								}
							]
						},
						{
							project_name:'AI Eye-Tracking Medical Device: Trajectory Analysis | Core Technology',
							project_discription:[
								{
									'Background':'Although AI eye-tracking can generate raw (x, y, t) time-series data, additional processing is required to extract clinically meaningful metrics that can serve as “digital biomarkers” for disease diagnosis and research.'
								},
								{
									'Objective':'Transform raw eye-tracking data into clinically relevant “digital biomarkers,” including saccade classification and disease-specific oculometric analyses, laying the groundwork for subsequent clinical validation.'
								},
								{
									'Actions':'Conducted thorough literature review to identify a saccade-classifier prototype; tailored it to company-specific eye-tracking tasks and authored classifier.py to label every gaze point in the raw (x, y, t) stream. Subsequently investigated MCI, ADHD, and ASD, computed specialized oculomotor parameters during task performance, and extracted “digital biomarkers” ready for clinical validation.'
								},
								{
									'Results':'classifier.py accurately distinguishes fixations, saccades, and smooth pursuit; blink.py reliably identifies blinks during tasks. Disease-focused studies yielded 29 digital biomarkers now deployed in pre-clinical (MCI/AD) and clinical (ADHD) research, providing robust support for diagnosis and advancing AI eye-tracking medical devices in healthcare.'
								}
							]
						},
						{
							project_name:'AI Eye-Tracking Medical Device Registration: Clinical Trials & Submission | Partnership Coordination',
							project_discription:[
								{
									'Background':'Successful clinical validation and regulatory submission of the medical device are key milestones for the company’s Pre-A funding round; pre-clinical and clinical studies must be designed and executed while coordinating all relevant partners to ensure a smooth submission pathway.'
								},
								{
									'Objective':'Design pre-clinical and Phase III protocols for MCI diagnosis using eye-tracking, drive study execution, and align stakeholders on the medical-device registration workflow.'
								},
								{
									'Actions':'Leveraged clinical-trial expertise to benchmark domestic and international protocols for similar devices; crafted pre-clinical and Phase III designs from statistical-power and diagnostic-validity perspectives; coordinated five-plus hospitals to initiate studies; liaised with CROs to lock submission timeline and procedures; worked with company CXOs to finalize classification strategy and product specifications.'
								},
								{
									'Results':'Secured three qualified hospitals for pre-clinical studies and obtained physician endorsement of the clinical protocol; aligned CXOs and CRO to finalize classification and product definition, laying a solid foundation for medical-device submission in the Pre-A round.'
								}
							]
						}
					]
				},
				{
					role:'Full Stack Product Manager',
					date:'(09/2020 - 10/2021)',
					projects:[
						{
								project_name:'BrainMate Memory-Family Care WeChat Mini-Program: Partnership & Customization | Data-Driven',
								project_discription:[
									{
										'Background':'Roche (Shanghai) organized memory-health screenings for employees and their families, but lacked on-site memory assessors; an online solution integrating “assessment–management–intervention” was required.'
									},
									{
										'Objective':'Participate as technical lead, coordinate with a third-party operator, deliver a customized solution, ensure data security, and leverage data analytics to inform operational decisions.'
									},
									{
										'Actions':'Led technical alignment with the third-party operator, mapped user journeys and page flows, and completed front-end code; instrumented key business steps via WeChat analytics, then analyzed event logs and company databases with Python + SQL; delivered monthly reports on user behavior, personas, and conversion funnels to guide operations; collaborated with the CTO to implement end-to-end encryption/decryption, safeguarding user data.'
									},
									{
										'Results':'Within two months of launch, 255 users completed memory-health screenings; PGC-vs-registration analysis informed the operator’s content strategy, boosting sign-ups and ensuring smooth project execution.'
									}
								]
							},
						{
							project_name:'BrainMate+ WeChat Mini-Program: V1.0→V2.0 Iteration | Product Thinking, Back to Needs',
							project_discription:[
								{
									'Background':'After launch, BrainMate+ Mini-Program suffered low user retention and urgently required optimization to boost stickiness.'
								},
								{
									'Objective':'Use product thinking to return to user needs, organize iterative development, and raise retention.'
								},
								{
									'Actions':'Thoroughly reviewed and decomposed each feature module; benchmarked domestic and global cognitive-training products and distilled findings into a detailed report for leadership; conducted questionnaires and one-on-one interviews with 20+ seniors to capture raw user needs; applied 5W2H & KANO to craft a roadmap covering social circles, in-house mall, etc.; authored PRDs and prototypes, drove front-end development, and collaborated with UI designers on multiple version updates.'
								},
								{
									'Project Result':'Worked hand-in-hand with UI designers to ship successive version releases, continuously optimizing modules and markedly improving UX—laying the groundwork for stronger user retention.'
								}
							]
						},
						{
							project_name:'BrainMate+ WeChat Mini-Program: 0→1 R&D & Development | Self-Taught “Full-Stack”',
							project_discription:[
								{
									'Background':'The company’s existing B2B business lacked a bridge to B2C; an online home-based intervention platform for seniors with cognitive impairment was needed to expand the business model.'
								},
								{
									'Objective':'Own full-stack development of the WeChat Mini-Program, building the product from 0→1 to enable the company’s B2B→B2C transition.'
								},
								{
									'Actions':'Synthesized 207+ domestic & international epidemiological studies into four categories of non-pharmacological interventions; designed a personalized adaptive-recommendation algorithm; created MVP prototypes after competitive analysis; self-taught front-end in one month, developed with HBuilder X, and leveraged uniCloud serverless to solve the absence of back-end engineers.'
								},
								{
									'Results':'Mini-Program successfully launched, establishing the B2B→B2C channel; recommendation algorithm filed as patent CN114038534A, delivering major contributions to both technological innovation and business-model expansion.'
								}
							]
						}
					]
				}
			],
			duties:['Domestic & international fundraising roadshows & investor matchmaking (Angel, Angel-plus rounds)', 'Business park & enterprise partnership negotiations', 'Senior-care expo participation','<a href="https://pubmed.ncbi.nlm.nih.gov/36633098/">Paper PMID: 36633098</a> &nbsp;Data analysis & manuscript writing','Disease-prediction and other ML models', 'Overseas business negotiations', 'Co-crafting CXO Angel-plus business model', 'WeChat OA article writing', 'Entrepreneurship training for overseas returnees', 'SME training programs']
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
					
					html_text += '<div class="main_subsection_title">Projects</div>'
					html_text += '<div class="main_project_container">'
					for(let project_indiv in career_list[career].sections[section].projects){
						html_text += '<div class="main_project_name">'
						html_text += career_list[career].sections[section].projects[project_indiv].project_name
						html_text += '</div>'
						html_text += '<div class="main_project_discription_container">'
						for(let project_dis in career_list[career].sections[section].projects[project_indiv].project_discription){
							html_text += '<div class="main_project_discription_line">'
								html_text += '<div class="main_project_discription_line_tag_en">'
								html_text += Object.keys(career_list[career].sections[section].projects[project_indiv].project_discription[project_dis])[0]
								html_text += '</div>'
								
								html_text += '<div class="main_project_discription_line_text_en">'
								html_text += career_list[career].sections[section].projects[project_indiv].project_discription[project_dis][Object.keys(career_list[career].sections[section].projects[project_indiv].project_discription[project_dis])[0]]
								html_text += '</div>'
							html_text += '</div>'
						}
						html_text += '</div>'
					}
					html_text += '</div>'
				}
				
				html_text += '<div class="main_subsection_title">Other Duties</div>'
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
			'CODING':[
				'Python','JS','XML','CSS','HTML','SQL','Linux'
			]
			
		},
		{
			'PROTOTYPE DESIGN':[
				'Axure','Adobe XD'
			]
		},
		{
			'WET & DRY LAB':[
				'RASPA computer molecular simulation',  
				'DNA extraction',  
				'Plasmid extraction',  
				'PCR',  
				'Electrophoresis',  
				'TA cloning',  
				'Cell culture',  
				'Bacterial culture',  
				'HPLC',  
				'UPLC',  
				'LC/MS',  
				'Mouse administration',  
				'Mouse & rabbit dissection',  
				'Basic rabbit surgical procedures'
			]
		},
		{
			'LANGUAGES':[
				'English (Proficient)','Spanish (Entry Level)','Mandarin (Mother Language)', 'Ningbo/Yuyao dialect (Native)', 'Shanghai dialect'
			]
		},
		{
			'OTHERS':[
				'PMP@PMI','Google Project Management (Coursera on-going)','Prism','LaTeX','Audition','Photoshop'
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
		
	
		
		html_text += '<div class="main_tag">'
		html_text += categories
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
			company:'Tianjin University Accessible & Universal Design Research Center｜AUDRC',
			date_tag:['Nov.', '2021'],
			role:'Full Stack Developer',
			date:'(11/2021 - 03/2022)',
			projects:[
				{
					project_name:'Inclusive Signage Environment Design Experiment Web Platform',
					project_discription:[
						{
							'Background':'The Tianjin University Accessible & Universal Design Research Center (AUDRC) was conducting a research project on signage spatial environments and urgently needed to build an experimental and computer-aided design platform. On the one hand, the platform had to enable in-depth exploration of signage spatial design for visually-impaired elderly groups, providing key functions such as data entry, random problem generation, and large-scale data recording and analysis. On the other hand, it needed to assist designers in optimizing signage color combinations and provide strong support for related design work.'
						},
						{
							'Objective':'Take full responsibility for the entire process from preliminary research to platform development, covering literature review, functional and interface workflow design, front-end code writing, cloud database construction, and data cleaning, analysis, and visualization, ensuring the platform meets the multifaceted needs of research and design assistance.'
						},
						{
							'Actions':'First, conducted in-depth preliminary literature research to identify required functional modules and interface workflows. Next, used HBuilder X to complete front-end code development and established a cloud database for efficient data storage and management. On the data side, meticulously cleaned raw data and employed professional tools and techniques for in-depth analysis and visualization, providing clear and intuitive data support for subsequent research and design work.'
						},
						{
							'Results':'<a href="http://signage.tju-audrc.cn/#/">Upon delivery</a>, the experimental module was successfully applied to a master’s thesis project, providing a powerful data collection and analysis tool for research on signage spatial design for visually-impaired elderly groups. The design-assistance module played a key role in two patent applications (CN114444960A; CN114444188A), effectively advancing innovation and development in the field of inclusive universal design.'
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
				
				html_text += '<div class="main_subsection_title">Projects</div>'
				html_text += '<div class="main_project_container">'
				for(let project_indiv in career_list[career].projects){
					html_text += '<div class="main_project_name">'
					html_text += career_list[career].projects[project_indiv].project_name
					html_text += '</div>'
					html_text += '<div class="main_project_discription_container">'
					for(let project_dis in career_list[career].projects[project_indiv].project_discription){
						html_text += '<div class="main_project_discription_line">'
							html_text += '<div class="main_project_discription_line_tag_en">'
							html_text += Object.keys(career_list[career].projects[project_indiv].project_discription[project_dis])[0]
							html_text += '</div>'
							
							html_text += '<div class="main_project_discription_line_text_en">'
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
			company:'BinBin Education',
			date_tag:['Apr.', '2020'],
			role:'Overseas Mentor (Part-time)',
			date:'(04/2020 - 04/2021)',
			projects:[
				{
					project_name:'Online Study-Abroad Tutoring',
					project_discription:[
						'Tutored AP Biology',
						'Provided guidance to students preparing to study abroad'
					]
				}
			]
		},
		{
			company:'WuXi AppTec',
			date_tag:['May', '2019'],
			role:'Molecular Biology Research Intern',
			date:'(05/2019 - 09/2019)',
			projects:[
				{
					project_name:'Establishment of Rare-Disease Animal Models',
					project_discription:[
						'Performed genetic sequencing of transgenic mouse and rat models for rare diseases',
						'Gained hands-on experience with molecular-biology techniques including PCR primer design, CRISPR-Cas9 sgRNA and ssDNA design'
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
				
				html_text += '<div class="main_subsection_title">Duties</div>'
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
							
							html_text += '<div class="main_project_discription_line_text_en">'
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
