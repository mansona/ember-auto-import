'use strict';

define("test-app/tests/acceptance/dynamic-import-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"@ember/test-helpers",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | dynamic import', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('template dynamic-relative', async function (assert) {
      await (0, _testHelpers.visit)('/dynamic-relative'); // todo make it fail here

      assert.strictEqual((0, _testHelpers.currentURL)(), '/dynamic-relative');
      assert.strictEqual(document.querySelector('[data-test="dynamic-import-result"]').textContent.trim(), 'vanilla');
    });
    (0, _qunit.test)('template dynamic-relative-exists', async function (assert) {
      await (0, _testHelpers.visit)('/dynamic-relative-exists'); // todo make it fail here

      assert.strictEqual((0, _testHelpers.currentURL)(), '/dynamic-relative');
      assert.strictEqual(document.querySelector('[data-test="dynamic-import-result"]').textContent.trim(), 'vanilla');
    });
  });
});
define("test-app/tests/test-helper", ["test-app/app", "test-app/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"test-app/app",0,"test-app/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("test-app/tests/unit/routes/dynamic-relative-exists-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | dynamic-relative-exists', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dynamic-relative-exists');
      assert.ok(route);
    });
  });
});
define("test-app/tests/unit/routes/dynamic-relative-template-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | dynamic-relative-template', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dynamic-relative-template');
      assert.ok(route);
    });
  });
});
define("test-app/tests/unit/routes/dynamic-relative-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Route | dynamic-relative', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dynamic-relative');
      assert.ok(route);
    });
  });
});
define('test-app/config/environment', [], function() {
  var prefix = 'test-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('test-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
