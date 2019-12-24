let Browser = require('zombie');
let assert = require('chai').assert;
let browser;
suite('Crosspage tests', ()=>{
  setup(function(){
    browser=new Browser()
  });

  test('request prices for the groups from the tour page on the river Hood' + 'must fill the referrer field',
    function(done){
      let referrer = 'http://localhost:3000/tours/hood-river';
      browser.visit(referrer, function(){
        browser.clickLink('.requestGroupRate', function(){
          assert(browser.field('referrer').value === referrer);
          done();
        });
      });
    });

    test('request prices for groups from the course page' + 'pansion Oregon Coast must' + 'fill the field of the referrer',
      function(done){
        browser.visit(referrer, function(){
          browser.clickLink('.requestGroupRate', function(){
            assert(browser.field('referrer').value === referrer);
            done();
          })
        })
      })

    test('visit page Request price for groups directly' + 'must show an empty field of the referrer',
      function(done){
        browser.visit('http://localhost:3000/tours/request-group-rate', function(){
          assert(browser.field('referrer').value === '');
          done();
        });
      });
})
