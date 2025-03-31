System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventDispatcher, _crd;

  _export("EventDispatcher", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67acc++wNVNULP/OUgeuOW4", "EventDispatcher", undefined);

      /**
       * @en the classes inherit from class:EventDispatcher will have the ability to dispatch events.
       * @zh 事件派发器，继承自EventDispatcher的类将拥有事件派发能力
       * 
       *  */
      _export("EventDispatcher", EventDispatcher = class EventDispatcher {
        constructor() {
          this._handlersMap = {};
        }

        static get instance() {
          if (!this._instance) this._instance = new EventDispatcher();
          return this._instance;
        }

        on(event, cb, thisArg, args, once) {
          if (!event || !cb) {
            return;
          }

          var handlers = this._handlersMap[event];

          if (!handlers) {
            handlers = this._handlersMap[event] = [];
          }

          handlers.push({
            event: event,
            cb: cb,
            thisArg: thisArg,
            once: once,
            args: args
          });
        }

        once(event, cb, thisArg, args) {
          this.on(event, cb, thisArg, args, true);
        }

        off(event, cb, thisArg, once) {
          var handlers = this._handlersMap[event];

          if (!handlers) {
            return;
          }

          for (var i = 0; i < handlers.length; ++i) {
            var h = handlers[i];

            if (h.cb == cb && h.thisArg == thisArg && h.once == once) {
              handlers.splice(i, 1);
              return;
            }
          }
        }

        clearAll(event) {
          if (event) {
            delete this._handlersMap[event];
          } else {
            this._handlersMap = {};
          }
        }

        emit(event, arg0, arg1, arg2, arg3, arg4) {
          var handlers = this._handlersMap[event];

          if (!handlers || !handlers.length) {
            return;
          }

          var args = [arg0, arg1, arg2, arg3, arg4];

          for (var i = 0; i < handlers.length; ++i) {
            var h = handlers[i];

            if (h.event == event) {
              h.cb.apply(h.thisArg, args);
            }
          }
        }

      });

      EventDispatcher._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34fe9e104beb1f1cb1ba19a1da0a64985d38a0d1.js.map