suite('Global Tests', function(){
  test('That is an appropriate title', function(){
    assert(document.title && document.title.match(/\S/) && document.title.toUpperCase()!=='TODO');
  });
})
