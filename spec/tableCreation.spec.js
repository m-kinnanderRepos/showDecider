import {createTable} from '../src/js/tableCreation.js'

describe("tableCreation", function() {
    var beginTableTheadTr = `
    <table class="table table-striped" id="myTable"><thead><tr>`
    var endTrTheadBeginBody = `</tr></thead><tbody><tr>`
    var endTrTBodyTable = `</tr></tbody></table>`

    var headerText = `<th scope="col">Header</th>`
    var bodyText = `<th scope="row">Body</th>`

    describe("When creating an empty table", function(){
      it("table should have no data", function() {
          var createdEmptyTable = createTable([], [[]], 'myTable')
          var emptyTable = beginTableTheadTr + endTrTheadBeginBody + endTrTBodyTable
          expect(createdEmptyTable.replace(/\s/g, '') === emptyTable.replace(/\s/g, '')).toBe(true)
      });
    });

    describe("When creating a table with one column and one row", function(){
        it("table should have one column and one row", function() {
            var createdOneColumnOneRow = createTable(['Header'], [['Body']], 'myTable')
            var oneColumnOneRow = beginTableTheadTr + headerText + 
                endTrTheadBeginBody + bodyText + endTrTBodyTable
            expect(createdOneColumnOneRow.replace(/\s/g, '') === oneColumnOneRow.replace(/\s/g, ''))
            .toBe(true)
        });
      });
  });