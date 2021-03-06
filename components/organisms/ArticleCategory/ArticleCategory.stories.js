import ArticleCategory from './ArticleCategory.vue';
import { dummyCategoryBadge } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/ArticleCategory',
  component: ArticleCategory
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleCategory },
  template: '<article-category v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { category: dummyCategoryBadge.badge };
