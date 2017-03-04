var pangu = require('pangu');

hexo.extend.filter.register('after_post_render', function(data) {
  data.title = pangu.spacing(data.title);
  data.content = pangu.spacing(data.content);
});
