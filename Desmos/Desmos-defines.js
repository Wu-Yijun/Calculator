'ALMOND_OVERRIDES'
/**
 * This may only run twice,
 * The first time is runned when initializing, 
 * by @argument {new Function('ALMOND_OVERRIDES', str)(i)} .
 * The second time as a Web Worker
 **/
// debugger;
console.log(
    'run Desmos/Desmos-defines.js as ' +
    ('undefined' !== typeof window ? 'Function Called' : 'Web Worker.'));
var requirejs, require, define;
{
  var e;
  function t(e, t) {
    return g.call(e, t)
  }
  function r(e, t) {
    var r, n, i, a, o, s, u, c, l, p, f = t && t.split('/'), h = m.map,
                                      d = h && h['*'] || {};
    if (e && '.' === e.charAt(0))
      if (t) {
        for (f = f.slice(0, f.length - 1), e = f.concat(e.split('/')), c = 0;
             c < e.length; c += 1)
          if ('.' === (p = e[c]))
            e.splice(c, 1), c -= 1;
          else if ('..' === p) {
            if (1 === c && ('..' === e[2] || '..' === e[0])) break;
            c > 0 && (e.splice(c - 1, 2), c -= 2)
          }
        e = e.join('/')
      } else
        0 === e.indexOf('./') && (e = e.substring(2));
    if ((f || d) && h) {
      for (r = e.split('/'), c = r.length; c > 0; c -= 1) {
        if (n = r.slice(0, c).join('/'), f)
          for (l = f.length; l > 0; l -= 1)
            if ((i = h[f.slice(0, l).join('/')]) && (i = i[n])) {
              a = i, o = c;
              break
            }
        if (a) break;
        !s && d && d[n] && (s = d[n], u = c)
      }
      !a && s && (a = s, o = u), a && (r.splice(0, o, a), e = r.join('/'))
    }
    return e
  }
  function n(t, r) {
    return function() {
      return l.apply(e, v.call(arguments, 0).concat([t, r]))
    }
  }
  function i(e) {
    return function(t) {
      return r(t, e)
    }
  }
  function a(e) {
    return function(t) {
      h[e] = t
    }
  }
  function o(r) {
    if (t(d, r)) {
      var n = d[r];
      delete d[r], y[r] = !0, c.apply(e, n)
    }
    if (!t(h, r) && !t(y, r)) throw new Error('No ' + r);
    return h[r]
  }
  function s(e) {
    var t, r = e ? e.indexOf('!') : -1;
    return r > -1 && (t = e.substring(0, r), e = e.substring(r + 1, e.length)),
           [t, e]
  }
  function u(e) {
    return function() {
      return m && m.config && m.config[e] || {}
    }
  }
  var c, l, p, f, h = {}, d = {}, m = {}, y = {};
  var g = Object.prototype.hasOwnProperty;
  var v = [].slice;
  p = function(e, t) {
    var n, a = s(e), u = a[0];
    return e = a[1], u && (u = r(u, t), n = o(u)),
           u ? e = n && n.normalize ? n.normalize(e, i(t)) : r(e, t) :
               (e = r(e, t), a = s(e), u = a[0], e = a[1], u && (n = o(u))),
    {
      f: u ? u + '!' + e : e, n: e, pr: u, p: n
    }
  };
  f = {
    require: function(e) {
      return n(e)
    },
    exports: function(e) {
      var t = h[e];
      return void 0 !== t ? t : h[e] = {}
    },
    module: function(e) {
      return {
        id: e, uri: '', exports: h[e], config: u(e)
      }
    }
  };
  c = function(r, i, s, u) {
    var c, l, m, g, v, b, x = [];
    if (u = u || r, 'function' == typeof s) {
      for (i = !i.length && s.length ? ['require', 'exports', 'module'] : i,
          v = 0;
           v < i.length; v += 1)
        if (g = p(i[v], u), 'require' === (l = g.f))
          x[v] = f.require(r);
        else if ('exports' === l)
          x[v] = f.exports(r), b = !0;
        else if ('module' === l)
          c = x[v] = f.module(r);
        else if (t(h, l) || t(d, l) || t(y, l))
          x[v] = o(l);
        else {
          if (!g.p) throw new Error(r + ' missing ' + l);
          g.p.load(g.n, n(u, !0), a(l), {}), x[v] = h[l]
        }
      m = s.apply(h[r], x),
      r &&
          (c && c.exports !== e && c.exports !== h[r] ?
               h[r] = c.exports :
               m === e && b || (h[r] = m))
    } else {
      r && (h[r] = s)
    }
  };
  requirejs = require = l = function(t, r, n, i, a) {
    return 'string' == typeof t ?
        f[t] ? f[t](r) : o(p(t, r).f) :
        (t.splice || (m = t, r.splice ? (t = r, r = n, n = null) : t = e),
         r = r || function() {}, 'function' == typeof n && (n = i, i = a),
         i ? c(e, t, r, n) : setTimeout(function() {
           c(e, t, r, n)
         }, 4), l)
  };
  l.config = function(e) {
    return m = e, m.deps && l(m.deps, m.callback), l
  };
  define = function(e, r, n) {
    r.splice || (n = r, r = []), t(h, e) || t(d, e) || (d[e] = [e, r, n])
  };
  define.amd = { jQuery: !0 }
}
if ('undefined' != typeof ALMOND_OVERRIDES) {
  if (ALMOND_OVERRIDES) {
    define = ALMOND_OVERRIDES.define || define;
    require = ALMOND_OVERRIDES.require || require;
    requirejs = ALMOND_OVERRIDES.requirejs || requirejs;
  }
}
define('core/vendor/almond', function() {});
define('pjs', [], function() {
  return function(e, t, r) {
    function n(e) {
      return 'object' == typeof e
    }
    function i(e) {
      return 'function' == typeof e
    }
    function a() {}
    function o(s, u) {
      function c() {
        var e = new l;
        return i(e.init) && e.init.apply(e, arguments), e
      }
      function l() {}
      u === r && (u = s, s = Object), c.Bare = l;
      var p, f = a[e] = s[e], h = l[e] = c[e] = new a;
      return h.constructor = c, c.mixin = function(t) {
        return l[e] = c[e] = o(c, t)[e], c
      }, (c.open = function(e) {
               if (p = {}, i(e) ? p = e.call(c, h, f, c, s) : n(e) && (p = e),
                   n(p))
                 for (var r in p) t.call(p, r) && (h[r] = p[r]);
               return i(h.init) || (h.init = s), c
             })(u)
    }
    return o
  }('prototype', {}.hasOwnProperty)
});
(function() {
function e(e) {
  function t(t, r, n, i, a, o) {
    for (; a >= 0 && a < o; a += e) {
      var s = i ? i[a] : a;
      n = r(n, t[s], s, t)
    }
    return n
  }
  return function(r, n, i, a) {
    n = b(n, a, 4);
    var o = !D(r) && v.keys(r), s = (o || r).length, u = e > 0 ? 0 : s - 1;
    return arguments.length < 3 && (i = r[o ? o[u] : u], u += e),
           t(r, n, i, o, u, s)
  }
}
function t(e) {
  return function(t, r, n) {
    r = x(r, n);
    for (var i = w(t), a = e > 0 ? 0 : i - 1; a >= 0 && a < i; a += e)
      if (r(t[a], a, t)) return a;
    return -1
  }
}
function r(e, t, r) {
  return function(n, i, a) {
    var o = 0, s = w(n);
    if ('number' == typeof a)
      e > 0 ? o = a >= 0 ? a : Math.max(a + s, o) :
              s = a >= 0 ? Math.min(a + 1, s) : a + s + 1;
    else if (r && a && s)
      return a = r(n, i), n[a] === i ? a : -1;
    if (i !== i) return a = t(l.call(n, o, s), v.isNaN), a >= 0 ? a + o : -1;
    for (a = e > 0 ? o : s - 1; a >= 0 && a < s; a += e)
      if (n[a] === i) return a;
    return -1
  }
}
function n(e, t) {
  var r = O.length, n = e.constructor, i = v.isFunction(n) && n.prototype || s,
      a = 'constructor';
  for (v.has(e, a) && !v.contains(t, a) && t.push(a); r--;)
    (a = O[r]) in e && e[a] !== i[a] && !v.contains(t, a) && t.push(a)
}
var i = this, a = i._, o = Array.prototype, s = Object.prototype,
    u = Function.prototype, c = o.push, l = o.slice, p = s.toString,
    f = s.hasOwnProperty, h = Array.isArray, d = Object.keys, m = u.bind,
    y = Object.create, g = function() {}, v = function(e) {
      return e instanceof v ? e :
          this instanceof v ? void (this._wrapped = e) :
                              new v(e)
    };
'undefined' != typeof exports ?
    ('undefined' != typeof module && module.exports &&
         (exports = module.exports = v),
     exports._ = v) :
    i._ = v,
    v.VERSION = '1.8.3';
var b = function(e, t, r) {
  if (void 0 === t) return e;
  switch (null == r ? 3 : r) {
    case 1:
      return function(r) {
        return e.call(t, r)
      };
    case 2:
      return function(r, n) {
        return e.call(t, r, n)
      };
    case 3:
      return function(r, n, i) {
        return e.call(t, r, n, i)
      };
    case 4:
      return function(r, n, i, a) {
        return e.call(t, r, n, i, a)
      }
  }
  return function() {
    return e.apply(t, arguments)
  }
}, x = function(e, t, r) {
  return null == e    ? v.identity :
      v.isFunction(e) ? b(e, t, r) :
      v.isObject(e)   ? v.matcher(e) :
                        v.property(e)
};
v.iteratee = function(e, t) {
  return x(e, t, 1 / 0)
};
var _ = function(e, t) {
  return function(r) {
    var n = arguments.length;
    if (n < 2 || null == r) return r;
    for (var i = 1; i < n; i++)
      for (var a = arguments[i], o = e(a), s = o.length, u = 0; u < s; u++) {
        var c = o[u];
        t && void 0 !== r[c] || (r[c] = a[c])
      }
    return r
  }
}, S = function(e) {
  if (!v.isObject(e)) return {};
  if (y) return y(e);
  g.prototype = e;
  var t = new g;
  return g.prototype = null, t
}, M = function(e) {
  return function(t) {
    return null == t ? void 0 : t[e]
  }
}, E = Math.pow(2, 53) - 1, w = M('length'), D = function(e) {
  var t = w(e);
  return 'number' == typeof t && t >= 0 && t <= E
};
v.each =
    v.forEach =
        function(e, t, r) {
      t = b(t, r);
      var n, i;
      if (D(e))
        for (n = 0, i = e.length; n < i; n++) t(e[n], n, e);
      else {
        var a = v.keys(e);
        for (n = 0, i = a.length; n < i; n++) t(e[a[n]], a[n], e)
      }
      return e
    },
    v.map = v.collect =
        function(e, t, r) {
      t = x(t, r);
      for (var n = !D(e) && v.keys(e), i = (n || e).length, a = Array(i), o = 0;
           o < i; o++) {
        var s = n ? n[o] : o;
        a[o] = t(e[s], s, e)
      }
      return a
    },
    v.reduce = v.foldl = v.inject = e(1), v.reduceRight = v.foldr = e(-1),
    v.find = v.detect = function(e, t, r) {
      var n;
      if (void 0 !== (n = D(e) ? v.findIndex(e, t, r) : v.findKey(e, t, r)) &&
          -1 !== n)
        return e[n]
    }, v.filter = v.select = function(e, t, r) {
      var n = [];
      return t = x(t, r), v.each(e, function(e, r, i) {
        t(e, r, i) && n.push(e)
      }), n
    }, v.reject = function(e, t, r) {
      return v.filter(e, v.negate(x(t)), r)
    }, v.every = v.all = function(e, t, r) {
      t = x(t, r);
      for (var n = !D(e) && v.keys(e), i = (n || e).length, a = 0; a < i; a++) {
        var o = n ? n[a] : a;
        if (!t(e[o], o, e)) return !1
      }
      return !0
    }, v.some = v.any = function(e, t, r) {
      t = x(t, r);
      for (var n = !D(e) && v.keys(e), i = (n || e).length, a = 0; a < i; a++) {
        var o = n ? n[a] : a;
        if (t(e[o], o, e)) return !0
      }
      return !1
    }, v.contains = v.includes = v.include = function(e, t, r, n) {
      return D(e) || (e = v.values(e)), ('number' != typeof r || n) && (r = 0),
             v.indexOf(e, t, r) >= 0
    }, v.invoke = function(e, t) {
      var r = l.call(arguments, 2), n = v.isFunction(t);
      return v.map(e, function(e) {
        var i = n ? t : e[t];
        return null == i ? i : i.apply(e, r)
      })
    }, v.pluck = function(e, t) {
      return v.map(e, v.property(t))
    }, v.where = function(e, t) {
      return v.filter(e, v.matcher(t))
    }, v.findWhere = function(e, t) {
      return v.find(e, v.matcher(t))
    }, v.max = function(e, t, r) {
      var n, i, a = -1 / 0, o = -1 / 0;
      if (null == t && null != e) {
        e = D(e) ? e : v.values(e);
        for (var s = 0, u = e.length; s < u; s++) (n = e[s]) > a && (a = n)
      } else
        t = x(t, r), v.each(e, function(e, r, n) {
          ((i = t(e, r, n)) > o || i === -1 / 0 && a === -1 / 0) &&
              (a = e, o = i)
        });
      return a
    }, v.min = function(e, t, r) {
      var n, i, a = 1 / 0, o = 1 / 0;
      if (null == t && null != e) {
        e = D(e) ? e : v.values(e);
        for (var s = 0, u = e.length; s < u; s++) (n = e[s]) < a && (a = n)
      } else
        t = x(t, r), v.each(e, function(e, r, n) {
          ((i = t(e, r, n)) < o || i === 1 / 0 && a === 1 / 0) && (a = e, o = i)
        });
      return a
    }, v.shuffle = function(e) {
      for (var t, r = D(e) ? e : v.values(e), n = r.length, i = Array(n), a = 0;
           a < n; a++)
        t = v.random(0, a), t !== a && (i[a] = i[t]), i[t] = r[a];
      return i
    }, v.sample = function(e, t, r) {
      return null == t || r ?
          (D(e) || (e = v.values(e)), e[v.random(e.length - 1)]) :
          v.shuffle(e).slice(0, Math.max(0, t))
    }, v.sortBy = function(e, t, r) {
      return t = x(t, r),
             v.pluck(
                 v.map(
                      e,
                      function(e, r, n) {
                        return {
                          value: e, index: r, criteria: t(e, r, n)
                        }
                      })
                     .sort(function(e, t) {
                       var r = e.criteria, n = t.criteria;
                       if (r !== n) {
                         if (r > n || void 0 === r) return 1;
                         if (r < n || void 0 === n) return -1
                       }
                       return e.index - t.index
                     }),
                 'value')
    };
var T = function(e) {
  return function(t, r, n) {
    var i = {};
    return r = x(r, n), v.each(t, function(n, a) {
      var o = r(n, a, t);
      e(i, n, o)
    }), i
  }
};
v.groupBy = T(function(e, t, r) {
  v.has(e, r) ? e[r].push(t) : e[r] = [t]
}),
    v.indexBy = T(function(e, t, r) {
      e[r] = t
    }),
    v.countBy = T(function(e, t, r) {
      v.has(e, r) ? e[r]++ : e[r] = 1
    }),
    v.toArray = function(e) {
      return e ? v.isArray(e) ? l.call(e) :
              D(e)            ? v.map(e, v.identity) :
                                v.values(e) :
                 []
    }, v.size = function(e) {
      return null == e ? 0 : D(e) ? e.length : v.keys(e).length
    }, v.partition = function(e, t, r) {
      t = x(t, r);
      var n = [], i = [];
      return v.each(e, function(e, r, a) {
        (t(e, r, a) ? n : i).push(e)
      }), [n, i]
    }, v.first = v.head = v.take = function(e, t, r) {
      if (null != e) return null == t || r ? e[0] : v.initial(e, e.length - t)
    }, v.initial = function(e, t, r) {
      return l.call(e, 0, Math.max(0, e.length - (null == t || r ? 1 : t)))
    }, v.last = function(e, t, r) {
      if (null != e)
        return null == t || r ? e[e.length - 1] :
                                v.rest(e, Math.max(0, e.length - t))
    }, v.rest = v.tail = v.drop = function(e, t, r) {
      return l.call(e, null == t || r ? 1 : t)
    }, v.compact = function(e) {
      return v.filter(e, v.identity)
    };
var P = function(e, t, r, n) {
  for (var i = [], a = 0, o = n || 0, s = w(e); o < s; o++) {
    var u = e[o];
    if (D(u) && (v.isArray(u) || v.isArguments(u))) {
      t || (u = P(u, t, r));
      var c = 0, l = u.length;
      for (i.length += l; c < l;) i[a++] = u[c++]
    } else
      r || (i[a++] = u)
  }
  return i
};
v.flatten =
    function(e, t) {
  return P(e, t, !1)
},
    v.without =
        function(e) {
      return v.difference(e, l.call(arguments, 1))
    },
    v.uniq = v.unique =
        function(e, t, r, n) {
      v.isBoolean(t) || (n = r, r = t, t = !1), null != r && (r = x(r, n));
      for (var i = [], a = [], o = 0, s = w(e); o < s; o++) {
        var u = e[o], c = r ? r(u, o, e) : u;
        t     ? (o && a === c || i.push(u), a = c) :
            r ? v.contains(a, c) || (a.push(c), i.push(u)) :
                v.contains(i, u) || i.push(u)
      }
      return i
    },
    v.union =
        function() {
      return v.uniq(P(arguments, !0, !0))
    },
    v.intersection =
        function(e) {
      for (var t = [], r = arguments.length, n = 0, i = w(e); n < i; n++) {
        var a = e[n];
        if (!v.contains(t, a)) {
          for (var o = 1; o < r && v.contains(arguments[o], a); o++)
            ;
          o === r && t.push(a)
        }
      }
      return t
    },
    v.difference =
        function(e) {
      var t = P(arguments, !0, !0, 1);
      return v.filter(e, function(e) {
        return !v.contains(t, e)
      })
    },
    v.zip =
        function() {
      return v.unzip(arguments)
    },
    v.unzip =
        function(e) {
      for (var t = e && v.max(e, w).length || 0, r = Array(t), n = 0; n < t;
           n++)
        r[n] = v.pluck(e, n);
      return r
    },
    v.object =
        function(e, t) {
      for (var r = {}, n = 0, i = w(e); n < i; n++)
        t ? r[e[n]] = t[n] : r[e[n][0]] = e[n][1];
      return r
    },
    v.findIndex = t(1), v.findLastIndex = t(-1),
    v.sortedIndex =
        function(e, t, r, n) {
      r = x(r, n, 1);
      for (var i = r(t), a = 0, o = w(e); a < o;) {
        var s = Math.floor((a + o) / 2);
        r(e[s]) < i ? a = s + 1 : o = s
      }
      return a
    },
    v.indexOf = r(1, v.findIndex, v.sortedIndex),
    v.lastIndexOf = r(-1, v.findLastIndex), v.range = function(e, t, r) {
      null == t && (t = e || 0, e = 0), r = r || 1;
      for (var n = Math.max(Math.ceil((t - e) / r), 0), i = Array(n), a = 0;
           a < n; a++, e += r)
        i[a] = e;
      return i
    };
var I = function(e, t, r, n, i) {
  if (!(n instanceof t)) return e.apply(r, i);
  var a = S(e.prototype), o = e.apply(a, i);
  return v.isObject(o) ? o : a
};
v.bind = function(e, t) {
  if (m && e.bind === m) return m.apply(e, l.call(arguments, 1));
  if (!v.isFunction(e))
    throw new TypeError('Bind must be called on a function');
  var r = l.call(arguments, 2), n = function() {
    return I(e, n, t, this, r.concat(l.call(arguments)))
  };
  return n
}, v.partial = function(e) {
  var t = l.call(arguments, 1), r = function() {
    for (var n = 0, i = t.length, a = Array(i), o = 0; o < i; o++)
      a[o] = t[o] === v ? arguments[n++] : t[o];
    for (; n < arguments.length;) a.push(arguments[n++]);
    return I(e, r, this, this, a)
  };
  return r
}, v.bindAll = function(e) {
  var t, r, n = arguments.length;
  if (n <= 1) throw new Error('bindAll must be passed function names');
  for (t = 1; t < n; t++) r = arguments[t], e[r] = v.bind(e[r], e);
  return e
}, v.memoize = function(e, t) {
  var r = function(n) {
    var i = r.cache, a = '' + (t ? t.apply(this, arguments) : n);
    return v.has(i, a) || (i[a] = e.apply(this, arguments)), i[a]
  };
  return r.cache = {}, r
}, v.delay = function(e, t) {
  var r = l.call(arguments, 2);
  return setTimeout(function() {
    return e.apply(null, r)
  }, t)
}, v.defer = v.partial(v.delay, v, 1), v.throttle = function(e, t, r) {
  var n, i, a, o = null, s = 0;
  r || (r = {});
  var u = function() {
    s = !1 === r.leading ? 0 : v.now(), o = null, a = e.apply(n, i),
    o || (n = i = null)
  };
  return function() {
    var c = v.now();
    s || !1 !== r.leading || (s = c);
    var l = t - (c - s);
    return n = this, i = arguments,
           l <= 0 || l > t ? (o && (clearTimeout(o), o = null), s = c,
                              a = e.apply(n, i), o || (n = i = null)) :
                             o || !1 === r.trailing || (o = setTimeout(u, l)),
           a
  }
}, v.debounce = function(e, t, r) {
  var n, i, a, o, s, u = function() {
    var c = v.now() - o;
    c < t&& c >= 0 ? n = setTimeout(u, t - c) :
                     (n = null, r || (s = e.apply(a, i), n || (a = i = null)))
  };
  return function() {
    a = this, i = arguments, o = v.now();
    var c = r && !n;
    return n || (n = setTimeout(u, t)), c && (s = e.apply(a, i), a = i = null),
           s
  }
}, v.wrap = function(e, t) {
  return v.partial(t, e)
}, v.negate = function(e) {
  return function() {
    return !e.apply(this, arguments)
  }
}, v.compose = function() {
  var e = arguments, t = e.length - 1;
  return function() {
    for (var r = t, n = e[t].apply(this, arguments); r--;)
      n = e[r].call(this, n);
    return n
  }
}, v.after = function(e, t) {
  return function() {
    if (--e < 1) return t.apply(this, arguments)
  }
}, v.before = function(e, t) {
  var r;
  return function() {
    return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = null), r
  }
}, v.once = v.partial(v.before, 2);
var C = !{toString: null}.propertyIsEnumerable('toString'), O = [
  'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable',
  'hasOwnProperty', 'toLocaleString'
];
v.keys =
    function(e) {
  if (!v.isObject(e)) return [];
  if (d) return d(e);
  var t = [];
  for (var r in e) v.has(e, r) && t.push(r);
  return C && n(e, t), t
},
    v.allKeys =
        function(e) {
      if (!v.isObject(e)) return [];
      var t = [];
      for (var r in e) t.push(r);
      return C && n(e, t), t
    },
    v.values =
        function(e) {
      for (var t = v.keys(e), r = t.length, n = Array(r), i = 0; i < r; i++)
        n[i] = e[t[i]];
      return n
    },
    v.mapObject =
        function(e, t, r) {
      t = x(t, r);
      for (var n, i = v.keys(e), a = i.length, o = {}, s = 0; s < a; s++)
        n = i[s], o[n] = t(e[n], n, e);
      return o
    },
    v.pairs =
        function(e) {
      for (var t = v.keys(e), r = t.length, n = Array(r), i = 0; i < r; i++)
        n[i] = [t[i], e[t[i]]];
      return n
    },
    v.invert =
        function(e) {
      for (var t = {}, r = v.keys(e), n = 0, i = r.length; n < i; n++)
        t[e[r[n]]] = r[n];
      return t
    },
    v.functions = v.methods =
        function(e) {
      var t = [];
      for (var r in e) v.isFunction(e[r]) && t.push(r);
      return t.sort()
    },
    v.extend = _(v.allKeys), v.extendOwn = v.assign = _(v.keys),
    v.findKey = function(e, t, r) {
      t = x(t, r);
      for (var n, i = v.keys(e), a = 0, o = i.length; a < o; a++)
        if (n = i[a], t(e[n], n, e)) return n
    }, v.pick = function(e, t, r) {
      var n, i, a = {}, o = e;
      if (null == o) return a;
      v.isFunction(t) ? (i = v.allKeys(o), n = b(t, r)) :
                        (i = P(arguments, !1, !1, 1), n = function(e, t, r) {
                          return t in r
                        }, o = Object(o));
      for (var s = 0, u = i.length; s < u; s++) {
        var c = i[s], l = o[c];
        n(l, c, o) && (a[c] = l)
      }
      return a
    }, v.omit = function(e, t, r) {
      if (v.isFunction(t))
        t = v.negate(t);
      else {
        var n = v.map(P(arguments, !1, !1, 1), String);
        t = function(e, t) {
          return !v.contains(n, t)
        }
      }
      return v.pick(e, t, r)
    }, v.defaults = _(v.allKeys, !0), v.create = function(e, t) {
      var r = S(e);
      return t && v.extendOwn(r, t), r
    }, v.clone = function(e) {
      return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
    }, v.tap = function(e, t) {
      return t(e), e
    }, v.isMatch = function(e, t) {
      var r = v.keys(t), n = r.length;
      if (null == e) return !n;
      for (var i = Object(e), a = 0; a < n; a++) {
        var o = r[a];
        if (t[o] !== i[o] || !(o in i)) return !1
      }
      return !0
    };
var A = function(e, t, r, n) {
  if (e === t) return 0 !== e || 1 / e == 1 / t;
  if (null == e || null == t) return e === t;
  e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
  var i = p.call(e);
  if (i !== p.call(t)) return !1;
  switch (i) {
    case '[object RegExp]':
    case '[object String]':
      return '' + e == '' + t;
    case '[object Number]':
      return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
    case '[object Date]':
    case '[object Boolean]':
      return +e == +t
  }
  var a = '[object Array]' === i;
  if (!a) {
    if ('object' != typeof e || 'object' != typeof t) return !1;
    var o = e.constructor, s = t.constructor;
    if (o !== s &&
        !(v.isFunction(o) && o instanceof o && v.isFunction(s) &&
          s instanceof s) &&
        'constructor' in e && 'constructor' in t)
      return !1
  }
  r = r || [], n = n || [];
  for (var u = r.length; u--;)
    if (r[u] === e) return n[u] === t;
  if (r.push(e), n.push(t), a) {
    if ((u = e.length) !== t.length) return !1;
    for (; u--;)
      if (!A(e[u], t[u], r, n)) return !1
  } else {
    var c, l = v.keys(e);
    if (u = l.length, v.keys(t).length !== u) return !1;
    for (; u--;)
      if (c = l[u], !v.has(t, c) || !A(e[c], t[c], r, n)) return !1
  }
  return r.pop(), n.pop(), !0
};
v.isEqual =
    function(e, t) {
  return A(e, t)
},
    v.isEmpty =
        function(e) {
      return null == e ||
          (D(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ?
               0 === e.length :
               0 === v.keys(e).length)
    },
    v.isElement =
        function(e) {
      return !(!e || 1 !== e.nodeType)
    },
    v.isArray = h ||
    function(e) {
      return '[object Array]' === p.call(e)
    },
    v.isObject =
        function(e) {
      var t = typeof e;
      return 'function' === t || 'object' === t && !!e
    },
    v.each(
        [
          'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'
        ],
        function(e) {
          v['is' + e] = function(t) {
            return p.call(t) === '[object ' + e + ']'
          }
        }),
    v.isArguments(arguments) ||
    (v.isArguments =
         function(e) {
           return v.has(e, 'callee')
         }),
    'function' != typeof /./ && 'object' != typeof Int8Array &&
    (v.isFunction =
         function(e) {
           return 'function' == typeof e || !1
         }),
    v.isFinite = function(e) {
      return isFinite(e) && !isNaN(parseFloat(e))
    }, v.isNaN = function(e) {
      return v.isNumber(e) && e !== +e
    }, v.isBoolean = function(e) {
      return !0 === e || !1 === e || '[object Boolean]' === p.call(e)
    }, v.isNull = function(e) {
      return null === e
    }, v.isUndefined = function(e) {
      return void 0 === e
    }, v.has = function(e, t) {
      return null != e && f.call(e, t)
    }, v.noConflict = function() {
      return i._ = a, this
    }, v.identity = function(e) {
      return e
    }, v.constant = function(e) {
      return function() {
        return e
      }
    }, v.noop = function() {}, v.property = M, v.propertyOf = function(e) {
      return null == e ? function() {} : function(t) {
        return e[t]
      }
    }, v.matcher = v.matches = function(e) {
      return e = v.extendOwn({}, e), function(t) {
        return v.isMatch(t, e)
      }
    }, v.times = function(e, t, r) {
      var n = Array(Math.max(0, e));
      t = b(t, r, 1);
      for (var i = 0; i < e; i++) n[i] = t(i);
      return n
    }, v.random = function(e, t) {
      return null == t && (t = e, e = 0),
             e + Math.floor(Math.random() * (t - e + 1))
    }, v.now = Date.now || function() {
      return (new Date).getTime()
    };
var L = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;',
  '`': '&#x60;'
},
    N = v.invert(L), q = function(e) {
      var t =
              function(t) {
        return e[t]
      },
          r = '(?:' + v.keys(e).join('|') + ')', n = RegExp(r),
          i = RegExp(r, 'g');
      return function(e) {
        return e = null == e ? '' : '' + e, n.test(e) ? e.replace(i, t) : e
      }
    };
v.escape = q(L), v.unescape = q(N), v.result = function(e, t, r) {
  var n = null == e ? void 0 : e[t];
  return void 0 === n && (n = r), v.isFunction(n) ? n.call(e) : n
};
var F = 0;
v.uniqueId = function(e) {
  var t = ++F + '';
  return e ? e + t : t
}, v.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var R = /(.)^/, V = {
  '\'': '\'',
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
},
    k = /\\|'|\r|\n|\u2028|\u2029/g, B = function(e) {
      return '\\' + V[e]
    };
v.template = function(e, t, r) {
  !t && r && (t = r), t = v.defaults({}, t, v.templateSettings);
  var n = RegExp(
          [
            (t.escape || R).source, (t.interpolate || R).source,
            (t.evaluate || R).source
          ].join('|') +
              '|$',
          'g'),
      i = 0, a = '__p+=\'';
  e.replace(
      n,
      function(t, r, n, o, s) {
        return a += e.slice(i, s).replace(k, B), i = s + t.length,
                                                 r ? a +=
                   '\'+\n((__t=(' + r + '))==null?\'\':_.escape(__t))+\n\'' :
                   n ? a += '\'+\n((__t=(' + n + '))==null?\'\':__t)+\n\'' :
                       o && (a += '\';\n' + o + '\n__p+=\''),
                                                 t
      }),
      a += '\';\n', t.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
      a = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' +
      a + 'return __p;\n';
  try {
    var o = new Function(t.variable || 'obj', '_', a)
  } catch (e) {
    throw e.source = a, e
  }
  var s = function(e) {
    return o.call(this, e, v)
  };
  return s.source = 'function(' + (t.variable || 'obj') + '){\n' + a + '}', s
}, v.chain = function(e) {
  var t = v(e);
  return t._chain = !0, t
};
var j = function(e, t) {
  return e._chain ? v(t).chain() : t
};
v.mixin =
    function(e) {
  v.each(v.functions(e), function(t) {
    var r = v[t] = e[t];
    v.prototype[t] = function() {
      var e = [this._wrapped];
      return c.apply(e, arguments), j(this, r.apply(v, e))
    }
  })
},
    v.mixin(v),
    v.each(
        ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
        function(e) {
          var t = o[e];
          v.prototype[e] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
                   'shift' !== e && 'splice' !== e || 0 !== r.length ||
                       delete r[0],
                   j(this, r)
          }
        }),
    v.each(
        ['concat', 'join', 'slice'],
        function(e) {
          var t = o[e];
          v.prototype[e] = function() {
            return j(this, t.apply(this._wrapped, arguments))
          }
        }),
    v.prototype.value =
        function() {
      return this._wrapped
    },
    v.prototype.valueOf = v.prototype.toJSON = v.prototype.value,
    v.prototype.toString =
        function() {
      return '' + this._wrapped
    },
    'function' == typeof define && define.amd &&
    define('underscore', [], function() {
      return v
    })
})(this);
(function() {
var e, t, r, n, i, a, o, s, u, c, l, p, f, h, d, m, y, g, v, b, x = {};
!function(e) {
  function t(e, t) {
    return e !== r &&
               ('function' == typeof Object.create ?
                    Object.defineProperty(e, '__esModule', {value: !0}) :
                    e.__esModule = !0),
           function(r, n) {
             return e[r] = t ? t(r, n) : n
           }
  }
  var r = 'object' == typeof x ? x :
      'object' == typeof self  ? self :
      'object' == typeof this  ? this :
                                 {};
  'function' == typeof define && define.amd ?
      define(
          'tslib', ['exports'],
          function(n) {
            e(t(r, t(n)))
          }) :
      e('object' == typeof module && 'object' == typeof module.exports ?
            t(r, t(module.exports)) :
            t(r))
}(function(x) {
  var _ = Object.setPrototypeOf ||
      {__proto__: []} instanceof Array && function(e, t) {
        e.__proto__ = t
      } || function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
      };
  e =
      function(e, t) {
    function r() {
      this.constructor = e
    }
    _(e, t),
        e.prototype =
            null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
  },
  t = Object.assign ||
      function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
          t = arguments[r];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
      },
  r =
      function(e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 &&
          (r[n] = e[n]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
            (r[n[i]] = e[n[i]]);
    return r
  },
  n =
      function(e, t, r, n) {
    var i, a = arguments.length,
           o = a < 3 ? t :
        null === n   ? n = Object.getOwnPropertyDescriptor(t, r) :
                       n;
    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
      o = Reflect.decorate(e, t, r, n);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
    return a > 3 && o && Object.defineProperty(t, r, o), o
  },
  i =
      function(e, t) {
    return function(r, n) {
      t(r, n, e)
    }
  },
  a =
      function(e, t) {
    if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata)
      return Reflect.metadata(e, t)
  },
  o =
      function(e, t, r, n) {
    return new (r || (r = Promise))(function(i, a) {
      function o(e) {
        try {
          u(n.next(e))
        } catch (e) {
          a(e)
        }
      }
      function s(e) {
        try {
          u(n.throw(e))
        } catch (e) {
          a(e)
        }
      }
      function u(e) {
        e.done ? i(e.value) : new r(function(t) {
                                t(e.value)
                              }).then(o, s)
      }
      u((n = n.apply(e, t || [])).next())
    })
  },
  s =
      function(e, t) {
    function r(e) {
      return function(t) {
        return n([e, t])
      }
    }
    function n(r) {
      if (i) throw new TypeError('Generator is already executing.');
      for (; u;) try {
          if (i = 1,
              a &&
                  (o = 2 & r[0] ? a.return :
                       r[0]     ? a.throw || ((o = a.return ) && o.call(a), 0) :
                                  a.next) &&
                  !(o = o.call(a, r[1])).done)
            return o;
          switch (a = 0, o && (r = [2 & r[0], o.value]), r[0]) {
            case 0:
            case 1:
              o = r;
              break;
            case 4:
              return u.label++, {value: r[1], done: !1};
            case 5:
              u.label++, a = r[1], r = [0];
              continue;
            case 7:
              r = u.ops.pop(), u.trys.pop();
              continue;
            default:
              if (o = u.trys,
                  !(o = o.length > 0 && o[o.length - 1]) &&
                      (6 === r[0] || 2 === r[0])) {
                u = 0;
                continue
              }
              if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                u.label = r[1];
                break
              }
              if (6 === r[0] && u.label < o[1]) {
                u.label = o[1], o = r;
                break
              }
              if (o && u.label < o[2]) {
                u.label = o[2], u.ops.push(r);
                break
              }
              o[2] && u.ops.pop(), u.trys.pop();
              continue
          }
          r = t.call(e, u)
        } catch (e) {
          r = [6, e], a = 0
        } finally {
          i = o = 0
        }
      if (5 & r[0]) throw r[1];
      return {
        value: r[0] ? r[1] : void 0, done: !0
      }
    }
    var i, a, o, s, u = {
      label: 0,
      sent: function() {
        if (1 & o[0]) throw o[1];
        return o[1]
      },
      trys: [],
      ops: []
    };
    return s = {next: r(0), throw: r(1), return: r(2)},
           'function' == typeof Symbol && (s[Symbol.iterator] = function() {
             return this
           }), s
  },
  u =
      function(e, t) {
    for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
  },
  c =
      function(e) {
    var t = 'function' == typeof Symbol && e[Symbol.iterator], r = 0;
    return t ? t.call(e) : {
      next: function() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++], done: !e
        }
      }
    }
  },
  l =
      function(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n, i, a = r.call(e), o = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = a.next()).done;) o.push(n.value)
    } catch (e) {
      i = {error: e}
    } finally {
      try {
        n && !n.done && (r = a.return ) && r.call(a)
      } finally {
        if (i) throw i.error
      }
    }
    return o
  },
  p =
      function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e = e.concat(l(arguments[t]));
    return e
  },
  f =
      function() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
      e += arguments[t].length;
    for (var n = Array(e), i = 0, t = 0; t < r; t++)
      for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
        n[i] = a[o];
    return n
  },
  h =
      function(e) {
    return this instanceof h ? (this.v = e, this) : new h(e)
  },
  d =
      function(e, t, r) {
    function n(e) {
      l[e] && (c[e] = function(t) {
        return new Promise(function(r, n) {
          p.push([e, t, r, n]) > 1 || i(e, t)
        })
      })
    }
    function i(e, t) {
      try {
        a(l[e](t))
      } catch (e) {
        u(p[0][3], e)
      }
    }
    function a(e) {
      e.value instanceof h ? Promise.resolve(e.value.v).then(o, s) :
                             u(p[0][2], e)
    }
    function o(e) {
      i('next', e)
    }
    function s(e) {
      i('throw', e)
    }
    function u(e, t) {
      e(t), p.shift(), p.length && i(p[0][0], p[0][1])
    }
    if (!Symbol.asyncIterator)
      throw new TypeError('Symbol.asyncIterator is not defined.');
    var c, l = r.apply(e, t || []), p = [];
    return c = {}, n('next'), n('throw'), n('return'),
           c[Symbol.asyncIterator] = function() {
             return this
           }, c
  },
  m =
      function(e) {
    function t(t, i) {
      r[t] = e[t] ? function(r) {
        return (n = !n) ? {value: h(e[t](r)), done: 'return' === t} :
            i           ? i(r) :
                          r
      } : i
    }
    var r, n;
    return r = {}, t('next'), t('throw', function(e) {
             throw e
           }), t('return'), r[Symbol.iterator] = function() {
      return this
    }, r
  },
  y =
      function(e) {
    function t(t) {
      n[t] = e[t] && function(n) {
        return new Promise(function(i, a) {
          n = e[t](n), r(i, a, n.done, n.value)
        })
      }
    }
    function r(e, t, r, n) {
      Promise.resolve(n).then(function(t) {
        e({value: t, done: r})
      }, t)
    }
    if (!Symbol.asyncIterator)
      throw new TypeError('Symbol.asyncIterator is not defined.');
    var n, i = e[Symbol.asyncIterator];
    return i ? i.call(e) :
               (e = 'function' == typeof c ? c(e) : e[Symbol.iterator](),
                n = {}, t('next'), t('throw'), t('return'),
                n[Symbol.asyncIterator] = function() {
                  return this
                }, n)
  },
  g =
      function(e, t) {
    debugger;
    return Object.defineProperty ? Object.defineProperty(e, 'raw', {value: t}) :
                                   e.raw = t,
                                   e
  },
  v =
      function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
  },
  b =
      function(e) {
    return e && e.__esModule ? e : {default: e}
  },
  x('__extends', e), x('__assign', t), x('__rest', r), x('__decorate', n),
  x('__param', i), x('__metadata', a), x('__awaiter', o), x('__generator', s),
  x('__exportStar', u), x('__values', c), x('__read', l), x('__spread', p),
  x('__spreadArrays', f), x('__await', h), x('__asyncGenerator', d),
  x('__asyncDelegator', m), x('__asyncValues', y), x('__makeTemplateObject', g),
  x('__importStar', v), x('__importDefault', b)
})
})();
define('core/math/distance', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e) {
    return e === 1 / 0 || e === -1 / 0
  }
  function n(e, t) {
    return e > 0 == t > 0 ? e + .5 * (t - e) : .5 * (e + t)
  }
  function i(e, t, r, n, i, a) {
    return e * n + t * i + r * a
  }
  function a(e, r, n, a, o, s, u, c, l) {
    var p = t.hypot(u - a, c - o, l - s);
    return 0 === p ? 0 :
                     i((e - a) / p, (r - o) / p, (n - s) / p, (u - a) / p,
                       (c - o) / p, (l - s) / p)
  }
  function o(e, t, r, n, i, o) {
    var s = a(e, t, 0, r, n, 0, i, o, 0);
    return s <= 0 ? [r, n] :
        s >= 1    ? [i, o] :
                    [r + s * (i - r), n + s * (o - n)]
  }
  function s(e, r, n, i, a, s) {
    var u = o(e, r, n, i, a, s);
    return t.hypot(e - u[0], r - u[1])
  }
  function u(e, t, r) {
    if (void 0 === r && (r = 1), r > 50)
      throw new Error(
          'Within ' + (52 - r) + ' bits isn\'t really approximate any more');
    var n = Math.max(Math.max(Math.abs(e), Math.abs(t)), 1);
    return n === n + (1 === r ? .5 : Math.pow(.5, r)) * Math.abs(t - e)
  }
  Object.defineProperty(t, '__esModule', {value: !0});
  var c = Math.hypot && Math.hypot(1 / 0, NaN) === 1 / 0;
  t.hypot = c ? Math.hypot :
                function(e, t, n) {
                  if (r(e) || r(t) || void 0 !== n && r(n)) return 1 / 0;
                  if (isNaN(e) || isNaN(t) || void 0 !== n && isNaN(n))
                    return NaN;
                  if (0 === e && 0 === t && (void 0 === n || 0 === n)) return 0;
                  for (var i = 0, a = 0, o = 0; o < arguments.length; o += 1) {
                    var s = Math.abs(Number(arguments[o]));
                    s > i && (a *= i / s * (i / s), i = s),
                        a += 0 === s && 0 === i ? 0 : s / i * (s / i)
                  }
                  return i === 1 / 0 ? 1 / 0 : i * Math.sqrt(a)
                },
  t.mean = n, t.pointToSegmentParameter = a, t.closestPointOnSegment = o,
  t.pointToSegment = s, t.approx = u
});
define(
    'core/math/poi', ['require', 'exports', 'core/math/distance'],
    function(e, t, r) {
      'use strict';
      function n(e, t) {
        var n;
        e > t && (n = e, e = t, t = n);
        var i = e > 0, a = t > 0, o = Math.abs(e) > .01, s = Math.abs(t) > .01;
        if (o || s) return r.mean(e, t);
        if (0 === e) return t * Math.abs(t);
        if (0 === t) return e * Math.abs(e);
        if (i !== a) return 0;
        var u = i ? Math.sqrt(e * t) : -Math.sqrt(e * t);
        return u >= e && t >= u ? u : r.mean(e, t)
      }
      function i(e, t, r, i, o) {
        if (!isNaN(t) && !isNaN(i) && t < 0 != i < 0)
          for (;;) {
            var s = n(e, r), u = o(s);
            if (!isFinite(u)) return;
            if (s === e || s === r)
              return Math.abs(t) <= Math.abs(i) ? [e, t] : [r, i];
            if (0 === u) return a(e, t, s, u, r, i, o);
            t < 0 != u < 0 ? (r = s, i = u) : (e = s, t = u)
          }
      }
      function a(e, t, r, i, a, u, c) {
        var l;
        if (isFinite(i)) {
          isFinite(t) || (l = o(e, t, r, i, c)) && (e = l[0], t = l[1]),
              isFinite(u) || (l = o(r, i, a, u, c)) && (a = l[0], u = l[1]);
          var p, f;
          p = t === i ? [e, t] : s(e, t, r, i, c, i),
          f = u === i ? [a, u] : s(r, i, a, u, c, i);
          var h;
          return p && f && (h = n(p[0], f[0])),
                 void 0 !== h ? [h, c(h)] : void 0
        }
      }
      function o(e, t, r, i, a) {
        if (isFinite(t) !== isFinite(i))
          for (;;) {
            var o = n(e, r), s = a(o);
            if (o === e || o === r) return isFinite(t) ? [e, t] : [r, i];
            isFinite(s) !== isFinite(t) ? (r = o, i = s) : (e = o, t = s)
          }
      }
      function s(e, t, r, i, a, o) {
        if (t === o != (i === o))
          for (;;) {
            var s = n(e, r), u = a(s);
            if (s === e || s === r) return t === o ? [e, t] : [r, i];
            u === o != (t === o) ? (r = s, i = u) : (e = s, t = u)
          }
      }
      function u(e, t, r, i, o, s, u) {
        if (e < r && r < o && isFinite(t) && isFinite(i) && isFinite(s) &&
            t !== i && i !== s && i > t == i > s)
          for (;;) {
            var c = n(e, r), l = u(c), p = n(r, o), f = u(p);
            if (!isFinite(l) || !isFinite(f)) return;
            if (c === e || c === r || p === r || p === o)
              return l > i == i > t ? [c, l] : f > i == i > t ? [p, f] : [r, i];
            if (l === i || f === i) return a(e, t, r, i, o, s, u);
            l > t == i > t && l > t == l > i ? (o = r, s = i, r = c, i = l) :
                f > s == i > s && f > i == f > s ?
                                               (e = r, t = i, r = p, i = f) :
                                               (e = c, t = l, o = p, s = f)
          }
      }
      function c(e, t) {
        var r = e[0], n = e[1], i = t[0], a = t[1];
        return (i - r) * (i - r) + (a - n) * (a - n)
      }
      function l(e, t, r, i, a, o) {
        var s, u, l, p, f, h, d, m, y, g = o(e), v = o(t), b = o(r),
                                       x = c(g, i), _ = c(v, i), S = c(b, i);
        if (!(t <= e || r <= t) && isFinite(x) && isFinite(_) && isFinite(S) &&
            !(_ >= x || _ >= S))
          for (;;) {
            if (Math.abs(b[0] - g[0]) < a && Math.abs(b[1] - g[1]) < a)
              return [e, r];
            var M = n(e, t), E = o(M), w = c(E, i), D = n(t, r), T = o(D),
                P = c(T, i);
            if (!isFinite(w) || !isFinite(P)) return;
            if (M === e || M === t || D === t || D === r)
              return w < _ && w < P ? [M, M] : P < w && P < _ ? [D, D] : [t, t];
            if ((w === _ || P === _) &&
                (t = .5 * (M + t), v = o(t), _ = c(v, i), w === _ || P === _))
              return [e, r];
            w < _ && w < P ?
                (s = [t, M], r = s[0], t = s[1], u = [v, E], b = u[0], v = u[1],
                 l = [_, w], S = l[0], _ = l[1]) :
                P < w && P < _ ?
                (p = [t, D], e = p[0], t = p[1], f = [v, T], g = f[0], v = f[1],
                 h = [_, P], x = h[0], _ = h[1]) :
                (d = [M, D], e = d[0], r = d[1], m = [E, T], g = m[0], b = m[1],
                 y = [w, P], x = y[0], S = y[1])
          }
      }
      function p(e, t, r) {
        return void 0 === t && (t = -1 / 0), void 0 === r && (r = 1 / 0),
               Math.min(r, Math.max(t, e))
      }
      function f(e, t, r, n, i, a) {
        var o, s, u, f, h;
        if (void 0 !== n && void 0 !== i) {
          h = r + .01 * (r < .5 * (n + i) ? i - n : n - i)
        } else
          h = Math.abs(r) > 1 ? 1.00001 * r : r + 1e-5;
        var d = e(r), m = e(h), y = c(d, t), g = c(m, t);
        if (isFinite(y) && isFinite(g)) {
          if (y === g) return [r, h];
          for (g > y &&
                   (o = [h, r], r = o[0], h = o[1], s = [m, d], d = s[0],
                   m = s[1], u = [g, y], y = u[0], g = u[1]);
               isFinite(r) && isFinite(h) && r !== h;) {
            if (void 0 !== i && h > i) return [i, i];
            if (void 0 !== n && h < n) return [n, n];
            var v = r + 3 * (h - r), b = e(v), x = c(b, t);
            if (!isFinite(x)) return [r, h];
            if (x === g) return [r, h];
            if (x > g) {
              var _ = h > r ? l(r, h, v, t, a, e) : l(v, h, r, t, a, e);
              return _ ? [p(_[0], n, i), p(_[1], n, i)] : _
            }
            f = [h, g, v, x], r = f[0], y = f[1], h = f[2], g = f[3]
          }
          return [r, h]
        }
      }
      function h(e, t, r, n) {
        return !r ||
            !!n &&
            Math.min(c(e(n[0]), t), c(e(n[1]), t)) <
                Math.min(c(e(r[0]), t), c(e(r[1]), t))
      }
      function d(e, t, r, n, i, a) {
        var o = f(e, t, r, n, i, a);
        if (void 0 !== n) {
          var s = f(e, t, n, n, i, a);
          h(e, t, o, s) && (o = s)
        }
        if (void 0 !== i) {
          var u = f(e, t, i, n, i, a);
          h(e, t, o, u) && (o = u)
        }
        return o
      }
      function m(e, t, r, n, i, a, o, s) {
        var u = Math.abs(n - t), c = Math.abs(a - n), l = Math.abs(s - a);
        return u > c && u > l ? [[e, t], [r, n]] :
            l > c && l > u    ? [[i, a], [o, s]] :
                                [[r, n], [i, a]]
      }
      function y(e, t, i, a, s, u, c, l) {
        if (l || (l = 0),
            !((i - e) * (s - i) <= 0) && isFinite(e) && isFinite(i) &&
                isFinite(s) && isFinite(t) && isFinite(u)) {
          if (!isFinite(a)) {
            var p = o(e, t, i, a, c), f = o(i, a, s, u, c);
            if (!p || !f) return;
            return [p, f]
          }
          if (!(Math.abs(a - ((s - i) * t + (i - e) * u) / (s - e)) < l))
            for (;;) {
              var h = n(e, i), d = c(h), y = n(i, s), g = c(y),
                  v = Math.abs(d - r.mean(t, a)),
                  b = Math.abs(a - r.mean(d, g)),
                  x = Math.abs(g - r.mean(a, u));
              if (v <= l && b <= l && x <= l) return;
              if (!isFinite(d)) {
                var p = o(e, t, h, d, c), f = o(h, d, s, u, c);
                if (!p || !f) return;
                return [p, f]
              }
              if (!isFinite(g)) {
                var p = o(e, t, y, g, c), f = o(y, g, s, u, c);
                if (!p || !f) return;
                return [p, f]
              }
              if (!(h !== e && h !== i || y !== i && y !== s))
                return Math.abs(a - t) > Math.abs(u - a) ? [[e, t], [i, a]] :
                                                           [[i, a], [s, u]];
              if (h === e || h === i) return m(e, t, i, a, y, g, s, u);
              if (y === i || y === s) return m(e, t, h, d, i, a, s, u);
              v > x && v >= b     ? (s = i, u = a, i = h, a = d) :
                  x > v && x >= b ? (e = i, t = a, i = y, a = g) :
                                    (e = h, t = d, s = y, u = g)
            }
        }
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.floatMiddle = n, t.bisectZero = i, t.flatCenter = a,
          t.bisectFinite = o, t.bisectExtremum = u,
          t.bisectClosestPointOnParametric = l,
          t.findLocalClosestPointOnParametric = d, t.bisectJump = y
    });
define(
    'core/math/curve-accumulator', ['require', 'exports', 'core/math/distance'],
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var n = function() {
        function e(e) {
          e ? (this.xtolerance = e.xtolerance || e.tolerance || 0,
               this.ytolerance = e.ytolerance || e.tolerance || 0,
               this.ztolerance = e.ztolerance || e.tolerance || 0,
               this.map = e.map) :
              this.xtolerance = this.ytolerance = this.ztolerance = 0,
              this.segments = [], this.segment = [], this.pivotPoint = void 0,
              this.pendingPoint = void 0
        }
        return e.prototype.colinear = function(e, t, n) {
          this.map && (e = this.map(e), t = this.map(t), n = this.map(n));
          var i = r.pointToSegmentParameter(
              n[0], n[1], n[2] || 0, e[0], e[1], e[2] || 0, t[0], t[1],
              t[2] || 0);
          if (i < 1) return !1;
          var a = [
            e[0] + i * (t[0] - e[0]), e[1] + i * (t[1] - e[1]),
            3 === e.length ? e[2] + i * (t[2] - e[2]) : 0
          ];
          return Math.abs(n[0] - a[0]) <= this.xtolerance &&
              Math.abs(n[1] - a[1]) <= this.ytolerance &&
              (2 === e.length || Math.abs(n[2] - a[2]) <= this.ztolerance)
        }, e.prototype.addPoint = function(e) {
          if (this.dimensions = e.length,
              this.xtolerance < 0 && this.ytolerance < 0 &&
                  (2 === this.dimensions || this.ztolerance < 0))
            return void this.segment.push.apply(this.segment, e);
          if (!this.segment.length)
            return void this.segment.push.apply(this.segment, e);
          var t = 2 === this.dimensions ?
              [
                this.segment[this.segment.length - 2],
                this.segment[this.segment.length - 1]
              ] :
              [
                this.segment[this.segment.length - 3],
                this.segment[this.segment.length - 2],
                this.segment[this.segment.length - 1]
              ];
          if (e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2]) {
            if (!this.pivotPoint || !this.pendingPoint)
              return this.pivotPoint = e, void (this.pendingPoint = e);
            (!this.colinear(t, this.pivotPoint, e) ||
             r.hypot(t[0] - e[0], t[1] - e[1], (t[2] || 0) - (e[2] || 0)) <
                 r.hypot(
                     t[0] - this.pendingPoint[0], t[1] - this.pendingPoint[1],
                     (t[2] || 0) - (this.pendingPoint[2] || 0))) &&
                (this.flushPending(), this.pivotPoint = e),
                this.pendingPoint = e
          }
        }, e.prototype.flushPending = function() {
          this.pendingPoint &&
              (this.segment.push.apply(this.segment, this.pendingPoint),
               this.pivotPoint = void 0, this.pendingPoint = void 0)
        }, e.prototype.breakSegment = function() {
          this.flushPending(),
              this.segment.length > (this.dimensions || 2) &&
              this.segments.push(this.segment),
              this.segment = []
        }, e.prototype.getSegments = function() {
          return this.breakSegment(), this.segments
        }, e.prototype.finish = function() {
          return {
            segments: this.getSegments(), resolved: !0
          }
        }, e
      }();
      t.Accumulator = n
    });
define(
    'core/math/implicit-plotter',
    ['require', 'exports', 'core/math/distance', './curve-accumulator'],
    function(e, t, r, n) {
      'use strict';
      function i(e, t) {
        var r = a(e, t);
        return {
          segments: r.contours.strokeSegments,
              fillSegments: r.contours.fillSegments,
              resolved: r.quadTree.resolved
        }
      }
      function a(e, t) {
        var r = Math.pow(2, -W), n = c(t, r), i = c(t, 2 * r), a = f(e, n, i),
            o = P(a.root, e, n);
        return {
          paddedDomain: n, rootDomain: i, quadTree: a, triangles: o,
              contours: j(o, e, n)
        }
      }
      function o(e, t, r) {
        return {
          x: e, y: t, z: r
        }
      }
      function s(e, t, r) {
        return {
          x: e, y: t, isZero: r
        }
      }
      function u(e, t, r) {
        return {
          vertices: [e, t, r], visited: !1, next: void 0
        }
      }
      function c(e, t) {
        var r = (1 + t) * e.xmin - t * e.xmax,
            n = (1 + t) * e.xmax - t * e.xmin;
        return {
          xmin: r, ymin: (1 + t) * e.ymin - t * e.ymax, xmax: n,
              ymax: (1 + t) * e.ymax - t * e.ymin, xtolerance: e.xtolerance,
              ytolerance: e.ytolerance
        }
      }
      function l(e, t) {
        return {
          depth: e, vertices: t, children: void 0, center: void 0
        }
      }
      function p(e, t, r) {
        e.center =
            E(e.vertices[0], e.vertices[1], e.vertices[2], e.vertices[3], t, r)
      }
      function f(e, t, r) {
        var n = h(e, r), i = [], a = [];
        a.push(n);
        var o = 1, s = !0;
        e: for (; a.length;) {
          var u = i;
          i = a, a = u;
          for (var c = void 0; c = i.pop();)
            if (m(c, e, t)) {
              if (d(c, e), !c.children) {
                s = !1;
                break e
              }
              if (a.push(c.children[0]), a.push(c.children[1]),
                  a.push(c.children[2]), a.push(c.children[3]), (o += 3) >= Y) {
                s = !1;
                break e
              }
            } else
              p(c, e, t)
        }
        for (var l = 0; l < i.length; l++) p(i[l], e, t);
        for (var l = 0; l < a.length; l++) p(a[l], e, t);
        return {
          root: n, resolved: s
        }
      }
      function h(e, t) {
        var r = t.xmin, n = t.xmax, i = t.ymin, a = t.ymax;
        return l(0, [_(r, a, e), _(n, a, e), _(n, i, e), _(r, i, e)])
      }
      function d(e, t) {
        var r = e.depth + 1, n = e.vertices[0], i = e.vertices[1],
            a = e.vertices[2], o = e.vertices[3], s = S(n, i, t),
            u = S(i, a, t), c = S(a, o, t), p = S(o, n, t), f = S(n, a, t);
        e.children = [
          l(r, [n, s, f, p]), l(r, [s, i, u, f]), l(r, [f, u, a, c]),
          l(r, [p, f, c, o])
        ]
      }
      function m(e, t, r) {
        if (e.depth < W) return !0;
        if (b(e, r)) return !1;
        if (v(e, r)) return !1;
        var n = e.vertices[0], i = e.vertices[1], a = e.vertices[2],
            o = e.vertices[3];
        if (isNaN(n.z) && isNaN(i.z) && isNaN(a.z) && isNaN(o.z)) return !1;
        if (isNaN(n.z) || isNaN(i.z) || isNaN(a.z) || isNaN(o.z)) return !0;
        var s = E(n, i, a, o, t, r), u = M(n, i, t, r), c = M(i, a, t, r),
            l = M(a, o, t, r), p = M(o, n, t, r);
        return g(n, u, t) || g(i, u, t) || g(i, c, t) || g(a, c, t) ||
            g(a, l, t) || g(o, l, t) || g(o, p, t) || g(n, p, t) ||
            y(n, u, s, t, r) || y(u, i, s, t, r) || y(i, c, s, t, r) ||
            y(c, a, s, t, r) || y(a, l, s, t, r) || y(l, o, s, t, r) ||
            y(o, p, s, t, r) || y(p, n, s, t, r)
      }
      function y(e, t, n, i, a) {
        if (e.z > 0 == t.z > 0 && t.z > 0 == n.z > 0) return !1;
        var o, s, u, c;
        if (e.z > 0 == t.z > 0) {
          if (o = S(e, t, i), o.z > 0 != e.z > 0) return !0;
          s = D(e, n, i, a), u = D(t, n, i, a), c = D(o, n, i, a)
        } else if (t.z > 0 == n.z > 0) {
          if (o = S(t, n, i), o.z > 0 != t.z > 0) return !0;
          s = D(t, e, i, a), u = D(n, e, i, a), c = D(o, e, i, a)
        } else {
          if (o = S(n, e, i), o.z > 0 != n.z > 0) return !0;
          s = D(n, t, i, a), u = D(e, t, i, a), c = D(o, t, i, a)
        }
        var l = a.xtolerance, p = a.ytolerance;
        return r.pointToSegment(
                   p * c.x, l * c.y, p * s.x, l * s.y, p * u.x, l * u.y) > l * p
      }
      function g(e, t, r) {
        if (isNaN(e.z) && isNaN(t.z)) return !1;
        if (isNaN(e.z) || isNaN(t.z)) return e.z > 0 || t.z > 0;
        var n = S(e, t, r), i = 4 * n.z - t.z - 3 * e.z,
            a = (r(.9999 * e.x + 1e-4 * t.x, .9999 * e.y + 1e-4 * t.y) - e.z) /
            1e-4,
            o = Math.max(Math.abs(e.z), Math.abs(t.z));
        return Math.abs(i - a) > .125 * o
      }
      function v(e, t) {
        return e.vertices[1].x - e.vertices[0].x < 10 * t.xtolerance ||
            e.vertices[0].y - e.vertices[3].y < 10 * t.ytolerance
      }
      function b(e, t) {
        return e.vertices[0].x < t.xmin || e.vertices[0].y > t.ymax ||
            e.vertices[2].x > t.xmax || e.vertices[2].y < t.ymin
      }
      function x(e, t) {
        return e.x < t.xmin || e.x > t.xmax || e.y < t.ymin || e.y > t.ymax
      }
      function _(e, t, r) {
        return o(e, t, r(e, t))
      }
      function S(e, t, r) {
        return _(.5 * (e.x + t.x), .5 * (e.y + t.y), r)
      }
      function M(e, t, r, n) {
        if (x(e, n) || x(t, n)) return S(e, t, r);
        if (isNaN(e.z) || isNaN(t.z)) return T(e, t, r, n);
        if (e.z > 0 != t.z > 0) return S(e, t, r);
        var i = r(.99 * e.x + .01 * t.x, .99 * e.y + .01 * t.y) - e.z,
            a = t.z - r(.01 * e.x + .99 * t.x, .01 * e.y + .99 * t.y);
        return isNaN(i) || isNaN(a) ? S(e, t, r) :
            i > 0 == a > 0          ? S(e, t, r) :
                                      w(o(e.x, e.y, i), o(t.x, t.y, a), r)
      }
      function E(e, t, r, n, i, a) {
        var o = M(e, r, i, a);
        return e.z > 0 == r.z > 0 && o.z > 0 != e.z > 0 ?
            o :
            (o = M(t, n, i, a),
             t.z > 0 == n.z > 0 && o.z > 0 != t.z > 0 ? o : S(e, r, i))
      }
      function w(e, t, r) {
        if (isNaN(e.z)) return t;
        if (isNaN(t.z)) return e;
        if (isFinite(e.z) || isFinite(t.z)) {
          if (isFinite(e.z)) {
            if (isFinite(t.z)) {
              var n = 1 - e.z / t.z, i = 1 - t.z / e.z;
              return _(e.x / n + t.x / i, e.y / n + t.y / i, r)
            }
            return e
          }
          return t
        }
        return S(e, t, r)
      }
      function D(e, t, r, n) {
        var i = e.x, a = t.x, u = e.y, c = t.y, l = e.z, p = t.z,
            f = n.xtolerance, h = n.ytolerance;
        if (x(e, n) || x(t, n)) {
          var d = S(e, t, r);
          return s(d.x, d.y, !1)
        }
        for (; Math.abs(i - a) > f || Math.abs(u - c) > h;) {
          var m = .5 * (i + a), y = .5 * (u + c), g = r(m, y);
          g > 0 == l > 0 ? (i = m, u = y, l = g) : (a = m, c = y, p = g)
        }
        if (isNaN(l)) return s(a, c, !1);
        if (isNaN(p)) return s(i, u, !1);
        var v = w(o(i, u, l), o(a, c, p), r),
            b = 0 === l || 0 === p || 0 === v.z ||
            v.z >= l == p >= v.z && Math.abs(v.z) < 1e250;
        return s(v.x, v.y, b)
      }
      function T(e, t, r, n) {
        if (isNaN(e.z) === isNaN(t.z)) return S(e, t, r);
        if (isNaN(e.z)) {
          var i = e;
          e = t, t = i
        }
        for (var a = e.x, s = t.x, u = e.y, c = t.y, l = e.z, p = n.xtolerance,
                 f = n.ytolerance;
             Math.abs(a - s) > p || Math.abs(u - c) > f;) {
          var h = .5 * (a + s), d = .5 * (u + c), m = r(h, d);
          isNaN(m) === isNaN(l) ? (a = h, u = d, l = m) : (s = h, c = d)
        }
        return o(a, u, l)
      }
      function P(e, t, r) {
        var n = {triangles: [], edgeCache: {}, domain: r, fn: t};
        return I(e, n), n.triangles
      }
      function I(e, t) {
        e.children &&
            (I(e.children[0], t), I(e.children[1], t), I(e.children[2], t),
             I(e.children[3], t), C(e.children[0], e.children[1], t),
             C(e.children[3], e.children[2], t),
             O(e.children[1], e.children[2], t),
             O(e.children[0], e.children[3], t))
      }
      function C(e, t, r) {
        e.children && t.children ? (C(e.children[1], t.children[0], r),
                                    C(e.children[2], t.children[3], r)) :
            e.children ? (C(e.children[1], t, r), C(e.children[2], t, r)) :
            t.children ? (C(e, t.children[0], r), C(e, t.children[3], r)) :
                         A(e, t, r)
      }
      function O(e, t, r) {
        e.children && t.children ? (O(e.children[2], t.children[1], r),
                                    O(e.children[3], t.children[0], r)) :
            e.children ? (O(e.children[2], t, r), O(e.children[3], t, r)) :
            t.children ? (O(e, t.children[1], r), O(e, t.children[0], r)) :
                         L(e, t, r)
      }
      function A(e, t, r) {
        if (e.center && t.center) {
          var n, i;
          e.depth >= t.depth ?
              (n = M(e.vertices[1], e.vertices[2], r.fn, r.domain),
               i = N(e.vertices[1], t.center, e.vertices[2], e.center, n)) :
              (n = M(t.vertices[0], t.vertices[3], r.fn, r.domain),
               i = N(t.vertices[0], t.center, t.vertices[3], e.center, n)),
              R(i, r.edgeCache, r.domain);
          for (var a = 0; a < 4; a++) r.triangles.push(i[a])
        }
      }
      function L(e, t, r) {
        if (e.center && t.center) {
          var n, i;
          e.depth >= t.depth ?
              (n = M(e.vertices[3], e.vertices[2], r.fn, r.domain),
               i = N(e.vertices[2], t.center, e.vertices[3], e.center, n)) :
              (n = M(t.vertices[1], t.vertices[0], r.fn, r.domain),
               i = N(t.vertices[1], t.center, t.vertices[0], e.center, n)),
              R(i, r.edgeCache, r.domain);
          for (var a = 0; a < 4; a++) r.triangles.push(i[a])
        }
      }
      function N(e, t, r, n, i) {
        return [u(e, i, t), u(t, i, r), u(r, i, n), u(n, i, e)]
      }
      function q(e, t, r) {
        return e.z > 0 && !x(e, r) && (!(t.z > 0) || x(t, r))
      }
      function F(e, t) {
        return e.x + ',' + e.y + ',' + t.x + ',' + t.y
      }
      function R(e, t, r) {
        V(e[0], e[1], e[2], F(e[1].vertices[2], e[1].vertices[0]), t, r),
            V(e[1], e[2], e[3], F(e[2].vertices[0], e[2].vertices[2]), t, r),
            V(e[2], e[3], e[0], F(e[3].vertices[2], e[3].vertices[0]), t, r),
            V(e[3], e[0], e[1], F(e[0].vertices[0], e[0].vertices[2]), t, r)
      }
      function V(e, t, r, n, i, a) {
        var o = t.vertices[0], s = t.vertices[1], u = t.vertices[2];
        q(s, u, a) && (t.next = r), q(o, s, a) && (t.next = e),
            q(u, o, a) && B(t, n, i), q(o, u, a) && k(t, n, i)
      }
      function k(e, t, r) {
        r[t] ? r[t].next = e : r[t] = e
      }
      function B(e, t, r) {
        r[t] ? e.next = r[t] : r[t] = e
      }
      function j(e, t, r) {
        for (var i = {
               fillAccumulator: new n.Accumulator(r),
               strokeAccumulator: new n.Accumulator(r),
               fn: t,
               domain: r
             },
                 a = 0;
             a < e.length; a++) {
          var o = e[a];
          o.next && !o.visited && z(o, i)
        }
        return {
          strokeSegments: i.strokeAccumulator.finish().segments,
              fillSegments: i.fillAccumulator.finish().segments
        }
      }
      function z(e, t) {
        for (;;) {
          var r = e.vertices[0], n = e.vertices[1], i = e.vertices[2];
          if (G(r, n, t), G(n, i, t), G(i, r, t), e.visited) break;
          if (!e.next) break;
          e.visited = !0, e = e.next
        }
        t.strokeAccumulator.breakSegment(), t.fillAccumulator.breakSegment()
      }
      function G(e, t, r) {
        if (q(e, t, r.domain)) {
          var n = D(e, t, r.fn, r.domain);
          r.fillAccumulator.addPoint([n.x, n.y]),
              n.isZero ? r.strokeAccumulator.addPoint([n.x, n.y]) :
                         r.strokeAccumulator.breakSegment()
        }
      }
      function U(e) {
        for (var t = [], r = 0; r < e.length; r++) {
          var n = e[r];
          t.push([
            n.vertices[0].x, n.vertices[0].y, n.vertices[1].x, n.vertices[1].y,
            n.vertices[2].x, n.vertices[2].y, n.vertices[0].x, n.vertices[0].y
          ])
        }
        return t
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var W = 5, Y = Math.pow(2, 14);
      t.sampleImplicit = i, t.sampleImplicitDiagnostic = a, t.buildQuadTree = f,
      t.triangulate = P, t.traceContours = j, t.displayTriangles = U
    });
define('core/math/workerconfig', [], function() {
  'use strict';
  return {
    pointsOfInterest: !0, plotSingleVariableImplicitEquations: !0,
        plotImplicits: !0, plotInequalities: !0, sliders: !0
  }
});
define(
    'core/math/poi-finding-accumulator',
    [
      'require', 'exports', 'core/math/workerconfig', 'tslib',
      './curve-accumulator', './poi'
    ],
    function(e, t, r, n, i, a) {
      'use strict';
      function o(e) {
        return Math.abs(e) < 5e-8
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var s = function(e) {
        function t(t, r, n) {
          var i = e.call(this, t) || this;
          return i.domain = t, i.fn = r, i.derivative = n, i.poiData = {
            zeros: {x: [], y: []},
            intercept: {x: [], y: []},
            extrema: {x: [], y: []}
          },
                 i.zeroBuffer = [], i.extremumBuffer = [], i
        }
        return n.__extends(t, e),
               t.prototype
                   .getPOI =
                   function() {
                 return r.pointsOfInterest ?
                     (void 0 !== this.fn &&
                          (this.poiData.intercept =
                               this.findIntercept(this.fn)),
                      this.poiData) :
                     {
                       zeros: {x: [], y: []},
                       intercept: {x: [], y: []},
                       extrema: {x: [], y: []}
                     }
               },
        t.prototype.addLinearZero =
                   function(e) {
          var t = -e[0] / e[1];
          this.isOutsideDomain(t) || (this.poiData.zeros = {x: [t], y: [0]})
        },
        t.prototype.addLinearIntercept =
                   function(e) {
          this.isOutsideDomain(0) ||
              (this.poiData.intercept = {x: [0], y: [e[0]]})
        },
        t.prototype.isOutsideDomain =
                   function(e) {
          return !this.domain || void 0 === this.domain.min ||
              void 0 === this.domain.max ||
              (e < this.domain.min || e > this.domain.max || isNaN(e))
        },
        t.prototype.addPoint =
                   function(t) {
          0 === this.segment.length && o(t[1]) &&
              (this.poiData.zeros.x.push(t[0]),
               this.poiData.zeros.y.push(t[1])),
              this.updateZeroBuffer(t), this.updateExtremumBuffer(t),
              e.prototype.addPoint.call(this, t)
        },
        t.prototype.updateZeroBuffer =
                   function(e) {
          if (this.fn) {
            if (!isFinite(e[0]) || !isFinite(e[1]))
              return void (this.zeroBuffer.length = 0);
            switch (this.zeroBuffer.length) {
              case 0:
                if (o(e[1])) return;
                return void this.zeroBuffer.push(e);
              case 1:
                if (0 === e[1]) return void this.zeroBuffer.push(e);
                if (e[1] > 0 != this.zeroBuffer[0][1] > 0) {
                  var t = a.bisectZero(
                      this.zeroBuffer[0][0], this.zeroBuffer[0][1], e[0], e[1],
                      this.fn);
                  return t &&
                             (this.poiData.zeros.x.push(t[0]),
                              this.poiData.zeros.y.push(t[1])),
                         this.zeroBuffer.length = 0,
                         void this.zeroBuffer.push(e)
                }
                return this.zeroBuffer.length = 0, void this.zeroBuffer.push(e);
              case 2:
                if (0 === e[1]) return;
                if (e[1] > 0 != this.zeroBuffer[0][1] > 0) {
                  var t = a.flatCenter(
                      this.zeroBuffer[0][0], this.zeroBuffer[0][1],
                      this.zeroBuffer[1][0], this.zeroBuffer[1][1], e[0], e[1],
                      this.fn);
                  return t &&
                             (this.poiData.zeros.x.push(t[0]),
                              this.poiData.zeros.y.push(t[1])),
                         this.zeroBuffer.length = 0,
                         void this.zeroBuffer.push(e)
                }
                return this.zeroBuffer.length = 0, void this.zeroBuffer.push(e)
            }
          }
        },
        t.prototype.updateExtremumBuffer =
                   function(e) {
          if (this.fn) {
            if (!isFinite(e[0]) || !isFinite(e[1]))
              return void (this.zeroBuffer.length = 0);
            switch (this.extremumBuffer.length) {
              case 0:
                return void this.extremumBuffer.push(e);
              case 1:
                return e[1] === this.extremumBuffer[0][1] &&
                           (this.extremumBuffer.length = 0),
                       void this.extremumBuffer.push(e);
              case 2:
                if (e[1] === this.extremumBuffer[1][1])
                  return void this.extremumBuffer.push(e);
                if (e[1] > this.extremumBuffer[1][1] !=
                    this.extremumBuffer[1][1] > this.extremumBuffer[0][1]) {
                  var t = this.bisectExtremumUsingDerivative(
                      this.extremumBuffer[0][0], this.extremumBuffer[0][1],
                      this.extremumBuffer[1][0], this.extremumBuffer[1][1],
                      e[0], e[1]);
                  if (t) {
                    this.poiData.extrema.x.push(t[0]),
                        this.poiData.extrema.y.push(t[1]);
                    !!!a.bisectJump(
                        this.extremumBuffer[0][0], this.extremumBuffer[0][1],
                        t[0], t[1], e[0], e[1], this.fn, this.ytolerance) &&
                        t[0] > this.segment[this.segment.length - 2] &&
                        (this.pendingPoint = t)
                  }
                  return this.extremumBuffer.shift(),
                         void this.extremumBuffer.push(e)
                }
                return this.extremumBuffer.shift(),
                       void this.extremumBuffer.push(e);
              case 3:
                if (e[1] === this.extremumBuffer[1][1]) return;
                if (e[1] > this.extremumBuffer[1][1] !=
                    this.extremumBuffer[1][1] > this.extremumBuffer[0][1]) {
                  var t = void 0,
                      r = .5 *
                      (this.extremumBuffer[1][0] + this.extremumBuffer[2][0]),
                      n = this.fn(r);
                  return t = n === this.extremumBuffer[1][1] ?
                             a.flatCenter(
                                 this.extremumBuffer[0][0],
                                 this.extremumBuffer[0][1],
                                 this.extremumBuffer[1][0],
                                 this.extremumBuffer[1][1], e[0], e[1],
                                 this.fn) :
                             this.bisectExtremumUsingDerivative(
                                 this.extremumBuffer[1][0],
                                 this.extremumBuffer[1][1], r, n,
                                 this.extremumBuffer[2][0],
                                 this.extremumBuffer[2][1]),
                         t &&
                             (this.poiData.extrema.x.push(t[0]),
                              this.poiData.extrema.y.push(t[1])),
                         this.extremumBuffer.shift(),
                         this.extremumBuffer.shift(),
                         void this.extremumBuffer.push(e)
                }
                return this.extremumBuffer.shift(), this.extremumBuffer.shift(),
                       void this.extremumBuffer.push(e)
            }
          }
        },
        t.prototype.bisectExtremumUsingDerivative = function(e, t, r, n, i, o) {
          if (this.fn) {
            var s;
            if (this.derivative) {
              var u = this.derivative(e), c = this.derivative(i);
              if (!isNaN(u) && !isNaN(c) && u < 0 != c < 0) {
                var l = a.bisectZero(e, u, i, c, this.derivative);
                l && (s = [l[0], this.fn(l[0])])
              }
            }
            return s || (s = a.bisectExtremum(e, t, r, n, i, o, this.fn)), s
          }
        }, t.prototype.breakSegment = function() {
          this.zeroBuffer.length = 0, this.extremumBuffer.length = 0,
          this.flushPending(),
          this.segment.length > 2 &&
              (this.segments.push(this.segment),
               o(this.segment[this.segment.length - 1]) &&
                   (this.poiData.zeros.x.push(
                        this.segment[this.segment.length - 2]),
                    this.poiData.zeros.y.push(
                        this.segment[this.segment.length - 1]))),
          this.segment = []
        }, t.prototype.findIntercept = function(e) {
          if (!e) return {x: [], y: []};
          var t = e(0);
          return isFinite(t) ? {x: [0], y: [e(0)]} : {x: [], y: []}
        }, t.prototype.finish = function() {
          return {
            segments: this.getSegments(), resolved: !0, poi: this.getPOI()
          }
        }, t
      }(i.Accumulator);
      t.default = s
    });
define('core/types/graphmode', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.X = 1, t.Y = 2, t.XYPOINT = 3, t.XYPOINT_MOVABLE = 4, t.PARAMETRIC = 5,
      t.POLAR = 6, t.POLYGONFILL = 7, t.IMPLICIT = 8, t.NONE = 10,
      t.VISUALIZATION = 11, t.OBJECT3D = 12, t.Z_3D = 13,
      t.PARAMETRIC_CURVE_3D = 14
});
define('core/math/domaintypes', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.emptyDomain = function() {
        return {
          type: 'empty'
        }
      }, t.unknownDomain = function() {
        return {
          type: 'unknown'
        }
      }, t.knownDomain = function(e) {
        return isNaN(e[0]) || isNaN(e[1]) || e[1] < e[0] ?
            t.emptyDomain() :
            {type: 'known', bounds: e}
      }, t.allReals = function() {
        return t.knownDomain([-1 / 0, 1 / 0])
      }, t.intersectDomains = function(e, r) {
        if ('empty' === e.type || 'empty' === r.type) return t.emptyDomain();
        if ('unknown' === e.type || 'unknown' === r.type)
          return t.unknownDomain();
        if (e.bounds && r.bounds) {
          var n = [
            Math.max(e.bounds[0], r.bounds[0]),
            Math.min(e.bounds[1], r.bounds[1])
          ];
          return t.knownDomain(n)
        }
        return t.emptyDomain()
      }
});
define(
    'core/math/plotter',
    [
      'require', 'exports', 'tslib', 'core/math/distance', './poi',
      './implicit-plotter', './curve-accumulator', './poi-finding-accumulator',
      'core/types/graphmode', './domaintypes'
    ],
    function(e, t, r, n, i, a, o, s, u, c) {
      'use strict';
      function l(e, t) {
        for (var r, n = new s.default(t, e), i = t.min; i <= t.max + t.step / 2;
             i += t.step)
          r = e(i), isFinite(r) ? n.addPoint([i, r]) : n.breakSegment();
        return n.finish()
      }
      function p(e, t) {
        var r = new s.default(t), n = e[0] + t.min * e[1],
            i = e[0] + t.max * e[1];
        return isFinite(n) && isFinite(i) ?
            (r.addPoint([t.min, n]), r.addPoint([t.max, i]), r.addLinearZero(e),
             r.addLinearIntercept(e), r.finish()) :
            r.finish()
      }
      function f(e, t) {
        var r = p(e[0], t), n = p(e[1], t);
        return r.segments.length && n.segments.length &&
                4 === r.segments[0].length && 4 === n.segments[0].length ?
            {
              segments: [[
                r.segments[0][1], n.segments[0][1], r.segments[0][3],
                n.segments[0][3]
              ]],
              resolved: !0
            } :
            {segments: [], resolved: !0}
      }
      function h(e, t) {
        var n = e(t);
        return {
          segments: [r.__spreadArrays(n, n)], resolved: !0
        }
      }
      function d(e, t, r) {
        var a = r.fn, o = r.jumpTolerance, s = e[0], u = e[1], c = t[0],
            l = t[1], p = n.mean(s, c), f = a(p);
        return i.bisectJump(s, u, p, f, c, l, a, o)
      }
      function m(e, t, r) {
        var n = t, i = e(n);
        return isFinite(i) || (n = t + r, i = e(n)),
               isFinite(i) || (n = t - r, i = e(n)), [n, i]
      }
      function y(e, t, r) {
        var n, a, o, s, u, c, l, p = new O(e, t, r), f = t.step / 10, h = t.min;
        n = m(e, h, f), l = n[0], c = n[1];
        var d = [l, c];
        isFinite(c) && p.accumulator.addPoint([l, c]);
        for (var y = Math.ceil((t.max - t.min) / t.step), g = 1; g <= y; g++)
          h = (y - g) / y * t.min + g / y * t.max, a = m(e, h, f), l = a[0],
          c = a[1],
          isFinite(c) && isFinite(d[1]) ?
              (o = C(d, [l, c], p), l = o[0], c = o[1],
               p.accumulator.addPoint([l, c])) :
              isFinite(c) && !isFinite(d[1]) ?
              (u = i.bisectFinite(d[0], d[1], l, c, e)) &&
                  (u[0] !== l && p.accumulator.addPoint(u), s = C(u, [l, c], p),
                   l = s[0], c = s[1], p.accumulator.addPoint([l, c])) :
              !isFinite(c) && isFinite(d[1]) &&
                  (u = i.bisectFinite(d[0], d[1], l, c, e)) &&
                  (u = C(d, u, p), u[0] !== d[0] && p.accumulator.addPoint(u),
                   p.accumulator.breakSegment()),
          d = [l, c];
        return p.accumulator.finish()
      }
      function g(e) {
        for (var t = e.fn, r = e.domain, n = r.min, i = r.max,
                 a = Math.floor(n), o = Math.ceil(i), s = [], u = a;
             u <= o; u++) {
          var c = t(u);
          isFinite(u) && isFinite(c) && s.push([u, c])
        }
        return {
          segments: s, resolved: !0
        }
      }
      function v(e, t, r, n) {
        function i(e, t) {
          var i = t % 2 == 0 ? 1 : -1;
          if (!n && -1 === i) return !1;
          for (var a = t * (Math.PI / r), o = [u, u + 1, u + 2, u + 3], s = !1,
                   c = 0, p = o.length;
               c < p; c++) {
            var f = e(o[c]), h = e(o[c] + a);
            if (isFinite(f) && isFinite(h) && (s = !0),
                isFinite(f) !== isFinite(h) || Math.abs(f - i * h) > l)
              return !1
          }
          return !!s
        }
        var a, o, s, u = t.min, c = t.max - t.min,
                     l = t.xtolerance && t.ytolerance ?
                          Math.min(t.xtolerance, t.ytolerance) :
            t.tolerance ? t.tolerance :
                          0,
                     p = Math.floor(c / (Math.PI / r));
        for (a = 1; a <= p; a++)
          if (i(e, a)) {
            for (s = a, o = 2; o * a <= p; o++) i(e, o * a) || (s = void 0);
            if (s) break
          }
        return s ? s * (Math.PI / r) : null
      }
      function b(e) {
        return [e[1] * Math.cos(e[0]), e[1] * Math.sin(e[0])]
      }
      function x(e, t) {
        return t.map = b, y(e, t)
      }
      function _(e, t) {
        for (var r = e.min, n = e.max, i = e.step, a = n - r,
                 o = Math.ceil(a / i), s = a / o, u = 0;
             u < o; u++)
          t(r + u * s);
        t(n)
      }
      function S(e, t) {
        if (t.max < t.min) return {segments: [], resolved: !0};
        var r = new o.Accumulator(t), n = t.min, i = e(n);
        isFinite(i[0]) && isFinite(i[1]) && r.addPoint(i);
        var a;
        return _(t, function(t) {
                 a = e(t), M(e, n, i, t, a, 10, r), n = t, i = a
               }), r.finish()
      }
      function M(e, t, r, i, a, o, s) {
        if (i !== t) {
          var u = s.xtolerance, c = s.ytolerance, l = s.ztolerance,
              p = n.mean(t, i), f = e(p),
              h = isFinite(r[0]) && isFinite(r[1]) &&
              (2 === r.length || isFinite(r[2])),
              d = isFinite(a[0]) && isFinite(a[1]) &&
              (2 === a.length || isFinite(a[2])),
              m = isFinite(f[0]) && isFinite(f[1]) &&
              (2 === f.length || isFinite(f[2]));
          if (0 === o || p === t || p === i)
            return s.breakSegment(), void (d && s.addPoint(a));
          if (h || d) {
            if (h !== d) {
              for (var y = t, g = i, v = r, b = a; t !== p && p !== i;)
                m == h ? (t = p, r = f, h = m) : (i = p, a = f, d = m),
                    p = t + (i - t) / 2, f = e(p),
                    m = isFinite(f[0]) && isFinite(f[1]) &&
                    (2 === f.length || isFinite(f[2]));
              return void (
                  h ? (M(e, y, v, t, r, o - 1, s), s.breakSegment()) :
                      (s.breakSegment(), s.addPoint(a),
                       M(e, i, a, g, b, o - 1, s)))
            }
            if (h && m && d) {
              var x = n.pointToSegmentParameter(
                  f[0], f[1], f[2] || 0, r[0], r[1], r[2] || 0, a[0], a[1],
                  a[2] || 0);
              if (x > .2 && x < .8 &&
                  Math.abs(f[0] - (r[0] + x * (a[0] - r[0]))) <= u &&
                  Math.abs(f[1] - (r[1] + x * (a[1] - r[1]))) <= c &&
                  (2 === r.length ||
                   Math.abs(f[2] - (r[2] + x * (a[2] - r[2]))) <= l))
                return void s.addPoint(a)
            }
            r[0] === f[0] && r[1] === f[1] || M(e, t, r, p, f, o - 1, s),
                a[0] === f[0] && a[1] === f[1] || M(e, p, f, i, a, o - 1, s)
          }
        }
      }
      function E(e, t) {
        for (var r = e.fn, n = t.xmin, i = t.xmax, a = t.ymin, o = t.ymax,
                 s = (i - n) / 30, u = (o - a) / 30, c = [], l = [], p = [],
                 f = s / 1e3, h = u / 1e3, d = 0;
             d < 30; d++)
          for (var m = 0; m < 30; m++) {
            var y = n + d * s, g = a + m * u, v = r(y, g);
            c.push(y, g, v);
            var b = r(y + f, g) - v, x = r(y, g + h) - v, _ = b * h, S = x * f,
                M = -f * h, E = Math.sqrt(_ * _ + S * S + M * M);
            l.push(_ / E, S / E, M / E)
          }
        for (var d = 0; d < 29; d++)
          for (var m = 0; m < 29; m++) {
            var w = 30 * m + d, D = 30 * m + d + 1, T = 30 * (m + 1) + d,
                P = 30 * (m + 1) + d + 1;
            p.push(w, T, D), p.push(T, P, D)
          }
        return {
          cacheKey: e.source + ':' + JSON.stringify(t),
              positions: new Float32Array(c), normals: new Float32Array(l),
              faces: new Int16Array(p)
        }
      }
      function w(e) {
        if (!e) return !1;
        var t = e.viewport.xmin, r = e.viewport.xmax, n = e.viewport.ymin,
            i = e.viewport.ymax;
        return !(!isFinite(t) || !isFinite(r) || r <= t) &&
            (!(!isFinite(n) || !isFinite(i) || i <= n) &&
             (!(!isFinite(e.screen.width) || e.screen.width <= 0) &&
              !(!isFinite(e.screen.height) || e.screen.height <= 0)))
      }
      function D(e, t, r) {
        var n, i, a = e.viewport.xmin, o = e.viewport.xmax, s = e.viewport.ymin,
                  l = e.viewport.ymax, p = e.trigAngleMultiplier || 1,
                  f = e.oversample || 4, h = 1 / f * (o - a) / e.screen.width,
                  d = 1 / f * (l - s) / e.screen.height, m = t.domainBound;
        switch (t.graphMode) {
          case u.X:
            switch (n = c.intersectDomains(c.knownDomain([s, l]), m), n.type) {
              case 'empty':
                return !1;
              case 'known':
                s = n.bounds[0], l = n.bounds[1]
            }
            i = {min: s, max: l, xtolerance: d, ytolerance: h, step: d};
            break;
          case u.Y:
            switch (n = c.intersectDomains(c.knownDomain([a, o]), m), n.type) {
              case 'empty':
                return !1;
              case 'known':
                a = n.bounds[0], o = n.bounds[1]
            }
            i = {min: a, max: o, xtolerance: h, ytolerance: d, step: h};
            break;
          case u.POLAR:
            if (!t.domain)
              throw new Error('Expected polar graph to have domain');
            if (i = {
                  min: t.domain.min,
                  max: t.domain.max,
                  step: 2 * Math.PI / p / 1e3,
                  tolerance: Math.min(h, d)
                },
                !t.domain.isExplicit) {
              var y = v(r, i, p, '=' === t.operator);
              y && (i.max = i.min + y)
            }
            i.step = Math.max(i.step, (i.max - i.min) / 11999);
            break;
          case u.PARAMETRIC:
          case u.PARAMETRIC_CURVE_3D:
            var g = t.domain ? t.domain.min : 0,
                b = t.domain ? t.domain.max : 1,
                x = t.domain ? t.domain.step : .01;
            switch (n = c.intersectDomains(c.knownDomain([g, b]), m), n.type) {
              case 'empty':
                return !1;
              case 'known':
                g = n.bounds[0], b = n.bounds[1]
            }
            i = {
              min: g,
              max: b,
              step: x,
              xtolerance: h,
              ytolerance: d,
              ztolerance: Math.min(h, d)
            };
            break;
          case u.IMPLICIT:
            i = {
              xmin: a,
              xmax: o,
              ymin: s,
              ymax: l,
              xtolerance: h,
              ytolerance: d
            };
            break;
          case u.Z_3D:
            return {xmin: -10, xmax: 10, ymin: -10, ymax: 10};
          default:
            return !1
        }
        return i
      }
      function T(e) {
        var t, r, n, i = e.viewState, o = e.graphInfo, s = e.compiled,
                     c = e.derivative, l = e.discrete, d = e.maxOverride,
                     m = s.fn, v = D(i, o, m), b = o.graphMode;
        if (v) {
          switch (b) {
            case u.X:
            case u.Y:
              var _ = c ? c.fn : void 0;
              if (l) {
                var M = v, w = M.min, T = M.max, P = M.step;
                t = g({
                  fn: m,
                  domain: {
                    min: Math.max(w, 0),
                    max: void 0 !== d ? Math.min(d, T) : T,
                    step: P
                  }
                })
              } else
                t = o.isLinear ? p(o.linearCoefficients, v) : y(m, v, _);
              break;
            case u.POLAR:
              t = x(m, v);
              break;
            case u.IMPLICIT:
              t = a.sampleImplicit(m, v);
              break;
            case u.PARAMETRIC:
              v.step || (v.step = (v.max - v.min) / 1e3),
                  t = v.max === v.min ? h(m, v.min) :
                  o.isLinear          ? f(o.linearCoefficients, v) :
                                        S(m, v);
              break;
            case u.PARAMETRIC_CURVE_3D:
              return v.step || (v.step = (v.max - v.min) / 1e3),
                     t = v.max === v.min ? h(m, v.min) : S(m, v), {
                       graphMode: u.PARAMETRIC_CURVE_3D,
                       segments: t.segments,
                       cacheKey: s.source + ':' + JSON.stringify(v),
                       color: o.color,
                       style: 'dummy'
                     };
            case u.Z_3D:
              return {
                meshData: E(s, v),
                color: o.color,
                graphMode: u.Z_3D,
                poi: {
                  zeros: {x: [], y: []},
                  extrema: {x: [], y: []},
                  intercept: {x: [], y: []}
                },
                compiled: s,
                style: 'dummy'
              };
            default:
              throw new Error('Programming Error: unexpected graphmode ' + b)
          }
          n = t.poi
        } else
          t = {segments: [], resolved: !0};
        if ((!n ||
             n.zeros.x.length + n.extrema.x.length + n.intercept.x.length >
                 250) &&
                (n = {
                  zeros: {x: [], y: []},
                  extrema: {x: [], y: []},
                  intercept: {x: [], y: []}
                }),
            b === u.X)
          for (var I in n)
            if (n.hasOwnProperty(I)) {
              var C = I;
              r = n[C].y, n[C].y = n[C].x, n[C].x = r
            }
        var O = {
          segments: t.segments,
          resolved: t.resolved,
          graphMode: b,
          color: o.color,
          style: l ? o.pointStyle : o.lineStyle,
          lineWidth: o.lineWidth,
          operator: o.operator,
          poi: n,
          compiled: s
        };
        if (b === u.POLAR) {
          var A = v;
          O.sampledDomain = { min: A.min, max: A.max, step: A.step }
        }
        return t.fillSegments && (O.fillSegments = t.fillSegments), O
      }
      function P(e, t, r) {
        var n, i, a, o, s = [], c = null;
        switch (r) {
          case u.POLAR:
            c = b;
            break;
          case u.X:
            c = function(e) {
              return [e[1], e[0]]
            }
        }
        for (n = 0; n < e.length; n++)
          for (o = e[n], i = 0; i < o.length; i += 2)
            a = [o[i], o[i + 1]], c && (a = c(a)), s.push(a[0], a[1]);
        for (n = t.length - 1; n >= 0; n--)
          for (o = t[n], i = o.length - 2; i >= 0; i -= 2)
            a = [o[i], o[i + 1]], c && (a = c(a)), s.push(a[0], a[1]);
        return s
      }
      function I(e, t, r) {
        for (var i =
                     function(e) {
                       var t = e[e.length - 1];
                       return t[t.length - 2]
                     },
                 a = [], o = 0, s = 0, u = [], c = [], l = -1 / 0, p = -1 / 0;
             ;) {
          if (l <= p) {
            if (o >= t.length) break;
            c.push(t[o++])
          }
          if (p <= l) {
            if (s >= e.length) break;
            u.push(e[s++])
          }
          if (l = i(c), p = i(u), n.approx(l, p, 4)) {
            a.push(P(u, c, r)), c = [], u = [];
            var f = Math.max(l, p);
            l = f, p = f
          }
        }
        return a
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var C = function(e, t, r) {
        var n = r.fn, i = r.jumpTolerance, a = r.accumulator;
        if (!isFinite(i) || i <= 0) return t;
        var o = d(e, t, r);
        if (!o) return t;
        for (var s = (t[0] - e[0]) / 10, u = [-s, s], c = t, l = 0;
             l < u.length; l++) {
          var p = e[0] + u[l], f = n(p);
          isFinite(f) || (p = e[0], f = e[1], p = e[0], f = e[1]);
          var h = t[0] + u[l], m = n(h);
          if (isFinite(m) ? c = [h, m] : (h = t[0], m = t[1]),
              d([p, f], [h, m], r)) {
            var y = o[0], g = o[1];
            return a.addPoint(y), a.breakSegment(), a.addPoint(g), t
          }
        }
        return c
      }, O = function() {
        function e(e, t, r) {
          this.derivative = r, this.accumulator = new s.default(t, e, r),
          this.fn = e, this.jumpTolerance = t.ytolerance || t.tolerance || 0
        }
        return e
      }();
      t.default = {
        sampleXYNaive: l,
        sampleLinear: p,
        sampleXY: y,
        findPiPeriod: v,
        samplePolar: x,
        sampleParametricRecursive: S,
        subsampleParametricRecursive: M,
        validateViewState: w,
        computeDomain: D,
        computeGraphData: T,
        polygonsFromSegments: I
      }
    });
define('core/lib/worker-i18n', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e, t) {
    return {
      msg: e, vars: t
    }
  }
  Object.defineProperty(t, '__esModule', {value: !0}), t.t = r
});
define('core/math/mathshim', ['require'], function(e) {
  'use strict';
  var t = {};
  return t.cosh = Math.cosh ||
             function(e) {
               return .5 * (Math.exp(e) + Math.exp(-e))
             },
         t.sinh = Math.sinh && 0 !== Math.sinh(1e-20) ?
             Math.sinh :
             function(e) {
               var r = e > 0 ? 1 : -1;
               return e = e > 0 ? e : -e,
                      .5 * -r * Math.exp(e) * t.expm1(-2 * e)
             },
         t.tanh = Math.tanh && 0 !== Math.tanh(1e-20) ?
             Math.tanh :
             function(e) {
               var r = e > 0 ? 1 : -1;
               e = e > 0 ? e : -e;
               var n = t.expm1(-2 * e);
               return -r * n / (2 + n)
             },
         t.acosh = Math.acosh ||
             function(e) {
               return e < 1 ? NaN : Math.log(e + t.sqrtxsqm1(e))
             },
         t.asinh = Math.asinh && 0 !== Math.asinh(1e-20) ?
             Math.asinh :
             function(e) {
               var r = e > 0 ? 1 : -1;
               return e = e > 0 ? e : -e,
                      1 + e * e == 1 ? r * t.log1p(e) :
                                       r * Math.log(e + t.sqrtxsqp1(e))
             },
         t.atanh = Math.atanh && 0 !== Math.atanh(1e-20) ?
             Math.atanh :
             function(e) {
               return .5 * (t.log1p(e) - t.log1p(-e))
             },
         t.expm1 = Math.expm1 || function(e) {
           return e + .5 * e * e === e ? e : Math.exp(e) - 1
         }, t.log1p = Math.log1p || function(e) {
           return e - .5 * e * e === e ? e : Math.log(1 + e)
         }, t.sqrtxsqp1 = function(e) {
           var t = e * e;
           return 1 + t === 1 ? 1 : 1 + t === t ? Math.abs(e) : Math.sqrt(t + 1)
         }, t.sqrtxsqm1 = function(e) {
           var t = e * e;
           return t < 1 ? NaN : t - 1 === t ? Math.abs(e) : Math.sqrt(t - 1)
         }, t
});
define(
    'core/math/quadrature', ['require', 'core/math/mathshim', 'core/math/poi'],
    function(e) {
      'use strict';
      function t(e, t, r) {
        return .5 * (t * (2 - r) + e * r)
      }
      function r(e, t, r) {
        var n = .5 * (t + r), i = l(t, e(t), n, e(n), r, e(r), e, 0);
        return i ? .5 * (i[0][0] + i[1][0]) : n
      }
      function n(e, t, r, n, i) {
        return {
          x1: e, x2: t, value: r, error: n, minerror: i
        }
      }
      function i(e, r, n) {
        var i = Math.abs(e(t(r, n, d))), a = Math.abs(e(t(r, n, 2 * d)));
        return !(i < d || a < d) && i > 1.95 * a
      }
      function a(e, r, a) {
        var o, s, u = t(a, r, v[0]), c = t(r, a, v[0]), l = e(u), f = e(c),
                  h = t(r, a, 1), d = e(h);
        if (isFinite(d) && !isFinite(l)) {
          if (o = p(u, l, h, d, e), Math.abs((o[0] - r) / (a - r)) > y)
            return n(r, a, NaN, NaN, NaN);
          r = o[0], l = o[1]
        }
        if (isFinite(d) && !isFinite(f)) {
          if (s = p(h, d, c, f, e), Math.abs((s[0] - a) / (a - r)) > y)
            return n(r, a, NaN, NaN, NaN);
          a = s[0], f = s[1]
        }
        if (isFinite(l) && isFinite(f) && !isFinite(d)) {
          if (o = p(u, l, h, d, e), s = p(h, d, c, f, e),
              Math.abs((s[0] - o[0]) / (a - r)) > y)
            return n(r, a, NaN, NaN, NaN);
          d = .5 * (o[1] + s[1])
        }
        if (i(e, r, a) || i(e, a, r)) return n(r, a, NaN, NaN, NaN);
        for (var m = d, x = 0, _ = 0, M = 0, E = 0, w = 0, D = 0, T = 0; T < g;
             T += 4)
          w = e(t(r, a, v[T])), D = e(t(a, r, v[T])),
          E = Math.max(E, Math.abs(w), Math.abs(D)), x += b[T] * (w + D),
          w = e(t(r, a, v[T + 1])), D = e(t(a, r, v[T + 1])),
          E = Math.max(E, Math.abs(w), Math.abs(D)), M += b[T + 1] * (w + D),
          w = e(t(r, a, v[T + 2])), D = e(t(a, r, v[T + 2])),
          E = Math.max(E, Math.abs(w), Math.abs(D)), _ += b[T + 2] * (w + D),
          w = e(t(r, a, v[T + 3])), D = e(t(a, r, v[T + 3])),
          E = Math.max(E, Math.abs(w), Math.abs(D)), M += b[T + 3] * (w + D);
        var P, I = m + x, C = I + _, O = C + M, A = Math.abs(_ - I),
               L = Math.abs(M - C), N = S * (a - r) * O,
               q = S * Math.abs(a - r) * E * b[0];
        return P = 0 === A ? S * Math.abs(a - r) * L :
                             S * Math.abs(a - r) * L * (L / A) * (L / A),
               P = Math.max(P, q), n(r, a, N, P, q)
      }
      function o(e) {
        for (var t = -1 / 0, r = -1 / 0, n = -1, i = 0, a = 0; a < e.length;
             a++) {
          var o = e[a];
          i += o.value, o.error > t && (t = o.error, n = a),
              o.minerror > r && (r = o.minerror)
        }
        return {
          maxerror: t, maxminerror: r, maxindex: n, totalvalue: i
        }
      }
      function s(e, n, i, s) {
        if (void 0 === s && (s = 32), !isFinite(n) || !isFinite(i)) return NaN;
        for (var u = [a(e, n, i)], c = o(u), l = 1; l < s &&
             (!(Math.abs(c.maxerror / c.totalvalue) <= 32 * m ||
                c.maxerror <= 32 * m || c.maxerror <= 32 * c.maxminerror) &&
              isFinite(c.maxerror) && isFinite(c.maxminerror));
             l++) {
          var p = u[u.length - 1];
          u[u.length - 1] = u[c.maxindex], u[c.maxindex] = p;
          var f = u.pop(), h = r(e, t(f.x2, f.x1, .125), t(f.x1, f.x2, .125));
          u.push(a(e, f.x1, h)), u.push(a(e, h, f.x2)), c = o(u)
        }
        return isFinite(c.maxerror) && isFinite(c.maxminerror) ?
            Math.abs(c.totalvalue) <= 10 * c.maxminerror ? 0 : c.totalvalue :
            NaN
      }
      var u = e('core/math/mathshim'), c = e('core/math/poi'), l = c.bisectJump,
          p = c.bisectFinite, f = 3.154019550531224, h = Math.pow(2, -13),
          d = h * h, m = d * d, y = d, g = 32, v = [], b = [];
      !function(e, t) {
        for (var r = g; r > 0; r--) {
          var n = f / g * r, i = u.sinh(n), a = u.cosh(Math.PI / 2 * i),
              o = 1 / (Math.exp(Math.PI / 2 * i) * a), s = u.cosh(n) / (a * a);
          e.push(o), t.push(s)
        }
      }(v, b);
      for (var x = 0, _ = 0; _ < b.length; _++) x += b[_];
      var S = 1 / (1 + 2 * x);
      return {
        quad: s
      }
    });
define('core/math/tofraction', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e, t) {
    if (void 0 === t && (t = 1e6), e === 1 / 0) return {n: 1 / 0, d: 1};
    if (e === -1 / 0) return {n: -1 / 0, d: 1};
    if (!isFinite(e)) return {n: NaN, d: 1};
    for (var r, n, i, a = 0, o = 1, s = 1, u = 0;;) {
      if (r = Math.floor(e), n = r * o + a, (i = r * u + s) > t) break;
      if (a = o, s = u, o = n, u = i, e === r) break;
      e = 1 / (e - r)
    }
    return {
      n: o, d: u
    }
  }
  Object.defineProperty(t, '__esModule', {value: !0}), t.default = r
}), function(e) {
  'use strict';
  function t(e, t) {
    var r = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
  }
  function r(e, t) {
    return e << t | e >>> 32 - t
  }
  function n(e, n, i, a, o, s) {
    return t(r(t(t(n, e), t(a, s)), o), i)
  }
  function i(e, t, r, i, a, o, s) {
    return n(t & r | ~t & i, e, t, a, o, s)
  }
  function a(e, t, r, i, a, o, s) {
    return n(t & i | r & ~i, e, t, a, o, s)
  }
  function o(e, t, r, i, a, o, s) {
    return n(t ^ r ^ i, e, t, a, o, s)
  }
  function s(e, t, r, i, a, o, s) {
    return n(r ^ (t | ~i), e, t, a, o, s)
  }
  function u(e, r) {
    e[r >> 5] |= 128 << r % 32, e[14 + (r + 64 >>> 9 << 4)] = r;
    var n, u, c, l, p, f = 1732584193, h = -271733879, d = -1732584194,
                       m = 271733878;
    for (n = 0; n < e.length; n += 16)
      u = f, c = h, l = d, p = m, f = i(f, h, d, m, e[n], 7, -680876936),
      m = i(m, f, h, d, e[n + 1], 12, -389564586),
      d = i(d, m, f, h, e[n + 2], 17, 606105819),
      h = i(h, d, m, f, e[n + 3], 22, -1044525330),
      f = i(f, h, d, m, e[n + 4], 7, -176418897),
      m = i(m, f, h, d, e[n + 5], 12, 1200080426),
      d = i(d, m, f, h, e[n + 6], 17, -1473231341),
      h = i(h, d, m, f, e[n + 7], 22, -45705983),
      f = i(f, h, d, m, e[n + 8], 7, 1770035416),
      m = i(m, f, h, d, e[n + 9], 12, -1958414417),
      d = i(d, m, f, h, e[n + 10], 17, -42063),
      h = i(h, d, m, f, e[n + 11], 22, -1990404162),
      f = i(f, h, d, m, e[n + 12], 7, 1804603682),
      m = i(m, f, h, d, e[n + 13], 12, -40341101),
      d = i(d, m, f, h, e[n + 14], 17, -1502002290),
      h = i(h, d, m, f, e[n + 15], 22, 1236535329),
      f = a(f, h, d, m, e[n + 1], 5, -165796510),
      m = a(m, f, h, d, e[n + 6], 9, -1069501632),
      d = a(d, m, f, h, e[n + 11], 14, 643717713),
      h = a(h, d, m, f, e[n], 20, -373897302),
      f = a(f, h, d, m, e[n + 5], 5, -701558691),
      m = a(m, f, h, d, e[n + 10], 9, 38016083),
      d = a(d, m, f, h, e[n + 15], 14, -660478335),
      h = a(h, d, m, f, e[n + 4], 20, -405537848),
      f = a(f, h, d, m, e[n + 9], 5, 568446438),
      m = a(m, f, h, d, e[n + 14], 9, -1019803690),
      d = a(d, m, f, h, e[n + 3], 14, -187363961),
      h = a(h, d, m, f, e[n + 8], 20, 1163531501),
      f = a(f, h, d, m, e[n + 13], 5, -1444681467),
      m = a(m, f, h, d, e[n + 2], 9, -51403784),
      d = a(d, m, f, h, e[n + 7], 14, 1735328473),
      h = a(h, d, m, f, e[n + 12], 20, -1926607734),
      f = o(f, h, d, m, e[n + 5], 4, -378558),
      m = o(m, f, h, d, e[n + 8], 11, -2022574463),
      d = o(d, m, f, h, e[n + 11], 16, 1839030562),
      h = o(h, d, m, f, e[n + 14], 23, -35309556),
      f = o(f, h, d, m, e[n + 1], 4, -1530992060),
      m = o(m, f, h, d, e[n + 4], 11, 1272893353),
      d = o(d, m, f, h, e[n + 7], 16, -155497632),
      h = o(h, d, m, f, e[n + 10], 23, -1094730640),
      f = o(f, h, d, m, e[n + 13], 4, 681279174),
      m = o(m, f, h, d, e[n], 11, -358537222),
      d = o(d, m, f, h, e[n + 3], 16, -722521979),
      h = o(h, d, m, f, e[n + 6], 23, 76029189),
      f = o(f, h, d, m, e[n + 9], 4, -640364487),
      m = o(m, f, h, d, e[n + 12], 11, -421815835),
      d = o(d, m, f, h, e[n + 15], 16, 530742520),
      h = o(h, d, m, f, e[n + 2], 23, -995338651),
      f = s(f, h, d, m, e[n], 6, -198630844),
      m = s(m, f, h, d, e[n + 7], 10, 1126891415),
      d = s(d, m, f, h, e[n + 14], 15, -1416354905),
      h = s(h, d, m, f, e[n + 5], 21, -57434055),
      f = s(f, h, d, m, e[n + 12], 6, 1700485571),
      m = s(m, f, h, d, e[n + 3], 10, -1894986606),
      d = s(d, m, f, h, e[n + 10], 15, -1051523),
      h = s(h, d, m, f, e[n + 1], 21, -2054922799),
      f = s(f, h, d, m, e[n + 8], 6, 1873313359),
      m = s(m, f, h, d, e[n + 15], 10, -30611744),
      d = s(d, m, f, h, e[n + 6], 15, -1560198380),
      h = s(h, d, m, f, e[n + 13], 21, 1309151649),
      f = s(f, h, d, m, e[n + 4], 6, -145523070),
      m = s(m, f, h, d, e[n + 11], 10, -1120210379),
      d = s(d, m, f, h, e[n + 2], 15, 718787259),
      h = s(h, d, m, f, e[n + 9], 21, -343485551), f = t(f, u), h = t(h, c),
      d = t(d, l), m = t(m, p);
    return [f, h, d, m]
  }
  function c(e) {
    var t, r = '', n = 32 * e.length;
    for (t = 0; t < n; t += 8)
      r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
    return r
  }
  function l(e) {
    var t, r = [];
    for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
    var n = 8 * e.length;
    for (t = 0; t < n; t += 8)
      r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
    return r
  }
  function p(e) {
    return c(u(l(e), 8 * e.length))
  }
  function f(e, t) {
    var r, n, i = l(e), a = [], o = [];
    for (a[15] = o[15] = void 0, i.length > 16 && (i = u(i, 8 * e.length)),
        r = 0;
         r < 16; r += 1)
      a[r] = 909522486 ^ i[r], o[r] = 1549556828 ^ i[r];
    return n = u(a.concat(l(t)), 512 + 8 * t.length), c(u(o.concat(n), 640))
  }
  function h(e) {
    var t, r, n = '0123456789abcdef', i = '';
    for (r = 0; r < e.length; r += 1)
      t = e.charCodeAt(r), i += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
    return i
  }
  function d(e) {
    return unescape(encodeURIComponent(e))
  }
  function m(e) {
    return p(d(e))
  }
  function y(e) {
    return h(m(e))
  }
  function g(e, t) {
    return f(d(e), d(t))
  }
  function v(e, t) {
    return h(g(e, t))
  }
  function b(e, t, r) {
    return t ? r ? g(t, e) : v(t, e) : r ? m(e) : y(e)
  }
  'function' == typeof define && define.amd ? define(
                                                  'core/lib/md5', [],
                                                  function() {
                                                    return b
                                                  }) :
      'object' == typeof module&& module.exports ? module.exports = b :
                                                   e.md5 = b
}(this);
define(
    'core/math/builtin',
    [
      'require', 'core/math/mathshim', 'core/math/distance',
      'core/math/quadrature', 'core/math/tofraction', 'core/math/poi',
      'core/lib/md5'
    ],
    function(e) {
      'use strict';
      function t(e, t, r) {
        return Math.max(t, Math.min(r, e))
      }
      function r(e) {
        return !(e > 1e12) && Math.round(m * e) * Math.PI === e
      }
      function n(e) {
        if (e > 1e12) return !1;
        var t = Math.round(2 * m * e);
        return t % 2 == 1 && t * Math.PI == 2 * e
      }
      function i(e, t, r) {
        return r < 0 ? p.tcdf(-1 / 0, e, t) :
            r > 0    ? p.tcdf(-1 / 0, -e, t) :
                       2 * p.tcdf(-1 / 0, -Math.abs(e), t)
      }
      var a = e('core/math/mathshim'), o = e('core/math/distance'),
          s = e('core/math/quadrature'), u = e('core/math/tofraction').default,
          c = e('core/math/poi').floatMiddle, l = e('core/lib/md5'), p = {};
      p.cosh = a.cosh, p.sinh = a.sinh, p.tanh = a.tanh, p.acosh = a.acosh,
      p.asinh = a.asinh, p.atanh = a.atanh, p.expm1 = a.expm1,
      p.log1p = a.log1p, p.sqrtxsqp1 = a.sqrtxsqp1, p.sqrtxsqm1 = a.sqrtxsqm1,
      p.mod = function(e, t) {
        return e - t * Math.floor(e / t)
      }, p.round = function(e, t) {
        if (void 0 === t && (t = 0), 0 === (t = Math.round(t)))
          return Math.round(e);
        var r = Math.pow(10, t);
        return Math.round(e * r) / r
      }, p.sign = Math.sign || function(e) {
        return 0 === e ? 0 : e > 0 ? 1 : e < 0 ? -1 : NaN
      }, p.lcm = function(e, t) {
        e = Math.round(e), t = Math.round(t);
        var r = p.gcd(e, t);
        return Math.abs(e / r * t)
      }, p.gcd = function(e, t) {
        if (e = Math.round(e), t = Math.round(t), e < 0 && (e = -e),
            t < 0 && (t = -t), t > e) {
          var r = t;
          t = e, e = r
        }
        if (0 === t) return e;
        for (var n = e % t; n > 0;) e = t, t = n, n = e % t;
        return t
      }, p.listGCD = function(e) {
        if (0 === e.length) return NaN;
        for (var t = e[0], r = 1; r < e.length; r++) t = p.gcd(t, e[r]);
        return t
      }, p.listLCM = function(e) {
        if (0 === e.length) return NaN;
        for (var t = e[0], r = 1; r < e.length; r++) t = p.lcm(t, e[r]);
        return t
      }, p.nCr = function(e, t) {
        if (e = Math.round(e), (t = Math.round(t)) > e || e < 0 || t < 0)
          return 0;
        if (t === 1 / 0 || e === 1 / 0) return NaN;
        for (var r = 1, n = 0; n < t; n++) r *= (e - n) / (n + 1);
        return r
      }, p.nPr = function(e, t) {
        if (e = Math.round(e), (t = Math.round(t)) > e || e < 0 || t < 0)
          return 0;
        if (t === 1 / 0 || e === 1 / 0) return NaN;
        for (var r = 1, n = 0; n < t; n++) r *= e - n;
        return r
      }, p.factorial = function(e) {
        return p.gamma(e + 1)
      }, p.gamma = function(e) {
        if (e < 0) return Math.PI / (p.sin(Math.PI * e) * p.gamma(1 - e));
        if (e > 170) return 1 / 0;
        var t, r = Math.round(e) === e;
        return t = e < 15  ? f(e) :
                   e < 120 ? h(e) :
                             Math.exp(d(e)),
               r ? Math.round(t) : t
      };
      var f = function(e) {
        var t = 1 +
            e *
                (4.077131788261185 +
                 e *
                     (7.024675027156382 +
                      e *
                          (6.657107767450176 +
                           e *
                               (3.766266976716022 +
                                e *
                                    (1.2792371666711133 +
                                     e *
                                         (.24304596436338005 +
                                          .020049769312165774 * e)))))),
            r = 1 +
            e *
                (4.154347453162709 +
                 e *
                     (7.270007565107539 +
                      e *
                          (6.97805297331391 +
                           e *
                               (3.989651532924167 +
                                e *
                                    (1.367176195613119 +
                                     e *
                                         (.26175627691546965 +
                                          .021742722739397567 * e))))));
        return Math.E * Math.pow((1 + e) / Math.E, 1 + e) /
            (e * Math.sqrt(1 + e)) * (t / r)
      }, h = function(e) {
        var t = e - 1;
        return Math.pow(t, t) * Math.exp(g(t) - t) * Math.sqrt(2 * Math.PI * t)
      }, d = function(e) {
        var t = e - 1;
        return t * (Math.log(t) - 1) + .5 * Math.log(2 * Math.PI * t) + g(t)
      };
      p.lnGamma =
          function(e) {
        return e < 0 ? NaN : e < 15 ? Math.log(f(e)) : d(e)
      },
      p.bernoulliTable =
          [
            1 / 6, -1 / 30, 1 / 42, -1 / 30, 5 / 66, -691 / 2730, 7 / 6,
            -3617 / 510, 43867 / 798, -174611 / 330, 854513 / 138,
            -236364091 / 2730, 8553103 / 6, -23749461029 / 870
          ],
      p.cotDerivative = function(e, t) {
        if (e !== Math.floor(e)) return NaN;
        if (e < 0) return NaN;
        if (0 === e) return 1 / p.tan(t);
        var r = p.sin(t);
        if (1 === e) return -1 / (r * r);
        var n = p.cos(t);
        if (2 === e) return 2 * n / (r * r * r);
        var i, a, o, s, u, c = [0, 2];
        for (a = 3; a <= e; a++) {
          for (i = [], o = 0; o < a; o++)
            s = 0, u = 0, o > 0 && (s = (a - o + 1) * c[o - 1]),
            o + 2 < a && (u = (o + 1) * c[o + 1]), i.push(-(s + u));
          c = i
        }
        var l = 0;
        for (o = e - 1; o >= 0; o--) l = i[o] + n * l;
        return l / Math.pow(r, e + 1)
      }, p.polyGamma = function(e, t) {
        if (e < 0) return NaN;
        if (e !== Math.floor(e)) return NaN;
        var r = e % 2 == 0 ? -1 : 1;
        if (t < 0)
          return -r * p.polyGamma(e, 1 - t) -
              Math.pow(Math.PI, e + 1) * p.cotDerivative(e, Math.PI * t);
        for (var n = p.factorial(e), i = 0, a = Math.pow(t, -(e + 1)); t < 10;)
          i += a, t++, a = Math.pow(t, -(e + 1));
        i += 0 === e ? -Math.log(t) : a * t / e, i += .5 * a;
        for (var o = p.bernoulliTable, s = e + 1, u = 2, c = a * t * s / u,
                 l = 1 / (t * t), f = 1;
             f <= 14; f++)
          c *= l, i += c * o[f - 1], s++, u++, c *= s / u, s++, u++, c *= s / u;
        return n * r * i
      }, p.toFraction = u, p.log = function(e) {
        var t = Math.log(e);
        return Math.exp(Math.round(t)) === e ? Math.round(t) : t
      }, p.log_base = function(e, t) {
        if (0 === t) return NaN;
        var r = Math.log(e) / Math.log(t);
        return Math.pow(t, Math.round(r)) === e ? Math.round(r) : r
      }, p.common_log = function(e) {
        return p.log_base(e, 10)
      }, p.pow = function(e, t) {
        if (!isFinite(e) && 0 === t) return NaN;
        if (e >= 0 || t === Math.floor(t)) return Math.pow(e, t);
        var r = p.toFraction(t, 100);
        return o.approx(r.n / r.d, t, 2) && r.d % 2 == 1 ?
            (r.n % 2 == 0 ? 1 : -1) * Math.pow(-e, t) :
            NaN
      }, p.nthroot = function(e, t) {
        return p.pow(e, 1 / t)
      };
      var m = 1 / Math.PI;
      p.sin = function(e) {
        return r(Math.abs(e)) ? 0 : Math.sin(e)
      }, p.cos = function(e) {
        return n(Math.abs(e)) ? 0 : Math.cos(e)
      }, p.tan = function(e) {
        var t = Math.abs(e);
        return r(t) ? 0 : n(t) ? 1 / 0 : Math.tan(e)
      }, p.sec = function(e) {
        return n(Math.abs(e)) ? 1 / 0 : 1 / Math.cos(e)
      }, p.csc = function(e) {
        return r(Math.abs(e)) ? 1 / 0 : 1 / Math.sin(e)
      }, p.cot = function(e) {
        var t = Math.abs(e);
        return r(t) ? 1 / 0 : n(t) ? 0 : 1 / Math.tan(e)
      }, p.acot = function(e) {
        return Math.PI / 2 - Math.atan(e)
      }, p.acsc = function(e) {
        return Math.asin(1 / e)
      }, p.asec = function(e) {
        return Math.acos(1 / e)
      }, p.sech = function(e) {
        return 1 / p.cosh(e)
      }, p.csch = function(e) {
        return 1 / p.sinh(e)
      }, p.coth = function(e) {
        return 1 / p.tanh(e)
      }, p.asech = function(e) {
        return p.acosh(1 / e)
      }, p.acsch = function(e) {
        return p.asinh(1 / e)
      }, p.acoth = function(e) {
        return p.atanh(1 / e)
      }, p.mean = function(e) {
        for (var t = 0, r = 0; r < e.length; r++) t += e[r];
        return t / e.length
      }, p.total = function(e) {
        for (var t = 0, r = 0; r < e.length; r++) t += e[r];
        return t
      };
      var y = function(e) {
        return e > 50 ?
            Math.exp(
                .5 * ((1 - e) * a.log1p(-1 / (e - 1)) - 1) + g(.5 * (e - 1)) -
                g(.5 * (e - 2))) *
                Math.sqrt((1 - 1 / e) / (2 * Math.PI)) :
            p.gamma((e + 1) / 2) / (p.gamma(e / 2) * Math.sqrt(e * Math.PI))
      }, g = function(e) {
        var t = e * e;
        return (.08333333333333333 -
                (.002777777777777778 -
                 (.0007936507936507937 -
                  (.0005952380952380953 - .0008417508417508417 / t) / t) /
                     t) /
                    t) /
            e
      };
      p.tpdf = function(e, t) {
        return t <= 0 ? NaN : y(t) * Math.pow(1 + e * e / t, -(t + 1) / 2)
      };
      var v = function(e, t) {
        if (t > 0) return 1 - v(e, -t);
        if (t === -1 / 0) return 0;
        var r = Math.sqrt(2 * e / (e + 1));
        if (Math.abs(t / r) < .001)
          return .5 * (1 + Math.sqrt(Math.PI) * y(e) * r * p.erf(t / r));
        if (t / e < -1e3) {
          var n = t * t;
          return y(e) * Math.pow(e, .5 * (e - 1)) * Math.pow(Math.abs(t), -e) *
              (1 -
               e * e * (e + 1) *
                   (1 / (2 + e) + e * (e + 3) / (4 * (4 + e) * n)) / (2 * n))
        }
        var i = Math.sqrt(t * t + e);
        return b((t + i) / (2 * i), e / 2, e / 2)
      };
      p.tcdf = function(e, t, r) {
        return r <= 0      ? NaN :
            e === -1 / 0   ? v(r, t) :
            e > 0 && t > 0 ? v(r, -e) - v(r, -t) :
                             v(r, t) - v(r, e)
      };
      var b = function(e, t, r) {
        if (e < 0 || e > 1)
          throw new RangeError('First argument must be between 0 and 1.');
        if (1 === t && 1 === r) return e;
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (0 === t) return 1;
        if (0 === r) return 0;
        var n = Math.exp(
            p.lnGamma(t + r) - p.lnGamma(t) - p.lnGamma(r) + t * Math.log(e) +
            r * a.log1p(-e));
        return e < (t + 1) / (t + r + 2) ? n * x(e, t, r) / t :
                                           1 - n * x(1 - e, r, t) / r
      }, x = function(e, t, r) {
        var n, i, a, o, s, u, c, l, p, f = 1;
        for (c = t + r, p = t + 1, l = t - 1, a = 1, o = 1 - c * e / p,
            Math.abs(o) < 1e-30 && (o = 1e-30), o = 1 / o, u = o;
             f <= 100 &&
             (n = 2 * f, i = f * (r - f) * e / ((l + n) * (t + n)),
             o = 1 + i * o, Math.abs(o) < 1e-30 && (o = 1e-30), a = 1 + i / a,
             Math.abs(a) < 1e-30 && (a = 1e-30), o = 1 / o, u *= o * a,
             i = -(t + f) * (c + f) * e / ((t + n) * (p + n)), o = 1 + i * o,
             Math.abs(o) < 1e-30 && (o = 1e-30), a = 1 + i / a,
             Math.abs(a) < 1e-30 && (a = 1e-30), o = 1 / o, s = o * a, u *= s,
             !(Math.abs(s - 1) < 3e-7));
             f++)
          ;
        return u
      }, _ = function(e, t, r) {
        return (e - t) / (Math.SQRT2 * Math.abs(r))
      }, S = function(e) {
        return e < 0 ? .5 * Math.exp(-e * e) * p.erfcx(-e) :
                       1 - .5 * Math.exp(-e * e) * p.erfcx(e)
      };
      p.normalcdf = function(e, t, r, n) {
        var i = _(t, r, n);
        if (e === -1 / 0) return S(i);
        var a = _(e, r, n);
        return e > 0 && t > 0 ? S(-a) - S(-i) : S(i) - S(a)
      }, p.normalpdf = function(e, t, r) {
        return 1 / Math.sqrt(2 * Math.PI * r * r) *
            Math.exp(-(e - t) * (e - t) / (2 * r * r))
      }, p.random = function(e) {
        var t = l(e);
        return (4294967296 * (2097151 & parseInt(t.slice(0, 8), 16)) +
                parseInt(t.slice(8, 16), 16)) /
            9007199254740992
      }, p.uniformSample = function(e, t, r) {
        return p.random(e) * (r - t) + t
      }, p.normalSample = function(e, t, r) {
        var n, i, a, o, s = 0;
        do {
          n = e + '::sc' + s, s += 1, i = 2 * p.uniformSample(n, 0, 1) - 1,
          n = e + '::sc' + s, s += 1, a = 2 * p.uniformSample(n, 0, 1) - 1,
          o = i * i + a * a
        } while (o >= 1 || 0 === o);
        return t + r * i * Math.sqrt(-2 * Math.log(o) / o)
      }, p.tSample = function(e, t) {
        if (t <= 0) return NaN;
        var r, n, i, a, o = 0;
        do {
          r = e + '::sc' + o, o += 1, n = 2 * p.uniformSample(r, 0, 1) - 1,
          r = e + '::sc' + o, o += 1, i = 2 * p.uniformSample(r, 0, 1) - 1,
          a = n * n + i * i
        } while (a > 1);
        var s = n * n / a, u = t * (Math.pow(a, -2 / t) - 1);
        return r = e + '::sc' + o, o += 1,
               (p.uniformSample(r, 0, 1) < .5 ? -1 : 1) * Math.sqrt(s * u)
      }, p.binomSample = function(e, r, n) {
        return (r = t(Math.round(r), 0, 1 / 0)) === 1 / 0 ?
            NaN :
            (n = t(n, 0, 1), p.invBinom(p.uniformSample(e, 0, 1), r, n))
      }, p.poissonSample = function(e, t) {
        return t <= 0 ? NaN : p.invPoisson(p.uniformSample(e, 0, 1), t)
      };
      var M = function(e, t, r) {
        if (e >= t) return 1;
        if (e < 0) return 0;
        for (var n = r / (1 - r), i = Math.pow(1 - r, t), a = i, o = 1;
             o <= Math.min(t, e); o++)
          i *= (t - o + 1) / o * n, a += i;
        return a
      };
      p.binomcdf = function(e, r, n, i) {
        return (n = t(Math.round(n), 0, 1 / 0)) === 1 / 0 ?
            NaN :
            (i = t(i, 0, 1),
             r < 0 ? 0 :
                     (e = Math.ceil(e), r = Math.floor(r),
                      e === -1 / 0 ? M(r, n, i) : M(r, n, i) - M(e - 1, n, i)))
      }, p.binompdf = function(e, r, n) {
        return e = Math.round(e),
               (r = t(Math.round(r), 0, 1 / 0)) === 1 / 0 ?
                   NaN :
                   (n = t(n, 0, 1),
                    e < 0 || e > r ?
                        0 :
                        p.nCr(r, e) * Math.pow(n, e) * Math.pow(1 - n, r - e))
      }, p.poissonpdf = function(e, t) {
        return t <= 0 ?
            NaN :
            (e = Math.round(e),
             e < 0 ? 0 : Math.exp(-t + e * Math.log(t) - p.lnGamma(e + 1)))
      };
      var E = function(e, t) {
        if (e === 1 / 0) return 1;
        if (e < 0) return 0;
        for (var r = 1, n = 1, i = 1; i <= e; i++) {
          r *= t / i;
          var a = n;
          if ((n += r) === a) break
        }
        return Math.exp(-t) * n
      };
      p.poissoncdf = function(e, t, r) {
        return r <= 0 ? NaN :
                        (e = Math.ceil(e), t = Math.floor(t),
                         t < 0            ? 0 :
                             e === -1 / 0 ? E(t, r) :
                                            E(t, r) - E(e - 1, r))
      }, p.uniformpdf = function(e, t, r) {
        return r <= t ? NaN : e < t || e > r ? 0 : 1 / (r - t)
      };
      var w = function(e, t, r) {
        return r <= t ? NaN : e < t ? 0 : e > r ? 1 : (e - t) / (r - t)
      };
      p.uniformcdf = function(e, t, r, n) {
        return w(t, r, n) - w(e, r, n)
      }, p.erf = function(e) {
        var t = -e * e;
        if (t < -750) return e >= 0 ? 1 : -1;
        if (e >= .065) return 1 - Math.exp(t) * p.erfcx(e);
        if (e <= -.065) return Math.exp(t) * p.erfcx(-e) - 1;
        return e *
            (1.1283791670955126 +
             t *
                 (.37612638903183754 +
                  t *
                      (.11283791670955126 +
                       t * (.026866170645131252 + .005223977625442188 * t))))
      }, p.erfcx = function(e) {
        if (e < 0)
          return e < -6.1 ? 2 * Math.exp(e * e) :
                            2 * Math.exp(e * e) - p.erfcx(-e);
        if (e > 50) {
          var t = .5641895835477563, r = e * e;
          return e > 5e7 ? t / e :
                           t * (r * (r + 4.5) + 2) / (e * (r * (r + 5) + 3.75))
        }
        return (.9999999999999999 +
                e *
                    (2.224574423459406 +
                     e *
                         (2.444115549920689 +
                          e *
                              (1.7057986861852539 +
                               e *
                                   (.8257463703357973 +
                                    e *
                                        (.28647031042892007 +
                                         e *
                                             (.07124513844341643 +
                                              e *
                                                  (.012296749268608364 +
                                                   e *
                                                       (.001347817214557592 +
                                                        7263959403471071e-20 *
                                                            e))))))))) /
            (1 +
             e *
                 (3.352953590554884 +
                  e *
                      (5.227518529742423 +
                       e *
                           (5.003720878235473 +
                            e *
                                (3.266590890998987 +
                                 e *
                                     (1.5255421920765353 +
                                      e *
                                          (.5185887413188858 +
                                           e *
                                               (.12747319185915415 +
                                                e *
                                                    (.02185979575963238 +
                                                     e *
                                                         (.0023889438122503674 +
                                                          .00012875032817508128 *
                                                              e))))))))))
      }, p.invNorm = function(e) {
        var t, r, n;
        return e > .5 ?
            -p.invNorm(1 - e) :
            .5 === e ?
            0 :
            e < 0 ?
            NaN :
            0 === e ?
            -1 / 0 :
            (e < .02425 ?
                 (t = Math.sqrt(-2 * Math.log(e)),
                  n = (((((-.00778489400243029 * t - .322396458041136) * t -
                          2.40075827716184) *
                             t -
                         2.54973253934373) *
                            t +
                        4.37466414146497) *
                           t +
                       2.93816398269878) /
                      ((((.00778469570904146 * t + .32246712907004) * t +
                         2.445134137143) *
                            t +
                        3.75440866190742) *
                           t +
                       1)) :
                 (t = e - .5, r = t * t,
                  n = (((((-39.6968302866538 * r + 220.946098424521) * r -
                          275.928510446969) *
                             r +
                         138.357751867269) *
                            r -
                        30.6647980661472) *
                           r +
                       2.50662827745924) *
                      t /
                      (((((-54.4760987982241 * r + 161.585836858041) * r -
                          155.698979859887) *
                             r +
                         66.8013118877197) *
                            r -
                        13.2806815528857) *
                           r +
                       1)),
             n - Math.sqrt(2 * Math.PI) * (.5 * p.erfcx(-n / Math.SQRT2) - Math.exp(.5 * n * n) * e))
      }, p.invPoisson = function(e, t) {
        if (t <= 0 || e < 0 || e > 1) return NaN;
        if (0 === e) return 0;
        if (1 === e) return 1 / 0;
        for (var r = 1, n = 1, i = 1; Math.exp(-t) * n < e;) {
          if (r *= t / i, n + r === n) return 1 / 0;
          n += r, i += 1
        }
        return i - 1
      }, p.invBinom = function(e, t, r) {
        if (t !== Math.round(t)) return NaN;
        if (r < 0 || r > 1) return NaN;
        if (e < 0 || e > 1) return NaN;
        if (0 === e) return 0;
        if (1 === e) return t;
        if (0 === t) return 0;
        if (1 === r) return t;
        if (0 === r) return 0;
        for (var n = r / (1 - r), i = Math.pow(1 - r, t), a = i, o = 1;
             a < e;) {
          if (i *= (t - o + 1) / o * n, a + i === a) return t;
          if (o > t) return t;
          a += i, o += 1
        }
        return o - 1
      }, p.invT = function(e, t) {
        if (t <= 0 || e < 0 || e > 1) return NaN;
        if (0 === e) return -1 / 0;
        if (1 === e) return 1 / 0;
        if (1 === t || 2 === t || 4 === t) return D(t, e);
        var r, n;
        return .5 === e ?
            0 :
            e > .5 ?
            (r = t > 1 ? p.invNorm(e) : D(1, e),
             n = t > 1 ?
                 D(1, e) :
                 Math.pow(
                     p.tpdf(0, t) * Math.pow(t, (t - 1) / 2) / (1 - e), 1 / t),
             T(t, e, r, n)) :
            -p.invT(1 - e, t)
      };
      var D = function(e, t) {
        var r = 4 * t * (1 - t);
        switch (e) {
          case 1:
            return Math.tan(Math.PI * (t - .5));
          case 2:
            return 2 * (t - .5) * Math.sqrt(2 / r);
          case 4:
            var n = Math.cos(Math.acos(Math.sqrt(r)) / 3) / Math.sqrt(r);
            return 2 * Math.sign(t - .5) * Math.sqrt(n - 1);
          default:
            throw new Error('_invTSimple() must be called with 1, 2, or 4 df.')
        }
      }, T = function(e, t, r, n) {
        for (var i, a, o = r, s = n;;) {
          if (i = c(o, s), a = v(e, i), i === o || i === s)
            return a > t ? o : s;
          a < t ? o = i : s = i
        }
      };
      return p.invUniform = function(e, t, r) {
        return e < 0 || e > 1 || r <= t ? NaN :
            0 === e                     ? t :
            1 === e                     ? r :
                                          t + e * (r - t)
      }, p.tscore = function(e, t) {
        var r = p.stdev(e);
        return (p.mean(e) - t) * Math.sqrt(e.length) / r
      }, p.itscore = function(e, t) {
        var r = e.length, n = p.mean(e), i = p.stdev(e), a = t.length,
            o = p.mean(t), s = p.stdev(t);
        return (n - o) /
            (Math.sqrt(((r - 1) * i * i + (a - 1) * s * s) / (r + a - 2)) *
             Math.sqrt(1 / r + 1 / a))
      }, p.ttest = function(e, t) {
        1 === arguments.length && (t = 0);
        var r = p.tscore(e, t), n = e.length - 1;
        return {
          lessThan: i(r, n, -1), greaterThan: i(r, n, 1), notEqual: i(r, n, 0)
        }
      }, p.ittest = function(e, t) {
        var r = p.itscore(e, t), n = e.length + t.length - 2;
        return {
          lessThan: i(r, n, -1), greaterThan: i(r, n, 1), notEqual: i(r, n, 0)
        }
      }, p.stats = function(e) {
        return {
          min: p.listMin(e), q1: p.quartile(e, 1), median: p.median(e),
              q3: p.quartile(e, 3), max: p.listMax(e)
        }
      }, p.length = function(e) {
        return e.length
      }, p.listMin = function(e) {
        if (e.length < 1) return NaN;
        var t = e[0];
        if (isNaN(t)) return NaN;
        for (var r = 1; r < e.length; r++) {
          if (isNaN(e[r])) return NaN;
          e[r] < t && (t = e[r])
        }
        return t
      }, p.listMax = function(e) {
        if (e.length < 1) return NaN;
        var t = e[0];
        if (isNaN(t)) return NaN;
        for (var r = 1; r < e.length; r++) {
          if (isNaN(e[r])) return NaN;
          e[r] >= t && (t = e[r])
        }
        return t
      }, p.quantile = function(e, t) {
        if (!isFinite(t) || t < 0 || t > 1) return NaN;
        if (e.some(isNaN)) return NaN;
        var r = e.length, n = p.sortPerm(e), i = t * (r - 1);
        return Math.floor(i) === i ? e[n[i]] :
                                     (Math.ceil(i) - i) * e[n[Math.floor(i)]] +
                (i - Math.floor(i)) * e[n[Math.ceil(i)]]
      }, p.quartile = function(e, t) {
        if (!isFinite(t) || t < 0 || t > 4) return NaN;
        if (e.some(isNaN)) return NaN;
        var r = p.sortPerm(e), n = p.quartileIndex(e, t), i = Math.floor(n),
            a = Math.ceil(n);
        return (e[r[i]] + e[r[a]]) / 2
      }, p.sortPerm = function(e) {
        for (var t = e.length, r = [], n = 0; n < t; n++) r.push(n);
        return r.sort(function(t, r) {
          return e[t] - e[r]
        }),
               r
      }, p.quartileIndex = function(e, t) {
        t = Math.round(t);
        var r, n = e.length, i = n % 2 == 1;
        return 1 === n ?
            0 :
            (0 === t && (r = 0), 2 === t && (r = (n - 1) / 2),
             4 === t && (r = n - 1),
             1 === t && (r = i ? (n + 1) / 4 - 1 : (n + 2) / 4 - 1),
             3 === t && (r = i ? (3 * n + 3) / 4 - 1 : (3 * n + 2) / 4 - 1), r)
      }, p.upperQuantileIndex = function(e, t) {
        return p.sortPerm(e)[Math.ceil(t * (e.length - 1))] + 1
      }, p.lowerQuantileIndex = function(e, t) {
        return p.sortPerm(e)[Math.floor(t * (e.length - 1))] + 1
      }, p.upperQuartileIndex = function(e, t) {
        return p.sortPerm(e)[Math.ceil(p.quartileIndex(e, t))] + 1
      }, p.lowerQuartileIndex = function(e, t) {
        return p.sortPerm(e)[Math.floor(p.quartileIndex(e, t))] + 1
      }, p.median = function(e) {
        return p.quantile(e, .5)
      }, p.argMin = function(e) {
        if (e.length < 1) return 0;
        var t = e[0];
        if (isNaN(t)) return 0;
        for (var r = 0, n = 1; n < e.length; n++) {
          if (isNaN(e[n])) return 0;
          e[n] < t && (r = n, t = e[n])
        }
        return r + 1
      }, p.argMax = function(e) {
        if (e.length < 1) return 0;
        var t = e[0];
        if (isNaN(t)) return 0;
        for (var r = 0, n = 1; n < e.length; n++)
          if (e[n] >= t) {
            if (isNaN(e[n])) return 0;
            r = n, t = e[n]
          }
        return r + 1
      }, p.varp = function(e) {
        for (var t = p.mean(e), r = 0, n = 0; n < e.length; n++) {
          var i = e[n] - t;
          r += i * i
        }
        return r / e.length
      }, p.mad = function(e) {
        for (var t = p.mean(e), r = 0, n = 0; n < e.length; n++)
          r += Math.abs(e[n] - t);
        return r / e.length
      }, p.var = function(e) {
        var t = e.length;
        return p.varp(e) * t / (t - 1)
      }, p.covp = function(e, t) {
        if (e.length !== t.length) return NaN;
        for (var r = e.length, n = p.mean(e), i = p.mean(t), a = 0, o = 0;
             o < r; o++)
          a += (e[o] - n) * (t[o] - i);
        return a / r
      }, p.cov = function(e, t) {
        if (e.length !== t.length) return NaN;
        var r = e.length;
        return p.covp(e, t) * r / (r - 1)
      }, p.corr = function(e, t) {
        if (e.length !== t.length) return NaN;
        for (var r, n, i = e.length, a = p.mean(e), o = p.mean(t), s = 0, u = 0,
                       c = 0, l = 0;
             l < i; l++)
          r = e[l] - a, n = t[l] - o, s += r * r, u += n * n, c += r * n;
        return c / Math.sqrt(s * u)
      }, p.rank = function(e) {
        var t = e.length;
        if (0 === t) return [];
        for (var r = [], n = [], i = 0; i < t; i++) n.push([e[i], i]);
        n.sort(function(e, t) {
          var r = e[0], n = t[0];
          return r === 1 / 0 && n === 1 / 0 || r === -1 / 0 && n === -1 / 0 ?
              0 :
              r - n
        }),
            i = 0;
        for (var a, o = 1, s = 1; i < t;) {
          for (a = i; a < t - 1 && n[a][0] === n[a + 1][0];) a += 1;
          s = a - i + 1;
          var u;
          for (a = 0; a < s; a++)
            u = n[i + a][1], r[u] = isNaN(e[u]) ? NaN : o + .5 * (s - 1);
          o += s, i += s
        }
        return r
      }, p.spearman = function(e, t) {
        return p.corr(p.rank(e), p.rank(t))
      }, p.stdev = function(e) {
        return Math.sqrt(p.var(e))
      }, p.stdevp = function(e) {
        return Math.sqrt(p.varp(e))
      }, p.quad = s.quad, p.distance = function(e, t) {
        return o.hypot(t[0] - e[0], t[1] - e[1])
      }, p.midpoint = function(e, t) {
        return [.5 * (e[0] + t[0]), .5 * (e[1] + t[1])]
      }, p
    });
define(
    'core/math/functions', ['require', 'exports', 'core/math/builtin'],
    function(e, t, r) {
      'use strict';
      function n(e) {
        for (var t = 0, r = e; t < r.length; t++) {
          var n = r[t].compiled;
          n && a(n)
        }
      }
      function i(e) {
        for (var t = 0, r = e; t < r.length; t++) {
          var n = r[t].compiled;
          n && o(n)
        }
      }
      function a(e) {
        delete e.fn
      }
      function o(e) {
        e.fn = u(e.args, e.source)
      }
      function s(e, t) {
        for (var r = [], n = 0; n < t; n++) r.push('values[' + n + ']');
        return u(['values'], 'return ' + e(r))
      }
      function u(e, t) {
        var n = e.join(','),
            i = 'return (function(' + n + '){"use strict"; ' + t + '})';
        return new Function('BuiltIn', i)(r)
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.dehydrateGraphData = n, t.rehydrateGraphData = i,
          t.dehydrateCompiledFunction = a, t.rehydrateCompiledFunction = o,
          t.createEvaluateFunction = s, t.closureFunctionWithBuiltIn = u
    });
define('core/math/parser/input-span', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e, t, r) {
    return {
      input: e, start: t, end: r
    }
  }
  function n(e, t) {
    return r(e, t, t)
  }
  function i(e, t) {
    if (e.input !== t.input)
      throw new Error(
          'Programming Error: cannot form a span on different inputs');
    return r(e.input, e.start, t.end)
  }
  function a(e) {
    return e.input.slice(e.start, e.end)
  }
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.Span = r, t.emptySpanAt = n, t.joinSpans = i, t.slice = a
});
define('core/math/policy', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0});
  var r = [
    'Sum', 'Product', 'Integral', 'List', 'Derivative', 'Piecewise', 'Exponent',
    'PercentOf'
  ];
  t.defaultPolicy = {
    assignmentForbidden: function(e) {
      return !0
    },
    graphingEnabled: function() {
      return !1
    },
    isValidSlider: function(e) {
      return !1
    },
    sliderVariables: function(e) {
      return []
    },
    ansEnabled: function() {
      return !1
    },
    disabledFeatures: function() {
      return r
    }
  }
});
define(
    'core/math/parsenode/base',
    [
      'require', 'pjs', 'core/math/functions', 'core/math/parser/input-span',
      'core/math/policy'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('core/math/functions'),
          n = e('core/math/parser/input-span'),
          i = e('core/math/policy').defaultPolicy;
      return t(function(e, t, a) {
        e.init = function() {
          this._dependencies = [], this._dummyDependencies = [],
          this._exports = []
        }, e.exportPenalty = 0;
        var o = 0;
        e.tmpVar = function() {
          return 'tmp' + o++
        }, e.dependencies = function() {
          return this.getDependencies()
        }, e.evaluateOnce = function(e) {
          void 0 === e && (e = {});
          var t = this.getConcreteTree(i, e), r = t.getEvaluationInfo();
          return r ? r[0].val : NaN
        }, e.setInputSpan = function(e) {
          this._inputSpan = e
        }, e.getInputString = function() {
          return void 0 === this._inputSpan ? '' : n.slice(this._inputSpan)
        }, e.getInputSpan = function() {
          return this._inputSpan
        }, e.shouldExportAns = function() {
          return !1
        }, e.getAnsVariable = function() {
          return this.shouldExportAns() && this.userData &&
                  this.userData.hasOwnProperty('index') ?
              ['ans_' + this.userData.index] :
              []
        }, e.addDependency = function(e) {
          this.dependsOn(e) || this._dependencies.push(e)
        }, e.addDependencies = function(e) {
          for (var t = 0; t < e.length; t++) this.addDependency(e[t])
        }, e.addDummyDependency = function(e) {
          -1 === this._dummyDependencies.indexOf(e) &&
              this._dummyDependencies.push(e)
        }, e.addDummyDependencies = function(e) {
          for (var t = 0; t < e.length; t++) this.addDummyDependency(e[t])
        }, e.mergeDependencies = function() {
          for (var e = 0; e < arguments.length; e++)
            this.addDependencies(arguments[e].getDependencies()),
                this.addDummyDependencies(arguments[e].getDummyDependencies())
        }, e.getDependencies = function() {
          return this._dependencies
        }, e.getDummyDependencies = function() {
          return this._dummyDependencies
        }, e.removeDependency = function(e) {
          var t = this._dependencies.indexOf(e);
          t >= 0 && this._dependencies.splice(t, 1)
        }, e.dependsOn = function(e) {
          return this._dependencies.indexOf(e) > -1
        }, e.getExports = function() {
          return (this._exports || []).concat(this.getAnsVariable())
        }, e.getLegalExports = function(e) {
          return this.getExports().filter(function(t) {
            return !e.assignmentForbidden(t)
          })
        }, e.exportsSymbol = function(e) {
          return this._exports.indexOf(e) > -1
        }, e.exportTo = function(e, t, r) {
          for (var n = this.getLegalExports(e), i = 0; i < n.length; i++) {
            var a = n[i];
            if (r[a]) return;
            r[a] = t.blocksExport ? t : this
          }
        }, e.getOperator = function() {
          return this.operator || '='
        }, e.isInequality = function() {
          return !1
        }, e.isShadeBetween = function() {
          return !1
        }, e.getAllIds = function() {
          return this.userData ? [this.userData.id] : []
        }, e.getEvaluationInfo = function() {
          return !1
        }, e.shouldPromoteToSlider = function(e) {
          return !1
        }, e.getSliderVariables = function(e, t) {
          return e.sliderVariables(t.getDependencies())
        }, e.getCompiledFunction = function(e) {
          var t = this.getEvalStrings(),
              n = t.statements.join(';') + ';return ' + t.expression;
          if (void 0 === e) {
            e = this.getDependencies();
            var i = e.indexOf('x');
            if (-1 !== i) {
              var a = e[0];
              e[0] = e[i], e[i] = a
            }
          }
          return {
            args: e, source: n, fn: r.closureFunctionWithBuiltIn(e, n)
          }
        }, e.getCompiledDerivative = function() {
          var e = this.getDependencies();
          return this.takeDerivative(e[0] || 'x').getCompiledFunction()
        }, e.asValue = function() {}
      })
    });
define('core/math/parsenode/error', ['require', 'pjs', './base'], function(e) {
  'use strict';
  return e('pjs')(e('./base'), function(e, t) {
    e.init = function(e) {
      t.init.call(this), this._msg = e, this._sliderVariables = [],
                         this.blocksExport = !0
    }, e.evaluateOnce = function(e) {
      return this._msg
    }, e.isError = !0, e.getError = function() {
      return this._msg
    }, e.setDependencies = function(e) {
      return this._dependencies = e, this
    }, e.allowExport = function() {
      return this.blocksExport = !1, this
    }
  })
});
define(
    'core/lib/label',
    [
      'require', 'exports', 'underscore', 'core/math/distance',
      'core/math/tofraction'
    ],
    function(e, t, r, n, i) {
      'use strict';
      function a(e, t) {
        if (void 0 === t && (t = e), isNaN(e) || !isFinite(e))
          return {ariaString: 'undefined', string: 'undefined', value: e};
        if (0 === e) return {ariaString: '0', string: '0', value: e};
        Math.abs(e) > Math.abs(t) && (t = e);
        var r, a, o, s = i.default(e / Math.PI, 24);
        if (h(t) && n.approx(s.n / s.d * Math.PI, e, 3))
          return r = 0 === s.n  ? '0' :
                     1 === s.n  ? 'Ï€' :
                     -1 === s.n ? '-Ï€' :
                                  s.n.toString() + 'Ï€',
                 a = 1 === s.d ? '' : '/' + s.d.toString(), o = r + a,
                 {ariaString: u(o), string: o, value: s.n / s.d * Math.PI};
        if (h(t))
          return o = f(l(e.toFixed(d(t)))),
                 {ariaString: u(o), string: o, value: parseFloat(o)};
        var c = p(e.toExponential(d(t / e))).split('e'), m = c[0] + 'Ã—10',
            y = c[1].replace('+', '');
        return o = p(e.toExponential(d(t / e))).replace('+', ''), {
          ariaString: u(o), string: o, mantissa: m, superscript: y,
              value: parseFloat(o)
        }
      }
      function o(e) {
        return T['[' + e + ']']
      }
      function s(e) {
        return e[0] + e.slice(1).split('').join(' ')
      }
      function u(e) {
        return e.replace(I, s).replace(P, o).replace(/ +/gi, ' ').trim()
      }
      function c(e, t, r, n) {
        var i = a(e, t);
        return [i, a(n(i.value), r)]
      }
      function l(e) {
        return -1 === e.indexOf('.') ? e : e.replace(C, '')
      }
      function p(e) {
        var t = /\.?0+e/;
        return e.replace(t, 'e')
      }
      function f(e) {
        return '-0' === e ? '0' : e
      }
      function h(e) {
        return 1e-4 < (e = Math.abs(e)) && e < 1e7
      }
      function d(e) {
        return e = Math.abs(e), e = Math.max(e, 1e-16),
               Math.max(3, Math.floor(4.5 - Math.log(e) / Math.LN10))
      }
      function m(e) {
        return 1e6 / Math.sqrt(Math.abs(e))
      }
      function y(e) {
        var t = m(e);
        if (t < 1) return !1;
        if (t > 1e12) return !1;
        var r = i.default(e, t), n = r.n, a = r.d;
        return 1 !== a && e === e + Math.pow(2, -3) * Math.abs(n / a - e)
      }
      function g(e, t) {
        if (t = t || {}, isNaN(e) || !isFinite(e)) return {type: 'undefined'};
        if (0 === e || t.zeroCutoff && Math.abs(e) < t.zeroCutoff)
          return {type: 'decimal', value: '0'};
        var r = t.smallCutoff || .001, n = t.bigCutoff || 1e6,
            a = t.digits || 10, o = p(e.toExponential(a - 2)),
            s = o.match(/([\d\.\-]+)e\+?([\d\-]+)/);
        if (!s) return {type: 'undefined'};
        var u = parseInt(s[2], 10) >= a, c = y(e);
        if (Math.abs(e) > n || Math.abs(e) < r || u)
          return {type: 'scientific', mantissa: s[1], exponent: s[2]};
        if (c && t.displayAsFraction) {
          var f = i.default(e, m(e));
          return {
            type: 'fraction', numerator: f.n.toString(),
                denominator: f.d.toString()
          }
        }
        var h = l(e.toPrecision(a));
        return e !== Number(h) && t.addEllipses && (h += '...'), {
          type: 'decimal', value: h
        }
      }
      function v(e, t) {
        var r = g(e, t);
        switch (r.type) {
          case 'undefined':
            return 'undefined';
          case 'decimal':
            return r.value;
          case 'scientific':
            return r.mantissa + '<span class=\'dcg-cross\'>Ã—</span>10<sup>' +
                r.exponent + '</sup>';
          case 'fraction':
            return '1' === r.denominator ? r.numerator :
                                           r.numerator + '/' + r.denominator;
          default:
            return r
        }
      }
      function b(e, t) {
        var r = g(e, t);
        switch (r.type) {
          case 'undefined':
            return 'undefined';
          case 'decimal':
            return r.value;
          case 'scientific':
            return r.mantissa + ' * 10^' + r.exponent;
          case 'fraction':
            return '1' === r.denominator ? r.numerator :
                                           r.numerator + '/' + r.denominator;
          default:
            return r
        }
      }
      function x(e, t) {
        var r = g(e, t);
        switch (r.type) {
          case 'undefined':
            return 'undefined';
          case 'decimal':
            return r.value;
          case 'scientific':
            return r.mantissa + '\\times10^{' + r.exponent + '}';
          case 'fraction':
            return '1' === r.denominator ?
                r.numerator :
                '-' === r.numerator[0] ?
                '-\\frac{' + r.numerator.slice(1) + '}{' + r.denominator + '}' :
                '\\frac{' + r.numerator + '}{' + r.denominator + '}';
          default:
            return r
        }
      }
      function _(e, t) {
        var r = g(e, t);
        switch (r.type) {
          case 'undefined':
            return 'undefined';
          case 'decimal':
            return u(r.value);
          case 'scientific':
            return u(r.mantissa + 'e' + r.exponent);
          case 'fraction':
            return u(r.numerator + '/' + r.denominator);
          default:
            return r
        }
      }
      function S(e) {
        e = e.replace('\\', '');
        var t = {
          pi: 'Ï€',
          tau: 'Ï„',
          theta: 'Î¸',
          phi: 'Ï•',
          div: 'Ã·',
          cdot: 'â‹…',
          times: 'Ã—',
          lt: '<',
          gt: '>',
          le: 'â‰¤',
          ge: 'â‰¥',
          sim: 'âˆ¼',
          ldots: 'â€¦',
          prime: 'â€²',
          approx: 'â‰ˆ'
        };
        return t.hasOwnProperty(e) ? t[e] : e
      }
      function M(e) {
        var t = e.split('_'), r = '';
        return t[0].length > 1 && (r += '\\'), r += t[0],
               t[1] && (r += '_{' + t[1] + '}'), r
      }
      function E(e) {
        if (!e) return '';
        var t = e.split('_').map(S).map(r.escape), n = t[0];
        return t[1] && (n += '<sub>' + t[1] + '</sub>'), n
      }
      function w(e) {
        return e = e.replace(/\\operatorname\{(.*)\}/, '$1'),
               e.replace(/[{}\\]/g, '')
      }
      function D(e) {
        return e.replace(/^(\\ | |\\space)+/, '')
            .replace(/(\\ | |\\space)+$/, '')
      }
      Object.defineProperty(t, '__esModule', {value: !0}), t.value = a;
      var T = {
        '[e]': ' times 10 to the ',
        '[+]': ' plus ',
        '[-]': ' minus ',
        '[*]': ' times ',
        '[/]': ' over ',
        '[Ï€]': ' pi ',
        '[Ï„]': ' tau ',
        '[Î¸]': ' theta ',
        '[Ï•]': ' phi '
      },
          P = new RegExp(Object.keys(T).join('|'), 'gi'), I = /\.\d+/g;
      t.point = c;
      var C = /\.?0+$/;
      t.canDisplayAsFraction = y, t.numericLabel = g, t.truncatedHTMLLabel = v,
      t.truncatedPlainmathLabel = b, t.truncatedLatexLabel = x,
      t.truncatedAriaLabel = _, t.formatSymbol = S, t.identifierToLatex = M,
      t.identifierToHTML = E, t.latexToIdentifier = w, t.trimLatex = D
    });
define('core/math/types', ['require', 'core/lib/worker-i18n'], function(e) {
  'use strict';
  function t(e) {
    switch (e) {
      case u:
        return 'Any';
      case c:
        return 'Number';
      case l:
        return 'Bool';
      case p:
        return 'Point';
      case f:
        return 'Distribution';
      case h:
        return 'ListOfAny';
      case d:
        return 'ListOfNumber';
      case m:
        return 'ListOfBool';
      case y:
        return 'ListOfPoint';
      case g:
        return 'ListOfDistribution';
      case v:
        return 'ErrorType';
      case b:
        return 'SeedType';
      default:
        throw new Error('Invalid type')
    }
  }
  function r(e) {
    switch (e) {
      case u:
        return s.t('an unknown object');
      case c:
        return s.t('a number');
      case l:
        return s.t('a true/false value');
      case p:
        return s.t('a point');
      case f:
        return s.t('a distribution');
      case h:
        return s.t('a list of unknown objects');
      case d:
        return s.t('a list of numbers');
      case m:
        return s.t('a list of true/false values');
      case y:
        return s.t('a list of points');
      case g:
        return s.t('a list of distributions');
      case v:
        return s.t('an error object');
      case b:
        return s.t('a string');
      default:
        throw new Error('Invalid type')
    }
  }
  function n(e) {
    switch (e) {
      case h:
      case d:
      case m:
      case y:
      case g:
        return !0;
      default:
        return !1
    }
  }
  function i(e) {
    switch (e) {
      case h:
        return u;
      case d:
        return c;
      case m:
        return l;
      case y:
        return p;
      case g:
        return f;
      default:
        return u
    }
  }
  function a(e) {
    switch (e) {
      case u:
        return h;
      case c:
        return d;
      case l:
        return m;
      case p:
        return y;
      case f:
        return g;
      default:
        throw new Error('Type ' + t(e) + ' does not implement listType.')
    }
  }
  function o(e) {
    switch (e) {
      case u:
      case c:
      case l:
      case p:
      case f:
        return !0;
      default:
        return !1
    }
  }
  var s = e('core/lib/worker-i18n'), u = 0, c = 1, l = 2, p = 3, f = 4, h = 5,
      d = 6, m = 7, y = 8, g = 9, v = 10, b = 11;
  return {
    Any: u, Number: c, Bool: l, Point: p, Distribution: f, ListOfAny: h,
        ListOfNumber: d, ListOfBool: m, ListOfPoint: y, ListOfDistribution: g,
        ErrorType: v, SeedType: b, repr: t, prettyPrint: r, isList: n,
        elementType: i, listType: a, hasListType: o
  }
});
define(
    'core/math/errormsg',
    [
      'require', 'core/lib/worker-i18n', 'core/math/parsenode/error',
      'core/lib/label', 'core/math/types'
    ],
    function(e) {
      'use strict';
      var t = e('core/lib/worker-i18n'), r = e('core/math/parsenode/error'),
          n = e('core/lib/label'), i = e('core/math/types');
      return {
        parseError: function() {
          return r(t.t('Sorry, I don\'t understand this.'))
        }, unrecognizedSymbol: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'Sorry, I don\'t understand the \'__symbol__\' symbol.',
                     {symbol: e}))
        }, unexpectedInequality: function() {
          return r(t.t('Cannot use an inequality here.'))
        }, unexpectedSymbol: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'Sorry, I don\'t understand the way that \'__symbol__\' is used here.',
                     {symbol: e}))
        }, addTypeError: function(e) {
          return r(t.t('Cannot add __symbol1__ and __symbol2__.',
                       {symbol1: e[0], symbol2: e[1]}))
              .allowExport()
        }, subtractTypeError: function(e) {
          return r(t.t('Cannot subtract __symbol2__ from __symbol1__.',
                       {symbol1: e[0], symbol2: e[1]}))
              .allowExport()
        }, multiplyTypeError: function(e) {
          return r(t.t('Cannot multiply __symbol1__ by __symbol2__.',
                       {symbol1: e[0], symbol2: e[1]}))
              .allowExport()
        }, divideTypeError: function(e) {
          return r(t.t('Cannot divide __symbol1__ by __symbol2__.',
                       {symbol1: e[0], symbol2: e[1]}))
              .allowExport()
        }, exponentTypeError: function(e) {
          return r(t.t('Cannot raise __symbol1__ to __symbol2__.',
                       {symbol1: e[0], symbol2: e[1]}))
              .allowExport()
        }, negativeTypeError: function(e) {
          return r(t.t('Cannot negate __symbol__.', {symbol: e[0]}))
              .allowExport()
        }, comparatorTypeError: function(e) {
          return r(t.t('Cannot compare __symbol1__ to __symbol2__.',
                       {symbol1: e[0], symbol2: e[1]}))
              .allowExport()
        }, andTypeError: function(e) {
          return r(t.t('Cannot apply __symbol__ to __symbol1__ and __symbol2__.',
                       {symbol: 'and', symbol1: e[0], symbol2: e[1]}))
              .allowExport()
        }, listTypeError: function(e) {
          return r(t.t('Cannot store __symbol1__ in a list.', {symbol1: e[0]}))
              .allowExport()
        }, pointTypeError: function(e) {
          return r(t.t('Cannot use __symbol1__ as a coordinate of __symbol2__.',
                       {symbol1: e, symbol2: i.prettyPrint(i.Point)}))
              .allowExport()
        }, indexTypeError: function(e) {
          return r(t.t('Cannot index __symbol1__ with __symbol2__.',
                       {symbol1: e[0], symbol2: e[1]}))
              .allowExport()
        }, orderedPairAccessTypeError: function(e) {
          return r(t.t('Cannot access a coordinate of __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, functionTypeError: function(e, i) {
          switch (i.length) {
            case 1:
              return r(t.t('Function \'__fn__\' cannot be applied to __arg__.',
                           {fn: n.formatSymbol(e), arg: i[0]}))
                  .allowExport();
            case 2:
              return r(t.t('Function \'__fn__\' cannot be applied to __arg1__ and __arg2__.',
                           {fn: n.formatSymbol(e), arg1: i[0], arg2: i[1]}))
                  .allowExport();
            default:
              return r(t.t('Function \'__fn__\' cannot be applied to these arguments.',
                           {fn: n.formatSymbol(e)}))
                  .allowExport()
          }
        }, illegalDotCall: function(e) {
          return r(
              t.t('Function \'__symbol__\' cannot be called with dot notation.',
                  {symbol: n.formatSymbol(e)}))
        }, dotLHSTypeError: function(e, i) {
          return r(
              t.t('Cannot call \'__symbol__\' on __type__.',
                  {symbol: n.formatSymbol(e), type: i}))
        }, sumLowerBoundTypeError: function(e) {
          return r(t.t('Lower bound of a sum cannot be __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, sumUpperBoundTypeError: function(e) {
          return r(t.t('Upper bound of a sum cannot be __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, sumInfiniteBoundError: function() {
          return r(t.t('Summation bounds must be finite numbers.'))
        }, sumArgumentTypeError: function(e) {
          return r(t.t('Cannot take the sum of __symbol__.', {symbol: e[0]}))
              .allowExport()
        }, productLowerBoundTypeError: function(e) {
          return r(t.t('Lower bound of a product cannot be __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, productUpperBoundTypeError: function(e) {
          return r(t.t('Upper bound of a product cannot be __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, productInfiniteBoundError: function() {
          return r(t.t('Product bounds must be finite numbers.'))
        }, productArgumentTypeError: function(e) {
          return r(t.t('Cannot take the product of __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, integralLowerBoundTypeError: function(e) {
          return r(t.t('Lower bound of an integral cannot be __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, integralUpperBoundTypeError: function(e) {
          return r(t.t('Upper bound of an integral cannot be __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, integralInfiniteBoundError: function() {
          return r(t.t('Limits of integration must be finite numbers.'))
        }, integralArgumentTypeError: function(e) {
          return r(t.t('Cannot take the integral of __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, derivativeTypeError: function(e) {
          return r(t.t('Cannot take the derivative of __symbol__.',
                       {symbol: e[0]}))
              .allowExport()
        }, derivativeVariableTypeError: function(e, i) {
          return r(t.t(
              'Cannot take derivative with respect to \'__symbol1__\' because it is __symbol2__.',
              {symbol1: n.formatSymbol(e), symbol2: i[0]}))
        }, piecewiseConditionTypeError: function(e) {
          return r(t.t('The condition in a piecewise expression must be __symbol1__ but was __symbol2__.',
                       {symbol1: i.prettyPrint(i.Bool), symbol2: e[0]}))
              .allowExport()
        }, piecewiseBranchTypeError: function(e) {
          return r(t.t('Cannot use __symbol__ as a branch of a piecewise expression.',
                       {symbol: e[0]}))
              .allowExport()
        }, tableHeaderTypeError: function(e) {
          return r(t.t('Table header cannot be __symbol__.', {symbol: e[0]}))
        }, tableEntryTypeError: function(e) {
          return r(t.t('Table entry cannot be __symbol__.', {symbol: e[0]}))
        }, regressionTypeError: function(e) {
          return r(
              t.t('Cannot regress __symbol1__ against __symbol2__.',
                  {symbol1: e[0], symbol2: e[1]}))
        }, heterogeneousList: function() {
          return r(t.t('All elements of a list must have the same type.'))
              .allowExport()
        }, deeplyNested: function() {
          return r(t.t('Definitions are nested too deeply.')).allowExport()
        }, polygonListTypeError: function(e) {
          return r(t.t(
              'A single argument to polygon should be a point list, not __type__.',
              {type: e[0]}))
        }, polygonPointArgsError: function() {
          return r(t.t('Some of your arguments are not points.'))
        }, polygonTwoNumbersError: function() {
          return r(t.t('Cannot make a polygon from two numbers.'))
        }, binCenterInvalid: function() {
          return r(t.t('Invalid bin center. Try using any number.'))
        }, boxplotOffsetInvalid: function() {
          return r(t.t('Invalid offset. Try using any number.'))
        }, boxplotBreadthInvalid: function() {
          return r(t.t('Invalid height. Try using any number.'))
        }, tooManyArguments: function(e, n) {
          return r(
              t.t('\'__symbol__\' accepts at most __max__ arguments.',
                  {symbol: e, max: n}))
        }, pdfWrongArity: function() {
          var e = t.t(
                  'For example, try typing: D.pdf(x) where D=normaldist().'),
              n = t.t(
                  '\'pdf\' should be called on a distribution with a number. __recommendation__',
                  {recommendation: e});
          return r(n)
        }, cdfRequiresArguments: function() {
          var e = t.t(
                  'For example, try typing: D.cdf(x) where D=normaldist().'),
              n = t.t(
                  '\'cdf\' should be called on a distribution with at least one number. __recommendation__',
                  {recommendation: e});
          return r(n)
        }, cdfTooManyArguments: function() {
          var e = t.t(
                  'For example, try typing: D.cdf(-1,1) where D=normaldist().'),
              n = t.t(
                  '\'cdf\' should be called on a distribution with at most two numbers. __recommendation__',
                  {recommendation: e});
          return r(n)
        }, tdistWrongArity: function() {
          return r(t.t(
              '\'tdist\' requires 1 argument. For example, try typing: tdist(1).'))
        }, randomArity: function() {
          var e = t.t(
              '\'random\' should be called with no arguments, or an optional number of samples. For example, try random() or random(10).');
          return r(e)
        }, randomFromBroadcastDistribution: function() {
          return r(t.t('Cannot sample from a list of distributions'))
        }, wrongArity: function(e, i, a) {
          e = n.formatSymbol(e);
          var o, s;
          if (1 === i)
            s = t.t(
                'For example, try typing: __dependency__(x).', {dependency: e}),
            o = a > 1 ?
                t.t('Function \'__dependency__\' requires only 1 argument. __supplement__',
                    {dependency: e, supplement: s}) :
                t.t('Function \'__dependency__\' requires an argument. __supplement__',
                    {dependency: e, supplement: s});
          else {
            for (var u = [], c = 0; c < i; c++) u[c] = c + 1;
            var l = n.formatSymbol(e) + '(' + u.join(', ') + ')';
            s =
                t.t('For example, try typing: __recommendation__.',
                    {recommendation: l}),
            o = t.t(
                'Function \'__dependency__\' requires __assignment_arity__ arguments. __supplement__',
                {dependency: e, assignment_arity: i, supplement: s})
          }
          return r(o)
        }, wrongParametrizedReducerArity: function(e) {
          return r(t.t(
              'Function \'__symbol__\' requires 2 arguments. For example, try typing: __recommendation__.',
              {
                symbol: n.formatSymbol(e),
                recommendation: n.formatSymbol(e) + '([1,2,3], 1)'
              }))
        }, wrongDoubleReducerArity: function(e) {
          return r(t.t(
              'Function \'__symbol__\' requires 2 arguments. For example, try typing: __recommendation__.',
              {
                symbol: n.formatSymbol(e),
                recommendation: n.formatSymbol(e) + '([1,2,3], [3,2,1])'
              }))
        }, primedFunctionArity: function() {
          return r(t.t(
              'Prime notation can only be used for functions of a single argument.'))
        }, zeroArgReducer: function(e) {
          return r(t.t(
              'Function \'__symbol__\' requires at least one argument. For example, try typing: __symbol__(1, 2).',
              {symbol: n.formatSymbol(e)}))
        }, missingRHS: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'What do you want \'__symbol__\' to equal?', {symbol: e}))
        }, malformedPoint: function() {
          return r(t.t('Points are written like this: (1, 2).'))
        }, badTupleDimensions: function(e) {
          return r(
              t.t('Points may only have __symbol__ coordinates.', {symbol: e}))
        }, badImplicitCall: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'Use parentheses around the argument of \'__symbol__\'.',
                     {symbol: e}))
        }, adjacentNumbers: function(e, n) {
          return r(t.t(
              'Sorry, I don\'t know what to do with adjacent numbers \'__left__\' and \'__right__\'. Try using parentheses or a \'*\' symbol.',
              {left: e, right: n}))
        }, identifierAsFunction: function(e) {
          return e = n.formatSymbol(e),
                 r(
                     t.t('\'__symbol__\' is a function. Try using parentheses.',
                         {symbol: e}))
        }, binaryOperatorMissingOperand: function(e) {
          return e = n.formatSymbol(e), '%' === e && (e = '% of'),
                 r(t.t(
                     'You need something on both sides of the \'__symbol__\' symbol.',
                     {symbol: e}))
        }, unaryOperatorMissingLeft: function(e) {
          return e = n.formatSymbol(e),
                 r(
                     t.t('You need something before the \'__symbol__\' symbol.',
                         {symbol: e}))
        }, unaryOperatorMissingRight: function(e) {
          return e = n.formatSymbol(e),
                 r(
                     t.t('You need something after the \'__symbol__\' symbol.',
                         {symbol: e}))
        }, fractionMissingNumerator: function() {
          return r(t.t('You need a numerator for the top of your fraction.'))
        }, fractionMissingDenominator: function() {
          return r(
              t.t('You need a denominator for the bottom of your fraction.'))
        }, fractionEmpty: function() {
          return r(
              t.t('You need a numerator and denominator for your fraction.'))
        }, emptySubscript: function() {
          return r(t.t('Subscripts cannot be empty.'))
        }, emptySuperscript: function() {
          return r(t.t('Superscripts cannot be empty.'))
        }, invalidSubscript: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'Subscripts may only contain letters and digits. \'__symbol__\' is not allowed.',
                     {symbol: e}))
        }, invalidOperatorName: function() {
          return r(t.t('Operator names may only contain letters.'))
        }, unexpectedSubscript: function() {
          return r(t.t('Only functions and variables may have subscripts.'))
        }, superscriptWithPrime: function() {
          return r(t.t('Superscripts and primes cannot be combined.'))
        }, unexpectedPrime: function() {
          return r(
              t.t('Sorry, I don\'t understand this use of prime notation.'))
        }, primeWithoutParen: function() {
          return r(t.t('Primed function calls must use parentheses.'))
        }, emptyRadical: function() {
          return r(t.t('Radical cannot be empty.'))
        }, emptyRadicalIndex: function() {
          return r(t.t('Radical index cannot be empty.'))
        }, emptyParen: function() {
          return r(t.t('Parentheses cannot be empty.'))
        }, emptySquareBracket: function() {
          return r(t.t('Square brackets cannot be empty.'))
        }, emptyPipe: function() {
          return r(t.t('Absolute value symbol cannot be empty.'))
        }, badTrigExponent: function(e) {
          var n = e + '^2', i = e + '^-1';
          return r(t.t(
              'Only __form1__ and __form2__ are supported. Otherwise, use parens.',
              {form1: n, form2: i}))
        }, badLogExponent: function(e) {
          var n = e + '^2';
          return r(t.t(
              'Only __form__ is supported. Otherwise, use parens.', {form: n}))
        }, inequalityChainTooLong: function() {
          return r(t.t('Cannot chain more than 2 inequalities.'))
        }, piecewiseMissingCondition: function() {
          return r(
              t.t('A piecewise expression must have at least one condition.'))
        }, piecewisePartMissingCondition: function() {
          return r(t.t(
              'Every part of a piecewise expression must have a condition except the last.'))
        }, colonMissingCondition: function() {
          return r(t.t(
              'The left side of a \':\' must be a condition, like \'x>1\'.'))
        }, blankExpression: function() {
          return r(t.t('You haven\'t written anything yet.'))
        }, functionNotDefined: function(e) {
          return e = n.formatSymbol(e),
                 r(
                     t.t('Function \'__dependency__\' is not defined.',
                         {dependency: e}))
        }, parameterAlreadyDefined: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'You can\'t use \'__dependency__\' as a parameter of this function because \'__dependency__\' is already defined.',
                     {dependency: e}))
        }, cannotRedefine: function(e, i) {
          return e = n.formatSymbol(e),
                 r(void 0 === i ?
                       t.t('You can\'t redefine \'__symbol__\' because it\'s already defined.',
                           {symbol: e}) :
                       t.t('You can\'t define \'__symbol__\' because \'__symbolRoot__\' is already defined.',
                           {symbol: e, symbolRoot: i}))
        }, cannotSubscript: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t('\'__symbol__\' cannot have a subscript.', {symbol: e}))
        }, multiplyDefined: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'You\'ve defined \'__dependency__\' in more than one place. Try deleting some of the definitions of \'__dependency__\'.',
                     {dependency: e}))
        }, shadowedIndex: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'You can\'t use \'__symbol__\' as an index because it\'s already defined.',
                     {symbol: e}))
        }, cycle: function(e) {
          e = e.map(n.formatSymbol);
          var i = e.pop();
          return r(t.t(
              '\'__symbols__\' and \'__lastSymbol__\' can\'t be defined in terms of each other.',
              {symbols: e.join('\', \''), lastSymbol: i}))
        }, selfReferentialFunction: function(e) {
          return r(t.t(
              'The definition of function \'__symbol__\' cannot depend on \'__symbol__\'.',
              {symbol: n.formatSymbol(e)}))
        }, sliderLimitReferencesExport: function(e) {
          return r(t.t(
              'Slider limits cannot depend on the slider variable \'__symbol__\'.',
              {symbol: n.formatSymbol(e)}))
        }, sliderMinInvalid: function() {
          return r(t.t('Invalid slider min. Try using any number.'))
        }, sliderMaxInvalid: function() {
          return r(t.t('Invalid slider max. Try using any number.'))
        }, sliderMaxLessThanMin: function() {
          return r(t.t('Invalid slider limits. Min should be less than max.'))
        }, sliderStepInvalid: function() {
          return r(t.t('Invalid slider step. Try using any number.'))
        }, domainMinInvalid: function() {
          return r(t.t('Invalid domain min. Try using any number.'))
        }, domainMaxInvalid: function() {
          return r(t.t('Invalid domain max. Try using any number.'))
        }, domainMaxLessThanMin: function() {
          return r(t.t('Invalid domain limits. Min should be less than max.'))
        }, cdfMinInvalid: function() {
          return r(t.t('Invalid cdf min. Try using any number.'))
        }, cdfMaxInvalid: function() {
          return r(t.t('Invalid cdf max. Try using any number.'))
        }, cdfMaxLessThanMin: function() {
          return r(t.t('Invalid cdf limits. Min should be less than max.'))
        }, tooFewVariables: function() {
          return r(
              t.t('Too few variables, I don\'t know what to do with this.'))
        }, tooManyVariables: function(e) {
          if (e = e.map(n.formatSymbol), 0 === e.length)
            return r(
                t.t('Too many variables, I don\'t know what to do with this.'));
          var i = e.pop();
          return r(t.t(
              'Too many variables. Try defining \'__variables__\'.',
              {variables: (e.length ? e.join('\', \'') + '\' or \'' : '') + i}))
        }, addArgumentsToDefinition: function(e, i, a) {
          e = e.map(n.formatSymbol), i = n.formatSymbol(i),
          a = a.map(n.formatSymbol);
          var o = i + '(' + a.join(',') + ',' + e.join(',') + ')', s = e.pop(),
              u = {symbols: e.join('\', \''), lastSymbol: s, newSignature: o};
          return r(
              e.length ?
                  t.t('Try including \'__symbols__\' and \'__lastSymbol__\' as arguments by defining the function as \'__newSignature__\'.',
                      u) :
                  t.t('Try including \'__lastSymbol__\' as an argument by defining the function as \'__newSignature__\'.',
                      u))
        }, invalidLHS: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'Sorry, you can\'t graph __symbol__ as a function of anything yet.',
                     {symbol: e}))
        }, unplottablePolarFunction: function() {
          return r(t.t(
              'We can\'t plot Î¸ as a function of r. Try plotting r(Î¸) instead.'))
        }, invalidInequalityVariables: function() {
          return r(t.t('We only plot inequalities of x and y, or r and Î¸.'))
        }, invalidImplicitVariables: function() {
          return r(t.t('We only support implicit equations of x and y.'))
        }, singleVariableImplicitEquationsDisabled: function() {
          return r(
              t.t('Plotting single-variable implicit equations is disabled.'))
        }, implicitsDisabled: function() {
          return r(
              t.t('Plotting implicit equations and inequalities is disabled.'))
        }, inequalitiesDisabled: function() {
          return r(t.t('Plotting inequalities is disabled.'))
        }, complicatedImplicitInequality: function() {
          return r(t.t(
              'We can only plot inequalities when one variable is quadratic or linear.'))
        }, complicatedPolarImplicit: function() {
          return r(t.t('Polar equations must be linear in r.'))
        }, invalidDoubleInequalityVariables: function() {
          return r(t.t('We only plot double inequalities of x and y.'))
        }, mismatchedDoubleInequality: function() {
          return r(t.t(
              'Double inequalities must both go the same way, e.g. 1 < y < 2.'))
        }, complicatedDoubleInequality: function() {
          return r(t.t(
              'We only support solved double inequalities. Try deleting one side of the inequality.'))
        }, equationRequired: function(e) {
          return e ?
              (e = n.formatSymbol(e),
               r(t.t(
                   'Try adding \'__lhs__\' to the beginning of this equation.',
                   {lhs: e + '='}))) :
              r(t.t('Try adding an equals sign to turn this into an equation.'))
        }, variableAsFunction: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'Variable \'__dependency__\' can\'t be used as a function.',
                     {dependency: e}))
        }, distributionAsFunction: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'Cannot call distribution \'__symbol__\' as a function. Try \'__symbol__.pdf(x)\'.',
                     {symbol: e}))
        }, emptyList: function() {
          return r(t.t('Empty lists are not allowed.'))
        }, invalidTableHeader: function(e) {
          return r(
              t.t('Table headers must be simple expressions. __supplement__',
                  {supplement: e}))
        }, invalidTableEntry: function(e) {
          return r(
              t.t('Table entries must be simple expressions. __supplement__',
                  {supplement: e}))
        }, invalidFirstTableColumn: function() {
          return r(
              t.t('First column may not be __most__ or __last__.',
                  {most: '\'y\', \'r\',', last: '\'Î¸\''}))
        }, invalidDependentFirstTableColumn: function() {
          return r(t.t(
              'This column header can\'t be defined elsewhere in the calculator.'))
        }, invalidRegressionParameter: function(e) {
          return r(
              t.t('\'__symbol__\' may not be used as a regression parameter.',
                  {symbol: n.formatSymbol(e)}))
        }, optimizationError: function() {
          return r(
              t.t('We couldn\'t find any region where this model is defined.'))
        }, badListInReducer: function(e) {
          return r(t.t('When __symbol__ is called with more than two arguments, no argument can be a list.',
                       {symbol: n.formatSymbol(e)}))
              .allowExport()
        }, nonListDoubleReducer: function(e) {
          return r(t.t('Both arguments of \'__symbol__\' must be lists. For example, try typing: __recommendation__.',
                       {
                         symbol: n.formatSymbol(e),
                         recommendation:
                             n.formatSymbol(e) + '([1,2,3], [3,2,1])'
                       }))
              .allowExport()
        }, nonListParametrizedReducer: function(e) {
          return r(t.t('The first argument of \'__symbol__\' must be a list. For example, try typing: __recommendation__.',
                       {
                         symbol: n.formatSymbol(e),
                         recommendation: n.formatSymbol(e) + '([1,2,3], 1)'
                       }))
              .allowExport()
        }, methodRequiresList: function(e) {
          return r(t.t('\'__symbol__\' requires a list. For example, try typing: __recommendation__.',
                       {
                         symbol: n.formatSymbol(e),
                         recommendation: n.formatSymbol(e) + '([1,2,3])'
                       }))
              .allowExport()
        }, variableRange: function(e) {
          return r(t.t('Range cannot depend on free variable \'__symbol__\'.',
                       {symbol: n.formatSymbol(e[0])}))
              .setDependencies(e)
              .allowExport()
        }, nonArithmeticRange: function(e) {
          return r(t.t('Ranges must be arithmetic sequences.')).allowExport()
        }, sumMissingBound: function() {
          return r(t.t('Sums must have upper and lower bounds.'))
        }, productMissingBound: function() {
          return r(t.t('Products must have upper and lower bounds.'))
        }, incorrectSumLowerBound: function() {
          return r(t.t(
              'Lower bound of a sum must set a variable equal to a number. Try n=1.'))
        }, incorrectProductLowerBound: function() {
          return r(t.t(
              'Lower bound of a product must set a variable equal to a number. Try n=1.'))
        }, badSumBoundDependency: function(e) {
          return r(t.t(
              'Summation bounds can\'t depend on summation index \'__symbol__\'.',
              {symbol: n.formatSymbol(e)}))
        }, badProductBoundDependency: function(e) {
          return r(t.t(
              'Product bounds can\'t depend on product index \'__symbol__\'.',
              {symbol: n.formatSymbol(e)}))
        }, integralMissingBound: function() {
          return r(t.t('Integrals must have upper and lower bounds.'))
        }, integralMissingDifferential: function() {
          return r(
              t.t('Integrand must end with an integration variable, like dx.'))
        }, differentialWithSuperscript: function() {
          return r(t.t('Integration variable cannot have a superscript.'))
        }, sumMissingBody: function() {
          return r(t.t('What do you want to take the sum of?'))
        }, productMissingBody: function() {
          return r(t.t('What do you want to take the product of?'))
        }, integralMissingBody: function() {
          return r(t.t('What do you want to take the integral of?'))
        }, derivativeMissingBody: function() {
          return r(t.t('What do you want to take the derivative of?'))
        }, mismatchedBraces: function(e, i) {
          return e = n.formatSymbol(e), i = n.formatSymbol(i),
                 r(
                     t.t('Expected \'__symbol1__\' to match \'__symbol2__\'.',
                         {symbol1: e, symbol2: i}))
        }, shadowedIntegrationVariable: function(e) {
          return r(t.t(
              'You can\'t use \'__symbol__\' as an integration variable because it\'s already defined.',
              {symbol: n.formatSymbol(e)}))
        }, badIntegralBoundDependency: function(e) {
          return r(t.t(
              'Integration bounds can\'t depend on integration variable \'__symbol__\'.',
              {symbol: n.formatSymbol(e)}))
        }, percentMissingOf: function() {
          return r(t.t('\'%\' must be used with \'of\'. Try \'25% of 12\'.'))
        }, illegalBinWidth: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'The second argument to \'__symbol__\' must be a positive number.',
                     {symbol: e}))
        }, ttestListTooShort: function(e) {
          return e = n.formatSymbol(e),
                 r(t.t(
                     'Lists for \'__symbol__\' must have at least 2 elements.',
                     {symbol: e}))
        }, badSampleSize: function() {
          return r(t.t('Sample size must be at least 1.'))
        }, variableSampleSize: function(e) {
          return r(t.t('Sample size cannot depend on free variable \'__symbol__\'.',
                       {symbol: n.formatSymbol(e[0])}))
              .setDependencies(e)
              .allowExport()
        }, variableSeed: function(e) {
          return r(t.t('Random seed cannot depend on free variable \'__symbol__\'.',
                       {symbol: n.formatSymbol(e[0])}))
              .setDependencies(e)
              .allowExport()
        }, badAnsContext: function() {
          return r(t.t('You can\'t use \'ans\' in this context.'))
        }, ansUndefined: function() {
          return r(
              t.t('The previous expression didn\'t define any value for ans.'))
        }, variablesUnsupported: function(e) {
          return r(t.t(
              'This calculator does not support variables like \'__variable__\'.',
              {variable: n.formatSymbol(e)}))
        }, functionUnsupported: function(e) {
          return r(t.t(
              'This calculator does not support the \'__symbol__\' function.',
              {symbol: n.formatSymbol(e)}))
        }, logbaseUnsupported: function() {
          return r(t.t(
              'This calculator does not support specifying the base of a logarithm. Try \'log\' or \'ln\'.'))
        }, constantUnsupported: function(e) {
          return r(t.t(
              'This calculator does not support the constant \'__symbol__\'.',
              {symbol: n.formatSymbol(e)}))
        }, assignmentsUnsupported: function() {
          return r(t.t('This calculator does not support defining variables.'))
        }, functionDefinitionsUnsupported: function() {
          return r(
              t.t('This calculator does not support function definitions.'))
        }, equationsUnsupported: function() {
          return r(
              t.t('This calculator does not support this type of equation.'))
        }, inequalitiesUnsupported: function() {
          return r(t.t('This calculator does not support inequalities.'))
        }, regressionsUnsupported: function() {
          return r(t.t('This calculator does not support regressions.'))
        }, pointsUnsupported: function() {
          return r(t.t('This calculator does not support points.'))
        }, featureUnavailable: function() {
          return r(
              t.t('This feature is not available in the current calculator.'))
        }, nonSquareDeterminant: function() {
          return r(t.t('Only square matrices have a determinant.'))
        }, nonSquareInverse: function() {
          return r(t.t('Only square matrices have an inverse.'))
        }, singularInverse: function() {
          return r(t.t('Singular matrices do not have an inverse.'))
        }, matrixAssignment: function() {
          return r(t.t(
              'This calculator does not support this type of variable definition. Try using \'New Matrix\'.'))
        }, matrixAddDimensions: function() {
          return r(t.t('Cannot add matrices with different dimensions.'))
        }, matrixSubtractDimensions: function() {
          return r(t.t('Cannot subtract matrices with different dimensions.'))
        }, matrixMultiplyDimensions: function() {
          return r(
              t.t('Cannot multiply matrices with incompatible dimensions.'))
        }, matrixFractionalPower: function() {
          return r(t.t('A matrix can only be raised to integer powers.'))
        }, matrixPowerDimensions: function() {
          return r(t.t('Only square matrices can be raised to a power.'))
        }, matrixElementTypeError: function(e) {
          return r(
              t.t('Cannot use __arg__ as an element of a matrix.', {arg: e[0]}))
        }, matrixInvalidVariable: function(e) {
          return r(
              t.t('Cannot use \'__symbol__\' as a variable.',
                  {symbol: n.formatSymbol(e)}))
        }
      }
    });
define(
    'core/math/parsenode/expression',
    ['require', 'pjs', './base', 'core/math/errormsg', 'core/math/types'],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./base'), n = e('core/math/errormsg'),
          i = e('core/math/types');
      return t(r, function(e, t) {
        e.init = function(e) {
          if (!Array.isArray(e))
            throw new TypeError(
                'Argument to expression constructor must be an Array.');
          t.init.call(this), this.args = e,
                             this.valueType = this._getValueType(e),
                             this.registerDependencies(), this.computeTreeSize()
        }, e._getValueType = function(e) {
          return i.Any
        }, e.shouldExportAns = function() {
          return !0
        }, e.registerDependencies = function() {
          for (var e = 0; e < this.args.length; e++)
            this.mergeDependencies(this.args[e])
        }, e.computeTreeSize = function() {
          for (var e = 0, t = 0; t < this.args.length; t++)
            this.args[t].treeSize && (e += this.args[t].treeSize);
          if (this.treeSize = e + 1, e > 1e4) throw n.deeplyNested()
        }, e.copyWithArgs = function(e) {
          return new this.constructor(e)
        }
      })
    });
define(
    'core/math/parsenode/scalarexpression', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, e)
        }, e.getEvalStrings = function() {
          for (var e = [], t = [], r = 0; r < this.args.length; r++) {
            var n = this.args[r].getEvalStrings();
            e = e.concat(n.statements), t.push(n.expression)
          }
          return {
            statements: e, expression: this.scalarEvalExpression(t)
          }
        }
      })
    });
define(
    'core/math/parsenode/expressionTypes',
    ['require', 'pjs', './scalarexpression'], function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'), n = {
        Add: t(r, {}),
        Subtract: t(r, {}),
        Multiply: t(r, {}),
        Divide: t(r, {}),
        Exponent: t(r, {}),
        Negative: t(r, {}),
        And: t(r, {
          isInequality: function() {
            return this.args[0].isInequality() && this.args[1].isInequality()
          }
        }),
        PercentOf: t(r, {})
      };
      return n.RawExponent = t(n.Exponent, {}), n
    });
define(
    'core/math/maybe-rational', ['require', 'exports', 'core/math/builtin'],
    function(e, t, r) {
      'use strict';
      function n(e, t) {
        return {
          n: e, d: t
        }
      }
      function i(e) {
        return 'object' == typeof e && 'number' == typeof e.n &&
            'number' == typeof e.d
      }
      function a(e) {
        var t = e.match(/^(-)?(\d*)?(?:\.(\d*))?$/);
        if (!t) return NaN;
        var r = t[1], n = t[2], i = t[3];
        if (!n && !i) return NaN;
        var a = !!r;
        if (i) {
          var o = i.replace(/0+$/, ''), u = o.length, c = Math.pow(10, u),
              l = parseInt(n || '0', 10) * c + parseInt(o || '0', 10);
          return l > _ || c > _ ? parseFloat(e) : s(a ? -l : l, c)
        }
        var l = parseInt(n, 10);
        return l > _ ? parseFloat(e) : s(a ? -l : l, 1)
      }
      function o(e) {
        return i(e) ? e.n / e.d : e
      }
      function s(e, t) {
        if (!isFinite(e) || !isFinite(t) || 0 === t || Math.floor(e) !== e ||
            Math.floor(t) !== t || Math.abs(e) > _ || Math.abs(t) > _)
          return e / t;
        t < 0 && (e = -e, t = -t);
        var i = r.gcd(e, t);
        return n(e / i, t / i)
      }
      function u(e) {
        return i(e) ? n(-e.n, e.d) : -e
      }
      function c(e) {
        return i(e) ? n(Math.abs(e.n), Math.abs(e.d)) : Math.abs(e)
      }
      function l(e) {
        return i(e) ?
            0 === e.n ? e.d / e.n : n(e.n < 0 ? -e.d : e.d, Math.abs(e.n)) :
            1 / e
      }
      function p(e, t) {
        if (!i(e) || !i(t)) return o(e) + o(t);
        var n = r.gcd(e.d, t.d);
        return s(e.n * (t.d / n) + t.n * (e.d / n), e.d / n * t.d)
      }
      function f(e, t) {
        if (!i(e) || !i(t)) return o(e) * o(t);
        var n = r.gcd(e.n, t.d), a = r.gcd(t.n, e.d);
        return s(e.n / n * (t.n / a), e.d / a * (t.d / n))
      }
      function h(e, t) {
        return p(e, u(t))
      }
      function d(e, t) {
        return i(e) && i(t) ? f(e, l(t)) : o(e) / o(t)
      }
      function m(e, t) {
        var n = e, a = t;
        if (t.n < 0 && (a = u(t), n = l(e)), !i(n) || !i(a))
          return r.pow(o(e), o(t));
        if (e = n, t = a, 1 === t.d)
          return s(Math.pow(e.n, t.n), Math.pow(e.d, t.n));
        var c = e.n < 0;
        if (c && t.d % 2 != 1) return NaN;
        var p = c ? -1 : 1,
            f = p * Math.round(Math.pow(Math.abs(e.n), 1 / t.d)),
            h = Math.round(Math.pow(Math.abs(e.d), 1 / t.d));
        return Math.pow(f, t.d) !== e.n || Math.pow(h, t.d) !== e.d ?
            r.pow(o(e), o(t)) :
            s(Math.pow(f, t.n), Math.pow(h, t.n))
      }
      function y(e, t) {
        if (!i(e) || !i(t)) return r.pow(o(e), o(t));
        var n = m(e, t);
        return i(n) ? n : r.pow(o(e), o(t))
      }
      function g(e) {
        if (!i(e)) return Math.sqrt(e);
        var t = Math.round(Math.sqrt(e.n)), r = Math.round(Math.sqrt(e.d));
        return t * t !== e.n || r * r !== e.d ? Math.sqrt(o(e)) : s(t, r)
      }
      function v(e, t) {
        return y(e, l(t))
      }
      function b(e, t) {
        if (!i(e) || !i(t)) {
          var r = o(e), a = o(t);
          return r - a * Math.floor(r / a)
        }
        return h(e, f(t, n(Math.floor(o(d(e, t))), 1)))
      }
      function x(e) {
        for (var t = n(0, 1), r = 0, i = e; r < i.length; r++) {
          t = p(t, i[r])
        }
        return t
      }
      Object.defineProperty(t, '__esModule', {value: !0}), t.isRational = i;
      var _ = Math.pow(2, 53) - 1;
      t.fromDecimalString = a, t.asFloat = o, t.maybeRational = s, t.neg = u,
      t.abs = c, t.reciprocal = l, t.add = p, t.mul = f, t.sub = h, t.div = d,
      t.pow = y, t.sqrt = g, t.nthroot = v, t.mod = b, t.total = x
    });
define(
    'core/math/parsenode/constant',
    [
      'require', 'pjs', './scalarexpression', 'core/math/maybe-rational',
      'core/math/types'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'),
          n = e('core/math/maybe-rational'), i = e('core/math/types');
      return t(r, function(e, t) {
        e.init = function(e) {
          'number' == typeof e && (e = n.maybeRational(e, 1)),
              this._constantValue = e, t.init.call(this, [])
        }, e.isConstant = !0, e.getEvalStrings = function() {
          return {
            statements: [], expression: this.scalarExprString()
          }
        }, e.asValue = function() {
          return 'boolean' == typeof this._constantValue ?
              this._constantValue :
              n.asFloat(this._constantValue)
        }, e.asMaybeRationalValue = function() {
          return 'boolean' == typeof this._constantValue ? NaN :
                                                           this._constantValue
        }, e.scalarExprString = function() {
          return this.asValue() > 0 ? String(this.asValue()) :
                                      '(' + String(this.asValue()) + ')'
        }, e.getEvaluationInfo = function() {
          return [{val: this.asValue()}]
        }, e.isNaN = function() {
          return 'number' == typeof this.asValue() && isNaN(this.asValue())
        }, e._getValueType = function() {
          switch (typeof this.asValue()) {
            case 'number':
              return i.Number;
            case 'boolean':
              return i.Bool;
            default:
              throw new Error(
                  'Constant node expects value of type number or boolean, but saw ' +
                  typeof value)
          }
        }
      })
    });
define(
    'core/math/parsenode/mixednumber', ['require', 'pjs', './constant'],
    function(e) {
      'use strict';
      return e('pjs')(e('./constant'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, e)
        }, e.is_mixed_number = !0
      })
    });
define(
    'core/math/parsenode/identifier',
    [
      'require', 'pjs', './expression', 'core/lib/label',
      'core/math/parser/input-span'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./expression'), n = e('core/lib/label'),
          i = e('core/math/parser/input-span');
      return t(r, function(e, t, r) {
        e.init = function(e) {
          t.init.call(this, []), this._symbol = n.latexToIdentifier(e),
                                 this.setInputSpan(new i.Span(e, 0, e.length)),
                                 this.addDependency(this._symbol)
        }, e.evaluate = function() {
          throw 'Cannot evaluate undefined variable ' + this._symbol
        }
      })
    });
define(
    'core/math/parsenode/ans', ['require', 'pjs', './identifier'], function(e) {
      'use strict';
      return e('pjs')(e('./identifier'), function(e, t, r) {})
    });
define(
    'core/math/parsenode/freevariable',
    ['require', 'pjs', './scalarexpression'], function(e) {
      'use strict';
      return e('pjs')(e('./scalarexpression'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, []), this.addDependency(e), this._symbol = e
        }, e.isFreeVariable = !0, e.scalarEvalExpression = function(e) {
          return this._symbol
        }, e.copyWithArgs = function(e) {
          return this
        }
      })
    });
define(
    'core/math/parsenode/dummyindex', ['require', 'pjs', './freevariable'],
    function(e) {
      'use strict';
      return e('pjs')(e('./freevariable'), function() {})
    });
define(
    'core/math/parsenode/list',
    ['require', 'pjs', './expression', 'core/math/errormsg', 'core/math/types'],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./expression'), n = e('core/math/errormsg'),
          i = e('core/math/types');
      return t(r, function(e, t, r) {
        function a(e) {
          for (var t = 1 / 0, r = 0; r < e.length; r++)
            (e[r].isList || e[r].isBroadcast) && (t = Math.min(t, e[r].length));
          return t
        }
        e.init = function(e) {
          if (t.init.call(this, e), this.length = e.length, 0 === this.length)
            throw n.emptyList()
        }, e.isList = !0, e.getEvalStrings = function() {
          for (var e = [], t = [], r = 0; r < this.args.length; r++) {
            var n = this.args[r].getEvalStrings();
            Array.prototype.push.apply(e, n.statements), t.push(n.expression)
          }
          return {
            statements: e, expression: '[' + t.join(',') + ']'
          }
        }, e.asValue = function() {
          for (var e = [], t = 0; t < this.args.length; t++)
            e.push(this.args[t].asValue());
          return e
        }, e.asMaybeRationalValue = function() {
          for (var e = [], t = 0; t < this.args.length; t++)
            e.push(this.args[t].asMaybeRationalValue());
          return e
        }, e.getEvaluationInfo = function() {
          if (this.args.every(function(e) {
                return e.isConstant
              }))
            return [{
              val: this.args.map(function(e) {
                return e.asValue()
              })
            }]
        }, r.eachArgs = function(e, t, r) {
          var n = a(t);
          if (!isFinite(n)) return void r(t);
          for (var o = 0; o < n; o++) {
            for (var s = [], u = 0; u < t.length; u++)
              s.push(
                  t[u].isList || i.isList(t[u].valueType) ?
                      t[u].elementAt(e, o) :
                      t[u]);
            r(s)
          }
        }, r.mapArgs = function(e, t, n) {
          var i = [];
          return r.eachArgs(e, t, function(e) {
            i.push(n(e))
          }), i
        }, r.wrap = function(e) {
          return e.isList || i.isList(e.valueType) ? e : r([e])
        }
      })
    });
define(
    'core/math/parsenode/range', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t, r) {
        e.init = function(e) {
          t.init.call(this, e), this.beginning = e[0], this.end = e[1]
        }
      })
    });
define(
    'core/math/parsenode/broadcast', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t, r) {
        e.init = function(e, r) {
          if (t.init.call(this, r), this._replacedSymbols = e,
              this._expression = r[0], this._lists = r.slice(1), !e.length)
            throw new Error(
                'Cannot construct a broadcast node with no replaced symbols');
          for (var n = 0; n < e.length; n++) this.removeDependency(e[n]);
          for (var i = 1 / 0, a = 0; a < this._lists.length; a++) {
            if (!this._lists[a].isList)
              throw new Error(
                  'List arguments of broadcast must be list literals');
            i = Math.min(i, this._lists[a].length)
          }
          this.length = i
        }, e.isBroadcast = !0, e.copyWithArgs = function(e) {
          return new this.constructor(this._replacedSymbols, e)
        }, e.getEvalStrings = function() {
          var e = [], t = this._expression.getEvalStrings();
          Array.prototype.push.apply(e, t.statements);
          var r, n = [], i = [];
          for (r = 0; r < this._lists.length; r++) {
            var a = this._lists[r].getEvalStrings();
            Array.prototype.push.apply(e, a.statements);
            var o = this.tmpVar();
            i.push(o), n.push('var ' + o + ' = ' + a.expression)
          }
          var s = this.tmpVar(), u = this.tmpVar();
          n.push('var ' + s + ' = []');
          var c = [];
          for (r = 0; r < i.length; r++)
            c.push(
                'var ' + this._replacedSymbols[r] + ' = ' + i[r] + '[' + u +
                ']');
          return n.push(
                     'for (var ' + u + ' = 0; ' + u + ' < ' + this.length +
                     '; ' + u + '++) {\n  ' + c.join(';\n  ') + ';\n  ' + s +
                     '.push(' + t.expression + ');\n}'),
          {
            statements: e.concat(n), expression: s
          }
        }
      })
    });
define(
    'core/math/parsenode/listaccess', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, e), this.list = e[0], this.index = e[1]
        }, e.getEvalStrings = function() {
          var e = this.index.getEvalStrings(), t = this.list.getEvalStrings(),
              r = e.statements.concat(t.statements), n = this.tmpVar();
          r.push('var ' + n + ' = ' + t.expression);
          var i = this.tmpVar();
          return r.push('var ' + i + ' = Math.floor(' + e.expression + ') - 1'),
          {
            statements: r,
                expression: '(' + i + ' >= 0 && ' + i + ' < ' + n +
                '.length ? ' + n + '[' + i + '] : NaN)'
          }
        }
      })
    });
define(
    'core/math/parsenode/dotaccess', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), {})
    });
define(
    'core/math/parsenode/dotaccessexponent', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), {})
    });
define(
    'core/math/parsenode/orderedpair', ['require', 'pjs', './scalarexpression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./scalarexpression'), function(e, t, r) {
        e.asArray = function() {
          return [+this.args[0].asValue(), +this.args[1].asValue()]
        }, e.asValue = e.asArray, e.getSliderVariables = function(e, t) {
          return e.sliderVariables(t.getDependencies()).filter(function(t) {
            return !e.validParametricVariable(t)
          })
        }, e.getEvalStrings = function() {
          for (var e = [], t = [], r = 0; r < this.args.length; r++) {
            var n = this.args[r].getEvalStrings();
            e = e.concat(n.statements), t.push(n.expression)
          }
          return {
            statements: e, expression: '[' + t.join(',') + ']'
          }
        }
      })
    });
define(
    'core/math/parsenode/movablepoint', ['require', 'pjs', './orderedpair'],
    function(e) {
      'use strict';
      return e('pjs')(e('./orderedpair'), function(e, t) {
        e.init = function(e, r, n) {
          t.init.call(this, e), this.moveStrategy = r, this.defaultDragMode = n
        }, e.isMovablePoint = !0
      })
    });
define(
    'core/math/parsenode/orderedpairaccess',
    ['require', 'pjs', './scalarexpression'], function(e) {
      'use strict';
      return e('pjs')(e('./scalarexpression'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, e), this.point = e[0], this.index = e[1]
        }, e.getEvalStrings = function() {
          var e = this.index.getEvalStrings(), t = this.point.getEvalStrings(),
              r = [];
          return Array.prototype.push.apply(r, e.statements),
                 Array.prototype.push.apply(r, t.statements), {
            statements: r, expression: t.expression + '[' + e.expression + '-1]'
          }
        }
      })
    });
define(
    'core/math/parsenode/polygon', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, e), this._symbol = 'polygon'
        }
      })
    });
define('core/math/comparators', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e, t) {
    switch (t) {
      case -1:
        return e ? '<=' : '<';
      case 0:
        return e ? '=' : '!=';
      case 1:
        return e ? '>=' : '>';
      default:
        throw 'Programming error.  Comparators must have a direction of -1, 0, or 1'
    }
  }
  Object.defineProperty(t, '__esModule', {value: !0}), t.table = {
    '<': {inclusive: !1, direction: -1},
    '!=': {inclusive: !1, direction: 0},
    '>': {inclusive: !1, direction: 1},
    '<=': {inclusive: !0, direction: -1},
    '=': {inclusive: !0, direction: 0},
    '>=': {inclusive: !0, direction: 1}
  },
                                                       t.get = r
});
define(
    'core/math/parsenode/basecomparator',
    [
      'require', 'pjs', './scalarexpression', './expressionTypes',
      'core/math/comparators', 'core/math/functions'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'),
          n = e('./expressionTypes').Subtract,
          i = e('core/math/comparators').table, a = e('core/math/functions');
      return t(r, function(e, r, o) {
        o.create = function(e, r) {
          return r = r || e, t(o, function(t, n) {
                   t.operator = e,
                   t.isInequality =
                       function() {
                     return 0 !== i[e].direction
                   },
                   t.compiledOperator = r,
                   t.scalarEvalExpression =
                       function(e) {
                     return e.join(r)
                   },
                   t.evaluate =
                       a.createEvaluateFunction(t.scalarEvalExpression, 2)
                 })
        }, e.init = function(e) {
          r.init.call(this, e),
              this._difference =
                  n(-1 === i[this.operator].direction ? [e[1], e[0]] :
                                                        [e[0], e[1]])
        }
      })
    });
define(
    'core/math/parsenode/comparator',
    ['require', 'core/math/parsenode/basecomparator'], function(e) {
      'use strict';
      var t = e('core/math/parsenode/basecomparator');
      return {
        '<': t.create('<'), '>': t.create('>'), '<=': t.create('<='),
            '>=': t.create('>='), '=': t.create('=', '===')
      }
    });
define(
    'core/math/parsenode/doubleinequality',
    ['require', 'pjs', './base', 'core/math/comparators', './comparator'],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./base'), n = e('core/math/comparators'),
          i = e('./comparator');
      return t(r, function(e, t) {
        e.init = function(e) {
          t.init.call(this), this.args = e, this._symbol = e[2]._symbol,
                             this._operators = [e[1], e[3]],
                             this._expressions = [e[0], e[4]];
          var r = n.get(
              n.table[e[1]].inclusive && n.table[e[3]].inclusive,
              n.table[e[1]].direction);
          this._indicator = i[r]([e[0], e[4]]),
          this.addDependency(this._symbol),
          this.mergeDependencies(this._expressions[0], this._expressions[1])
        }, e.isInequality = function() {
          return !0
        }, e.isShadeBetween = function() {
          return !0
        }
      })
    });
define(
    'core/math/parsenode/repeatedoperator',
    ['require', 'pjs', './scalarexpression', './dummyindex'], function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'), n = e('./dummyindex');
      return t(r, function(e, t) {
        e.init = function(e) {
          t.init.call(this, e), this._index = e[0],
                                this.addDummyDependency(this._index._symbol),
                                this._index instanceof n &&
              this.removeDependency(this._index._symbol)
        }, e.getEvalStrings = function() {
          var e = [], t = this.tmpVar(), r = this._index._symbol,
              n = this.tmpVar(), i = this.tmpVar(),
              a = this.args[1].getEvalStrings(),
              o = this.args[2].getEvalStrings(),
              s = this.args[3].getEvalStrings();
          Array.prototype.push.apply(e, a.statements),
              e.push('var ' + n + ' = Math.round(' + a.expression + ')'),
              Array.prototype.push.apply(e, o.statements),
              e.push('var ' + i + ' = Math.round(' + o.expression + ')'),
              e.push('var ' + t + '=' + this.starting_value);
          var u = 'for (var ' + r + '=' + n + ';' + r + '<=' + i + ';' + r +
              '++) {' + s.statements.join(';') + ';' + t +
              this.in_place_operator + s.expression + '};',
              c = 'if(!isFinite(' + i + '-' + n + ')) {' + t + '=(' + i + '<' +
              n + '?' + this.starting_value + ':NaN);}else{' + u + '}';
          return e.push(c), {
            statements: e, expression: t
          }
        }, e.evaluate = function(e, t, r) {
          var n = r.getCompiledFunction([this._index._symbol]).fn;
          if (t = Math.round(t), e = Math.round(e), !isFinite(t - e))
            return t < e ? this.starting_value : NaN;
          for (var i = this.starting_value, a = e; a <= t; a++)
            i = this.update(i, n(a));
          return i
        }
      })
    });
define(
    'core/math/parsenode/sum', ['require', 'pjs', './repeatedoperator'],
    function(e) {
      'use strict';
      return e('pjs')(e('./repeatedoperator'), function(e, t) {
        e.in_place_operator = '+=', e.starting_value = 0,
        e.evaluateConstant = function(e) {
          var t = 1 + Math.round(e[1]) - Math.round(e[0]);
          return t <= 0 ? this.starting_value : t * e[2]
        }, e.update = function(e, t) {
          return e + t
        }
      })
    });
define(
    'core/math/parsenode/product', ['require', 'pjs', './repeatedoperator'],
    function(e) {
      'use strict';
      return e('pjs')(e('./repeatedoperator'), function(e, t) {
        e.in_place_operator = '*=', e.starting_value = 1,
        e.evaluateConstant = function(e) {
          var t = 1 + Math.round(e[1]) - Math.round(e[0]);
          return t <= 0 ? this.starting_value : Math.pow(e[2], t)
        }, e.update = function(e, t) {
          return e * t
        }
      })
    });
define(
    'core/math/parsenode/integral',
    [
      'require', 'pjs', './scalarexpression', './dummyindex',
      'core/math/builtin'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'), n = e('./dummyindex'),
          i = e('core/math/builtin');
      return t(r, function(e, t) {
        e.init = function(e) {
          t.init.call(this, e),
              this._differential = e[0],
              this.addDummyDependency(this._differential._symbol),
              this._differential instanceof n &&
              this.removeDependency(this._differential._symbol)
        }, e.getEvalStrings = function() {
          var e = this.args[0], t = this.args[1], r = this.args[2],
              n = this.args[3], i = [], a = this.tmpVar(), o = e._symbol,
              s = this.tmpVar(), u = this.tmpVar(), c = t.getEvalStrings(),
              l = r.getEvalStrings(), p = n.getEvalStrings();
          return Array.prototype.push.apply(i, c.statements),
                 Array.prototype.push.apply(i, l.statements),
                 i.push('var ' + s + ' = ' + c.expression),
                 i.push('var ' + u + ' = ' + l.expression),
                 i.push(
                     'var ' + a + ' = function (' + o + ') { ' +
                     p.statements.join('; ') + '; return ' + p.expression +
                     ';}'),
          {
            statements: i,
                expression: 'BuiltIn.quad(' + [a, s, u].join(', ') + ')'
          }
        }, e.evaluate = function(e, t, r) {
          var n = this.args[0], a = r.getCompiledFunction([n._symbol]).fn;
          return i.quad(a, e, t)
        }
      })
    });
define(
    'core/math/parsenode/functioncall',
    ['require', 'pjs', './expression', './identifier'], function(e) {
      'use strict';
      var t = e('pjs'), r = e('./expression'), n = e('./identifier');
      return t(r, function(e, t) {
        e.init = function(e, r) {
          'string' == typeof e && (e = n(e)),
              this._identifier = e, this._symbol = e._symbol,
              t.init.call(this, r), this.addDependency(this._symbol)
        }, e.copyWithArgs = function(e) {
          return new this.constructor(n(this._symbol), e)
        }
      })
    });
define(
    'core/math/parsenode/seededfunctioncall',
    ['require', 'pjs', './functioncall'], function(e) {
      'use strict';
      return e('pjs')(e('./functioncall'), function(e, t) {
        e.init = function(e, r) {
          t.init.call(this, e, r), this.seed = r[0]
        }
      })
    });
define(
    'core/math/parsenode/functionexponent', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {})
    });
define(
    'core/math/parsenode/functionfactorial', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {})
    });
define(
    'core/math/parsenode/prime', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e, r) {
          t.init.call(this, r), this.order = e
        }, e.copyWithArgs = function(e) {
          return new this.constructor(this.order, e)
        }
      })
    });
define(
    'core/math/parsenode/piecewise',
    [
      'require', 'pjs', './scalarexpression', './constant',
      'core/math/maybe-rational'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'), n = e('./constant'),
          i = e('core/math/maybe-rational').maybeRational, a = t(r, {});
      return a.chain = function(e) {
        for (var t, r = n(NaN); e.length;)
          t = e.pop(), r = a([t.condition, t.if_expr, r]);
        return r
      }, a.empty = function() {
        return a([n(!0), n(i(1, 1)), n(NaN)])
      }, a
    });
define(
    'core/math/parsenode/derivative',
    ['require', 'pjs', './scalarexpression', './identifier'], function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'), n = e('./identifier');
      return t(r, function(e, t) {
        e.init = function(e, r) {
          this._symbol = e instanceof n ? e._symbol : n(e)._symbol,
          t.init.call(this, r)
        }
      })
    });
define(
    'core/math/parsenode/nativefunction',
    ['require', 'pjs', './scalarexpression', 'core/math/functions'],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'),
          n = e('core/math/functions');
      return t(r, function(e, r, i) {
        e.init = function(e, t) {
          if (e.length >= this._requiredArity)
            for (; e.length < this._maxArity;)
              e.push(this._optionalArguments[e.length - this._requiredArity]);
          this._errorSymbol =
              'logbase' === this._symbol ? 'log' : t || this._symbol,
          r.init.call(this, e)
        }, e.copyWithArgs = function(e) {
          var t = r.copyWithArgs.call(this, e);
          return t._errorSymbol = this._errorSymbol, t
        }, e.scalarEvalExpression = function(e) {
          return this.head + '(' + e.join(',') + ')'
        }, i.create = function(e, r, i, a) {
          return t(this, function(t, o, s) {
            s.isFunction = !0, t._symbol = e, t.head = r, t._requiredArity = i,
            t._optionalArguments = a || [],
            t._maxArity = t._requiredArity + t._optionalArguments.length,
            t.evaluate = n.createEvaluateFunction(
                t.scalarEvalExpression.bind(t), t._maxArity),
            s.getConcreteInvocationTree = function(e, t, r, n, i) {
              return s(r, n).getConcreteTree(e, t, i)
            }, s.getCacheKeys = function() {
              return []
            }
          })
        }
      })
    });
define(
    'core/math/parsenode/typedfunction', ['require', 'pjs', './nativefunction'],
    function(e) {
      'use strict';
      return e('pjs')(e('./nativefunction'), function(e, t, r, n) {
        r.create = function(e, t, r, i) {
          var a = r.length, o = n.create.call(this, e, t, a);
          return o.prototype._inputTypes = r, o.prototype._outputType = i, o
        }
      })
    });
define(
    'core/math/parsenode/trigfunction',
    [
      'require', 'pjs', './nativefunction', './expressionTypes',
      'core/math/errormsg'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./nativefunction'),
          n = e('./expressionTypes').Multiply, i = e('core/math/errormsg');
      return t(r, function(e, t, r, a) {
        r.create = function(e, t) {
          var r = a.create(e, t, 1);
          return r.getConcreteInvocationTree = function(e, t, a, o, s) {
            if (a.length < 1) throw i.wrongArity(o, 1, a.length);
            var u = t.trigAngleMultiplier ?
                [n([a[0], t.trigAngleMultiplier])].concat(a.slice(1)) :
                a;
            return r(u, o).getConcreteTree(e, t, s)
          }, r.getCacheKeys = function() {
            return ['trigAngleMultiplier']
          }, r
        }
      })
    });
define(
    'core/math/parsenode/inversetrigfunction',
    ['require', 'pjs', './nativefunction', './expressionTypes'], function(e) {
      'use strict';
      var t = e('pjs'), r = e('./nativefunction'),
          n = e('./expressionTypes').Divide;
      return t(r, function(e, t, r, i) {
        r.create = function(e, t, r) {
          var a = i.create(e, t, 1, r);
          return a.getConcreteInvocationTree = function(e, t, r, i, o) {
            var s = a(r, i);
            return (t.trigAngleMultiplier ? n([s, t.trigAngleMultiplier]) : s)
                .getConcreteTree(e, t, o)
          }, a.getCacheKeys = function() {
            return ['trigAngleMultiplier']
          }, a
        }
      })
    });
define(
    'core/math/parsenode/distribution',
    ['require', 'pjs', './scalarexpression', 'core/math/errormsg'],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./scalarexpression'),
          n = e('core/math/errormsg');
      return t(r, function(e, r, i) {
        e.init = function(e, t) {
          var i = 'tdist' === this._symbol;
          if (e.length < this._requiredArity) {
            if (i) throw n.tdistWrongArity();
            throw n.wrongArity(t, this._requiredArity, e.length)
          }
          if (e.length > this._maxArity) {
            if (i) throw n.tdistWrongArity();
            throw n.wrongArity(this._symbol, this._maxArity, e.length)
          }
          for (; e.length < this._maxArity;)
            e.push(this._optionalArguments[e.length - this._requiredArity]);
          r.init.call(this, e)
        }, e.scalarEvalExpression = function(e) {
          return this.head + '(' + e.join(',') + ')'
        }, i.create = function(e, r, n) {
          return t(this, function(t, i, a) {
            a.isFunction = !0, t._symbol = e, t._requiredArity = r,
            t._optionalArguments = n || [],
            t._maxArity = t._requiredArity + t._optionalArguments.length,
            a.getConcreteInvocationTree = function(e, t, r, n, i) {
              return a(r, n)
            }, a.getCacheKeys = function() {
              return []
            }
          })
        }
      })
    });
define(
    'core/math/parsenode/reducerfunction',
    [
      'require', 'pjs', './expression', 'core/math/functions',
      'core/math/errormsg', './distribution', 'core/math/types'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./expression'), n = e('core/math/functions'),
          i = e('core/math/errormsg'), a = e('./distribution'),
          o = e('core/math/types');
      return t(r, function(e, r, s) {
        e.init = function(e, t) {
          if (0 === e.length) throw i.zeroArgReducer(t);
          if (e[0] instanceof a && 'length' !== this._symbol &&
              !e[0][this._symbol])
            throw i.functionTypeError(
                this._symbol, [o.prettyPrint(this.args[0].valueType)]);
          r.init.call(this, e)
        }, e.evalExpression = function(e) {
          return this.head + '(' + e + ')'
        }, e.getEvalStrings = function() {
          var e = this.args[0].getEvalStrings();
          return {
            statements: e.statements,
                expression: this.evalExpression(e.expression)
          }
        }, s.create = function(e, r) {
          return t(s, function(t, i, a) {
            t._symbol = e, t.head = r, t._arity = 1, a.isFunction = !0,
            a.allowDotCalls = !0, a.dotMinArity = 0, a.dotMaxArity = 0,
            t.evaluate =
                n.createEvaluateFunction(t.evalExpression.bind(t), t._arity),
            a.getConcreteInvocationTree = function(e, t, r, n, i) {
              return a(r, n).getConcreteTree(e, t, i)
            }, a.getCacheKeys = function() {
              return []
            }
          })
        }
      })
    });
define(
    'core/math/parsenode/doublereducerfunction',
    [
      'require', 'pjs', './expression', 'core/math/functions',
      'core/math/errormsg'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./expression'), n = e('core/math/functions'),
          i = e('core/math/errormsg');
      return t(r, function(e, r, a) {
        e.init = function(e, t) {
          if (r.init.call(this, e), 2 !== this.args.length)
            throw i.wrongDoubleReducerArity(t)
        }, e.evalExpression = function(e) {
          return this.head + '(' + e.join(',') + ')'
        }, e.getEvalStrings = function() {
          for (var e = [], t = [],
                   r = Math.min(this.args[0].length, this.args[1].length),
                   n = 0;
               n < this.args.length; n++) {
            var i = this.args[n], a = i.getEvalStrings();
            Array.prototype.push.apply(e, a.statements),
                t.push(
                    i.length === r ? a.expression :
                                     a.expression + '.slice(0,' + r + ')')
          }
          return {
            statements: e, expression: this.evalExpression(t)
          }
        }, a.create = function(e, r) {
          return t(a, function(t, i, a) {
            t._symbol = e, t.head = r, t._arity = 2, a.isFunction = !0,
            t.evaluate =
                n.createEvaluateFunction(t.evalExpression.bind(t), t._arity),
            a.getConcreteInvocationTree = function(e, t, r, n, i) {
              return a(r, n).getConcreteTree(e, t, i)
            }, a.getCacheKeys = function() {
              return []
            }
          })
        }
      })
    });
define(
    'core/math/parsenode/parametrizedreducerfunction',
    [
      'require', 'pjs', './expression', 'core/math/functions',
      'core/math/errormsg', './distribution', 'core/math/types'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./expression'), n = e('core/math/functions'),
          i = e('core/math/errormsg'), a = e('./distribution'),
          o = e('core/math/types');
      return t(r, function(e, r, s) {
        e.init = function(e, t) {
          if (e.length < 2 && void 0 !== this._optionalArgument &&
                  e.push(this._optionalArgument),
              2 !== e.length)
            throw i.wrongParametrizedReducerArity(t);
          if (e[0] instanceof a && !e[0][this._symbol])
            throw i.functionTypeError(
                t, [o.prettyPrint(this.args[0].valueType)]);
          r.init.call(this, e)
        }, e.evalExpression = function(e) {
          return this.head + '(' + e.join(',') + ')'
        }, e.getEvalStrings = function() {
          var e = [], t = this.args[0].getEvalStrings(),
              r = this.args[1].getEvalStrings();
          return Array.prototype.push.apply(e, t.statements),
                 Array.prototype.push.apply(e, r.statements), {
            statements: e,
                expression: this.evalExpression([t.expression, r.expression])
          }
        }, s.create = function(e, r, i) {
          return t(s, function(t, a, o) {
            t._symbol = e, t.head = r, t._optionalArgument = i, t._arity = 2,
            o.isFunction = !0, o.allowDotCalls = !0,
            o.dotMinArity = void 0 === i ? 1 : 0, o.dotMaxArity = 1,
            t.evaluate =
                n.createEvaluateFunction(t.evalExpression.bind(t), t._arity),
            o.getConcreteInvocationTree = function(e, t, r, n, i) {
              return o(r, n).getConcreteTree(e, t, i)
            }, o.getCacheKeys = function() {
              return []
            }
          })
        }
      })
    });
define(
    'core/math/parsenode/toplevelfunction',
    ['require', 'pjs', './nativefunction', 'core/math/errormsg'], function(e) {
      'use strict';
      var t = e('pjs'), r = e('./nativefunction'), n = e('core/math/errormsg');
      return t(r, function(e, r, i, a) {
        i.create = function(e) {
          return t(i, function(e, t, r) {
            r.isFunction = !0,
            r.getConcreteInvocationTree = function(e, t, r, i, a) {
              throw n.unexpectedSymbol(i)
            }, r.getCacheKeys = function() {
              return []
            }
          })
        }
      })
    });
define(
    'core/math/parsenode/builtinfunction',
    [
      'require', 'core/math/parsenode/nativefunction',
      'core/math/parsenode/typedfunction', 'core/math/parsenode/trigfunction',
      'core/math/parsenode/inversetrigfunction',
      'core/math/parsenode/reducerfunction',
      'core/math/parsenode/doublereducerfunction',
      'core/math/parsenode/parametrizedreducerfunction',
      'core/math/parsenode/distribution',
      'core/math/parsenode/toplevelfunction', 'core/math/types',
      'core/math/maybe-rational', 'core/math/parsenode/constant'
    ],
    function(e) {
      'use strict';
      var t = e('core/math/parsenode/nativefunction'),
          r = e('core/math/parsenode/typedfunction'),
          n = e('core/math/parsenode/trigfunction'),
          i = e('core/math/parsenode/inversetrigfunction'),
          a = e('core/math/parsenode/reducerfunction'),
          o = e('core/math/parsenode/doublereducerfunction'),
          s = e('core/math/parsenode/parametrizedreducerfunction'),
          u = e('core/math/parsenode/distribution'),
          c = e('core/math/parsenode/toplevelfunction'),
          l = e('core/math/types'),
          p = e('core/math/maybe-rational').maybeRational,
          f = e('core/math/parsenode/constant'), h = f(p(1, 1)), d = f(p(0, 1)),
          m = f(p(1, 2));
      return {
        sin: n.create('sin', 'BuiltIn.sin'),
            cos: n.create('cos', 'BuiltIn.cos'),
            tan: n.create('tan', 'BuiltIn.tan'),
            cot: n.create('cot', 'BuiltIn.cot'),
            sec: n.create('sec', 'BuiltIn.sec'),
            csc: n.create('csc', 'BuiltIn.csc'),
            arcsin: i.create('arcsin', 'Math.asin'),
            arccos: i.create('arccos', 'Math.acos'),
            arctan: i.create('arctan', 'Math.atan2', [h]),
            arccot: i.create('arccot', 'BuiltIn.acot'),
            arcsec: i.create('arcsec', 'BuiltIn.asec'),
            arccsc: i.create('arccsc', 'BuiltIn.acsc'),
            sinh: t.create('sinh', 'BuiltIn.sinh', 1),
            cosh: t.create('cosh', 'BuiltIn.cosh', 1),
            tanh: t.create('tanh', 'BuiltIn.tanh', 1),
            coth: t.create('coth', 'BuiltIn.coth', 1),
            sech: t.create('sech', 'BuiltIn.sech', 1),
            csch: t.create('csch', 'BuiltIn.csch', 1),
            arcsinh: t.create('arcsinh', 'BuiltIn.asinh', 1),
            arccosh: t.create('arccosh', 'BuiltIn.acosh', 1),
            arctanh: t.create('arctanh', 'BuiltIn.atanh', 1),
            arccoth: t.create('arccoth', 'BuiltIn.acoth', 1),
            arcsech: t.create('arcsech', 'BuiltIn.asech', 1),
            arccsch: t.create('arccsch', 'BuiltIn.acsch', 1),
            sqrt: t.create('sqrt', 'Math.sqrt', 1),
            rtxsqpone: t.create('rtxsqpone', 'BuiltIn.sqrtxsqp1', 1),
            rtxsqmone: t.create('rtxsqmone', 'BuiltIn.sqrtxsqm1', 1),
            nthroot: t.create('nthroot', 'BuiltIn.nthroot', 2),
            log: t.create('log', 'BuiltIn.common_log', 1),
            logbase: t.create('logbase', 'BuiltIn.log_base', 2),
            ln: t.create('ln', 'BuiltIn.log', 1),
            exp: t.create('exp', 'Math.exp', 1),
            floor: t.create('floor', 'Math.floor', 1),
            ceil: t.create('ceil', 'Math.ceil', 1),
            round: t.create('round', 'BuiltIn.round', 1, [d]),
            abs: t.create('abs', 'Math.abs', 1),
            sign: t.create('sign', 'BuiltIn.sign', 1),
            mod: t.create('mod', 'BuiltIn.mod', 2),
            nCr: t.create('nCr', 'BuiltIn.nCr', 2),
            nPr: t.create('nPr', 'BuiltIn.nPr', 2),
            factorial: t.create('factorial', 'BuiltIn.factorial', 1),
            polyGamma: t.create('polyGamma', 'BuiltIn.polyGamma', 2),
            lcm: a.create('lcm', 'BuiltIn.listLCM'),
            gcd: a.create('gcd', 'BuiltIn.listGCD'),
            mean: a.create('mean', 'BuiltIn.mean'),
            total: a.create('total', 'BuiltIn.total'),
            stdev: a.create('stdev', 'BuiltIn.stdev'),
            stdevp: a.create('stdevp', 'BuiltIn.stdevp'),
            mad: a.create('mad', 'BuiltIn.mad'),
            length: a.create('length', 'BuiltIn.length'),
            min: a.create('min', 'BuiltIn.listMin'),
            max: a.create('max', 'BuiltIn.listMax'),
            argmin: a.create('argmin', 'BuiltIn.argMin'),
            argmax: a.create('argmax', 'BuiltIn.argMax'),
            median: a.create('median', 'BuiltIn.median'),
            var : a.create('var', 'BuiltIn.var'),
            varp: a.create('varp', 'BuiltIn.varp'),
            cov: o.create('cov', 'BuiltIn.cov'),
            covp: o.create('covp', 'BuiltIn.covp'),
            corr: o.create('corr', 'BuiltIn.corr'),
            spearman: o.create('spearman', 'BuiltIn.spearman'),
            quantile: s.create('quantile', 'BuiltIn.quantile'),
            quartile: s.create('quartile', 'BuiltIn.quartile'),
            upperQuantileIndex: s.create(
                'upperQuantileIndex', 'BuiltIn.upperQuantileIndex'),
            lowerQuantileIndex: s.create(
                'lowerQuantileIndex', 'BuiltIn.lowerQuantileIndex'),
            quartileIndex: s.create('quartileIndex', 'BuiltIn.quartileIndex'),
            upperQuartileIndex: s.create(
                'upperQuartileIndex', 'BuiltIn.upperQuartileIndex'),
            lowerQuartileIndex: s.create(
                'lowerQuartileIndex', 'BuiltIn.lowerQuartileIndex'),
            normalcdf: t.create('normalcdf', 'BuiltIn.normalcdf', 2, [d, h]),
            normalpdf: t.create('normalpdf', 'BuiltIn.normalpdf', 1, [d, h]),
            normalSample: r.create(
                'normalSample', 'BuiltIn.normalSample',
                [l.SeedType, l.Number, l.Number], l.Number),
            uniformSample: r.create(
                'uniformSample', 'BuiltIn.uniformSample',
                [l.SeedType, l.Number, l.Number], l.Number),
            tSample: r.create(
                'tSample', 'BuiltIn.tSample', [l.SeedType, l.Number], l.Number),
            poissonSample: r.create(
                'poissonSample', 'BuiltIn.poissonSample',
                [l.SeedType, l.Number], l.Number),
            binomSample: r.create(
                'binomSample', 'BuiltIn.binomSample',
                [l.SeedType, l.Number, l.Number], l.Number),
            binomcdf: t.create('binomcdf', 'BuiltIn.binomcdf', 3, [m]),
            binompdf: t.create('binompdf', 'BuiltIn.binompdf', 2, [m]),
            poissoncdf: t.create('poissoncdf', 'BuiltIn.poissoncdf', 3),
            poissonpdf: t.create('poissonpdf', 'BuiltIn.poissonpdf', 2),
            uniformcdf: t.create('uniformcdf', 'BuiltIn.uniformcdf', 2, [d, h]),
            uniformpdf: t.create('uniformpdf', 'BuiltIn.uniformpdf', 1, [d, h]),
            invNorm: t.create('invNorm', 'BuiltIn.invNorm', 1),
            invT: t.create('invT', 'BuiltIn.invT', 2),
            invPoisson: t.create('invPoisson', 'BuiltIn.invPoisson', 2),
            invBinom: t.create('invBinom', 'BuiltIn.invBinom', 3),
            invUniform: t.create('invUniform', 'BuiltIn.invUniform', 3),
            erf: t.create('erf', 'BuiltIn.erf', 1),
            tpdf: t.create('tpdf', 'BuiltIn.tpdf', 2),
            tcdf: t.create('tcdf', 'BuiltIn.tcdf', 3),
            tscore: s.create('tscore', 'BuiltIn.tscore', d),
            distance: r.create(
                'distance', 'BuiltIn.distance', [l.Point, l.Point], l.Number),
            midpoint: r.create(
                'midpoint', 'BuiltIn.midpoint', [l.Point, l.Point], l.Point),
            normaldist: u.create('normaldist', 0, [d, h]),
            tdist: u.create('tdist', 1),
            binomialdist: u.create('binomialdist', 1, [m]),
            poissondist: u.create('poissondist', 1),
            uniformdist: u.create('uniformdist', 0, [d, h]),
            pdf: r
                .create(
                    'pdf', 'BuiltIn.normpdf',
                    [l.Distribution, [l.Number, l.ListOfNumber]], l.Number)
                .open(function(e, t, r) {
                  r.allowDotCalls = !0, r.dotMinArity = 1, r.dotMaxArity = 1
                }),
            cdf: r
                .create(
                    'cdf', 'BuiltIn.normcdf',
                    [
                      l.Distribution, [l.Number, l.ListOfNumber],
                      [l.Number, l.ListOfNumber]
                    ],
                    l.Number)
                .open(function(e, t, r) {
                  r.allowDotCalls = !0, r.dotMinArity = 1, r.dotMaxArity = 2
                }),
            random:
                t.create('random', 'BuiltIn.random', 2).open(function(e, t, r) {
                  r.allowDotCalls = !0, r.dotMinArity = 1, r.dotMaxArity = 3
                }),
            polygon: c.create('polygon'), histogram: c.create('histogram'),
            dotplot: c.create('dotplot'), boxplot: c.create('boxplot'),
            ttest: c.create('ttest'), ittest: c.create('ittest'),
            stats: c.create('stats')
      }
    });
define(
    'core/math/parsenode/histogram', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, e), this._symbol = 'histogram'
        }
      })
    });
define(
    'core/math/parsenode/object3d', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e, r) {
          t.init.call(this, e), this._symbol = r
        }
      })
    });
define(
    'core/math/parsenode/dotplot', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, e), this._symbol = 'dotplot'
        }
      })
    });
define(
    'core/math/parsenode/boxplot', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e) {
          t.init.call(this, e), this._symbol = 'boxplot'
        }
      })
    });
define(
    'core/math/parsenode/ttest', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function() {
          t.init.apply(this, arguments), this._symbol = 'ttest'
        }
      })
    });
define(
    'core/math/parsenode/independent-ttest', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function() {
          t.init.apply(this, arguments), this._symbol = 'ittest'
        }
      })
    });
define(
    'core/math/parsenode/stats', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function() {
          t.init.apply(this, arguments), this._symbol = 'stats'
        }
      })
    });
define(
    'core/math/parsenode/equation',
    [
      'require', './base', 'pjs', './expressionTypes',
      'core/math/parsenode/comparator'
    ],
    function(e) {
      'use strict';
      var t = e('./base'), r = e('pjs'), n = e('./expressionTypes').Subtract,
          i = e('core/math/parsenode/comparator');
      return r(t, function(e, t) {
        e.init = function(e, r) {
          t.init.call(this), this.mergeDependencies(e, r),
              this._lhs = e, this._rhs = r,
              this._difference = n([this._lhs, this._rhs])
        }, e.asComparator = function() {
          return i['=']([this._lhs, this._rhs])
        }
      })
    });
define(
    'core/math/parsenode/assignment',
    ['require', './base', './equation', './identifier', 'pjs'], function(e) {
      'use strict';
      var t = e('./base'), r = e('./equation'), n = e('./identifier');
      return e('pjs')(t, function(e, t) {
        e.init = function(e, r) {
          t.init.call(this), e = e._symbol, this.mergeDependencies(r),
                             this._expression = r, this._symbol = e,
                             this._exports = this.computeExports()
        }, e.shouldExportAns = function() {
          return !0
        }, e.computeExports = function() {
          for (var e = this._symbol, t = this.getDependencies(), r = 0;
               r < t.length; r++)
            if (t[r] === e) return [];
          return [e]
        }, e.isEquation = function(e) {
          return -1 !== e.getDependencies().indexOf(this._symbol)
        }, e.asEquation = function() {
          var e = r(n(this._symbol), this._expression);
          return e.userData = this.userData, e.metaData = this.metaData, e
        }, e.shouldPromoteToSlider = function(e) {
          return !!this._expression.isConstant &&
              !this._expression.is_mixed_number &&
              'number' == typeof this._expression.asValue() &&
              !!isFinite(this._expression.asValue()) &&
              e.isValidSlider(this._symbol)
        }
      })
    });
define(
    'core/math/parsenode/functiondefinition',
    [
      'require', 'pjs', './base', 'core/math/errormsg', './equation',
      './identifier', './functioncall'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./base'), n = e('core/math/errormsg'),
          i = e('./equation'), a = e('./identifier'), o = e('./functioncall');
      return t(r, function(e, t) {
        e.init =
            function(e, r, n) {
          t.init.call(this),
              e = e._symbol, this._argSymbols = r.map(function(e) {
                return e._symbol
              }),
              this._symbol = e, this._exports = [e], this._expression = n,
              this.addDependencies(this._argSymbols),
              this.addDummyDependencies(this._argSymbols),
              this.mergeDependencies(this._expression)
        },
        e.isFunction = !0,
        e.getConcreteInvocationTree = function(e, t, r, i, a) {
          if (r.length !== this._argSymbols.length)
            throw n.wrongArity(i, this._argSymbols.length, r.length);
          for (var o = Object.create(t), s = 0; s < this._argSymbols.length;
               s++)
            o[this._argSymbols[s]] = r[s];
          return this._expression.getConcreteTree(e, o, a)
        }, e.getSliderVariables = function(e, t) {
          var r = this._argSymbols;
          return e.sliderVariables(t.getDependencies()).filter(function(e) {
            return -1 === r.indexOf(e)
          })
        }, e.asEquation = function() {
          var e = this._argSymbols.map(function(e) {
            return a(e)
          }),
              t = i(o(a(this._symbol), e), this._expression);
          return t.userData = this.userData, t.metaData = this.metaData, t
        }
      })
    });
define(
    'core/math/parsenode/optimizedregression', ['require', 'pjs', './base'],
    function(e) {
      'use strict';
      return e('pjs')(e('./base'), function(e, t) {
        e.init = function(e, r, n, i, a) {
          t.init.call(this), this.parameters = e, this.residuals = r,
                             this.statistics = n, this.model = i,
                             this.isModelValid = a.isModelValid,
                             this.residualVariable = a.residualVariable,
                             this.residualSuggestionId = a.residualSuggestionId,
                             this.shouldSuggestLogMode = a.shouldSuggestLogMode,
                             this._exports = [this.residualVariable];
          for (var o in e) e.hasOwnProperty(o) && this._exports.push(o);
          this.mergeDependencies(i)
        }, e.getCompiledFunction = function() {
          return this.model.getCompiledFunction.apply(this.model, arguments)
        }, e.getCompiledDerivative = function() {
          return this.model.getCompiledDerivative.apply(this.model, arguments)
        }, e.evaluate = function() {
          return this.model.evaluate.apply(this.model, arguments)
        }
      })
    });
define('numeric', [], function() {
  'use strict';
  var e = 'undefined' == typeof exports ? function() {} : exports;
  return 'undefined' != typeof global && (global.numeric = e),
         e.version = '1.2.6',
         e._myIndexOf =
             function(e) {
           var t, r = this.length;
           for (t = 0; t < r; ++t)
             if (this[t] === e) return t;
           return -1
         },
         e.myIndexOf =
             Array.prototype.indexOf ? Array.prototype.indexOf : e._myIndexOf,
         e.precision = 4, e.largeArray = 50,
         e.compile =
             function() {
           var t = Array.prototype.slice.call(arguments), r = t.pop();
           return r = 'return function (' + t.join(',') + ') {' + r + '}',
                  new Function(['numeric'], r)(e)
         },
         e._dim =
             function(e) {
           for (var t = []; 'object' == typeof e;) t.push(e.length), e = e[0];
           return t
         },
         e.dim =
             function(t) {
           var r, n;
           return 'object' == typeof t ?
               (r = t[0],
                'object' == typeof r ?
                    (n = r[0],
                     'object' == typeof n ? e._dim(t) : [t.length, r.length]) :
                    [t.length]) :
               []
         },
         e.mapreduce =
             function(t, r) {
           return e.compile(
               'x', 'accum', '_s', '_k',
               'if(typeof accum === "undefined") accum = ' + r +
                   ';\nif(typeof x === "number") { var xi = x; ' + t +
                   '; return accum; }\nif(typeof _s === "undefined") _s = numeric.dim(x);\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i,xi;\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) {\n        accum = arguments.callee(x[i],accum,_s,_k+1);\n    }    return accum;\n}\nfor(i=_n-1;i>=1;i-=2) { \n    xi = x[i];\n    ' +
                   t + ';\n    xi = x[i-1];\n    ' + t +
                   ';\n}\nif(i === 0) {\n    xi = x[i];\n    ' + t +
                   '\n}\nreturn accum;')
         },
         e.mapreduce2 =
             function(t, r) {
           return e.compile(
               'x',
               'var n = x.length;\nvar i,xi;\n' + r +
                   '\nfor(i=n-1;i!==-1;--i) { \n    xi = x[i];\n    ' + t +
                   '\n}\nreturn accum;')
         },
         e.rep =
             function(t, r, n) {
           void 0 === n && (n = 0);
           var i, a = t[n], o = Array(a);
           if (n === t.length - 1) {
             for (i = a - 2; i >= 0; i -= 2) o[i + 1] = r, o[i] = r;
             return -1 === i && (o[0] = r), o
           }
           for (i = a - 1; i >= 0; i--) o[i] = e.rep(t, r, n + 1);
           return o
         },
         e.dotMMsmall =
             function(e, t) {
           var r, n, i, a, o, s, u, c, l, p, f;
           for (a = e.length, o = t.length, s = t[0].length, u = Array(a),
               r = a - 1;
                r >= 0; r--) {
             for (c = Array(s), l = e[r], i = s - 1; i >= 0; i--) {
               for (p = l[o - 1] * t[o - 1][i], n = o - 2; n >= 1; n -= 2)
                 f = n - 1, p += l[n] * t[n][i] + l[f] * t[f][i];
               0 === n && (p += l[0] * t[0][i]), c[i] = p
             }
             u[r] = c
           }
           return u
         },
         e._getCol =
             function(e, t, r) {
           var n, i = e.length;
           for (n = i - 1; n > 0; --n) r[n] = e[n][t], --n, r[n] = e[n][t];
           0 === n && (r[0] = e[0][t])
         },
         e.dotMMbig =
             function(t, r) {
           var n, i, a, o = e._getCol, s = r.length, u = Array(s), c = t.length,
                        l = r[0].length, p = new Array(c), f = e.dotVV;
           for (--s, --c, i = c; - 1 !== i; --i) p[i] = Array(l);
           for (--l, i = l; - 1 !== i; --i)
             for (o(r, i, u), a = c; - 1 !== a; --a)
               0, n = t[a], p[a][i] = f(n, u);
           return p
         },
         e.dotMV =
             function(t, r) {
           var n, i = t.length, a = (r.length, Array(i)), o = e.dotVV;
           for (n = i - 1; n >= 0; n--) a[n] = o(t[n], r);
           return a
         },
         e.dotVM =
             function(e, t) {
           var r, n, i, a, o, s, u;
           for (i = e.length, a = t[0].length, o = Array(a), n = a - 1; n >= 0;
                n--) {
             for (s = e[i - 1] * t[i - 1][n], r = i - 2; r >= 1; r -= 2)
               u = r - 1, s += e[r] * t[r][n] + e[u] * t[u][n];
             0 === r && (s += e[0] * t[0][n]), o[n] = s
           }
           return o
         },
         e.dotVV =
             function(e, t) {
           var r, n, i = e.length, a = e[i - 1] * t[i - 1];
           for (r = i - 2; r >= 1; r -= 2)
             n = r - 1, a += e[r] * t[r] + e[n] * t[n];
           return 0 === r && (a += e[0] * t[0]), a
         },
         e.dot =
             function(t, r) {
           var n = e.dim;
           switch (1e3 * n(t).length + n(r).length) {
             case 2002:
               return r.length < 10 ? e.dotMMsmall(t, r) : e.dotMMbig(t, r);
             case 2001:
               return e.dotMV(t, r);
             case 1002:
               return e.dotVM(t, r);
             case 1001:
               return e.dotVV(t, r);
             case 1e3:
               return e.mulVS(t, r);
             case 1:
               return e.mulSV(t, r);
             case 0:
               return t * r;
             default:
               throw new Error('numeric.dot only works on vectors and matrices')
           }
         },
         e.diag =
             function(e) {
           var t, r, n, i, a = e.length, o = Array(a);
           for (t = a - 1; t >= 0; t--) {
             for (i = Array(a), r = t + 2, n = a - 1; n >= r; n -= 2)
               i[n] = 0, i[n - 1] = 0;
             for (n > t && (i[n] = 0), i[t] = e[t], n = t - 1; n >= 1; n -= 2)
               i[n] = 0, i[n - 1] = 0;
             0 === n && (i[0] = 0), o[t] = i
           }
           return o
         },
         e.getDiag =
             function(e) {
           var t, r = Math.min(e.length, e[0].length), n = Array(r);
           for (t = r - 1; t >= 1; --t) n[t] = e[t][t], --t, n[t] = e[t][t];
           return 0 === t && (n[0] = e[0][0]), n
         },
         e.identity =
             function(t) {
           return e.diag(e.rep([t], 1))
         },
         e.pointwise =
             function(t, r, n) {
           void 0 === n && (n = '');
           var i, a, o = [], s = /\[i\]$/, u = '', c = !1;
           for (i = 0; i < t.length; i++)
             s.test(t[i]) ? (a = t[i].substring(0, t[i].length - 3), u = a) :
                            a = t[i],
                            'ret' === a && (c = !0), o.push(a);
           return o[t.length] = '_s', o[t.length + 1] = '_k',
                  o[t.length + 2] =
                      'if(typeof _s === "undefined") _s = numeric.dim(' + u +
                      ');\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i' +
                      (c ? '' : ', ret = Array(_n)') +
                      ';\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(' +
                      t.join(',') + ',_s,_k+1);\n    return ret;\n}\n' + n +
                      '\nfor(i=_n-1;i!==-1;--i) {\n    ' + r +
                      '\n}\nreturn ret;',
                  e.compile.apply(null, o)
         },
         e.pointwise2 =
             function(t, r, n) {
           void 0 === n && (n = '');
           var i, a, o = [], s = /\[i\]$/, u = '', c = !1;
           for (i = 0; i < t.length; i++)
             s.test(t[i]) ? (a = t[i].substring(0, t[i].length - 3), u = a) :
                            a = t[i],
                            'ret' === a && (c = !0), o.push(a);
           return o[t.length] = 'var _n = ' + u + '.length;\nvar i' +
                      (c ? '' : ', ret = Array(_n)') + ';\n' + n +
                      '\nfor(i=_n-1;i!==-1;--i) {\n' + r + '\n}\nreturn ret;',
                  e.compile.apply(null, o)
         },
         e._biforeach =
             function e(t, r, n, i, a) {
           if (i === n.length - 1) return void a(t, r);
           var o, s = n[i];
           for (o = s - 1; o >= 0; o--)
             e('object' == typeof t ? t[o] : t, 'object' == typeof r ? r[o] : r,
               n, i + 1, a)
         },
         e._biforeach2 =
             function e(t, r, n, i, a) {
           if (i === n.length - 1) return a(t, r);
           var o, s = n[i], u = Array(s);
           for (o = s - 1; o >= 0; --o)
             u[o] =
                 e('object' == typeof t ? t[o] : t,
                   'object' == typeof r ? r[o] : r, n, i + 1, a);
           return u
         },
         e._foreach =
             function e(t, r, n, i) {
           if (n === r.length - 1) return void i(t);
           var a, o = r[n];
           for (a = o - 1; a >= 0; a--) e(t[a], r, n + 1, i)
         },
         e._foreach2 =
             function e(t, r, n, i) {
           if (n === r.length - 1) return i(t);
           var a, o = r[n], s = Array(o);
           for (a = o - 1; a >= 0; a--) s[a] = e(t[a], r, n + 1, i);
           return s
         },
         e.ops2 = {
           add: '+',
           sub: '-',
           mul: '*',
           div: '/',
           mod: '%',
           and: '&&',
           or: '||',
           eq: '===',
           neq: '!==',
           lt: '<',
           gt: '>',
           leq: '<=',
           geq: '>=',
           band: '&',
           bor: '|',
           bxor: '^',
           lshift: '<<',
           rshift: '>>',
           rrshift: '>>>'
         },
         e.opseq = {
           addeq: '+=',
           subeq: '-=',
           muleq: '*=',
           diveq: '/=',
           modeq: '%=',
           lshifteq: '<<=',
           rshifteq: '>>=',
           rrshifteq: '>>>=',
           bandeq: '&=',
           boreq: '|=',
           bxoreq: '^='
         },
         e.mathfuns =
             [
               'abs', 'acos', 'asin', 'atan', 'ceil', 'cos', 'exp', 'floor',
               'log', 'round', 'sin', 'sqrt', 'tan', 'isNaN', 'isFinite'
             ],
         e.mathfuns2 = ['atan2', 'pow', 'max', 'min'],
         e.ops1 = {neg: '-', not: '!', bnot: '~', clone: ''}, e.mapreducers = {
           any: ['if(xi) return true;', 'var accum = false;'],
           all: ['if(!xi) return false;', 'var accum = true;'],
           sum: ['accum += xi;', 'var accum = 0;'],
           prod: ['accum *= xi;', 'var accum = 1;'],
           norm2Squared: ['accum += xi*xi;', 'var accum = 0;'],
           norminf: [
             'accum = max(accum,abs(xi));',
             'var accum = 0, max = Math.max, abs = Math.abs;'
           ],
           norm1: ['accum += abs(xi);', 'var accum = 0, abs = Math.abs;'],
           sup: [
             'accum = max(accum,xi);', 'var accum = -Infinity, max = Math.max;'
           ],
           inf: [
             'accum = min(accum,xi);', 'var accum = Infinity, min = Math.min;'
           ]
         },
         function() {
           var t, r;
           for (t = 0; t < e.mathfuns2.length; ++t)
             r = e.mathfuns2[t], e.ops2[r] = r;
           for (t in e.ops2)
             if (e.ops2.hasOwnProperty(t)) {
               r = e.ops2[t];
               var n, i, a = '';
               -1 !== e.myIndexOf.call(e.mathfuns2, t) ?
                   (a = 'var ' + r + ' = Math.' + r + ';\n',
                    n =
                        function(e, t, n) {
                          return e + ' = ' + r + '(' + t + ',' + n + ')'
                        },
                    i =
                        function(e, t) {
                          return e + ' = ' + r + '(' + e + ',' + t + ')'
                        }) :
                   (n =
                        function(e, t, n) {
                          return e + ' = ' + t + ' ' + r + ' ' + n
                        },
                    i = e.opseq.hasOwnProperty(t + 'eq') ?
                        function(e, t) {
                          return e + ' ' + r + '= ' + t
                        } :
                        function(e, t) {
                          return e + ' = ' + e + ' ' + r + ' ' + t
                        }),
                   e[t +
                     'VV'] =
                       e.pointwise2(
                           ['x[i]', 'y[i]'], n('ret[i]', 'x[i]', 'y[i]'), a),
                     e[t + 'SV'] = e.pointwise2(
                         ['x', 'y[i]'], n('ret[i]', 'x', 'y[i]'), a),
                     e[t + 'VS'] = e.pointwise2(
                         ['x[i]', 'y'], n('ret[i]', 'x[i]', 'y'), a),
                     e[t] = e.compile(
                         'var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric.' +
                         t + 'VV, VS = numeric.' + t + 'VS, SV = numeric.' + t +
                         'SV;\nvar dim = numeric.dim;\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof x === "object") {\n      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n  else ' +
                         i('x', 'y') + '\n}\nreturn x;\n'),
                     e[r] = e[t],
                     e[t + 'eqV'] = e.pointwise2(
                         ['ret[i]', 'x[i]'], i('ret[i]', 'x[i]'), a),
                     e[t + 'eqS'] =
                         e.pointwise2(['ret[i]', 'x'], i('ret[i]', 'x'), a),
                     e[t + 'eq'] = e.compile(
                         'var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric.' +
                         t + 'eqV, S = numeric.' + t +
                         'eqS\nvar s = numeric.dim(x);\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n  else numeric._biforeach(x,y,s,0,S);\n}\nreturn x;\n')
             }
           for (t = 0; t < e.mathfuns2.length; ++t)
             r = e.mathfuns2[t], delete e.ops2[r];
           for (t = 0; t < e.mathfuns.length; ++t)
             r = e.mathfuns[t], e.ops1[r] = r;
           for (t in e.ops1)
             e.ops1.hasOwnProperty(t) &&
                 (a = '', r = e.ops1[t],
                  -1 !== e.myIndexOf.call(e.mathfuns, t) &&
                      Math.hasOwnProperty(r) &&
                      (a = 'var ' + r + ' = Math.' + r + ';\n'),
                  e[t + 'eqV'] = e.pointwise2(
                      ['ret[i]'], 'ret[i] = ' + r + '(ret[i]);', a),
                  e[t + 'eq'] = e.compile(
                      'x',
                      'if(typeof x !== "object") return ' + r +
                          'x\nvar i;\nvar V = numeric.' + t +
                          'eqV;\nvar s = numeric.dim(x);\nnumeric._foreach(x,s,0,V);\nreturn x;\n'),
                  e[t + 'V'] =
                      e.pointwise2(['x[i]'], 'ret[i] = ' + r + '(x[i]);', a),
                  e[t] = e.compile(
                      'x',
                      'if(typeof x !== "object") return ' + r +
                          '(x)\nvar i;\nvar V = numeric.' + t +
                          'V;\nvar s = numeric.dim(x);\nreturn numeric._foreach2(x,s,0,V);\n'));
           for (t = 0; t < e.mathfuns.length; ++t)
             r = e.mathfuns[t], delete e.ops1[r];
           for (t in e.mapreducers)
             e.mapreducers.hasOwnProperty(t) &&
                 (r = e.mapreducers[t], e[t + 'V'] = e.mapreduce2(r[0], r[1]),
                  e[t] = e.compile(
                      'x', 's', 'k',
                      r[1] + 'if(typeof x !== "object") {    xi = x;\n' + r[0] +
                          '\n    return accum;\n}if(typeof s === "undefined") s = numeric.dim(x);\nif(typeof k === "undefined") k = 0;\nif(k === s.length-1) return numeric.' +
                          t +
                          'V(x);\nvar xi;\nvar n = x.length, i;\nfor(i=n-1;i!==-1;--i) {\n   xi = arguments.callee(x[i]);\n' +
                          r[0] + '\n}\nreturn accum;\n'))
         }(),
         e.inv = function(t) {
           var r, n, i, a, o, s, u, t, c = e.dim(t), l = Math.abs, p = c[0],
                                       f = c[1], h = e.clone(t),
                                       d = e.identity(p);
           for (s = 0; s < f; ++s) {
             var m = -1, y = -1;
             for (o = s; o !== p; ++o) (u = l(h[o][s])) > y && (m = o, y = u);
             for (n = h[m], h[m] = h[s], h[s] = n, a = d[m], d[m] = d[s],
                 d[s] = a, t = n[s], u = s;
                  u !== f; ++u)
               n[u] /= t;
             for (u = f - 1; - 1 !== u; --u) a[u] /= t;
             for (o = p - 1; - 1 !== o; --o)
               if (o !== s) {
                 for (r = h[o], i = d[o], t = r[s], u = s + 1; u !== f; ++u)
                   r[u] -= n[u] * t;
                 for (u = f - 1; u > 0; --u)
                   i[u] -= a[u] * t, --u, i[u] -= a[u] * t;
                 0 === u && (i[0] -= a[0] * t)
               }
           }
           return d
         }, e.det = function(t) {
           var r = e.dim(t);
           if (2 !== r.length || r[0] !== r[1])
             throw new Error('numeric: det() only works on square matrices');
           var n, i, a, o, s, u, c, l, p = r[0], f = 1, h = e.clone(t);
           for (i = 0; i < p - 1; i++) {
             for (a = i, n = i + 1; n < p; n++)
               Math.abs(h[n][i]) > Math.abs(h[a][i]) && (a = n);
             for (a !== i && (c = h[a], h[a] = h[i], h[i] = c, f *= -1),
                  o = h[i], n = i + 1;
                  n < p; n++) {
               for (s = h[n], u = s[i] / o[i], a = i + 1; a < p - 1; a += 2)
                 l = a + 1, s[a] -= o[a] * u, s[l] -= o[l] * u;
               a !== p && (s[a] -= o[a] * u)
             }
             if (0 === o[i]) return 0;
             f *= o[i]
           }
           return f * h[i][i]
         }, e.transpose = function(e) {
           var t, r, n, i, a, o = e.length, s = e[0].length, u = Array(s);
           for (r = 0; r < s; r++) u[r] = Array(o);
           for (t = o - 1; t >= 1; t -= 2) {
             for (i = e[t], n = e[t - 1], r = s - 1; r >= 1; --r)
               a = u[r], a[t] = i[r], a[t - 1] = n[r], --r, a = u[r],
               a[t] = i[r], a[t - 1] = n[r];
             0 === r && (a = u[0], a[t] = i[0], a[t - 1] = n[0])
           }
           if (0 === t) {
             for (n = e[0], r = s - 1; r >= 1; --r)
               u[r][0] = n[r], --r, u[r][0] = n[r];
             0 === r && (u[0][0] = n[0])
           }
           return u
         }, e.negtranspose = function(e) {
           var t, r, n, i, a, o = e.length, s = e[0].length, u = Array(s);
           for (r = 0; r < s; r++) u[r] = Array(o);
           for (t = o - 1; t >= 1; t -= 2) {
             for (i = e[t], n = e[t - 1], r = s - 1; r >= 1; --r)
               a = u[r], a[t] = -i[r], a[t - 1] = -n[r], --r, a = u[r],
               a[t] = -i[r], a[t - 1] = -n[r];
             0 === r && (a = u[0], a[t] = -i[0], a[t - 1] = -n[0])
           }
           if (0 === t) {
             for (n = e[0], r = s - 1; r >= 1; --r)
               u[r][0] = -n[r], --r, u[r][0] = -n[r];
             0 === r && (u[0][0] = -n[0])
           }
           return u
         }, e.norm2 = function(t) {
           return Math.sqrt(e.norm2Squared(t))
         }, e.linspace = function(e, t, r) {
           if (void 0 === r && (r = Math.max(Math.round(t - e) + 1, 1)), r < 2)
             return 1 === r ? [e] : [];
           var n, i = Array(r);
           for (r--, n = r; n >= 0; n--) i[n] = (n * t + (r - n) * e) / r;
           return i
         }, e.getBlock = function(t, r, n) {
           function i(e, t) {
             var o, s = r[t], u = n[t] - s, c = Array(u);
             if (t === a.length - 1) {
               for (o = u; o >= 0; o--) c[o] = e[o + s];
               return c
             }
             for (o = u; o >= 0; o--) c[o] = i(e[o + s], t + 1);
             return c
           }
           var a = e.dim(t);
           return i(t, 0)
         }, e.setBlock = function(t, r, n, i) {
           function a(e, t, i) {
             var s, u = r[i], c = n[i] - u;
             if (i === o.length - 1)
               for (s = c; s >= 0; s--) e[s + u] = t[s];
             for (s = c; s >= 0; s--) a(e[s + u], t[s], i + 1)
           }
           var o = e.dim(t);
           return a(t, i, 0), t
         }, e.getRange = function(e, t, r) {
           var n, i, a, o, s = t.length, u = r.length, c = Array(s);
           for (n = s - 1; - 1 !== n; --n)
             for (c[n] = Array(u), a = c[n], o = e[t[n]], i = u - 1; - 1 !== i;
                  --i)
               a[i] = o[r[i]];
           return c
         }, e.blockMatrix = function(t) {
           var r = e.dim(t);
           if (r.length < 4) return e.blockMatrix([t]);
           var n, i, a, o, s, u = r[0], c = r[1];
           for (n = 0, i = 0, a = 0; a < u; ++a) n += t[a][0].length;
           for (o = 0; o < c; ++o) i += t[0][o][0].length;
           var l = Array(n);
           for (a = 0; a < n; ++a) l[a] = Array(i);
           var p, f, h, d, m, y = 0;
           for (a = 0; a < u; ++a) {
             for (p = i, o = c - 1; - 1 !== o; --o)
               for (s = t[a][o], p -= s[0].length, h = s.length - 1; - 1 !== h;
                    --h)
                 for (m = s[h], f = l[y + h], d = m.length - 1; - 1 !== d; --d)
                   f[p + d] = m[d];
             y += t[a][0].length
           }
           return l
         }, e.tensor = function(t, r) {
           if ('number' == typeof t || 'number' == typeof r) return e.mul(t, r);
           var n = e.dim(t), i = e.dim(r);
           if (1 !== n.length || 1 !== i.length)
             throw new Error(
                 'numeric: tensor product is only defined for vectors');
           var a, o, s, u, c = n[0], l = i[0], p = Array(c);
           for (o = c - 1; o >= 0; o--) {
             for (a = Array(l), u = t[o], s = l - 1; s >= 3; --s)
               a[s] = u * r[s], --s, a[s] = u * r[s], --s, a[s] = u * r[s], --s,
               a[s] = u * r[s];
             for (; s >= 0;) a[s] = u * r[s], --s;
             p[o] = a
           }
           return p
         }, e.epsilon = 2.220446049250313e-16, e.LU = function(t, r) {
           r = r || !1;
           var n, i, a, o, s, u, c, l, p, f = Math.abs, h = t.length, d = h - 1,
                                          m = new Array(h);
           for (r || (t = e.clone(t)), a = 0; a < h; ++a) {
             for (c = a, u = t[a], p = f(u[a]), i = a + 1; i < h; ++i)
               o = f(t[i][a]), p < o && (p = o, c = i);
             for (m[a] = c, c != a && (t[a] = t[c], t[c] = u, u = t[a]),
                 s = u[a], n = a + 1;
                  n < h; ++n)
               t[n][a] /= s;
             for (n = a + 1; n < h; ++n) {
               for (l = t[n], i = a + 1; i < d; ++i)
                 l[i] -= l[a] * u[i], ++i, l[i] -= l[a] * u[i];
               i === d && (l[i] -= l[a] * u[i])
             }
           }
           return {
             LU: t, P: m
           }
         }, e.LUsolve = function(t, r) {
           var n, i, a, o, s, u = t.LU, c = u.length, l = e.clone(r), p = t.P;
           for (n = c - 1; - 1 !== n; --n) l[n] = r[n];
           for (n = 0; n < c; ++n)
             for (a = p[n], p[n] !== n && (s = l[n], l[n] = l[a], l[a] = s),
                 o = u[n], i = 0;
                  i < n; ++i)
               l[n] -= l[i] * o[i];
           for (n = c - 1; n >= 0; --n) {
             for (o = u[n], i = n + 1; i < c; ++i) l[n] -= l[i] * o[i];
             l[n] /= o[n]
           }
           return l
         }, e.solve = function(t, r, n) {
           return e.LUsolve(e.LU(t, n), r)
         }, e
});
define('core/math/qr', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e, t) {
    for (var r = e.length, n = t.length, i = 0, a = 0, o = n - r; o < n; o++)
      i += e[o + r - n] * t[o], a += e[o + r - n] * e[o + r - n];
    for (var s = i / a, o = n - r; o < n; o++)
      t[o] = 2 * s * e[o + r - n] - t[o]
  }
  function n(e, t, r) {
    for (var n = e.length, i = t.length, a = 0, o = 0, s = i - n; s < i; s++)
      a += e[s + n - i] * t[s][r], o += e[s + n - i] * e[s + n - i];
    for (var u = a / o, s = i - n; s < i; s++)
      t[s][r] = 2 * u * e[s + n - i] - t[s][r]
  }
  function i(e, t, r, n) {
    var i = Array(e.length - t);
    if (1 === i.length) return i[0] = 1, i;
    if (0 === n) {
      i[0] = 1;
      for (var a = 1; a < i.length; a++) i[a] = 0;
      return i
    }
    var o = e[t][r] < 0 ? -1 : 1;
    i[0] = e[t][r] + o * Math.sqrt(n);
    for (var s = t + 1; s < e.length; s++) i[s - t] = e[s][r];
    return i
  }
  function a(e, t, r) {
    for (var n = 0; t < e.length; t++) n += e[t][r] * e[t][r];
    return n
  }
  function o(e, t) {
    if (!t || !t.mutateInput) {
      var r = e;
      e = Array(e.length);
      for (var o = 0; o < r.length; o++) e[o] = r[o].slice()
    }
    for (var s = Math.min(e.length, e[0].length), u = Array(s), c = [], l = 0;
         l < s; l++) {
      for (var p = -1 / 0, f = l, h = l; h < e[l].length; h++) {
        var d = a(e, l, h);
        d > p && (p = d, f = h)
      }
      if (u[l] = f, f !== l)
        for (var o = 0; o < e.length; o++) {
          var m = e[o][f];
          e[o][f] = e[o][l], e[o][l] = m
        }
      for (var y = i(e, l, l, p), h = l; h < e[l].length; h++) n(y, e, h);
      c.push(y)
    }
    return {
      reflectors: c, r: e, p: u
    }
  }
  function s(e, t, n) {
    for (var i = e.reflectors, a = e.r, o = e.p, s = t.slice(), u = 0;
         u < i.length; u++)
      r(i[u], s);
    for (var u = i.length; u < a[0].length; u++) s[u] = 0;
    s.length = a[0].length;
    for (var c = Math.pow(2, -52),
             l = n.regularize ?
             c * Math.abs(a[0][0]) * Math.max(a.length, a[0].length) :
             0,
             u = i.length - 1;
         u >= 0; u--) {
      var p = a[u];
      if (Math.abs(p[u]) <= l)
        s[u] = 0;
      else {
        for (var f = u + 1; f < i.length; f++) s[u] -= s[f] * p[f];
        s[u] /= p[u]
      }
    }
    for (var u = o.length - 1; u >= 0; u--)
      if (o[u] !== u) {
        var h = s[u];
        s[u] = s[o[u]], s[o[u]] = h
      }
    return s
  }
  function u(e, t, r) {
    for (var n = Array(e.r[0].length), i = 0; i < n.length; i++)
      n[i] = Array(t[0].length);
    for (var a = Array(t.length), o = 0; o < t[0].length; o++) {
      for (var i = 0; i < t.length; i++) a[i] = t[i][o];
      for (var u = s(e, a, r), i = 0; i < u.length; i++) n[i][o] = u[i]
    }
    return n
  }
  function c(e, t, r) {
    return Array.isArray(t[0]) ? u(e, t, r) : s(e, t, r)
  }
  function l(e) {
    var t = e.r, r = Math.min(t.length, t[0].length), n = t[0][0],
        i = t[r - 1][r - 1];
    return 0 === n ? 1 / 0 : Math.abs(n / i)
  }
  function p(e) {
    var t = Math.pow(2, -52);
    return Math.max(e.r.length, e.r[0].length) * t * l(e) < 1
  }
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.qr = o, t.qrSolve = c, t.conditionNumber = l,
      t.isNumericallyFullRank = p
});
define(
    'core/math/least-squares',
    ['require', 'exports', 'numeric', 'core/math/distance', './qr'],
    function(e, t, r, n, i) {
      'use strict';
      function a(e, t) {
        for (var r = [], n = 0; n < t; n++) r.push(e);
        return r
      }
      function o(e, t) {
        for (var r = s(e, t), n = 0, i = 0, a = r; i < a.length; i++) {
          var o = a[i], u = o;
          n += u * u
        }
        return n / r.length
      }
      function s(e, t) {
        return e.apply(void 0, t)
      }
      function u(e, t) {
        for (var r = [], n = 0, i = e; n < i.length; n++) {
          var a = i[n], o = a.apply(void 0, t);
          r.push(o)
        }
        return r
      }
      function c(e, t) {
        for (var r = [], n = 0; n < e.length; n++) t[n] && r.push(e[n]);
        return r
      }
      function l(e, t, r) {
        for (var n = [], i = 0, a = 0; i < e.length; i++) {
          var o = 0;
          r[i] && (o = t[a], a += 1), n.push(e[i] + o)
        }
        return n
      }
      function p(e, t) {
        for (var n = a(0, t.length), c = u(t, n),
                 l = i.qr(r.transpose(c), {mutateInput: !0}), p = 0;
             p < 2; p++) {
          var f = s(e, n), h = r.neg(i.qrSolve(l, f, {regularize: !1}));
          n = r.add(n, h)
        }
        var d = o(e, n);
        if (i.isNumericallyFullRank(l)) return {solution: n, MSE: d};
        for (var m = a(0, t.length), p = 0; p < 2; p++) {
          var f = s(e, m), h = r.neg(i.qrSolve(l, f, {regularize: !0}));
          m = r.add(m, h)
        }
        var y = o(e, m);
        return .999 * y <= d ? {solution: m, MSE: y} : {solution: n, MSE: d}
      }
      function f(e, t, n, p) {
        var f, h = p.maxIterations, d = p.linearSubset || a(!1, n.length),
               m = r.not(d), y = c(t, d), g = c(t, m), v = n, b = 0, x = .001;
        if (r.any(d)) {
          var _ = r.transpose(u(y, v)), S = i.qr(_);
          f = {Jv: _, F: S};
          var M = s(e, v), E = r.neg(i.qrSolve(S, M, {regularize: !0}));
          v = l(v, E, d)
        }
        for (var w = !1, D = o(e, v); b < h && !w && isFinite(D);) {
          var M = s(e, v), T = u(g, v), P = r.transpose(T), I = void 0,
              C = void 0;
          if (f) {
            var S = f.F, _ = f.Jv;
            I = r.dot(T, r.sub(M, r.dot(_, i.qrSolve(S, M, {regularize: !0})))),
            C = r.dot(T, r.sub(P, r.dot(_, i.qrSolve(S, P, {regularize: !0}))))
          } else
            I = r.dot(T, M), C = r.dot(T, P);
          for (var O = v, A = !1; b < h && !w && !A;) {
            b += 1;
            var L = r.add(C, r.diag(a(x, g.length)));
            O = l(v, r.neg(r.solve(L, I, !0)), m), w = r.all(r.eq(O, v));
            var N = void 0;
            if (f) {
              var _ = r.transpose(u(y, O)), S = i.qr(_);
              N = {Jv: _, F: S};
              var q = s(e, O), E = r.neg(i.qrSolve(S, q, {regularize: !0}));
              O = l(O, E, d)
            }
            var F = o(e, O);
            A = F < D,
            A ? (v = O, D = F, f = N, x *= .1) :
                (x = Math.max(x, 1e-64), x *= 2)
          }
        }
        return {
          solution: v, MSE: D
        }
      }
      function h(e, t, r, n) {
        if (!t) return e;
        if ('known' !== t.type) return e;
        var i = t.bounds;
        return i[0] === -1 / 0 && i[1] === 1 / 0 ? e :
            i[0] === -1 / 0                      ? i[1] - Math.exp(-e) :
            i[1] === 1 / 0                       ? i[0] + Math.exp(e) :
                             r / (n - 1) * i[1] + (n - 1 - r) / (n - 1) * i[0]
      }
      function d(e, t) {
        for (var r = [], n = 0; n < e.length; n++) {
          for (var i = e[n], a = [], o = 0; o < i.length; o++) {
            var s = x[o % x.length] * n % e.length;
            a.push(h(i[o], t[o], s, e.length))
          }
          r.push(a)
        }
        return r
      }
      function m(e, t, r) {
        r || (r = {});
        var i = r.linearSubset, a = r.bounds, o = r.preferredInitialGuess,
            s = v(t.length);
        a && (s = d(s, a));
        var u = b(e, t, s, 5, {maxIterations: 3, linearSubset: i}),
            c = b(e, t, u, 1, {maxIterations: 60, linearSubset: i}),
            l = f(e, t, c[0], {maxIterations: 250, linearSubset: i});
        if (!o) return l;
        var p = f(e, t, o, {maxIterations: 100, linearSubset: i});
        return isFinite(p.MSE) ? p.MSE < l.MSE ? p :
                n.approx(p.MSE, l.MSE, 8)      ? p :
                                                 l :
                                 l
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.evaluateMeanSquare = o, t.optimizeLinear = p;
      var y =
              [
                18.9, .105,  .0113, .089, 4.414, .373,  .06,  .149,
                1.84, 9.26,  5,     .7,   .2,    1.13,  2.61, 1,
                .007, 30,    120,   1500, 4e-4,  7.23,  -1,   -.0081,
                -.03, -28.6, -1.71, -.4,  -6.94, -.777, -500
              ],
          g = function(e) {
            return y[503 * e % y.length]
          }, v = function(e) {
            for (var t = [], r = 0; r < y.length; r++) {
              for (var n = [], i = 0; i < e; i++)
                n[i] = 0 === r && 1 !== e ? 0 :
                    1 === r && 1 !== e    ? 1 :
                                            g(r * e + i);
              t.push(n)
            }
            return t
          }, b = function(e, t, r, n, i) {
            for (var a = [], o = 0, s = r; o < s.length; o++) {
              var u = s[o];
              a.push({soln: f(e, t, u, i), initialGuess: u})
            }
            a.sort(function(e, t) {
              return isNaN(e.soln.MSE) ? 1 :
                  isNaN(t.soln.MSE)    ? -1 :
                                         e.soln.MSE - t.soln.MSE
            });
            for (var c = [], l = 0; l < n; l++) c.push(a[l].initialGuess);
            return c
          }, x = [3, 5, 7, 11, 13, 17, 19];
      t.optimizeNonLinear = m,
      t.testOnlyExports = {generateInitialGuesses: v, mapInitialGuesses: d}
    });
define(
    'core/math/parsenode/regression',
    [
      'require', 'pjs', './base', 'core/math/distance', 'core/math/builtin',
      'core/lib/label', 'core/math/errormsg', './error',
      './optimizedregression', './list', './functioncall', './identifier',
      './constant', './freevariable', './expressionTypes', 'core/math/types',
      'core/math/least-squares'
    ],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./base'), n = e('core/math/distance'),
          i = e('core/math/builtin'), a = e('core/lib/label'),
          o = e('core/math/errormsg'), s = e('./error'),
          u = e('./optimizedregression'), c = e('./list'),
          l = e('./functioncall'), p = e('./identifier'), f = e('./constant'),
          h = e('./freevariable'), d = e('./expressionTypes'),
          m = e('core/math/types'), y = e('core/math/least-squares'),
          g = y.optimizeLinear, v = y.optimizeNonLinear,
          b = y.evaluateMeanSquare, x = d.Subtract;
      return t(r, function(e, t, r) {
        function d(e, t) {
          for (var r = [], n = 0; n < e.length; n++)
            r.push(t.boundDomain(e[n]));
          return r
        }
        function y(e, t, r) {
          var n = [];
          t || (t = {}), r || (r = {});
          for (var i = 0; i < e.length; i++) {
            var o = e[i], s = a.identifierToLatex(o);
            r[o] && isFinite(r[o].asValue()) ? n.push(+r[o].asValue()) :
                t.hasOwnProperty(s) && isFinite(t[s]) ? n.push(+t[s]) :
                                                        n.push(1)
          }
          return n
        }
        function _(e, t, r, n) {
          var i, a, s = t.getDependencies();
          for (a = 0; a < s.length; a++)
            if (!e.validRegressionParameter(s[a]))
              throw o.invalidRegressionParameter(s[a]);
          var u = t.getCompiledFunction(s).fn;
          if (s.length) {
            var c = t.findLinearSubset(s), l = c.every(function(e) {
              return e
            }),
                p = [];
            for (a = 0; a < s.length; a++)
              p.push(t.takeDerivative(s[a]).getCompiledFunction(s).fn);
            i = l ? g(u, p) : v(u, p, {
              linearSubset: c,
              bounds: d(s, t),
              preferredInitialGuess: y(s, r, n)
            })
          } else
            i = {solution: [], MSE: b(u, [])};
          var h = {};
          for (a = 0; a < s.length; a++) h[s[a]] = f(i.solution[a]);
          return h
        }
        function S(e, t) {
          return g(
              function(r, n) {
                for (var i = [], a = 0; a < e.length; a++)
                  i.push(t[a] - (r * e[a] + n));
                return i
              },
              [
                function() {
                  return e.map(function(e) {
                    return -e
                  })
                },
                function() {
                  return e.map(function() {
                    return -1
                  })
                }
              ],
              [0, 0])
        }
        function M(e, t) {
          var r = e.length, i = e[0], a = t[0], o = e[r - 1], s = t[r - 1];
          if (!(isFinite(i) && isFinite(o) && isFinite(a) && isFinite(s)))
            return !1;
          if (s - a == 0) return !1;
          var u = o - i;
          if (0 === u) return !1;
          for (var c = 1; c < r - 1; c++) {
            var l = e[c], p = t[c], f = (s * (l - i) + a * (o - l)) / u;
            if (!n.approx(p, f, 5)) return !1
          }
          return !0
        }
        function E(e, t, r, n) {
          var i = Object.create(r);
          for (var a in n) n.hasOwnProperty(a) && (i[a] = n[a]);
          return c.wrap(t.getConcreteTree(e, i))
        }
        e.init = function(e, r) {
          t.init.call(this),
              this._lhs = e,
              this.isLhsSimple = e instanceof p || e instanceof c,
              this._logLhs = l('ln', [e]), this._rhs = r,
              this._difference = x([e, r]),
              this._logDifference = x([l('ln', [e]), l('ln', [r])]),
              this.mergeDependencies(e, r)
        }, e.isRegression = !0, e.chooseResidualVariable = function(e) {
          if (this.userData && this.userData.residualVariable) {
            var t = a.latexToIdentifier(this.userData.residualVariable);
            if (!e[t]) return t
          }
          for (var r, n = this.getDependencies(), i = 0; i < n.length; i++) {
            var o = n[i].match(/_(.*)/);
            if (o && (r = 'e_' + o[1], !e[r])) return r
          }
          for (var s = 1;;) {
            if (r = 'e_' + s, !e[r]) return r;
            s++
          }
        }, e.getRHSModel = function(e, t, r) {
          function n(e, t, r) {
            for (var n = 0; n < i.length; n++)
              if (i[n].node === this) return i[n].tmpVar;
            var o = h(this.tmpVar()), s = this.getConcreteTree(e, t);
            return s.getDependencies().length && (a = !1),
                   i.push(
                       {node: this, tmpVar: o, symbol: o._symbol, concrete: s}),
                   o
          }
          var i = [], a = !0, o = {List: n, TableColumn: n, Range: n},
              s = this._rhs.tryGetConcreteTree(e, t, o);
          return {
            node: s, substituted: s.isError ? s : s.substitute(r),
                replacedNodes: i, isValid: a
          }
        }, e.computeStatistics = function(e, t, r, a, s, u) {
          if (a.getDependencies().length) throw o.optimizationError();
          var l = 0;
          a.eachElement(e, function(e) {
            var t = e.asValue();
            l += t * t
          });
          var p = l / a.length;
          if (!isFinite(p)) throw o.optimizationError();
          if (t.getDependencies().length > 0) return {RMSE: Math.sqrt(p)};
          var f = m.isList(t.valueType) ? i.varp(t.asValue()) : 0;
          if (t.getDependencies().length || !isFinite(f) || f <= 0 ||
              !this.isLhsSimple)
            return {RMSE: Math.sqrt(p)};
          var h = 1 - p / f;
          if (r.isValid && 1 === r.replacedNodes.length) {
            var d = [], y = [], g = s && (u === w.LINLOG || u === w.LOGLOG);
            c.eachArgs(e, [r.replacedNodes[0].concrete, t], function(e) {
              d.push(g ? Math.log(e[0].asValue()) : +e[0].asValue()),
                  y.push(+e[1].asValue())
            });
            var v = i.corr(d, y);
            if (n.approx(S(d, y).MSE, p, 8)) return {
                r: v, rsquared: v * v
              }
          }
          return {
            Rsquared: h
          }
        }, e.getResidualSuggestionId = function(e, t) {
          var r, n = this._rhs.getDependencies();
          for (var i in t)
            if (t.hasOwnProperty(i) && t[i].concreteTree.isTable &&
                t[i].concreteTree.columns[0]) {
              var a = t[i].rawTree.columns;
              if (a && a.length) {
                var o = a[0].getExports();
                if (1 === o.length && -1 !== n.indexOf(o[0])) {
                  for (var s = 1; s < a.length; s++)
                    if (-1 !== a[s].getDependencies().indexOf(e)) return;
                  r = r || i
                }
              }
            }
          return r || void 0
        };
        var w = {NONE: 0, LOGLIN: 1, LOGLOG: 2, LINLOG: 3};
        e.linearizingTransformation = function(e, t, r) {
          if (!this.isLhsSimple) return w.NONE;
          var n = r.substituted;
          if (n.isError) return w.NONE;
          if (n.valueType !== m.Number) return w.NONE;
          var i = n.getDependencies();
          if (1 !== i.length) return w.NONE;
          if (isFinite(r.node.polynomialOrder(i[0]))) return w.NONE;
          var a = n.getCompiledFunction(i).fn, o = r.replacedNodes[0].concrete;
          if (n.valueType !== m.Number) return w.NONE;
          var s = o.mapElements(e, function(e) {
            return +e.asValue()
          });
          if (s.length < 3) return w.NONE;
          s.sort(function(e, t) {
            return e - t
          });
          var u = s.map(a), l = u.map(Math.log), p = s.map(Math.log), f = !0;
          return c.wrap(t).eachElement(
                     e,
                     function(e) {
                       isFinite(Math.log(+e.asValue())) || (f = !1)
                     }),
                 M(s, l) && f     ? w.LOGLIN :
                     M(p, l) && f ? w.LOGLOG :
                     M(p, u)      ? w.LINLOG :
                                    w.NONE
        }, e.optimize = function(e, t, r, n, i) {
          var o = this._lhs.getConcreteTree(e, t),
              s = this._rhs.getConcreteTree(e, t);
          this.typeCheck(e, [o, s]);
          var l = c.wrap(this._difference.getConcreteTree(e, t));
          l = l.deriveRegressionRestrictions();
          var p, f = _(e, l, this.userData.regressionParameters, n),
                 h = this.getRHSModel(e, t, f),
                 d = E(e, this._difference, t, f),
                 m = this.linearizingTransformation(e, o, h);
          if (!this.userData.isLogModeRegression ||
              m !== w.LOGLIN && m !== w.LOGLOG)
            p = this.computeStatistics(
                e, o, h, d, this.userData.isLogModeRegression, m);
          else {
            var y = this._logDifference.getConcreteTree(e, t),
                g = this._logLhs.getConcreteTree(e, t);
            f = _(e, y, this.userData.regressionParamters, n),
            h = this.getRHSModel(e, t, f), d = E(e, this._difference, t, f);
            var v = E(e, this._logDifference, t, f);
            p = this.computeStatistics(
                e, g, h, v, this.userData.isLogModeRegression, m)
          }
          var b = this.chooseResidualVariable(r),
              x = this.getResidualSuggestionId(b, i);
          return this.userData.residualVariable = a.identifierToLatex(b),
                 u(f, d, p, h.substituted, {
                   isModelValid: h.isValid,
                   residualVariable: b,
                   residualSuggestionId: x,
                   shouldSuggestLogMode: m !== w.NONE
                 })
        }, e.tryOptimize = function() {
          try {
            return this.optimize.apply(this, arguments)
          } catch (e) {
            return e instanceof s ? e : o.parseError()
          }
        }, e.exportTo = function(e, t, r) {
          if (!t.isError) {
            for (var n in t.parameters)
              t.parameters.hasOwnProperty(n) &&
                  (e.assignmentForbidden(n) ||
                   (r[n] = r[n] ? o.multiplyDefined(n) : t.parameters[n]));
            e.assignmentForbidden(t.residualVariable) ||
                (r[t.residualVariable] = t.residuals)
          }
        }, e.getSliderVariables = function() {
          return []
        }
      })
    });
define('core/math/parsenode/image', ['require', 'pjs', './base'], function(e) {
  'use strict';
  return e('pjs')(e('./base'), function(e, t, r, n) {
    e.isImage = !0, e.init = function(e, r) {
      t.init.call(this),
          this.center = e.center, this.radianAngle = e.radianAngle,
          this.width = e.width, this.height = e.height,
          this.opacity = e.opacity, this.moveStrategy = r,
          this.mergeDependencies(
              this.center, this.radianAngle, this.width, this.height,
              this.opacity)
    }
  })
});
define(
    'core/math/parsenode/slider',
    ['require', 'pjs', './assignment', './identifier'], function(e) {
      'use strict';
      var t = e('pjs'), r = e('./assignment'), n = e('./identifier');
      return t(r, function(e, t, i, a) {
        e.isSlider = !0, e.init = function(e, r) {
          t.init.call(this, n(e._symbol), e._expression),
              this.setInputSpan(e._inputSpan),
              this.sliderAssignment = e, this.sliderMin = r.sliderMin,
              this.sliderMax = r.sliderMax, this.sliderStep = r.sliderStep,
              this.sliderMin && this.mergeDependencies(this.sliderMin),
              this.sliderMax && this.mergeDependencies(this.sliderMax),
              this.sliderStep && this.mergeDependencies(this.sliderStep)
        }, e.shouldPromoteToSlider = function(e) {
          return !1
        }, e.asAssignment = function() {
          return r(this._symbol, this._expression)
        }
      })
    });
define('core/math/parsenode/table', ['require', 'pjs', './base'], function(e) {
  'use strict';
  return e('pjs')(e('./base'), function(e, t) {
    e.init = function(e) {
      t.init.call(this), this.columns = e, this._exports = [],
                         this.mergeDependencies.apply(this, e);
      for (var r = 0; r < e.length; r++)
        Array.prototype.push.apply(this._exports, e[r].getExports())
    }, e.exportPenalty = 1, e.isTable = !0, e.exportTo = function(e, t, r) {
      for (var n = 0; n < this.columns.length; n++) {
        var i = this.columns[n].getExports();
        if (i.length) {
          var a = i[0];
          e.assignmentForbidden(a) || r[a] ||
              (t.isError ? r[a] = t :
                           this.columns[n].exportTo(e, t.columns[n], r))
        }
      }
    }, e.getAllIds = function() {
      return this.columns.map(function(e) {
        return e.header.userData.id
      })
    }
  })
});
define(
    'core/math/parsenode/tablecolumn',
    ['require', 'pjs', './base', './list', './constant', './identifier'],
    function(e) {
      'use strict';
      var t = e('pjs'), r = e('./base'), n = e('./list'), i = e('./constant'),
          a = e('./identifier');
      return t(r, function(e, t) {
        function o(e) {
          return e.isError ? i(NaN) : e
        }
        e.init = function(e, r, n) {
          t.init.call(this), this.header = e, this.length = r, this.values = n,
                             this.isIndependent = !1,
                             this.registerDependencies(),
                             this._exports = this.computeExports()
        }, e.registerDependencies = function() {
          this.mergeDependencies(this.header),
              this.mergeDependencies.apply(this, this.values)
        }, e.computeExports = function() {
          return this.header instanceof a ? [this.header._symbol] : []
        }, e.isDiscrete = function(e) {
          return 1 !== this.header.getDependencies().length ||
              1 !== e.header.getDependencies().length ||
              this.header.getDependencies()[0] !== e.header.getDependencies()[0]
        }, e._exportSymbolsTo = function(e, t, i) {
          if (e.length) {
            var a = e[0];
            if (t.isError)
              i[a] = t;
            else
              try {
                i[a] = n(t.values.map(o))
              } catch (e) {
                if (!(e instanceof r)) throw e;
                i[a] = e
              }
          }
        }, e.exportTo = function(e, t, r) {
          var n = this.getLegalExports(e);
          this._exportSymbolsTo(n, t, r)
        }, e.exportToLocal = function(e, t) {
          this._exportSymbolsTo(this.getExports(), e, t)
        }
      })
    });
define(
    'core/math/parsenode/solvedequation', ['require', 'pjs', './base'],
    function(e) {
      'use strict';
      return e('pjs')(e('./base'), function(e, t) {
        e.init = function(e, r) {
          t.init.call(this), this._symbol = e, this._expression = r,
                             this.mergeDependencies(r)
        }, e.getCompiledFunction = function() {
          return this._expression.getCompiledFunction.apply(
              this._expression, arguments)
        }, e.getCompiledDerivative = function() {
          return this._expression.getCompiledDerivative.apply(
              this._expression, arguments)
        }, e.evaluate = function() {
          return this._expression.evaluate.apply(this._expression, arguments)
        }
      })
    });
define(
    'core/math/parsenode/seed', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e) {
          'string' != typeof e && (e = '' + e), this._stringValue = e,
                                                t.init.call(this, [])
        }, e.isString = !0, e.getEvalStrings = function() {
          return {
            statements: [], expression: '\'' + this.asValue() + '\''
          }
        }, e.asValue = function() {
          return this._stringValue
        }
      })
    });
define(
    'core/math/parsenode/extendseed', ['require', 'pjs', './expression'],
    function(e) {
      'use strict';
      return e('pjs')(e('./expression'), function(e, t) {
        e.init = function(e, r) {
          t.init.call(this, r), this.seed = r[0], this.userSeed = r[1],
                                this.tag = e
        }, e.getEvalStrings = function() {
          var e = this.seed.getEvalStrings(),
              t = this.userSeed.getEvalStrings(), r = [];
          return Array.prototype.push.apply(r, e.statements),
                 Array.prototype.push.apply(r, t.statements), {
            statements: r,
                expression: '(' + e.expression + ') + \'::' + this.tag +
                '\' + (' + t.expression + ')'
          }
        }, e.copyWithArgs = function(e) {
          return new this.constructor(this.tag, e)
        }
      })
    });
define(
    'parsenodes',
    [
      'require',
      'core/math/parsenode/expressionTypes',
      'core/math/parsenode/base',
      'core/math/parsenode/expression',
      'core/math/parsenode/scalarexpression',
      'core/math/parsenode/error',
      'core/math/parsenode/constant',
      'core/math/parsenode/mixednumber',
      'core/math/parsenode/identifier',
      'core/math/parsenode/ans',
      'core/math/parsenode/freevariable',
      'core/math/parsenode/dummyindex',
      'core/math/parsenode/list',
      'core/math/parsenode/range',
      'core/math/parsenode/broadcast',
      'core/math/parsenode/listaccess',
      'core/math/parsenode/dotaccess',
      'core/math/parsenode/dotaccessexponent',
      'core/math/parsenode/orderedpair',
      'core/math/parsenode/movablepoint',
      'core/math/parsenode/orderedpairaccess',
      'core/math/parsenode/polygon',
      'core/math/parsenode/basecomparator',
      'core/math/parsenode/comparator',
      'core/math/parsenode/doubleinequality',
      'core/math/parsenode/repeatedoperator',
      'core/math/parsenode/sum',
      'core/math/parsenode/product',
      'core/math/parsenode/integral',
      'core/math/parsenode/functioncall',
      'core/math/parsenode/seededfunctioncall',
      'core/math/parsenode/functionexponent',
      'core/math/parsenode/functionfactorial',
      'core/math/parsenode/prime',
      'core/math/parsenode/piecewise',
      'core/math/parsenode/derivative',
      'core/math/parsenode/builtinfunction',
      'core/math/parsenode/nativefunction',
      'core/math/parsenode/typedfunction',
      'core/math/parsenode/reducerfunction',
      'core/math/parsenode/parametrizedreducerfunction',
      'core/math/parsenode/doublereducerfunction',
      'core/math/parsenode/toplevelfunction',
      'core/math/parsenode/distribution',
      'core/math/parsenode/histogram',
      'core/math/parsenode/object3d',
      'core/math/parsenode/dotplot',
      'core/math/parsenode/boxplot',
      'core/math/parsenode/ttest',
      'core/math/parsenode/independent-ttest',
      'core/math/parsenode/stats',
      'core/math/parsenode/assignment',
      'core/math/parsenode/functiondefinition',
      'core/math/parsenode/equation',
      'core/math/parsenode/regression',
      'core/math/parsenode/image',
      'core/math/parsenode/slider',
      'core/math/parsenode/table',
      'core/math/parsenode/tablecolumn',
      'core/math/parsenode/solvedequation',
      'core/math/parsenode/optimizedregression',
      'core/math/parsenode/seed',
      'core/math/parsenode/extendseed'
    ],
    function(e) {
      'use strict';
      var t = e('core/math/parsenode/expressionTypes'), r = {
        Base: e('core/math/parsenode/base'),
        Expression: e('core/math/parsenode/expression'),
        ScalarExpression: e('core/math/parsenode/scalarexpression'),
        Error: e('core/math/parsenode/error'),
        Constant: e('core/math/parsenode/constant'),
        MixedNumber: e('core/math/parsenode/mixednumber'),
        Identifier: e('core/math/parsenode/identifier'),
        Ans: e('core/math/parsenode/ans'),
        FreeVariable: e('core/math/parsenode/freevariable'),
        DummyIndex: e('core/math/parsenode/dummyindex'),
        List: e('core/math/parsenode/list'),
        Range: e('core/math/parsenode/range'),
        Broadcast: e('core/math/parsenode/broadcast'),
        ListAccess: e('core/math/parsenode/listaccess'),
        DotAccess: e('core/math/parsenode/dotaccess'),
        DotAccessExponent: e('core/math/parsenode/dotaccessexponent'),
        OrderedPair: e('core/math/parsenode/orderedpair'),
        MovablePoint: e('core/math/parsenode/movablepoint'),
        OrderedPairAccess: e('core/math/parsenode/orderedpairaccess'),
        Polygon: e('core/math/parsenode/polygon'),
        BaseComparator: e('core/math/parsenode/basecomparator'),
        Comparator: e('core/math/parsenode/comparator'),
        DoubleInequality: e('core/math/parsenode/doubleinequality'),
        RepeatedOperator: e('core/math/parsenode/repeatedoperator'),
        Sum: e('core/math/parsenode/sum'),
        Product: e('core/math/parsenode/product'),
        Integral: e('core/math/parsenode/integral'),
        FunctionCall: e('core/math/parsenode/functioncall'),
        SeededFunctionCall: e('core/math/parsenode/seededfunctioncall'),
        FunctionExponent: e('core/math/parsenode/functionexponent'),
        FunctionFactorial: e('core/math/parsenode/functionfactorial'),
        Prime: e('core/math/parsenode/prime'),
        Piecewise: e('core/math/parsenode/piecewise'),
        Derivative: e('core/math/parsenode/derivative'),
        BuiltInFunction: e('core/math/parsenode/builtinfunction'),
        NativeFunction: e('core/math/parsenode/nativefunction'),
        TypedFunction: e('core/math/parsenode/typedfunction'),
        ReducerFunction: e('core/math/parsenode/reducerfunction'),
        ParametrizedReducerFunction:
            e('core/math/parsenode/parametrizedreducerfunction'),
        DoubleReducerFunction: e('core/math/parsenode/doublereducerfunction'),
        TopLevelFunction: e('core/math/parsenode/toplevelfunction'),
        Distribution: e('core/math/parsenode/distribution'),
        Histogram: e('core/math/parsenode/histogram'),
        Object3D: e('core/math/parsenode/object3d'),
        DotPlot: e('core/math/parsenode/dotplot'),
        BoxPlot: e('core/math/parsenode/boxplot'),
        TTest: e('core/math/parsenode/ttest'),
        IndependentTTest: e('core/math/parsenode/independent-ttest'),
        Stats: e('core/math/parsenode/stats'),
        Assignment: e('core/math/parsenode/assignment'),
        FunctionDefinition: e('core/math/parsenode/functiondefinition'),
        Equation: e('core/math/parsenode/equation'),
        Regression: e('core/math/parsenode/regression'),
        Image: e('core/math/parsenode/image'),
        Slider: e('core/math/parsenode/slider'),
        Table: e('core/math/parsenode/table'),
        TableColumn: e('core/math/parsenode/tablecolumn'),
        SolvedEquation: e('core/math/parsenode/solvedequation'),
        OptimizedRegression: e('core/math/parsenode/optimizedregression'),
        Seed: e('core/math/parsenode/seed'),
        ExtendSeed: e('core/math/parsenode/extendseed')
      };
      for (var n in t) r[n] = t[n];
      for (var i in r)
        r.hasOwnProperty(i) && 'Comparator' !== i && 'BuiltInFunction' !== i &&
            (r[i].prototype.type = i);
      for (var a in r.Comparator)
        r.Comparator.hasOwnProperty(a) &&
            (r.Comparator[a].prototype.type = 'Comparator[\'' + a + '\']');
      for (var o in r.BuiltInFunction)
        r.BuiltInFunction.hasOwnProperty(o) &&
            (r.BuiltInFunction[o].prototype.type =
                 'BuiltInFunction[\'' + o + '\']');
      return r
    });
define('core/math/parser/char-codes', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e) {
    return 48 <= e && e <= 57
  }
  function n(e) {
    return 97 <= e && e <= 122
  }
  function i(e) {
    return 65 <= e && e <= 90
  }
  function a(e) {
    return n(e) || i(e)
  }
  function o(e) {
    return 92 === e
  }
  function s(e) {
    return 46 === e
  }
  function u(e) {
    return 39 === e
  }
  function c(e) {
    if (9 <= e && e <= 13) return !0;
    if (8192 <= e && e <= 8202) return !0;
    switch (e) {
      case 32:
      case 160:
      case 5760:
      case 8232:
      case 8233:
      case 8239:
      case 8287:
      case 12288:
      case 65279:
        return !0;
      default:
        return !1
    }
  }
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.isDigit = r, t.isLowerCaseLetter = n, t.isUpperCaseLetter = i,
      t.isLetter = a, t.isBackslash = o, t.isDot = s, t.isSingleQuote = u,
      t.isWhitespace = c
});
define(
    'core/math/parser/latex-lexer',
    ['require', 'exports', './char-codes', './input-span'],
    function(e, t, r, n) {
      'use strict';
      function i(e, t) {
        return n.joinSpans(e.token.span, t.prevSpan)
      }
      function a(e, t, r) {
        return {
          type: e, span: t, val: r
        }
      }
      function o(e, t, r, n) {
        return {
          input: e, prevSpan: t, pos: r, token: n
        }
      }
      function s(e) {
        return u(e, 0, n.emptySpanAt(e, 0))
      }
      function u(e, t, n) {
        for (; r.isWhitespace(e.charCodeAt(t));) t += 1;
        return o(e, n, t, d(e, t))
      }
      function c(e) {
        return u(e.input, e.token.span.end, e.token.span)
      }
      function l(e) {
        return e.token
      }
      function p(e, t) {
        if (l(e).type !== t) throw 'Parse Error: expected ' + t + '.';
        return c(e)
      }
      function f(e, t) {
        return l(e).type === t
      }
      function h(e) {
        return e.pos >= e.input.length
      }
      function d(e, t) {
        var i = t;
        if (t >= e.length) return a('End', n.emptySpanAt(e, t), '');
        var o = e.charCodeAt(t);
        if (r.isDigit(o)) {
          var s = n.Span(e, i, t + 1);
          return a('Digit', s, e.charAt(i))
        }
        if (r.isLetter(o)) {
          var s = n.Span(e, i, t + 1);
          return a('Letter', s, e.charAt(i))
        }
        if (r.isBackslash(o)) {
          if (t += 1, r.isLetter(e.charCodeAt(t))) {
            for (; r.isLetter(e.charCodeAt(t));) t += 1;
            var s = n.Span(e, i, t), u = n.slice(s), c = m[u] || 'Cmd';
            return a(c, s, u)
          }
          t += 1;
          var s = n.Span(e, i, t), u = n.slice(s);
          return a('EscapedSymbol', s, u)
        }
        if (r.isSingleQuote(o)) {
          for (t += 1; r.isSingleQuote(e.charCodeAt(t));) t += 1;
          if ('^' === e.charAt(t)) {
            t += 1;
            var s = n.Span(e, i, t), u = n.slice(s);
            return a('Primes^', s, u)
          }
          var s = n.Span(e, i, t), u = n.slice(s);
          return a('Primes', s, u)
        }
        var s = n.Span(e, i, t + 1), u = e.charAt(i), c = y[u] || 'Symbol';
        return a(c, s, u)
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.spanStates = i, t.LatexToken = a, t.lex = s, t.advance = c,
          t.peek = l, t.eat = p, t.isAt = f, t.isDone = h;
      var m = {
        '\\left': 'Left',
        '\\right': 'Right',
        '\\sqrt': 'Sqrt',
        '\\frac': 'Frac',
        '\\operatorname': 'OperatorName'
      },
          y = {'[': '[', ']': ']', '{': '{', '}': '}', '^': '^', _: '_'}
    });
define('core/math/parser/latex-node', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e, t) {
    return {
      type: 'Group', span: e, args: t
    }
  }
  function n(e, t, r) {
    return {
      type: 'Sqrt', span: e, optArg: t, arg: r
    }
  }
  function i(e, t, r) {
    return {
      type: 'Frac', span: e, num: t, den: r
    }
  }
  function a(e, t, r, n) {
    return {
      type: 'SupSub', span: e, sup: t, sub: r, nprimes: n
    }
  }
  function o(e, t, r, n) {
    return {
      type: 'LeftRight', span: e, left: t, right: r, arg: n
    }
  }
  function s(e, t) {
    return {
      type: 'OperatorName', span: e, arg: t
    }
  }
  function u(e, t) {
    return {
      type: 'Symbol', span: e, val: t
    }
  }
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.Group = r, t.Sqrt = n, t.Frac = i, t.SupSub = a, t.LeftRight = o,
      t.OperatorName = s, t.Symbol = u
});
define(
    'core/math/parser/latex-parser',
    ['require', 'exports', './latex-lexer', './input-span', './latex-node'],
    function(e, t, r, n, i) {
      'use strict';
      function a(e) {
        switch (e) {
          case 'Frac':
            return 2;
          case '^':
          case '_':
          case 'Primes^':
          case 'Left':
          case 'Frac':
          case 'Sqrt':
          case 'OperatorName':
            return 1;
          default:
            return 0
        }
      }
      function o(e) {
        var t = u(r.lex(e), !1), i = t.state, a = t.tree;
        if (!r.isDone(i))
          throw 'Parse error: unexpected ' + n.slice(r.peek(i).span) + '.';
        return a
      }
      function s(e, t) {
        return {
          state: e, tree: t
        }
      }
      function u(e, t) {
        var n, a = e, o = [];
        e: for (; !r.isDone(e);) {
          var u = r.peek(e);
          switch (u.type) {
            case 'Cmd':
            case 'EscapedSymbol':
            case 'Letter':
            case 'Digit':
            case 'Symbol':
            case '[':
            case '{':
            case '^':
            case '_':
            case 'Primes':
            case 'Primes^':
            case 'Left':
            case 'Frac':
            case 'Sqrt':
            case 'OperatorName':
            case ']':
              if (']' === u.type && t) break e;
              var l = void 0;
              if (n = c(e), e = n.state, l = n.tree, 'Group' === l.type)
                for (var p = 0, f = l.args; p < f.length; p++) {
                  var h = f[p];
                  o.push(h)
                }
              else
                o.push(l);
              break;
            case '}':
            case 'Right':
            case 'End':
              break e;
            default:
              var d = u.type;
              throw 'Unexpected token type ' + d + '.'
          }
        }
        var m = r.spanStates(a, e);
        return s(e, i.Group(m, o))
      }
      function c(e) {
        var t, n = r.peek(e);
        switch (n.type) {
          case 'Cmd':
          case 'EscapedSymbol':
          case 'Letter':
          case 'Digit':
          case 'Symbol':
            return e = r.advance(e), s(e, n);
          case '[':
          case ']':
            return e = r.advance(e), s(e, i.Symbol(n.span, n.val));
          case '{':
            e = r.advance(e);
            var a = void 0;
            return t = u(e, !1), e = t.state, a = t.tree, e = r.eat(e, '}'),
                   s(e, a);
          case '^':
          case '_':
          case 'Primes':
          case 'Primes^':
            return d(e);
          case 'Left':
            return h(e);
          case 'Frac':
            return f(e);
          case 'Sqrt':
            return p(e);
          case 'OperatorName':
            return l(e);
          case '}':
          case 'Right':
            throw 'Parse Error: unexpected ' + n.val + '.';
          case 'End':
            throw 'Parse Error: unexpected end.';
          default:
            throw 'Unexpected token type ' + n.type + '.'
        }
      }
      function l(e) {
        var t, n = e, a = r.peek(e);
        e = r.eat(e, 'OperatorName');
        var o;
        t = m(e, a), e = t.state, o = t.tree;
        var u = r.spanStates(n, e);
        return s(e, i.OperatorName(u, o))
      }
      function p(e) {
        var t, n, a = e, o = r.peek(e);
        e = r.eat(e, 'Sqrt');
        var u;
        r.isAt(e, '[') && (t = y(e), e = t.state, u = t.tree);
        var c;
        n = m(e, o), e = n.state, c = n.tree;
        var l = r.spanStates(a, e);
        return s(e, i.Sqrt(l, u, c))
      }
      function f(e) {
        var t, n, a = e, o = r.peek(e);
        e = r.eat(e, 'Frac');
        var u;
        t = m(e, o), e = t.state, u = t.tree;
        var c;
        n = m(e, o), e = n.state, c = n.tree;
        var l = r.spanStates(a, e);
        return s(e, i.Frac(l, u, c))
      }
      function h(e) {
        var t, n = e;
        e = r.eat(e, 'Left');
        var a = r.peek(e);
        e = r.advance(e);
        var o;
        t = u(e, !1), e = t.state, o = t.tree, e = r.eat(e, 'Right');
        var c = r.peek(e);
        e = r.advance(e);
        var l = r.spanStates(n, e);
        return s(e, i.LeftRight(l, a, c, o))
      }
      function d(e) {
        var t, n, a, o, u, c = e, l = 0;
        e: for (; !r.isDone(e);) {
          var p = r.peek(e);
          switch (p.type) {
            case '^':
              if (e = r.advance(e), o) throw 'Parse Error: double superscript.';
              t = m(e, p), e = t.state, o = t.tree;
              break;
            case '_':
              if (e = r.advance(e), u) throw 'Parse Error: double subscript.';
              n = m(e, p), e = n.state, u = n.tree;
              break;
            case 'Primes':
              if (e = r.advance(e), l > 0) throw 'Parse Error: double primes.';
              l = p.val.length;
              break;
            case 'Primes^':
              if (e = r.advance(e), l > 0) throw 'Parse Error: double primes.';
              if (o) throw 'Parse Error: double superscript';
              l = p.val.length - 1, a = m(e, p), e = a.state, o = a.tree;
              break;
            default:
              break e
          }
        }
        var f = r.spanStates(c, e);
        return s(e, i.SupSub(f, o, u, l))
      }
      function m(e, t) {
        var o, u, l = a(t.type);
        if (l <= 0)
          throw new Error(
              'Programming Error: greediness must be greater than 0.');
        var p = a(r.peek(e).type);
        if (p > 0 && p <= l) {
          var f = n.slice(t.span);
          throw 'Parse Error: can\'t use ' + n.slice(r.peek(e).span) +
              ' as argument of ' + f + '. Use {}.'
        }
        return o = c(e), e = o.state, u = o.tree,
               'Group' !== u.type && (u = i.Group(u.span, [u])), s(e, u)
      }
      function y(e) {
        var t;
        e = r.eat(e, '[');
        var n;
        return t = u(e, !0), e = t.state, n = t.tree, e = r.eat(e, ']'), s(e, n)
      }
      Object.defineProperty(t, '__esModule', {value: !0}), t.parse = o
    });
define(
    'core/math/parser/command-aliases', ['require', 'exports', './char-codes'],
    function(e, t, r) {
      'use strict';
      function n(e) {
        for (var t = 0; r.isBackslash(e.charCodeAt(t));) t += 1;
        return t > 0 && (e = e.slice(t)), i[e] || e
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var i = {
        mcd: 'gcd',
        gcf: 'gcd',
        mcm: 'lcm',
        signum: 'sign',
        stdDevP: 'stdevp',
        stddevp: 'stdevp',
        stdDev: 'stdev',
        stddev: 'stdev',
        variance: 'var',
        TTest: 'ttest',
        TScore: 'tscore',
        IndependentTTest: 'ittest',
        iTTest: 'ittest',
        inverseCdf: 'quantile',
        inversecdf: 'quantile'
      };
      t.translateCmd = n
    });
define(
    'core/math/parser/surface-node',
    ['require', 'exports', './command-aliases'], function(e, t, r) {
      'use strict';
      function n(e, t) {
        return {
          type: 'Equals', span: e, args: t
        }
      }
      function i(e, t, r) {
        return {
          type: 'Inequality', span: e, symbol: t, args: r
        }
      }
      function a(e, t, r) {
        return {
          type: 'TrailingInequalityPiece', span: e, symbol: t, args: r
        }
      }
      function o(e, t, r) {
        return {
          type: 'InequalityChain', span: e, first: t, chain: r
        }
      }
      function s(e, t) {
        return {
          type: 'Tilde', span: e, args: t
        }
      }
      function u(e, t) {
        return {
          type: 'Pos', span: e, args: t
        }
      }
      function c(e, t) {
        return {
          type: 'Neg', span: e, args: t
        }
      }
      function l(e, t) {
        return {
          type: 'Add', span: e, args: t
        }
      }
      function p(e, t) {
        return {
          type: 'Sub', span: e, args: t
        }
      }
      function f(e, t) {
        return {
          type: 'Mul', span: e, args: t
        }
      }
      function h(e, t) {
        return {
          type: 'Div', span: e, args: t
        }
      }
      function d(e, t) {
        return {
          type: 'Bang', span: e, args: t
        }
      }
      function m(e, t) {
        return {
          type: 'Call', span: e, args: t
        }
      }
      function y(e, t) {
        return {
          type: 'ImplicitCall', span: e, args: t
        }
      }
      function g(e, t) {
        return {
          type: 'Index', span: e, args: t
        }
      }
      function v(e, t) {
        return {
          type: 'Paren', span: e, args: t
        }
      }
      function b(e, t) {
        return {
          type: 'List', span: e, args: t
        }
      }
      function x(e, t) {
        return {
          type: 'Pipes', span: e, args: t
        }
      }
      function _(e, t) {
        return {
          type: 'Subscript', span: e, args: t
        }
      }
      function S(e, t) {
        return {
          type: 'Superscript', span: e, args: t
        }
      }
      function M(e, t, r) {
        return {
          type: 'Prime', span: e, nprimes: t, args: r
        }
      }
      function E(e, t) {
        return {
          type: 'Seq', span: e, args: t
        }
      }
      function w(e, t) {
        return {
          type: 'Sqrt', span: e, args: t
        }
      }
      function D(e, t) {
        return {
          type: 'Nthroot', span: e, args: t
        }
      }
      function T(e, t) {
        return {
          type: 'Frac', span: e, args: t
        }
      }
      function P(e, t) {
        return {
          type: 'Derivative', span: e, args: t
        }
      }
      function I(e, t) {
        return {
          type: 'Integral', span: e, args: t
        }
      }
      function C(e, t) {
        return {
          type: 'EmptyIntegral', span: e, args: t
        }
      }
      function O(e, t) {
        return {
          type: 'Sum', span: e, args: t
        }
      }
      function A(e, t) {
        return {
          type: 'Product', span: e, args: t
        }
      }
      function L(e, t) {
        return {
          type: 'Piecewise', span: e, args: t
        }
      }
      function N(e) {
        return {
          type: 'EmptyPiecewise', span: e
        }
      }
      function q(e, t) {
        return {
          type: 'Colon', span: e, args: t
        }
      }
      function F(e, t) {
        return {
          type: 'Ellipsis', span: e, args: t
        }
      }
      function R(e, t) {
        return {
          type: 'Dot', span: e, args: t
        }
      }
      function V(e, t) {
        return {
          type: 'PercentOf', span: e, args: t
        }
      }
      function k(e, t) {
        return {
          type: 'Juxt', span: e, args: t
        }
      }
      function B(e, t) {
        return {
          type: 'Letter', span: e, val: t
        }
      }
      function j(e, t) {
        return {
          type: 'Decimal', span: e, val: t
        }
      }
      function z(e, t) {
        return {
          type: 'Cmd', span: e, val: r.translateCmd(t)
        }
      }
      function G(e, t) {
        return {
          type: 'Alphanumeric', span: e, val: t
        }
      }
      function U(e, t, r, n) {
        return {
          type: 'MixedNumber', span: e, whole: t, num: r, den: n
        }
      }
      function W(e) {
        if ('Subscript' === e.type) {
          if ('Alphanumeric' !== e.args[1].type) return !1;
          e = e.args[0]
        }
        switch (e.type) {
          case 'Cmd':
          case 'Letter':
            return !0;
          default:
            return !1
        }
      }
      function Y(e) {
        return 'Superscript' === e.type && W(e.args[0])
      }
      function X(e, t) {
        if ('Letter' !== e.type || 'd' !== e.val) return !1;
        if ('Juxt' !== t.type) return !1;
        var r = t.args, n = r[0], i = r[1];
        return 'Letter' === n.type && 'd' === n.val && W(i)
      }
      function H(e) {
        return 'Seq' === e.type ? e.args : [e]
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.Equals = n, t.Inequality = i, t.TrailingInequalityPiece = a,
          t.InequalityChain = o, t.Tilde = s, t.Pos = u, t.Neg = c, t.Add = l,
          t.Sub = p, t.Mul = f, t.Div = h, t.Bang = d, t.Call = m,
          t.ImplicitCall = y, t.Index = g, t.Paren = v, t.List = b, t.Pipes = x,
          t.Subscript = _, t.Superscript = S, t.Prime = M, t.Seq = E,
          t.Sqrt = w, t.Nthroot = D, t.Frac = T, t.Derivative = P,
          t.Integral = I, t.EmptyIntegral = C, t.Sum = O, t.Product = A,
          t.Piecewise = L, t.EmptyPiecewise = N, t.Colon = q, t.Ellipsis = F,
          t.Dot = R, t.PercentOf = V, t.Juxt = k, t.Letter = B, t.Decimal = j,
          t.Cmd = z, t.Alphanumeric = G, t.MixedNumber = U, t.isIdentifier = W,
          t.isSuperscriptedIdentifier = Y, t.isDerivative = X, t.unwrapSeq = H
    });
define(
    'core/math/parser/surface-node-error', ['require', 'exports'],
    function(e, t) {
      'use strict';
      function r(e, t) {
        return {
          type: 'Err', span: e, error: t
        }
      }
      function n() {
        return {
          type: 'UnexpectedParseError'
        }
      }
      function i() {
        return {
          type: 'EmptyInput'
        }
      }
      function a() {
        return {
          type: 'EmptyGroup'
        }
      }
      function o() {
        return {
          type: 'EmptySubscript'
        }
      }
      function s() {
        return {
          type: 'EmptySuperscript'
        }
      }
      function u() {
        return {
          type: 'EmptyRadical'
        }
      }
      function c() {
        return {
          type: 'EmptySquareBracket'
        }
      }
      function l() {
        return {
          type: 'EmptyPipe'
        }
      }
      function p() {
        return {
          type: 'EmptyRadicalIndex'
        }
      }
      function f() {
        return {
          type: 'UnexpectedEnd'
        }
      }
      function h(e) {
        return {
          type: 'BinaryOperatorMissingRight', val: e
        }
      }
      function d(e) {
        return {
          type: 'BinaryOperatorMissingLeft', val: e
        }
      }
      function m(e) {
        return {
          type: 'UnaryOperatorMissingRight', val: e
        }
      }
      function y(e) {
        return {
          type: 'UnaryOperatorMissingLeft', val: e
        }
      }
      function g(e, t) {
        return {
          type: 'MissingCloseDelimiter', open: e, close: t
        }
      }
      function v(e, t) {
        return {
          type: 'UnexpectedCloseDelimiter', open: e, close: t
        }
      }
      function b() {
        return {
          type: 'UnexpectedDifferential'
        }
      }
      function x(e) {
        return {
          type: 'UnrecognizedSymbol', val: e
        }
      }
      function _(e) {
        return {
          type: 'InvalidOperatorName', val: e
        }
      }
      function S(e) {
        return {
          type: 'InvalidSubscript', val: e
        }
      }
      function M(e) {
        return {
          type: 'UnexpectedSubscript', base: e
        }
      }
      function E(e) {
        return {
          type: 'FunctionMissingArgument', val: e
        }
      }
      function w() {
        return {
          type: 'PercentMissingOf'
        }
      }
      function D() {
        return {
          type: 'PrimeWithoutParen'
        }
      }
      function T() {
        return {
          type: 'SuperscriptWithPrime'
        }
      }
      function P() {
        return {
          type: 'UnexpectedPrime'
        }
      }
      function I() {
        return {
          type: 'SumMissingBound'
        }
      }
      function C() {
        return {
          type: 'ProductMissingBound'
        }
      }
      function O() {
        return {
          type: 'MissingBound'
        }
      }
      function A() {
        return {
          type: 'IntegralMissingBound'
        }
      }
      function L() {
        return {
          type: 'SumMissingBody'
        }
      }
      function N() {
        return {
          type: 'ProductMissingBody'
        }
      }
      function q() {
        return {
          type: 'IntegralMissingBody'
        }
      }
      function F() {
        return {
          type: 'DerivativeMissingBody'
        }
      }
      function R() {
        return {
          type: 'IntegralMissingDifferential'
        }
      }
      function V() {
        return {
          type: 'DifferentialWithSuperscript'
        }
      }
      function k() {
        return {
          type: 'FractionMissingNumerator'
        }
      }
      function B() {
        return {
          type: 'FractionMissingDenominator'
        }
      }
      function j() {
        return {
          type: 'FractionEmpty'
        }
      }
      function z(e) {
        return {
          type: 'AdjacentNumbers', args: e
        }
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.Err = r, t.UnexpectedParseError = n, t.EmptyInput = i,
          t.EmptyGroup = a, t.EmptySubscript = o, t.EmptySuperscript = s,
          t.EmptyRadical = u, t.EmptySquareBracket = c, t.EmptyPipe = l,
          t.EmptyRadicalIndex = p, t.UnexpectedEnd = f,
          t.BinaryOperatorMissingRight = h, t.BinaryOperatorMissingLeft = d,
          t.UnaryOperatorMissingRight = m, t.UnaryOperatorMissingLeft = y,
          t.MissingCloseDelimiter = g, t.UnexpectedCloseDelimiter = v,
          t.UnexpectedDifferential = b, t.UnrecognizedSymbol = x,
          t.InvalidOperatorName = _, t.InvalidSubscript = S,
          t.UnexpectedSubscript = M, t.FunctionMissingArgument = E,
          t.PercentMissingOf = w, t.PrimeWithoutParen = D,
          t.SuperscriptWithPrime = T, t.UnexpectedPrime = P,
          t.SumMissingBound = I, t.ProductMissingBound = C, t.MissingBound = O,
          t.IntegralMissingBound = A, t.SumMissingBody = L,
          t.ProductMissingBody = N, t.IntegralMissingBody = q,
          t.DerivativeMissingBody = F, t.IntegralMissingDifferential = R,
          t.DifferentialWithSuperscript = V, t.FractionMissingNumerator = k,
          t.FractionMissingDenominator = B, t.FractionEmpty = j,
          t.AdjacentNumbers = z
    });
define(
    'core/math/parser/expression-token-tables', ['require', 'exports'],
    function(e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var r = {
        '+': !0,
        '-': !0,
        '*': !0,
        '/': !0,
        '!': !0,
        '(': !0,
        ')': !0,
        '\\{': !0,
        '\\}': !0,
        '(|': !0,
        '|)': !0,
        '[': !0,
        ']': !0,
        ',': !0,
        '...': !0,
        ':': !0,
        '=': !0,
        '>': !0,
        '<': !0,
        '>=': !0,
        '<=': !0,
        '~': !0,
        '%': !0,
        '.': !0,
        Letter: !0,
        Decimal: !0,
        Cmd: !0,
        Differential: !0,
        End: !0,
        Trig: !0,
        Ln: !0,
        Log: !0,
        Int: !0,
        Sum: !0,
        Prod: !0,
        Err: !0
      };
      t.commandTable = {
        '\\lt': '<',
        '\\gt': '>',
        '\\le': '<=',
        '\\ge': '>=',
        '\\ldots': '...',
        '\\sim': '~',
        '\\cdot': '*',
        '\\times': '*',
        '\\div': '/',
        '\\ln': 'Ln',
        '\\log': 'Log',
        '\\int': 'Int',
        '\\sum': 'Sum',
        '\\prod': 'Prod',
        '\\backslash': 'Err'
      };
      for (var n = ['sin', 'cos', 'tan', 'cot', 'sec', 'csc'], i = 0, a = n;
           i < a.length; i++) {
        var o = a[i];
        t.commandTable['\\' + o] = 'Trig',
                              t.commandTable['\\' + o + 'h'] = 'Trig',
                              t.commandTable['\\arc' + o] = 'Trig',
                              t.commandTable['\\arc' + o + 'h'] = 'Trig'
      }
      t.symbolTable = {
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '!': '!',
        '(': '(',
        ')': ')',
        '[': '[',
        ']': ']',
        ',': ',',
        '...': '...',
        ':': ':',
        '=': '=',
        '>=': '>=',
        '<=': '<=',
        '>': '>',
        '<': '<',
        '~': '~',
        '.': '.'
      },
      t.escapedSymbolTable = {'\\{': '\\{', '\\}': '\\}', '\\%': '%'},
      t.leftTable = {'|': '(|', '\\{': '\\{', '[': '[', '(': '('},
      t.rightTable = {'|': '|)', '\\}': '\\}', ']': ']', ')': ')'},
      t.allTokenTypes = Object.keys(r)
    });
define(
    'core/math/parser/expression-lexer',
    [
      'require', 'exports', './expression-token-tables', './input-span',
      './input-span', './surface-node'
    ],
    function(e, t, r, n, i, a) {
      'use strict';
      function o(e, t, r, n, i, a, o, s) {
        return {
          opts: e, input: t, prevSpan: r, startIndex: n, endIndex: i, token: a,
              mode: o, parent: s
        }
      }
      function s(e, t) {
        return n.joinSpans(e.token.span, t.prevSpan)
      }
      function u(e, t) {
        return n.joinSpans(e, t.prevSpan)
      }
      function c(e) {
        return n.emptySpanAt(e.token.span.input, e.token.span.start)
      }
      function l(e, t) {
        return {
          type: 'Differential', span: e, val: t
        }
      }
      function p(e, t, r) {
        return {
          type: e, span: t, val: r
        }
      }
      function f(e, t) {
        return h(
            t, e, 0, n.emptySpanAt(e.span.input, e.span.start), void 0, void 0)
      }
      function h(e, t, n, i, a, s) {
        var u = t.args;
        if (n > u.length && s) return m(s, i);
        n = P(u, n);
        var c = M(t, n, a), l = c.token, f = c.endIndex;
        if ('End' === l.type && s) {
          var h = s.input.args[s.startIndex];
          if ('LeftRight' === h.type) {
            var d = h.right;
            return o(
                e, t, i, n, f, p(r.rightTable[d.val] || 'Err', d.span, d.val),
                a, s)
          }
        } else
          'Int' === l.type ? a = g(a) : 'Differential' === l.type && (a = v(a));
        return o(e, t, i, n, f, l, a, s)
      }
      function d(e) {
        var t = e.input.args[e.startIndex], r = e.token.span;
        return t && 'LeftRight' === t.type ? h(e.opts, t.arg, 0, r, e.mode, e) :
                                             m(e, r)
      }
      function m(e, t) {
        var r = e.input, n = e.endIndex, i = e.mode, a = e.parent;
        return h(e.opts, r, n + 1, t, i, a)
      }
      function y(e) {
        return e.token
      }
      function g(e) {
        return {
          type: 'integral', parent: e
        }
      }
      function v(e) {
        if (!e || 'integral' !== e.type)
          throw new Error(
              'Programming Error: expected lexer to be in integral mode.');
        return e.parent
      }
      function b(e, t) {
        return y(e).type === t
      }
      function x(e) {
        return e.startIndex >= e.input.args.length
      }
      function _(e, t) {
        return t.token.span.start > e.token.span.start
      }
      function S(e, t) {
        return {
          token: t, endIndex: e
        }
      }
      function M(e, t, i) {
        if (t >= e.args.length)
          return S(t, p('End', n.emptySpanAt(e.span.input, e.span.end), ''));
        var a = e.args[t];
        switch (a.type) {
          case 'Sqrt':
          case 'Frac':
          case 'SupSub':
            return S(t, a);
          case 'Letter':
            if (!i || 'integral' !== i.type) return S(t, a);
            if ('d' != a.val) return S(t, a);
            var o = M(e, t + 1, i), s = o.endIndex, u = o.token;
            if ('Letter' === u.type || 'Cmd' === u.type) {
              return S(s, l(n.joinSpans(a.span, u.span), u.val))
            }
            return S(t, a);
          case 'LeftRight':
            var c = a.left;
            return S(
                t,
                p(r.leftTable[c.val] || 'Err', n.joinSpans(a.span, c.span),
                  c.val));
          case 'OperatorName':
            for (var f = [], h = 0, d = a.arg.args; h < d.length; h++) {
              var m = d[h];
              if ('Letter' !== m.type)
                return S(t, p('Err', a.span, n.slice(a.arg.span)));
              f.push(m.val)
            }
            var y = '\\' + f.join('');
            return S(t, p(r.commandTable[y] || 'Cmd', a.span, y));
          case 'Cmd':
            return S(t, p(r.commandTable[a.val] || 'Cmd', a.span, a.val));
          case 'EscapedSymbol':
            return S(t, p(r.escapedSymbolTable[a.val] || 'Err', a.span, a.val));
          case 'Symbol':
            if (I(a)) return E(e, t);
            return S(t, p(r.symbolTable[a.val] || 'Err', a.span, a.val));
          case 'Digit':
            return w(e, t);
          default:
            throw 'Unexpected atom ' + a.type + '.'
        }
      }
      function E(e, t) {
        var i = e.args[t];
        if ('Symbol' !== i.type || '.' !== i.val)
          throw new Error('Programming Error: expected \'.\'');
        if (t + 2 < e.args.length && I(e.args[t + 1]) && I(e.args[t + 2])) {
          var a = n.joinSpans(i.span, e.args[t + 2].span);
          return S(t + 2, p('...', a, n.slice(a)))
        }
        var o = P(e.args, t + 1);
        return o < e.args.length && 'Digit' === e.args[o].type ?
            w(e, t) :
            S(t, p(r.symbolTable[i.val] || 'Err', i.span, i.val))
      }
      function w(e, t) {
        var r = D(e, t);
        if (r) return r;
        for (var i = e.args, a = e.args[t].span, o = [], s = !1, u = !1;
             t < i.length; t++) {
          var c = P(i, t);
          if (c >= i.length) break;
          var l = i[c];
          if ('Digit' === l.type)
            t = c, s = !0, o.push(l.val);
          else {
            if (u || !I(l)) break;
            if (c + 1 < i.length && I(e.args[c + 1])) break;
            t = c, u = !0, o.push('.')
          }
        }
        if (!s)
          throw new Error(
              'Programming Error: decimals must have at least one digit.');
        return S(
            t - 1, p('Decimal', n.joinSpans(a, e.args[t - 1].span), o.join('')))
      }
      function D(e, t) {
        for (var r = e.args, i = r[t].span, o = []; t < r.length; t++) {
          var s = P(r, t);
          if (s >= r.length) break;
          var u = r[s];
          if ('Digit' !== u.type) break;
          t = s, o.push(u.val)
        }
        if (!((t = P(r, t)) >= r.length)) {
          var c = r[t];
          if ('Frac' === c.type) {
            for (var l = [], p = [], f = 0, h = c.num.args; f < h.length; f++) {
              var u = h[f];
              if (!T(u)) {
                if ('Digit' !== u.type) return;
                l.push(u.val)
              }
            }
            for (var d = 0, m = c.den.args; d < m.length; d++) {
              var u = m[d];
              if (!T(u)) {
                if ('Digit' !== u.type) return;
                p.push(u.val)
              }
            }
            var y = n.joinSpans(i, c.span);
            return S(t, a.MixedNumber(y, o.join(''), l.join(''), p.join('')))
          }
        }
      }
      function T(e) {
        switch (e.type) {
          case 'Sqrt':
          case 'Frac':
          case 'SupSub':
          case 'LeftRight':
          case 'OperatorName':
          case 'Symbol':
          case 'Letter':
          case 'Digit':
            return !1;
          case 'Cmd':
            return '\\space' === e.val;
          case 'EscapedSymbol':
            return '\\ ' === e.val || '\\:' === e.val || '\\,' === e.val ||
                '\\;' === e.val;
          default:
            throw 'Unexpected atom ' + e.type + '.'
        }
      }
      function P(e, t) {
        for (; t < e.length && T(e[t]);) t += 1;
        return t
      }
      function I(e) {
        return 'Symbol' === e.type && '.' === e.val
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.Span = i.Span, t.spanStates = s, t.joinState = u,
          t.emptySpanAtState = c, t.lex = f, t.lexAt = h, t.advance = d,
          t.peek = y, t.beginIntegral = g, t.endIntegral = v, t.isAt = b,
          t.isDone = x, t.didAdvance = _
    });
define(
    'core/math/parser/precspec',
    ['require', 'exports', './expression-token-tables'], function(e, t, r) {
      'use strict';
      function n(e) {
        return {
          type: 'initial', tokenType: e
        }
      }
      function i(e) {
        return {
          type: 'l', tokenType: e
        }
      }
      function a(e) {
        return {
          type: 'r', tokenType: e
        }
      }
      function o(e) {
        return {
          type: 'la', tokenType: e
        }
      }
      function s(e) {
        return {
          type: 'ra', tokenType: e
        }
      }
      function u(e, t) {
        for (var n = 0, i = r.allTokenTypes; n < i.length; n++) {
          var a = i[n];
          if (void 0 === t[a])
            throw new Error(
                'Programming Error: token ' + a + ' must be a assigned a ' + e +
                ' precedence')
        }
      }
      function c(e, t, r, n) {
        if (void 0 !== t[r])
          throw new Error(
              'Programming Error: duplicate ' + e + ' entry for token ' + r +
              '.');
        t[r] = n
      }
      function l(e) {
        function t(e) {
          return o[e]
        }
        function r(e) {
          return a[e]
        }
        function n(e) {
          var r = i[e];
          return void 0 === r ? t(e) : r
        }
        for (var i = {}, a = {}, o = {}, s = 0; s < e.length; s++)
          for (var l = e[s], p = 0, f = l; p < f.length; p++) {
            var h = f[p], d = h.type, m = h.tokenType;
            switch (d) {
              case 'initial':
                c('initial', i, m, s);
                break;
              case 'l':
                c('left', a, m, s);
                break;
              case 'r':
                c('right', o, m, s);
                break;
              case 'la':
                c('left', a, m, s), c('right', o, m, s);
                break;
              case 'ra':
                c('left', a, m, s), c('right', o, m, s - 1)
            }
          }
        return u('left', a), u('right', o), {
          rightPrec: t, leftPrec: r, initialPrec: n
        }
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.initial = n, t.l = i, t.r = a, t.la = o, t.ra = s, t.precSpec = l
    });
define(
    'core/math/parser/expression-parser',
    [
      'require', 'exports', 'core/math/errormsg', 'tslib', './surface-node',
      './surface-node-error', './input-span', './expression-lexer', './precspec'
    ],
    function(e, t, r, n, i, a, o, s, u) {
      'use strict';
      function c(e, t) {
        var r = t ? n.__assign(n.__assign({}, L), t) : L, i = l(e, r);
        return 'Err' === i.type && 'EmptyGroup' === i.error.type ?
            a.Err(i.span, a.EmptyInput()) :
            i
      }
      function l(e, t) {
        var r = s.lex(e, t);
        if (s.isDone(r)) return a.Err(s.spanStates(r, r), a.EmptyGroup());
        var n = f(r, 0), i = n.state, o = n.tree;
        return 'Err' === o.type || s.isDone(i) ? o : D(i).tree
      }
      function p(e, t) {
        return {
          state: e, tree: t
        }
      }
      function f(e, t) {
        var r, n, i, a = e;
        if (r = d(e), e = r.state, i = r.tree, 'Err' === i.type) return p(e, i);
        if (!s.didAdvance(a, e))
          throw new Error(
              'Programming Error: parseInitial did not advance state.');
        for (; !s.isDone(e);) {
          var o = void 0;
          if (o = s.isAt(e, '(') && !y(i) ? O('(') : C(s.peek(e).type), t >= o)
            break;
          var u = e;
          if (n = m(e, i), e = n.state, i = n.tree, 'Err' === i.type)
            return p(e, i);
          if (!s.didAdvance(u, e))
            throw new Error(
                'Programming Error: parseSuccessor did not advance state.')
        }
        return p(e, i)
      }
      function h(e) {
        return 'UnexpectedDifferential' === e.type ||
            'UnexpectedCloseDelimiter' === e.type ||
            'UnexpectedEnd' === e.type || 'BinaryOperatorMissingLeft' === e.type
      }
      function d(e) {
        var t, n, o, u, c, d, m, y, g, v, x, T, P, I, O, L, N, q, F,
            R = e, V = s.peek(e), k = A(V.type);
        switch (V.type) {
          case '+':
            if (e = s.advance(e), t = f(e, k), e = t.state, F = t.tree,
                'Err' === F.type) {
              if (!h(F.error)) return p(e, F);
              var B = s.spanStates(R, e),
                  j = a.Err(B, a.UnaryOperatorMissingRight(V.val));
              return p(e, j)
            }
            return p(e, i.Pos(s.spanStates(R, e), [F]));
          case '-':
            if (e = s.advance(e), n = f(e, k), e = n.state, F = n.tree,
                'Err' === F.type) {
              if (!h(F.error)) return p(e, F);
              var B = s.spanStates(R, e),
                  j = a.Err(B, a.UnaryOperatorMissingRight(V.val));
              return p(e, j)
            }
            return p(e, i.Neg(s.spanStates(R, e), [F]));
          case '(':
            return M(e);
          case '\\{':
            return e = s.advance(e),
                   s.isAt(e, '\\}') ?
                       (e = s.advance(e),
                        p(e, i.EmptyPiecewise(s.spanStates(R, e)))) :
                       (o = f(e, k), e = o.state, F = o.tree,
                        u = w(R, e, F, '\\{', '\\}'), e = u.state, F = u.tree,
                        'Err' === F.type ?
                            p(e, F) :
                            p(e, i.Piecewise(s.spanStates(R, e), [F])));
          case '[':
            if (e = s.advance(e), s.isAt(e, ']')) {
              e = s.advance(e);
              var B = s.spanStates(R, e);
              return p(e, a.Err(B, a.EmptySquareBracket()))
            }
            return c = f(e, k), e = c.state, F = c.tree,
                   d = w(R, e, F, '[', ']'), e = d.state, F = d.tree,
                   'Err' === F.type ? p(e, F) :
                                      p(e, i.List(s.spanStates(R, e), [F]));
          case '(|':
            if (e = s.advance(e), s.isAt(e, '|)')) {
              e = s.advance(e);
              var B = s.spanStates(R, e);
              return p(e, a.Err(B, a.EmptyPipe()))
            }
            return m = f(e, k), e = m.state, F = m.tree,
                   y = w(R, e, F, '(|', '|)'), e = y.state, F = y.tree,
                   'Err' === F.type ? p(e, F) :
                                      p(e, i.Pipes(s.spanStates(R, e), [F]));
          case 'Frac':
            if (e.opts.disallowFrac) throw r.featureUnavailable();
            e = s.advance(e);
            var z = l(V.num, e.opts), G = l(V.den, e.opts);
            if ('Err' === z.type && 'EmptyGroup' === z.error.type &&
                'Err' === G.type && 'EmptyGroup' === G.error.type) {
              var B = s.spanStates(R, e), j = a.Err(B, a.FractionEmpty());
              return p(e, j)
            }
            if ('Err' === z.type && 'EmptyGroup' === z.error.type) {
              var B = s.spanStates(R, e),
                  j = a.Err(B, a.FractionMissingNumerator());
              return p(e, j)
            }
            if ('Err' === G.type && 'EmptyGroup' === G.error.type) {
              var B = s.spanStates(R, e),
                  j = a.Err(B, a.FractionMissingDenominator());
              return p(e, j)
            }
            if ('Err' === z.type) return p(e, z);
            if ('Err' === G.type) return p(e, G);
            if (i.isDerivative(z, G) && 'Juxt' === G.type) {
              var U = G.args[1], W = void 0;
              if (g = f(e, C('*') - 1), e = g.state, W = g.tree,
                  'Err' === W.type) {
                if (h(W.error)) {
                  var B = s.spanStates(R, e);
                  return p(e, a.Err(B, a.DerivativeMissingBody()))
                }
                return p(e, W)
              }
              return p(e, i.Derivative(s.spanStates(R, e), [U, W]))
            }
            return p(e, i.Frac(s.spanStates(R, e), [z, G]));
          case 'Sqrt':
            if (e = s.advance(e), V.optArg) {
              var Y = l(V.optArg, e.opts);
              if ('Err' === Y.type)
                return 'EmptyGroup' === Y.error.type ?
                    p(e, a.Err(Y.span, a.EmptyRadicalIndex())) :
                    p(e, Y);
              var X = l(V.arg, e.opts);
              return 'Err' === X.type ?
                  'EmptyGroup' === X.error.type ?
                  p(e, a.Err(X.span, a.EmptyRadical())) :
                  p(e, X) :
                  p(e, i.Nthroot(s.spanStates(R, e), [Y, X]))
            }
            var X = l(V.arg, e.opts);
            return 'Err' === X.type ? 'EmptyGroup' === X.error.type ?
                                      p(e, a.Err(X.span, a.EmptyRadical())) :
                                      p(e, X) :
                                      p(e, i.Sqrt(s.spanStates(R, e), [X]));
          case 'Trig':
          case 'Ln':
            e = s.advance(e);
            var H = i.Cmd(s.spanStates(R, e), V.val), Q = 0, J = s.peek(e);
            if ('SupSub' === J.type) {
              if (e = s.advance(e), J.sub) {
                var B = s.spanStates(R, e),
                    j = a.Err(B, a.UnexpectedSubscript(H.val));
                return p(e, j)
              }
              var Z = _(J, e.opts);
              if (Z) {
                if ('Err' === Z.type) return p(e, Z);
                H = i.Superscript(s.spanStates(R, e), [H, Z])
              }
              Q = J.nprimes
            }
            var K = s.isAt(e, '(');
            if (K) {
              if (v = M(e), e = v.state, F = v.tree, 'Err' === F.type)
                return p(e, F);
              F = i.Call(s.spanStates(R, e), [H, F.args[0]])
            } else {
              if (x = f(e, k - 1), e = x.state, F = x.tree, 'Err' === F.type)
                return h(F.error) ? p(e,
                                      a.Err(
                                          s.spanStates(R, e),
                                          a.FunctionMissingArgument(V.val))) :
                                    p(e, F);
              F = i.ImplicitCall(s.spanStates(R, e), [H, F])
            }
            if (Q > 0) {
              var B = s.spanStates(R, e);
              if (!K) {
                var j = a.Err(B, a.PrimeWithoutParen());
                return p(e, j)
              }
              F = i.Prime(B, Q, [F])
            }
            return p(e, F);
          case 'Log':
            e = s.advance(e);
            var H = i.Cmd(s.spanStates(R, e), V.val), Q = 0, $ = void 0,
                Z = void 0, J = s.peek(e);
            if ('SupSub' === J.type &&
                    (e = s.advance(e), $ = b(J, e.opts), Z = _(J, e.opts),
                     Q = J.nprimes),
                $ && 'Err' === $.type)
              return p(e, $);
            if (Z && 'Err' === Z.type) return p(e, Z);
            var K = s.isAt(e, '(');
            if (K) {
              if (T = M(e), e = T.state, F = T.tree, 'Err' === F.type)
                return p(e, F);
              F = F.args[0]
            } else if (
                P = f(e, k - 1), e = P.state, F = P.tree, 'Err' === F.type)
              return h(F.error) ?
                  p(e,
                    a.Err(
                        s.spanStates(R, e), a.FunctionMissingArgument(V.val))) :
                  p(e, F);
            var ee =
                    $ ? i.Seq(s.spanStates(R, e), i.unwrapSeq(F).concat($)) : F,
                te = $ ? i.Cmd(s.spanStates(R, e), '\\logbase') : H;
            if (Z && (te = i.Superscript(s.spanStates(R, e), [te, Z])),
                F = K ? i.Call(s.spanStates(R, e), [te, ee]) :
                        i.ImplicitCall(s.spanStates(R, e), [te, ee]),
                Q > 0) {
              var B = s.spanStates(R, e);
              if (!K) {
                var j = a.Err(B, a.PrimeWithoutParen());
                return p(e, j)
              }
              F = i.Prime(B, Q, [F])
            }
            return p(e, F);
          case 'Int':
            e = s.advance(e);
            var J = s.peek(e);
            e = s.advance(e);
            var re = S(J, R, e);
            if ('Err' === re.type)
              return 'MissingBound' === re.error.type ?
                  p(e, a.Err(re.span, a.IntegralMissingBound())) :
                  p(e, re);
            var Z = re.sup, $ = re.sub, U = void 0;
            if (s.isAt(e, 'Differential'))
              return I = E(e), e = I.state, U = I.tree,
                     'Err' === U.type ?
                         p(e, U) :
                         p(e, i.EmptyIntegral(s.spanStates(R, e), [U, $, Z]));
            if (O = f(e, k), e = O.state, F = O.tree, 'Err' === F.type)
              return h(F.error) ? p(e, a.Err(F.span, a.IntegralMissingBody())) :
                                  p(e, F);
            var ne = F;
            return s.isAt(e, 'Differential') ?
                (L = E(e), e = L.state, U = L.tree,
                 'Err' === U.type ?
                     p(e, U) :
                     p(e, i.Integral(s.spanStates(R, e), [U, $, Z, ne]))) :
                p(e,
                  a.Err(s.spanStates(R, e), a.IntegralMissingDifferential()));
          case 'Sum':
            e = s.advance(e);
            var J = s.peek(e);
            e = s.advance(e);
            var re = S(J, R, e);
            if ('Err' === re.type)
              return 'MissingBound' === re.error.type ?
                  p(e, a.Err(re.span, a.SumMissingBound())) :
                  p(e, re);
            var Z = re.sup, $ = re.sub;
            return N = f(e, k), e = N.state, F = N.tree,
                   'Err' === F.type ?
                       h(F.error) ? p(e, a.Err(F.span, a.SumMissingBody())) :
                                    p(e, F) :
                       p(e, i.Sum(s.spanStates(R, e), [F, $, Z]));
          case 'Prod':
            e = s.advance(e);
            var J = s.peek(e);
            e = s.advance(e);
            var re = S(J, R, e);
            if ('Err' === re.type)
              return 'MissingBound' === re.error.type ?
                  p(e, a.Err(re.span, a.ProductMissingBound())) :
                  p(e, re);
            var Z = re.sup, $ = re.sub;
            return q = f(e, k), e = q.state, F = q.tree,
                   'Err' === F.type ?
                       h(F.error) ?
                       p(e, a.Err(F.span, a.ProductMissingBody())) :
                       p(e, F) :
                       p(e, i.Product(s.spanStates(R, e), [F, $, Z]));
          case 'Cmd':
            return e = s.advance(e), F = i.Cmd(s.spanStates(R, e), V.val),
                   p(e, F);
          case 'Letter':
            return e = s.advance(e), F = i.Letter(s.spanStates(R, e), V.val),
                   p(e, F);
          case 'Decimal':
            e = s.advance(e);
            var ie = i.Decimal(s.spanStates(R, e), V.val), J = e.token;
            if ('Decimal' === J.type || 'MixedNumber' === J.type) {
              var ae = e;
              e = s.advance(e);
              var B = s.spanStates(R, e),
                  oe = 'MixedNumber' === J.type ?
                  J :
                  i.Decimal(s.spanStates(ae, e), J.val);
              return p(e, a.Err(B, a.AdjacentNumbers([ie, oe])))
            }
            return p(e, ie);
          case 'MixedNumber':
            if (e.opts.disallowFrac) throw r.featureUnavailable();
            e = s.advance(e);
            var J = e.token;
            if ('Decimal' === J.type || 'MixedNumber' === J.type) {
              var ae = e;
              e = s.advance(e);
              var B = s.spanStates(R, e),
                  oe = 'MixedNumber' === J.type ?
                  J :
                  i.Decimal(s.spanStates(ae, e), J.val);
              return p(e, a.Err(B, a.AdjacentNumbers([V, oe])))
            }
            return p(e, V);
          case '*':
          case '/':
          case ',':
          case '=':
          case '>':
          case '<':
          case '>=':
          case '<=':
          case '~':
          case ':':
          case '...':
          case '%':
          case '.':
            e = s.advance(e);
            var B = s.spanStates(R, e),
                j = a.Err(B, a.BinaryOperatorMissingLeft(V.val));
            return p(e, j);
          case '!':
            e = s.advance(e);
            var B = s.spanStates(R, e),
                j = a.Err(B, a.UnaryOperatorMissingLeft(V.val));
            return p(e, j);
          case 'SupSub':
            e = s.advance(e);
            var se = 'supsub';
            V.sub     ? se = 'subscript' :
                V.sup ? se = 'superscript' :
                        V.nprimes > 0 && (se = 'prime');
            var B = s.spanStates(R, e),
                j = a.Err(B, a.UnaryOperatorMissingLeft(se));
            return p(e, j);
          case ')':
          case '\\}':
          case ']':
          case '|)':
          case 'Differential':
            return D(e);
          case 'Err':
            e = s.advance(e);
            var B = s.spanStates(R, e),
                j = a.Err(B, a.UnrecognizedSymbol(V.val));
            return p(e, j);
          case 'End':
            var B = s.spanStates(R, e), j = a.Err(B, a.UnexpectedEnd());
            return p(e, j);
          default:
            throw 'Unexpected token type ' + V.type + '.'
        }
      }
      function m(e, t) {
        var r, n, o, u, c, l, d, m, y, b, S, E, P, I, C, A = s.peek(e),
                                                         L = O(A.type);
        switch (A.type) {
          case '+':
          case '-':
          case '*':
          case '/':
          case '=':
          case '~':
          case ':':
          case '.':
            if (e = s.advance(e), r = f(e, L), e = r.state, C = r.tree,
                'Err' === C.type) {
              if (h(C.error)) {
                var N = s.joinState(t.span, e),
                    q = a.Err(N, a.BinaryOperatorMissingRight(A.val));
                return p(e, q)
              }
              return p(e, C)
            }
            return p(e, g(A.type, s.joinState(t.span, e), [t, C]));
          case '%':
            e = s.advance(e);
            var F = s.peek(e);
            if ('Cmd' !== F.type || 'of' !== F.val && '\\of' !== F.val) {
              var q = a.Err(A.span, a.PercentMissingOf());
              return p(e, q)
            }
            if (e = s.advance(e), n = f(e, L), e = n.state, C = n.tree,
                'Err' === C.type) {
              if (h(C.error)) {
                var N = s.joinState(t.span, e),
                    q = a.Err(N, a.BinaryOperatorMissingRight(A.val));
                return p(e, q)
              }
              return p(e, C)
            }
            return p(e, i.PercentOf(s.joinState(t.span, e), [t, C]));
          case '>=':
          case '<=':
          case '>':
          case '<':
            var R = A.type;
            if (e = s.advance(e), o = v(e, R), e = o.state, R = o.symbol,
                u = f(e, L), e = u.state, C = u.tree, 'Err' === C.type) {
              if (h(C.error)) {
                var N = s.joinState(t.span, e),
                    q = a.Err(N, a.BinaryOperatorMissingRight(A.val));
                return p(e, q)
              }
              return p(e, C)
            }
            for (var V = i.Inequality(s.joinState(t.span, e), R, [t, C]),
                     k = [], B = s.peek(e).type;
                 '>=' === B || '<=' === B || '>' === B || '<' === B;) {
              var j = e;
              if (R = B, e = s.advance(e), c = v(e, R), e = c.state,
                  R = c.symbol, l = f(e, L), e = l.state, C = l.tree,
                  'Err' === C.type) {
                if (h(C.error)) {
                  var N = s.joinState(t.span, e),
                      q = a.Err(N, a.BinaryOperatorMissingRight(A.val));
                  return p(e, q)
                }
                return p(e, C)
              }
              k.push(i.TrailingInequalityPiece(s.spanStates(j, e), R, [C])),
                  B = s.peek(e).type
            }
            return k.length ?
                p(e, i.InequalityChain(s.joinState(t.span, e), V, k)) :
                p(e, V);
          case '!':
            return e = s.advance(e), p(e, i.Bang(s.joinState(t.span, e), [t]));
          case '[':
            var j = e;
            if (e = s.advance(e), s.isAt(e, ']')) {
              e = s.advance(e);
              var N = s.spanStates(j, e);
              return p(e, a.Err(N, a.EmptySquareBracket()))
            }
            return d = f(e, L), e = d.state, C = d.tree,
                   m = w(j, e, C, '[', ']'), e = m.state, C = m.tree,
                   'Err' === C.type ?
                       p(e, C) :
                       p(e, i.Index(s.joinState(t.span, e), [t, C]));
          case 'Sqrt':
          case 'Frac':
          case 'Letter':
          case 'Cmd':
          case 'Trig':
          case 'Ln':
          case 'Log':
          case 'Sum':
          case 'Int':
          case 'Prod':
          case 'Decimal':
          case 'MixedNumber':
          case '\\{':
          case '(|':
            return y = f(e, L), e = y.state, C = y.tree,
                   'Err' === C.type ?
                       p(e, C) :
                       p(e, i.Juxt(s.joinState(t.span, e), [t, C]));
          case '(':
            if (i.isIdentifier(t)) {
              if (b = M(e), e = b.state, C = b.tree, 'Err' === C.type)
                return p(e, C);
              var N = s.joinState(t.span, e);
              return p(e, i.Call(N, [t, C.args[0]]))
            }
            if ('Prime' === t.type && i.isIdentifier(t.args[0])) {
              if (S = M(e), e = S.state, C = S.tree, 'Err' === C.type)
                return p(e, C);
              var N = s.joinState(t.span, e);
              return p(
                  e, i.Prime(N, t.nprimes, [i.Call(N, [t.args[0], C.args[0]])]))
            }
            return E = f(e, L), e = E.state, C = E.tree,
                   'Err' === C.type ?
                       p(e, C) :
                       p(e, i.Juxt(s.joinState(t.span, e), [t, C]));
          case 'SupSub':
            e = s.advance(e);
            var z = x(A), G = _(A, e.opts);
            if (z && 'Err' === z.type) return p(e, z);
            if (G && 'Err' === G.type) return p(e, G);
            if (z && (t = i.Subscript(s.joinState(t.span, e), [t, z])),
                G && (t = i.Superscript(s.joinState(t.span, e), [t, G])),
                A.nprimes > 0) {
              var N = s.joinState(t.span, e);
              if (!i.isIdentifier(t)) {
                var q = a.Err(N, a.UnexpectedPrime());
                return p(e, q)
              }
              t = i.Prime(N, A.nprimes, [t])
            }
            return p(e, t);
          case ',':
            for (var U = [t]; s.isAt(e, ',') &&
                 (e = s.advance(e), !s.isAt(e, '...')) &&
                 (!e.opts.trailingComma || !T(e));) {
              if (P = f(e, L), e = P.state, C = P.tree, 'Err' === C.type) {
                if (h(C.error)) {
                  var N = s.joinState(t.span, e),
                      q = a.Err(N, a.BinaryOperatorMissingRight(A.val));
                  return p(e, q)
                }
                return p(e, C)
              }
              U.push(C)
            }
            return p(e, i.Seq(s.joinState(t.span, e), U));
          case '...':
            if (e = s.advance(e), s.isAt(e, ',') && (e = s.advance(e)),
                I = f(e, L), e = I.state, C = I.tree, 'Err' === C.type) {
              if (h(C.error)) {
                var N = s.joinState(t.span, e),
                    q = a.Err(N, a.BinaryOperatorMissingRight(A.val));
                return p(e, q)
              }
              return p(e, C)
            }
            return p(e, i.Ellipsis(s.joinState(t.span, e), [t, C]));
          case ']':
          case ')':
          case '\\}':
          case '|)':
          case 'Differential':
            return D(e);
          case 'Err':
            return f(e, L);
          case 'End':
            var N = s.spanStates(e, e), q = a.Err(N, a.UnexpectedEnd());
            return p(e, q);
          default:
            throw 'Unexpected token type ' + A.type + '.'
        }
      }
      function y(e) {
        return !!i.isIdentifier(e) ||
            !('Prime' !== e.type || !i.isIdentifier(e.args[0]))
      }
      function g(e, t, r) {
        switch (e) {
          case '+':
            return i.Add(t, r);
          case '-':
            return i.Sub(t, r);
          case '*':
            return i.Mul(t, r);
          case '/':
            return i.Div(t, r);
          case '=':
            return i.Equals(t, r);
          case '~':
            return i.Tilde(t, r);
          case ':':
            return i.Colon(t, r);
          case '.':
            return i.Dot(t, r);
          default:
            throw 'Unexpected token type ' + e + '.'
        }
      }
      function v(e, t) {
        if (!s.isAt(e, '=')) return {state: e, symbol: t};
        switch (t) {
          case '>':
            e = s.advance(e), t = '>=';
            break;
          case '<':
            e = s.advance(e), t = '<='
        }
        return {
          state: e, symbol: t
        }
      }
      function b(e, t) {
        if (e.sub) {
          var r = e.sub, n = l(r, t);
          return 'Err' === n.type && 'EmptyGroup' === n.error.type ?
              a.Err(n.span, a.EmptySubscript()) :
              n
        }
      }
      function x(e) {
        if (e.sub) {
          var t = e.sub;
          if (0 === t.args.length) return a.Err(t.span, a.EmptySubscript());
          for (var r = [], n = 0, s = t.args; n < s.length; n++) {
            var u = s[n];
            if ('Digit' !== u.type && 'Letter' !== u.type) {
              var c = u.span;
              return a.Err(c, a.InvalidSubscript(o.slice(c)))
            }
            r.push(u.val)
          }
          return i.Alphanumeric(t.span, r.join(''))
        }
      }
      function _(e, t) {
        if (e.sup) {
          var r = l(e.sup, t);
          return 'Err' === r.type ? 'EmptyGroup' === r.error.type ?
                                    a.Err(r.span, a.EmptySuperscript()) :
                                    r :
              e.nprimes > 0       ? a.Err(e.span, a.SuperscriptWithPrime()) :
                                    r
        }
      }
      function S(e, t, r) {
        if ('SupSub' !== e.type) {
          var n = s.spanStates(t, r);
          return a.Err(n, a.MissingBound())
        }
        if (e.nprimes > 0) {
          var n = s.spanStates(t, r);
          return a.Err(n, a.UnexpectedPrime())
        }
        var i = b(e, r.opts), o = _(e, r.opts);
        if (!i || 'Err' === i.type && 'EmptySubscript' === i.error.type || !o ||
            'Err' === o.type && 'EmptySuperscript' === o.error.type) {
          var n = s.spanStates(t, r);
          return a.Err(n, a.MissingBound())
        }
        return 'Err' === i.type ? i :
            'Err' === o.type    ? o :
                                  {type: 'Bounds', sup: o, sub: i}
      }
      function M(e) {
        var t, r, n = e, a = s.peek(e), o = A(a.type);
        if (!s.isAt(e, '('))
          throw new Error(
              'Programming Error: expected \'(\' at start of parseParen.');
        if (e = s.advance(e), s.isAt(e, ')')) {
          var u = i.Seq(s.emptySpanAtState(e), []);
          e = s.advance(e);
          var c = s.spanStates(n, e);
          return p(e, i.Paren(c, [u]))
        }
        var l;
        return t = f(e, o), e = t.state, l = t.tree, r = w(n, e, l, '(', ')'),
               e = r.state, l = r.tree,
               'Err' === l.type ? p(e, l) :
                                  p(e, i.Paren(s.spanStates(n, e), [l]))
      }
      function E(e) {
        var t = e, r = s.peek(e);
        if ('Differential' !== r.type)
          throw new Error('Programming Error: expected differential');
        e = s.advance(e);
        var n = i.Cmd(r.span, r.val), o = s.peek(e);
        if ('SupSub' === o.type) {
          e = s.advance(e);
          var u = s.spanStates(t, e), c = x(o);
          if (c) {
            if ('Err' === c.type) return p(e, c);
            n = i.Subscript(u, [n, c])
          }
          if (o.sup) return p(e, a.Err(u, a.DifferentialWithSuperscript()));
          if (o.nprimes > 0) return p(e, a.Err(u, a.UnexpectedPrime()))
        }
        return p(e, n)
      }
      function w(e, t, r, n, i) {
        if ('Err' === r.type && 'UnexpectedEnd' !== r.error.type)
          return p(t, r);
        if ('Err' === r.type || !s.isAt(t, i)) {
          var o = s.spanStates(e, t);
          return p(t, a.Err(o, a.MissingCloseDelimiter(n, i)))
        }
        return t = s.advance(t), p(t, r)
      }
      function D(e) {
        var t = e;
        switch (s.peek(e).type) {
          case ')':
            e = s.advance(e);
            var r = s.spanStates(t, e);
            return p(e, a.Err(r, a.UnexpectedCloseDelimiter('(', ')')));
          case ']':
            e = s.advance(e);
            var r = s.spanStates(t, e);
            return p(e, a.Err(r, a.UnexpectedCloseDelimiter('[', ']')));
          case '\\}':
            e = s.advance(e);
            var r = s.spanStates(t, e);
            return p(e, a.Err(r, a.UnexpectedCloseDelimiter('\\{', '\\}')));
          case '|)':
            e = s.advance(e);
            var r = s.spanStates(t, e);
            return p(e, a.Err(r, a.UnexpectedCloseDelimiter('|', '|')));
          case 'Differential':
            e = s.advance(e);
            var r = s.spanStates(t, e);
            return p(e, a.Err(r, a.UnexpectedDifferential()));
          default:
            e = s.advance(e);
            var r = s.spanStates(t, e);
            return p(e, a.Err(r, a.UnexpectedParseError()))
        }
      }
      function T(e) {
        return s.isAt(e, ')') || s.isAt(e, ']') || s.isAt(e, '\\}')
      }
      Object.defineProperty(t, '__esModule', {value: !0});
      var P =
              [
                [
                  u.initial('('), u.la(')'), u.initial('\\{'), u.la('\\}'),
                  u.r('['), u.la(']'), u.initial('(|'), u.la('|)'),
                  u.la('Differential'), u.la('End')
                ],
                [u.ra('...')], [u.la(',')], [u.ra(':')],
                [
                  u.la('='), u.la('>'), u.la('<'), u.la('>='), u.la('<='),
                  u.la('~')
                ],
                [u.la('+'), u.la('-')],
                [
                  u.la('*'), u.la('/'), u.la('Decimal'), u.la('MixedNumber'),
                  u.la('Letter'), u.la('Cmd'), u.la('%'), u.r('('), u.la('\\{'),
                  u.la('(|'), u.la('Frac'), u.la('Sqrt'), u.la('Trig'),
                  u.la('Ln'), u.la('Log'), u.ra('Int'), u.ra('Sum'),
                  u.ra('Prod')
                ],
                [u.initial('+'), u.initial('-')], [u.la('!')], [u.la('SupSub')],
                [u.l('['), u.la('.')], [u.l('(')], [u.la('Err')]
              ],
          I = u.precSpec(P), C = I.leftPrec, O = I.rightPrec, A = I.initialPrec,
          L = {trailingComma: !1};
      t.parse = c
    });
define('core/math/inverses', [], function() {
  'use strict';
  var e = {};
  return [
    'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'sinh', 'cosh', 'tanh', 'coth',
    'sech', 'csch'
  ].forEach(function(t) {
    e[t] = 'arc' + t, e['arc' + t] = t
  }),
         e
});
define(
    'core/math/parser/lower',
    [
      'require', 'exports', 'core/math/inverses', 'core/math/errormsg', 'tslib',
      './input-span', './surface-node', '../maybe-rational'
    ],
    function(e, t, r, n, i, a, o, s) {
      'use strict';
      function u(e, t) {
        return l(e, t)
      }
      function c(e, t) {
        for (var r = [], n = 0; n < t.length; n++) r.push(h(e, t[n]));
        return r
      }
      function l(e, t) {
        return e.setInput(p(e, t), t.span)
      }
      function p(e, t) {
        var r = e.nodes;
        switch (t.type) {
          case 'Equals':
            var i = t.args, a = i[0], s = i[1];
            if ('Call' === a.type) {
              var u = a.args, l = u[0], p = u[1], m = o.unwrapSeq(p);
              if (o.isIdentifier(l) && m.every(o.isIdentifier))
                return r.FunctionDefinition(h(e, l), c(e, m), h(e, s))
            } else if (o.isIdentifier(a))
              return r.Assignment(h(e, a), h(e, s));
            return r.Equation(h(e, a), h(e, s));
          case 'Tilde':
            var y = c(e, t.args), a = y[0], s = y[1];
            return r.Regression(a, s);
          case 'Inequality':
            return S(e, t);
          case 'InequalityChain':
            if (t.chain.length > 1) throw n.inequalityChainTooLong();
            var g = t.first, v = g.symbol, b = g.args, x = b[0], _ = b[1],
                M = t.chain[0], E = M.symbol, w = M.args[0];
            return o.isIdentifier(_) ?
                r.DoubleInequality([h(e, x), v, h(e, _), E, h(e, w)]) :
                S(e, t);
          case 'Seq':
            if (!t.args.every(f)) throw n.malformedPoint();
            return r.List(c(e, t.args));
          case 'Call':
            var D = t.args, T = D[0], P = D[1];
            if ('Cmd' === T.type) switch (T.val) {
                case 'polygon':
                  return r.Polygon(c(e, o.unwrapSeq(P)));
                case 'histogram':
                  return r.Histogram(c(e, o.unwrapSeq(P)));
                case 'cube':
                case 'sphere':
                case 'cone':
                case 'dodecahedron':
                case 'octahedron':
                case 'tetrahedron':
                  return r.Object3D(c(e, o.unwrapSeq(P)), T.val);
                case 'dotplot':
                  return r.DotPlot(c(e, o.unwrapSeq(P)));
                case 'boxplot':
                  return r.BoxPlot(c(e, o.unwrapSeq(P)));
                case 'ttest':
                  return r.TTest(c(e, o.unwrapSeq(P)));
                case 'ittest':
                  return r.IndependentTTest(c(e, o.unwrapSeq(P)));
                case 'stats':
                  return r.Stats(c(e, o.unwrapSeq(P)));
                default:
                  return d(e, t)
              }
            return d(e, t);
          default:
            return d(e, t)
        }
      }
      function f(e) {
        if ('Paren' !== e.type) return !1;
        var t = e.args[0];
        return 'Seq' === t.type && 2 === t.args.length
      }
      function h(e, t) {
        return e.setInput(d(e, t), t.span)
      }
      function d(e, t) {
        var r = e.nodes;
        switch (t.type) {
          case 'Pos':
            return d(e, t.args[0]);
          case 'Neg':
            for (var i = -1, u = t.args[0];;)
              if ('Pos' === u.type || 'Paren' === u.type)
                u = u.args[0];
              else {
                if ('Neg' !== u.type) break;
                u = u.args[0], i *= -1
              }
            switch (u.type) {
              case 'Decimal':
                var l = E(u);
                return r.Constant(-1 === i ? s.neg(l) : l);
              case 'MixedNumber':
                var l = w(u);
                return r.MixedNumber(-1 === i ? s.neg(l) : l);
              default:
                return -1 === i ? r.Negative([h(e, u)]) : d(e, u)
            }
          case 'Add':
            return r.Add(c(e, t.args));
          case 'Sub':
            return r.Subtract(c(e, t.args));
          case 'Mul':
            return r.Multiply(c(e, t.args));
          case 'Div':
            return r.Divide(c(e, t.args));
          case 'Bang':
            var p = t.args[0];
            return 'Call' === p.type ?
                r.FunctionFactorial(c(e, p.args)) :
                r.FunctionCall('\\factorial', c(e, t.args));
          case 'PercentOf':
            return r.PercentOf(c(e, t.args));
          case 'Call':
            return b(e, t);
          case 'ImplicitCall':
            return M(t), b(e, t);
          case 'Dot':
            var f = t.args[1], m = c(e, t.args), y = m[0], g = m[1];
            if ('Cmd' === f.type && 'random' === f.val) {
              var v = a.emptySpanAt(f.span.input, f.span.end),
                  _ = e.setInput(C(e), v);
              g = e.setInput(r.SeededFunctionCall(g, [_]), f.span)
            }
            return r.DotAccess([y, g]);
          case 'Prime':
            var S = t.args[0];
            if ('Call' === S.type) {
              var P = S.args, I = P[0], A = P[1], L = o.unwrapSeq(A).length;
              if ('Cmd' === I.type && 'logbase' === I.val) {
                if (2 !== L) throw n.primedFunctionArity()
              } else if (1 !== L)
                throw n.primedFunctionArity();
              return r.Prime(t.nprimes, c(e, t.args))
            }
            throw 'ImplicitCall' === S.type ? n.primeWithoutParen() :
                                              n.unexpectedPrime();
          case 'Index':
            return r.ListAccess(c(e, t.args));
          case 'Paren':
            var N = t.args[0];
            return 'Seq' === N.type ? r.OrderedPair(c(e, N.args)) : d(e, N);
          case 'List':
            var q = t.args[0];
            if ('Ellipsis' === q.type) {
              var F = q.args, R = F[0], V = F[1];
              return r.Range(
                  [r.List(c(e, o.unwrapSeq(R))), r.List(c(e, o.unwrapSeq(V)))])
            }
            return r.List(c(e, o.unwrapSeq(q)));
          case 'Pipes':
            return r.FunctionCall('\\abs', c(e, t.args));
          case 'Subscript':
            var k = t.args, B = k[0], j = k[1];
            if (0 === j.val.length) throw n.emptySubscript();
            var z = void 0;
            switch (B.type) {
              case 'Letter':
              case 'Cmd':
                z = B.val;
                break;
              default:
                throw n.unexpectedSubscript()
            }
            return r.Identifier(z + '_' + j.val);
          case 'Superscript':
            var G = t.args, B = G[0], U = G[1];
            return 'Call' !== B.type || 'Seq' === B.args[1].type || D(B) ?
                'Dot' === B.type ?
                r.DotAccessExponent(c(e, [B.args[0], B.args[1], U])) :
                r.Exponent(c(e, t.args)) :
                r.FunctionExponent(c(e, [B.args[0], B.args[1], U]));
          case 'Sqrt':
            return r.FunctionCall('sqrt', c(e, t.args));
          case 'Nthroot':
            return r.FunctionCall('nthroot', c(e, [t.args[1], t.args[0]]));
          case 'Frac':
            return r.Divide(c(e, t.args));
          case 'Derivative':
            var W = c(e, t.args);
            if (!o.isIdentifier(t.args[0])) throw n.parseError();
            return r.Derivative(W[0], [W[1]]);
          case 'Integral':
            var Y = t.args, X = Y[0], H = Y[1], Q = Y[2], J = Y[3],
                W = c(e, [X, H, Q, J]);
            return r.Integral(W);
          case 'EmptyIntegral':
            var Z = c(e, t.args), X = Z[0], K = Z[1], Q = Z[2],
                J = r.Constant(s.maybeRational(1, 1));
            return r.Integral([X, K, Q, J]);
          case 'Sum':
            var $ = t.args, ee = $[0], te = $[1], Q = $[2];
            if ('Equals' != te.type) throw n.incorrectSumLowerBound();
            if (!o.isIdentifier(te.args[0])) throw n.incorrectSumLowerBound();
            var W = c(e, [te.args[0], te.args[1], Q]), re = h(O(e, W[0]), ee);
            return r.Sum(W.concat(re));
          case 'Product':
            var ne = t.args, ee = ne[0], ie = ne[1], Q = ne[2];
            if ('Equals' != ie.type) throw n.incorrectProductLowerBound();
            if (!o.isIdentifier(ie.args[0]))
              throw n.incorrectProductLowerBound();
            var W = c(e, [ie.args[0], ie.args[1], Q]), re = h(O(e, W[0]), ee);
            return r.Product(W.concat(re));
          case 'Juxt':
            return r.Multiply(c(e, t.args));
          case 'Letter':
            return r.Identifier(t.val);
          case 'Cmd':
            var ae = t.val;
            if ('ans' === ae) {
              if (void 0 === e.currentIndex) throw n.badAnsContext();
              return r.Ans('ans_{' + (e.currentIndex - 1) + '}')
            }
            if ('approx' === ae) throw n.unrecognizedSymbol(ae);
            return r.Identifier(ae);
          case 'Decimal':
            return r.Constant(E(t));
          case 'MixedNumber':
            return r.MixedNumber(w(t));
          case 'Piecewise':
            return x(e, t);
          case 'EmptyPiecewise':
            if (!r.Piecewise.empty) throw n.featureUnavailable();
            return r.Piecewise.empty();
          case 'Equals':
            throw n.unexpectedSymbol('=');
          case 'Inequality':
          case 'InequalityChain':
            throw n.unexpectedInequality();
          case 'Tilde':
            throw n.unexpectedSymbol('~');
          case 'Seq':
            throw n.unexpectedSymbol(',');
          case 'Colon':
            throw n.unexpectedSymbol(':');
          case 'Ellipsis':
            throw n.unexpectedSymbol('...');
          case 'Err':
            throw T(t.error);
          default:
            throw 'Unexpected surface node ' + t.type + '.'
        }
      }
      function m(e) {
        return r.hasOwnProperty(e)
      }
      function y(e) {
        return 'ln' === e || 'log' === e || 'logbase' === e
      }
      function g(e) {
        return 'Decimal' === e.type && '2' === e.val
      }
      function v(e) {
        return 'Neg' === e.type &&
            (e = e.args[0], 'Decimal' === e.type && '1' === e.val)
      }
      function b(e, t) {
        var i = e.nodes, s = t.args, u = s[0], l = s[1], p = h(e, u),
            f = o.unwrapSeq(l), d = c(e, f);
        if ('Cmd' === u.type && 'random' === u.val) {
          var b = a.emptySpanAt(l.span.input, l.span.start),
              x = e.setInput(C(e), b);
          return i.SeededFunctionCall(p, [x].concat(d))
        }
        if (o.isIdentifier(u)) return i.FunctionCall(p, d);
        if ('Superscript' === u.type) {
          var _ = u.args, S = _[0], M = _[1];
          if ('Cmd' === S.type) {
            var E = S.val;
            if (m(E) || y(E)) {
              if (g(M)) return i.Exponent([i.FunctionCall(E, d), h(e, M)]);
              if (v(M) && void 0 !== r[E]) return i.FunctionCall(r[E], d);
              throw m(E) ? n.badTrigExponent(E) :
                           n.badLogExponent('logbase' === E ? 'log' : E)
            }
          }
        }
        return i.Multiply([p, h(e, l)])
      }
      function x(e, t) {
        var r, i = e.nodes, a = t.args[0], u = o.unwrapSeq(a), c = [];
        e: for (r = 0; r < u.length; r++) {
          var l = u[r];
          switch (l.type) {
            case 'Colon':
              var p = l.args, f = p[0], d = p[1];
              if (!_(f)) throw n.colonMissingCondition();
              c.push({condition: S(e, f), if_expr: h(e, d)});
              break;
            case 'Equals':
            case 'Inequality':
            case 'InequalityChain':
              c.push({
                condition: S(e, l),
                if_expr: i.Constant(s.maybeRational(1, 1))
              });
              break;
            default:
              break e
          }
        }
        if (0 === r) throw n.piecewiseMissingCondition();
        if (r < u.length - 1) throw n.piecewisePartMissingCondition();
        if (r === u.length - 1 &&
                c.push({condition: i.Constant(!0), if_expr: h(e, u[r])}),
            !i.Piecewise.chain)
          throw n.featureUnavailable();
        return i.Piecewise.chain(c)
      }
      function _(e) {
        return 'Equals' === e.type || 'Inequality' === e.type ||
            'InequalityChain' === e.type
      }
      function S(e, t) {
        var r = e.nodes;
        switch (t.type) {
          case 'Equals':
            return r.Comparator['='](c(e, t.args));
          case 'Inequality':
            return r.Comparator[t.symbol](c(e, t.args));
          case 'InequalityChain':
            if (t.chain.length > 1) throw n.inequalityChainTooLong();
            var i = t.first, s = i.symbol, u = i.args, l = u[0], p = u[1],
                f = t.chain[0], h = f.symbol, d = f.args[0],
                m = a.emptySpanAt(t.span.input, t.span.start);
            return r.And([
              S(e, o.Inequality(m, s, [l, p])), S(e, o.Inequality(m, h, [p, d]))
            ]);
          default:
            throw n.parseError()
        }
      }
      function M(e) {
        var t = e.args, r = t[0], i = t[1];
        if ('Superscript' === r.type && (r = r.args[0]),
            'Cmd' === r.type && 'logbase' === r.val && 'Seq' === i.type &&
                2 === i.args.length) {
          if (!I(i.args[0])) throw n.badImplicitCall('log')
        } else if (!I(i)) {
          if ('Cmd' === r.type) throw n.badImplicitCall(r.val);
          throw n.parseError()
        }
      }
      function E(e) {
        return s.fromDecimalString(e.val)
      }
      function w(e) {
        var t = s.fromDecimalString(e.whole), r = s.fromDecimalString(e.num),
            n = s.fromDecimalString(e.den);
        return s.add(t, s.div(r, n))
      }
      function D(e) {
        if ('Call' !== e.type) return !1;
        for (var t = e.args[0]; 'Superscript' === t.type ||
             'Subscript' === t.type || 'Prime' === t.type;)
          t = t.args[0];
        return 'Cmd' === t.type && (m(t.val) || y(t.val))
      }
      function T(e) {
        switch (e.type) {
          case 'UnexpectedParseError':
          case 'MissingBound':
          case 'EmptyGroup':
          case 'UnexpectedDifferential':
          case 'UnexpectedEnd':
            return n.parseError();
          case 'InvalidOperatorName':
            return n.invalidOperatorName();
          case 'UnexpectedCloseDelimiter':
          case 'MissingCloseDelimiter':
            return n.mismatchedBraces(e.open, e.close);
          case 'UnrecognizedSymbol':
            return '.' === e.val ? n.unexpectedSymbol(e.val) :
                                   n.unrecognizedSymbol(e.val);
          case 'EmptyInput':
            return n.blankExpression();
          case 'BinaryOperatorMissingRight':
          case 'BinaryOperatorMissingLeft':
            return n.binaryOperatorMissingOperand(
                '%' === e.val ? '% of' : e.val);
          case 'UnaryOperatorMissingLeft':
            return n.unaryOperatorMissingLeft(e.val);
          case 'UnaryOperatorMissingRight':
            return n.unaryOperatorMissingRight(e.val);
          case 'UnexpectedSubscript':
            return n.cannotSubscript(e.base);
          case 'PercentMissingOf':
            return n.percentMissingOf();
          case 'SumMissingBound':
            return n.sumMissingBound();
          case 'ProductMissingBound':
            return n.productMissingBound();
          case 'IntegralMissingBound':
            return n.integralMissingBound();
          case 'SumMissingBody':
            return n.sumMissingBody();
          case 'ProductMissingBody':
            return n.productMissingBody();
          case 'IntegralMissingBody':
            return n.integralMissingBody();
          case 'DerivativeMissingBody':
            return n.derivativeMissingBody();
          case 'IntegralMissingDifferential':
            return n.integralMissingDifferential();
          case 'DifferentialWithSuperscript':
            return n.differentialWithSuperscript();
          case 'FractionMissingNumerator':
            return n.fractionMissingNumerator();
          case 'FractionMissingDenominator':
            return n.fractionMissingDenominator();
          case 'FractionEmpty':
            return n.fractionEmpty();
          case 'EmptySuperscript':
            return n.emptySuperscript();
          case 'EmptySubscript':
            return n.emptySubscript();
          case 'InvalidSubscript':
            return n.invalidSubscript(e.val);
          case 'SuperscriptWithPrime':
            return n.superscriptWithPrime();
          case 'PrimeWithoutParen':
            return n.primeWithoutParen();
          case 'UnexpectedPrime':
            return n.unexpectedPrime();
          case 'EmptyRadical':
            return n.emptyRadical();
          case 'EmptyRadicalIndex':
            return n.emptyRadicalIndex();
          case 'EmptySquareBracket':
            return n.emptySquareBracket();
          case 'EmptyPipe':
            return n.emptyPipe();
          case 'FunctionMissingArgument':
            return n.wrongArity(e.val, 1, 0);
          case 'AdjacentNumbers':
            return n.adjacentNumbers(P(e.args[0]), P(e.args[1]));
          default:
            throw 'Unexpected surface node ' + e.type + '.'
        }
      }
      function P(e) {
        switch (e.type) {
          case 'Decimal':
            return e.val;
          case 'MixedNumber':
            return e.whole + ' ' + e.num + '/' + e.den;
          default:
            var t = e;
            throw new Error('Unexpected node type ' + t.type)
        }
      }
      function I(e) {
        switch (e.type) {
          case 'Letter':
          case 'Decimal':
          case 'MixedNumber':
          case 'Cmd':
          case 'EmptyPiecewise':
            return !0;
          case 'Neg':
            for (var t = e.args[0];;)
              if ('Pos' === t.type || 'Paren' === t.type)
                t = t.args[0];
              else {
                if ('Neg' !== t.type) break;
                t = t.args[0]
              }
            return 'Decimal' === t.type || 'MixedNumber' === t.type;
          case 'Pos':
          case 'Paren':
            return I(e.args[0]);
          case 'Juxt':
          case 'Mul':
          case 'Div':
            return I(e.args[0]) && I(e.args[1]);
          case 'Subscript':
            return I(e.args[0]);
          case 'Superscript':
          case 'Frac':
          case 'Add':
          case 'Sub':
            return I(e.args[0]) && I(e.args[1]);
          case 'Piecewise':
            var t = e.args[0];
            return 'Equals' === t.type || 'Inequality' === t.type ||
                'InequalityChain' === t.type;
          case 'Call':
            var r = e.args, n = r[0], i = r[1];
            return !o.isIdentifier(n) && !o.isSuperscriptedIdentifier(n) &&
                (I(n) && I(i));
          case 'Derivative':
          case 'Sqrt':
          case 'Nthroot':
          case 'Pipes':
          case 'Bang':
            return !1;
          case 'Neg':
          case 'Equals':
          case 'Inequality':
          case 'InequalityChain':
          case 'Tilde':
          case 'ImplicitCall':
          case 'Index':
          case 'List':
          case 'Seq':
          case 'Integral':
          case 'EmptyIntegral':
          case 'Sum':
          case 'Product':
          case 'Colon':
          case 'Ellipsis':
          case 'Dot':
          case 'PercentOf':
          case 'Prime':
            return !1;
          default:
            throw 'Unexpected surface node ' + e.type + '.'
        }
      }
      function C(e) {
        var t = e.nodes.ExtendSeed('', [
          e.nodes.Identifier('globalRandomSeed'), e.nodes.Seed(e.nextSeed())
        ]);
        if (!e.seedExtensions) return t;
        for (var r = 0, n = e.seedExtensions; r < n.length; r++) {
          var i = n[r];
          t = e.nodes.ExtendSeed('ro', [t, i])
        }
        return t
      }
      function O(e, t) {
        var r = e.seedExtensions || [];
        return i.__assign(i.__assign({}, e), {seedExtensions: r.concat(t)})
      }
      Object.defineProperty(t, '__esModule', {value: !0}), t.lower = u
    });
define(
    'core/math/baseparser',
    [
      'require', 'exports', 'core/math/errormsg', 'parsenodes',
      'core/math/parser/latex-parser', 'core/math/parser/expression-parser',
      'core/math/parser/lower'
    ],
    function(e, t, r, n, i, a, o) {
      'use strict';
      function s() {
        throw r.featureUnavailable()
      }
      function u(e, t) {
        return e.setInputSpan(t), e
      }
      function c(e, t) {
        var c = typeof e;
        if ('string' !== c)
          throw new Error(
              'Type Error: parse can only be called with strings, got ' +
              JSON.stringify(e) + ' of type ' + c);
        t = t || {};
        var l = n;
        if (t.disabledFeatures) {
          l = Object.create(l);
          for (var p = 0, f = t.disabledFeatures; p < f.length; p++) {
            var h = f[p];
            if (!l[h])
              throw new Error(
                  'Programming Error: ' + h +
                  ' cannot be disabled because it is not a parsenode.');
            l[h] = s
          }
        }
        var d = void 0 === t.seedPrefix ? '' : t.seedPrefix, m = 0,
            y =
                function() {
              var e = d + '::vc' + m;
              return m += 1, e
            },
            g = {nodes: l, currentIndex: t.index, setInput: u, nextSeed: y},
            v = {};
        void 0 !== t.trailingComma && (v.trailingComma = t.trailingComma),
            t.disallowFrac && (v.disallowFrac = !0);
        try {
          var b = i.parse(e), x = a.parse(b, v);
          return o.lower(g, x)
        } catch (e) {
          return e instanceof n.Error ? e :
              'string' == typeof e    ? n.Error(e) :
                                        r.parseError()
        }
      }
      Object.defineProperty(t, '__esModule', {value: !0}), t.parse = c
    });
define(
    'core/math/rational-arithmetic-sequence',
    ['require', 'core/math/distance', 'core/math/builtin'], function(e) {
      'use strict';
      function t(e, t) {
        var i = n.toFraction(e), a = n.toFraction(t);
        if (r.approx(i.n / i.d, e) && r.approx(a.n / a.d, t)) {
          var o = n.lcm(i.d, a.d), s = i.n * (o / i.d);
          return {
            nstart: s, nstep: a.n * (o / a.d) - s, lcm: o
          }
        }
      }
      var r = e('core/math/distance'), n = e('core/math/builtin');
      return t
    });
define('core/math/sliders', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e, t) {
    var r = Math.round(1e6 * e) / 1e6;
    return Math.abs(r - e) < t ? r : e
  }
  function n(e) {
    var t = !0, r = !0, n = !0;
    if (void 0 !== e.hardMin && e.target < e.hardMin && (t = !1),
        void 0 !== e.hardMax && e.target > e.hardMax && (r = !1), e.step) {
      i({
        target: e.target,
        step: e.step,
        hardMin: t ? e.hardMin : void 0,
        hardMax: r ? e.hardMax : void 0
      }) !== e.target &&
          (n = !1)
    }
    return {
      min: t, max: r, step: n
    }
  }
  function i(e) {
    var t = e.target, n = e.hardMin, i = e.hardMax, a = e.step, o = 1e-10;
    if (void 0 !== n && void 0 !== i &&
            (o = Math.min(o, Math.abs(i - n) / 1e3)),
        a && (o = Math.min(o, a / 10)), void 0 !== n && (n = r(n, o)),
        void 0 !== i && (i = r(i, o)), n > i)
      return n;
    if (t <= n) return n;
    if (t >= i) return i;
    if (a) {
      var s = void 0 !== n ? n : 0;
      t = a * Math.round((t - s) / a) + s
    }
    var u = r(t, o);
    return a           ? t = u :
               n === u ? t = u :
                         i === u && (t = u),
               t <= n ? n :
               t >= i ? i :
                        t
  }
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.roundToReasonableDecimal = r,
      t.determineWhichLimitsAreCompatibleWithValue = n,
      t.constrainSliderValueLikeEvaluator = i
});
define(
    'core/math/features/getConcreteTree',
    [
      'require', 'parsenodes', 'core/math/errormsg', 'core/math/types',
      'core/lib/label', 'core/math/distance', 'core/math/maybe-rational',
      'core/math/rational-arithmetic-sequence', 'core/math/sliders'
    ],
    function(e) {
      'use strict';
      function t(e, t, r, n) {
        for (var i = [], a = 0; a < e.length; a++)
          i.push(e[a].getConcreteTree(t, r, n));
        return i
      }
      function r() {
        return this.getDependencies().concat([this._symbol])
      }
      function n(e) {
        return e === d.Distribution || d.isList(e)
      }
      function i(e, t, r, i) {
        var a = i.length - 1, o = e[t];
        if (!o) throw h.unexpectedSymbol('.');
        if (o.isError) throw o;
        if (!o.isFunction) throw h.unexpectedSymbol('.');
        if (!o.allowDotCalls) throw h.illegalDotCall(r);
        var s, u = 'random' === t;
        if (s = u ? i[1].valueType : i[0].valueType, !n(s))
          throw h.dotLHSTypeError('.' + r, d.prettyPrint(s));
        if (a < o.dotMinArity) {
          if (u) throw h.randomArity();
          throw h.wrongArity('.' + r, o.dotMinArity, a)
        }
        if (a > o.dotMaxArity) {
          if (u) throw h.randomArity();
          throw h.wrongArity('.' + r, o.dotMaxArity, a)
        }
      }
      function a(e, r, n, a, o, s) {
        var u = t(n, a, o, s);
        return i(o, e, r, u), o[e].getConcreteInvocationTree(a, o, u, r, s)
      }
      function o(e, t) {
        return e.isError                  ? e :
            -1 === t.indexOf(e.valueType) ? h.parseError() :
                                            e
      }
      function s(e, t, r) {
        if (!t) return void (r.valids[e] = !0);
        var n = t.getDependencies();
        if (t.isError)
          r.errors[e] = !0;
        else if (n.length > 0) {
          r.errors[e] = !0;
          for (var i = 0; i < n.length; i++)
            n[i] === r.exportedSymbol ? r.errors.cycle = !0 :
                                        r.missingVars.push(n[i])
        } else
          r.values[e] = t.asValue();
        r.valids[e] = isFinite(r.values[e]),
        r.valids[e] || (r.values[e] = void 0)
      }
      function u(e, t, r, n, i, a) {
        if (n < t.length && !y.approx(a, t.elementAt(e, n).asValue(), 10))
          throw h.nonArithmeticRange();
        if (i - n <= r.length && i - n > 1 &&
            !y.approx(a, r.elementAt(e, r.length - i + n).asValue(), 10))
          throw h.nonArithmeticRange()
      }
      function c(e, t) {
        for (var r = !1, n = !1, i = 0; i < e.length; i++) {
          var a = e[i];
          (a.isList || a.isBroadcast) && (n = !0);
          for (var o = a.getDependencies(), s = 0; s < o.length; s++)
            if (-1 !== t.indexOf(o[s])) {
              if (a.isList || a.isBroadcast) return 'list'
            } else
              r = !0
        }
        return n ? r ? 'broadcast' : 'list' : 'none'
      }
      function l(e) {
        var t, r = [], n = [], i = [];
        for (t = 0; t < e.length; t++) {
          var a, o = e[t];
          if (o.isList) {
            for (var s = !1, u = 0; u < i.length; u++)
              if (o === i[u]) {
                s = !0, a = f.DummyIndex(n[u]),
                a.valueType = d.elementType(o.valueType), r.push(a);
                break
              }
            if (!s) {
              var c = f.Base.prototype.tmpVar();
              n.push(c), i.push(o), a = f.DummyIndex(c),
                                    a.valueType = d.elementType(o.valueType),
                                    r.push(a)
            }
          } else
            o.isBroadcast ? (Array.prototype.push.apply(n, o._replacedSymbols),
                             Array.prototype.push.apply(i, o._lists),
                             r.push(o._expression)) :
                            r.push(o)
        }
        return {
          replacedArgs: i, concreteArgs: r, replacedSymbols: n
        }
      }
      function p(e, t, r) {
        if (r && r[this.type]) return r[this.type].call(this, e, t, r);
        if (!t[this._symbol]) throw h.functionUnsupported(this._symbol);
        var n = this.args.map(function(r) {
          return r.getConcreteTree(e, t)
        });
        if (n.length > 0) {
          if (1 === n.length && n.push(f.Constant(1)),
              n[1].getDependencies().length)
            throw h.illegalBinWidth(this._symbol)
                .setDependencies(n[1].getDependencies());
          if (n[1].valueType !== d.Number)
            throw h.illegalBinWidth(this._symbol);
          var i = n[1].asValue();
          if (!isFinite(i) || i <= 0) throw h.illegalBinWidth(this._symbol)
        }
        return this.typeCheck(e, n), new this.constructor(n)
      }
      var f = e('parsenodes'), h = e('core/math/errormsg'),
          d = e('core/math/types'), m = e('core/lib/label'),
          y = e('core/math/distance'), g = e('core/math/maybe-rational'),
          v = g.maybeRational, b = e('core/math/rational-arithmetic-sequence'),
          x = f.List, _ = f.OrderedPair, S = f.ScalarExpression, M = f.Constant,
          E = f.ExtendSeed, w = f.Multiply, D = f.Identifier, T = f.DummyIndex,
          P = f.BuiltInFunction, I = e('core/math/sliders');
      f.Base.prototype
          .tryGetConcreteTree =
          function() {
        var e;
        try {
          e = this.getConcreteTree.apply(this, arguments)
        } catch (t) {
          e = t instanceof f.Base ? t : h.parseError()
        }
        return e
      },
          f.Base.prototype
              .getConcreteTree =
              function(e, t, r) {
            if (r) return this._getConcreteTree(e, t, r);
            if (this.isConcreteTreeCacheValid(t))
              return this.__cachedConcreteTree.value;
            for (var n = this._getConcreteTree(e, t, r), i = {},
                     a = this.getCacheKeys().slice();
                 ;) {
              if (!a.length) break;
              var o = a.pop();
              if (!i.hasOwnProperty(o)) {
                var s = t[o];
                i[o] = s, s && Array.prototype.push.apply(a, s.getCacheKeys())
              }
            }
            return this.__cachedConcreteTree = {keys: i, value: n}, n
          },
          f.Base.prototype
              .getCacheKeys =
              function() {
            return this.getDependencies()
          },
          f.Histogram
              .prototype.getCacheKeys = r,
   f.Object3D.prototype.getCacheKeys = r, f.DotPlot.prototype.getCacheKeys = r,
   f.BoxPlot.prototype.getCacheKeys = r, f.TTest.prototype.getCacheKeys = r,
   f.IndependentTTest.prototype.getCacheKeys = r,
   f.Base.prototype.isConcreteTreeCacheValid =
          function(e) {
     if (!this.__cachedConcreteTree) return !1;
     for (var t in this.__cachedConcreteTree.keys)
       if (this.__cachedConcreteTree.keys.hasOwnProperty(t) &&
           e[t] !== this.__cachedConcreteTree.keys[t])
         return !1;
     return !0
   },
   f.PercentOf.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ? r[this.type].call(this, e, t, r) :
                                f.Divide([
                                   f.Multiply(this.args), f.Constant(v(100, 1))
                                 ]).getConcreteTree(e, t, r)
   },
   f.Assignment.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ? r[this.type].call(this, e, t, r) :
                                this._expression.getConcreteTree(e, t, r)
   },
   f.Identifier.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n = m.latexToIdentifier(this.getInputString()), i = t[this._symbol];
     if (i) {
       if (i.isError) throw i;
       if (i.isFunction) throw h.identifierAsFunction(n);
       return i.getConcreteTree(e, t, r)
     }
     if (P.hasOwnProperty(this._symbol)) throw h.functionUnsupported(n);
     return f.FreeVariable(this._symbol)
   },
   f.Ans.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     if (void 0 === t[this._symbol]) throw h.ansUndefined();
     return D.prototype._getConcreteTree.call(this, e, t, r)
   },
   f.Equation.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ? r[this.type].call(this, e, t, r) :
                                this.asComparator().getConcreteTree(e, t, r)
   },
   f.Constant.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ? r[this.type].call(this, e, t, r) :
                                new this.constructor(this._constantValue)
   },
   f.Seed.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ? r[this.type].call(this, e, t, r) :
                                new this.constructor(this._stringValue)
   },
   f.Derivative.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n;
     if (t[this._symbol]) {
       var i = Object.create(t);
       i[this._symbol] = f.FreeVariable(this._symbol);
       var a = t[this._symbol].getConcreteTree(e, t, r);
       if (a.valueType !== d.Number && a.valueType !== d.ListOfNumber)
         throw h.derivativeVariableTypeError(
             this._symbol, [d.prettyPrint(a.valueType)]);
       var o = {};
       return o[this._symbol] = a, n = this.args[0].getConcreteTree(e, i, r),
              this.typeCheck(e, [n]),
              n.takeDerivative(this._symbol)
                  .substitute(o)
                  .getConcreteTree(e, t, r)
     }
     return n = this.args[0].getConcreteTree(e, t, r), this.typeCheck(e, [n]),
            n.takeDerivative(this._symbol).getConcreteTree(e, t, r)
   },
   f.DoubleInequality.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ?
         r[this.type].call(this, e, t, r) :
         new this.constructor([
           f.Piecewise([
              this._indicator, this._expressions[0], M(NaN)
            ]).getConcreteTree(e, t, r),
           this._operators[0], D(this._symbol), this._operators[1],
           f.Piecewise([
              this._indicator, this._expressions[1], M(NaN)
            ]).getConcreteTree(e, t, r)
         ])
   },
   f.Expression.prototype._getConcreteTree =
          function(e, r, n) {
     if (n && n[this.type]) return n[this.type].call(this, e, r, n);
     var i = t(this.args, e, r, n);
     return this.typeCheck(e, i), this._constantCollapsedCopy(e, i)
   },
   f.Error.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ? r[this.type].call(this, e, t, r) : this
   },
   f.FreeVariable.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ? r[this.type].call(this, e, t, r) : this
   },
   f.FunctionCall.prototype._getConcreteTree =
          function(e, r, n) {
     if (n && n[this.type]) return n[this.type].call(this, e, r, n);
     var i = 'logbase' === this._symbol ?
         'log' :
         m.latexToIdentifier(this._identifier.getInputString()),
         a = r[this._symbol];
     if (a && a.isError) throw a;
     if (!a || !a.isFunction) {
       if (P.hasOwnProperty(this._symbol))
         throw 'logbase' === this._symbol && r.ln && r.log ?
             h.logbaseUnsupported() :
             h.functionUnsupported(i);
       if (a && a.getConcreteTree(e, r, n).valueType === d.Distribution)
         throw h.distributionAsFunction(a._symbol);
       if (1 == this.args.length) {
         var o = [D(this._symbol), this.args[0]];
         return w(o).getConcreteTree(e, r, n)
       }
       if (a) throw h.variableAsFunction(i);
       throw h.functionNotDefined(i)
     }
     var s = t(this.args, e, r, n);
     return a.getConcreteInvocationTree(e, r, s, i, n)
   },
   f.DotAccess.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n, i, o = this.args[0], s = this.args[1];
     if (s instanceof f.Identifier)
       return 'x' === s._symbol ?
           f.OrderedPairAccess([o, f.Constant(1)]).getConcreteTree(e, t, r) :
           'y' === s._symbol ?
           f.OrderedPairAccess([o, f.Constant(2)]).getConcreteTree(e, t, r) :
           (i = m.latexToIdentifier(s.getInputString()), n = [o],
            a(s._symbol, i, n, e, t, r));
     if (s instanceof f.SeededFunctionCall)
       return i = m.latexToIdentifier(s._identifier.getInputString()),
              n = [s.seed, o].concat(s.args.slice(1)),
              a(s._symbol, i, n, e, t, r);
     if (s instanceof f.FunctionCall)
       return 'x' === s._symbol && 1 === s.args.length ?
           f.Multiply([
              f.OrderedPairAccess([o, f.Constant(1)]), s.args[0]
            ]).getConcreteTree(e, t, r) :
           'y' === s._symbol && 1 === s.args.length ?
           f.Multiply([
              f.OrderedPairAccess([o, f.Constant(2)]), s.args[0]
            ]).getConcreteTree(e, t, r) :
           (i = m.latexToIdentifier(s._identifier.getInputString()),
            n = [o].concat(s.args), a(s._symbol, i, n, e, t, r));
     throw h.unexpectedSymbol('.')
   },
   f.DotAccessExponent.prototype._getConcreteTree =
          function(e, t, r) {
     return r && r[this.type] ?
         r[this.type].call(this, e, t, r) :
         'FunctionCall' !== this.args[1].type ||
             1 !== this.args[1].args.length ||
             t[this.args[1]._symbol] && t[this.args[1]._symbol].isFunction ?
         f.Exponent([
            f.DotAccess([this.args[0], this.args[1]]), this.args[2]
          ]).getConcreteTree(e, t, r) :
         f.Multiply([
            f.DotAccess([this.args[0], f.Identifier(this.args[1]._symbol)]),
            f.Exponent([this.args[1].args[0], this.args[2]])
          ]).getConcreteTree(e, t, r)
   },
   f.FunctionExponent.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n = this.args[0]._symbol;
     return t[n] && t[n].isFunction ?
         f.Exponent([
            f.FunctionCall(n, [this.args[1]]), this.args[2]
          ]).getConcreteTree(e, t, r) :
         w([
           this.args[0], f.Exponent([this.args[1], this.args[2]])
         ]).getConcreteTree(e, t, r)
   },
   f.FunctionFactorial.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n = this.args[0]._symbol;
     return t[n] && t[n].isFunction ?
         f.FunctionCall('\\factorial', [f.FunctionCall(n, [this.args[1]])])
             .getConcreteTree(e, t, r) :
         w([
           this.args[0], f.FunctionCall('\\factorial', [this.args[1]])
         ]).getConcreteTree(e, t, r)
   },
   f.FunctionDefinition.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     for (var n = 0; n < this._argSymbols.length; n++) {
       if (t[this._argSymbols[n]])
         throw h.parameterAlreadyDefined(this._argSymbols[n]);
       if (this._argSymbols[n] === this._symbol)
         throw h.parameterAlreadyDefined(this._argSymbols[n])
     }
     return this._expression.getConcreteTree(e, t, r)
   },
   f.Image.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n = this.center.tryGetConcreteTree(e, t, r),
         i = this.radianAngle.tryGetConcreteTree(e, t, r),
         a = this.width.tryGetConcreteTree(e, t, r),
         s = this.height.tryGetConcreteTree(e, t, r),
         u = this.opacity.tryGetConcreteTree(e, t, r),
         c = [d.Point, d.ListOfPoint], l = [d.Number, d.ListOfNumber];
     return n = o(n, c), i = o(i, l), a = o(a, l), s = o(s, l), u = o(u, l),
            f.Image(
                {center: n, radianAngle: i, width: a, height: s, opacity: u},
                this.moveStrategy)
   },
   f.Slider.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n = this._expression.getConcreteTree(e, t, r),
         i = this.sliderMin && this.sliderMin.tryGetConcreteTree(e, t, r),
         a = this.sliderMax && this.sliderMax.tryGetConcreteTree(e, t, r),
         o = this.sliderStep && this.sliderStep.tryGetConcreteTree(e, t, r),
         u = {
           exportedSymbol: this._symbol,
           errors: {},
           values: {},
           valids: {},
           missingVars: [],
           errMsg: void 0
         };
     if (s('min', i, u), s('max', a, u), s('step', o, u),
         o && u.valids.step &&
             (0 === u.values.step ? delete u.values.step :
                                    u.values.step = Math.abs(u.values.step)),
         u.errors.cycle ?
             n = h.sliderLimitReferencesExport(u.exportedSymbol) :
             (u.errors.min || !u.valids.min ? u.errMsg = h.sliderMinInvalid() :
                  u.errors.max || !u.valids.max ?
                                              u.errMsg = h.sliderMaxInvalid() :
                                              !u.errors.step && u.valids.step ||
                      (u.errMsg = h.sliderStepInvalid()),
              u.values.min > u.values.max &&
                  (u.valids.min = !1, u.valids.max = !1,
                   u.errMsg || (u.errMsg = h.sliderMaxLessThanMin()))),
         n.isConstant) {
       var c = I.constrainSliderValueLikeEvaluator({
         target: n.asValue(),
         hardMin: u.values.min,
         hardMax: u.values.max,
         step: u.values.step
       }),
           l = g.fromDecimalString(c.toString()),
           p = isFinite(g.asFloat(l)) ? l : c;
       n = M(p)
     }
     return n.sliderInfo = u, n
   },
   f.Integral.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     if (t[this._differential._symbol])
       throw h.shadowedIntegrationVariable(this._differential._symbol);
     var n = this.args[0], i = this.args[1].getConcreteTree(e, t),
         a = this.args[2].getConcreteTree(e, t);
     if (i.dependsOn(n._symbol) || a.dependsOn(n._symbol))
       throw h.badIntegralBoundDependency(n._symbol);
     var o = Object.create(t);
     return o[this._differential._symbol] = T(this._differential._symbol),
            S.prototype._getConcreteTree.call(this, e, o, r)
   },
   f.ListAccess.prototype._getConcreteTree =
          function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n = this.index.getConcreteTree(e, t, r),
         i = this.list.getConcreteTree(e, t, r), a = [i, n];
     return this.typeCheck(e, a), this._constantCollapsedCopy(e, a)
   },
   f.List.prototype._getConcreteTree =
          function(e, r, n) {
     if (n && n[this.type]) return n[this.type].call(this, e, r, n);
     var i = t(this.args, e, r, n);
     return this.typeCheck(e, i), new this.constructor(i)
   },
   f.ParametrizedReducerFunction.prototype._getConcreteTree =
          function(e, r, n) {
     if (n && n[this.type]) return n[this.type].call(this, e, r, n);
     if (this.args[0] instanceof f.List &&
         this.args[0].valueType === d.ListOfDistribution)
       return f.List(f.List.mapArgs(e, [this.args[0]], function(t) {
         return this.copyWithArgs([t[0], this.args[1]]).getConcreteTree(e, r, n)
       }.bind(this)));
     if (this.args[0] instanceof f.Distribution)
       return this.args[0][this._symbol](this.args.slice(1))
           .getConcreteTree(e, r, n);
     var i = t(this.args, e, r, n);
     switch (c([i[1]], this.getDummyDependencies())) {
       case 'none':
         return this.typeCheck(e, i), this._constantCollapsedCopy(e, i);
       case 'list':
         return f.List(f.List.mapArgs(e, [i[1]], function(t) {
           return t = [i[0]].concat(t), this.typeCheck(e, t),
                  this._constantCollapsedCopy(e, t)
         }.bind(this)));
       case 'broadcast':
         var a = l([i[1]]), o = [i[0]].concat(a.concreteArgs);
         return this.typeCheck(e, o),
                f.Broadcast(
                    a.replacedSymbols,
                    [this.copyWithArgs(o)].concat(a.replacedArgs))
     }
   },
   f.Prime.prototype._getConcreteTree = function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n = this.args[0], i = n.args[0];
     if (!t[n._symbol]) throw h.functionNotDefined(n._symbol);
     var a, o = this.tmpVar();
     if ('logbase' === n._symbol) {
       if (2 !== n.args.length) throw h.primedFunctionArity();
       a = [D(o), n.args[1]]
     } else {
       if (1 !== n.args.length) throw h.primedFunctionArity();
       a = [D(o)]
     }
     for (var s = n.copyWithArgs(a).getConcreteTree(e, t, r), u = 0;
          u < this.order; u++)
       s = s.takeDerivative(o);
     var c = {};
     return c[o] = i, s.substitute(c).getConcreteTree(e, t, r)
   }, f.Range.prototype._getConcreteTree = function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     var n = this.beginning.getConcreteTree(e, t, r),
         i = this.end.getConcreteTree(e, t, r);
     if (n.getDependencies().length) throw h.variableRange(n.getDependencies());
     if (i.getDependencies().length) throw h.variableRange(i.getDependencies());
     if (!n.isList || !i.isList)
       throw new Error('Programming Error: range bounds must be List nodes.');
     var a, o, s = n.elementAt(e, 0).asValue(),
               c = i.elementAt(e, i.length - 1).asValue(), l = c - s;
     if (1 === n.length)
       a = l >= 0 ? 1 : -1;
     else {
       var p = n.elementAt(e, 1).asValue();
       o = b(s, p), a = n.elementAt(e, 1).asValue() - s
     }
     var f = Math.round(l / a) + 1;
     if (!isFinite(f) || f < n.length || f < i.length)
       throw h.nonArithmeticRange();
     var d, m, y = [];
     if (o) {
       var g = o.nstart;
       for (d = 0; d < f; d++)
         u(e, n, i, d, f, g / o.lcm), y.push(M(v(g, o.lcm))), g += o.nstep
     } else
       for (y.push(M(s)), d = 1; d < f; d++)
         m = s + d * a, u(e, n, i, d, f, m), y.push(M(v(m, 1)));
     return x(y)
   }, f.ReducerFunction.prototype._getConcreteTree = function(e, r, n) {
     if (n && n[this.type]) return n[this.type].call(this, e, r, n);
     if (this.args[0] instanceof f.List &&
         this.args[0].valueType === d.ListOfDistribution &&
         'length' !== this._symbol)
       return f.List(f.List.mapArgs(e, this.args, function(t) {
         return this.copyWithArgs(t).getConcreteTree(e, r, n)
       }.bind(this)));
     if (this.args[0] instanceof f.Distribution && 'length' !== this._symbol)
       return this.args[0][this._symbol]().getConcreteTree(e, r, n);
     var i = t(this.args, e, r, n);
     if (1 === this.args.length)
       return i = [f.List.wrap(i[0])], this.typeCheck(e, i),
              this._constantCollapsedCopy(e, i);
     switch (c(i, this.getDummyDependencies())) {
       case 'none':
         return i = [f.List(i)], this.typeCheck(e, i),
                this._constantCollapsedCopy(e, i);
       case 'list':
         return f.List(f.List.mapArgs(e, i, function(t) {
           return t = [f.List(t)], this.typeCheck(e, t),
                  this._constantCollapsedCopy(e, t)
         }.bind(this)));
       case 'broadcast':
         var a = l(i);
         return i = [f.List(a.concreteArgs)], this.typeCheck(e, i),
                f.Broadcast(
                    a.replacedSymbols,
                    [this.copyWithArgs(i)].concat(a.replacedArgs))
     }
   }, f.RepeatedOperator.prototype._getConcreteTree = function(e, t, r) {
     if (r && r[this.type]) return r[this.type].call(this, e, t, r);
     if (t[this._index._symbol]) throw h.shadowedIndex(this._index._symbol);
     var n = this.args[1].getConcreteTree(e, t),
         i = this.args[2].getConcreteTree(e, t);
     if (n.dependsOn(this._index._symbol) || i.dependsOn(this._index._symbol))
       throw this instanceof f.Sum ?
           h.badSumBoundDependency(this._index._symbol) :
           this instanceof f.Product ?
           h.badProductBoundDependency(this._index._symbol) :
           h.parseError();
     var a = Object.create(t);
     return a[this._index._symbol] = T(this._index._symbol),
            S.prototype._getConcreteTree.call(this, e, a, r)
   };
      var C = function(e, r, n) {
        if (n && n[this.type]) return n[this.type].call(this, e, r, n);
        var i = t(this.args, e, r, n);
        switch (c(i, this.getDummyDependencies())) {
          case 'none':
            return this.typeCheck(e, i), this._constantCollapsedCopy(e, i);
          case 'list':
            return f.List(f.List.mapArgs(e, i, function(t) {
              return this.typeCheck(e, t), this._constantCollapsedCopy(e, t)
            }.bind(this)));
          case 'broadcast':
            var a = l(i);
            return this.typeCheck(e, a.concreteArgs),
                   f.Broadcast(a.replacedSymbols, [
                     this.copyWithArgs(a.concreteArgs)
                   ].concat(a.replacedArgs))
        }
      };
      f.ScalarExpression.prototype
          ._getConcreteTree = C,
          f.Object3D.prototype
              ._getConcreteTree = C,
    f.Regression.prototype._getConcreteTree =
          function(e, t, r) {
      return r && r[this.type] ? r[this.type].call(this, e, t, r) :
                                 new this.constructor(this._lhs, this._rhs)
    },
    f.Polygon.prototype._getConcreteTree =
          function(e, t, r) {
      if (r && r[this.type]) return r[this.type].call(this, e, t, r);
      var n = this.args.map(function(r) {
        return r.getConcreteTree(e, t)
      });
      return this.typeCheck(e, n),
             1 === n.length && n[0].valueType === d.ListOfPoint ?
                 new this.constructor(n) :
                 n.every(function(e) {
                   return e.valueType === d.Point
                 }) ?
                 new this.constructor([x(n)]) :
                 2 === n.length ?
                 new this.constructor([_(this.args).getConcreteTree(e, t)]) :
                 h.parseError()
    },
    f.Histogram.prototype._getConcreteTree = p,
    f.DotPlot.prototype._getConcreteTree = p,
    f.BoxPlot.prototype._getConcreteTree = function(e, t, r) {
      if (r && r[this.type]) return r[this.type].call(this, e, t, r);
      if (!t[this._symbol]) throw h.functionUnsupported(this._symbol);
      var n = this.args.map(function(r) {
        return r.getConcreteTree(e, t)
      });
      return this.typeCheck(e, n),
             1 === n.length && n[0].valueType === d.ListOfNumber ?
                 new this.constructor(n) :
                 h.parseError()
    }, f.TTest.prototype._getConcreteTree = function(e, t, r) {
      if (r && r[this.type]) return r[this.type].call(this, e, t, r);
      if (!t[this._symbol]) throw h.functionUnsupported(this._symbol);
      var n = this.args.map(function(r) {
        return r.getConcreteTree(e, t)
      });
      return this.typeCheck(e, n), new this.constructor(n)
    }, f.IndependentTTest.prototype._getConcreteTree = function(e, t, r) {
      if (r && r[this.type]) return r[this.type].call(this, e, t, r);
      if (!t[this._symbol]) throw h.functionUnsupported(this._symbol);
      var n = this.args.map(function(r) {
        return r.getConcreteTree(e, t)
      });
      return this.typeCheck(e, n), new this.constructor(n)
    }, f.SolvedEquation.prototype._getConcreteTree = function(e, t, r) {
      return r && r[this.type] ?
          r[this.type].call(this, e, t, r) :
          new this.constructor(
              this._symbol, this._expression.getConcreteTree(e, t, r))
    }, f.Table.prototype._getConcreteTree = function(e, t, r) {
      if (r && r[this.type]) return r[this.type].call(this, e, t, r);
      for (var n = [], i = Object.create(t), a = 0; a < this.columns.length;
           a++) {
        var o = this.columns[a].getConcreteTree(e, i, t, r);
        o.isIndependent && this.columns[a].exportToLocal(o, i), n.push(o)
      }
      return new this.constructor(n)
    }, f.TableColumn.prototype._getConcreteTree = function(e, t, r) {
      var n, i, a = this.header.getConcreteTree(e, t);
      if (a.isFreeVariable) {
        n = [];
        for (var o = 0; o < this.values.length; o++)
          if (this.values[o].tableError())
            n.push(h.invalidTableEntry(this.values[o].tableError()));
          else {
            var s = this.values[o].tryGetConcreteTree(e, t);
            s.isError ?
                n.push(s) :
                s.tableError() ?
                n.push(h.invalidTableEntry(s.tableError())) :
                s.valueType === d.Number ?
                n.push(s) :
                n.push(h.tableEntryTypeError([d.prettyPrint(s.valueType)]))
          }
        return i = new this.constructor(a, this.length, n),
               i.isIndependent = !0, i
      }
      if (a.isConstant) {
        for (var u = [], c = 0; c < this.length; c++) u.push(a);
        n = u
      } else
        n = a.isList ? a.args.slice() : [];
      return a = this.header.getConcreteTree(e, r),
             a.isError || a.valueType === d.Number ||
                 a.valueType === d.ListOfNumber ||
                 (a = h.tableHeaderTypeError([d.prettyPrint(a.valueType)])),
             i = new this.constructor(a, this.length, n)
    }, f.BuiltInFunction.pdf.prototype._getConcreteTree = function(e, t, r) {
      if (r && r[this.type]) return r[this.type].call(this, e, t, r);
      if (this.args[0] instanceof x)
        return f.List(f.List.mapArgs(e, this.args, function(n) {
          return this.copyWithArgs(n).getConcreteTree(e, t, r)
        }.bind(this)));
      if (this.typeCheck(e, this.args),
          !(this.args[0] instanceof f.Distribution))
        throw h.functionTypeError(
            this._symbol, [d.prettyPrint(this.args[0].valueType)]);
      return this.args[0].pdf([this.args[1]]).getConcreteTree(e, t, r)
    }, f.BuiltInFunction.cdf.prototype._getConcreteTree = function(e, t, r) {
      if (r && r[this.type]) return r[this.type].call(this, e, t, r);
      var n = this.args;
      if (2 === n.length && (n = [n[0], f.Constant(-1 / 0), n[1]]),
          n[0] instanceof f.List)
        return f.List(f.List.mapArgs(e, n, function(n) {
          return this.copyWithArgs(n).getConcreteTree(e, t, r)
        }.bind(this)));
      if (this.typeCheck(e, n), !(n[0] instanceof f.Distribution))
        throw h.functionTypeError(
            this._symbol, [d.prettyPrint(n[0].valueType)]);
      return n[0].cdf(n.slice(1)).getConcreteTree(e, t, r)
    }, f.BuiltInFunction.random.prototype._getConcreteTree = function(e, t, r) {
      if (r && r[this.type]) return r[this.type].call(this, e, t, r);
      var n = this.args;
      (n.length <= 1 ||
       !(n[1] instanceof f.Distribution) && !(n[1] instanceof f.List) &&
           n.length < 4) &&
          (n = [n[0], P.uniformdist([])].concat(n.slice(1)));
      var i = n[0], a = n[1], o = n[2], s = n[3];
      if (this.typeCheck(e, n.slice(1)), o && o.getDependencies().length)
        throw h.variableSampleSize(o.getDependencies());
      if (s && s.getDependencies().length)
        throw h.variableSeed(s.getDependencies());
      if (s && (i = E('us', [i, s])), o) {
        var u = o.asValue();
        if (u < 1) throw h.badSampleSize();
        u = Math.round(u);
        for (var c, l = [], p = 0; p < u; p++)
          c = E('lc', [i, M(v(p, 1))]),
          l.push(a.sample([c]).getConcreteTree(e, t, r));
        return x(l)
      }
      return a.sample([i]).getConcreteTree(e, t, r)
    }
    });
define(
    'core/math/features/getValueType',
    ['require', 'parsenodes', 'core/math/types'], function(e) {
      'use strict';
      function t() {
        return s.Number
      }
      function r() {
        return s.Bool
      }
      function n() {
        return s.Point
      }
      function i() {
        return s.Distribution
      }
      function a() {
        return s.Any
      }
      var o = e('parsenodes'), s = e('core/math/types'), u = {
        Add: t,
        Multiply: t,
        Divide: t,
        Subtract: t,
        Exponent: t,
        Negative: t,
        And: r,
        Piecewise: function(e) {
          return e[1].valueType
        },
        BaseComparator: r,
        RepeatedOperator: t,
        List: function(e) {
          if (0 === e.length) return s.ListOfAny;
          for (var t = e[0].valueType, r = 1; r < e.length; r++)
            if (e[r].valueType !== t) return s.ListOfAny;
          return s.hasListType(t) ? s.listType(t) : s.ListOfAny
        },
        ListAccess: function(e) {
          return s.elementType(e[0].valueType)
        },
        Broadcast: function(e) {
          return s.listType(e[0].valueType)
        },
        Seed: function(e) {
          return s.SeedType
        },
        ExtendSeed: function(e) {
          return s.SeedType
        },
        OrderedPairAccess: t,
        OrderedPair: n,
        NativeFunction: t,
        ReducerFunction: t,
        DoubleReducerFunction: t,
        ParametrizedReducerFunction: t,
        Distribution: i,
        DummyIndex: t,
        FreeVariable: t,
        TypedFunction: function() {
          return this._outputType
        },
        Derivative: t,
        Integral: t,
        Identifier: a
      };
      for (var c in u) o[c].prototype._getValueType = u[c]
    });
define(
    'core/math/features/typeCheck',
    ['require', 'parsenodes', 'core/math/types', 'core/math/errormsg'],
    function(e) {
      'use strict';
      function t(e) {
        for (var t = [], r = 0; r < e.length; r++)
          t.push(a.prettyPrint(e[r].valueType));
        return t
      }
      function r(e, r) {
        return function(n, i) {
          for (var a = 0; a < i.length; a++)
            if (i[a].valueType !== e[a]) throw r(t(i))
        }
      }
      function n(e, t) {
        var r = t.length;
        if (r < 2) throw o.methodRequiresList(this._symbol);
        if (t[0].valueType !== a.ListOfNumber)
          throw o.methodRequiresList(this._symbol);
        if (r > 2) throw o.tooManyArguments(this._symbol, 2)
      }
      var i = e('parsenodes'), a = e('core/math/types'),
          o = e('core/math/errormsg'), s = {
            Add: r([a.Number, a.Number], o.addTypeError),
            Multiply: r([a.Number, a.Number], o.multiplyTypeError),
            Divide: r([a.Number, a.Number], o.divideTypeError),
            Subtract: r([a.Number, a.Number], o.subtractTypeError),
            Exponent: r([a.Number, a.Number], o.exponentTypeError),
            Negative: r([a.Number], o.negativeTypeError),
            BaseComparator: r([a.Number, a.Number], o.comparatorTypeError),
            And: r([a.Bool, a.Bool], o.andTypeError),
            ExtendSeed: function(e, t) {
              if (2 !== t.length || t[0].valueType !== a.SeedType ||
                  t[1].valueType !== a.SeedType && t[1].valueType !== a.Number)
                throw o.functionUnsupported('random')
            },
            List: function(e, t) {
              if (0 !== t.length) {
                var r = t[0].valueType;
                if (!a.hasListType(r))
                  throw o.listTypeError([a.prettyPrint(r)]);
                for (var n = 0; n < t.length; n++) {
                  var i = t[n].valueType;
                  if (!a.hasListType(i))
                    throw o.listTypeError([a.prettyPrint(i)]);
                  if (i !== r) throw o.heterogeneousList()
                }
              }
            },
            Broadcast: function(e, t) {},
            Distribution: function(e, t) {},
            OrderedPair: function(e, t) {
              if (0 === t.length) throw o.emptyParen();
              if (e.dimensions && t.length !== e.dimensions())
                throw o.badTupleDimensions(e.dimensions());
              for (var r = 0; r < t.length; r++) {
                var n = t[r].valueType;
                if (n !== a.Number) throw o.pointTypeError(a.prettyPrint(n))
              }
            },
            Piecewise: function(e, r) {
              if (r[0].valueType !== a.Bool)
                throw o.piecewiseConditionTypeError(t(r));
              if (r[1].valueType !== a.Number)
                throw o.piecewiseBranchTypeError(
                    [a.prettyPrint(r[1].valueType)]);
              if (r[2].valueType !== a.Number)
                throw o.piecewiseBranchTypeError(
                    [a.prettyPrint(r[2].valueType)])
            },
            ListAccess: function(e, r) {
              if (!a.isList(r[0].valueType) || r[1].valueType !== a.Number)
                throw o.indexTypeError(t(r))
            },
            OrderedPairAccess:
                r([a.Point, a.Number], o.orderedPairAccessTypeError),
            Sum: function(e, t) {
              if (t[1].valueType !== a.Number)
                throw o.sumLowerBoundTypeError([a.prettyPrint(t[1].valueType)]);
              if (t[2].valueType !== a.Number)
                throw o.sumUpperBoundTypeError([a.prettyPrint(t[2].valueType)]);
              if (t[3].valueType !== a.Number)
                throw o.sumArgumentTypeError([a.prettyPrint(t[3].valueType)])
            },
            Product: function(e, t) {
              if (t[1].valueType !== a.Number)
                throw o.productLowerBoundTypeError(
                    [a.prettyPrint(t[1].valueType)]);
              if (t[2].valueType !== a.Number)
                throw o.productUpperBoundTypeError(
                    [a.prettyPrint(t[2].valueType)]);
              if (t[3].valueType !== a.Number)
                throw o.productArgumentTypeError(
                    [a.prettyPrint(t[3].valueType)])
            },
            Integral: function(e, t) {
              if (t[1].valueType !== a.Number)
                throw o.integralLowerBoundTypeError(
                    [a.prettyPrint(t[1].valueType)]);
              if (t[2].valueType !== a.Number)
                throw o.integralUpperBoundTypeError(
                    [a.prettyPrint(t[2].valueType)]);
              if (t[3].valueType !== a.Number)
                throw o.integralArgumentTypeError(
                    [a.prettyPrint(t[3].valueType)])
            },
            NativeFunction: function(e, r) {
              var n = this._errorSymbol, i = r.length,
                  s = 'logbase' === this._symbol ? 1 : 0;
              if (i < this._requiredArity)
                throw o.wrongArity(n, this._requiredArity - s, i - s);
              if (i > this._maxArity)
                throw o.wrongArity(n, this._maxArity - s, i - s);
              for (var u = 0; u < r.length; u++) {
                if (r[u].valueType !== a.Number)
                  throw o.functionTypeError(n, t(r))
              }
            },
            ReducerFunction: function(e, r) {
              if (r[0].valueType !== a.ListOfNumber)
                throw o.functionTypeError(this._symbol, t(r))
            },
            DoubleReducerFunction: function(e, r) {
              if (!a.isList(r[0].valueType) || !a.isList(r[1].valueType))
                throw o.nonListDoubleReducer(this._symbol);
              if (r[0].valueType !== a.ListOfNumber ||
                  r[1].valueType !== a.ListOfNumber)
                throw o.functionTypeError(this._symbol, t(r))
            },
            ParametrizedReducerFunction: function(e, r) {
              if (r[0].valueType !== a.ListOfNumber)
                throw o.nonListParametrizedReducer(this._symbol);
              if (r[1].valueType !== a.Number)
                throw o.functionTypeError(this._symbol, t(r))
            },
            TypedFunction: function(e, r) {
              var n = this._errorSymbol, i = r.length,
                  a = 'pdf' === this._symbol, s = 'cdf' === this._symbol;
              if (i < this._requiredArity) {
                if (a) throw o.pdfWrongArity();
                if (s) throw o.cdfRequiresArguments();
                throw o.wrongArity(n, this._requiredArity, i)
              }
              if (i > this._maxArity) {
                if (a) throw o.pdfWrongArity();
                if (s) throw o.cdfTooManyArguments();
                throw o.wrongArity(n, this._maxArity, i)
              }
              for (var u = 0; u < r.length; u++) {
                var c = r[u].valueType, l = this._inputTypes[u],
                    p = Array.isArray(l);
                if (!p && c !== l || p && -1 === l.indexOf(c))
                  throw o.functionTypeError(n, t(r))
              }
            },
            Derivative: function(e, r) {
              if (r[0].valueType !== a.Number &&
                  r[0].valueType !== a.ListOfNumber)
                throw o.derivativeTypeError(t(r))
            },
            Regression: function(e, r) {
              if (r[0].valueType !== a.Number &&
                      r[0].valueType !== a.ListOfNumber ||
                  r[1].valueType !== a.Number &&
                      r[1].valueType !== a.ListOfNumber)
                throw o.regressionTypeError(t(r))
            },
            Polygon: function(e, r) {
              if (1 === r.length && r[0].valueType !== a.ListOfPoint)
                throw o.polygonListTypeError(t(r));
              if (2 === r.length && r[0].valueType === a.Number &&
                  r[1].valueType === a.Number)
                throw o.polygonTwoNumbersError();
              if (r.length > 2 && !r.every(function(e) {
                    return e.valueType === a.Point
                  }))
                throw o.polygonPointArgsError()
            },
            Object3D: function(e, t) {
              if (t.length < 3) throw o.wrongArity(this._symbol, 3, t.length)
            },
            Histogram: n,
            DotPlot: n,
            BoxPlot: function(e, t) {
              var r = t.length, n = t[0];
              if (0 === r) throw o.methodRequiresList(this._symbol);
              if (n.valueType !== a.ListOfNumber)
                throw o.methodRequiresList(this._symbol);
              if (r > 1) throw o.methodRequiresList(this._symbol)
            },
            TTest: function(e, r) {
              var n = this._symbol;
              if (0 === r.length) throw o.methodRequiresList(n);
              if (r[0].valueType !== a.ListOfNumber)
                throw o.methodRequiresList(n);
              if (r.length > 2) throw o.tooManyArguments(n, 2);
              if (r[0].length < 2) throw o.ttestListTooShort(n);
              if (r[1] && r[1].valueType !== a.Number)
                throw o.functionTypeError(n, t(r))
            },
            IndependentTTest: function(e, r) {
              var n = this._symbol;
              if (2 !== r.length) throw o.wrongDoubleReducerArity(n);
              if (!a.isList(r[0].valueType) || !a.isList(r[1].valueType))
                throw o.nonListDoubleReducer(n);
              if (r[0].valueType !== a.ListOfNumber ||
                  r[1].valueType !== a.ListOfNumber)
                throw o.functionTypeError(n, t(r));
              if (r[0].args.length < 2 || r[1].args.length < 2)
                throw o.ttestListTooShort('ittest')
            },
            Stats: function(e, t) {
              var r = t.length, n = t[0];
              if (0 === r) throw o.methodRequiresList(this._symbol);
              if (n.valueType !== a.ListOfNumber)
                throw o.methodRequiresList(this._symbol);
              if (r > 1) throw o.methodRequiresList(this._symbol)
            }
          };
      for (var u in s) i[u].prototype.typeCheck = s[u];
      i.BuiltInFunction.random.prototype.typeCheck = function(e, t) {
        var r = t.length, n = t[0], s = t[1], u = t[2];
        if (r > 3) throw o.randomArity();
        if (!n) throw o.randomArity();
        if (!(n instanceof i.Distribution || n instanceof i.List))
          throw o.randomArity();
        if (n instanceof i.Distribution && n.args &&
            (n.args[0] instanceof i.List || n.args[1] instanceof i.List))
          throw o.randomFromBroadcastDistribution();
        if (s && s.valueType !== a.Number) throw o.randomArity();
        if (u && u.valueType !== a.Number) throw o.randomArity()
      }, i.BuiltInFunction.length.prototype.typeCheck = function(e, t) {
        if (1 !== t.length || !a.isList(t[0].valueType)) throw o.parseError()
      }
    });
define('core/math/features/repr', ['require', 'parsenodes'], function(e) {
  'use strict';
  var t = e('parsenodes'), r = function(e, t, r) {
    r = r || 0;
    var n = Array(r + 1).join('  '), i = n + '  ';
    return '[\n' + i + e.map(function(e) {
                          return e.repr(t, r + 1)
                        }).join(',\n' + i) +
        '\n' + n + ']'
  }, n = function(e, t) {
    return '' + (t = t || '') + e
  };
  t.Expression.prototype.repr = function(e, t) {
    return n(this.type, e) + '(' + r(this.args, e, t) + ')'
  }, t.DoubleInequality.prototype.repr = function(e, t) {
    t = t || 0;
    var r = Array(t + 1).join('  '), i = r + '  ';
    return n(this.type, e) + '([\n' + i + this.args[0].repr(e, t + 1) + ',\n' +
        i + '\'' + this.args[1] + '\',\n' + i + this.args[2].repr(e, t + 1) +
        ',\n' + i + '\'' + this.args[3] + '\',\n' + i +
        this.args[4].repr(e, t + 1) + '\n' + r + '])'
  }, t.Identifier.prototype.repr = t.FreeVariable.prototype.repr = function(e) {
    return n(this.type, e) + '(\'' + this._symbol + '\')'
  }, t.Constant.prototype.repr = function(e) {
    return n(this.type, e) + '(' + this.asValue() + ')'
  }, t.ExtendSeed.prototype.repr = function(e, t) {
    return n(this.type, e) + '(\'' + this.tag + '\', ' + r(this.args, e, t) +
        ')'
  }, t.Seed.prototype.repr = function(e) {
    return n(this.type, e) + '(' + this.asValue() + ')'
  }, t.FunctionCall.prototype.repr = function(e, t) {
    return n(this.type, e) + '(\'' + this._symbol + '\', ' +
        r(this.args, e, t) + ')'
  }, t.Assignment.prototype.repr = function(e, r) {
    return n(this.type, e) + '(' + t.Identifier(this._symbol).repr(e, r) +
        ', ' + this._expression.repr(e, r) + ')'
  }, t.Regression.prototype.repr = t.Equation.prototype.repr = function(e, t) {
    return n(this.type, e) + '(' + this._lhs.repr(e, t) + ', ' +
        this._rhs.repr(e, t) + ')'
  }, t.FunctionDefinition.prototype.repr = function(e, i) {
    return n(this.type, e) + '(' + t.Identifier(this._symbol).repr(e, i) +
        ', ' +
        r(this._argSymbols.map(function(e) {
             return t.Identifier(e)
           }),
          e, i) +
        ', ' + this._expression.repr(e, i) + ')'
  }, t.Error.prototype.repr = function(e, t) {
    return n(this.type, e) + '(\'' + this._msg + '\')'
  }, t.Derivative.prototype.repr = function(e, t) {
    return n(this.type, e) + '(\'' + this._symbol + '\', ' +
        r(this.args, e, t) + ')'
  }, t.SolvedEquation.prototype.repr = function(e, t) {
    return n(this.type, e) + '(\'' + this._symbol + '\', ' +
        this._expression.repr(e, t) + ')'
  }, t.OptimizedRegression.prototype.repr = function(e, t) {
    return n(this.type, e) + '(' + JSON.stringify(this.parameters) + ', ' +
        JSON.stringify(this.residuals) + ', ' +
        JSON.stringify(this.statistics) + ', ' + this.model.repr(e, t + 1) +
        ', ' + JSON.stringify({
          isModelValid: this.isModelValid,
          residualVariable: this.residualVariable,
          residualSuggestionId: this.residualSuggestionId,
          shouldSuggestLogMode: this.shouldSuggestLogMode
        }) +
        ')'
  }, t.Table.prototype.repr = function(e, t) {
    return n(this.type, e) + '(' + r(this.columns, e, t) + ')'
  }, t.TableColumn.prototype.repr = function(e, t) {
    return n(this.type, e) + '(' + this.header.repr(e, t) + ', ' + this.length +
        ', ' + r(this.values, e, t) + ')'
  }, t.Image.prototype.repr = function(e, t) {
    var r = Array(t + 1).join('  '), i = r + '  ';
    return n(this.type, e) + '({\n' + i +
        'center: ' + this.center.repr(e, t + 1) + ',\n' + i +
        'radianAngle: ' + this.radianAngle.repr(e, t + 1) + ',\n' + i +
        'width: ' + this.width.repr(e, t + 1) + ',\n' + i +
        'height: ' + this.height.repr(e, t + 1) + '},\n' + i +
        'opacity: ' + this.opacity.repr(e, t + 1) + ',\n' + i +
        JSON.stringify(this.moveStrategy) + '\n' + r + ')'
  }, t.Slider.prototype.repr = function(e, t) {
    var r = Array(t + 1).join('  '), i = r + '  ';
    return n(this.type, e) + '({\n' + i +
        'sliderAssignment: ' + this.sliderAssignment.repr(e, t + 1) + ',\n' +
        i + 'sliderMin: ' + (this.sliderMin && this.sliderMin.repr(e, t + 1)) +
        ',\n' + i +
        'sliderMax: ' + (this.sliderMax && this.sliderMax.repr(e, t + 1)) +
        ',\n' + i +
        'sliderStep: ' + (this.sliderStep && this.sliderStep.repr(e, t + 1)) +
        '},\n' + r + ')'
  }, t.Broadcast.prototype.repr = function(e, t) {
    return n(this.type, e) + '([\'' + this._replacedSymbols.join('\', ') +
        '\'], ' + r(this.args, e, t) + ')'
  }
});
define(
    'core/math/features/scalarEvalExpression',
    ['require', 'parsenodes', 'core/math/functions'], function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/math/functions'), n = {
        Add: function(e) {
          return '(' + e.join('+') + ')'
        },
        Multiply: function(e) {
          return '(' + e.join('*') + ')'
        },
        Divide: function(e) {
          return '(' + e.join('/') + ')'
        },
        Subtract: function(e) {
          return '(' + e.join('-') + ')'
        },
        Exponent: function(e) {
          return 'BuiltIn.pow(' + e.join(',') + ')'
        },
        RawExponent: function(e) {
          return 'Math.pow(' + e.join(',') + ')'
        },
        Negative: function(e) {
          return '(-' + e[0] + ')'
        },
        And: function(e) {
          return e.join('&&')
        },
        Piecewise: function(e) {
          return '(' + e[0] + '?' + e[1] + ':' + e[2] + ')'
        }
      },
          i = {
            Add: 2,
            Multiply: 2,
            Divide: 2,
            Subtract: 2,
            Exponent: 2,
            RawExponent: 2,
            Negative: 1,
            And: 2,
            Piecewise: 3
          };
      for (var a in n) {
        var o = t[a].prototype;
        o.scalarEvalExpression = n[a],
        o.evaluate = r.createEvaluateFunction(o.scalarEvalExpression, i[a])
      }
    });
define(
    'core/math/reconstitute-node', ['require', 'parsenodes', 'core/math/types'],
    function(e) {
      'use strict';
      function t(e, i) {
        if (n.isList(e)) {
          for (var a = [], o = 0; o < i.length; o++)
            a.push(t(n.elementType(e), i[o]));
          var s = r.List(a);
          return s.valueType = e, s
        }
        switch (e) {
          case n.Number:
          case n.Bool:
            return r.Constant(i);
          case n.Point:
            return r.OrderedPair([r.Constant(i[0]), r.Constant(i[1])]);
          default:
            throw new Error(
                'Cannot reconstitute value of a ' + n.prettyPrint(e) + '.')
        }
      }
      var r = e('parsenodes'), n = e('core/math/types');
      return t
    });
define(
    'core/math/features/constantcollapsedcopy',
    [
      'require', 'parsenodes', 'core/math/reconstitute-node',
      'core/math/maybe-rational', 'core/math/errormsg'
    ],
    function(e) {
      'use strict';
      function t(e) {
        if (!e.isConstant) return !1;
        var t = e.asValue();
        return 'number' == typeof t && !isFinite(t)
      }
      var r = e('parsenodes'), n = r.Constant, i = r.Multiply, a = r.Subtract,
          o = r.RawExponent, s = r.Seed, u = r.BuiltInFunction,
          c = e('core/math/reconstitute-node'),
          l = e('core/math/maybe-rational'), p = e('core/math/errormsg'), f = {
            Expression: function(e, t) {
              return this.copyWithArgs(t)
            },
            FreeVariable: function(e, t) {
              return this
            },
            ScalarExpression: function(e, t) {
              for (var r = [], i = 0; i < t.length; i++) {
                if (!t[i].isConstant && !t[i].isString)
                  return this.copyWithArgs(t);
                r.push(t[i].asValue())
              }
              return n(this.evaluate(r))
            },
            OrderedPair: function(e, t) {
              return this.copyWithArgs(t)
            },
            Distribution: function(e, t) {
              return this.copyWithArgs(t)
            },
            Add: function(e, t) {
              return t[0].isConstant && t[1].isConstant ?
                                         n(l.add(
                      t[0].asMaybeRationalValue(),
                      t[1].asMaybeRationalValue())) :
                  0 === t[0].asValue() ? t[1] :
                  0 === t[1].asValue() ? t[0] :
                                         this.copyWithArgs(t)
            },
            Multiply: function(e, t) {
              return t[0].isConstant && t[1].isConstant ?
                                         n(l.mul(
                      t[0].asMaybeRationalValue(),
                      t[1].asMaybeRationalValue())) :
                  1 === t[0].asValue() ? t[1] :
                  1 === t[1].asValue() ? t[0] :
                                         this.copyWithArgs(t)
            },
            Subtract: function(e, t) {
              return t[0].isConstant && t[1].isConstant ?
                                         n(l.sub(
                      t[0].asMaybeRationalValue(),
                      t[1].asMaybeRationalValue())) :
                  0 === t[0].asValue() ? r.Negative([t[1]]) :
                  0 === t[1].asValue() ? t[0] :
                                         this.copyWithArgs(t)
            },
            Divide: function(e, t) {
              return t[0].isConstant && t[1].isConstant ?
                                         n(l.div(
                      t[0].asMaybeRationalValue(),
                      t[1].asMaybeRationalValue())) :
                  1 === t[1].asValue() ? t[0] :
                                         this.copyWithArgs(t)
            },
            Exponent: function(e, t) {
              if (t[0].isConstant && t[1].isConstant)
                return n(l.pow(
                    t[0].asMaybeRationalValue(), t[1].asMaybeRationalValue()));
              if (t[0].isConstant) {
                if (t[0].asValue() === Math.E) return u.exp([t[1]]);
                if (t[0].asValue() > 0) return o(t)
              }
              if (t[1].isConstant) {
                var r = t[1].asValue();
                if (1 === r) return t[0];
                if (r === Math.floor(r)) return o(t);
                var a = t[1].asMaybeRationalValue();
                return l.isRational(a) ? a.d % 2 == 1 ? i([
                  a.n % 2 == 0 ? n(l.maybeRational(1, 1)) : u.sign([t[0]]),
                  o([u.abs([t[0]]), t[1]])
                ]) :
                                                        o(t) :
                                         this.copyWithArgs(t)
              }
              return this.copyWithArgs(t)
            },
            RawExponent: function(e, t) {
              return t[0].isConstant && t[1].isConstant ?
                  n(l.pow(
                      t[0].asMaybeRationalValue(),
                      t[1].asMaybeRationalValue())) :
                  this.copyWithArgs(t)
            },
            Negative: function(e, t) {
              return t[0].isConstant ? n(l.neg(t[0].asMaybeRationalValue())) :
                  t[0] instanceof r.Negative ? t[0].args[0] :
                                               this.copyWithArgs(t)
            },
            And: function(e, t) {
              return t[0].isConstant && t[1].isConstant ?
                  n(t[0].asValue() && t[1].asValue()) :
                  t[0].isConstant && !0 === t[0] ? t[1] :
                  t[0].isConstant && !1 === t[0] ? n(!1) :
                  t[1].isConstant && !0 === t[1] ? t[0] :
                  t[1].isConstant && !1 === t[1] ? n(!1) :
                                                   this.copyWithArgs(t)
            },
            Piecewise: function(e, t) {
              return t[0].isConstant && !0 === t[0].asValue() ?
                  t[1] :
                  t[0].isConstant && !1 === t[0].asValue() ?
                  t[2] :
                  this.copyWithArgs(t)
            },
            Integral: function(e, r) {
              var o = r[0], s = r[1], u = r[2], c = r[3];
              if (t(s) || t(u)) throw p.integralInfiniteBoundError();
              var l = c.getDependencies();
              if (s.isConstant && u.isConstant) {
                var f = u.asValue() - s.asValue();
                if (c.isConstant) return n(c.asValue() * f);
                if (!c.dependsOn(o._symbol)) return i([c, n(f)]);
                if (1 === l.length && l[0] === o._symbol)
                  return n(this.evaluate(s.asValue(), u.asValue(), c))
              } else if (!c.dependsOn(o._symbol))
                return i([c, a([u, s])]);
              return this.copyWithArgs(r)
            },
            ListAccess: function(e, t) {
              return t[1].isConstant ? t[0].elementAt(e, t[1].asValue() - 1) :
                                       this.copyWithArgs(t)
            },
            OrderedPairAccess: function(e, t) {
              return t[1].isConstant && t[0] instanceof r.OrderedPair ?
                  t[0].elementAt(e, t[1].asValue() - 1) :
                  this.copyWithArgs(t)
            },
            Broadcast: function(e, t) {
              var r, n = t[0].getDependencies();
              for (r = 0; r < n.length; r++)
                if (-1 === this._replacedSymbols.indexOf(n[r]))
                  return this.copyWithArgs(t);
              for (r = 1; r < t.length; r++)
                if (0 !== t[r].getDependencies().length)
                  return this.copyWithArgs(t);
              var i = t[0].getCompiledFunction(this._replacedSymbols).fn,
                  a = t.slice(1).map(function(e) {
                    return e.asValue()
                  }),
                  o = [];
              for (r = 0; r < this.length; r++) {
                for (var s = [], u = 0; u < a.length; u++) s.push(a[u][r]);
                o.push(i.apply(void 0, s))
              }
              return c(this.valueType, o)
            },
            ReducerFunction: function(e, t) {
              return 0 === t[0].getDependencies().length ?
                  c(this.valueType, this.evaluate([t[0].asValue()])) :
                  this.copyWithArgs(t)
            },
            DoubleReducerFunction: function(e, t) {
              if (0 === t[0].getDependencies().length &&
                  0 === t[1].getDependencies().length) {
                var r = Math.min(t[0].length, t[1].length);
                return c(this.valueType, this.evaluate([
                  t[0].asValue().slice(0, r), t[1].asValue().slice(0, r)
                ]))
              }
              return this.copyWithArgs(t)
            },
            ParametrizedReducerFunction: function(e, t) {
              var r = t[0], n = t[1];
              return n.isConstant && 0 === r.getDependencies().length ?
                  c(this.valueType, this.evaluate([r.asValue(), n.asValue()])) :
                  this.copyWithArgs(t)
            },
            RepeatedOperator: function(e, r) {
              var i = r[1], a = r[2];
              if (t(i) || t(a)) switch (this.type) {
                  case 'Sum':
                    throw p.sumInfiniteBoundError();
                  case 'Product':
                    throw p.productInfiniteBoundError();
                  default:
                    throw p.parseError()
                }
              if (i.isConstant && a.isConstant) {
                var o = i.asValue(), s = a.asValue(), u = r[3];
                if (u.isConstant)
                  return n(this.evaluateConstant([o, s, u.asValue()]));
                var c = u.getDependencies();
                if (0 === c.length || 1 === c.length && c[0] === r[0]._symbol)
                  return n(this.evaluate(o, s, u))
              }
              return this.copyWithArgs(r)
            },
            ExtendSeed: function(e, t) {
              var r = t[0], n = t[1];
              return 0 === r.getDependencies().length &&
                      0 === n.getDependencies().length ?
                  s(r.asValue() + '::' + this.tag + n.asValue()) :
                  this.copyWithArgs(t)
            }
          };
      for (var h in f) r[h].prototype._constantCollapsedCopy = f[h];
      u.mod.prototype._constantCollapsedCopy = function(e, t) {
        return t[0].isConstant && t[1].isConstant ?
            n(l.mod(t[0].asMaybeRationalValue(), t[1].asMaybeRationalValue())) :
            this.copyWithArgs(t)
      }, u.sqrt.prototype._constantCollapsedCopy = function(e, t) {
        return t[0].isConstant ? n(l.sqrt(t[0].asMaybeRationalValue())) :
                                 this.copyWithArgs(t)
      }, u.nthroot.prototype._constantCollapsedCopy = function(e, t) {
        return t[0].isConstant && t[1].isConstant ?
            n(l.nthroot(
                t[0].asMaybeRationalValue(), t[1].asMaybeRationalValue())) :
            this.copyWithArgs(t)
      }, u.abs.prototype._constantCollapsedCopy = function(e, t) {
        return t[0].isConstant ? n(l.abs(t[0].asMaybeRationalValue())) :
                                 this.copyWithArgs(t)
      }, u.total.prototype._constantCollapsedCopy = function(e, t) {
        if (!t[0].isList) return this.copyWithArgs(t);
        for (var r = t[0].args, i = 0; i < r.length; i++)
          if (!r[i].isConstant) return this.copyWithArgs(t);
        return n(l.total(t[0].asMaybeRationalValue()))
      }, u.distance.prototype._constantCollapsedCopy = function(e, t) {
        return 0 === t[0].getDependencies().length &&
                0 === t[1].getDependencies().length ?
            n(this.evaluate([t[0].asArray(), t[1].asArray()])) :
            this.copyWithArgs(t)
      }, u.midpoint.prototype._constantCollapsedCopy = function(e, t) {
        if (0 === t[0].getDependencies().length &&
            0 === t[1].getDependencies().length) {
          var i = this.evaluate([t[0].asArray(), t[1].asArray()]);
          return r.OrderedPair([n(i[0]), n(i[1])])
        }
        return this.copyWithArgs(t)
      }
    });
define(
    'core/math/features/polynomialorder', ['require', 'parsenodes'],
    function(e) {
      'use strict';
      var t = e('parsenodes'), r = {
        Expression: 'this.dependsOn(symbol) ? Infinity : 0',
        FreeVariable: '(symbol === this._symbol ? 1 : 0)',
        Constant: '0',
        Add: 'Math.max(order0, order1)',
        Subtract: 'Math.max(order0, order1)',
        Multiply: 'order0 + order1',
        Negative: 'order0',
        Divide: 'order1 > 0 ? Infinity : order0'
      };
      for (var n in r) {
        var i = r[n];
        t[n].prototype.polynomialOrder = function(e) {
          return e = e.replace(
                     'order0', 'this.args[0].polynomialOrder(symbol)'),
                 e = e.replace(
                     'order1', 'this.args[1].polynomialOrder(symbol)'),
                 new Function(['symbol'], 'return ' + e)
        }(i)
      }
      t.Exponent.prototype.polynomialOrder = function(e) {
        var t = this.args[0].polynomialOrder(e),
            r = this.args[1].polynomialOrder(e);
        if (0 === t && 0 === r) return 0;
        var n = this.args[1];
        return n.isConstant && n.asValue() === Math.round(n.asValue()) &&
                n.asValue() > 0 ?
            t * n.asValue() :
            1 / 0
      }, t.Piecewise.prototype.polynomialOrder = function(e) {
        return this.dependsOn(e) ?
            this.args[2].isConstant && this.args[2].isNaN() ?
            this.args[1].polynomialOrder(e) :
            1 / 0 :
            0
      }, t.List.prototype.polynomialOrder = function(e) {
        return 1 / 0
      }
    });
define(
    'core/math/features/polynomialcoefficients',
    ['require', 'parsenodes', 'core/math/maybe-rational'], function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/math/maybe-rational').maybeRational,
          n = t.Constant(r(0, 1)), i = t.Constant(r(1, 1));
      t.FreeVariable.prototype.getPolynomialCoefficients = function(e) {
        return e === this._symbol ? [n, i] : [this]
      }, t.Constant.prototype.getPolynomialCoefficients = function(e) {
        return [this]
      }, t.Add.prototype.getPolynomialCoefficients = function(e) {
        for (var r = this.args[0].getPolynomialCoefficients(e),
                 n = this.args[1].getPolynomialCoefficients(e),
                 i = r.length - 1, a = n.length - 1, o = [], s = 0;
             s <= Math.max(i, a); s++)
          i >= s && a >= s ? o.push(t.Add([r[s], n[s]])) :
                             o.push(i > a ? r[s] : n[s]);
        return o
      }, t.Subtract.prototype.getPolynomialCoefficients = function(e) {
        for (var r = this.args[0].getPolynomialCoefficients(e),
                 n = this.args[1].getPolynomialCoefficients(e),
                 i = r.length - 1, a = n.length - 1, o = [], s = 0;
             s <= Math.max(i, a); s++)
          i >= s && a >= s ? o.push(t.Subtract([r[s], n[s]])) :
                             o.push(i > a ? r[s] : t.Negative([n[s]]));
        return o
      }, t.Negative.prototype.getPolynomialCoefficients = function(e) {
        for (var r = this.args[0].getPolynomialCoefficients(e), n = [], i = 0;
             i < r.length; i++)
          n.push(t.Negative([r[i]]));
        return n
      }, t.Exponent.prototype.getPolynomialCoefficients = function(e) {
        var r = this.args[0].getPolynomialCoefficients(e),
            i = this.args[1].getPolynomialCoefficients(e), a = r.length - 1;
        if (i.length - 1 > 0) throw 'can\'t solve for variable in exponent';
        if (0 === a) return [t.Exponent([r[0], i[0]])];
        if (this.args[1].isConstant) {
          switch (this.args[1].asValue()) {
            case 0:
              return [n];
            case 1:
              return r;
            case 2:
              return t.Multiply([this.args[0], this.args[0]])
                  .getPolynomialCoefficients(e)
          }
        }
        throw 'Unable to compile polynomial representation'
      }, t.Multiply.prototype.getPolynomialCoefficients = function(e) {
        for (var r = this.args[0].getPolynomialCoefficients(e),
                 n = this.args[1].getPolynomialCoefficients(e),
                 i = r.length - 1, a = n.length - 1, o = [], s = 0;
             s <= i; s++)
          for (var u = 0; u <= a; u++) {
            var c = t.Multiply([r[s], n[u]]), l = o[s + u];
            o[s + u] = void 0 === l ? c : t.Add([l, c])
          }
        return o
      }, t.Divide.prototype.getPolynomialCoefficients = function(e) {
        var r = this.args[0].getPolynomialCoefficients(e),
            n = this.args[1].getPolynomialCoefficients(e), i = n.length - 1,
            a = [];
        if (i > 0) throw 'Can\'t solve for variable in denominator';
        for (var o = 0; o < r.length; o++) a.push(t.Divide([r[o], n[0]]));
        return a
      }, t.Expression.prototype.getPolynomialCoefficients = function(e) {
        if (this.dependsOn(e)) throw 'Unimplemented polynomialCoefficient call';
        return [this]
      }, t.Piecewise.prototype.getPolynomialCoefficients = function(e) {
        return this.dependsOn(e) ? this.args[1].getPolynomialCoefficients(e) :
                                   [this]
      }
    });
define(
    'core/math/features/extractconditions', ['require', 'parsenodes'],
    function(e) {
      'use strict';
      var t = e('parsenodes');
      t.Expression.prototype.extractConditions = function(e, t) {
        if (!this.dependsOn(e)) return t;
        for (var r = 0; r < this.args.length; r++) {
          t = this.args[r].extractConditions(e, t)
        }
        return t
      }, t.Piecewise.prototype.extractConditions = function(e, r) {
        if (!this.dependsOn(e)) return r;
        if (!this.args[0].dependsOn(e))
          return r = this.args[1].extractConditions(e, r),
                 r = this.args[2].extractConditions(e, r);
        var n = {};
        return n[e] = r,
               t.Piecewise([this.args[0].substitute(n), r, t.Constant(NaN)])
      }
    });
define(
    'core/math/features/piecewiseDependsOn', ['require', 'parsenodes'],
    function(e) {
      'use strict';
      var t = e('parsenodes');
      t.Expression.prototype.piecewiseDependsOn = function(e) {
        if (!this.dependsOn(e)) return !1;
        for (var t = 0; t < this.args.length; t++) {
          if (this.args[t].piecewiseDependsOn(e)) return !0
        }
        return !1
      }, t.Piecewise.prototype.piecewiseDependsOn = function(e) {
        return this.dependsOn(e)
      }
    });
define(
    'core/math/builtinconstants',
    ['require', 'core/math/parsenode/constant', 'core/math/maybe-rational'],
    function(e) {
      'use strict';
      var t = e('core/math/parsenode/constant'),
          r = e('core/math/maybe-rational').maybeRational;
      return {
        pi: t(Math.PI), tau: t(2 * Math.PI), e: t(Math.E),
            trigAngleMultiplier: t(r(1, 1)), infty: t(1 / 0)
      }
    });
define(
    'core/math/builtinframe',
    [
      'require', 'core/math/builtinconstants',
      'core/math/parsenode/builtinfunction'
    ],
    function(e) {
      'use strict';
      var t, r = e('core/math/builtinconstants'),
             n = e('core/math/parsenode/builtinfunction'), i = {};
      for (t in r) r.hasOwnProperty(t) && (i[t] = r[t]);
      for (t in n) n.hasOwnProperty(t) && (i[t] = n[t]);
      return i
    });
define(
    'core/math/features/bounddomain',
    [
      'require', 'parsenodes', 'core/math/builtinframe',
      'core/math/domaintypes', 'core/math/comparators',
      'core/math/maybe-rational', 'core/math/policy'
    ],
    function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/math/builtinframe'),
          n = e('core/math/domaintypes'), i = e('core/math/comparators').table,
          a = e('core/math/maybe-rational').maybeRational,
          o = e('core/math/policy').defaultPolicy, s = t.Constant(a(0, 1));
      t.Base.prototype.boundDomain = function(e) {
        return n.unknownDomain()
      }, t.List.prototype.boundDomain = function(e) {
        if (!this.dependsOn(e)) return n.allReals();
        if (!this.args.length) return n.allReals();
        var t = this.args[0].boundDomain(e);
        if ('known' !== t.type) return n.unknownDomain();
        for (var r = 0; r < this.args.length; r++) {
          var i = this.args[r].boundDomain(e);
          if ('known' !== i.type) return n.unknownDomain();
          if (i.bounds[0] !== t.bounds[0] || i.bounds[1] !== t.bounds[1])
            return n.unknownDomain()
        }
        return t
      }, t.Expression.prototype.boundDomain = function(e) {
        for (var t = n.allReals(), r = 0; r < this.args.length; r++)
          t = n.intersectDomains(t, this.args[r].boundDomain(e));
        return t
      }, t.Constant.prototype.boundDomain = function(e) {
        return this.isNaN() ? n.emptyDomain() : n.allReals()
      }, t.Piecewise.prototype.boundDomain = function(e) {
        return this.args[2].isConstant && isNaN(this.args[2].asValue()) ?
            n.intersectDomains(
                this.args[0].boundDomain(e), this.args[1].boundDomain(e)) :
            n.unknownDomain()
      }, t.OrderedPair.prototype.boundDomain = function(e) {
        return n.intersectDomains(
            this.args[0].boundDomain(e), this.args[1].boundDomain(e))
      }, t.BaseComparator.prototype.boundDomain = function(e) {
        if (!this.dependsOn(e)) return n.allReals();
        if ('=' === this.operator) return n.unknownDomain();
        var t = this._difference, a = this._difference.boundDomain(e);
        if (t.polynomialOrder(e) > 1) return n.unknownDomain();
        var u = t.getPolynomialCoefficients(e),
            c = u[1] ? u[1].getConcreteTree(o, r) : s,
            l = u[0] ? u[0].getConcreteTree(o, r) : s;
        if (!c.isConstant || !l.isConstant) return n.unknownDomain();
        if (isNaN(c.asValue()) || isNaN(l.asValue())) return n.emptyDomain();
        if (0 === c.asValue())
          return i[this.operator].inclusive ?
              l.asValue() >= 0 ? a : n.emptyDomain() :
              l.asValue() > 0 ? a :
                                n.emptyDomain();
        var p = -l.asValue() / c.asValue(),
            f = c.asValue() < 0 ? [-1 / 0, p] : [p, 1 / 0];
        return n.intersectDomains(a, n.knownDomain(f))
      }
    });
define(
    'core/math/policyGraphing',
    ['require', 'exports', './builtinframe', 'core/types/graphmode'],
    function(e, t, r, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var i = function() {
        function e() {}
        return e.prototype.dimensions = function() {
          return 2
        }, e.prototype.assignmentForbidden = function(e) {
          return 'x' === e || 'y' === e || 'theta' === e ||
              'tmp' === e.slice(0, 3) || r.hasOwnProperty(e)
        }, e.prototype.isValidSlider = function(e) {
          return 'x' === e || 'y' === e ||
              'ans' !== e.slice(0, 3) && !this.assignmentForbidden(e)
        }, e.prototype.sliderVariables = function(e) {
          var t = this;
          return -1 !== e.indexOf('theta') && (e = e.filter(function(e) {
            return 'r' !== e
          })),
                 e.filter(function(e) {
                   return !t.assignmentForbidden(e) && 'ans' !== e.slice(0, 3)
                 })
        }, e.prototype.graphingEnabled = function() {
          return !0
        }, e.prototype.ansEnabled = function() {
          return !1
        }, e.prototype.validRegressionParameter = function(e) {
          return 'x' !== e && 'y' !== e
        }, e.prototype.validLHS = function(e) {
          return 'theta' !== e
        }, e.prototype.unplottablePolarFunction = function(e, t) {
          return 'theta' === e && -1 !== t.indexOf('r')
        }, e.prototype.validDoubleInequalitySymbol = function(e) {
          return 'x' === e || 'y' === e
        }, e.prototype.validDoubleInequalityVariables = function(e) {
          return !(e.length > 2) && e.every(this.validDoubleInequalitySymbol)
        }, e.prototype.validExpressionVariables = function(e) {
          return 1 === e.length && 'x' === e[0]
        }, e.prototype.validSolvedVariable = function(e) {
          return 'x' === e || 'y' === e || 'r' === e
        }, e.prototype.validImplicitVariables = function(e) {
          switch (e.length) {
            case 1:
              return 'x' === e[0] || 'y' === e[0] || 'r' === e[0];
            case 2:
              return 'x' === e[0] && 'y' === e[1] ||
                  'y' === e[0] && 'x' === e[1] ||
                  'r' === e[0] && 'theta' === e[1] ||
                  'theta' === e[0] && 'r' === e[1];
            default:
              return !1
          }
        }, e.prototype.graphableListVariables = function(e, t) {
          return 'x' === e || 'y' === e || 'r' === e || 'x' === t || 'y' === t
        }, e.prototype.validParametricVariable = function(e) {
          return 't' === e
        }, e.prototype.validParametricVariables = function(e) {
          return 1 === e.length && this.validParametricVariable(e[0])
        }, e.prototype.validInequalityVariables = function(e) {
          switch (e.length) {
            case 1:
              return 'x' === e[0] || 'y' === e[0] || 'r' === e[0];
            case 2:
              return this.validImplicitVariables(e);
            default:
              return !1
          }
        }, e.prototype.validFirstColumnVariable = function(e) {
          return 'y' !== e && 'r' !== e && 'theta' !== e && !e.match(/y_(\d+)/)
        }, e.prototype.complicatedPolarImplicit = function(e, t) {
          return 'theta' === e || 'r' === e && 1 !== t
        }, e.prototype.constantGraphMode = function(e) {
          return 'x' === e ? n.X : 'r' === e ? n.POLAR : n.Y
        }, e.prototype.graphMode = function(e, t) {
          var r = t[0];
          return 'y' === r               ? n.X :
              'x' === e                  ? n.X :
              'r' === e && 'theta' === r ? n.POLAR :
                                           n.Y
        }, e.prototype.tableableAsConstant = function(e) {
          return 'x' !== e && ('r' !== e && 'theta' !== e)
        }, e.prototype.implicitIndependent = function(e) {
          return 'x'
        }, e.prototype.implicitDependency = function(e) {
          return 1 !== e.length ? 'y' :
              'y' === e[0]      ? 'x' :
              'theta' === e[0]  ? 'r' :
                                  'y'
        }, e.prototype.graphableAsConstant = function(e) {
          return 'y' === e || 'x' === e || 'r' === e
        }, e.prototype.disabledFeatures = function() {
          return []
        }, e
      }(), a = function() {
        function e() {}
        return e.prototype.dimensions = function() {
          return 3
        }, e.prototype.assignmentForbidden = function(e) {
          return 'x' === e || 'y' === e || 'z' === e ||
              'tmp' === e.slice(0, 3) || r.hasOwnProperty(e)
        }, e.prototype.isValidSlider = function(e) {
          return 'x' === e || 'y' === e || 'z' === e ||
              'ans' !== e.slice(0, 3) && !this.assignmentForbidden(e)
        }, e.prototype.sliderVariables = function(e) {
          var t = this;
          return e.filter(function(e) {
            return !t.assignmentForbidden(e) && 'ans' !== e.slice(0, 3)
          })
        }, e.prototype.graphingEnabled = function() {
          return !0
        }, e.prototype.ansEnabled = function() {
          return !1
        }, e.prototype.validRegressionParameter = function(e) {
          return !1
        }, e.prototype.validLHS = function(e) {
          return !0
        }, e.prototype.unplottablePolarFunction = function(e, t) {
          return !1
        }, e.prototype.validDoubleInequalitySymbol = function(e) {
          return !1
        }, e.prototype.validDoubleInequalityVariables = function(e) {
          return !1
        }, e.prototype.validExpressionVariables = function(e) {
          var t = e.join('');
          return 'x' === t || 'y' === t || 'xy' === t || 'yx' === t
        }, e.prototype.validSolvedVariable = function(e) {
          return 'x' === e || 'y' === e || 'z' === e
        }, e.prototype.validImplicitVariables = function(e) {
          return !1
        }, e.prototype.graphableListVariables = function(e, t) {
          return 'x' === e || 'y' === e || 'x' === t || 'y' === t
        }, e.prototype.validParametricVariable = function(e) {
          return 't' === e
        }, e.prototype.validParametricVariables = function(e) {
          return 1 === e.length && this.validParametricVariable(e[0])
        }, e.prototype.validInequalityVariables = function(e) {
          return !1
        }, e.prototype.validFirstColumnVariable = function(e) {
          return !1
        }, e.prototype.complicatedPolarImplicit = function(e, t) {
          return !1
        }, e.prototype.constantGraphMode = function(e) {
          return n.Z_3D
        }, e.prototype.graphMode = function(e, t) {
          return 'z' === e && this.validExpressionVariables(t) ? n.Z_3D : n.NONE
        }, e.prototype.tableableAsConstant = function(e) {
          return 'x' !== e && 'r' !== e
        }, e.prototype.implicitIndependent = function(e) {
          return 'x'
        }, e.prototype.implicitDependency = function(e) {
          if (2 !== e.length) return 'z';
          var t = e[0] < e[1] ? e[0] + e[1] : e[1] + e[0];
          return 'xy' === t ? 'z' : 'xz' === t ? 'y' : 'yz' === t ? 'x' : 'z'
        }, e.prototype.graphableAsConstant = function(e) {
          return 'z' === e
        }, e.prototype.disabledFeatures = function() {
          return []
        }, e
      }();
      t.PolicyGraphing = new i, t.PolicyGraphing3D = new a
    });
define(
    'core/math/features/derivative',
    [
      'require', 'parsenodes', 'core/math/baseparser', 'core/math/builtinframe',
      'core/math/parsenode/builtinfunction', 'core/math/maybe-rational',
      'core/math/policy', 'core/math/policyGraphing'
    ],
    function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/math/baseparser'),
          n = e('core/math/builtinframe'),
          i = e('core/math/parsenode/builtinfunction'),
          a = e('core/math/maybe-rational').maybeRational,
          o = e('core/math/policy').defaultPolicy,
          s = e('core/math/policyGraphing').PolicyGraphing,
          u = t.Constant(a(0, 1)), c = t.Constant(a(1, 1)),
          l = t.Constant(a(2, 1)), p = {
            FreeVariable: function(e) {
              return e === this._symbol ? c : u
            },
            Constant: function(e) {
              return isFinite(this.asValue()) ? u : t.Constant(this.asValue())
            },
            Negative: function(e) {
              return t.Negative([this.args[0].takeDerivative(e)])
            },
            Add: function(e) {
              return t.Add([
                this.args[0].takeDerivative(e), this.args[1].takeDerivative(e)
              ])
            },
            Subtract: function(e) {
              return t.Subtract([
                this.args[0].takeDerivative(e), this.args[1].takeDerivative(e)
              ])
            },
            Multiply: function(e) {
              return t.Add([
                g(e, this.args[0],
                  t.Multiply([this.args[0].takeDerivative(e), this.args[1]])),
                g(e, this.args[1],
                  t.Multiply([this.args[0], this.args[1].takeDerivative(e)]))
              ])
            },
            Divide: function(e) {
              return t.Subtract([
                g(e, this.args[0],
                  t.Divide([this.args[0].takeDerivative(e), this.args[1]])),
                g(e, this.args[1], t.Divide([
                  t.Multiply([this.args[0], this.args[1].takeDerivative(e)]),
                  t.Exponent([this.args[1], l])
                ]))
              ])
            },
            Exponent: function(e) {
              return t
                  .Add([
                    g(e, this.args[0], t.Multiply([
                      t.Multiply([
                        this.args[1],
                        t.Exponent(
                            [this.args[0], t.Subtract([this.args[1], c])])
                      ]),
                      this.args[0].takeDerivative(e)
                    ])),
                    g(e, this.args[1], t.Multiply([
                      t.Piecewise([
                        t.Comparator['=']([this.args[0], u]), t.Piecewise([
                          t.Comparator['>']([this.args[1], u]), u,
                          t.Constant(NaN)
                        ]),
                        t.Multiply([
                          t.FunctionCall('\\ln', [this.args[0]]),
                          t.Exponent([this.args[0], this.args[1]])
                        ])
                      ]),
                      this.args[1].takeDerivative(e)
                    ]))
                  ])
                  .getConcreteTree(o, n)
            },
            Sum: function(e) {
              return this.copyWithArgs([
                this.args[0], this.args[1], this.args[2],
                this.args[3].takeDerivative(e)
              ])
            },
            Product: function(e) {
              var r = t.Sum([
                this.args[0], this.args[1], this.args[2],
                t.Piecewise([t.Comparator['=']([u, this.args[3]]), c, u])
              ]),
                  n = t.Multiply([
                    t.Sum([
                      this.args[0], this.args[1], this.args[2],
                      t.Divide([this.args[3].takeDerivative(e), this.args[3]])
                    ]),
                    t.Product(this.args)
                  ]),
                  i = t.Product([
                    this.args[0], this.args[1], this.args[2], t.Piecewise([
                      t.Comparator['=']([u, this.args[3]]),
                      this.args[3].takeDerivative(e), this.args[3]
                    ])
                  ]);
              return t.Piecewise([
                t.Comparator['=']([u, r]), n,
                t.Piecewise([t.Comparator['=']([c, r]), i, u])
              ])
            },
            Piecewise: function(e) {
              return 2 === this.args.length ?
                  t.Piecewise([this.args[0], this.args[1].takeDerivative(e)]) :
                  3 === this.args.length ? t.Piecewise([
                    this.args[0], this.args[1].takeDerivative(e),
                    this.args[2].takeDerivative(e)
                  ]) :
                                           void 0
            },
            List: function(e) {
              return t.List(this.args.map(function(t) {
                return t.takeDerivative(e)
              }))
            },
            ListAccess: function(e) {
              return new this.constructor(
                  [this.args[0].takeDerivative(e), this.args[1]])
            },
            OrderedPair: function(e) {
              return new this.constructor([
                this.args[0].takeDerivative(e), this.args[1].takeDerivative(e)
              ])
            },
            OrderedPairAccess: function(e) {
              return new this.constructor(
                  [this.args[0].takeDerivative(e), this.args[1]])
            },
            Integral: function(e) {
              var r = this.args[0], n = this.args[1], i = this.args[2],
                  a = this.args[3], o = {};
              o[r._symbol] = i;
              var s = {};
              return s[r._symbol] = n, t.Add([
                g(e, a, this.copyWithArgs([r, n, i, a.takeDerivative(e)])),
                t.Subtract([
                  g(e, i, t.Multiply([a.substitute(o), i.takeDerivative(e)])),
                  g(e, n, t.Multiply([a.substitute(s), n.takeDerivative(e)]))
                ])
              ])
            },
            SolvedEquation: function(e) {
              return this._expression.takeDerivative(e)
            },
            OptimizedRegression: function(e) {
              return this.model.takeDerivative(e)
            },
            Broadcast: function(e) {
              for (var r = this._replacedSymbols.slice(),
                       n = this.args.slice(1),
                       i = this._expression.takeDerivative(e), a = 0;
                   a < this._replacedSymbols.length; a++) {
                var o = this._replacedSymbols[a], s = this.args[a + 1];
                if (s.dependsOn(e)) {
                  var u = this.tmpVar(), c = t.DummyIndex(u);
                  r.push(u), n.push(s.takeDerivative(e)), i = t.Add([
                    i, t.Multiply([this._expression.takeDerivative(o), c])
                  ])
                }
              }
              return t.Broadcast(r, [i].concat(n))
            },
            Seed: function(e) {
              return t.Constant(NaN)
            }
          },
          f = {
            exp: '\\exp(x)*x_1',
            ln: '\\{x >= 0: x_1/x \\}',
            log: '\\{ x >= 0: x_1/(x*\\ln(10)) \\}',
            sqrt: 'x_1/(2*\\sqrt{x})',
            rtxsqpone: 'x*x_1/\\rtxsqpone(x)',
            rtxsqmone: 'x*x_1/\\rtxsqmone(x)',
            sin: '\\cos(x)*x_1',
            cos: '-\\sin(x)*x_1',
            tan: '\\sec(x)^2*x_1',
            arcsin: 'x_1/\\sqrt{1 - x^2}',
            arccos: '-x_1/\\sqrt{1 - x^2}',
            sinh: '\\cosh(x)*x_1',
            cosh: '\\sinh(x)*x_1',
            tanh: '(\\sech(x))^2*x_1',
            arcsinh: 'x_1/\\sqrt{x^2 + 1}',
            arccosh: '\\{ x > 0: x_1/\\rtxsqmone(x) \\}',
            arctanh: '\\{ \\abs(x) < 1: x_1/(1 - x^2) \\}',
            csc: '-\\cot(x)*\\csc(x)*x_1',
            sec: '\\tan(x)*\\sec(x)*x_1',
            cot: '-\\csc(x)^2*x_1',
            arccsc: '-x_1/(\\abs(x)*\\rtxsqmone(x))',
            arcsec: 'x_1/(\\abs(x)*\\rtxsqmone(x))',
            arccot: '-x_1/(1+x^2)',
            csch: '-\\coth(x)*\\csch(x)*x_1',
            sech: '-\\tanh(x)*\\sech(x)*x_1',
            coth: '-(\\csch(x))^2*x_1',
            arccsch: '-x_1/(\\abs(x)*\\rtxsqpone(x))',
            arcsech: '\\{ x >= 0: -x_1/(x*\\sqrt{1 - x^2}) \\}',
            arccoth: '\\{ \\abs(x) > 1 : x_1/(1 - x^2) \\}',
            factorial: '(x)!*\\polyGamma(0, x + 1)*x_1',
            floor: '\\{ \\mod(x, 1) > 0: 0*x_1 \\}',
            ceil: '\\{ \\mod(x, 1) > 0: 0*x_1 \\}',
            abs: '\\{ \\abs(x) > 0: \\sign(x)*x_1 \\}',
            sign: '\\{ \\abs(x) > 0: 0*x_1 \\}',
            mean: '\\mean(x_1)',
            total: '\\total(x_1)',
            length: '0',
            var : '2*\\cov(x, x_1)',
            varp: '2*\\cov(x, x_1)*(\\length(x)-1)/\\length(x)',
            stdev: '\\cov(x, x_1)/\\stdev(x)',
            stdevp: '\\covp(x, x_1)/\\stdevp(x)',
            mad: '\\mean(\\sign(x-\\mean(x))*(x_1 - \\mean(x_1)))',
            min: 'x_1[\\argmin(x)]',
            max: 'x_1[\\argmax(x)]',
            median:
                '0.5*(x_1[\\lowerQuantileIndex(x, 0.5)] + x_1[\\upperQuantileIndex(x, 0.5)])',
            argmin: '0/0',
            argmax: '0/0',
            gcd: '0/0',
            lcm: '0/0',
            erf: '\\frac{2x_1}{\\sqrt{\\pi }}e^{-x^2}',
            invNorm: '\\frac{x_1}{\\pdf(\\normaldist(0,1),\\invNorm(x))}'
          },
          h = {
            logbase: [
              '\\{x > 0: \\frac{x_1}{x*\\ln(y)}\\}',
              '\\frac{-\\log_{y}(x)*y_1}{y*\\ln(y)}'
            ],
            nthroot: ['x^{1/y - 1}/y*x_1', '-\\frac{x^{1/y}*\\ln(x)*y_1}{y^2}'],
            polyGamma: ['0/0', '\\polyGamma(1 + x, y)*y_1'],
            mod: [
              '\\{ \\abs(\\mod(x, y)) > 0: x_1 \\}',
              '\\{ \\mod(x/y, 1) > 0: -\\floor(x/y)*y_1 \\}'
            ],
            round: ['\\{ \\abs(\\mod(x, 1) - 0.5) > 0: 0*x_1 \\}', '0/0'],
            cov: ['\\cov(x_1, y)', '\\cov(x, y_1)'],
            covp: ['\\covp(x_1, y)', '\\covp(x, y_1)'],
            corr: [
              '(\\cov(x_1, y) - (\\cov(x, y)*\\cov(x, x_1)/\\var(x)))/(\\stdevp(x)\\stdevp(y))',
              '(\\cov(x, y_1) - (\\cov(x, y)*\\cov(y, y_1)/\\var(y)))/(\\stdevp(x)\\stdevp(y))'
            ],
            spearman: ['0/0', '0/0'],
            quantile: [
              '\\{ \\floor(y*(\\length(x)-1)) = y*(\\length(x)-1) :   x_1[\\upperQuantileIndex(x, y)],  (\\ceil(y*(\\length(x)-1)) - y*(\\length(x)-1))*x_1[\\lowerQuantileIndex(x, y)] +   (y*(\\length(x)-1) - \\floor(y*(\\length(x)-1)))*x_1[\\upperQuantileIndex(x, y)]\\}',
              '\\{ \\floor(y*(\\length(x)-1)) < y*(\\length(x)-1) :   (x[\\upperQuantileIndex(x, y)] - x[\\lowerQuantileIndex(x, y)])*y_1\\}'
            ],
            quartile: [
              '0.5*(x_1[\\lowerQuartileIndex(x, y)] + x_1[\\upperQuartileIndex(x, y)])',
              '0/0'
            ],
            tscore: [
              '\\frac{\\sqrt{\\length(x)}(\\stdev(x)*\\mean(x_1)-(\\mean(x)-y)*\\frac{\\cov(x,x_1)}{\\stdev(x)})}{\\stdev(x)^2}',
              '-y_1*\\sqrt{\\length(x)}/\\stdev(x)'
            ],
            quartileIndex: ['0/0', '0/0'],
            upperQuartileIndex: ['0/0', '0/0'],
            lowerQuartileIndex: ['0/0', '0/0'],
            upperQuantileIndex: ['0/0', '0/0'],
            lowerQuantileIndex: ['0/0', '0/0'],
            nCr: ['0/0', '0/0'],
            nPr: ['0/0', '0/0'],
            arctan: ['x_1*y/(y^2+x^2)', '-y_1*x/(y^2+x^2)'],
            poissonpdf: [
              '0/0',
              'y_1\\frac{e^{-y}(\\floor(x)-y)y^{(\\floor(x)-1)}}{\\floor(x)!}'
            ],
            invPoisson: ['0/0', '0/0'],
            tpdf: [
              'x_1*\\pdf(\\tdist(y),x)*\\frac{-(y+1)*x}{y+x^2}',
              'y_1*\\frac{1}{2}\\pdf(\\tdist(y),x)(  \\frac{x^2-1}{y + x^2} + \\ln(\\frac{y}{y + x^2}) +   \\polyGamma(0, \\frac{1+y}{2}) - \\polyGamma(0, y/2))'
            ],
            invT: ['x_1/\\pdf(\\tdist(y),\\invT(x, y))', '0/0']
          },
          d = {
            tcdf:
                ['-x_1*\\pdf(\\tdist(z),x)', 'y_1*\\pdf(\\tdist(z),y)', '0/0'],
            poissoncdf: [
              '0/0', '0/0',
              'z_1\\sum _{n=\\max(0,\\floor(\\min(x,y)))}^{\\floor(\\max(x,y))}\\frac{e^{-z}(n-z)z^{(n-1)}}{n!}'
            ],
            normalpdf: [
              '-x_1*\\frac{x-y}{z^2} \\pdf(\\normaldist(y,z),x)',
              'y_1*\\frac{x-y}{z^2} \\pdf(\\normaldist(y,z),x)',
              'z_1*(\\frac{(x-y-z)*(x-y+z)}{z^3}) \\pdf(\\normaldist(y,z),x)'
            ],
            binompdf: [
              '0/0', '0/0',
              '\\{0<=z<=1: z_1*\\pdf(\\binomialdist(y,z),x)*(\\frac{\\round(x)}{z}-\\frac{\\round(y)-\\round(x)}{1-z}), 0 \\}'
            ],
            invBinom: ['0/0', '0/0', '0/0'],
            uniformpdf: [
              '0', '\\{y<=x: \\frac{y_1}{(z-y)^2}, 0\\}',
              '\\{z>=x: -\\frac{z_1}{(z-y)^2}, 0\\}'
            ],
            invUniform: [
              '\\{y<=x<=z: x_1*(z-y), 0\\}', '\\{y<=x<=z: y_1*(1-x), 0\\}',
              '\\{y<=x<=z: z_1*x, 0\\}'
            ]
          },
          m = {
            normalcdf: [
              '-x_1\\pdf(\\normaldist(z,u), x)',
              'y_1\\pdf(\\normaldist(z,u), y)',
              '-z_1*(\\pdf(\\normaldist(z,u), y) - \\pdf(\\normaldist(z,u), x))',
              'u_1*(  \\{\\abs(y)=1/0:0,\\frac{z-y}{u}\\pdf(\\normaldist(z,u),y)\\} -   \\{\\abs(x)=1/0:0,\\frac{z-x}{u}\\pdf(\\normaldist(z,u),x)\\})'
            ],
            binomcdf: [
              '0/0', '0/0', '0/0',
              '\\{0<=u<=1: u_1*\\sum _{n=\\max(0,\\round(\\min(x,y)))}^{\\round(\\max(x,y))}(  \\pdf(\\binomialdist(z,u),n)*(\\frac{n}{u}-\\frac{\\round(z)-n}{1-u})), 0 \\}'
            ],
            uniformcdf: [
              '\\{z>u: 0/0, -x_1\\pdf(\\uniformdist(z,u), x)\\}',
              '\\{z>u: 0/0, y_1\\pdf(\\uniformdist(z,u), y)\\}',
              '\\{z>u: 0/0, z_1*(\\frac{\\{z<x<u:u-x,0\\} + \\{z<y<u:y-u,0\\}}{(u-z)^2})\\}',
              '\\{z>u: 0/0, u_1*(\\frac{\\{z<x<u:x-z,0\\} + \\{z<y<u:z-y,0\\}}{(u-z)^2})\\}'
            ]
          };
      for (var y in f)
        i[y].prototype.takeDerivative = function(e) {
          return function(t) {
            var r = this.args, i = {x: r[0], x_1: r[0].takeDerivative(t)};
            return g(t, r[0], e.substitute(i)).getConcreteTree(o, n)
          }
        }(r.parse(f[y]));
      for (y in h)
        i[y].prototype.takeDerivative = function(e, r) {
          return function(i) {
            var a = this.args, s = {
              x: a[0],
              x_1: a[0].takeDerivative(i),
              y: a[1],
              y_1: a[1].takeDerivative(i)
            };
            return t
                .Add([g(i, a[0], e.substitute(s)), g(i, a[1], r.substitute(s))])
                .getConcreteTree(o, n)
          }
        }(r.parse(h[y][0]), r.parse(h[y][1]));
      for (y in d)
        i[y].prototype.takeDerivative = function(e, r, i) {
          return function(a) {
            var s = this.args, u = {
              x: s[0],
              x_1: s[0].takeDerivative(a),
              y: s[1],
              y_1: s[1].takeDerivative(a),
              z: s[2],
              z_1: s[2].takeDerivative(a)
            };
            return t
                .Add([
                  t.Add([
                    g(a, s[0], e.substitute(u)), g(a, s[1], r.substitute(u))
                  ]),
                  g(a, s[2], i.substitute(u))
                ])
                .getConcreteTree(o, n)
          }
        }(r.parse(d[y][0]), r.parse(d[y][1]), r.parse(d[y][2]));
      for (y in m)
        i[y].prototype.takeDerivative =
            function(e, r, i, a) {
          return function(s) {
            var u = this.args, c = {
              x: u[0],
              x_1: u[0].takeDerivative(s),
              y: u[1],
              y_1: u[1].takeDerivative(s),
              z: u[2],
              z_1: u[2].takeDerivative(s),
              u: u[3],
              u_1: u[3].takeDerivative(s)
            };
            return t
                .Add([
                  t.Add([
                    g(s, u[0], e.substitute(c)), g(s, u[1], r.substitute(c))
                  ]),
                  t.Add([
                    g(s, u[2], i.substitute(c)), g(s, u[3], a.substitute(c))
                  ])
                ])
                .getConcreteTree(o, n)
          }
        }(r.parse(m[y][0]), r.parse(m[y][1]), r.parse(m[y][2]),
            r.parse(m[y][3]));
      i.distance.prototype.takeDerivative = function(e) {
        var r = this.args[0], a = this.args[1], o = t.OrderedPairAccess([r, c]),
            u = t.OrderedPairAccess([r, l]), p = t.OrderedPairAccess([a, c]),
            f = t.OrderedPairAccess([a, l]), h = g(e, o, o.takeDerivative(e)),
            d = g(e, u, u.takeDerivative(e)), m = g(e, p, p.takeDerivative(e)),
            y = g(e, f, f.takeDerivative(e));
        return g(e, this, t.Divide([
                 t.Add([
                   t.Add([
                     t.Subtract([t.Multiply([h, o]), t.Multiply([h, p])]),
                     t.Subtract([t.Multiply([m, p]), t.Multiply([m, o])])
                   ]),
                   t.Add([
                     t.Subtract([t.Multiply([d, u]), t.Multiply([d, f])]),
                     t.Subtract([t.Multiply([y, f]), t.Multiply([y, u])])
                   ])
                 ]),
                 i.distance([this.args[0], this.args[1]])
               ]))
            .getConcreteTree(s, n)
      }, i.midpoint.prototype.takeDerivative = function(e) {
        var r = this.args[0], a = this.args[1], o = t.OrderedPairAccess([r, c]),
            u = t.OrderedPairAccess([r, l]), p = t.OrderedPairAccess([a, c]),
            f = t.OrderedPairAccess([a, l]), h = g(e, o, o.takeDerivative(e)),
            d = g(e, u, u.takeDerivative(e)), m = g(e, p, p.takeDerivative(e)),
            y = g(e, f, f.takeDerivative(e));
        return t.OrderedPair([i.mean([h, m]), i.mean([d, y])])
            .getConcreteTree(s, n)
      };
      var g = function(e, t, r) {
        return t.dependsOn(e) ? r : u
      };
      for (var v in p) {
        var b = p[v];
        t[v].prototype.takeDerivative = b
      }
      ['tSample', 'poissonSample', 'uniformSample', 'normalSample',
       'binomSample']
          .forEach(function(e) {
            i[e].prototype.takeDerivative = function(e) {
              for (var r = 0; r < this.args.length; r++)
                if (this.args[r].dependsOn(e)) return t.Constant(NaN);
              return u
            }
          })
    });
define('core/math/features/substitute', ['require', 'parsenodes'], function(e) {
  'use strict';
  var t = e('parsenodes'), r = {
    Identifier: function(e) {
      return e[this._symbol] ? e[this._symbol] : this
    },
    FreeVariable: function(e) {
      return e[this._symbol] ? e[this._symbol] : this
    },
    Constant: function(e) {
      return this
    },
    Expression: function(e) {
      return this.copyWithArgs(this.args.map(function(t) {
        return t.substitute(e)
      }))
    },
    List: function(e) {
      return t.List(this.args.map(function(t) {
        return t.substitute(e)
      }))
    },
    SolvedEquation: function(e) {
      return new this.constructor(this._symbol, this._expression.substitute(e))
    },
    OptimizedRegression: function(e) {
      return new this.constructor(
          this.model.substitute(e), this.parameters, this.residualVariables,
          this.residuals, this.statistics)
    }
  };
  for (var n in r) t[n].prototype.substitute = r[n]
});
define('core/math/features/isImplicit', ['require', 'parsenodes'], function(e) {
  'use strict';
  function t(e) {
    return !(e[0] instanceof r.FreeVariable) || e[1].dependsOn(e[0]._symbol)
  }
  var r = e('parsenodes');
  r.Base.prototype.isImplicit = function() {
    return !1
  }, r.Equation.prototype.isImplicit = function() {
    return t(this.args)
  }, r.BaseComparator.prototype.isImplicit = function() {
    return t(this.args)
  }, r.Broadcast.prototype.isImplicit = function() {
    return this._expression.isImplicit()
  }
});
define(
    'core/math/features/solve',
    [
      'require', 'core/math/baseparser', 'parsenodes', 'core/math/errormsg',
      'core/math/builtinframe', 'core/math/workerconfig',
      'core/math/maybe-rational', 'core/math/policy'
    ],
    function(e) {
      'use strict';
      function t(e) {
        var t = Object.create(m);
        return t.a = e[2] ? e[2].tryGetConcreteTree(v, m) : b,
               t.b = e[1] ? e[1].tryGetConcreteTree(v, m) : b,
               t.c = e[0] ? e[0].tryGetConcreteTree(v, m) : b, t
      }
      function r(e) {
        return 0 === e.a.asValue() ? 0 === e.b.asValue() ? 0 : 1 : 2
      }
      function n(e, n, i, a) {
        for (var o, s, u = [], c = [], l = 0; l < i.length; l++) {
          var p = i[l], f = 0;
          h.eachArgs(e, [n], function(e) {
            var t = e[0];
            f = Math.max(f, t.polynomialOrder(p))
          });
          var d = f > 2, m = i.length > 1 && !e.validSolvedVariable(p),
              y = a && n.piecewiseDependsOn(p);
          d || m || y ? (c[l] = {}, u[l] = 1 / 0) :
                        (c[l] = [], u[l] = 0, h.eachArgs(e, [n], function(e) {
                          var n = e[0];
                          s = t(n.getPolynomialCoefficients(p)), c[l].push(s),
                          u[l] = Math.max(u[l], r(s))
                        }))
        }
        var g;
        if (1 === i.length)
          s = c[0], o = i[0], g = u[0];
        else {
          var v;
          v = 0 === u[0]  ? 1 :
              0 === u[1]  ? 0 :
              u[0] < u[1] ? 0 :
                            1,
          s = c[v], o = i[v], g = u[v]
        }
        return {
          localFrame: s, variableOfInterest: o, effectiveOrder: g
        }
      }
      function i(e, t) {
        return t ? P.inequality : P.generalEquation
      }
      function a(e) {
        e.f = x.getConcreteTree(v, e), e.g = _.getConcreteTree(v, e),
        e.p = S.getConcreteTree(v, e), e.q = M.getConcreteTree(v, e),
        e.m = c(g(1e305, 1))
      }
      var o = e('core/math/baseparser'), s = e('parsenodes'), u = s.Base,
          c = s.Constant, l = s.Equation, p = s.SolvedEquation,
          f = s.BaseComparator, h = s.List, d = e('core/math/errormsg'),
          m = e('core/math/builtinframe'), y = e('core/math/workerconfig'),
          g = e('core/math/maybe-rational').maybeRational,
          v = e('core/math/policy').defaultPolicy, b = c(g(0, 1)),
          x = o.parse('b*b'), _ = o.parse('4*a*c'),
          S = o.parse('(-b+\\sqrt{b*b-4*a*c})/(2*a)'),
          M = o.parse('(-b-\\sqrt{b*b-4*a*c})/(2*a)'),
          E = o.parse('[\\{\\abs(b)>0:-c/b\\}]'),
          w = o.parse('[\\{\\abs(a)>0:-b/(2*a)\\}]'),
          D = o.parse(
              '[\\{a=0:\\{b<0:-c/b\\},q\\},\\{a=0:\\{b>0:-c/b\\},p\\}]'),
          T = o.parse(
              '[\\{a=0:\\{b<0:-c/b\\},a>0:q\\},\\{a=0:\\{b=0:\\{c>0:-m\\}\\},a>0:\\{f<g:-m\\},p\\},\\{a=0:\\{b=0:\\{c>0:m\\}\\},a>0:\\{f<g:m\\},q\\},\\{a=0:\\{b>0:-c/b\\},a>0:p\\}]'),
          P = {
            inequality: function(e) {
              return a(e), T.getConcreteTree(v, e)
            },
            generalEquation: function(e) {
              return a(e),
                     e.a.isConstant && 0 === e.a.asValue() ?
                         E.getConcreteTree(v, e) :
                         e.f.isConstant && e.g.isConstant &&
                             e.f.asValue() - e.g.asValue() == 0 ?
                         w.getConcreteTree(v, e) :
                         D.getConcreteTree(v, e)
            }
          };
      u.prototype.trySolve = function(e, t) {
        try {
          return this.solve(e, t)
        } catch (e) {
          if (e instanceof s.Error) return e;
          throw e
        }
      }, l.prototype.solve = function(e, t) {
        return this.asComparator().solve(e, t)
      }, f.prototype.solve = function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        if (r.isError) return r;
        if (r.isConstant) return r;
        var a = '=' !== this.getOperator();
        if (!y.plotImplicits && r.isImplicit()) throw new d.implicitsDisabled;
        var o = this._difference.tryGetConcreteTree(e, t);
        o.isBroadcast && (o = h(o.mapElements(e, function(e) {
                            return e
                          })));
        var s = o.getDependencies();
        if (0 === s.length)
          return o.isList ? h(o.args.map(function(e) {
            return c(0 === e.asValue())
          })) :
                            c(0 === o.asValue());
        if (1 === s.length && o.isList && !a) return o;
        if (1 === s.length && !a && !y.plotSingleVariableImplicitEquations)
          return d.singleVariableImplicitEquationsDisabled();
        var u = h.wrap(o);
        if (s.length > 2)
          return d.tooManyVariables(this.getSliderVariables(e, r))
              .setDependencies(s);
        if (a && !e.validInequalityVariables(s))
          return d.invalidInequalityVariables().setDependencies(s);
        var l = n(e, u, s, a), f = l.localFrame, m = l.effectiveOrder,
            g = l.variableOfInterest;
        if (e.complicatedPolarImplicit(g, m))
          return d.complicatedPolarImplicit().setDependencies(s);
        if (!e.validImplicitVariables(s)) return d.invalidImplicitVariables();
        if (m > 2) return o;
        for (var v = i(s, a), b = [], x = 0; x < f.length; x++) {
          var _ = v(f[x]);
          if (_.isError) return _;
          if (_.isConstant)
            b.push(_);
          else
            for (var S = 0; S < _.args.length; S++) {
              var M = _.args[S],
                  E = u.args[x].extractConditions(g, M).getConcreteTree(e, t);
              b.push(E)
            }
        }
        return p(g, h(b))
      }
    });
define(
    'core/math/distribution-spec',
    ['require', 'exports', 'core/math/baseparser', 'tslib'],
    function(e, t, r, n) {
      'use strict';
      function i(e) {
        return a(r.parse(e, {trailingComma: !0}))
      }
      function a(e) {
        var r = e, i = o[r.type];
        if (!i)
          switch ('Assignment' === r.type && (r = r._expression), r.type) {
            case 'FunctionCall':
              i = t.DistributionParameterDefaultsMap[r._symbol];
              break;
            default:
              return
          }
        if (i) {
          for (var a = {}, s = i.params, u = r.args, c = 0; c < s.length; c++) {
            var l = u[c];
            a[s[c]] = l && l.getInputString() || ''
          }
          return n.__assign(
              n.__assign({}, i), {span: r.getInputSpan(), values: a})
        }
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.DistributionParameterDefaultsMap = {
            normaldist: {
              type: 'distribution',
              symbol: 'normaldist',
              params: ['mean', 'stdev'],
              defaults: ['0', '1'],
              discrete: !1
            },
            tdist: {
              type: 'distribution',
              symbol: 'tdist',
              params: ['dof'],
              defaults: [void 0],
              discrete: !1
            },
            binomialdist: {
              type: 'distribution',
              symbol: 'binomialdist',
              params: ['trials', 'probsuccess'],
              defaults: [void 0, '0.5'],
              discrete: !0
            },
            poissondist: {
              type: 'distribution',
              symbol: 'poissondist',
              params: ['mean'],
              defaults: [void 0],
              discrete: !0
            },
            uniformdist: {
              type: 'distribution',
              symbol: 'uniformdist',
              params: ['min', 'max'],
              defaults: ['0', '1'],
              discrete: !1
            }
          };
      var o = {
        Histogram: {
          type: 'visualization',
          symbol: 'histogram',
          params: ['data', 'binwidth'],
          defaults: [void 0, '1']
        },
        DotPlot: {
          type: 'visualization',
          symbol: 'dotplot',
          params: ['data', 'binwidth'],
          defaults: [void 0, '1']
        },
        BoxPlot: {
          type: 'visualization',
          symbol: 'boxplot',
          params: ['data'],
          defaults: [void 0]
        }
      };
      t.parseToplevelFunction = i, t.getFunctionSpecFromTree = a
    });
define(
    'core/math/evaluationstate',
    [
      'require', 'core/types/graphmode', 'parsenodes', 'core/lib/label',
      'core/math/types', 'core/math/distribution-spec'
    ],
    function(e) {
      'use strict';
      function t(e) {
        return e.isError           ? e.getError() :
            void 0 === e.asValue() ? '' :
                                     +e.asValue()
      }
      function r(e, r, n) {
        for (var i = [], a = 0; a < r.columns.length; a++) {
          var o = n.columns[a],
              s = {dependent: !o.isIndependent, discrete: o.isIndependent};
          o.isError ? (s.error = o.getError(), s.values = []) :
                      s.values = o.values.map(t),
                      i.push(s)
        }
        return {
          column_data: i
        }
      }
      function n(e, t, r) {
        var n = {variables: [], errorMap: {}, dimensions: {}};
        return r.center.isError && (n.errorMap.center = !0),
               r.radianAngle.isError && (n.errorMap.angle = !0),
               r.width.isError && (n.errorMap.width = !0),
               r.height.isError && (n.errorMap.height = !0),
               r.opacity.isError && (n.errorMap.opacity = !0),
               r.center.isError || r.radianAngle.isError || r.width.isError ||
                       r.height.isError || r.opacity.isError ?
                   (n.variables = t.getSliderVariables(e, r), n) :
                   (n.dimensions.x = [], n.dimensions.y = [],
                    n.dimensions.radianAngle = [], n.dimensions.width = [],
                    n.dimensions.height = [], n.dimensions.opacity = [],
                    a.List.eachArgs(
                        e,
                        [r.center, r.radianAngle, r.width, r.height, r.opacity],
                        function(e) {
                          var t = e[0].asValue();
                          n.dimensions.x.push(+t[0]),
                              n.dimensions.y.push(+t[1]),
                              n.dimensions.radianAngle.push(+e[1].asValue()),
                              n.dimensions.width.push(+e[2].asValue()),
                              n.dimensions.height.push(+e[3].asValue()),
                              n.dimensions.opacity.push(
                                  Math.max(0, Math.min(1, e[4].asValue())))
                        }),
                    (e.graphingEnabled() ? t.getGraphMode(e, r) : i.NONE) !==
                            i.NONE &&
                        (n.is_graphable = !0),
                    r.moveStrategy && (n.move_strategy = r.moveStrategy), n)
      }
      var i = e('core/types/graphmode'), a = e('parsenodes'),
          o = e('core/lib/label'), s = e('core/math/types'),
          u = e('core/math/distribution-spec').getFunctionSpecFromTree,
          c = function() {
            return {
              operator: '=', variables: []
            }
          }, l = function(e, t, l) {
            if (t.isTable) return r(e, t, l);
            if (t.isImage) return n(e, t, l);
            var p = c();
            if (l.isError &&
                (!(t instanceof a.FunctionDefinition) || l.blocksExport))
              return p.error = l.getError(),
                     p.variables = t.getSliderVariables(e, l),
                     p.is_single_identifier = t instanceof a.Identifier, p;
            l.moveStrategy &&
                (p.move_strategy = l.moveStrategy,
                 p.default_drag_mode = l.defaultDragMode),
                t.isInequality() && (p.is_inequality = !0),
                p.operator = t.getOperator(),
                l instanceof a.SolvedEquation ?
                !0 !== l._expression.asValue() &&
                    !1 !== l._expression.asValue() &&
                    (p.assignment = l._symbol) :
                t instanceof a.Assignment && (p.assignment = t._symbol);
            var f = e.graphingEnabled() ? t.getGraphMode(e, l) : i.NONE;
            if (f !== i.NONE) {
              p.is_graphable = !0,
              p.expression_type = t.getExpressionType(f, l.valueType),
              l.isShadeBetween() && (p.is_shade_between = !0);
              var h = t.tableInfo(e, l);
              h && (p.is_tableable = !0, p.table_info = h)
            }
            s.isList(l.valueType) && (p.is_concrete_list = !0),
                p.variables = p.is_graphable ? [] : t.getSliderVariables(e, l),
                p.is_single_identifier = t instanceof a.Identifier,
                l.isConstant && (p.constant_value = l.asValue());
            var d = l.getEvaluationInfo();
            if (!d || '=' !== p.operator || t.isConstant || t.isFunction ||
                    (p.is_evaluable = !0, p.zero_values = d),
                l instanceof a.OptimizedRegression) {
              var m = {};
              for (var y in l.parameters)
                l.parameters.hasOwnProperty(y) &&
                    (m[o.identifierToLatex(y)] = +l.parameters[y].asValue());
              p.is_regression = !0, p.regression = {
                parameters: m,
                residualVariable: o.identifierToLatex(l.residualVariable),
                residualSuggestionId: l.residualSuggestionId,
                shouldSuggestLogMode: l.shouldSuggestLogMode,
                statistics: l.statistics
              }
            }
            var g = u(t);
            return g && g.discrete && (p.is_discrete_distribution = !0), p
          };
      return l.default = c, l
    });
define(
    'core/math/statementanalysis',
    [
      'require', 'core/math/evaluationstate', 'pjs', 'core/types/graphmode',
      'core/math/workerconfig'
    ],
    function(e) {
      'use strict';
      var t = e('core/math/evaluationstate'), r = e('pjs'),
          n = e('core/types/graphmode'), i = e('core/math/workerconfig');
      return r(function(e) {
        e.init = function(e, r, n) {
          this.policy = e, this.rawTree = r, this.concreteTree = n,
          this.evaluationState = t(e, r, n)
        }, e.exportTo = function(e, t) {
          this.rawTree.exportTo(e, this.concreteTree, t)
        }, e.graph = function(e) {
          return this.rawTree.graph(this.policy, this.concreteTree, e)
        }, e.getGraphMode = function() {
          return this.rawTree.getGraphMode(this.policy, this.concreteTree)
        }, e.getGraphInfo = function() {
          return this.rawTree.getGraphInfo(this.policy, this.concreteTree)
        }, e.shouldIntersect = function() {
          if (!this.evaluationState.is_graphable) return !1;
          if (!this.rawTree.userData.shouldGraph) return !1;
          if (!i.pointsOfInterest) return !1;
          var e = this.getGraphMode();
          return e === n.X || e === n.Y
        }
      })
    });
define('core/math/expression-types', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e, r) {
    if (void 0 === e) return {points: !1, lines: !1, fill: !1};
    var n = t.EXPRESSION_PROP_DEFAULTS[e];
    switch (e) {
      case i.SINGLE_POINT:
        return {points: !0, lines: !1, fill: !1};
      case i.POINT_LIST:
      case i.DOTPLOT:
        return {
          points: void 0 === r.points ? n.points : r.points,
          lines: void 0 === r.lines ? n.lines : r.lines,
          fill: !1
        };
      case i.PARAMETRIC:
      case i.POLYGON:
      case i.X_OR_Y:
      case i.POLAR:
      case i.IMPLICIT:
      case i.HISTOGRAM:
      case i.BOXPLOT:
      case i.TTEST:
      case i.STATS:
      case i.CUBE:
      case i.SPHERE:
        return {
          points: !1,
          lines: void 0 === r.lines ? n.lines : r.lines,
          fill: void 0 === r.fill ? n.fill : r.fill
        };
      default:
        return e
    }
  }
  function n(e) {
    if (void 0 === e) return !1;
    switch (e) {
      case i.SINGLE_POINT:
      case i.POINT_LIST:
      case i.PARAMETRIC:
      case i.POLYGON:
      case i.X_OR_Y:
      case i.POLAR:
      case i.IMPLICIT:
        return !0;
      case i.HISTOGRAM:
      case i.BOXPLOT:
      case i.DOTPLOT:
      case i.TTEST:
      case i.STATS:
      case i.CUBE:
      case i.SPHERE:
        return !1;
      default:
        return e
    }
  }
  Object.defineProperty(t, '__esModule', {value: !0});
  var i;
  !function(e) {
    e.X_OR_Y = 'X_OR_Y', e.SINGLE_POINT = 'SINGLE_POINT',
    e.POINT_LIST = 'POINT_LIST', e.PARAMETRIC = 'PARAMETRIC', e.POLAR = 'POLAR',
    e.IMPLICIT = 'IMPLICIT', e.POLYGON = 'POLYGON', e.HISTOGRAM = 'HISTOGRAM',
    e.DOTPLOT = 'DOTPLOT', e.BOXPLOT = 'BOXPLOT', e.TTEST = 'TTEST',
    e.STATS = 'STATS', e.CUBE = 'CUBE', e.SPHERE = 'SPHERE'
  }(i = t.ExpressionType || (t.ExpressionType = {})),
      t.EXPRESSION_PROP_DEFAULTS = {
        X_OR_Y: {points: !1, lines: !0, fill: !1},
        SINGLE_POINT: {points: !0, lines: !1, fill: !1},
        POINT_LIST: {points: !0, lines: !1, fill: !1},
        PARAMETRIC: {points: !1, lines: !0, fill: !1},
        POLAR: {points: !1, lines: !0, fill: !1},
        IMPLICIT: {points: !1, lines: !0, fill: !1},
        POLYGON: {points: !1, lines: !0, fill: !0},
        HISTOGRAM: {points: !1, lines: !0, fill: !0},
        DOTPLOT: {points: !0, lines: !1, fill: !1},
        BOXPLOT: {points: !1, lines: !0, fill: !1},
        TTEST: {points: !1, lines: !1, fill: !1},
        STATS: {points: !1, lines: !1, fill: !1},
        CUBE: {points: !1, lines: !1, fill: !0},
        SPHERE: {points: !1, lines: !1, fill: !0}
      },
      t.getReconciledExpressionProps = r, t.isClickableExpressionType = n
});
define(
    'core/math/features/analyze',
    [
      'require', 'underscore', 'parsenodes', 'core/math/statementanalysis',
      'core/math/builtin', 'core/math/builtinframe',
      'core/math/parsenode/builtinfunction', 'core/math/errormsg',
      'core/math/comparators', 'core/math/types', 'core/types/graphmode',
      'core/math/expression-types', 'core/math/distribution-spec',
      'core/math/workerconfig'
    ],
    function(e) {
      'use strict';
      function t(e, t, r, n) {
        if (n.isError) return u(e, r, n);
        var i = n.getDependencies();
        switch (n.valueType) {
          case d.Distribution:
          case d.ListOfDistribution:
            return u(e, r, n);
          case d.Point:
          case d.ListOfPoint:
            return i.length ? e.validParametricVariables(i) ?
                              u(e, r, n) :
                              u(e, r,
                                f.tooManyVariables(r.getSliderVariables(e, n))
                                    .setDependencies(i)) :
                              u(e, r, n);
          case d.Number:
          case d.ListOfNumber:
            return 0 === i.length ?
                u(e, r, n) :
                i.length <= e.dimensions() - 1 ?
                e.validExpressionVariables(i) ?
                u(e, r, n) :
                u(e, r,
                  f.equationRequired(e.implicitDependency(i))
                      .setDependencies(i)) :
                e.validImplicitVariables(i) ?
                u(e, r, f.equationRequired().setDependencies(i)) :
                u(e, r,
                  f.tooManyVariables(r.getSliderVariables(e, n))
                      .setDependencies(i));
          default:
            return u(e, r, f.parseError())
        }
      }
      function r(e) {
        return p.pdf([e, s.FreeVariable('x')])
      }
      function n(e, t) {
        var r = this.tryGetConcreteTree(e, t), n = r.getDependencies();
        return n.length ? u(e, this,
                            f.tooManyVariables(this.getSliderVariables(e, r))
                                .setDependencies(n)) :
                          u(e, this, this.tryGetConcreteTree(e, t))
      }
      function i(e) {
        return function(t, r) {
          var n = this.tryGetConcreteTree(t, r), i = n.getDependencies();
          if (i.length)
            return u(
                t, this,
                f.tooManyVariables(this.getSliderVariables(t, n))
                    .setDependencies(i));
          var a = u(t, this, this.tryGetConcreteTree(t, r));
          if (!n.isError) {
            a.evaluationState.expression_type = y.TTEST;
            var o = n.args.map(function(e) {
              return e.asValue()
            });
            a.evaluationState.ttest_results = e.apply(null, o)
          }
          return a
        }
      }
      function a(e, t) {
        return e.filter(function(e) {
          return !t[e]
        })
      }
      var o = e('underscore'), s = e('parsenodes'),
          u = e('core/math/statementanalysis'), c = e('core/math/builtin'),
          l = e('core/math/builtinframe'),
          p = e('core/math/parsenode/builtinfunction'),
          f = e('core/math/errormsg'), h = e('core/math/comparators'),
          d = e('core/math/types'), m = e('core/types/graphmode'),
          y = e('core/math/expression-types').ExpressionType,
          g = e('core/math/distribution-spec').DistributionParameterDefaultsMap,
          v = e('core/math/workerconfig');
      s.Base.prototype
          .analyze =
          function(e, t) {
        return u(e, this, this.tryGetConcreteTree(e, t))
      },
          s.FunctionCall
              .prototype.analyze =
              function(e, n) {
            var i = this.tryGetConcreteTree(e, n);
            return !i.isError && g[this._symbol] &&
                       0 === i.getDependencies().length &&
                       (i = r(i).tryGetConcreteTree(e, n)),
                   t(e, n, this, i)
          },
          s.Expression
              .prototype.analyze =
              function(e, r) {
            return t(e, r, this, this.tryGetConcreteTree(e, r))
          },
  s.FunctionDefinition.prototype.analyze =
          function(e, t) {
    if (l[this._symbol]) return this.asEquation().analyze(e, t);
    var r = this._symbol.split('_')[0];
    if (p[r]) return u(e, this, f.cannotRedefine(this._symbol, r));
    var n = this.tryGetConcreteTree(e, t);
    if (n.isError) return u(e, this, n);
    var i = this._argSymbols, a = n.getDependencies();
    if (-1 !== a.indexOf(this._symbol))
      return u(e, this, f.selfReferentialFunction(this._symbol));
    var o = a.filter(function(e) {
      return -1 === i.indexOf(e)
    });
    return e.unplottablePolarFunction(this._symbol, a) ?
        u(e, this, f.unplottablePolarFunction()) :
        o.some(e.assignmentForbidden) ?
                   u(e, this,
          f.addArgumentsToDefinition(o, this._symbol, i).setDependencies(a)) :
        o.length ? u(e, this,
                     f.tooManyVariables(this.getSliderVariables(e, n))
                         .setDependencies(a)) :
                   u(e, this, n)
  },
  s.Assignment.prototype.analyze =
          function(e, t, n) {
    var i = this._symbol;
    if (!e.validLHS(i)) return u(e, this, f.invalidLHS(i));
    if (l[i]) return this.asEquation().analyze(e, t);
    var a = this.tryGetConcreteTree(e, t);
    if (!a.isError && this._expression instanceof s.FunctionCall &&
            g[this._expression._symbol] && 0 === a.getDependencies().length &&
            (a = r(a).tryGetConcreteTree(e, t)),
        a.isError)
      return u(e, this, a);
    var o = a.getDependencies();
    if (this.isEquation(a)) return this.asEquation().analyze(e, t);
    if (o.length > 1) {
      var c = this.getSliderVariables(e, a);
      return c.length ?
          u(e, this, f.tooManyVariables(c).allowExport().setDependencies(o)) :
          u(e, this, a)
    }
    var p = this.getMoveStrategy(e, t, a, n);
    if (p) {
      var h = this.getDefaultDragMode(p);
      return u(e, this, s.MovablePoint(a.args, p, h))
    }
    return u(e, this, a)
  },
  s.Regression.prototype.analyze =
          function(e, t, r, n, i) {
    return u(e, this, this.tryOptimize(e, t, r, n, i))
  },
  s.Polygon.prototype.analyze = n, s.Histogram.prototype.analyze = n,
  s.Object3D.prototype.analyze = n, s.DotPlot.prototype.analyze = n,
  s.BoxPlot.prototype.analyze = n, s.TTest.prototype.analyze = i(c.ttest),
  s.IndependentTTest.prototype.analyze = i(c.ittest),
  s.Stats.prototype.analyze =
          function(e, t) {
    var r = this.tryGetConcreteTree(e, t), n = r.getDependencies();
    if (n.length)
      return u(
          e, this,
          f.tooManyVariables(this.getSliderVariables(e, r)).setDependencies(n));
    var i = u(e, this, this.tryGetConcreteTree(e, t));
    if (!r.isError) {
      i.evaluationState.expression_type = y.STATS;
      var a = r.args.map(function(e) {
        return e.asValue()
      });
      i.evaluationState.stats_results = c.stats.apply(null, a)
    }
    return i
  },
  s.Equation.prototype.analyze = s.BaseComparator.prototype.analyze =
          function(e, t) {
    var r = '=' !== this.getOperator();
    if (!v.plotInequalities && r) return u(e, this, f.inequalitiesDisabled());
    var n = this.trySolve(e, t);
    if (n.isError) return u(e, this, n);
    if (n instanceof s.SolvedEquation && n.getDependencies().length) {
      var i = n.getDependencies().concat(n._symbol);
      if (!e.validImplicitVariables(i))
        return u(e, this, f.invalidImplicitVariables().setDependencies(i))
    }
    return this.getGraphMode(e, n) !== m.IMPLICIT ||
            e.validImplicitVariables(n.getDependencies()) ?
        u(e, this, n) :
        u(e, this,
          f.invalidImplicitVariables().setDependencies(n.getDependencies()))
  },
  s.DoubleInequality.prototype.analyze = function(e, t) {
    if (!v.plotInequalities) return u(e, this, f.inequalitiesDisabled());
    var r = this.tryGetConcreteTree(e, t);
    if (r.isError) return u(e, this, r);
    var n = r.getDependencies();
    return h.table[this._operators[0]].direction !==
            h.table[this._operators[1]].direction ?
        u(e, this, f.mismatchedDoubleInequality()) :
        e.validDoubleInequalitySymbol(r._symbol) &&
            e.validDoubleInequalityVariables(n) ?
        n.length > 2 ?
        u(e, this,
          f.tooManyVariables(this.getSliderVariables(e, r))
              .setDependencies(n)) :
            -1 !== r._expressions[0].getDependencies().indexOf(r._symbol) ||
                -1 !== r._expressions[1].getDependencies().indexOf(r._symbol) ?
        u(e, this, f.complicatedDoubleInequality().setDependencies(n)) :
        u(e, this, r) :
        u(e, this, f.invalidDoubleInequalityVariables().setDependencies(n))
  }, s.And.prototype.analyze = function(e, t) {
    var r = this.tryGetConcreteTree(e, t);
    if (r.isError) return u(e, this, r);
    var n = r.getDependencies();
    return n.length ?
        e.validDoubleInequalityVariables(n) ?
        u(e, this, f.complicatedDoubleInequality().setDependencies(n)) :
        u(e, this,
          f.tooManyVariables(this.getSliderVariables(e, r))
              .setDependencies(n)) :
        u(e, this, r)
  }, s.OrderedPair.prototype.analyze = function(e, r, n) {
    var i = this.tryGetConcreteTree(e, r);
    if (i.isError) return u(e, this, i);
    var a = this.getMoveStrategy(e, r, i, n);
    if (a) {
      var o = this.getDefaultDragMode(a);
      return u(e, this, s.MovablePoint(i.args, a, o))
    }
    return t(e, r, this, i)
  }, s.Table.prototype.analyze = function(e, t) {
    for (var r = Object.create(t), n = [], i = 0; i < this.columns.length;
         i++) {
      var o = this.columns[i].analyze(e, r, t);
      if (0 === i &&
              (o.concreteTree.isIndependent ?
                   e.validFirstColumnVariable(o.concreteTree.header._symbol) ?
                   o.concreteTree.header._symbol :
                   o = u(e, this.columns[i], f.invalidFirstTableColumn()) :
                   o =
                       u(e, this.columns[i],
                         f.invalidDependentFirstTableColumn())),
          o.concreteTree.isIndependent)
        o.rawTree.exportToLocal(o.concreteTree, r);
      else if (!o.concreteTree.isError) {
        var c = o.concreteTree.header.getDependencies(), l = a(c, r);
        l.length &&
            (o = u(
                 e, this.columns[i], f.tooManyVariables(l).setDependencies(l)))
      }
      n.push(o.concreteTree)
    }
    var p = s.Table(n), h = u(e, this, p);
    return h.evaluationState.is_graphable = !0, h
  }, s.TableColumn.prototype.analyze = function(e, t, r) {
    var n = this.header.tableError();
    if (n) return u(e, this, f.invalidTableHeader(n));
    var i = this.tryGetConcreteTree(e, t, r);
    if (i.isError) return u(e, this, i);
    if (i.header.isError) return u(e, this, i.header);
    if (i.values.isError) return u(e, this, i.values);
    for (var a = 0; a < i.values.length; a++)
      if (!i.values[a].isError) {
        var o = this.values[a] && this.values[a].tableError();
        if (o)
          i.values[a] = f.invalidTableEntry(o);
        else {
          var s = i.values[a].getDependencies();
          s.length && (i.values[a] = f.tooManyVariables(s).setDependencies(s))
        }
      }
    return u(e, this, i)
  }, s.Image.prototype.analyze = function(e, t, r) {
    var n = this.tryGetConcreteTree(e, t);
    if (n.radianAngle.isError || n.center.isError || n.width.isError ||
        n.height.isError || n.opacity.isError)
      return u(e, this, n);
    var i = n.center.getDependencies(), a = n.radianAngle.getDependencies(),
        o = n.width.getDependencies(), c = n.height.getDependencies(),
        l = n.opacity.getDependencies();
    return i.length || a.length || o.length || c.length || l.length ?
        u(e, this, s.Image({
          center: i.length ? f.tooManyVariables(a).setDependencies(i) :
                             n.center,
          radianAngle: a.length ? f.tooManyVariables(a).setDependencies(a) :
                                  n.radianAngle,
          width: o.length ? f.tooManyVariables(o).setDependencies(o) : n.width,
          height: c.length ? f.tooManyVariables(c).setDependencies(c) :
                             n.height,
          opacity: l.length ? f.tooManyVariables(l).setDependencies(l) :
                              n.opacity
        })) :
        (n.moveStrategy = this.getMoveStrategy(e, t, n, r), u(e, this, n))
  }, s.Slider.prototype.analyze = function(e, t) {
    var r, n = this.tryGetConcreteTree(e, t), i = n.sliderInfo;
    if (i.missingVars.length) {
      var a = o.unique(i.missingVars);
      r =
          u(e, this,
            f.tooManyVariables(e.sliderVariables(a))
                .setDependencies(a)
                .allowExport())
    } else
      r = u(e, this, n);
    var s = r.evaluationState;
    if (v.sliders) {
      s.assignment = i.exportedSymbol, s.slider_min_number = i.values.min,
      s.slider_max_number = i.values.max, s.slider_step_number = i.values.step,
      s.slider_min_valid = i.valids.min, s.slider_max_valid = i.valids.max,
      s.slider_step_valid = i.valids.step;
      var c = s.slider_min_valid && s.slider_max_valid && s.slider_step_valid;
      s.is_slider = !0, s.raw_slider_latex = this.getInputString(),
      s.is_slidable = c, s.is_animatable = s.is_slidable && !s.is_graphable,
      i.errMsg && (s.error = i.errMsg.getError())
    }
    return delete s.is_evaluable, delete s.zero_values, r
  }
    });
define(
    'core/math/features/analyzeFourFunction',
    [
      'require', 'parsenodes', 'core/math/statementanalysis',
      'core/math/errormsg', 'core/math/parsenode/builtinfunction',
      'core/math/builtinconstants'
    ],
    function(e) {
      'use strict';
      function t(e, t) {
        return n(e, this, i.inequalitiesUnsupported())
      }
      var r = e('parsenodes'), n = e('core/math/statementanalysis'),
          i = e('core/math/errormsg'),
          a = e('core/math/parsenode/builtinfunction'),
          o = e('core/math/builtinconstants');
      r.Base.prototype.analyzeFourFunction =
          function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        return r.isError ? n(e, this, r) : n(e, this, i.parseError())
      },
      r.Expression.prototype.analyzeFourFunction =
          function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        if (r.isError) return n(e, this, r);
        var s = r.getDependencies();
        if (s.length > 0) {
          var u, c = s[0];
          return u = a.hasOwnProperty(c) ? i.functionUnsupported(c) :
                     o.hasOwnProperty(c) ? i.constantUnsupported(c) :
                                           i.variablesUnsupported(c),
                 n(e, this, u)
        }
        return n(e, this, r)
      },
      r.Assignment.prototype.analyzeFourFunction =
          function(e, t) {
        return n(e, this, i.assignmentsUnsupported())
      },
      r.FunctionDefinition.prototype.analyzeFourFunction =
          function(e, t) {
        return n(e, this, i.functionDefinitionsUnsupported())
      },
      r.Equation.prototype.analyzeFourFunction =
          function(e, t) {
        return n(e, this, i.equationsUnsupported())
      },
      r.And.prototype.analyzeFourFunction = t,
      r.DoubleInequality.prototype.analyzeFourFunction = t,
      r.BaseComparator.prototype.analyzeFourFunction = t,
      r.Regression.prototype.analyzeFourFunction = function(e, t) {
        return n(e, this, i.regressionsUnsupported())
      }, r.OrderedPair.prototype.analyzeFourFunction = function(e, t) {
        return n(e, this, i.pointsUnsupported())
      }
    });
define(
    'core/math/features/analyzeScientific',
    [
      'require', 'parsenodes', 'core/math/statementanalysis',
      'core/math/errormsg', 'core/math/builtinframe'
    ],
    function(e) {
      'use strict';
      function t(e, t) {
        return n(e, this, i.inequalitiesUnsupported())
      }
      var r = e('parsenodes'), n = e('core/math/statementanalysis'),
          i = e('core/math/errormsg'), a = e('core/math/builtinframe');
      r.Base.prototype.analyzeScientific =
          function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        return r.isError ? n(e, this, r) : n(e, this, i.parseError())
      },
      r.Expression.prototype.analyzeScientific =
          function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        if (r.isError) return n(e, this, r);
        var a = r.getDependencies();
        return a.length > 0 ? n(e, this, i.tooManyVariables(a)) : n(e, this, r)
      },
      r.Assignment.prototype.analyzeScientific =
          function(e, t) {
        var r = this._symbol;
        if (a[r]) return n(e, this, i.cannotRedefine(r));
        var o = this.tryGetConcreteTree(e, t);
        if (o.isError) return n(e, this, o);
        var s = o.getDependencies();
        return this.isEquation(o) ? n(e, this, i.equationsUnsupported()) :
            s.length > 0          ? n(e, this, i.tooManyVariables(s)) :
                                    n(e, this, o)
      },
      r.FunctionDefinition.prototype.analyzeScientific =
          function(e, t) {
        if (a[this._symbol]) return n(e, this, i.cannotRedefine(this._symbol));
        var r = this.tryGetConcreteTree(e, t);
        if (r.isError) return n(e, this, r);
        var o = this._argSymbols, s = r.getDependencies();
        if (-1 !== s.indexOf(this._symbol))
          return n(e, this, i.selfReferentialFunction(this._symbol));
        var u = s.filter(function(e) {
          return -1 === o.indexOf(e)
        });
        return u.length ?
            n(e, this, i.addArgumentsToDefinition(u, this._symbol, o)) :
            n(e, this, r)
      },
      r.Equation.prototype.analyzeScientific =
          function(e, t) {
        return n(e, this, i.equationsUnsupported())
      },
      r.And.prototype.analyzeScientific = t,
      r.DoubleInequality.prototype.analyzeScientific = t,
      r.BaseComparator.prototype.analyzeScientific = t,
      r.Regression.prototype.analyzeScientific = function(e, t) {
        return n(e, this, i.regressionsUnsupported())
      }, r.OrderedPair.prototype.analyzeScientific = function(e, t) {
        return n(e, this, i.pointsUnsupported())
      }
    });
define(
    'core/math/features/analyzeSingleExpressionScientific',
    [
      'require', 'parsenodes', 'core/math/statementanalysis',
      'core/math/errormsg', 'core/math/parsenode/builtinfunction',
      'core/math/builtinconstants'
    ],
    function(e) {
      'use strict';
      function t(e, t) {
        return n(e, this, i.inequalitiesUnsupported())
      }
      var r = e('parsenodes'), n = e('core/math/statementanalysis'),
          i = e('core/math/errormsg'),
          a = e('core/math/parsenode/builtinfunction'),
          o = e('core/math/builtinconstants');
      r.Base.prototype.analyzeSingleExpressionScientific =
          function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        return r.isError ? n(e, this, r) : n(e, this, i.parseError())
      },
      r.Expression.prototype.analyzeSingleExpressionScientific =
          function(e, t) {
        var r = this.tryGetConcreteTree(e, t);
        if (r.isError) return n(e, this, r);
        var s = r.getDependencies();
        if (s.length > 0) {
          var u, c = s[0];
          return u = a.hasOwnProperty(c) ? i.functionUnsupported(c) :
                     o.hasOwnProperty(c) ? i.constantUnsupported(c) :
                                           i.variablesUnsupported(c),
                 n(e, this, u)
        }
        return n(e, this, r)
      },
      r.Assignment.prototype.analyzeSingleExpressionScientific =
          function(e, t) {
        return n(e, this, i.assignmentsUnsupported())
      },
      r.FunctionDefinition.prototype.analyzeSingleExpressionScientific =
          function(e, t) {
        return n(e, this, i.functionDefinitionsUnsupported())
      },
      r.Equation.prototype.analyzeSingleExpressionScientific =
          function(e, t) {
        return n(e, this, i.equationsUnsupported())
      },
      r.And.prototype.analyzeSingleExpressionScientific = t,
      r.DoubleInequality.prototype.analyzeSingleExpressionScientific = t,
      r.BaseComparator.prototype.analyzeSingleExpressionScientific = t,
      r.Regression.prototype.analyzeSingleExpressionScientific =
          function(e, t) {
        return n(e, this, i.regressionsUnsupported())
      },
      r.OrderedPair.prototype.analyzeSingleExpressionScientific = function(
          e, t) {
        return n(e, this, i.pointsUnsupported())
      }
    });
define('core/lib/dragmode', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e) {
    return e ? 'none' === e[0].type && 'none' === e[1].type ? i.NONE :
            'none' === e[1].type                            ? i.X :
            'none' === e[0].type                            ? i.Y :
                                                              i.XY :
               i.NONE
  }
  function n(e, t) {
    var n = r(t);
    switch (e) {
      case i.NONE:
        return i.NONE;
      case i.AUTO:
      case i.XY:
        return n;
      case i.X:
        return n === i.X || n === i.XY ? i.X : i.NONE;
      case i.Y:
        return n === i.Y || n === i.XY ? i.Y : i.NONE;
      default:
        return i.NONE
    }
  }
  Object.defineProperty(t, '__esModule', {value: !0});
  var i;
  !function(e) {
    e.NONE = 'NONE', e.X = 'X', e.Y = 'Y', e.XY = 'XY', e.AUTO = 'AUTO'
  }(i = t.DragMode || (t.DragMode = {})),
      t.reconcileDragMode = n
});
define(
    'core/math/features/getgraphmode',
    [
      'require', 'parsenodes', 'core/types/graphmode', 'core/lib/dragmode',
      'core/lib/dragmode', 'core/math/types'
    ],
    function(e) {
      'use strict';
      function t(e, t) {
        var r;
        return r = e && e.hasOwnProperty('dragMode') ?
                   e.dragMode === u.AUTO ? t.defaultDragMode : e.dragMode :
                   t.defaultDragMode,
               s(r, t.moveStrategy)
      }
      function r(e, r) {
        var n = r.getDependencies();
        switch (r.valueType) {
          case c.Point:
          case c.ListOfPoint:
            return r.isMovablePoint && t(this.userData, r) !== u.NONE ?
                o.XYPOINT_MOVABLE :
                0 === n.length ?
                o.XYPOINT :
                e.validParametricVariables(n) ?
                2 === e.dimensions() ? o.PARAMETRIC : o.PARAMETRIC_CURVE_3D :
                o.NONE;
          case c.Number:
          case c.ListOfNumber:
            return 2 === e.dimensions() && 1 === n.length ? o.Y :
                3 === e.dimensions() && 2 === n.length    ? o.Z_3D :
                                                            o.NONE;
          default:
            return o.NONE
        }
      }
      function n(e, t) {
        var r = t._expression.getDependencies();
        if (r.length > 1) return o.NONE;
        if (t._expression.valueType !== c.Number &&
            t._expression.valueType !== c.ListOfNumber)
          return o.NONE;
        var n = t._symbol;
        return e.graphMode(n, r)
      }
      function i(e, t) {
        return t.isError ? o.NONE : o.VISUALIZATION
      }
      var a = e('parsenodes'), o = e('core/types/graphmode'),
          s = e('core/lib/dragmode').reconcileDragMode,
          u = e('core/lib/dragmode').DragMode, c = e('core/math/types');
      a.Base.prototype.getGraphMode =
          function(e, t) {
        return o.NONE
      },
      a.Expression.prototype.getGraphMode = r,
      a.Equation.prototype.getGraphMode =
          a.BaseComparator.prototype.getGraphMode =
              function(e, t) {
            var r = t.getDependencies();
            return t.isConstant ?
                o.NONE :
                t instanceof a.SolvedEquation ?
                0 === r.length ? e.graphableAsConstant(t._symbol) ?
                                 e.constantGraphMode(t._symbol) :
                                 o.NONE :
                                 n(e, t) :
                r.length <= 2 ? o.IMPLICIT :
                                o.NONE
          },
      a.DoubleInequality.prototype.getGraphMode =
          function(e, t) {
        return e.constantGraphMode(t._symbol)
      },
      a.Assignment.prototype.getGraphMode =
          function(e, t) {
        if (t instanceof a.SolvedEquation) return n(e, t);
        if (this.isEquation(t)) return this.asEquation().getGraphMode(e, t);
        var i = t.getDependencies();
        switch (t.valueType) {
          case c.Number:
          case c.ListOfNumber:
            switch (i.length) {
              case 0:
                return e.graphableAsConstant(this._symbol) ?
                    e.constantGraphMode(this._symbol) :
                    o.NONE;
              case 1:
                return t.valueType !== c.ListOfNumber ||
                        e.graphableListVariables(this._symbol, i[0]) ?
                    this.isSlider ? o.NONE : e.graphMode(this._symbol, i) :
                    o.NONE;
              case 2:
                return 3 === e.dimensions() && 'z' === this._symbol ? o.Z_3D :
                                                                      o.NONE;
              default:
                return o.NONE
            }
            break;
          default:
            return r.call(this, e, t)
        }
      },
      a.FunctionDefinition.prototype.getGraphMode =
          function(e, t) {
        if (1 !== this._argSymbols.length) return o.NONE;
        var r = e.graphMode(this._symbol, this._argSymbols),
            n = t.getDependencies();
        switch (t.valueType) {
          case c.Number:
          case c.ListOfNumber:
            switch (n.length) {
              case 0:
                return r;
              case 1:
                return n[0] !== this._argSymbols[0] ? o.NONE : r;
              default:
                return o.NONE
            }
            break;
          default:
            return o.NONE
        }
      },
      a.Regression.prototype.getGraphMode =
          function(e, t) {
        return this.isLhsSimple && t.isModelValid ?
            1 !== t.model.getDependencies().length ? o.NONE : o.Y :
            o.NONE
      },
      a.Polygon.prototype.getGraphMode =
          function(e, t) {
        return t.isError ? o.NONE : o.POLYGONFILL
      },
      a.Object3D.prototype.getGraphMode =
          function(e, t) {
        return t.isError ? o.NONE : o.OBJECT3D
      },
      a.Histogram.prototype.getGraphMode = i,
      a.DotPlot.prototype.getGraphMode = i,
      a.BoxPlot.prototype.getGraphMode = i,
      a.Image.prototype.getGraphMode = function(e, t) {
        return this.userData.showPoints ? this.center.isError ||
                    this.radianAngle.isError || this.width.isError ||
                    this.height.isError || this.opacity.isError ?
                                          o.NONE :
                                          o.XYPOINT :
                                          o.NONE
      }
    });
define(
    'core/math/features/getgraphinfo',
    [
      'require', 'parsenodes', 'core/math/builtinframe',
      'core/math/domaintypes', 'core/math/policy'
    ],
    function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/math/builtinframe'),
          n = e('core/math/domaintypes'),
          i = e('core/math/policy').defaultPolicy;
      t.Base.prototype.getGraphInfo = function(e, t) {
        var r, i, a = t.getDependencies();
        switch (a.length) {
          case 0:
            r = t.getLinearCoefficients(), i = t.boundDomain('x');
            break;
          case 1:
            i = t.boundDomain(a[0]),
            'known' === i.type && (r = t.getLinearCoefficients());
            break;
          case 2:
            i = n.unknownDomain()
        }
        return {
          graphMode: this.getGraphMode(e, t), color: this.userData.color,
              pointStyle: this.userData.pointStyle,
              lineStyle: this.userData.lineStyle, operator: this.getOperator(),
              isLinear: !!r, linearCoefficients: r, domainBound: i
        }
      }, t.Base.prototype.getLinearCoefficients = function() {
        var e = this.getDependencies();
        switch (e.length) {
          case 0:
            return [+this.asValue(), 0];
          case 1:
            if (this.polynomialOrder(e[0]) > 1) return;
            var t = this.getPolynomialCoefficients(e[0]);
            return [
              t[0] ? +t[0].tryGetConcreteTree(i, r).asValue() : 0,
              t[1] ? +t[1].tryGetConcreteTree(i, r).asValue() : 0
            ];
          default:
            return
        }
      }, t.OrderedPair.prototype.getLinearCoefficients = function() {
        var e = this.args[0].getLinearCoefficients(),
            t = this.args[1].getLinearCoefficients();
        if (e && t) return [e, t]
      }
    });
define(
    'core/math/features/getMoveStrategy',
    [
      'require', 'parsenodes', 'core/math/types', 'core/math/maybe-rational',
      'core/math/builtinframe', 'core/math/functions'
    ],
    function(e) {
      'use strict';
      function t(e) {
        return {
          type: 'none', inputString: e
        }
      }
      function r(e) {
        return {
          type: 'updateCoordinate', inputString: e
        }
      }
      function n(e, t, r) {
        return {
          type: 'updateSlider', inputString: e, id: t, coefficients: r
        }
      }
      function i(e, t, r, n) {
        return {
          type: 'updateSliderNonlinear', inputString: e, id: t,
              initialValue: r.constant_value, min: r.slider_min_number,
              max: r.slider_max_number, compiled: n
        }
      }
      function a(e, t, r, n, i, a) {
        for (var o = t.getDependencies(), s = 0; s < o.length; s++)
          if (i[o[s]]) return !1;
        for (var u = o.length - 1; u >= 0; u--) {
          var c = o[u];
          if (!a[c]) {
            var l = n[c];
            if (void 0 !== l) {
              var p = r[c];
              if (1 === p.order) {
                var f = p.tree, d = f.getPolynomialCoefficients(c),
                    y = d[1] ? d[1].getConcreteTree(e, h) : m,
                    g = d[0] ? d[0].getConcreteTree(e, h) : m;
                if (g.isConstant && y.isConstant && isFinite(g.asValue()) &&
                    isFinite(y.asValue()) && 0 !== y.asValue()) {
                  return {
                    symbol: c, id: l,
                        coefficients:
                            [-g.asValue() / y.asValue(), 1 / y.asValue()]
                  }
                }
              }
            }
          }
        }
        return !1
      }
      function o(e) {
        for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0;
        return t
      }
      function s(e, t) {
        var r = o(e), n = {};
        for (var i in t) {
          var a = t[i].evaluationState.assignment;
          t[i].evaluationState.is_slidable && r[a] && (n[a] = i)
        }
        return n
      }
      function u(e, t, r, n) {
        for (var i = [], a = 0; a < r.length; a++) {
          var o = r[a], s = {};
          i.push(s);
          for (var u = 0; u < n.length; u++) {
            var c = n[u], p = Object.create(t);
            p[c] = l.FreeVariable(c);
            var f = o.tryGetConcreteTree(e, p);
            f.isError ? s[c] = {tree: f, order: 1 / 0} : s[c] = {
              tree: f,
              order: f.polynomialOrder(c)
            }
          }
        }
        return i
      }
      function c(e, t, r) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          0 !== t[i].order && (r[i] = !0)
        }
      }
      var l = e('parsenodes'), p = e('core/math/types'),
          f = e('core/math/maybe-rational').maybeRational,
          h = e('core/math/builtinframe'), d = e('core/math/functions'),
          m = l.Constant(f(0, 1));
      l.Base.prototype
          .getMoveStrategy = function() {},
          l.Assignment
              .prototype.getMoveStrategy =
              function(e, t, r, n) {
            if (this._expression instanceof l.OrderedPair)
              return this._expression.getMoveStrategy(e, t, r, n)
          },
  l.OrderedPair.prototype.getMoveStrategy = function(e, o, f, h) {
    if (f.valueType === p.Point && 0 === f.getDependencies().length) {
      for (var m = this.getDependencies(), y = s(m, h), g = Object.keys(y),
               v = this.args, b = u(e, o, v, g), x = [], _ = {}, S = {}, M = 0;
           M < 2; M++) {
        var E = v[M], w = E.getInputString();
        if (E.isConstant)
          x[M] = r(w);
        else {
          var D = a(e, E, b[M], y, _, S);
          D &&
              (x[M] = n(w, D.id, D.coefficients), _[D.symbol] = !0,
               c(g, b[M], S)),
              x[M] || (x[M] = t(w))
        }
      }
      if ('none' !== x[0].type || 'none' !== x[1].type) return x;
      if (1 === g.length) {
        var T, P = g[0], I = y[P];
        try {
          T = l.OrderedPair([b[0][P].tree, b[1][P].tree]).getCompiledFunction()
        } catch (e) {
          return
        }
        return d.dehydrateCompiledFunction(T), [
          i(v[0].getInputString(), I, h[I].evaluationState, T),
          t(v[1].getInputString())
        ]
      }
    }
  }, l.Image.prototype.getMoveStrategy = function(e, i, o, l) {
    if ((!this.userData || !1 !== this.userData.shouldGraph) &&
        'OrderedPair' === o.center.type && o.center.args[0].isConstant &&
        o.center.args[1].isConstant && o.width.isConstant &&
        o.height.isConstant && o.radianAngle.isConstant &&
        o.opacity.isConstant) {
      var p = this.getDependencies(), f = s(p, l), h = Object.keys(f),
          d = [this.width, this.height];
      'OrderedPair' === this.center.type &&
          d.push(this.center.args[0], this.center.args[1]);
      for (var m = [], y = {}, g = {}, v = u(e, i, d, h), b = [2, 3, 0, 1],
               x = 0;
           x < b.length; x++) {
        var _ = b[x], S = d[_];
        if (S) {
          var M = S.getInputString();
          if (S.isConstant)
            m[_] = r(M);
          else {
            var E = a(e, S, v[_], f, y, g);
            E &&
                (m[_] = n(M, E.id, E.coefficients), y[E.symbol] = !0,
                 c(h, v[_], g)),
                m[_] || (m[_] = t(M))
          }
        } else
          m[_] = t('')
      }
      if ('none' !== m[0].type || 'none' !== m[1].type ||
          'none' !== m[2].type || 'none' !== m[3].type)
        return m
    }
  }
    });
define(
    'core/math/features/getDefaultDragMode',
    ['require', 'parsenodes', 'core/lib/dragmode'], function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/lib/dragmode').DragMode;
      t.Base.prototype.getMoveStrategy = function() {
        return r.NONE
      }, t.Assignment.prototype.getDefaultDragMode = function(e) {
        return 'none' !== e[0].type && 'none' !== e[1].type ? r.XY :
            'none' !== e[0].type                            ? r.X :
            'none' !== e[1].type                            ? r.Y :
                                                              r.NONE
      }, t.OrderedPair.prototype.getDefaultDragMode = function(e) {
        return 'updateSlider' === e[0].type && 'updateSlider' === e[1].type ?
                                           r.XY :
            'updateSlider' === e[0].type ? r.X :
            'updateSlider' === e[1].type ? r.Y :
                                           r.NONE
      }
    });
define(
    'core/math/features/tableinfo',
    [
      'require', 'parsenodes', 'core/math/types', 'core/lib/label',
      'core/math/distribution-spec'
    ],
    function(e) {
      'use strict';
      var t = e('parsenodes'), r = t.List, n = e('core/math/types'),
          i = e('core/lib/label'),
          a = e('core/math/distribution-spec').getFunctionSpecFromTree;
      t.Base.prototype.tableInfo = function(e, t) {
        return !1
      }, t.Identifier.prototype.tableInfo = function(e, t) {
        return !!e.validFirstColumnVariable(this._symbol) && {
          independent_variable: this._symbol,
              dependent_column: this.getInputString(), by_reference: !1
        }
      }, t.Expression.prototype.tableInfo = function(e, t) {
        var i = t.getDependencies();
        if (a(this)) return !1;
        switch (t.valueType) {
          case n.Point:
          case n.ListOfPoint:
            if (0 !== i.length) return !1;
            if (t.isMovablePoint &&
                ('updateSlider' === t.moveStrategy[0].type ||
                 'updateSlider' === t.moveStrategy[1].type))
              return !1;
            return {
              independent_variable: 'x',
              dependent_column: 'y',
              by_reference: !1,
              values: r.wrap(t).mapElements(
                  e,
                  function(e) {
                    return e.asArray()
                  })
            };
          case n.Number:
            if (1 !== i.length) return !1;
            var o = i[0];
            return !!e.validFirstColumnVariable(o) && {
              independent_variable: o,
              dependent_column: this.getInputString(),
              by_reference: !1
            };
          default:
            return !1
        }
      }, t.Assignment.prototype.tableInfo = function(e, r) {
        if (r instanceof t.SolvedEquation) return !1;
        if (!this.getInputString().length) return !1;
        if (a(this)) return !1;
        var n = r.getDependencies();
        if (n.length > 1) return !1;
        var o;
        if (0 === n.length) {
          if (!e.tableableAsConstant(this._symbol)) return !1;
          o = e.implicitIndependent(this._symbol)
        } else
          o = n[0];
        return !!e.validFirstColumnVariable(o) && {
          independent_variable: o,
              dependent_column: e.assignmentForbidden(this._symbol) ?
              i.trimLatex(this.getInputString().replace(/[^=]*=/, '')) :
              i.trimLatex(this.getInputString().split('=')[0]),
              by_reference: !e.assignmentForbidden(this._symbol)
        }
      }, t.FunctionDefinition.prototype.tableInfo = function(e, t) {
        if (1 !== this._argSymbols.length) return !1;
        if (!this.getInputString().length) return !1;
        if (t.getDependencies().length > 1) return !1;
        var r = this._argSymbols[0];
        if (!e.validFirstColumnVariable(r)) return !1;
        var n = e.assignmentForbidden(this._symbol);
        return {
          independent_variable: r,
              dependent_column: n ?
              i.trimLatex(this.getInputString().replace(/[^=]*=/, '')) :
              i.trimLatex(this.getInputString().split('=')[0]),
              by_reference: !n
        }
      }, t.BaseComparator.prototype.tableInfo = function(e, t) {
        return !1
      }, t.DoubleInequality.prototype.tableInfo = function(e, t) {
        return !1
      }, t.Equation.prototype.tableInfo = function(e, t) {
        return !1
      }
    });
define(
    'core/math/features/tableerror',
    ['require', 'parsenodes', 'core/lib/worker-i18n'], function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/lib/worker-i18n');
      t.Base.prototype.tableError =
          function() {
        return this.isInequality() ? r.t('Inequalities are not allowed.') :
                                     !(this instanceof t.Expression) &&
                r.t('This type of expression is not allowed.')
      },
      t.List.prototype.tableError =
          function() {
        return r.t('Lists are not allowed.')
      },
      t.Equation.prototype.tableError = t.Assignment.prototype.tableError =
          function() {
        return r.t('Equations are not allowed.')
      },
      t.FunctionDefinition.prototype.tableError = function() {
        return r.t('Function definitions are not allowed.')
      }, t.Regression.prototype.tableError = function() {
        return r.t('Regressions are not allowed.')
      }
    });
define('core/lib/deepCopy', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e) {
    var t = e;
    if (t && 'function' == typeof t.toJSON && (t = t.toJSON()), !t) return t;
    if ('object' != typeof t) return t;
    if (Array.isArray(t)) return t.map(r);
    var n = {};
    for (var i in t) t.hasOwnProperty(i) && (n[i] = r(t[i]));
    return n
  }
  Object.defineProperty(t, '__esModule', {value: !0}), t.default = r
});
define('core/types/styles', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0});
  !function(e) {
    e.POINT = 'POINT', e.OPEN = 'OPEN', e.CROSS = 'CROSS'
  }(t.PointStyle || (t.PointStyle = {}));
  !function(e) {
    e.SOLID = 'SOLID', e.DASHED = 'DASHED', e.DOTTED = 'DOTTED'
  }(t.LineStyle || (t.LineStyle = {}))
});
define(
    'core/math/cdf-branches',
    [
      'require', 'exports', 'tslib', 'core/lib/deepCopy', 'core/math/plotter',
      'core/math/domaintypes', 'core/types/styles'
    ],
    function(e, t, r, n, i, a, o) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0});
      var s = function(e, t) {
        var n = e.segments, i = t.segments, a = r.__spreadArrays(n, i);
        return r.__assign(r.__assign({}, e), {segments: a})
      }, u = function(e) {
        var t = e.viewState, r = e.graphInfo, s = e.compiled, u = e.derivative,
            c = e.bounds, l = e.included, p = e.discrete, f = n.default(r),
            h = a.intersectDomains(r.domainBound, a.knownDomain(c));
        if ('known' === h.type)
          return f.domainBound = h,
                 p ? f.pointStyle = l ? o.PointStyle.POINT : o.PointStyle.OPEN :
                     f.lineStyle = o.LineStyle.SOLID,
                 i.default.computeGraphData({
                   graphInfo: f,
                   viewState: t,
                   compiled: s,
                   derivative: u,
                   discrete: p
                 })
      };
      t.makeCDFTopBranches = function(e) {
        var t, r = e.viewState, n = e.graphInfo, a = e.compiled,
               o = e.derivative, c = e.bounds, l = e.discrete,
               p = e.maxOverride, f = c[0], h = c[1], d = [];
        if (l) {
          f = Math.ceil(f), h = Math.floor(h);
          var m = void 0 !== p ? p : 1 / 0;
          if (f === -1 / 0 && h >= m)
            t = u({
              bounds: [f, m],
              included: !0,
              viewState: r,
              graphInfo: n,
              compiled: a,
              derivative: o,
              discrete: l
            }),
            d.push(t);
          else if (f === -1 / 0 && h < 1 / 0)
            t = u({
              bounds: [f, h],
              included: !0,
              viewState: r,
              graphInfo: n,
              compiled: a,
              derivative: o,
              discrete: l
            }),
            d.push(t), d.push(u({
              bounds: [h + 1, m],
              included: !1,
              viewState: r,
              graphInfo: n,
              compiled: a,
              derivative: o,
              discrete: l
            }));
          else if (f > -1 / 0 && h >= m)
            t = u({
              bounds: [f, m],
              included: !0,
              viewState: r,
              graphInfo: n,
              compiled: a,
              derivative: o,
              discrete: l
            }),
            d.push(u({
              bounds: [-1 / 0, f - 1],
              included: !1,
              viewState: r,
              graphInfo: n,
              compiled: a,
              derivative: o,
              discrete: l
            })),
            d.push(t);
          else {
            t = u({
              bounds: [f, h],
              included: !0,
              viewState: r,
              graphInfo: n,
              compiled: a,
              derivative: o,
              discrete: l
            });
            var y = u({
              bounds: [-1 / 0, f - 1],
              included: !1,
              viewState: r,
              graphInfo: n,
              compiled: a,
              derivative: o,
              discrete: l
            }),
                g = u({
                  bounds: [h + 1, m],
                  included: !1,
                  viewState: r,
                  graphInfo: n,
                  compiled: a,
                  derivative: o,
                  discrete: l
                });
            d.push(t);
            var v = void 0;
            y && g && (v = s(y, g), d.push(v))
          }
        } else
          t = u({
            bounds: [f, h],
            included: !0,
            viewState: r,
            graphInfo: n,
            compiled: a,
            derivative: o,
            discrete: l
          }),
          d.push(i.default.computeGraphData(
              {viewState: r, graphInfo: n, compiled: a, derivative: o}));
        return {
          cdfTopBranch: t, topBranches: d
        }
      }
    });
define('core/math/copy-defined-pois', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0});
  var r = function(e) {
    for (var t = [], r = [], n = e.length, i = 0; i < n; i++)
      t.push(e[i][0]), r.push(e[i][1]);
    return {
      defined: {x: t, y: r}
    }
  };
  t.default = r
});
define('core/types/opacity', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.LOW = .2, t.DEFAULT = .4, t.HIGH = .8
});
define('core/types/slider-loop-modes', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e) {
    switch (e) {
      case n.LOOP_FORWARD:
        return 'dcg-icon-arrow-one-way';
      case n.LOOP_FORWARD_REVERSE:
        return 'dcg-icon-arrow-two-way';
      case n.PLAY_ONCE:
        return 'dcg-icon-arrow-once';
      case n.PLAY_INDEFINITELY:
        return 'dcg-icon-arrow-infinite'
    }
  }
  Object.defineProperty(t, '__esModule', {value: !0});
  var n;
  !function(e) {
    e.LOOP_FORWARD_REVERSE = 'LOOP_FORWARD_REVERSE',
    e.LOOP_FORWARD = 'LOOP_FORWARD', e.PLAY_ONCE = 'PLAY_ONCE',
    e.PLAY_INDEFINITELY = 'PLAY_INDEFINITELY'
  }(n = t.SliderLoopMode || (t.SliderLoopMode = {})),
      t.getSliderIcon = r
});
define('core/types/label-sizes', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0});
  !function(e) {
    e.SMALL = 'small', e.MEDIUM = 'medium', e.LARGE = 'large'
  }(t.LabelSize || (t.LabelSize = {}))
});
define('core/types/label-orientations', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0});
  !function(e) {
    e.DEFAULT = 'default', e.LEFT = 'left', e.RIGHT = 'right',
    e.ABOVE = 'above', e.BELOW = 'below'
  }(t.LabelOrientation || (t.LabelOrientation = {}))
});
define(
    'core/lib/default-spec',
    ['require', 'exports', 'underscore', 'core/lib/deepCopy'],
    function(e, t, r, n) {
      'use strict';
      function i(e, t) {
        var n = {};
        for (var i in t)
          t.hasOwnProperty(i) && (r.isEqual(e[i], t[i]) || (n[i] = t[i]));
        return n
      }
      function a(e, t) {
        var n = void 0, i = {};
        for (var a in t)
          t.hasOwnProperty(a) &&
              (r.isEqual(e[a], t[a]) || (i[a] = t[a], n = i));
        return n
      }
      function o(e, t) {
        t || (t = {});
        var r = {};
        for (var i in e)
          e.hasOwnProperty(i) && !t.hasOwnProperty(i) &&
              (r[i] = n.default(e[i]));
        for (var i in t) t.hasOwnProperty(i) && (r[i] = t[i]);
        return r
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.stripDefaults = i, t.stripDefaultsAndMaybeReturnUndefined = a,
          t.populateDefaults = o
    });
define(
    'core/graphing-calc/json/expression',
    [
      'require', 'exports', 'tslib', 'core/types/opacity', 'core/types/styles',
      'core/lib/dragmode', 'core/types/slider-loop-modes',
      'core/types/label-sizes', 'core/types/label-orientations',
      'core/lib/default-spec'
    ],
    function(e, t, r, n, i, a, o, s, u, c) {
      'use strict';
      function l(e) {
        return r.__assign(r.__assign(r.__assign({}, t.DEFAULTS), e), {
          slider: r.__assign(r.__assign({}, t.SLIDER_DEFAULTS), e.slider),
          cdf: r.__assign(r.__assign({}, t.CDF_DEFAULTS), e.cdf),
          vizProps: r.__assign(r.__assign({}, t.VIZ_DEFAULTS), e.vizProps),
          clickableInfo: r.__assign(
              r.__assign({}, t.CLICKABLEINFO_DEFAULTS), e.clickableInfo)
        })
      }
      function p(e) {
        var n = c.stripDefaults(t.DEFAULTS, r.__assign(r.__assign({}, e), {
          slider: c.stripDefaults(t.SLIDER_DEFAULTS, e.slider)
        })),
            i = c.stripDefaultsAndMaybeReturnUndefined(t.CDF_DEFAULTS, e.cdf);
        void 0 === i ? delete n.cdf : n.cdf = i;
        var a =
            c.stripDefaultsAndMaybeReturnUndefined(t.VIZ_DEFAULTS, e.vizProps);
        void 0 === a ? delete n.vizProps : n.vizProps = a;
        var o = c.stripDefaultsAndMaybeReturnUndefined(
            t.CLICKABLEINFO_DEFAULTS, e.clickableInfo);
        return void 0 === o ? delete n.clickableInfo : n.clickableInfo = o, n
      }
      function f(e) {
        return {
          type: 'statement', id: e.id, latex: e.latex, label: e.label,
              color: e.color, fill: e.fill, fillOpacity: e.fillOpacity,
              lineWidth: e.lineWidth, points: e.points, lines: e.lines,
              pointStyle: e.pointStyle, lineStyle: e.lineStyle,
              dragMode: e.dragMode, labelSize: e.labelSize,
              labelOrientation: e.labelOrientation,
              verticalLabel: e.verticalLabel,
              suppressTextOutline: e.suppressTextOutline,
              interactiveLabel: e.interactiveLabel,
              editableLabelMode: e.editableLabelMode,
              residualVariable: e.residualVariable,
              regressionParameters: e.regressionParameters,
              isLogModeRegression: e.isLogModeRegression,
              showLabel: e.showLabel, shouldGraph: e.hidden, slider: {
                min: e.slider.hardMin ? e.slider.min : '',
                max: e.slider.hardMax ? e.slider.max : '',
                step: e.slider.step
              },
              parametricDomain: e.parametricDomain, polarDomain: e.polarDomain,
              cdf: e.cdf, vizProps: e.vizProps, clickableInfo: e.clickableInfo
        }
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.CDF_DEFAULTS = {show: !1, min: '', max: ''}, t.VIZ_DEFAULTS = {
            breadth: '',
            axisOffset: '',
            alignedAxis: 'x',
            binAlignment: 'center',
            dotplotXMode: 'exact',
            dotplotSize: 'medium',
            histogramMode: ''
          },
          t.CLICKABLEINFO_DEFAULTS =
              {enabled: !1, description: '', assignment: '', expression: ''};
      var h;
      !function(e) {
        e.None = 'NONE', e.Math = 'MATH', e.Text = 'TEXT'
      }(h = t.EditableLabelMode || (t.EditableLabelMode = {})),
          t.DEFAULT_SLIDER_PERIOD = 4e3, t.DEFAULTS = {
            folderId: '',
            latex: '',
            color: '',
            showLabel: !1,
            label: '',
            cdf: t.CDF_DEFAULTS,
            vizProps: t.VIZ_DEFAULTS,
            clickableInfo: t.CLICKABLEINFO_DEFAULTS,
            hidden: !1,
            secret: !1,
            dragMode: a.DragMode.AUTO,
            labelSize: s.LabelSize.MEDIUM,
            labelOrientation: u.LabelOrientation.DEFAULT,
            verticalLabel: !1,
            suppressTextOutline: !1,
            interactiveLabel: !1,
            editableLabelMode: h.None,
            residualVariable: '',
            isLogModeRegression: !1,
            pointStyle: i.PointStyle.POINT,
            lineStyle: i.LineStyle.SOLID,
            fillOpacity: '' + n.DEFAULT,
            lineWidth: '',
            regressionParameters: {},
            displayEvaluationAsFraction: !1,
            slider: {},
            polarDomain: {min: '', max: ''},
            parametricDomain: {min: '', max: ''},
            points: void 0,
            lines: void 0,
            fill: void 0
          },
          t.SLIDER_DEFAULTS = {
            hardMin: !1,
            hardMax: !1,
            animationPeriod: t.DEFAULT_SLIDER_PERIOD,
            loopMode: o.SliderLoopMode.LOOP_FORWARD_REVERSE,
            playDirection: 1,
            isPlaying: !1,
            min: '-10',
            max: '10',
            step: ''
          },
          t.inflateDefaults = l, t.stripDefaults = p, t.computeParsableState = f
    });
define(
    'core/math/features/graph',
    [
      'require', 'underscore', 'parsenodes', 'core/math/plotter',
      'core/types/graphmode', 'core/math/comparators', 'core/lib/dragmode',
      'core/math/expression-types', 'core/math/types', 'core/math/builtin',
      'core/math/cdf-branches', 'core/math/copy-defined-pois',
      'core/math/distribution-spec', 'core/graphing-calc/json/expression'
    ],
    function(e) {
      'use strict';
      function t(e, t) {
        for (var r = 1 / 0, n = -1 / 0, i = 1 / 0, a = -1 / 0, o = 0;
             o < t.length; o++)
          for (var s = t[o], u = 0; u < s.length; u += 2) {
            var c = s[u], l = s[u + 1];
            c<r && (r = c), c>n && (n = c), l<i && (i = l), l>a && (a = l)
          }
        if (isFinite(r) && isFinite(i)) return {
            type: e, xmin: r, ymin: i, xmax: n, ymax: a
          }
      }
      function r(e, t, r) {
        var n = {};
        r -= .5 * t;
        for (var i = e.length - 1; i >= 0; i--) {
          var a = e[i], o = Math.floor((a - r) / t);
          n[o] ? n[o].data.push(a) : n[o] = {
            id: o,
            data: [a],
            min: o * t + r,
            max: o * t + r + t,
            center: o * t + r + t / 2
          }
        }
        return n
      }
      function n(e) {
        return Array.prototype.concat.apply([], e)
      }
      function i(e, t, r) {
        return !!e &&
            (0 === t && 0 === r ? 'none' !== e[2].type || 'none' !== e[3].type :
                 0 !== t && 0 !== r ?
                                  'none' !== e[0].type && 'none' !== e[1].type :
                 0 !== t        ? 'none' !== e[0].type :
                                  0 !== r && 'none' !== e[1].type)
      }
      var a = e('underscore'), o = e('parsenodes'),
          s = e('core/math/plotter').default, u = e('core/types/graphmode'),
          c = e('core/math/comparators'), l = e('core/lib/dragmode').DragMode,
          p = e('core/math/expression-types').getReconciledExpressionProps,
          f = e('core/math/types'), h = o.List, d = e('core/math/builtin'),
          m = e('core/math/cdf-branches').makeCDFTopBranches,
          y = e('core/math/copy-defined-pois').default,
          g = e('core/math/distribution-spec').getFunctionSpecFromTree,
          v = e('core/graphing-calc/json/expression').EditableLabelMode;
      o.Base.prototype._graph = function(e, t, r, i) {
        function c(e, t) {
          if (e) {
            var r, n, i, a, o, s, u, c,
                l = e.discrete ? 'discreteDistribution' :
                                 'continuousDistribution';
            if ('binomialdist' === e.symbol)
              return n = t.args[1].asValue(),
                     i = t.args.length > 2 ? t.args[2].asValue() : .5,
                     r = d.binompdf(i * n, n, i),
                     {type: l, xmin: 0, xmax: n, ymin: 0, ymax: r};
            if ('poissondist' === e.symbol)
              return a = t.args[1].asValue(),
                     r = Math.max(
                         d.poissonpdf(Math.floor(a), a),
                         d.poissonpdf(Math.ceil(a), a)),
                     {type: l, xmin: 0, xmax: 2.5 * a, ymin: 0, ymax: r};
            if ('normaldist' === e.symbol)
              return a = t.args.length > 1 ? t.args[1].asValue() : 0,
                     o = t.args.length > 2 ? t.args[2].asValue() : 1,
                     r = d.normalpdf(a, a, o), {
                       type: l,
                       xmin: a - 2 * Math.abs(o),
                       xmax: a + 2 * Math.abs(o),
                       ymin: 0,
                       ymax: r
                     };
            if ('uniformdist' === e.symbol)
              return s = t.args.length > 1 ? t.args[1].asValue() : 0,
                     u = t.args.length > 2 ? t.args[2].asValue() : 1,
                     a = (s + u) / 2, c = u - s, r = d.uniformpdf(a, s, u), {
                       type: l,
                       xmin: s - c / 3,
                       xmax: u + c / 3,
                       ymin: 0,
                       ymax: r
                     };
            if ('tdist' === e.symbol) {
              var p = t.args[1].asValue();
              return r = d.tpdf(0, p), {
                type: l, xmin: -3, xmax: 3, ymin: 0, ymax: r
              }
            }
          }
        }
        function l(e) {
          var t = e.editableLabelMode;
          return t === v.Text || t === v.Math
        }
        if (t instanceof o.SolvedEquation)
          return this._graph(e, t._expression, r, i);
        var b, x, _, S, M, E = this,
                           w = t.getExpressionType(i.graphMode, t.valueType),
                           D = p(w, {
                             points: this.userData.points,
                             lines: this.userData.lines,
                             fill: this.userData.fill
                           });
        switch (i.graphMode) {
          case u.XYPOINT_MOVABLE:
            return b = [t.asArray()], _ = this.userData.shouldGraph && D.points,
                   M = this.userData.showLabel && !_,
                   _     ? [{
                     segments: [b],
                     graphMode: i.graphMode,
                     color: this.userData.color,
                     style: this.userData.pointStyle,
                     showLabel: !!this.userData.showLabel,
                     labelSize: this.userData.labelSize,
                     labelOrientation: this.userData.labelOrientation,
                     verticalLabel: this.userData.verticalLabel,
                     suppressTextOutline: this.userData.suppressTextOutline,
                     editableLabel: l(this.userData),
                     labels: this.computedLabels || [],
                     poi: y(b)
                   }] :
                       M ? [{
                         segments: [b],
                         graphMode: u.XYPOINT,
                         color: this.userData.color,
                         style: this.userData.pointStyle,
                         showLabel: !!this.userData.showLabel,
                         nakedLabel: !0,
                         labelSize: this.userData.labelSize,
                         labelOrientation: this.userData.labelOrientation,
                         verticalLabel: this.userData.verticalLabel,
                         suppressTextOutline: this.userData.suppressTextOutline,
                         editableLabel: l(this.userData),
                         labels: this.computedLabels || [],
                         poi: y(b)
                       }] :
                           [];
          case u.XYPOINT:
            return x = [],
                   b = h.wrap(t).mapElements(
                       e,
                       function(e) {
                         return e.asArray()
                       }),
                   _ = this.userData.shouldGraph && D.points,
                   S = this.userData.shouldGraph && D.lines,
                   M = this.userData.showLabel && !_ && !S,
                   (this.userData.showLabel || _) && x.push({
                     segments: [b],
                     graphMode: i.graphMode,
                     color: this.userData.color,
                     style: this.userData.pointStyle,
                     showLabel: !!this.userData.showLabel,
                     showPoint: _,
                     labelSize: this.userData.labelSize,
                     labelOrientation: this.userData.labelOrientation,
                     verticalLabel: this.userData.verticalLabel,
                     suppressTextOutline: this.userData.suppressTextOutline,
                     interactiveLabel: !!this.userData.interactiveLabel,
                     editableLabel: l(this.userData),
                     nakedLabel: M,
                     labels: this.computedLabels || [],
                     poi: y(b)
                   }),
                   S && x.push({
                     segments: [b].map(n),
                     graphMode: u.PARAMETRIC,
                     color: this.userData.color,
                     style: this.userData.lineStyle,
                     lineWidth: this.metaData.computedLineWidth,
                     poi: []
                   }),
                   x;
          case u.PARAMETRIC:
          case u.PARAMETRIC_CURVE_3D:
            var T = this.userData, P = [];
            if (x = h.wrap(t).mapElements(e, function(t) {
                  if (0 === t.getDependencies().length)
                    return b = [t.asArray()], {
                      segments: [b],
                      graphMode: u.XYPOINT,
                      color: T.color,
                      style: T.lineStyle,
                      lineWidth: E.metaData.computedLineWidth,
                      poi: y(b)
                    };
                  var n = t.getCompiledFunction(), a = E.getGraphInfo(e, t);
                  return a.graphMode = i.graphMode, a.domain = {
                    min: E.metaData.evaluatedDomainMin,
                    max: E.metaData.evaluatedDomainMax
                  },
                         a.style = E.userData.lineStyle,
                         a.lineWidth = E.metaData.computedLineWidth,
                         s.computeGraphData(
                             {viewState: r, graphInfo: a, compiled: n})
                }), D.fill) {
              if (x.forEach(function(e) {
                    P.push({
                      segments: e.segments,
                      color: T.color,
                      fillOpacity: E.metaData.computedFillOpacity,
                      graphMode: u.POLYGONFILL,
                      poi: []
                    })
                  }),
                  !D.lines)
                return P;
              x = x.concat(P)
            }
            return x;
          case u.X:
          case u.Y:
          case u.IMPLICIT:
          case u.POLAR:
          case u.Z_3D:
            x = [];
            var I = t.valueType === f.Number;
            return h.wrap(t).eachElement(e, function(t) {
              var n,
                  o = i.graphMode === u.IMPLICIT || i.graphMode === u.Z_3D ?
                  t.getCompiledFunction(['x', 'y']) :
                  t.getCompiledFunction(),
                  l = g(E), p = l && l.discrete, f = c(l, t);
              try {
                n = t.getCompiledDerivative()
              } catch (e) {
              }
              var h = E.getGraphInfo(e, t);
              h.graphMode = i.graphMode, h.style = E.userData.lineStyle,
              h.lineWidth = E.metaData.computedLineWidth,
              i.graphMode === u.POLAR && (h.domain = {
                min: E.metaData.evaluatedDomainMin,
                max: E.metaData.evaluatedDomainMax,
                isExplicit: E.metaData.isExplicitDomain
              });
              var d = E.metaData.evaluatedCDFMin,
                  v = E.metaData.evaluatedCDFMax;
              if (isNaN(d) || isNaN(v) || !I) {
                var b = {
                  viewState: r,
                  graphInfo: h,
                  compiled: o,
                  derivative: n,
                  discrete: p
                };
                l && 'binomialdist' === l.symbol &&
                    (b.maxOverride = t.args[1].asValue());
                var _ = s.computeGraphData(b);
                f && (_.boundingBox = f),
                    _.fillSegments ? x.push(a.omit(_, 'fillSegments')) :
                    p              ? x.push({
                      graphMode: u.XYPOINT,
                      segments: [_.segments],
                      showPoint: E.userData.shouldGraph,
                      color: E.userData.color,
                      style: _.style,
                      boundingBox: f,
                      poi: y(_.segments)
                    }) :
                                     x.push(_),
                    h.graphMode === u.IMPLICIT && '=' !== h.operator && x.push({
                      graphMode: u.POLYGONFILL,
                      segments: _.fillSegments,
                      poi: {}
                    })
              } else {
                var S = {
                  viewState: r,
                  graphInfo: h,
                  compiled: o,
                  derivative: n,
                  bounds: [d, v],
                  discrete: p
                };
                l && 'binomialdist' === l.symbol &&
                    (S.maxOverride = t.args[1].asValue());
                var M = m(S), w = M.cdfTopBranch,
                    D = a.each(M.topBranches, function(e) {
                      e && (e.boundingBox = f)
                    });
                if (a.every(D, function(e) {
                      return void 0 !== e
                    }))
                  if (p) {
                    if (x = D.map(function(e) {
                          return {
                            graphMode: u.XYPOINT, segments: [e.segments],
                                showPoint: E.userData.shouldGraph,
                                color: E.userData.color, style: e.style,
                                poi: y(e.segments), boundingBox: f
                          }
                        }),
                        w && w.segments.length) {
                      var T = [];
                      w.segments.forEach(function(e) {
                        T.push([e[0], 0, e[0], e[1]])
                      }),
                          x.push({
                            graphMode: u.PARAMETRIC,
                            segments: T,
                            boundingBox: f,
                            poi: {}
                          })
                    }
                  } else if (x = D, w && w.segments.length) {
                    var P, C, O, A;
                    for (P = 0; P < w.segments.length; P++)
                      if (C = w.segments[P], C.length >= 4) {
                        O = C[0];
                        break
                      }
                    for (P = w.segments.length - 1; P >= 0; P--)
                      if (C = w.segments[P], C.length >= 4) {
                        A = C[C.length - 2];
                        break
                      }
                    if (isFinite(O) && isFinite(A)) {
                      var L = s.polygonsFromSegments(
                          w.segments, [[O, 0, A, 0]], w.graphMode);
                      x.push({graphMode: u.POLYGONFILL, segments: L, poi: {}})
                    }
                  }
              }
            }), x;
          default:
            return !1
        }
      }, o.Base.prototype.graph = function(e, t, r) {
        var n = this.getGraphInfo(e, t);
        return this._graph(e, t, r, n)
      }, o.BaseComparator.prototype.graph = function(e, t, r) {
        var n = this, i = this.getGraphInfo(e, t), a = i.graphMode;
        if (a === u.IMPLICIT) return this._graph(e, t, r, i);
        if (a === u.NONE) return !1;
        if (!(t instanceof o.SolvedEquation)) return !1;
        var l = this.getOperator(), p = [], f = [], h = !0;
        t._expression.eachElement(e, function(e) {
          p.push(e.getCompiledFunction());
          try {
            f.push(e.getCompiledDerivative())
          } catch (e) {
            h = !1
          }
        }), h || (f = void 0);
        var d, m, y = [], g = [-1, 0, 0, 1], v = p.length;
        for (m = 0; m < v; m++) {
          var b = this.getGraphInfo(e, t._expression.args[m]);
          b.graphMode = a, b.style = n.userData.lineStyle,
          i.graphMode === u.POLAR && (b.domain = {
            min: n.metaData.evaluatedDomainMin,
            max: n.metaData.evaluatedDomainMax,
            isExplicit: n.metaData.isExplicitDomain
          }),
          d = s.computeGraphData({
            viewState: r,
            graphInfo: b,
            compiled: p[m],
            derivative: f ? f[m] : void 0
          }),
          d.operator = c.get(c.table[l].inclusive, g[m % 4]), y.push(d)
        }
        for (m = 0; m < v; m += 4) {
          var x =
              s.polygonsFromSegments(y[m + 1].segments, y[m + 2].segments, a);
          y.push({graphMode: u.POLYGONFILL, segments: x, poi: {}})
        }
        return y
      }, o.DoubleInequality.prototype.graph = function(e, t, r) {
        var n = this.getGraphInfo(e, t);
        if (n.graphMode === u.NONE) return !1;
        var i = [], a = c.get(c.table[this._operators[0]].inclusive, 0),
            o = c.get(c.table[this._operators[1]].inclusive, 0),
            l = this.userData, p = this.metaData, f = this;
        return h.eachArgs(e, t._expressions, function(t) {
          var c, h;
          t[0].userData = t[1].userData = l, t[0].metaData = t[1].metaData = p,
          c = f._graph(e, t[0], r, n)[0], c.operator = a, i.push(c),
          h = f._graph(e, t[1], r, n)[0], h.operator = o, i.push(h);
          var d = s.polygonsFromSegments(c.segments, h.segments, c.graphMode);
          i.push({graphMode: u.POLYGONFILL, segments: d, poi: {}})
        }), i
      }, o.Regression.prototype.graph = function(e, t, r) {
        var n = this.getGraphInfo(e, t);
        return this._graph(e, t.model, r, n)
      }, o.Polygon.prototype.graph = function(e, t, r) {
        for (var i = this.getGraphInfo(e, t), a = t.args[0].asValue(), o = [],
                 s = void 0 === this.userData.lines || this.userData.lines,
                 c = void 0 === this.userData.fill || this.userData.fill,
                 l = [], p = [], f = 0;
             f < a.length; f++) {
          var h = a[f][0], d = a[f][1];
          isFinite(h) && isFinite(d) ?
              (s || c) && p.push([h, d]) :
              (s || c) && (p.length > 1 && l.push(p), p = [])
        }
        if (l.length || p.length) {
          p.push([a[0][0], a[0][1]]), l.push(p);
          var m = l.map(n);
          c && o.push({
            segments: m,
            graphMode: u.POLYGONFILL,
            poi: [],
            color: i.color,
            fillOpacity: this.metaData.computedFillOpacity,
            style: i.style
          }),
              s && o.push({
                segments: m,
                graphMode: u.PARAMETRIC,
                poi: [],
                color: i.color,
                style: this.userData.lineStyle,
                lineWidth: this.metaData.computedLineWidth
              })
        }
        return o
      };
      var b = function(e, t) {
        var r = [];
        return h.wrap(t).eachElement(e, function(e) {
          r.push(e.args.map(function(e) {
            return e.asValue()
          }))
        }), r
      };
      o.Object3D.prototype.graph = function(e, t, r) {
        var n = this.getGraphInfo(e, t);
        return [{
          segments: [b(e, t)],
          color: n.color,
          objectName: this._symbol,
          poi: [],
          graphMode: u.OBJECT3D
        }]
      }, o.Histogram.prototype.graph = function(e, n, i) {
        var a = this.getGraphInfo(e, n), o = n.args[0].asValue(),
            s = n.args[1].asValue(),
            c = this.userData.vizProps &&
                'left' === this.userData.vizProps.binAlignment ?
            s / 2 :
            0,
            l = r(o, s, c), p = 1;
        this.userData.vizProps&& 'density' ===
                this.userData.vizProps.histogramMode ?
            p = 1 / (o.length * s) :
            this.userData.vizProps &&
                'relative' === this.userData.vizProps.histogramMode &&
                (p = 1 / o.length);
        var f = [], h = [];
        for (var d in l) {
          var m = l[d], y = m.data.length;
          h.push([m.min, 0 * p, m.min, y * p, m.max, y * p, m.max, 0 * p]);
          var g = 0;
          l[m.id + 1] && (g = l[m.id + 1].data.length);
          var v = [m.min, 0 * p, m.min, y * p, m.max, y * p];
          g < y && v.push(m.max, g * p), f.push(v)
        }
        var b = t('histogram', h);
        return b && s && (b.binWidth = s), [
          {
            segments: h,
            graphMode: u.POLYGONFILL,
            boundingBox: b,
            poi: [],
            color: a.color,
            fillOpacity: .4
          },
          {
            segments: f,
            graphMode: u.Y,
            poi: {
              zeros: {x: [], y: []},
              extrema: {x: [], y: []},
              intercept: {x: [], y: []}
            },
            color: a.color
          }
        ]
      }, o.DotPlot.prototype.graph = function(e, n, i) {
        var a, o, s, c, l = this.getGraphInfo(e, n), p = n.args[1].asValue(),
                        f = this.userData.vizProps &&
                'left' === this.userData.vizProps.binAlignment ?
            p / 2 :
            0,
                        h = r(n.args[0].asValue(), p, f), d = !1, m = [];
        for (o in h) {
          s = h[o];
          for (var g = s.data.length - 1; g >= 0; g--)
            s.center !== s.data[g] && (d = !0)
        }
        if (this.userData.vizProps &&
            'exact' === this.userData.vizProps.dotplotXMode)
          for (o in h)
            for (s = h[o], c = s.data, c.reverse(), a = 0; a < c.length; a++)
              m.push([c[a], a + 1]);
        else
          for (o in h)
            for (s = h[o], c = s.data, a = 0; a < c.length; a++)
              m.push([s.center, a + 1]);
        var v = t('dotplot', m);
        return v && p &&
                   (v.ymin = 0, v.xmin -= .5 * p, v.xmax += .5 * p,
                    v.binWidth = p),
               [{
                 segments: [m],
                 graphMode: u.XYPOINT,
                 boundingBox: v,
                 poi: y(m),
                 color: l.color,
                 style: this.userData.pointStyle,
                 pointSize: this.userData.vizProps &&
                     this.userData.vizProps.dotplotSize,
                 showPoint: !0,
                 needsDotplotXMode: d
               }]
      }, o.BoxPlot.prototype.graph = function(e, r, n) {
        var i = this.getGraphInfo(e, r), a = this.metaData.evaluatedAxisOffset,
            o = this.metaData.evaluatedBreadth, s = r.args[0].asValue();
        if (isNaN(o) || isNaN(a)) return {};
        var c = Math.min.apply(null, s), l = Math.max.apply(null, s),
            p = d.quartile(s, 1), f = d.quartile(s, 2), h = d.quartile(s, 3),
            m = a, y = m - o / 2, g = m + o / 2, v = o / 10, b = [
              [p, y, h, y, h, g, p, g, p, y], [f, y, f, g], [p, m, c, m],
              [h, m, l, m], [c, m - v, c, m + v], [l, m - v, l, m + v]
            ];
        if (this.userData.vizProps &&
            'y' === this.userData.vizProps.alignedAxis)
          for (var x = 0; x < b.length; x++)
            for (var _ = b[x], S = 0; S < _.length; S += 2) {
              var M = _[S];
              _[S] = _[S + 1], _[S + 1] = M
            }
        return [{
          segments: b,
          graphMode: u.PARAMETRIC,
          boundingBox: t('boxplot', b),
          poi: [],
          color: i.color
        }]
      }, o.Table.prototype.isValueDraggable = function(e, t, r) {
        if (!e.columns[t].isIndependent) return !1;
        var n = this.columns[t], i = n.values, a = i && i[r];
        return !(!a || !isFinite(a.asValue()) || 0 !== a._dependencies.length)
      }, o.Table.prototype.graph = function(e, t, r) {
        var i = [];
        if (t.columns[0].isError) return i;
        for (var a = t.columns[0], o = a.values, s = 1; s < this.columns.length;
             s++) {
          var c = t.columns[s];
          if (!c.isError) {
            var p = this.columns[s].header.userData;
            if (!p.hidden) {
              for (var f = p.dragMode, h = f === l.X || f === l.XY,
                       d = f === l.Y || f === l.XY, m = !!p.points,
                       g = !!p.lines, v = c.isDiscrete(a), b = g && v,
                       x = g && !v, _ = [], S = [], M = [], E = [], w = [],
                       D = [], T = 1 / 0, P = -1 / 0, I = 1 / 0, C = -1 / 0,
                       O = 0;
                   O < o.length; O++) {
                var A = o[O], L = c.values[O];
                if (A && L && isFinite(A.asValue()) && isFinite(L.asValue())) {
                  var N = A.asValue(), q = L.asValue();
                  if (m) {
                    var F = h && this.isValueDraggable(t, 0, O),
                        R = d && this.isValueDraggable(t, s, O);
                    F || R ? (M.push([N, q]),
                              E.push({index: O, dragX: F, dragY: R})) :
                             S.push([N, q])
                  }
                  b && D.push([N, q]), N<T && (T = N), N>P && (P = N),
                      q<I && (I = q), q>C && (C = q)
                } else
                  b && (D.length > 1 && w.push(D), D = [])
              }
              var V = {type: 'table', xmin: T, xmax: P, ymin: I, ymax: C};
              if (M.length && _.push({
                    graphMode: u.XYPOINT_MOVABLE,
                    segments: [M],
                    color: p.color,
                    tableId: p.tableId,
                    poi: y(M),
                    movablePointInfo: E,
                    boundingBox: V
                  }),
                  S.length && _.push({
                    segments: [S],
                    graphMode: u.XYPOINT,
                    showPoint: !0,
                    poi: y(S),
                    color: p.color,
                    style: p.pointStyle,
                    tableId: p.tableId,
                    boundingBox: V
                  }),
                  (w.length || D.length) && (w.push(D), _.push({
                    segments: w.map(n),
                    graphMode: u.PARAMETRIC,
                    poi: [],
                    color: p.color,
                    style: p.lineStyle,
                    tableId: p.tableId,
                    boundingBox: V
                  })),
                  x) {
                var k = this.columns[s].header.graph(e, t.columns[s].header, r);
                k.length && Array.prototype.push.apply(_, k)
              }
              _.length && (i[p.id] = _)
            }
          }
        }
        return i
      }, o.Image.prototype.graph = function(e, t, r) {
        var n = [];
        if (!('OrderedPair' === t.center.type && t.center.args[0].isConstant &&
              t.center.args[1].isConstant && t.radianAngle.isConstant &&
              t.width.isConstant && t.height.isConstant &&
              t.opacity.isConstant))
          return n;
        for (var a = [], o = [], s = t.width.asValue() / 2,
                 c = t.height.asValue() / 2, l = t.radianAngle.asValue(),
                 p = -1;
             p <= 1; p++)
          for (var f = -1; f <= 1; f++) {
            var h =
                    [
                      t.center.args[0].asValue() + p * s * Math.cos(l) +
                          f * c * Math.sin(l),
                      t.center.args[1].asValue() - p * s * Math.sin(l) +
                          f * c * Math.cos(l)
                    ],
                d = i(t.moveStrategy, p, f);
            d && (a.push(h), o.push([p, f]))
          }
        return n.push({
          segments: [a],
          scaleFactors: [o],
          graphMode: u.XYPOINT_MOVABLE,
          color: this.userData.color,
          style: this.userData.style,
          poi: y(a)
        }),
               n
      }
    });
define(
    'core/math/features/elementAt',
    ['require', 'parsenodes', 'core/math/builtinframe'], function(e) {
      'use strict';
      function t(e, t) {
        for (var r = 0; r < this.length; r++) t(this.elementAt(e, r))
      }
      function r(e, t) {
        for (var r = [], n = 0; n < this.length; n++)
          r.push(t(this.elementAt(e, n)));
        return r
      }
      var n = e('parsenodes'), i = e('core/math/builtinframe');
      n.List.prototype.elementAt =
          function(e, t) {
        return t = Math.floor(t),
               t >= 0 && t < this.args.length ? this.args[t] : n.Constant(NaN)
      },
      n.Broadcast.prototype.elementAt =
          function(e, t) {
        if ((t = Math.floor(t)) < 0 || t >= this.length) return n.Constant(NaN);
        for (var r = {}, a = 0; a < this._replacedSymbols.length; a++)
          r[this._replacedSymbols[a]] = this._lists[a].elementAt(e, t);
        return this._expression.substitute(r).getConcreteTree(e, i)
      },
      n.List.prototype.eachElement = t, n.Broadcast.prototype.eachElement = t,
      n.List.prototype.mapElements = r, n.Broadcast.prototype.mapElements = r,
      n.OrderedPair.prototype.elementAt = function(e, t) {
        switch (t) {
          case 0:
            return this.args[0];
          case 1:
            return this.args[1];
          default:
            return n.Constant(NaN)
        }
      }
    });
define('core/lib/number-to-latex', ['require', 'exports'], function(e, t) {
  'use strict';
  function r(e) {
    if ('string' == typeof e) return e;
    if (void 0 === e) return '';
    var t = e + '';
    return t = t.replace(/1e\+?([-\d]+)/, '10^{$1}'),
           t = t.replace(/([-\d\.]+)e\+?([-\d]+)/, '$1\\cdot 10^{$2}')
  }
  function n(e) {
    var t = e + '';
    if (/\d+\.?\d*e[\+\-]*\d+/i.test(t)) {
      var r = String(t).toLowerCase().split('e'), n = parseFloat(r[0]),
          i = parseInt(r[1], 10), a = Math.abs(i),
          o = Math.abs(n).toString().split('.');
      if (i < 0)
        t = '0.' + new Array(a).join('0') + o.join('');
      else {
        var s = o[1];
        s && (a -= s.length), t = o.join('') + new Array(a + 1).join('0')
      }
      n < 0 && (t = '-' + t)
    }
    return t
  }
  function i(e, t) {
    void 0 === t && (t = 2);
    var r = n(e), i = r.indexOf('.');
    if (-1 === i) return r;
    for (var a, o = i + 1; o < r.length; o++)
      if (a) {
        if (r[o] !== a) break
      } else {
        if ('0' !== r[o] && '9' !== r[o]) break;
        a = r[o]
      }
    return r.substr(0, Math.max(i + 5, o + t))
  }
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.default = r, t.numberToDecimalString = n,
      t.numberToStatsConfidenceLatex = i
});
define(
    'core/math/features/printLatex',
    ['require', 'parsenodes', 'core/lib/label', 'core/lib/number-to-latex'],
    function(e) {
      'use strict';
      function t() {
        return u.identifierToLatex(this._symbol) + ' '
      }
      function r(e) {
        switch (e) {
          case '>':
            return '\\gt ';
          case '<':
            return '\\lt ';
          case '>=':
            return '\\ge ';
          case '<=':
            return '\\le ';
          case '=':
            return '='
        }
      }
      function n(e) {
        return e.printLatex()
      }
      function i() {
        switch (this._symbol) {
          case 'sqrt':
            return '\\sqrt{' + this.args[0].printLatex() + '}';
          case 'nthroot':
            return '\\sqrt[' + this.args[1].printLatex() + ']{' +
                this.args[0].printLatex() + '}';
          case 'logbase':
            return '\\log_{' + this.args[1].printLatex() + '}\\left(' +
                this.args[0].printLatex() + '\\right)';
          default:
            return u.identifierToLatex(this._symbol) + '\\left(' +
                this.args.map(n).join(', ') + '\\right)'
        }
      }
      function a(e) {
        return e.isConstant && !0 === e.asValue()
      }
      function o(e) {
        return e.isConstant && e.isNaN()
      }
      var s = e('parsenodes'), u = e('core/lib/label'),
          c = e('core/lib/number-to-latex').default;
      s.Identifier.prototype.printLatex = t,
      s.FreeVariable.prototype.printLatex = t,
      s.Constant.prototype.printLatex =
          function() {
        return c(this.asValue())
      },
      s.Negative.prototype.printLatex =
          function() {
        return '-\\left(' + this.args[0].printLatex() + '\\right)'
      },
      s.Add.prototype.printLatex =
          function() {
        return '\\left(' + this.args[0].printLatex() + '\\right)+\\left(' +
            this.args[1].printLatex() + '\\right)'
      },
      s.PercentOf.prototype.printLatex =
          function() {
        return this.args[0].printLatex() + ' \\% \\operatorname{of} ' +
            this.args[1].printLatex()
      },
      s.Subtract.prototype.printLatex =
          function() {
        return '\\left(' + this.args[0].printLatex() + '\\right)-\\left(' +
            this.args[1].printLatex() + '\\right)'
      },
      s.Multiply.prototype.printLatex =
          function() {
        return '\\left(' + this.args[0].printLatex() + '\\right)*\\left(' +
            this.args[1].printLatex() + '\\right)'
      },
      s.Divide.prototype.printLatex =
          function() {
        return '\\frac{' + this.args[0].printLatex() + '}{' +
            this.args[1].printLatex() + '}'
      },
      s.Exponent.prototype.printLatex =
          function() {
        return '\\left(' + this.args[0].printLatex() + '\\right)^{' +
            this.args[1].printLatex() + '}'
      },
      s.Assignment.prototype.printLatex =
          function() {
        return u.identifierToLatex(this._symbol) + '=' +
            this._expression.printLatex()
      },
      s.Equation.prototype.printLatex =
          function() {
        return this._lhs.printLatex() + '=' + this._rhs.printLatex()
      },
      s.BaseComparator.prototype.printLatex =
          function() {
        return '\\left(' + this.args[0].printLatex() + '\\right)' +
            r(this.operator) + '\\left(' + this.args[1].printLatex() +
            '\\right)'
      },
      s.DoubleInequality.prototype.printLatex =
          function() {
        return '\\left(' + this.args[0].printLatex() + '\\right)' +
            r(this.args[1]) + this.args[2].printLatex() + r(this.args[3]) +
            '\\left(' + this.args[4].printLatex() + '\\right)'
      },
      s.And.prototype.printLatex =
          function() {
        if (!(this.args[0] instanceof s.BaseComparator &&
              this.args[1] instanceof s.BaseComparator))
          throw new Error('Not implemented');
        if (this.args[0].args[1].printLatex() !==
            this.args[1].args[0].printLatex())
          throw new Error('Not implemented');
        return '\\left(' + this.args[0].args[0].printLatex() + '\\right)' +
            r(this.args[0].operator) + '\\left(' +
            this.args[0].args[1].printLatex() + '\\right)' +
            r(this.args[1].operator) + '\\left(' +
            this.args[1].args[1].printLatex() + '\\right)'
      },
      s.NativeFunction.prototype.printLatex = i,
      s.TypedFunction.prototype.printLatex = i,
      s.ReducerFunction.prototype.printLatex = i,
      s.ParametrizedReducerFunction.prototype.printLatex = i,
      s.DoubleReducerFunction.prototype.printLatex = i,
      s.FunctionCall.prototype.printLatex = i,
      s.Distribution.prototype.printLatex = i,
      s.SeededFunctionCall.prototype.printLatex = function() {
        return u.identifierToLatex(this._symbol) + '\\left(' +
            this.args.slice(1).map(n).join(', ') + '\\right)'
      }, s.DotAccess.prototype.printLatex = function() {
        return '(' + this.args[0].printLatex() + ').(' +
            this.args[1].printLatex() + ')'
      }, s.DotAccessExponent.prototype.printLatex = function() {
        return '(' + this.args[0].printLatex() + ').(' +
            this.args[1].printLatex() + ')^{' + this.args[2].printLatex() + '}'
      }, s.Prime.prototype.printLatex = function() {
        switch (this.args[0]._symbol) {
          case 'logbase':
            return '\\log_{' + this.args[0].args[1].printLatex() + '}' +
                Array(this.order + 1).join('\'') + '\\left(' +
                this.args[0].args[0].printLatex() + '\\right)';
          default:
            return u.identifierToLatex(this.args[0]._symbol) +
                Array(this.order + 1).join('\'') + '\\left(' +
                this.args[0].args.map(n).join(', ') + '\\right)'
        }
      }, s.List.prototype.printLatex = function() {
        return '\\left[' + this.args.map(n).join(', ') + '\\right]'
      }, s.Range.prototype.printLatex = function() {
        return '\\left[' + this.args[0].args.map(n).join(', ') + ' ... ' +
            this.args[1].args.map(n).join(', ') + '\\right]'
      }, s.ListAccess.prototype.printLatex = function() {
        return '\\left(' + this.args[0].printLatex() + '\\right)\\left[' +
            this.args[1].printLatex() + '\\right]'
      }, s.OrderedPair.prototype.printLatex = function() {
        return '\\left(' + this.args.map(n).join(', ') + '\\right)'
      }, s.Sum.prototype.printLatex = function() {
        return '\\sum_{' + this.args[0].printLatex() + '=' +
            this.args[1].printLatex() + '}^{' + this.args[2].printLatex() +
            '}\\left(' + this.args[3].printLatex() + '\\right)'
      }, s.Product.prototype.printLatex = function() {
        return '\\prod_{' + this.args[0].printLatex() + '=' +
            this.args[1].printLatex() + '}^{' + this.args[2].printLatex() +
            '}\\left(' + this.args[3].printLatex() + '\\right)'
      }, s.Integral.prototype.printLatex = function() {
        return '\\int_{' + this.args[1].printLatex() + '}^{' +
            this.args[2].printLatex() + '}\\left(' + this.args[3].printLatex() +
            '\\right)d' + this.args[0].printLatex()
      }, s.FunctionExponent.prototype.printLatex = function() {
        return this.args[0].printLatex() + '\\left(' +
            this.args[1].printLatex() + '\\right)^{' +
            this.args[2].printLatex() + '}'
      }, s.FunctionFactorial.prototype.printLatex = function() {
        return this.args[0].printLatex() + '\\left(' +
            this.args[1].printLatex() + '\\right)!'
      }, s.Piecewise.prototype.printLatex = function() {
        var e = this;
        if (a(e.args[0])) return e.args[1].printLatex();
        for (var t = ['\\left\\{'];;) {
          if (a(e.args[0])) {
            t.push(e.args[1].printLatex());
            break
          }
          if (t.push(e.args[0].printLatex(), ': '), o(e.args[2])) {
            t.push(e.args[1].printLatex());
            break
          }
          if (t.push(e.args[1].printLatex(), ', '),
              !(e.args[2] instanceof s.Piecewise)) {
            t.push(e.args[2].printLatex());
            break
          }
          e = e.args[2]
        }
        return t.push('\\right\\}'), t.join('')
      }, s.FunctionDefinition.prototype.printLatex = function() {
        return u.identifierToLatex(this._symbol) + '\\left(' +
            this._argSymbols.map(u.identifierToLatex).join(', ') +
            '\\right) = ' + this._expression.printLatex()
      }, s.Derivative.prototype.printLatex = function() {
        return '\\frac{d}{d' + u.identifierToLatex(this._symbol) + '}\\left(' +
            this.args[0].printLatex() + '\\right)'
      }, s.Regression.prototype.printLatex = function() {
        return '\\left(' + this._lhs.printLatex() + '\\right)\\sim\\left(' +
            this._rhs.printLatex() + '\\right)'
      }, s.Polygon.prototype.printLatex = function() {
        return '\\polygon\\left(' + this.args.map(n).join(', ') + '\\right)'
      }, s.Histogram.prototype.printLatex = function() {
        return '\\histogram\\left(' + this.args.map(n).join(', ') + '\\right)'
      }, s.Object3D.prototype.printLatex = function() {
        return '\\' + this._symbol + '\\left(' + this.args.map(n).join(', ') +
            '\\right)'
      }, s.DotPlot.prototype.printLatex = function() {
        return '\\dotplot\\left(' + this.args.map(n).join(', ') + '\\right)'
      }, s.BoxPlot.prototype.printLatex = function() {
        return '\\boxplot\\left(' + this.args.map(n).join(', ') + '\\right)'
      }, s.TTest.prototype.printLatex = function() {
        return '\\TTest\\left(' + this.args.map(n).join(', ') + '\\right)'
      }, s.IndependentTTest.prototype.printLatex = function() {
        return '\\IndependentTTest\\left(' + this.args.map(n).join(', ') +
            '\\right)'
      }, s.Stats.prototype.printLatex = function() {
        return '\\Stats\\left(' + this.args.map(n).join(', ') + '\\right)'
      }
    });
define(
    'core/math/features/statistics',
    ['require', 'parsenodes', 'core/math/maybe-rational'], function(e) {
      'use strict';
      var t = e('parsenodes'), r = t.BuiltInFunction,
          n = e('core/math/maybe-rational').maybeRational,
          i = t.Constant(n(0, 1)), a = t.Constant(n(1, 1)),
          o = t.Constant(n(2, 1)), s = t.Constant(n(1, 2)),
          u = t.Constant(-1 / 0);
      r.normaldist.prototype.pdf = function(e) {
        return r.normalpdf([e[0], this.args[0], this.args[1]])
      }, r.normaldist.prototype.cdf = function(e) {
        var t, n;
        return 1 === e.length ? (t = u, n = e[0]) : (t = e[0], n = e[1]),
               r.normalcdf([t, n, this.args[0], this.args[1]])
      }, r.normaldist.prototype.mean = function() {
        return this.args[0]
      }, r.normaldist.prototype.median = function() {
        return this.args[0]
      }, r.normaldist.prototype.stdev = function() {
        return r.abs([this.args[1]])
      }, r.normaldist.prototype.var = function() {
        return t.Exponent([this.args[1], o])
      }, r.normaldist.prototype.quantile = function(e) {
        return t.Add([t.Multiply([r.invNorm(e), this.stdev()]), this.mean()])
      }, r.normaldist.prototype.sample = function(e) {
        return r.normalSample([e[0], this.args[0], this.args[1]])
      }, r.tdist.prototype.pdf = function(e) {
        return r.tpdf([e[0], this.args[0]])
      }, r.tdist.prototype.cdf = function(e) {
        var t, n;
        return 1 === e.length ? (t = u, n = e[0]) : (t = e[0], n = e[1]),
               r.tcdf([t, n, this.args[0]])
      }, r.tdist.prototype.mean = function() {
        return i
      }, r.tdist.prototype.median = function() {
        return i
      }, r.tdist.prototype.quantile = function(e) {
        return r.invT([e[0], this.args[0]])
      }, r.tdist.prototype.sample = function(e) {
        return r.tSample([e[0], this.args[0]])
      }, r.tdist.prototype.stdev = function() {
        return r.sqrt([this.var()])
      }, r.tdist.prototype.var = function() {
        var e = this.args[0];
        return t.Piecewise([
          t.Comparator['>=']([e, o]), t.Divide([e, t.Subtract([e, o])]),
          t.Constant(NaN)
        ])
      }, r.poissondist.prototype.pdf = function(e) {
        return r.poissonpdf([e[0], this.args[0]])
      }, r.poissondist.prototype.cdf = function(e) {
        var t, n;
        return 1 === e.length ? (t = u, n = e[0]) : (t = e[0], n = e[1]),
               r.poissoncdf([t, n, this.args[0]])
      }, r.poissondist.prototype.mean = function() {
        return this.args[0]
      }, r.poissondist.prototype.median = function() {
        return r.invPoisson([s, this.args[0]])
      }, r.poissondist.prototype.stdev = function() {
        return r.sqrt([this.args[0]])
      }, r.poissondist.prototype.var = function() {
        return this.args[0]
      }, r.poissondist.prototype.quantile = function(e) {
        return r.invPoisson([e[0], this.args[0]])
      }, r.poissondist.prototype.sample = function(e) {
        return r.poissonSample([e[0], this.args[0]])
      }, r.binomialdist.prototype.pdf = function(e) {
        return r.binompdf([e[0], this.args[0], this.args[1]])
      }, r.binomialdist.prototype.cdf = function(e) {
        var t, n;
        return 1 === e.length ? (t = u, n = e[0]) : (t = e[0], n = e[1]),
               r.binomcdf([t, n, this.args[0], this.args[1]])
      }, r.binomialdist.prototype.mean = function() {
        return t.Multiply([this.args[0], this.args[1]])
      }, r.binomialdist.prototype.median = function() {
        return r.invBinom([s, this.args[0], this.args[1]])
      }, r.binomialdist.prototype.stdev = function() {
        return r.sqrt([this.var()])
      }, r.binomialdist.prototype.var = function() {
        var e = this.args[0], r = this.args[1];
        return t.Multiply([e, t.Multiply([r, t.Subtract([a, r])])])
      }, r.binomialdist.prototype.quantile = function(e) {
        return r.invBinom([e[0], this.args[0], this.args[1]])
      }, r.binomialdist.prototype.sample = function(e) {
        return r.binomSample([e[0], this.args[0], this.args[1]])
      }, r.uniformdist.prototype.pdf = function(e) {
        return r.uniformpdf([e[0], this.args[0], this.args[1]])
      }, r.uniformdist.prototype.cdf = function(e) {
        var t, n;
        return 1 === e.length ? (t = u, n = e[0]) : (t = e[0], n = e[1]),
               r.uniformcdf([t, n, this.args[0], this.args[1]])
      }, r.uniformdist.prototype.mean = function() {
        return t.Divide([t.Add([this.args[0], this.args[1]]), o])
      }, r.uniformdist.prototype.median = function() {
        return t.Divide([t.Add([this.args[0], this.args[1]]), o])
      }, r.uniformdist.prototype.stdev = function() {
        return r.sqrt([this.var()])
      }, r.uniformdist.prototype.var = function() {
        return t.Divide([
          t.Exponent([t.Subtract([this.args[1], this.args[0]]), o]),
          t.Constant(n(12, 1))
        ])
      }, r.uniformdist.prototype.quantile = function(e) {
        return r.invUniform([e[0], this.args[0], this.args[1]])
      }, r.uniformdist.prototype.sample = function(e) {
        return r.uniformSample([e[0], this.args[0], this.args[1]])
      }, t.List.prototype.sample = function(e) {
        return t.ListAccess([
          this, t.Add([
            r.floor([t.Multiply([
              r.uniformSample([e[0], i, a]), t.Constant(n(this.length, 1))
            ])]),
            a
          ])
        ])
      }
    });
define(
    'core/math/features/getExpressionType',
    [
      'require', 'parsenodes', 'core/types/graphmode',
      'core/math/expression-types', 'core/math/types'
    ],
    function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/types/graphmode'),
          n = e('core/math/expression-types').ExpressionType,
          i = e('core/math/types');
      t.Base.prototype.getExpressionType = function(e, t) {
        return e === r.X || e === r.Y ?
            n.X_OR_Y :
            e === r.XYPOINT || e === r.XYPOINT_MOVABLE ?
            t === i.Point ? n.SINGLE_POINT : n.POINT_LIST :
            e === r.PARAMETRIC          ? n.PARAMETRIC :
            e === r.PARAMETRIC_CURVE_3D ? n.PARAMETRIC :
            e === r.POLAR               ? n.POLAR :
            e === r.IMPLICIT            ? n.IMPLICIT :
                                          n.X_OR_Y
      }, t.Polygon.prototype.getExpressionType = function(e, t) {
        return n.POLYGON
      }, t.Histogram.prototype.getExpressionType = function(e, t) {
        return n.HISTOGRAM
      }, t.Object3D.prototype.getExpressionType = function(e, t) {
        return n.CUBE
      }, t.DotPlot.prototype.getExpressionType = function(e, t) {
        return n.DOTPLOT
      }, t.BoxPlot.prototype.getExpressionType = function(e, t) {
        return n.BOXPLOT
      }
    });
define(
    'core/math/features/findLinearSubset',
    ['require', 'parsenodes', 'core/math/maybe-rational'], function(e) {
      'use strict';
      var t = e('parsenodes'), r = e('core/math/maybe-rational').maybeRational,
          n = t.Constant(r(0, 1)), i = t.Constant(r(-1, 0));
      t.Expression.prototype.findLinearSubset =
          function(e) {
        for (var t = [], r = 0; r < e.length; r++)
          t.push(!this.dependsOn(e[r]));
        return t
      },
      t.FreeVariable.prototype.findLinearSubset =
          function(e) {
        for (var t = [], r = 0; r < e.length; r++) t.push(!0);
        return t
      },
      t.Add.prototype.findLinearSubset =
          function(e) {
        for (var t = [], r = this.args[0].findLinearSubset(e),
                 n = this.args[1].findLinearSubset(e), i = 0;
             i < e.length; i++)
          t.push(r[i] && n[i]);
        return t
      },
      t.Subtract.prototype.findLinearSubset = t.Add.prototype.findLinearSubset,
      t.Negative.prototype.findLinearSubset = function(e) {
        return this.args[0].findLinearSubset(e)
      }, t.Multiply.prototype.findLinearSubset = function(e) {
        for (var t = this.args[0].findLinearSubset(e).slice(),
                 r = this.args[1].findLinearSubset(e).slice(), n = 0, i = 0,
                 a = 0;
             a < e.length; a++)
          t[a] = t[a] && !this.args[1].dependsOn(e[a]), t[a] && (n += 1),
          r[a] = r[a] && !this.args[0].dependsOn(e[a]), r[a] && (i += 1);
        return n >= i ? t : r
      }, t.Divide.prototype.findLinearSubset = function(e) {
        for (var t = this.args[0].findLinearSubset(e), r = [], n = 0;
             n < e.length; n++)
          r.push(t[n] && !this.args[1].dependsOn(e[n]));
        return r
      }, t.List.prototype.findLinearSubset = function(e) {
        var t, r = [];
        for (t = 0; t < e.length; t++) r.push(!0);
        for (var n = 0; n < this.args.length; n++) {
          var i = this.args[n].findLinearSubset(e);
          for (t = 0; t < e.length; t++) r[t] = r[t] && i[t]
        }
        return r
      }, t.Broadcast.prototype.findLinearSubset = function(e) {
        for (var r = this._replacedSymbols, a = this._expression,
                 o = this._lists, s = {}, u = 0;
             u < o.length; u++) {
          for (var c = o[u].findLinearSubset(e), l = n, p = 0; p < e.length;
               p++)
            c[p] ?
                o[u].dependsOn(e[p]) && (l = t.Add([l, t.FreeVariable(e[p])])) :
                l = t.Add([l, t.Exponent([t.FreeVariable(e[p]), i])]);
          s[r[u]] = l
        }
        return a.substitute(s).findLinearSubset(e)
      }, t.Piecewise.prototype.findLinearSubset = function(e) {
        for (var t = this.args[0], r = this.args[1].findLinearSubset(e),
                 n = this.args[2].findLinearSubset(e), i = [], a = 0;
             a < e.length; a++)
          i.push(!t.dependsOn(e[a]) && r[a] && n[a]);
        return i
      }
    });
define(
    'core/math/features/deriveRegressionRestrictions',
    ['require', 'parsenodes', 'core/math/types', 'core/math/domaintypes'],
    function(e) {
      'use strict';
      function t(e) {
        for (var t = 1 / 0, r = -1 / 0, n = e.length, i = 0; i < e.length; i++)
          t = Math.min(t, e[i]), r = Math.max(r, e[i]);
        return {
          min: t, max: r, length: n
        }
      }
      function r(e, t, r) {
        if ('known' !== r.type) return e;
        var n = i.And([
          i.Comparator['<=']([i.Constant(r.bounds[0]), i.FreeVariable(t)]),
          i.Comparator['<=']([i.FreeVariable(t), i.Constant(r.bounds[1])])
        ]);
        return i.Multiply([e, i.Piecewise([n, i.Constant(1), i.Constant(NaN)])])
      }
      function n(e) {
        for (var t, r = this.args[0], n = this.getDependencies(), a = {}, o = 0;
             o < n.length; o++)
          if (e.listStatistics.hasOwnProperty(n[o])) {
            if (void 0 !== t) return {};
            t = n[o]
          }
        if (void 0 === t) return {};
        if (1 !== r.polynomialOrder(t)) return {};
        var s = r.getPolynomialCoefficients(t), u = s[1],
            c = s[1].getDependencies();
        if (1 !== c.length) return {};
        var l = c[0];
        if (1 !== u.polynomialOrder(l)) return {};
        var p = e.listStatistics[t],
            f = (p.max - p.min) / Math.min(p.length - 1, 31), h = Math.PI / f;
        return isFinite(h) ?
            h <= 0 ? {} :
                     (a[l] = i.Piecewise([
                                i.And([
                                  i.Comparator['<=']([i.Constant(0), u]),
                                  i.Comparator['<']([u, i.Constant(h)])
                                ]),
                                i.Constant(1), i.Constant(NaN)
                              ]).boundDomain(l),
                      a) :
            {}
      }
      var i = e('parsenodes'), a = e('core/math/types'),
          o = e('core/math/domaintypes');
      i.Base.prototype.deriveRegressionRestrictions =
          function() {
        return this
      },
      i.Broadcast.prototype.deriveRegressionRestrictions =
          function() {
        for (var e = this._replacedSymbols, n = this._expression,
                 o = this._lists, s = {}, u = 0;
             u < e.length; u++)
          0 === o[u].getDependencies().length &&
              o[u].valueType === a.ListOfNumber &&
              (s[e[u]] = t(o[u].asValue()));
        var c, l = n._deriveRegressionRestrictions({listStatistics: s});
        for (c in l)
          if ('known' !== l[c].type) return this;
        var p = n;
        for (c in l) p = r(p, c, l[c]);
        return i.Broadcast(e, [p].concat(o))
      },
      i.Base.prototype._deriveRegressionRestrictions =
          function(e) {
        return {}
      },
      i.Expression.prototype._deriveRegressionRestrictions =
          function(e) {
        for (var t = {}, r = 0; r < this.args.length; r++) {
          var n = this.args[r]._deriveRegressionRestrictions(e);
          for (var i in n) t[i] = t[i] ? o.intersectDomains(t[i], n[i]) : n[i]
        }
        return t
      },
      i.BuiltInFunction.sin.prototype._deriveRegressionRestrictions = n,
      i.BuiltInFunction.cos.prototype._deriveRegressionRestrictions = n,
      i.Exponent.prototype._deriveRegressionRestrictions = function(e) {
        for (var t = this.args[0], r = this.args[1], n = t.getDependencies(),
                 a = r.getDependencies(), o = {}, s = !1, u = 0;
             u < a.length; u++)
          if (e.listStatistics.hasOwnProperty(a[u])) {
            s = !0;
            break
          }
        if (!s) return {};
        if (1 !== n.length) return {};
        var c = n[0];
        return e.listStatistics.hasOwnProperty(c) ?
            {} :
            1 !== t.polynomialOrder(c) ?
            {} :
            (o[c] = i.Piecewise([
                       i.Comparator['>=']([t, i.Constant(0)]), i.Constant(1),
                       i.Constant(NaN)
                     ]).boundDomain(c),
             o)
      }, i.Piecewise.prototype._deriveRegressionRestrictions = function(e) {
        for (var t = {}, r = this.getDependencies(), n = 0; n < r.length; n++)
          t[r[n]] = o.unknownDomain();
        return t
      }
    });
define(
    'parser',
    [
      'require',
      'core/math/baseparser',
      'core/math/features/getConcreteTree',
      'core/math/features/getValueType',
      'core/math/features/typeCheck',
      'core/math/features/repr',
      'core/math/features/scalarEvalExpression',
      'core/math/features/constantcollapsedcopy',
      'core/math/features/polynomialorder',
      'core/math/features/polynomialcoefficients',
      'core/math/features/extractconditions',
      'core/math/features/piecewiseDependsOn',
      'core/math/features/bounddomain',
      'core/math/features/derivative',
      'core/math/features/substitute',
      'core/math/features/isImplicit',
      'core/math/features/solve',
      'core/math/features/analyze',
      'core/math/features/analyzeFourFunction',
      'core/math/features/analyzeScientific',
      'core/math/features/analyzeSingleExpressionScientific',
      'core/math/features/getgraphmode',
      'core/math/features/getgraphinfo',
      'core/math/features/getMoveStrategy',
      'core/math/features/getDefaultDragMode',
      'core/math/features/tableinfo',
      'core/math/features/tableerror',
      'core/math/features/graph',
      'core/math/features/elementAt',
      'core/math/features/printLatex',
      'core/math/features/statistics',
      'core/math/features/getExpressionType',
      'core/math/features/findLinearSubset',
      'core/math/features/deriveRegressionRestrictions'
    ],
    function(e) {
      'use strict';
      var t = e('core/math/baseparser');
      return e('core/math/features/getConcreteTree'),
             e('core/math/features/getValueType'),
             e('core/math/features/typeCheck'), e('core/math/features/repr'),
             e('core/math/features/scalarEvalExpression'),
             e('core/math/features/constantcollapsedcopy'),
             e('core/math/features/polynomialorder'),
             e('core/math/features/polynomialcoefficients'),
             e('core/math/features/extractconditions'),
             e('core/math/features/piecewiseDependsOn'),
             e('core/math/features/bounddomain'),
             e('core/math/features/derivative'),
             e('core/math/features/substitute'),
             e('core/math/features/isImplicit'), e('core/math/features/solve'),
             e('core/math/features/analyze'),
             e('core/math/features/analyzeFourFunction'),
             e('core/math/features/analyzeScientific'),
             e('core/math/features/analyzeSingleExpressionScientific'),
             e('core/math/features/getgraphmode'),
             e('core/math/features/getgraphinfo'),
             e('core/math/features/getMoveStrategy'),
             e('core/math/features/getDefaultDragMode'),
             e('core/math/features/tableinfo'),
             e('core/math/features/tableerror'), e('core/math/features/graph'),
             e('core/math/features/elementAt'),
             e('core/math/features/printLatex'),
             e('core/math/features/statistics'),
             e('core/math/features/getExpressionType'),
             e('core/math/features/findLinearSubset'),
             e('core/math/features/deriveRegressionRestrictions'), t
    });
define(
    'core/math/finddependencyorder',
    ['require', 'core/math/builtinframe', 'underscore'], function(e) {
      'use strict';
      function t(e, t, i) {
        function a(e) {
          g[e] = g[e] || {};
          var r, n = g[e];
          n.id = e, n.index = v, n.lowlink = v, b.push(n), n.instack = !0, v++;
          for (var i = t[e].getDependencies(), u = 0; u < i.length; u++) {
            var c = i[u];
            if (d.hasOwnProperty(c))
              for (var l = d[c], p = 0; p < l.length; p++) {
                var f = l[p];
                g.hasOwnProperty(f) ?
                    (r = g[f],
                     r.instack && (n.lowlink = Math.min(n.lowlink, r.index))) :
                    (a(f), r = g[f], n.lowlink = Math.min(n.lowlink, r.lowlink))
              }
          }
          if (n.lowlink === n.index)
            if (r = b.pop(), r.instack = !1, r === n)
              o(n);
            else {
              for (var h = [r];;)
                if (r = b.pop(), r.instack = !1, h.push(r), r === n) break;
              s(h)
            }
        }
        function o(e) {
          x.push(e.id)
        }
        function s(r) {
          var i, a, o = [];
          for (a = r.length - 1; a >= 0; a--) {
            i = r[a];
            var s = t[i.id].getLegalExports(e);
            Array.prototype.push.apply(o, s), o.push(s[0]), x.push(i.id)
          }
          for (o = n.unique(o), o.sort(), a = 0; a < o.length; a++) y[o[a]] = o
        }
        var u, c, l, p, f, h = [], d = {}, m = {}, y = {}, g = {}, v = 0,
                           b = [], x = [];
        if (!i) {
          i = [];
          for (u in t) t.hasOwnProperty(u) && i.push(u)
        }
        for (u in t)
          if (t.hasOwnProperty(u)) {
            for (f = t[u].exportPenalty || 0; h.length < f + 1;) h.push([]);
            h[f].push(u)
          }
        for (f = 0; f < h.length; f++) {
          var _ = {};
          for (c = 0; c < h[f].length; c++) {
            u = h[f][c];
            var S = t[u].getLegalExports(e);
            for (l = 0; l < S.length; l++)
              p = S[l],
              r[p] || d[p] ||
                  (_[p] = _[p] || [], _[p].push(u),
                   _[p].length > 1 && (m[p] = !0))
          }
          for (p in _) d[p] = _[p]
        }
        for (c = 0; c < i.length; c++) g.hasOwnProperty(i[c]) || a(i[c]);
        return {
          resolved: x, multiplyDefined: m, cyclicallyDefined: y
        }
      }
      var r = e('core/math/builtinframe'), n = e('underscore');
      return t
    });
define(
    'core/math/findIntersections',
    [
      'require', 'core/types/graphmode', './plotter', 'parsenodes',
      'core/math/distance'
    ],
    function(e) {
      'use strict';
      function t(e) {
        for (var t = [], r = 0; r < e; r++)
          t[r] = {x: [], y: [], intersects: []};
        return t
      }
      function r(e, t, r, n) {
        return r === l.X && n === l.X || r === l.Y && n === l.Y ? function(r) {
          return t(r) - e(r)
        } : (r === l.X && n === l.Y || r === l.Y && n === l.X) && function(r) {
          return r - t(e(r))
        }
      }
      function n(e, t) {
        t instanceof f.SolvedEquation ?
            t = t._expression :
            t instanceof f.OptimizedRegression && (t = t.model);
        var r = [], n = [];
        return t instanceof f.DoubleInequality ?
                   f.List.eachArgs(
                       e, t._expressions,
                       function(e) {
                         r.push(e[0].getCompiledFunction()),
                             n.push(e[0].isConstant && e[1].isNaN()),
                             r.push(e[1].getCompiledFunction()),
                             n.push(e[1].isConstant && e[1].isNaN())
                       }) :
                   f.List.wrap(t).eachElement(
                       e,
                       function(e) {
                         r.push(e.getCompiledFunction()),
                             n.push(e.isConstant && e.isNaN())
                       }),
        {
          functions: r, skipIntersecting: n
        }
      }
      function i(e, t) {
        var r = [];
        for (var i in e)
          if (e.hasOwnProperty(i) && String(i) !== String(t) &&
              e[i].shouldIntersect()) {
            var a = e[i], o = n(a.policy, a.concreteTree);
            r.push({
              id: i,
              graphMode: a.getGraphMode(),
              functions: o.functions,
              skipIntersecting: o.skipIntersecting
            })
          }
        return r
      }
      function a(e, t) {
        e.intersects = Array(e.x.length);
        for (var r = 0; r < e.x.length; r++) e.intersects[r] = t
      }
      function o(e, t) {
        if (t === l.X) {
          var r = e.y;
          e.y = e.x, e.x = r
        }
      }
      function s(e, t) {
        Array.prototype.push.apply(e.x, t.x),
            Array.prototype.push.apply(e.y, t.y),
            Array.prototype.push.apply(e.intersects, t.intersects)
      }
      function u(e, t, r) {
        var n = p.sampleXY(e, t), i = n.poi.zeros, a = n.poi.extrema, o = [],
            s = 0, u = 0;
        for (s = 0; s < i.x.length; s++) {
          for (; u < a.x.length && a.x[u] < i.x[s]; u++)
            h.approx(a.y[u], 0) && o.push(a.x[u]);
          o.push(i.x[s])
        }
        for (; u < a.x.length; u++) h.approx(a.y[u], 0) && o.push(a.x[u]);
        return {
          x: o, y: o.map(r)
        }
      }
      function c(e, c, l) {
        var f = e[l], h = f.getGraphInfo(), m = f.getGraphMode(),
            y = n(f.policy, f.concreteTree), g = t(y.functions.length),
            v = i(e, l);
        if (!v) return g;
        for (var b = 0, x = 0; x < v.length; x++)
          for (var _ = v[x], S = 0; S < y.functions.length; S++)
            if (!y.skipIntersecting[S])
              for (var M = y.functions[S].fn, E = p.computeDomain(c, h, M),
                       w = 0;
                   w < _.functions.length; w++)
                if (!v[x].skipIntersecting[w]) {
                  var D = _.functions[w].fn, T = r(M, D, m, _.graphMode);
                  if (T) {
                    var P = u(T, E, M);
                    if ((b += P.x.length) > d) return t(y.functions.length);
                    a(P, _.id), o(P, m), s(g[S], P)
                  }
                }
        return g
      }
      var l = e('core/types/graphmode'), p = e('./plotter').default,
          f = e('parsenodes'), h = e('core/math/distance'), d = 100;
      return {
        findIntersections: c, findIndicatorZeros: u
      }
    });
define(
    'core/math/interpolatedlabel',
    [
      'require', 'exports', 'parsenodes', 'core/math/types', 'core/lib/label',
      './policy'
    ],
    function(e, t, r, n, i, a) {
      'use strict';
      function o(e) {
        return !(e.length < 2) && ('`' === e[0] && '`' === e[e.length - 1])
      }
      function s(e) {
        for (var t,
             r =
                 [
                   '[a-zA-Z][0-9]*', '[a-zA-Z]_[a-zA-Z0-9]+',
                   '[a-zA-Z]_\\{[a-zA-Z0-9]+\\}'
                 ],
             n = '\\$({' + r.join('})|\\$({') + '})', i = new RegExp(n, 'g'),
             a = [], o = 0, s = 0;
             t = i.exec(e);) {
          s = t.index, s > o && a.push(e.substr(o, s - o));
          var u = t[0],
              c = u.replace(/[{}\$]/g, '')
                      .replace(/^([a-zA-Z])([0-9]+)$/, '$1_$2');
          a.push({symbol: c, str: u}), o = t.index + u.length
        }
        return o < e.length && a.push(e.substr(o)), {
          raw: e, parts: a
        }
      }
      function u(e, t) {
        return t ?
            '{' + i.truncatedLatexLabel(e, {bigCutoff: 1e7, digits: 8}) + '}' :
            i.truncatedPlainmathLabel(e, {bigCutoff: 1e7, digits: 8})
      }
      function c(e, t, i) {
        for (var s = [], c = o(e.raw), l = 0, p = e.parts; l < p.length; l++) {
          var f = p[l];
          if ('string' == typeof f)
            s.push(f);
          else {
            var h =
                r.Identifier(f.symbol).tryGetConcreteTree(a.defaultPolicy, t);
            if (h.valueType === n.Number) {
              var d = h.asValue();
              if ('number' == typeof d) {
                s.push(u(d, c));
                continue
              }
            } else if (h.valueType === n.ListOfNumber && h.args[i]) {
              var d = h.args[i].asValue();
              if ('number' == typeof d) {
                s.push(u(d, c));
                continue
              }
            }
            c ? s.push('{?}') : s.push('?')
          }
        }
        return s.join('')
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
          t.isMathLabel = o, t.parse = s, t.interpolate = c
    });
define(
    'core/math/getCLSymbolMap',
    ['require', 'exports', 'underscore', 'core/lib/label'],
    function(e, t, r, n) {
      'use strict';
      function i() {
        var e = {}, t = {}, i = {}, a = [];
        for (var o in this.statements)
          if (this.statements.hasOwnProperty(o)) {
            var s = this.statements[o];
            switch (s.type) {
              case 'Error':
                break;
              case 'Regression':
                i[o] = [], a.push(o);
                break;
              default:
                var u = s.getLegalExports(this.policy);
                if (u) {
                  for (var c = 0, l = u; c < l.length; c++) {
                    var p = l[c];
                    s.exportPenalty > 0 ? t[p] = o : e[p] = o
                  }
                  i[o] = r.difference(
                      s.getDependencies(), s.getDummyDependencies(), u)
                }
            }
          }
        for (var f = 0, h = a; f < h.length; f++) {
          var o = h[f], s = this.statements[o],
              d = n.latexToIdentifier(s.userData.residualVariable);
          d && (t[d] = o);
          for (var m = s.getDependencies().slice(), y = {}, p = void 0;
               p = m.pop();)
            if (!y[p]) {
              y[p] = !0;
              var g = e[p] || t[p];
              g ? (m.push.apply(m, i[g]), i[o].push(p)) : t[p] = o
            }
        }
        return {
          exportMap: e, weakExportMap: t, dependencyMap: i
        }
      }
      Object.defineProperty(t, '__esModule', {value: !0}), t.getCLSymbolMap = i
    });
define('core/types/line-width', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0}),
      t.THIN = 1, t.DEFAULT = 2.5, t.THICK = 5
});
define('core/math/policyFourFunction', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0});
  var r = function() {
    function e(e) {
      this.singleExpression = e.singleExpression
    }
    return e.prototype.assignmentForbidden = function(e) {
      return 'ans' !== e.slice(0, 3)
    }, e.prototype.isValidSlider = function(e) {
      return !1
    }, e.prototype.sliderVariables = function() {
      return []
    }, e.prototype.graphingEnabled = function() {
      return !1
    }, e.prototype.ansEnabled = function() {
      return !this.singleExpression
    }, e.prototype.disabledFeatures = function() {
      return [
        'Sum', 'Product', 'Integral', 'List', 'Derivative', 'Piecewise',
        'Exponent', 'PercentOf'
      ]
    }, e
  }();
  t.PolicyFourFunction = new r({singleExpression: !1}),
  t.PolicySingleExpressionFourFunction = new r({singleExpression: !0})
});
define('core/math/policyScientific', ['require', 'exports'], function(e, t) {
  'use strict';
  Object.defineProperty(t, '__esModule', {value: !0});
  var r = function() {
    function e(e) {
      this.singleExpression = e.singleExpression
    }
    return e.prototype.assignmentForbidden = function(e) {
      return this.singleExpression ? 'ans' !== e.slice(0, 3) :
                                     'tmp' === e.slice(0, 3)
    }, e.prototype.isValidSlider = function(e) {
      return !1
    }, e.prototype.sliderVariables = function() {
      return []
    }, e.prototype.graphingEnabled = function() {
      return !1
    }, e.prototype.ansEnabled = function() {
      return !this.singleExpression
    }, e.prototype.disabledFeatures = function() {
      return this.singleExpression ?
          [
            'Sum', 'Product', 'Integral', 'Derivative', 'Piecewise', 'PercentOf'
          ] :
          ['Sum', 'Product', 'Integral', 'Derivative', 'Piecewise']
    }, e
  }();
  t.PolicyScientific = new r({singleExpression: !1}),
  t.PolicySingleExpressionScientific = new r({singleExpression: !0})
});
define(
    'core/math/frameFourFunction',
    ['require', 'core/math/parsenode/builtinfunction'], function(e) {
      'use strict';
      function t(e) {
        var t = {};
        return e.additionalFunctions &&
                   -1 !== e.additionalFunctions.indexOf('sqrt') &&
                   (t.sqrt = r.sqrt),
               t
      }
      var r = e('core/math/parsenode/builtinfunction');
      return {
        getFrame: t
      }
    });
define(
    'core/math/frameScientific',
    [
      'require', 'core/math/builtinconstants',
      'core/math/parsenode/builtinfunction'
    ],
    function(e) {
      'use strict';
      function t(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          if (!t.hasOwnProperty(n))
            throw new Error(
                'Programming Error: key \'' + n +
                '\' does not exist in table. Must be one of:\n' +
                Object.keys(t).join('\n'))
        }
      }
      function r(e) {
        var t = {};
        return a.forEach(function(e) {
          t[e] = n[e]
        }),
               o.forEach(function(r) {
                 e.replaceRoundWithReciprocal && 'round' === r || (t[r] = i[r])
               }),
               e.trigAngleMultiplier &&
                   (t.trigAngleMultiplier = e.trigAngleMultiplier),
               t
      }
      var n = e('core/math/builtinconstants'),
          i = e('core/math/parsenode/builtinfunction'),
          a = ['pi', 'e', 'trigAngleMultiplier'], o = [
            'sqrt', 'nthroot', 'abs', 'ln', 'sin', 'cos', 'tan', 'log',
            'arcsin', 'arccos', 'arctan', 'mean', 'round', 'stdev', 'stdevp',
            'nCr', 'nPr', 'exp', 'factorial'
          ];
      return t(a, n), t(o, i), {
        getFrame: r
      }
    });
define(
    'core/math/frameSingleExpressionScientific',
    [
      'require', 'core/math/builtinconstants',
      'core/math/parsenode/builtinfunction'
    ],
    function(e) {
      'use strict';
      function t(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          if (!t.hasOwnProperty(n))
            throw new Error(
                'Programming Error: key \'' + n +
                '\' does not exist in table. Must be one of:\n' +
                Object.keys(t).join('\n'))
        }
      }
      function r(e) {
        var t = {};
        return a.forEach(function(e) {
          t[e] = n[e]
        }),
               o.forEach(function(e) {
                 t[e] = i[e]
               }),
               e.trigAngleMultiplier &&
                   (t.trigAngleMultiplier = e.trigAngleMultiplier),
               t
      }
      var n = e('core/math/builtinconstants'),
          i = e('core/math/parsenode/builtinfunction'),
          a = ['pi', 'e', 'trigAngleMultiplier'], o = [
            'sqrt', 'nthroot', 'abs', 'ln', 'sin', 'cos', 'tan', 'log',
            'arcsin', 'arccos', 'arctan', 'exp', 'factorial'
          ];
      return t(a, n), t(o, i), {
        getFrame: r
      }
    });
define(
    'core/math/frameGraphing',
    [
      'require', 'core/math/builtinconstants',
      'core/math/parsenode/builtinfunction'
    ],
    function(e) {
      'use strict';
      function t(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          if (!t.hasOwnProperty(n))
            throw new Error(
                'Programming Error: key \'' + n +
                '\' does not exist in table. Must be one of:\n' +
                Object.keys(t).join('\n'))
        }
      }
      function r(e) {
        var t, r = {};
        for (t in n) n.hasOwnProperty(t) && (r[t] = n[t]);
        for (t in i)
          i.hasOwnProperty(t) &&
              (!0 !== e.restrictedFunctions || -1 === a.indexOf(t) ||
               !0 === e.forceEnableGeometryFunctions && -1 !== s.indexOf(t)) &&
              (!1 === e.distributions && -1 !== o.indexOf(t) || (r[t] = i[t]));
        return e.trigAngleMultiplier &&
                   (r.trigAngleMultiplier = e.trigAngleMultiplier),
               e.globalRandomSeed && (r.globalRandomSeed = e.globalRandomSeed),
               r
      }
      var n = e('core/math/builtinconstants'),
          i = e('core/math/parsenode/builtinfunction'),
          a =
              [
                'csc', 'sec', 'cot', 'arccsc', 'arcsec', 'arccot', 'csch',
                'sech', 'coth', 'arccsch', 'arcsech', 'arccoth', 'mad', 'cov',
                'distance', 'midpoint'
              ],
          o =
              [
                'erf', 'ttest', 'tscore', 'ittest', 'normaldist', 'tdist',
                'poissondist', 'binomialdist', 'pdf', 'cdf', 'random',
                'histogram', 'dotplot', 'boxplot'
              ],
          s = ['distance', 'midpoint'];
      return t(a, i), t(o, i), {
        getFrame: r
      }
    });
define(
    'core/math/context',
    [
      'require',
      'pjs',
      'underscore',
      './plotter',
      'parser',
      'core/math/parsenode/constant',
      'core/math/parsenode/seed',
      'core/math/parsenode/functioncall',
      'core/math/parsenode/image',
      'core/math/parsenode/slider',
      'core/math/parsenode/table',
      'core/math/parsenode/tablecolumn',
      'core/math/parsenode/freevariable',
      'core/math/finddependencyorder',
      'core/math/errormsg',
      'core/types/graphmode',
      'core/math/workerconfig',
      './findIntersections',
      './interpolatedlabel',
      'core/math/types',
      'core/math/expression-types',
      'core/math/expression-types',
      'core/math/getCLSymbolMap',
      'core/math/distribution-spec',
      'core/math/maybe-rational',
      'core/lib/number-to-latex',
      'core/lib/label',
      'core/math/functions',
      'core/types/line-width',
      'core/math/policyFourFunction',
      'core/math/policyScientific',
      'core/math/policyScientific',
      'core/math/policyFourFunction',
      'core/math/policyGraphing',
      'core/math/policyGraphing',
      'core/math/frameFourFunction',
      'core/math/frameFourFunction',
      'core/math/frameScientific',
      'core/math/frameSingleExpressionScientific',
      'core/math/frameGraphing',
      'core/math/frameGraphing'
    ],
    function(e) {
      'use strict';
      function t(e) {
        var t = e.rawTree.userData, r = e.rawTree.metaData;
        return t.cdf && t.cdf.show && r.distributionSpec
      }
      function r(e) {
        var t = e.evaluationState.expression_type, r = e.rawTree.userData;
        return !(!r.clickableInfo || !r.clickableInfo.enabled) &&
            (!!e.rawTree.isImage ||
             e.getGraphMode() !== v.XYPOINT_MOVABLE && E(t))
      }
      function n(e, t) {
        var r = 'id' + e;
        t = t || [];
        for (var n, i, a, o = 0, s = t.length; o < s; o++)
          n = t[o], i = n[0], a = n[1], r += '::' + i + a;
        return r
      }
      var i = e('pjs'), a = e('underscore'), o = e('./plotter').default,
          s = e('parser'), u = e('core/math/parsenode/constant'),
          c = e('core/math/parsenode/seed'),
          l = e('core/math/parsenode/functioncall'),
          p = e('core/math/parsenode/image'),
          f = e('core/math/parsenode/slider'),
          h = e('core/math/parsenode/table'),
          d = e('core/math/parsenode/tablecolumn'),
          m = e('core/math/parsenode/freevariable'),
          y = e('core/math/finddependencyorder'), g = e('core/math/errormsg'),
          v = e('core/types/graphmode'), b = e('core/math/workerconfig'),
          x = e('./findIntersections').findIntersections,
          _ = e('./interpolatedlabel'), S = e('core/math/types'),
          M = e('core/math/expression-types').ExpressionType,
          E = e('core/math/expression-types').isClickableExpressionType,
          w = e('core/math/getCLSymbolMap').getCLSymbolMap,
          D = e('core/math/distribution-spec'),
          T = e('core/math/maybe-rational').maybeRational,
          P = e('core/lib/number-to-latex').default, I = e('core/lib/label'),
          C = e('core/math/functions'), O = e('core/types/line-width'), A = {
            fourFunction: e('core/math/policyFourFunction').PolicyFourFunction,
            scientific: e('core/math/policyScientific').PolicyScientific,
            singleExpressionScientific: e('core/math/policyScientific')
                                            .PolicySingleExpressionScientific,
            singleExpressionFourFunction:
                e('core/math/policyFourFunction')
                    .PolicySingleExpressionFourFunction,
            graphing: e('core/math/policyGraphing').PolicyGraphing,
            graphing_3d: e('core/math/policyGraphing').PolicyGraphing3D
          },
          L = {
            fourFunction: e('core/math/frameFourFunction'),
            singleExpressionFourFunction: e('core/math/frameFourFunction'),
            scientific: e('core/math/frameScientific'),
            singleExpressionScientific:
                e('core/math/frameSingleExpressionScientific'),
            graphing: e('core/math/frameGraphing'),
            graphing_3d: e('core/math/frameGraphing')
          };
      return i(function(e) {
        function i(e, t) {
          return e ? '0' === e ? W : '1' === e ? Y : s.parse(e, t) : X
        }
        function E(e, t) {
          if (e) return s.parse(e, t)
        }
        function N(e) {
          return 'ans' !== e.slice(0, 3)
        }
        function q(e, t) {
          var r, n = e.multiplyDefined, i = e.cyclicallyDefined;
          for (r in n) n.hasOwnProperty(r) && (t[r] = g.multiplyDefined(r));
          for (r in i) i.hasOwnProperty(r) && (t[r] = g.cycle(i[r].filter(N)))
        }
        function F(e, t, r) {
          for (var n = 0; n < r.length; n++) {
            var i = r[n];
            e[i] || (e[i] = []), e[i].push(t)
          }
        }
        function R(e, t, r) {
          var n = e.variables;
          if (n && n.length) {
            for (var i = {}, a = 0; a < n.length; a++) i[n[a]] = !0;
            for (var o in r) i[o] = !0;
            r = i
          }
          e.variables = t.sliderVariables(Object.keys(r))
        }
        function V(e, t, r) {
          var n, i, a = e.evaluationState, o = e.rawTree, s = o.metaData.cdfMin,
                    c = o.metaData.cdfMax, p = NaN, f = NaN, h = {},
                    d = 'Assignment' === o.type ? o._expression : o,
                    m = d && d.metaData && d.metaData.distributionSpec;
          if (s) {
            var y = s.tryGetConcreteTree(t, r);
            for (y.isConstant && (p = y.asValue()), n = y.getDependencies(),
                                                    i = 0;
                 i < n.length; i++)
              h[n[i]] = !0
          } else
            p = -1 / 0;
          if (c) {
            var v = c.tryGetConcreteTree(t, r);
            for (v.isConstant && (f = v.asValue()), n = v.getDependencies(),
                                                    i = 0;
                 i < n.length; i++)
              h[n[i]] = !0
          } else
            f = 1 / 0;
          var b = !0, x = !0;
          if (isNaN(p) && (b = !1, p = NaN), isNaN(f) && (x = !1, f = NaN),
              b ? x ? p > f &&
                          (b = !1, x = !1,
                           a.error = g.cdfMaxLessThanMin().getError()) :
                      a.error = g.cdfMaxInvalid().getError() :
                  a.error = g.cdfMinInvalid().getError(),
              b && x) {
            var _ = l('cdf', [d, u(p), u(f)]);
            a.cdf_evaluation = +_.tryGetConcreteTree(t, r).asValue()
          }
          var S = -1 / 0, M = 1 / 0;
          if (m &&
              (m.discrete && (S = 0),
               'binomialdist' === m.symbol && d.args && d.args[0])) {
            var E = d.args[0].asValue();
            isFinite(E) && (M = E)
          }
          o.metaData.evaluatedCDFMin = p, o.metaData.evaluatedCDFMax = f,
          a.cdf_min_valid = b, a.cdf_max_valid = x, a.cdf_min_default = S,
          a.cdf_max_default = M, a.is_single_identifier = !1, R(a, t, h)
        }
        function k(e, t, r) {
          var n, i = e.evaluationState, a = e.rawTree.metaData.fillOpacity,
                 o = {}, s = !0;
          if (a) {
            var u = a.tryGetConcreteTree(t, r);
            n = u.asValue();
            for (var c = u.getDependencies(), l = 0; l < c.length; l++)
              o[c[l]] = !0
          }
          isFinite(n) || (s = !1, n = NaN), a || (s = !0),
              e.rawTree.metaData.computedFillOpacity = n,
              i.fill_opacity_valid = s, R(i, t, o)
        }
        function B(e, t, r) {
          var n, i = e.evaluationState, a = e.rawTree.metaData.lineWidth,
                 o = {}, s = !0;
          if (a) {
            var u = a.tryGetConcreteTree(t, r);
            n = u.asValue();
            for (var c = u.getDependencies(), l = 0; l < c.length; l++)
              o[c[l]] = !0
          }
          isFinite(n) || (s = !1, n = NaN), a || (s = !0, n = O.DEFAULT),
              e.rawTree.metaData.computedLineWidth = n, i.line_width_valid = s,
              R(i, t, o)
        }
        function j(e, t, r) {
          var n, i, a, o, s = e.evaluationState, u = e.rawTree,
                          c = u.metaData.clickableAssignment,
                          l = u.metaData.clickableExpression, p = {};
          if (c && 'Identifier' === c.type) {
            var f = r[c._symbol], h = f && f.type;
            'Slider' !== h && 'Assignment' !== h || (a = c._symbol)
          }
          if (l) {
            var d = l.tryGetConcreteTree(t, r);
            if (d.valueType === S.Number) {
              var m = d.asValue();
              isNaN(m) || (o = P(m))
            } else if (d.valueType === S.ListOfNumber) {
              var y = [], g = !0;
              for (i = 0; i < d.args.length; i++) {
                var v = d.args[i];
                if (v.valueType !== S.Number) return !1;
                var b = v.asValue();
                y.push(P(b)), isNaN(b) && (g = !1)
              }
              g && (o = '\\left[' + y.join(',') + '\\right]')
            }
            for (n = d.getDependencies(), i = 0; i < n.length; i++) p[n[i]] = !0
          }
          a && o &&
              (s.clickableinfo_identifier = a,
               s.clickableinfo_latex = I.identifierToLatex(a) + '=' + o),
              s.clickableinfo_identifier_valid = !!a,
              s.clickableinfo_expression_valid = !!o, R(s, t, p)
        }
        function z(e, t, r) {
          var n, i, a = e.evaluationState, o = e.rawTree,
                    s = a.expression_type === M.POLAR ?
              o.metaData.polarDomainMin :
              o.metaData.parametricDomainMin,
                    u = a.expression_type === M.POLAR ?
              o.metaData.polarDomainMax :
              o.metaData.parametricDomainMax,
                    c = NaN, l = NaN, p = !1, f = {};
          if (s) {
            p = !0;
            var h = s.tryGetConcreteTree(t, r);
            for (h.isConstant && (c = h.asValue()), n = h.getDependencies(),
                                                    i = 0;
                 i < n.length; i++)
              f[n[i]] = !0
          } else
            c = 0;
          if (u) {
            p = !0;
            var d = u.tryGetConcreteTree(t, r);
            for (d.isConstant && (l = d.asValue()), n = d.getDependencies(),
                                                    i = 0;
                 i < n.length; i++)
              f[n[i]] = !0
          } else
            a.expression_type === M.PARAMETRIC ?
                l = 1 :
                a.expression_type === M.POLAR &&
                    (l = 12 * Math.PI / r.trigAngleMultiplier.asValue());
          var m = !0, y = !0;
          isFinite(c) || (m = !1, c = NaN), isFinite(l) || (y = !1, l = NaN),
              m ? y ?
                  c > l &&
                      (m = !1, y = !1,
                       a.error = g.domainMaxLessThanMin().getError()) :
                  a.error = g.domainMaxInvalid().getError() :
                  a.error = g.domainMinInvalid().getError(),
                  o.metaData.evaluatedDomainMin = c,
                  o.metaData.evaluatedDomainMax = l,
                  a.expression_type === M.POLAR &&
              (o.metaData.isExplicitDomain = p),
                  a.domain_min_number = c, a.domain_max_number = l,
                  a.domain_min_valid = m, a.domain_max_valid = y,
                  a.expression_type === M.PARAMETRIC && (delete f.t, R(a, t, f))
        }
        function G(e, t, r) {
          var n, i, a = e.evaluationState, o = e.rawTree,
                    s = o.metaData.vizAxisOffset, u = o.metaData.vizBreadth,
                    c = NaN, l = NaN, p = {};
          if (s) {
            var f = s.tryGetConcreteTree(t, r);
            for (f.isConstant && (c = f.asValue()), n = f.getDependencies(),
                                                    i = 0;
                 i < n.length; i++)
              p[n[i]] = !0
          } else
            c = 1;
          if (u) {
            var h = u.tryGetConcreteTree(t, r);
            for (h.isConstant && (l = h.asValue()), n = h.getDependencies(),
                                                    i = 0;
                 i < n.length; i++)
              p[n[i]] = !0
          } else
            l = 1;
          var d = !0, m = !0;
          isFinite(c) || (d = !1, c = NaN), isFinite(l) || (m = !1, l = NaN),
              d ? m || (a.error = g.boxplotBreadthInvalid().getError()) :
                  a.error = g.boxplotOffsetInvalid().getError(),
                  o.metaData.evaluatedAxisOffset = c,
                  o.metaData.evaluatedBreadth = l,
                  a.viz_values = {axisOffset: c, breadth: l},
                  a.viz_valids = {axisOffset: d, breadth: m}, R(a, t, p)
        }
        function U(e) {
          return e.globalRandomSeed || []
        }
        e.init = function() {
          this.statements = {}, this.analysis = {}, this.currentStatus = {},
          this.currentLabel = {}, this.unpublishedIds = {},
          this.intersectId = void 0, this.dirtyExportedSymbolRoots = {},
          this.dirtyStatementRoots = {}, this.markedRegressionDirty = !1,
          this.setEvaluationMode('graphing'), this.setRestrictedFunctions(!1),
          this.setForceEnableGeometryFunctions(!1),
          this.setFunctionDefinition(!0),
          this.setReplaceRoundWithReciprocal(!1), this.invalidate()
        }, e.getCLSymbolMap = w, e.processChangeSet = function(e) {
          var t = {intersections: {}, graphs: {}};
          e.isCompleteState &&
              (this.invalidate(), this.statements = {}, this.currentLabel = {}),
              e.viewState && this.setViewState(e.viewState),
              e.hasOwnProperty('degreeMode') &&
              this.setDegreeMode(e.degreeMode),
              e.hasOwnProperty('globalRandomSeed') &&
              this.setGlobalRandomSeed(e.globalRandomSeed),
              e.hasOwnProperty('evaluationMode') &&
              this.setEvaluationMode(e.evaluationMode),
              e.hasOwnProperty('additionalFunctions') &&
              this.setAdditionalFunctions(e.additionalFunctions),
              e.hasOwnProperty('restrictedFunctions') &&
              this.setRestrictedFunctions(e.restrictedFunctions),
              e.hasOwnProperty('forceEnableGeometryFunctions') &&
              this.setForceEnableGeometryFunctions(
                  e.forceEnableGeometryFunctions),
              e.hasOwnProperty('distributions') &&
              this.setDistributions(e.distributions),
              e.hasOwnProperty('functionDefinition') &&
              this.setFunctionDefinition(e.functionDefinition),
              e.hasOwnProperty('replaceRoundWithReciprocal') &&
              this.setReplaceRoundWithReciprocal(e.replaceRoundWithReciprocal),
              e.hasOwnProperty('pointsOfInterest') &&
              this.setWorkerConfigProperty(
                  'pointsOfInterest', e.pointsOfInterest),
              e.hasOwnProperty('plotSingleVariableImplicitEquations') &&
              this.setWorkerConfigProperty(
                  'plotSingleVariableImplicitEquations',
                  e.plotSingleVariableImplicitEquations),
              e.hasOwnProperty('plotImplicits') &&
              this.setWorkerConfigProperty('plotImplicits', e.plotImplicits),
              e.hasOwnProperty('plotInequalities') &&
              this.setWorkerConfigProperty(
                  'plotInequalities', e.plotInequalities),
              e.hasOwnProperty('sliders') &&
              this.setWorkerConfigProperty('sliders', e.sliders),
              e.hasOwnProperty('intersectId') &&
              (this.intersectId = e.intersectId),
              this.processStatements(e, t), this.updateAnalysis(),
              e.hasOwnProperty('intersectId') &&
              this._updateIntersections(e.intersectId, t);
          var r = this._publishAllStatuses();
          return this._computeAllLabels(), this._graphAllChanged(t),
                 this.unpublishedIds = {}, {
            syncId: e.syncId, isCompleteState: e.isCompleteState,
                intersectionChanges: t.intersections, statusChanges: r,
                graphChanges: t.graphs
          }
        }, e.processStatements = function(e, t) {
          var r;
          if (e.statements)
            for (var n in e.statements) {
              var i = e.statements[n];
              if (null === i) {
                if (!e.isCompleteState && this.statements.hasOwnProperty(n) &&
                        (r = this.statements[n].getAllIds()),
                    this.removeStatement(n, t), !e.isCompleteState && r)
                  for (var a = 0; a < r.length; a++) t.graphs[r[a]] = void 0
              } else
                this.addStatement(i, t)
            }
        }, e.setViewState = function(e) {
          if (!a.isEqual(e, this.viewState)) {
            this.viewState = e;
            for (var t in this.statements)
              this.statements.hasOwnProperty(t) && (this.unpublishedIds[t] = !0)
          }
        }, e.getViewState = function() {
          if (this.viewState) {
            var e = Object.create(this.viewState);
            return this.parent_frame && this.parent_frame.trigAngleMultiplier ?
                       e.trigAngleMultiplier =
                           this.parent_frame.trigAngleMultiplier.asValue() :
                       e.trigAngleMultiplier = 1,
                       e
          }
        }, e.setDegreeMode = function(e) {
          this.use_degrees = e, this.invalidate()
        }, e.setGlobalRandomSeed = function(e) {
          this.globalRandomSeedString = e,
          this.parent_frame.globalRandomSeed = c(e),
          this.dirtyExportedSymbolRoots.globalRandomSeed = !0
        }, e.setEvaluationMode = function(e) {
          this.evaluationMode = e, this.policy = A[e], this.invalidate()
        }, e.setAdditionalFunctions = function(e) {
          this.additionalFunctions = e, this.invalidate()
        }, e.setRestrictedFunctions = function(e) {
          this.restrictedFunctions = e, this.invalidate()
        }, e.setForceEnableGeometryFunctions = function(e) {
          this.forceEnableGeometryFunctions = e, this.invalidate()
        }, e.setDistributions = function(e) {
          this.distributions = e, this.invalidate()
        }, e.setFunctionDefinition = function(e) {
          this.functionDefinition = e, this.invalidate()
        }, e.setReplaceRoundWithReciprocal = function(e) {
          this.replaceRoundWithReciprocal = e, this.invalidate()
        }, e.setWorkerConfigProperty = function(e, t) {
          t !== b[e] && (b[e] = t, this.invalidate())
        }, e._publishAllStatuses = function() {
          var e = {}, t = this.currentStatus;
          this.currentStatus = {};
          for (var r in this.unpublishedIds)
            if (this.analysis.hasOwnProperty(r)) {
              var n = this.analysis[r].evaluationState;
              JSON.stringify(n) !== JSON.stringify(t[r]) && (e[r] = n),
                  this.currentStatus[r] = n
            }
          return e
        }, e._computeAllLabels = function() {
          for (var e in this.currentLabel) {
            var t = this.statements[e];
            if (t) {
              var r = t.tryGetConcreteTree(this.policy, this.frame), n = 1;
              r.valueType === S.ListOfPoint && (n = r.args.length);
              for (var i = [], o = 0; o < n; o++)
                i.push(_.interpolate(this.currentLabel[e], this.frame, o));
              a.isEqual(i, t.computedLabels) ||
                  (t.computedLabels = i, this.unpublishedIds[e] = !0)
            }
          }
        }, e._graphAllChanged = function(e) {
          var t = this.getViewState(), r = !1;
          if (o.validateViewState(t)) {
            for (var n in this.unpublishedIds)
              if (this.analysis.hasOwnProperty(n)) {
                var i = this.analysis[n], s = i.evaluationState.expression_type,
                    u = s === M.SINGLE_POINT || s === M.POINT_LIST;
                if (i.rawTree.isTable)
                  for (var c = i.graph(t), l = i.rawTree.getAllIds(), p = 0;
                       p < l.length; p++)
                    c[l[p]] ? this._notifyGraphComputed(l[p], c[l[p]], e) :
                              this._notifyGraphRemoved(l[p], e);
                else
                  i.evaluationState.is_graphable &&
                          (i.rawTree.userData.shouldGraph ||
                           i.rawTree.userData.showLabel && u) ?
                      (this._notifyGraphComputed(n, i.graph(t), e),
                       this.intersectId === n && (r = !0)) :
                      this._notifyGraphRemoved(n, e)
              }
            a.keys(this.unpublishedIds).length && void 0 !== this.intersectId &&
                (this.unpublishedIds.hasOwnProperty(this.intersectId) ||
                 (r = !0)),
                r && this._updateIntersections(this.intersectId, e)
          }
        }, e._notifyGraphRemoved = function(e, t) {
          t.graphs[e] = void 0
        }, e._notifyGraphComputed = function(e, t, r) {
          C.dehydrateGraphData(t), r.graphs[e] = t
        }, e._updateIntersections = function(e, t) {
          if (this.viewState) {
            if (!this.analysis[e] || !this.analysis[e].shouldIntersect())
              return void (t.intersections[e] = []);
            var r = x(this.analysis, this.viewState, e);
            t.intersections[e] = r
          }
        }, e.getDisabledFeatures = function() {
          var e, t = this.policy.disabledFeatures();
          e = !1 === this.functionDefinition ? t.concat('FunctionDefinition') :
                                               t;
          var r = this.additionalFunctions || [];
          return e = e.filter(function(e) {
            return ('Exponent' !== e || -1 === r.indexOf('exponent')) &&
                ('PercentOf' !== e || -1 === r.indexOf('percent'))
          }.bind(this))
        }, e.areFractionsDisallowed = function() {
          var e = this.evaluationMode;
          return ('fourFunction' === e ||
                  'singleExpressionFourFunction' === e) &&
              (!this.additionalFunctions ||
               -1 === this.additionalFunctions.indexOf('fraction'))
        };
        var W = u(T(0, 1)), Y = u(T(1, 1)), X = u(NaN);
        e.addStatement = function(e, t) {
          if (e) {
            var r = e.id;
            this.markExportsDirty(r), this.markAsDirtyRoot(r);
            var a = {
              index: this.policy.ansEnabled() ? e.index : void 0,
              disabledFeatures: this.getDisabledFeatures(),
              disallowFrac: this.areFractionsDisallowed(),
              seedPrefix: n(r)
            },
                o = {};
            switch (e.type) {
              case 'table':
                var c = [];
                this.statements.hasOwnProperty(r) &&
                    (c = this.statements[r].getAllIds()),
                    e.shouldGraph = !0;
                for (var l, m, y, g = e.columns, v = [], b = 0, x = 0;
                     x < g.length; x++)
                  b = Math.max(g[x].values.length, b);
                for (var S = 0; S < g.length; S++) {
                  a.seedPrefix = n(r, [['tr', 0], ['tc', S]]),
                  l = s.parse(g[S].latex, a), m = [];
                  for (var M = -1, w = 0; w < g[S].values.length; w++)
                    g[S].values[w].replace(/\\space/g, '').match(/\S/) ?
                        (a.seedPrefix = n(r, [['tr', w + 1], ['tc', S]]),
                         m.push(s.parse(g[S].values[w], a)), M = w) :
                        m.push(u(NaN));
                  m = m.slice(0, M + 1), y = d(l, b, m), y.id = g[S].id,
                  y.header && (y.header.userData = g[S]),
                  y.header && (y.header.metaData = {}), v.push(y)
                }
                this.statements[r] = h(v);
                var T = this, P = this.statements[r].getAllIds();
                c.forEach(function(e) {
                  -1 === P.indexOf(e) && T._notifyGraphRemoved(e, t)
                });
                break;
              case 'image':
                var I = '-\\trigAngleMultiplier*\\arctan(\\sin(' + e.angle +
                    '),\\cos(' + e.angle + '))';
                a.seedPrefix = n(r, [['ic', r]]);
                var C = s.parse(e.center, a);
                a.seedPrefix = n(r, [['ia', r]]);
                var O = s.parse(I, a);
                a.seedPrefix = n(r, [['iw', r]]);
                var A = s.parse(e.width, a);
                a.seedPrefix = n(r, [['ih', r]]);
                var L = s.parse(e.height, a);
                a.seedPrefix = n(r, [['io', r]]);
                var N = s.parse(e.opacity, a);
                this.statements[r] = p({
                  center: C,
                  radianAngle: O,
                  width: A,
                  height: L,
                  opacity: N
                });
                break;
              default:
                if (this.statements[r] = s.parse(e.latex, a),
                    this.statements[r].shouldPromoteToSlider(this.policy)) {
                  var q = e.slider;
                  a.seedPrefix = n(r, [['lm', r]]);
                  var F = E(q && q.min, a);
                  a.seedPrefix = n(r, [['lM', r]]);
                  var R = E(q && q.max, a);
                  a.seedPrefix = n(r, [['ls', r]]);
                  var V = E(q && q.step, a);
                  e.lineWidth &&
                      (a.seedPrefix = n(r, [['lw', r]]),
                       o.lineWidth = E(e.lineWidth, a)),
                      this.statements[r] =
                          f(this.statements[r],
                            {sliderMin: F, sliderMax: R, sliderStep: V})
                } else if (
                    e.polarDomain && e.polarDomain.min &&
                        (a.seedPrefix = n(r, [['lm', r]]),
                         o.polarDomainMin = i(e.polarDomain.min, a)),
                    e.polarDomain && e.polarDomain.max &&
                        (a.seedPrefix = n(r, [['lM', r]]),
                         o.polarDomainMax = i(e.polarDomain.max, a)),
                    e.parametricDomain && e.parametricDomain.min &&
                        (a.seedPrefix = n(r, [['lm', r]]),
                         o.parametricDomainMin = i(e.parametricDomain.min, a)),
                    e.parametricDomain && e.parametricDomain.max &&
                        (a.seedPrefix = n(r, [['lM', r]]),
                         o.parametricDomainMax = i(e.parametricDomain.max, a)),
                    e.vizProps &&
                        (e.vizProps.axisOffset &&
                             (a.seedPrefix = n(r, [['vo', r]]),
                              o.vizAxisOffset = i(e.vizProps.axisOffset, a)),
                         e.vizProps.breadth &&
                             (a.seedPrefix = n(r, [['vb', r]]),
                              o.vizBreadth = i(e.vizProps.breadth, a))),
                    e.lineWidth &&
                        (a.seedPrefix = n(r, [['lw', r]]),
                         o.lineWidth = E(e.lineWidth, a)),
                    e.fillOpacity &&
                        (a.seedPrefix = n(r, [['fo', r]]),
                         o.fillOpacity = E(e.fillOpacity, a)),
                    e.cdf && e.cdf.show) {
                  var k = D.parseToplevelFunction(e.latex, a);
                  k && 'distribution' === k.type &&
                      (o.distributionSpec = k, a.seedPrefix = n(r, [['lm', r]]),
                       o.cdfMin = E(e.cdf.min, a),
                       a.seedPrefix = n(r, [['lM', r]]),
                       o.cdfMax = E(e.cdf.max, a))
                }
            }
            if (e.clickableInfo && e.clickableInfo.enabled &&
                    (o.clickableAssignment = E(e.clickableInfo.assignment, a),
                     o.clickableExpression = E(e.clickableInfo.expression, a)),
                this.statements[r].userData = e,
                this.statements[r].metaData = o, e.label) {
              var B = this.currentLabel[r];
              B && B.raw === e.label ||
                  (this.currentLabel[r] = _.parse(e.label))
            } else
              delete this.currentLabel[r]
          }
        }, e.removeStatement = function(e, t) {
          var r = this.statements[e];
          if (r) {
            if (this.markExportsDirty(e), r.isTable) {
              var n = this;
              r.getAllIds().forEach(function(e) {
                n._notifyGraphRemoved(e, t)
              })
            } else
              this._notifyGraphRemoved(e, t);
            delete this.currentLabel[e], delete this.statements[e],
                delete this.analysis[e]
          }
        }, e.invalidate = function() {
          for (var e in this.statements)
            this.statements.hasOwnProperty(e) && this.markAsDirtyRoot(e);
          this.currentStatus = {}, this.analysis = {},
          this.parent_frame = L[this.evaluationMode].getFrame({
            restrictedFunctions: this.restrictedFunctions,
            forceEnableGeometryFunctions: this.forceEnableGeometryFunctions,
            replaceRoundWithReciprocal: this.replaceRoundWithReciprocal,
            distributions: this.distributions,
            additionalFunctions: this.additionalFunctions,
            trigAngleMultiplier: u(this.use_degrees ? Math.PI / 180 : T(1, 1)),
            globalRandomSeed: c(this.globalRandomSeedString || '')
          }),
          this.frame = Object.create(this.parent_frame),
          this.lastFrame = Object.create(this.parent_frame),
          this.regressionFrame = Object.create(this.parent_frame)
        }, e.markExportsDirty = function(e) {
          if (this.statements[e]) {
            this.statements[e].isRegression &&
                (this.markedRegressionDirty = !0);
            for (var t = this.statements[e].getLegalExports(this.policy), r = 0;
                 r < t.length; r++)
              this.dirtyExportedSymbolRoots[t[r]] = !0
          }
        }, e.markAsDirtyRoot = function(e) {
          this.dirtyStatementRoots[e] = !0
        }, e.getFrame = function() {
          return this.updateAnalysis(), this.frame
        }, e.getAnalysis = function() {
          return this.updateAnalysis(), this.analysis
        }, e.getStatus = function(e) {
          if (this.updateAnalysis(), this.analysis[e])
            return this.analysis[e].status
        }, e.getEvaluationState = function(e) {
          if (this.updateAnalysis(), this.analysis[e])
            return this.analysis[e].evaluationState
        }, e._updateRegressions = function(e) {
          var t, r = this.frame, n = this.lastFrame, i = this.regressionFrame,
                 a = [];
          for (t in e) e.hasOwnProperty(t) && e[t].isRegression && a.push(t);
          var o = this;
          a.sort(function(e, t) {
            var r = o.statements[e].userData &&
                o.statements[e].userData.residualVariable,
                n = o.statements[t].userData &&
                o.statements[t].userData.residualVariable;
            return r && !n ? -1 : n && !r ? 1 : 0
          });
          var s = y(this.policy, e, a);
          q(s, i);
          for (var u = s.resolved, c = {}, l = 0; l < u.length; l++)
            if (t = u[l], this.statements[t].isRegression)
              this.analysis[t] = e[t].analyze(this.policy, i, r, n, c),
              this.analysis[t].exportTo(this.policy, r), delete e[t];
            else {
              var p = e[t].tryGetConcreteTree(this.policy, i);
              e[t].exportTo(this.policy, p, i),
                  c[t] = {rawTree: e[t], concreteTree: p}
            }
        }, e.buildSymbolToExpressionDirtyMap = function() {
          var e = {};
          for (var t in this.statements)
            if (this.statements.hasOwnProperty(t)) {
              var r = this.statements[t], n = r.metaData;
              F(e, t, r.getDependencies()),
                  F(e, t, r.getLegalExports(this.policy)),
                  r.isRegression && r.userData && r.userData.residualVariable &&
                  F(e, t, [I.latexToIdentifier(r.userData.residualVariable)]),
                  n.polarDomainMin &&
                  F(e, t, n.polarDomainMin.getDependencies()),
                  n.polarDomainMax &&
                  F(e, t, n.polarDomainMax.getDependencies()),
                  n.parametricDomainMin &&
                  F(e, t, n.parametricDomainMin.getDependencies()),
                  n.parametricDomainMax &&
                  F(e, t, n.parametricDomainMax.getDependencies()),
                  n.vizBinWidth && F(e, t, n.vizBinWidth.getDependencies()),
                  n.vizBinCenter && F(e, t, n.vizBinCenter.getDependencies()),
                  n.vizAxisOffset && F(e, t, n.vizAxisOffset.getDependencies()),
                  n.vizBreadth && F(e, t, n.vizBreadth.getDependencies()),
                  n.cdfMin && F(e, t, n.cdfMin.getDependencies()),
                  n.cdfMax && F(e, t, n.cdfMax.getDependencies()),
                  n.lineWidth && F(e, t, n.lineWidth.getDependencies()),
                  n.fillOpacity && F(e, t, n.fillOpacity.getDependencies()),
                  n.clickableAssignment &&
                  F(e, t, n.clickableAssignment.getDependencies()),
                  n.clickableExpression &&
                  F(e, t, n.clickableExpression.getDependencies())
            }
          return e
        }, e.getDirtyIdsAndSymbols = function(e) {
          var t, r, n, i = {}, a = {}, o = this.markedRegressionDirty, s = [],
                       u = [];
          for (t in this.dirtyStatementRoots)
            this.dirtyStatementRoots[t] && (a[t] = !0, s.push(t));
          for (n in this.dirtyExportedSymbolRoots)
            this.dirtyExportedSymbolRoots[n] && (i[n] = !0, u.push(n));
          for (; s.length || u.length;) {
            for (; s.length;) {
              t = s.pop();
              var c = this.statements[t];
              if (c) {
                c.isRegression && (o = !0);
                var l = c.getLegalExports(this.policy);
                for (r = 0; r < l.length; r++)
                  n = l[r], i[n] || (i[n] = !0, u.push(n))
              }
            }
            for (; u.length;) {
              n = u.pop();
              var p = e[n];
              if (p)
                for (r = 0; r < p.length; r++)
                  t = p[r], a[t] || (a[t] = !0, s.push(t))
            }
          }
          return {
            ids: a, symbols: i, hasDirtyRegression: o
          }
        }, e.updateAnalysis = function() {
          var e, n, i, a = this.buildSymbolToExpressionDirtyMap(),
                       o = this.getDirtyIdsAndSymbols(a);
          if (o.hasDirtyRegression) {
            i = {};
            for (e in this.statements)
              this.statements[e] && (i[e] = this.statements[e]);
            this.frame = Object.create(this.parent_frame),
            this.regressionFrame = Object.create(this.parent_frame)
          } else {
            var s = o.ids;
            i = {};
            for (e in s) this.statements[e] && (i[e] = this.statements[e]);
            var u = o.symbols;
            for (n in u)
              u[n] && (delete this.frame[n], delete this.regressionFrame[n])
          }
          for (e in i) i[e] && (this.unpublishedIds[e] = !0);
          this.markedRegressionDirty = !1, this.dirtyExportedSymbolRoots = {},
          this.dirtyStatementRoots = {};
          var c = this.analysis, l = this.frame;
          'graphing' === this.evaluationMode && this._updateRegressions(i);
          var p = y(this.policy, i);
          q(p, l);
          for (var f = p.resolved, h = 0; h < f.length; h++)
            switch (e = f[h], this.evaluationMode) {
              case 'fourFunction':
              case 'singleExpressionFourFunction':
                c[e] =
                    this.statements[e].analyzeFourFunction(this.policy, l, c),
                c[e].exportTo(this.policy, l);
                break;
              case 'scientific':
                c[e] = this.statements[e].analyzeScientific(this.policy, l, c),
                c[e].exportTo(this.policy, l);
                break;
              case 'singleExpressionScientific':
                c[e] = this.statements[e].analyzeSingleExpressionScientific(
                    this.policy, l, c),
                c[e].exportTo(this.policy, l);
                break;
              case 'graphing':
              case 'graphing_3d':
                if (l.r) {
                  var d = Object.create(l);
                  if (d.r = m('r'),
                      c[e] = this.statements[e].analyze(this.policy, d, c),
                      c[e].getGraphMode() === v.POLAR) {
                    c[e].exportTo(this.policy, l);
                    continue
                  }
                }
                c[e] = this.statements[e].analyze(this.policy, l, c),
                c[e].exportTo(this.policy, l)
            }
          if ('graphing' === this.evaluationMode ||
              'graphing_3d' === this.evaluationMode)
            for (h = 0; h < f.length; h++) {
              e = f[h];
              var g = c[e], b = g.evaluationState.expression_type;
              B(g, this.policy, l),
                  b !== M.POLYGON && b !== M.PARAMETRIC || k(g, this.policy, l),
                  r(g) && j(g, this.policy, l),
                  b === M.PARAMETRIC || b === M.POLAR ? z(g, this.policy, l) :
                  b === M.BOXPLOT                     ? G(g, this.policy, l) :
                                    t(g) && V(g, this.policy, l)
            }
          U(a).forEach(function(e) {
            c[e].evaluationState.depends_on_random_seed = !0
          }),
              this.lastFrame = Object.create(this.parent_frame);
          for (n in l) l.hasOwnProperty(n) && (this.lastFrame[n] = l[n])
        }
      })
    });
define('worker/workercore', ['require', 'core/math/context'], function(e) {
  'use strict';
  var t = e('core/math/context');
  return function(e) {
    var r = t();
    return {
      processChangeSet: function(t) {
        var n = r.processChangeSet(t);
        e('processChangeSet', n)
      }
    }
  }
});
define('console', ['require'], function(e) {
  var t = function() {},
      r =
          [
            'log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile',
            'profileEnd', 'time', 'timeEnd', 'group', 'groupCollapsed',
            'groupEnd', 'trace'
          ],
      n = {}, i = function(e) {
        'undefined' != typeof window && window.console && window.console[e] ?
            n[e] =
                function() {
              Function.prototype.apply.call(
                  window.console[e], window.console, arguments)
            } :
            n[e] = t
      };
  return r.forEach(i), n
});
define(
    'worker/worker', ['require', 'worker/workercore', 'console'], function(e) {
      'use strict';
      var t = e('worker/workercore'), r = {};
      e('console').log = function(e) {
        self.postMessage({log: JSON.stringify(e)})
      };
      var n = self;
      n.window = n,
      n.onmessage =
          function(e) {
        var i = e.data && e.data.connectionId;
        if (i)
          if ('destroy' === e.data.originalMessage.type)
            delete r[i];
          else {
            var a = r[i];
            a ||
                (a = t(function(e, t) {
                   n.postMessage({
                     connectionId: i,
                     originalMessage: {type: e, payload: t}
                   })
                 }),
                 r[i] = a),
                a.processChangeSet(e.data.originalMessage)
          }
      },
      n.loadMessageQueue &&
          (n.loadMessageQueue.forEach(function(e) {
            n.onmessage(e)
          }),
           delete n.loadMessageQueue)
    });
if ('undefined' == typeof window) {
  if (void 0 === requirejs) {
    importScripts('../vendor/require.js');
    importScripts('config.js');
  }
  self.loadMessageQueue = [];
  self.onmessage = function(e) {
    self.loadMessageQueue.push(e);
  };
  requirejs(['worker/worker']);
}
define('toplevel/worker', function() {});