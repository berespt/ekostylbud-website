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
      label: 'Strony',
      files: [
        {
          label: 'Strona główna',
          name: 'home',
          file: 'src/content/pages/home.md',
          fields: [
            {
              label: 'Główny nagłowek',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Główny opis',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Główny obrazek',
              name: 'hero_image',
              widget: 'image',
            },
            {
              label: 'Nagłówek - klienci',
              name: 'client_title',
              widget: 'string',
            },
            {
              label: 'Klienci',
              name: 'clients',
              widget: 'list',
              fields: [
                {
                  label: 'Imię i Nazwisko',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Opinia',
                  name: 'description',
                  widget: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Nasze usługi',
          name: 'services',
          file: 'src/content/pages/services.md',
          fields: [
            {
              label: 'Główny nagłowek',
              name: 'services_title',
              widget: 'string',
            },
            {
              label: 'Główny opis',
              name: 'services_description',
              widget: 'markdown',
            },
            {
              label: 'Główny obrazek',
              name: 'services_image',
              widget: 'image',
            },
            {
              label: 'Usługi',
              name: 'services',
              widget: 'list',
            },
          ],
        },
        {
          label: 'Kontakt',
          name: 'contact',
          file: 'src/content/pages/contact.md',
          fields: [
            {
              label: 'Główny nagłowek',
              name: 'contact_title',
              widget: 'string',
            },
            {
              label: 'Główny opis',
              name: 'contact_description',
              widget: 'markdown',
            },
            {
              label: 'Główny obrazek',
              name: 'contact_image',
              widget: 'image',
            },
            {
              label: 'Adres',
              name: 'contact_address',
              widget: 'string',
            },
            {
              label: 'Telefon',
              name: 'contact_phone',
              widget: 'string',
            },
            {
              label: 'Email',
              name: 'contact_email',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Realizacje',
          name: 'portfolio',
          file: 'src/content/pages/portfolio.md',
          fields: [
            {
              label: 'Miejsca',
              name: 'places',
              widget: 'list',
              fields: [
                {
                  label: 'Nazwa',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Zdjęcia',
                  name: 'images',
                  widget: 'list',
                  fields: [
                    {
                      label: 'Zdjęcie',
                      name: 'src',
                      widget: 'image',
                    },
                    {
                      label: 'Szerokość',
                      name: 'width',
                      widget: 'string',
                    },
                    {
                      label: 'Wysokość',
                      name: 'height',
                      widget: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
