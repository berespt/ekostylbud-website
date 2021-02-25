export default {
  cms_manual_init: true,
  backend: {
    name: 'git-gateway',
    repo: 'berespt/ekostylbud-website',
    branch: 'master',
  },
  locale: 'pl',
  media_folder: 'public/img',
  public_folder: 'img',
  logo_url: 'https://ekostylbud.netlify.app/img/logo-cms.jpg',
  site_url: 'https://ekostylbud.netlify.app',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'src/content/pages/home.md',
          fields: [
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Hero Image',
              name: 'hero_image',
              widget: 'image',
            },
            {
              label: 'Client title',
              name: 'client_title',
              widget: 'string',
            },
            {
              label: 'Clients',
              name: 'clients',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'posts',
      label: 'Posts',
      folder: 'src/content/posts',
      create: true,
      slug: '{{slug}}',
      preview_path: 'posts/{{fields.slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
        },
        {
          label: 'Draft',
          name: 'draft',
          widget: 'boolean',
          default: true,
        },
        {
          label: 'Publish Date',
          name: 'date',
          widget: 'datetime',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Category',
          name: 'category',
          widget: 'string',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
        {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
        },
      ],
    },
  ],
};
