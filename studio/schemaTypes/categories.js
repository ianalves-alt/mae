import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'category',

  title: 'Categorias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descricao',
      type: 'text',
    }),
  ],
})
