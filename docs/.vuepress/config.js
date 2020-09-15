module.exports = {
    title: 'dhr',
    head: [
        ['link', {rel: 'icon', href: 'https://open.weixin.qq.com/qr/code?username=a_javaboy'}]
    ],
    themeConfig: {
        logo: 'https://open.weixin.qq.com/qr/code?username=a_javaboy',
        nav: [
			{text: '首页', link: '/'},
			{text: 'java', link: 'http://www.javaboy.org'},
			{text: 'vue', link: 'http://www.itboyhub.com'},
			{text: '其他', items: [
				{text: '国际站', link: 'http://www.javaboy.org'},
				{text: '国内站', link: 'http://www.itboyhub.com'}
			]}
		],
        sidebar: [
		{
			title: 'JavaSE',
			path: '/javaSE/',
			collapsable: false,
			sidebarDepth: 2,
			children: [
				'/javaSE/javaSE-1'
				
			]
		},
		{
			title: 'JavaEE',
			path: '/javaEE/',
			collapsable: false,
			sidebarDepth: 2,
			children: [
				'/javaEE/javaEE-1',
			
			]
		},
		{
			title: 'springBoot',
			path: '/springBoot/',
			collapsable: false,
			sidebarDepth: 2,
			children: [
				'/springBoot/springBoot-1',
			
			]
		},
		{
			title: 'springCloud',
			path: '/springCloud/',
			collapsable: false,
			sidebarDepth: 2,
			children: [
				'/springCloud/springCloud-1',
			
			]
		},
		{
			title: '分布式',
			path: '/分布式/',
			collapsable: false,
			sidebarDepth: 2,
			children: [
				'/分布式/分布式-1',
				
			]
		},
		{
			title: '数据库',
			path: '/数据库/',
			collapsable: false,
			sidebarDepth: 2,
			children: [
				'/数据库/数据库-1',
				
			]
		},
	]
    },
	
}
