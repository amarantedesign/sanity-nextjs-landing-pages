export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5db30c0c785db928f726c180',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o7m88szu',
                  apiId: 'c0940bd9-6db0-4c50-b469-8347e7eb5b70'
                },
                {
                  buildHookId: '5db30c0c1cf1ef0a6ab3c694',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ibjuzrcv',
                  apiId: 'd86a096f-5563-4bae-a10b-54fc2601912b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amarantedesign/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ibjuzrcv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
