var pangu = require('pangu');

hexo.extend.filter.register('before_post_render', function(data) {
  data.title = pangu.spacing(data.title);
  data.content = pangu.spacing(data.content);
});
