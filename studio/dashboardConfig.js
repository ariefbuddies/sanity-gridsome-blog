export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc3c14eb9a514129ec630df',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-gde2cto9',
                  apiId: '81f5ca4e-e779-4f60-b782-7ef74115f2a0'
                },
                {
                  buildHookId: '5fc3c14e9ad37beb86257c06',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-xpgs2idw',
                  apiId: '6edd1ae6-f4e7-4c87-a101-0fd37f5b3275'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ariefbuddies/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-xpgs2idw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
