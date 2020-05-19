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
                  buildHookId: '5ec45ae5557f7ad134b286cc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-image-bg-scale-studio',
                  apiId: '11abd153-0746-47fb-8ba8-8a7f602e578f'
                },
                {
                  buildHookId: '5ec45ae54ba50bc213696467',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-image-bg-scale',
                  apiId: 'acc6e45e-308f-46cb-8e67-c67a9693830b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kkhenriquez/sanity-nextjs-image-bg-scale',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-image-bg-scale.netlify.app', category: 'apps'}
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
