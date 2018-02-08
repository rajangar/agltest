QUnit.test( "people()", function( assert ) {
  assert.deepEqual(people([{"name":"Bob","gender":"Male","age":23,"pets":[{"name":"Garfield","type":"Cat"},{"name":"Fido","type":"Dog"}]},{"name":"Jennifer","gender":"Female","age":18,"pets":[{"name":"Garfield","type":"Cat"}]},{"name":"Steve","gender":"Male","age":45,"pets":null}]), [{"gender":"Male","cats":["Garfield"]},{"gender":"Female","cats":["Garfield"]}]);
  assert.deepEqual(people([]), []);
  assert.deepEqual(people([{"gender":"Male","pets":[{"name":"abc","type":"Cat"},{"name":"abc","type":"Cat"}]}]), [{"gender":"Male","cats":["abc"]}]);
});