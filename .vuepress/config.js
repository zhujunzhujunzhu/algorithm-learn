module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {
        text: '算法',
        link: '/'
      }
    ],
    sidebar: {
      '/': [
        {
          title: '',
          collapsable: false,
          children: [
            '/linkedList',
            '/tree'
          ]
        }
      ],

    }
  }
}